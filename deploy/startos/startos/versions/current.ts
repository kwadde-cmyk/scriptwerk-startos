import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.46:0',
  releaseNotes: {
    en_US:
      'The page starts again. The Ledger process shim is applied only in the browser bundle, not in the Node server.',
    de_DE:
      'Die Seite startet wieder. Der Ledger-Process-Shim gilt nur für den Browser, nicht für den Node-Server.',
    es_ES:
      'La página vuelve a arrancar. El reemplazo de process para Ledger solo se aplica al bundle del navegador, no al servidor Node.',
    pl_PL:
      'Strona znowu się uruchamia. Podmiana process dla Ledgera dotyczy tylko paczki przeglądarki, nie serwera Node.',
    fr_FR:
      'La page démarre à nouveau. Le correctif process pour Ledger ne s’applique qu’au bundle navigateur, pas au serveur Node.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
