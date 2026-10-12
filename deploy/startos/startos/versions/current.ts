import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.64:0',
  releaseNotes: {
    en_US:
      'The transaction QR video shows a frame counter that advances with every part, for example 3/13.',
    de_DE:
      'Das QR-Video einer Transaktion zeigt einen Framezähler, der mit jedem Teil mitläuft, zum Beispiel 3/13.',
    es_ES:
      'El vídeo QR de una transacción muestra un contador de frames que avanza con cada parte, por ejemplo 3/13.',
    pl_PL:
      'Wideo QR transakcji pokazuje licznik klatek, który idzie z każdą częścią, na przykład 3/13.',
    fr_FR:
      'La vidéo QR d’une transaction affiche un compteur d’images qui avance avec chaque partie, par exemple 3/13.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})