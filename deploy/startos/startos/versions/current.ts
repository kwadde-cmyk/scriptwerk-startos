import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.63:0',
  releaseNotes: {
    en_US:
      'Transaction QR video keeps playing every fountain part. Specter DIY can finish a PSBT that needs more than eight frames, in recovery and in a manual transaction.',
    de_DE:
      'Das QR-Video einer Transaktion spielt alle Fountain-Teile. Specter DIY kann eine PSBT zu Ende lesen, die mehr als acht Frames braucht, in der Recovery und bei einer manuellen Transaktion.',
    es_ES:
      'El vídeo QR de una transacción sigue con todas las partes fountain. Specter DIY puede terminar una PSBT que necesita más de ocho frames, en recuperación y en una transacción manual.',
    pl_PL:
      'Wideo QR transakcji odtwarza wszystkie części fountain. Specter DIY może dokończyć PSBT, które potrzebuje więcej niż osiem klatek, przy odzyskiwaniu i przy ręcznej transakcji.',
    fr_FR:
      'La vidéo QR d’une transaction joue toutes les parties fountain. Specter DIY peut finir une PSBT qui demande plus de huit images, en récupération et pour une transaction manuelle.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})