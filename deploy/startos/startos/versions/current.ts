import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.53:0',
  releaseNotes: {
    en_US:
      'The transaction tab is three steps: build, finalize, and send. Finalize exports or imports a PSBT as a file or QR. USB signing tells a Ledger from a BitBox.',
    de_DE:
      'Der Transaktions-Tab hat drei Schritte: bauen, finalisieren, abschicken. Finalisieren exportiert oder importiert eine PSBT als Datei oder QR. USB erkennt Ledger und BitBox selbst.',
    es_ES:
      'La pestaña de transacción tiene tres pasos: construir, finalizar y enviar. Finalizar exporta o importa una PSBT como archivo o QR. El USB distingue Ledger y BitBox.',
    pl_PL:
      'Karta transakcji ma trzy kroki: budowa, finalizacja i wysyłka. Finalizacja eksportuje lub importuje PSBT jako plik albo QR. USB samo rozpoznaje Ledger i BitBox.',
    fr_FR:
      'L’onglet transaction a trois étapes : construire, finaliser, envoyer. Finaliser exporte ou importe une PSBT en fichier ou QR. L’USB distingue Ledger et BitBox.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
