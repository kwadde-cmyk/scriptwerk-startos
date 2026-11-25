import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.74:0',
  releaseNotes: {
    en_US:
      'The Bitcoin RPC proxy accepts only the seven methods the app uses. Other methods are rejected.',
    de_DE:
      'Der Bitcoin-RPC-Proxy nimmt nur die sieben Methoden an, die die App nutzt. Andere werden abgelehnt.',
    es_ES:
      'El proxy RPC de Bitcoin acepta solo los siete métodos que usa la app. Los demás se rechazan.',
    pl_PL:
      'Proxy RPC Bitcoina przyjmuje tylko siedem metod, których używa aplikacja. Pozostałe są odrzucane.',
    fr_FR:
      'Le proxy RPC Bitcoin n’accepte que les sept méthodes utilisées par l’app. Les autres sont rejetées.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
