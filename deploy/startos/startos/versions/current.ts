import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.52:0',
  releaseNotes: {
    en_US:
      'A Ledger or BitBox signature is copied into the signed transaction. If another key already signed the same transaction, both signatures are kept together.',
    de_DE:
      'Eine Signatur vom Ledger oder der BitBox landet in der signierten Transaktion. Hat ein anderer Key dieselbe Transaktion schon signiert, bleiben beide Signaturen zusammen.',
    es_ES:
      'Una firma de Ledger o BitBox pasa a la transacción firmada. Si otra key ya firmó la misma transacción, se conservan las dos firmas juntas.',
    pl_PL:
      'Podpis z Ledgera lub BitBoxa trafia do podpisanej transakcji. Jeśli inny klucz podpisał już tę samą transakcję, oba podpisy zostają razem.',
    fr_FR:
      'Une signature Ledger ou BitBox arrive dans la transaction signée. Si une autre clé a déjà signé la même transaction, les deux signatures restent ensemble.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
