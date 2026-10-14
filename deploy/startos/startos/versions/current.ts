import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.71:0',
  releaseNotes: {
    en_US:
      'The fee uses the full witness script, including later stages. A 0.25 sat/vB target no longer lands below the rate you chose.',
    de_DE:
      'Die Gebühr rechnet mit dem ganzen Witness-Skript, inklusive späterer Stufen. 0,25 sat/vB landet nicht mehr unter dem gewählten Satz.',
    es_ES:
      'La comisión usa el script witness completo, incluidas las etapas posteriores. Un objetivo de 0,25 sat/vB ya no queda por debajo de la tasa elegida.',
    pl_PL:
      'Opłata liczy cały skrypt witness, łącznie z późniejszymi etapami. Cel 0,25 sat/vB nie schodzi już poniżej wybranej stawki.',
    fr_FR:
      'Les frais utilisent le script witness entier, étapes suivantes comprises. Un objectif de 0,25 sat/vB ne tombe plus sous le taux choisi.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})