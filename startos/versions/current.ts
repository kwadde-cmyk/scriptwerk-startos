import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.32:0',
  releaseNotes: {
    en_US:
      'Relative lock presets are 1 month, 1 year and max; a new stage starts empty. JSON export includes BIP-329 labels. Electrum reset is its own button. Docker/web installs with preconfigured RPC now open the node bridge; only this StartOS package uses the silent server proxy.',
    de_DE:
      'Relative Zeitsperren: 1 Monat, 1 Jahr, Max; neue Stufe startet leer. JSON-Export inkl. BIP-329-Labels. Eigener Knopf Electrum zurücksetzen. Docker-/Web-Install mit voreingestelltem RPC lädt die Node-Brücke; nur dieses StartOS-Paket spricht still über den Server-Proxy.',
    es_ES:
      'Presets relativos 1 mes / 1 año / máx.; etapa nueva vacía. Export JSON con etiquetas BIP-329. Reset Electrum aparte. Docker/web con RPC preconfigurado abre el puente; solo este paquete StartOS usa el proxy silencioso.',
    pl_PL:
      'Preset y względne 1 miesiąc / 1 rok / max; nowa scena pusta. Eksport JSON z BIP-329. Osobny reset Electrum. Docker/web z RPC ładuje mostek; tylko ten pakiet StartOS używa cichego proxy.',
    fr_FR:
      'Préréglages relatifs 1 mois / 1 an / max ; nouvelle étape vide. Export JSON avec libellés BIP-329. Reset Electrum séparé. Docker/web avec RPC préconfiguré charge le pont ; seul ce paquet StartOS utilise le proxy silencieux.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
