import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.17:1',
  releaseNotes: {
    en_US:
      'Fulcrum and Electrs stay optional: Scriptwerk starts without them, uses Fulcrum if installed, otherwise Electrs. Neither is required to run.',
    de_DE:
      'Fulcrum und Electrs bleiben optional: Scriptwerk startet ohne sie, nutzt Fulcrum wenn installiert, sonst Electrs. Keins von beiden ist Pflicht.',
    es_ES:
      'Fulcrum y Electrs son opcionales. Scriptwerk arranca sin ellos.',
    pl_PL:
      'Fulcrum i Electrs są opcjonalne. Scriptwerk startuje bez nich.',
    fr_FR:
      'Fulcrum et Electrs restent optionnels. Scriptwerk démarre sans eux.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
