import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.61:0',
  releaseNotes: {
    en_US:
      'Recovery has No timelock beside By stage. Coins without a timelock stay in the stage list and show when the next stage opens. One button builds every PSBT, one signs them all. Descriptor, Miniscript, BSMS and PSBT can be a still QR or a QR video (UR for transactions, Specter parts for text).',
    de_DE:
      'Die Recovery hat Ohne Timelock neben Nach Stufe. Coins ohne Timelock bleiben in der Stufenliste und zeigen, wann die nächste Stufe aufgeht. Ein Knopf erzeugt alle PSBTs, einer signiert sie. Descriptor, Miniscript, BSMS und PSBT können ein fester QR oder ein Video-QR sein (UR für Transaktionen, Specter-Teile für Text).',
    es_ES:
      'La recuperación tiene Sin timelock junto a Por etapa. Las monedas sin timelock siguen en la lista de etapas y muestran cuándo abre la siguiente. Un botón crea todas las PSBT y otro las firma. Descriptor, Miniscript, BSMS y PSBT pueden ser un QR fijo o un QR de vídeo (UR para transacciones, partes Specter para texto).',
    pl_PL:
      'Odzyskiwanie ma Bez timelocka obok Według etapu. Monety bez timelocka zostają na liście etapów i pokazują, kiedy otworzy się następny. Jeden przycisk tworzy wszystkie PSBT, drugi je podpisuje. Deskryptor, Miniscript, BSMS i PSBT mogą być nieruchomym QR albo wideo QR (UR dla transakcji, części Specter dla tekstu).',
    fr_FR:
      'La récupération a Sans timelock à côté de Par étape. Les pièces sans timelock restent dans la liste des étapes et indiquent quand la suivante s’ouvre. Un bouton crée toutes les PSBT, un autre les signe. Descripteur, Miniscript, BSMS et PSBT peuvent être un QR fixe ou une vidéo QR (UR pour les transactions, parties Specter pour le texte).',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})