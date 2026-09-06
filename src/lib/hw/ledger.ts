import type { Bip388Policy } from "@/lib/miniscript/bip388";
import { ledgerPolicyReady } from "@/lib/miniscript/bip388";
import { alignLedgerOrigin, isHmacHex, policyCacheKey } from "./address-check.ts";
import { formatOrigin, hwErrorMessage, normalizeHwPath, pathToDerivation, type HwSession } from "./types.ts";

async function ensureBuffer() {
  const g = globalThis as unknown as { Buffer?: unknown };
  if (g.Buffer) return;
  const { Buffer } = await import("buffer");
  g.Buffer = Buffer;
}

function flipCoinType(path: string): string {
  const p = normalizeHwPath(path);
  if (p.includes("/48'/0'/")) return p.replace("/48'/0'/", "/48'/1'/");
  if (p.includes("/48'/1'/")) return p.replace("/48'/1'/", "/48'/0'/");
  return p;
}

function isFileNotFound(err: unknown): boolean {
  const msg = String((err as { message?: string })?.message || err);
  const code = (err as { statusCode?: number })?.statusCode;
  return /0x6a82|FILE_NOT_FOUND/i.test(msg) || code === 0x6a82;
}

export async function openLedgerSession(): Promise<HwSession> {
  await ensureBuffer();
  const { default: TransportWebHID } = await import("@ledgerhq/hw-transport-webhid");
  const { AppClient, WalletPolicy } = await import("ledger-bitcoin");
  const transport = await TransportWebHID.create();
  const app = new AppClient(transport);
  let info: { name: string; version: string } | null = null;
  try {
    info = await app.getAppAndVersion();
  } catch {
    /* older app */
  }
  const appName = (info?.name || "").toLowerCase();
  if (appName && !/bitcoin/i.test(appName)) {
    await transport.close().catch(() => undefined);
    throw new Error("hw.err.app");
  }
  const fingerprint = String(await app.getMasterFingerprint()).toLowerCase();
  const label = info?.name ? `Ledger · ${info.name} ${info.version}` : "Ledger";

  let coin: "0'" | "1'" = /test/i.test(appName) ? "1'" : "0'";
  if (!/test/i.test(appName)) {
    try {
      await app.getExtendedPubkey(`m/48'/${coin}/0'/2'`, false);
    } catch {
      const other = coin === "0'" ? "1'" : "0'";
      try {
        await app.getExtendedPubkey(`m/48'/${other}/0'/2'`, false);
        coin = other;
      } catch {
        /* keep guess */
      }
    }
  }

  async function pubkey(path: string): Promise<string> {
    const primary = normalizeHwPath(path);
    try {
      return await app.getExtendedPubkey(primary, true);
    } catch (err) {
      if (!isFileNotFound(err)) throw err;
      const flipped = flipCoinType(primary);
      if (flipped !== primary) {
        return await app.getExtendedPubkey(flipped, true);
      }
      throw err;
    }
  }

  function walletPolicyOf(policy: Bip388Policy) {
    const ready = ledgerPolicyReady(policy);
    if (!ready.ok) throw new Error(ready.error);
    const name = ready.policy.name.slice(0, 16);
    const keys = ready.policy.keys.map((k) => alignLedgerOrigin(k.origin, fingerprint, coin));
    if (keys.some((o) => !o)) throw new Error("hw.err.needKeys");
    return new WalletPolicy(name, ready.policy.template, keys);
  }

  let bound: { key: string; wp: InstanceType<typeof WalletPolicy>; hmacHex: string } | null = null;

  async function registerWp(policy: Bip388Policy) {
    const wp = walletPolicyOf(policy);
    const [, hmac] = await app.registerWallet(wp);
    const hmacHex = Buffer.from(hmac).toString("hex");
    if (!isHmacHex(hmacHex)) throw new Error("hw.err.needHmac");
    bound = { key: policyCacheKey(policy), wp, hmacHex };
    return hmacHex;
  }

  return {
    kind: "ledger",
    demo: false,
    label,
    fingerprint,
    product: info?.name || "Bitcoin",
    async getXpub(path: string) {
      try {
        const p = normalizeHwPath(path);
        const xpub = await pubkey(p);
        return {
          xpub,
          fingerprint,
          derivation: pathToDerivation(p),
          origin: formatOrigin(fingerprint, p, xpub),
        };
      } catch (err) {
        throw new Error(hwErrorMessage(err));
      }
    },
    async registerPolicy(policy: Bip388Policy) {
      try {
        const hmac = await registerWp(policy);
        return { hmac };
      } catch (err) {
        throw new Error(hwErrorMessage(err));
      }
    },
    async getWalletAddress({ policy, hmac, change, index, display }) {
      try {
        const key = policyCacheKey(policy);
        const wp = bound?.key === key ? bound.wp : walletPolicyOf(policy);
        const hex =
          bound?.key === key && isHmacHex(bound.hmacHex)
            ? bound.hmacHex
            : isHmacHex(hmac)
              ? hmac
              : "";
        if (!isHmacHex(hex)) throw new Error("hw.err.needHmac");
        try {
          return await app.getWalletAddress(wp, Buffer.from(hex, "hex"), change, index, display);
        } catch (err) {
          if (!isFileNotFound(err)) throw err;
          const hmacHex = await registerWp(policy);
          return await app.getWalletAddress(
            bound!.wp,
            Buffer.from(hmacHex, "hex"),
            change,
            index,
            display,
          );
        }
      } catch (err) {
        if (isFileNotFound(err)) throw new Error("hw.err.6a82addr");
        throw new Error(hwErrorMessage(err));
      }
    },
    async close() {
      try {
        await transport.close();
      } catch {
        /* already gone */
      }
    },
  };
}
