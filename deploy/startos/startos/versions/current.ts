import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.17:0',
  releaseNotes: {
    en_US:
      'Spend-path check: tap the devices you have with you and see which stage can spend now. Faster load: no Electrum hang on open, recovery QRs only when printing.',
    de_DE:
      'Ausgabepfad-Check: Geräte antippen, die du dabei hast, und sehen welche Stufe jetzt spendbar ist. Schnelleres Laden: kein Electrum-Timeout beim Öffnen, Recovery-QRs nur beim Drucken.',
    es_ES:
      'Comprobación de rutas de gasto. Carga más rápida.',
    pl_PL:
      'Sprawdzanie ścieżek wydatku. Szybsze ładowanie.',
    fr_FR:
      'Vérification des chemins de dépense. Chargement plus rapide.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
