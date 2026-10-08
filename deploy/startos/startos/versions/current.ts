import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.56:0',
  releaseNotes: {
    en_US:
      'Production Electrum scans derive addresses and group spent history the same way as dev. PSBT export is a file or a static QR; import is a file or a QR video.',
    de_DE:
      'Electrum-Scans auf dem Produktions-Server leiten Adressen ab und gruppieren verbrauchte History wie in der Entwicklung. PSBT-Export ist eine Datei oder ein statischer QR; Import ist eine Datei oder ein QR-Video.',
    es_ES:
      'Los escaneos Electrum en producción derivan direcciones y agrupan el historial gastado igual que en desarrollo. La exportación de la PSBT es un archivo o un QR estático; la importación es un archivo o un vídeo QR.',
    pl_PL:
      'Skan Electrum na produkcji wyprowadza adresy i grupuje historię wydanych adresów tak jak w trybie deweloperskim. Eksport PSBT to plik albo statyczny kod QR; import to plik albo wideo QR.',
    fr_FR:
      'Les scans Electrum en production dérivent les adresses et regroupent l’historique dépensé comme en développement. L’export PSBT est un fichier ou un QR statique ; l’import est un fichier ou une vidéo QR.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
