import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.44:0',
  releaseNotes: {
    en_US:
      'Ledger connects over WebHID even when the device is already open, and a mistaken “open the Bitcoin app” message no longer hides a busy device. A spend PSBT now carries the witness script and BIP32 paths so Specter DIY and the Ledger Bitcoin app can recognize the wallet, and signatures stay in BIP174 order.',
    de_DE:
      'Ledger verbindet sich über WebHID auch wenn das Gerät schon offen ist, und die Meldung „Bitcoin-App öffnen“ verdeckt kein belegtes Gerät mehr. Eine Ausgabe-PSBT trägt jetzt Witness-Script und BIP32-Pfade, damit Specter DIY und die Ledger-Bitcoin-App die Wallet erkennen, und Signaturen bleiben in BIP174-Reihenfolge.',
    es_ES:
      'Ledger se conecta por WebHID aunque el dispositivo ya esté abierto, y el aviso de abrir la app Bitcoin ya no tapa un dispositivo ocupado. La PSBT de gasto incluye el witness script y las rutas BIP32 para que Specter DIY y la app Bitcoin del Ledger reconozcan la cartera, con firmas en orden BIP174.',
    pl_PL:
      'Ledger łączy się przez WebHID nawet gdy urządzenie jest już otwarte, a komunikat o aplikacji Bitcoin nie zasłania już zajętego urządzenia. PSBT wydatku zawiera witness script i ścieżki BIP32, więc Specter DIY i aplikacja Bitcoin na Ledgerze rozpoznają portfel, a podpisy zostają w kolejności BIP174.',
    fr_FR:
      'Ledger se connecte en WebHID même si l’appareil est déjà ouvert, et le message « ouvrir l’app Bitcoin » ne masque plus un appareil occupé. La PSBT de dépense porte le witness script et les chemins BIP32 pour que Specter DIY et l’app Bitcoin du Ledger reconnaissent le portefeuille, signatures en ordre BIP174.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
