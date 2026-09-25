import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.34:0',
  releaseNotes: {
    en_US:
      'Transaction tab: pick UTXOs, several recipients with QR, change address from the wallet, fee in sat/vB. Recovery is one PSBT per coin after the timelock, no address reuse. Sign on Ledger or BitBox, or broadcast a finalized transaction to the node.',
    de_DE:
      'Transaktions-Tab: UTXOs wählen, mehrere Empfänger mit QR, Wechseladresse aus der Wallet, Gebühr in sat/vB. Recovery: eine PSBT je Coin nach dem Timelock, keine Adress-Wiederverwendung. Signieren mit Ledger oder BitBox, oder fertige Transaktion an die Node senden.',
    es_ES:
      'Pestaña de transacción: UTXOs, varios destinatarios con QR, cambio desde el monedero, comisión en sat/vB. Recuperación: una PSBT por moneda tras el timelock. Firma con Ledger o BitBox, o envía la transacción al nodo.',
    pl_PL:
      'Karta transakcji: UTXO, wielu odbiorców z QR, reszta z portfela, opłata w sat/vB. Recovery: jedna PSBT na monetę po timelocku. Podpis Ledger lub BitBox, albo wysyłka do węzła.',
    fr_FR:
      'Onglet transaction : UTXO, plusieurs destinataires avec QR, monnaie depuis le wallet, frais en sat/vB. Recovery : une PSBT par pièce après le timelock. Signature Ledger ou BitBox, ou diffusion vers le nœud.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
