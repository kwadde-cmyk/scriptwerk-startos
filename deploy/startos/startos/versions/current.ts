import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.16:0',
  releaseNotes: {
    en_US:
      'On StartOS, UTXO lookup uses Fulcrum or Electrs on this device over the internal bridge. No LAN ssl:// address needed. Self-host still enters Electrum in the Node dialog.',
    de_DE:
      'Auf StartOS nutzt die UTXO-Prüfung Fulcrum oder Electrs auf diesem Gerät über die interne Brücke. Keine LAN-ssl://-Adresse nötig. Self-host trägt Electrum weiter im Node-Dialog ein.',
    es_ES:
      'En StartOS, UTXO usa Fulcrum o Electrs de este dispositivo por el puente interno. Sin dirección ssl:// de LAN.',
    pl_PL:
      'Na StartOS skan UTXO używa Fulcrum lub Electrs na tym urządzeniu przez most wewnętrzny.',
    fr_FR:
      'Sur StartOS, les UTXO passent par Fulcrum ou Electrs de cet appareil via le pont interne.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
