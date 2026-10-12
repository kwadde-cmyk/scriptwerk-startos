import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.62:0',
  releaseNotes: {
    en_US:
      'Recovery signing shows a real QR video, and the code is larger. The sign dialog uses the app scrollbar. Checking UTXOs sits in the watch-only card on the Wallet tab.',
    de_DE:
      'Beim Signieren der Recovery läuft ein echtes QR-Video, und der Code ist größer. Der Signier-Dialog nutzt den Scrollbalken der App. UTXOs prüfen steht in der Watch-only-Kachel im Tab Wallet.',
    es_ES:
      'Firmar la recuperación muestra un vídeo QR de verdad y el código es más grande. El diálogo usa la barra de desplazamiento de la app. Comprobar UTXOs está en la tarjeta watch-only de Wallet.',
    pl_PL:
      'Podpisywanie odzyskiwania pokazuje prawdziwe wideo QR, a kod jest większy. Okno używa paska przewijania aplikacji. Sprawdzanie UTXO jest na kafelku watch-only w zakładce Wallet.',
    fr_FR:
      'La signature de récupération affiche une vraie vidéo QR, et le code est plus grand. La fenêtre utilise la barre de défilement de l’app. Vérifier les UTXO se fait dans la tuile watch-only de l’onglet Wallet.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})