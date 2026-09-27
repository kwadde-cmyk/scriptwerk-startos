import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.45:0',
  releaseNotes: {
    en_US:
      'Connecting a Ledger no longer crashes with “process is not defined”. The browser build supplies the Node process fields the signing library reads while it loads.',
    de_DE:
      'Ledger verbinden stürzt nicht mehr mit „process is not defined“ ab. Der Browser-Build setzt die Node-Felder, die die Signierbibliothek beim Laden liest.',
    es_ES:
      'Conectar un Ledger ya no falla con “process is not defined”. La compilación del navegador aporta los campos de process que la biblioteca de firma lee al cargarse.',
    pl_PL:
      'Łączenie z Ledgerem nie kończy się już błędem „process is not defined”. Build przeglądarki podaje pola process, które biblioteka podpisu czyta przy starcie.',
    fr_FR:
      'Connecter un Ledger ne plante plus avec « process is not defined ». Le build navigateur fournit les champs process que la bibliothèque de signature lit au chargement.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
