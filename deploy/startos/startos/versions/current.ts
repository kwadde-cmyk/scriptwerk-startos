import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.41:0',
  releaseNotes: {
    en_US:
      'UTXO scan always checks receive and change. The first window (default 20) is tested for use. If an address was used, the next window of that chain follows, up to 1000. No chain has to be selected.',
    de_DE:
      'Der UTXO-Scan prüft immer Empfang und Wechsel. Das erste Fenster (Standard 20) wird auf Benutzung geprüft. War eine Adresse benutzt, folgt das nächste Fenster dieser Kette, bis 1000. Keine Auswahl nötig.',
    es_ES:
      'El escaneo UTXO revisa siempre recepción y cambio. La primera ventana (20) mira si hubo uso; si sí, sigue la siguiente, hasta 1000. Sin elegir cadena.',
    pl_PL:
      'Skan UTXO zawsze sprawdza odbiór i resztę. Pierwsze okno (20) patrzy na użycie; jeśli było, idzie kolejne, do 1000. Bez wyboru łańcucha.',
    fr_FR:
      'Le scan UTXO regarde toujours réception et monnaie. La première fenêtre (20) teste l’usage ; si une adresse a servi, la fenêtre suivante suit, jusqu’à 1000. Aucun choix de chaîne.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
