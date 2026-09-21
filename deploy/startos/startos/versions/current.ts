import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.31:0',
  releaseNotes: {
    en_US:
      'Separate Reset Electrum button — RPC reset no longer overwrites the indexer. Docker/web install asks for the Electrum URL (Fulcrum on StartOS) and stores it as the build default.',
    de_DE:
      'Eigener Knopf „Electrum zurücksetzen“ — RPC-Reset lässt den Indexer unberührt. Docker-/Web-Install fragt die Electrum-URL (Fulcrum auf StartOS) und speichert sie als Bau-Wert.',
    es_ES:
      'Botón propio para restablecer Electrum; el reset de RPC no toca el indexador. La instalación Docker/web pregunta la URL de Electrum y la guarda como valor de instalación.',
    pl_PL:
      'Osobny przycisk resetu Electrum — reset RPC nie nadpisuje indexera. Instalacja Docker/web pyta o URL Electrum i zapisuje go jako wartość z instalacji.',
    fr_FR:
      'Bouton Reset Electrum séparé — le reset RPC ne touche plus l’indexeur. L’install Docker/web demande l’URL Electrum et la stocke comme valeur d’installation.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
