import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.38:0',
  releaseNotes: {
    en_US:
      'Since 0.1.33: Transaction tab for send and timelock recovery. Pick a spend path, then UTXOs (all / no timelock / none), with block height while a coin is locked. Max, fee in sat/vB from the amount or from change, change address from the wallet. Export PSBT as file or QR; import shows which signatures are present. BTC/sats/auto and the version sit in the banner. Wallet scan uses Electrum only; if Core is connected, derived addresses are checked against it.',
    de_DE:
      'Seit 0.1.33: Transaktions-Tab für Senden und Timelock-Recovery. Zuerst Ausgabepfad, dann UTXOs (Alle / Ohne Timelock / Keine), mit Blockhöhe solange ein Coin gesperrt ist. Max, Gebühr in sat/vB vom Betrag oder vom Wechselgeld, Wechseladresse aus der Wallet. PSBT als Datei oder QR; der Import zeigt vorhandene und fehlende Signaturen. BTC/Sats/Auto und die Version im Banner. Der Wallet-Scan braucht nur Electrum; ist Core verbunden, werden die Adressen damit abgeglichen.',
    es_ES:
      'Desde 0.1.33: pestaña de transacción para enviar y recuperar tras el timelock. Ruta, UTXOs (todas / sin timelock / ninguna) y altura si sigue bloqueada. Máximo, comisión sat/vB del importe o del cambio, cambio desde el monedero. PSBT como archivo o QR; el import muestra firmas. BTC/sats/auto y versión en el banner. El escaneo solo necesita Electrum; si Core está conectado, se comparan las direcciones.',
    pl_PL:
      'Od 0.1.33: karta transakcji (wysyłka i recovery po timelocku). Ścieżka, UTXO (wszystkie / bez timelocka / żadne) i wysokość bloku, gdy moneta jest zablokowana. Max, opłata sat/vB z kwoty lub reszty, reszta z portfela. PSBT jako plik lub QR; import pokazuje podpisy. BTC/sats/auto i wersja na banerze. Skan tylko przez Electrum; przy połączeniu z Core adresy są sprawdzane.',
    fr_FR:
      'Depuis 0.1.33 : onglet transaction pour envoi et recovery après timelock. Chemin, UTXO (toutes / sans timelock / aucune) et hauteur tant qu’une pièce est verrouillée. Max, frais sat/vB sur le montant ou la monnaie, monnaie depuis le wallet. PSBT en fichier ou QR ; l’import indique les signatures. BTC/sats/auto et version dans la bannière. Le scan n’a besoin que d’Electrum ; si Core est connecté, les adresses sont comparées.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
