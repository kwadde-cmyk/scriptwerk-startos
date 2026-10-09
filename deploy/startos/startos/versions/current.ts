import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.57:0',
  releaseNotes: {
    en_US:
      'One key and no timelock is native SegWit singlesig (wpkh); an imported wsh(pk) stays that descriptor. Finalize can delete the loaded PSBT. Electrum and RPC may be a remote server; the dialog warns that you have to trust it.',
    de_DE:
      'Ein Key ohne Timelock ist natives SegWit-Singlesig (wpkh); ein importiertes wsh(pk) bleibt dieser Descriptor. Finalisieren kann die geladene PSBT löschen. Electrum und RPC dürfen ein Remote-Server sein; der Dialog warnt, dass du ihm vertrauen musst.',
    es_ES:
      'Una clave sin bloqueo temporal es singlesig SegWit nativo (wpkh); un wsh(pk) importado se conserva. Finalizar puede borrar la PSBT cargada. Electrum y RPC pueden ser un servidor remoto; el diálogo avisa de que hay que confiar en él.',
    pl_PL:
      'Jeden klucz bez blokady czasowej to natywny singlesig SegWit (wpkh); zaimportowane wsh(pk) zostaje tym deskryptorem. Finalizacja może usunąć wczytane PSBT. Electrum i RPC mogą być zdalnym serwerem; okno ostrzega, że trzeba mu ufać.',
    fr_FR:
      'Une clé sans verrou temporel est un singlesig SegWit natif (wpkh) ; un wsh(pk) importé reste ce descripteur. Finaliser peut effacer la PSBT chargée. Electrum et RPC peuvent être un serveur distant ; le dialogue avertit qu’il faut lui faire confiance.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})