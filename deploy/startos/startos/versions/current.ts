import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.72:0',
  releaseNotes: {
    en_US:
      'Four build libraries are pinned to versions without the reported denial-of-service issues. The running service does not use them.',
    de_DE:
      'Vier Bau-Bibliotheken stehen auf Ständen ohne die gemeldeten Absturzfehler. Der laufende Dienst nutzt sie nicht.',
    es_ES:
      'Cuatro bibliotecas de compilación quedan fijadas en versiones sin los fallos de denegación de servicio avisados. El servicio en marcha no las usa.',
    pl_PL:
      'Cztery biblioteki budowania są przypięte do wersji bez zgłoszonych błędów odmowy usługi. Działająca usługa ich nie używa.',
    fr_FR:
      'Quatre bibliothèques de construction sont figées sur des versions sans les défauts de déni de service signalés. Le service en marche ne les utilise pas.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})