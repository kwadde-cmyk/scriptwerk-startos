import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.35:0',
  releaseNotes: {
    en_US:
      'Transaction tab: pick the spend path first, Max beside the amount, fee in sat/vB taken from the amount or from change. Export the PSBT as a file or QR. Import shows which signatures are present and which are still missing. Version in the banner.',
    de_DE:
      'Transaktions-Tab: zuerst den Ausgabepfad, Max neben dem Betrag, Gebühr in sat/vB vom Betrag oder vom Wechselgeld. PSBT als Datei oder QR. Import zeigt vorhandene und fehlende Signaturen. Version im Banner.',
    es_ES:
      'Pestaña de transacción: ruta primero, máximo junto al importe, comisión en sat/vB del importe o del cambio. PSBT como archivo o QR. La importación muestra firmas presentes y faltantes. Versión en el banner.',
    pl_PL:
      'Karta transakcji: najpierw ścieżka, Max przy kwocie, opłata sat/vB z kwoty lub z reszty. PSBT jako plik lub QR. Import pokazuje podpisy. Wersja na banerze.',
    fr_FR:
      'Onglet transaction : chemin d’abord, Max à côté du montant, frais en sat/vB pris sur le montant ou sur la monnaie. PSBT en fichier ou QR. L’import indique les signatures présentes et manquantes. Version dans la bannière.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
