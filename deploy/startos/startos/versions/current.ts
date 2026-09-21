import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.32:0',
  releaseNotes: {
    en_US:
      'Docker/web installs with preconfigured RPC now open the node bridge (certificate + CORS). Only the StartOS package uses the silent server proxy. Reset Electrum is unchanged.',
    de_DE:
      'Docker-/Web-Install mit voreingestelltem RPC lädt die Node-Brücke (Zertifikat und CORS). Nur das StartOS-Paket spricht still über den Server-Proxy. Electrum-Reset unverändert.',
    es_ES:
      'La instalación Docker/web con RPC preconfigurado abre el puente del nodo. Solo el paquete StartOS usa el proxy silencioso del servidor.',
    pl_PL:
      'Instalacja Docker/web z wstępnie ustawionym RPC ładuje mostek węzła. Tylko pakiet StartOS używa cichego proxy serwera.',
    fr_FR:
      'L’install Docker/web avec RPC préconfiguré charge le pont nœud. Seul le paquet StartOS utilise le proxy serveur silencieux.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
