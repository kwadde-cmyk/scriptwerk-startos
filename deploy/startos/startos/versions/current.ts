import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.19:0',
  releaseNotes: {
    en_US:
      'Named masters show (A) like children (A1). Larger descriptor QR. Script check uses the normal button inside the connected node card.',
    de_DE:
      'Benannte Master mit (A), wie Childs (A1). Größerer Descriptor-QR. Script prüfen als normaler Button im verbundenen Node-Rahmen.',
    es_ES:
      'Los masters con nombre muestran (A). QR de descriptor más grande. Comprobar script en la tarjeta de nodo.',
    pl_PL:
      'Nazwane mastery z (A). Większy QR deskryptora. Sprawdź skrypt w ramce węzła.',
    fr_FR:
      'Les masters nommés affichent (A). QR descripteur plus grand. Vérifier le script dans le cadre du nœud.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
