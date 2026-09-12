import { sdk } from './sdk'

const ELECTRUM_PORT = 50001

const CANDIDATES: { packageId: string; hostId: string; source: string }[] = [
  { packageId: 'fulcrum', hostId: 'main', source: 'fulcrum' },
  { packageId: 'electrs', hostId: 'electrum', source: 'electrs' },
]

function asHostPort(addr: unknown): string | null {
  if (addr == null || addr === '') return null
  if (typeof addr === 'string') {
    const t = addr.replace(/^https?:\/\//i, '').replace(/\/+$/, '')
    if (!t) return null
    return t.includes(':') ? t : `${t}:${ELECTRUM_PORT}`
  }
  if (typeof addr === 'object') {
    const o = addr as { host?: string; hostname?: string; port?: number | string }
    const host = String(o.host || o.hostname || '').trim()
    if (!host) return null
    const port = o.port != null && String(o.port) ? String(o.port) : String(ELECTRUM_PORT)
    return `${host}:${port}`
  }
  return null
}

/** Plaintext Electrum on the StartOS service bridge (LAN TLS is not this). */
export async function resolveLocalElectrum(
  effects: Parameters<(typeof sdk)['host']['getBridgeAddress']>[0],
): Promise<{ url: string; source: string } | null> {
  for (const c of CANDIDATES) {
    try {
      const addr = await sdk.host
        .getBridgeAddress(effects, {
          packageId: c.packageId,
          hostId: c.hostId,
          internalPort: ELECTRUM_PORT,
        })
        .once()
      const url = asHostPort(addr)
      if (url) return { url, source: c.source }
    } catch {
      /* not installed */
    }
  }
  return null
}
