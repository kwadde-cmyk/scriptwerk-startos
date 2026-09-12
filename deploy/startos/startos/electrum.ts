import { sdk } from './sdk'

const ELECTRUM_PORT = 50001
const BRIDGE_WAIT_MS = 2500

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

export async function serviceInstalled(
  effects: Parameters<(typeof sdk)['getServiceManifest']>[0],
  packageId: string,
): Promise<boolean> {
  try {
    const manifest = await sdk.getServiceManifest(effects, packageId).once()
    return Boolean(manifest)
  } catch {
    return false
  }
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), ms)
    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      () => {
        clearTimeout(timer)
        resolve(null)
      },
    )
  })
}

/** Plaintext Electrum on the StartOS service bridge (LAN TLS is not this). Optional. */
export async function resolveLocalElectrum(
  effects: Parameters<(typeof sdk)['host']['getBridgeAddress']>[0],
): Promise<{ url: string; source: string } | null> {
  for (const c of CANDIDATES) {
    if (!(await serviceInstalled(effects, c.packageId))) continue
    const addr = await withTimeout(
      sdk.host
        .getBridgeAddress(effects, {
          packageId: c.packageId,
          hostId: c.hostId,
          internalPort: ELECTRUM_PORT,
        })
        .once(),
      BRIDGE_WAIT_MS,
    )
    const url = asHostPort(addr)
    if (url) return { url, source: c.source }
  }
  return null
}
