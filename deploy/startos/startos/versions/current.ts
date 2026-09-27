import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.42:0',
  releaseNotes: {
    en_US:
      'With Core connected, the UTXO scan derives addresses there (the same path as single derivation) and looks them up on Electrum. The wallet field is labeled Addresses.',
    de_DE:
      'Ist Core verbunden, leitet der UTXO-Scan die Adressen dort ab (wie die Einzelableitung) und fragt sie bei Electrum ab. Das Feld im Wallet-Tab heißt Adressen.',
    es_ES:
      'Con Core conectado, el escaneo deriva las direcciones en Core y las consulta en Electrum. El campo se llama Direcciones.',
    pl_PL:
      'Przy połączeniu z Core skan wyprowadza adresy w Core i pyta o nie Electrum. Pole nazywa się Adresy.',
    fr_FR:
      'Si Core est connecté, le scan dérive les adresses dans Core et les interroge sur Electrum. Le champ s’appelle Adresses.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
