import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.73:0',
  releaseNotes: {
    en_US:
      'Descriptions are shorter. The fee line says the size is an estimate.',
    de_DE:
      'Die Beschreibungen sind kürzer. An der Gebühr steht, dass die Größe geschätzt ist.',
    es_ES:
      'Las descripciones son más cortas. La línea de la comisión indica que el tamaño es una estimación.',
    pl_PL:
      'Opisy są krótsze. Przy opłacie widać, że rozmiar jest szacowany.',
    fr_FR:
      'Les descriptions sont plus courtes. La ligne des frais indique que la taille est une estimation.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})