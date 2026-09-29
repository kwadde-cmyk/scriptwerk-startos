import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.54:0',
  releaseNotes: {
    en_US:
      'Docs and the StartOS description match the studio: build, finalize, and send. No seed is stored; signing stays on Ledger or BitBox.',
    de_DE:
      'Doku und StartOS-Beschreibung passen zum Studio: bauen, finalisieren, abschicken. Kein Seed; signiert wird auf Ledger oder BitBox.',
    es_ES:
      'La documentación y la descripción de StartOS coinciden con el estudio: construir, finalizar y enviar. No se guarda ninguna semilla; la firma queda en Ledger o BitBox.',
    pl_PL:
      'Dokumentacja i opis StartOS zgadzają się ze studiem: budowa, finalizacja i wysyłka. Seed nie jest przechowywany; podpis zostaje na Ledgerze lub BitBoxie.',
    fr_FR:
      'La doc et la description StartOS suivent le studio : construire, finaliser, envoyer. Aucune seed n’est stockée ; la signature reste sur Ledger ou BitBox.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
