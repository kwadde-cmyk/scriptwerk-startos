import type { Bip388Policy } from "../miniscript/bip388.ts";
import { descsumCreate, stripChecksum } from "../miniscript/checksum.ts";

export type AddressKind = "receive" | "change";

export interface AddressCheckRow {
  index: number;
  kind: AddressKind;
  path: string;
  ledger: string;
  core: string;
  match: boolean;
  ledgerError?: string;
  coreError?: string;
}

export function policyCacheKey(policy: Bip388Policy): string {
  const keys = policy.keys.map((k) => k.origin || k.xpub).join("|");
  return `${policy.name}\n${policy.template}\n${keys}`;
}

export function isHmacHex(hex: string | null | undefined): hex is string {
  return Boolean(hex && /^[0-9a-f]{64}$/i.test(hex.trim()));
}

/** Device-owned key origins must use the coin type the Bitcoin app actually has. */
export function alignLedgerOrigin(origin: string, deviceFp: string, coin: "0'" | "1'"): string {
  const m = origin.match(/^\[([0-9a-fA-F]{8})\/([^\]]+)\](.+)$/);
  if (!m) return origin;
  const fp = deviceFp.replace(/^#/, "").slice(0, 8).toLowerCase();
  if (m[1]!.toLowerCase() !== fp) return origin;
  const der = m[2]!.replace(/^(48|84|86)'\/(?:0'|1')\//, `$1'/${coin}/`).replace(
    /\/(48|84|86)'\/(?:0'|1')\//g,
    `/$1'/${coin}/`,
  );
  return `[${m[1]}/${der}]${m[3]}`;
}

/** Core wants a single-branch descriptor. `<a;b>/*` → `/a/*` (receive) or `/b/*` (change). */
export function descriptorForBranch(descriptor: string, change: 0 | 1): string {
  const body = stripChecksum(descriptor);
  let next = body.replace(/\/<(\d+);(\d+)>(\/\*)?/g, (_m, a: string, b: string, star?: string) => {
    const pick = change === 0 ? a : b;
    return `/${pick}${star ?? "/*"}`;
  });
  if (next === body) {
    next = body.replace(/\/(?:\d+)\/\*/g, `/${change}/*`);
  }
  return descsumCreate(next);
}

export function chainMatches(network: "mainnet" | "testnet", chain: string | undefined): boolean {
  const c = (chain || "").toLowerCase();
  if (!c || c === "demo") return true;
  if (network === "mainnet") return c === "main" || c === "bitcoin";
  return c === "test" || c === "testnet";
}

export function allRequestedMatch(rows: AddressCheckRow[]): boolean {
  return rows.length > 0 && rows.every((r) => r.match);
}

export function bitboxAddressPath(
  policy: Bip388Policy,
  deviceFp: string,
  change: number,
  index: number,
): string {
  const fp = deviceFp.replace(/^#/, "").slice(0, 8).toLowerCase();
  const ours = policy.keys.find(
    (k) => k.fingerprint.replace(/^#/, "").slice(0, 8).toLowerCase() === fp,
  );
  if (!ours?.derivation) throw new Error("hw.err.notOurKey");
  const account = ours.derivation.replace(/^m\//, "").replace(/\/$/, "");
  return `m/${account}/${change}/${index}`;
}

export function clampIndexRange(from: number, to: number): { from: number; to: number } {
  const a = Math.max(0, Math.min(999, Number.isFinite(from) ? Math.floor(from) : 0));
  const rawTo = Number.isFinite(to) ? Math.floor(to) : a;
  const b = Math.max(a, Math.min(a + 19, rawTo));
  return { from: a, to: b };
}
