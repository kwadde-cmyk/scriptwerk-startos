import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.74:0',
  releaseNotes: {
    en_US:
      'RPC proxy now only forwards the methods Scriptwerk actually uses (getnetworkinfo, getblockchaininfo, getmininginfo, getblockcount, getdescriptorinfo, deriveaddresses). Everything else is rejected before it reaches Core.',
    de_DE:
      'Der RPC-Proxy leitet nur noch die Methoden weiter, die Scriptwerk wirklich nutzt (getnetworkinfo, getblockchaininfo, getmininginfo, getblockcount, getdescriptorinfo, deriveaddresses). Alles andere wird vor Core abgelehnt.',
    es_ES:
      'El proxy RPC ahora solo reenvía los métodos que Scriptwerk realmente usa. El resto se rechaza antes de llegar a Core.',
    pl_PL:
      'Proxy RPC przekazuje teraz tylko metody, których Scriptwerk naprawdę używa. Reszta jest odrzucana przed Core.',
    fr_FR:
      'Le proxy RPC ne transmet plus que les méthodes que Scriptwerk utilise vraiment. Le reste est rejeté avant Core.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
