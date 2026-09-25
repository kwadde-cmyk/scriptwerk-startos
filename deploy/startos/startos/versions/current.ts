import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.37:0',
  releaseNotes: {
    en_US:
      'BTC, sats, and auto sit in the banner. The version number stays clear of the title and the desktop controls.',
    de_DE:
      'BTC, Sats und Auto sitzen im Banner. Die Versionsnummer bleibt frei von Titel und den Desktop-Schaltern.',
    es_ES:
      'BTC, sats y auto están en el banner. La versión no tapa el título ni los controles de escritorio.',
    pl_PL:
      'BTC, sats i auto są na banerze. Numer wersji nie zasłania tytułu ani przycisków.',
    fr_FR:
      'BTC, sats et auto sont dans la bannière. Le numéro de version ne couvre ni le titre ni les commandes.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
