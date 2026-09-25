import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.36:0',
  releaseNotes: {
    en_US:
      'UTXO picker shows, for the chosen spend path, the block height and remaining blocks when a coin is still locked. Select all, no timelock, or none next to Use these.',
    de_DE:
      'Die UTXO-Liste zeigt zum gewählten Ausgabepfad Blockhöhe und verbleibende Blöcke, solange ein Coin gesperrt ist. Neben Übernehmen: Alle, Ohne Timelock, Keine.',
    es_ES:
      'La lista de UTXO muestra, para la ruta elegida, la altura y los bloques restantes si una moneda sigue bloqueada. Junto a usar: todas, sin timelock o ninguna.',
    pl_PL:
      'Lista UTXO pokazuje dla wybranej ścieżki wysokość bloku i pozostałe bloki, gdy moneta jest zablokowana. Obok: wszystkie, bez timelocka, żadne.',
    fr_FR:
      'La liste UTXO indique, pour le chemin choisi, la hauteur et les blocs restants si une pièce est encore verrouillée. À côté : toutes, sans timelock, aucune.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
