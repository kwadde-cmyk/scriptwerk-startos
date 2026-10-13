import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.67:0',
  releaseNotes: {
    en_US:
      'Downloads use the policy name when one is set, and stay scriptwerk- otherwise. Recovery can send each signed transaction, or all of them.',
    de_DE:
      'Downloads nutzen den Policy-Namen, wenn einer gesetzt ist, sonst bleibt scriptwerk-. Die Recovery kann jede signierte Transaktion senden, oder alle.',
    es_ES:
      'Las descargas usan el nombre de la policy si hay uno, y si no siguen siendo scriptwerk-. La recuperación puede enviar cada transacción firmada, o todas.',
    pl_PL:
      'Pobrania używają nazwy policy, gdy jest ustawiona, inaczej zostaje scriptwerk-. Odzyskiwanie może wysłać każdą podpisaną transakcję albo wszystkie.',
    fr_FR:
      'Les téléchargements utilisent le nom de la policy s’il est défini, sinon ils restent scriptwerk-. La récupération peut envoyer chaque transaction signée, ou toutes.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})