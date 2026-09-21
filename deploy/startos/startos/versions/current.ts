import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.30:0',
  releaseNotes: {
    en_US:
      'Relative lock presets are 1 month, 1 year and max. A new stage starts empty (no copied keys). Absolute-height presets are gone so labels do not repeat the block. JSON export includes BIP-329 labels (plus a .jsonl file). The UTXO-scan error names Electrum/Fulcrum, not scantxoutset. RPC bridge and Electrum lookup are unchanged from 0.1.29 (scan from the Scriptwerk host, e.g. Docker on a Pi, to Fulcrum).',
    de_DE:
      'Relative Zeitsperren: 1 Monat, 1 Jahr, Max. Neue Stufe startet leer (keine kopierten Keys). Keine Presets für absolute Blockhöhe — Labels wiederholen den Block nicht. JSON-Export inkl. BIP-329-Labels (plus .jsonl). UTXO-Scan-Fehler nennt Electrum/Fulcrum, nicht scantxoutset. RPC-Brücke und Electrum-Scan wie 0.1.29 (Scan vom Scriptwerk-Host, z. B. Docker auf dem Pi, zu Fulcrum).',
    es_ES:
      'Presets de bloqueo relativo: 1 mes, 1 año y máximo. Una etapa nueva empieza vacía. Sin presets de altura absoluta. La exportación JSON incluye etiquetas BIP-329 (y un .jsonl). El error de UTXO habla de Electrum/Fulcrum, no de scantxoutset. Puente RPC y Electrum igual que 0.1.29.',
    pl_PL:
      'Preset y względne: 1 miesiąc, 1 rok, max. Nowa scena zaczyna się pusta. Bez presetów absolutnej wysokości. Eksport JSON z etykietami BIP-329 (plus .jsonl). Błąd skanu UTXO mówi Electrum/Fulcrum, nie scantxoutset. Mostek RPC i Electrum jak w 0.1.29.',
    fr_FR:
      'Préréglages relatifs : 1 mois, 1 an, max. Une nouvelle étape commence vide. Plus de préréglages de hauteur absolue. L’export JSON inclut les libellés BIP-329 (et un .jsonl). L’erreur UTXO cite Electrum/Fulcrum, pas scantxoutset. Pont RPC et Electrum inchangés depuis 0.1.29.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
