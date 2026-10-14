import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.69:0',
  releaseNotes: {
    en_US:
      'Send turns on once a path is fully signed. Partial signatures from a device are turned into the final witness, so the node can take the transaction.',
    de_DE:
      'Senden wird aktiv, sobald ein Pfad vollständig signiert ist. Einzelsignaturen vom Gerät werden zum fertigen Witness, damit die Node die Transaktion annimmt.',
    es_ES:
      'Enviar se activa cuando un camino está firmado por completo. Las firmas parciales del dispositivo se convierten en el witness final para que el nodo acepte la transacción.',
    pl_PL:
      'Wyślij włącza się, gdy ścieżka jest w pełni podpisana. Częściowe podpisy z urządzenia stają się gotowym witness, żeby węzeł przyjął transakcję.',
    fr_FR:
      'Envoyer s’active dès qu’un chemin est entièrement signé. Les signatures partielles de l’appareil deviennent le witness final, pour que le nœud accepte la transaction.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})