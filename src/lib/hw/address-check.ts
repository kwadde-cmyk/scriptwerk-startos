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

export function clampIndexRange(from: number, to: number): { from: number; to: number } {
  const a = Math.max(0, Math.min(999, Number.isFinite(from) ? Math.floor(from) : 0));
  const rawTo = Number.isFinite(to) ? Math.floor(to) : a;
  const b = Math.max(a, Math.min(a + 19, rawTo));
  return { from: a, to: b };
}
