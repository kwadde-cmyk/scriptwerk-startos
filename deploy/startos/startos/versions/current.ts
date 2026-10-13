import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.66:0',
  releaseNotes: {
    en_US: 'A coin’s tag sits at the start of that coin’s line, not on the address.',
    de_DE: 'Der Tag eines Coins steht am Anfang der Coin-Zeile, nicht an der Adresse.',
    es_ES: 'La etiqueta de una moneda va al inicio de su línea, no en la dirección.',
    pl_PL: 'Tag monety jest na początku jej wiersza, nie przy adresie.',
    fr_FR: 'Le tag d’une pièce est au début de sa ligne, pas sur l’adresse.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})