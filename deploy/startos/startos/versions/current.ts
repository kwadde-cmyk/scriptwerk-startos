import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.39:0',
  releaseNotes: {
    en_US:
      'Zero change is fine. Dust change warns you to pick other UTXOs or another amount, and the transaction can still be built. Recipient address and amount stack, with a trash icon to remove a row. Build transaction, then PSBT file, QR, Ledger, and BitBox. Import a signed PSBT by QR or file. The txid copy button sits beside the id.',
    de_DE:
      'Wechselgeld 0 ist in Ordnung. Liegt es im Dust-Bereich, kommt ein Hinweis, andere UTXOs oder einen anderen Betrag zu wählen; bauen geht trotzdem. Empfänger und Betrag stehen untereinander, Entfernen ist ein Mülleimer. Transaktion bauen, darunter PSBT-Datei, QR, Ledger und BitBox. Import per QR oder Datei. Die Txid-Kopie sitzt direkt neben der Id.',
    es_ES:
      'Cambio cero vale. Si es polvo, avisa y aun así se puede construir. Destinatario y monto en columna, papelera para quitar. Construir, luego archivo PSBT, QR, Ledger y BitBox. Importar por QR o archivo. Copiar el txid va al lado.',
    pl_PL:
      'Reszta 0 jest w porządku. Dust ostrzega, a transakcję i tak można zbudować. Odbiorca i kwota jeden pod drugim, kosz zamiast usuń. Buduj, potem plik PSBT, QR, Ledger i BitBox. Import QR lub plik. Kopiowanie txid obok numeru.',
    fr_FR:
      'Une monnaie à zéro passe. En zone dust, un avertissement, et la transaction se construit quand même. Destinataire et montant l’un sous l’autre, corbeille pour retirer. Construire, puis fichier PSBT, QR, Ledger et BitBox. Import par QR ou fichier. Copier le txid juste à côté.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
