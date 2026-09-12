import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.15:0',
  releaseNotes: {
    en_US:
      'UTXO check uses Electrs/Fulcrum (listunspent), not Bitcoin Core scantxoutset. Enter the Electrum host in the Node dialog (LAN only). Core only derives addresses.',
    de_DE:
      'UTXO-Prüfung über Electrs/Fulcrum (listunspent), nicht über scantxoutset in Core. Electrum-Host im Node-Dialog (nur Heimnetz). Core leitet nur Adressen ab.',
    es_ES:
      'La comprobación UTXO usa Electrs/Fulcrum, no scantxoutset. Indica el host Electrum en el diálogo Node (solo LAN).',
    pl_PL:
      'Skan UTXO przez Electrs/Fulcrum zamiast scantxoutset. Host Electrum w oknie Node (tylko LAN).',
    fr_FR:
      'Vérification UTXO via Electrs/Fulcrum, plus scantxoutset. Hôte Electrum dans le dialogue Node (LAN uniquement).',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
