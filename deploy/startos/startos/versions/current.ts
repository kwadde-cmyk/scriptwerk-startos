import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.14:0',
  releaseNotes: {
    en_US:
      'Saved policies in the browser, printable recovery sheet, and UTXO scan (scantxoutset) after Core accepts the descriptor. Default 20 receive and change addresses. Also: reverse-proxy host allowlist.',
    de_DE:
      'Gespeicherte Policies im Browser, Recovery-Blatt zum Drucken und UTXO-Prüfung (scantxoutset), sobald Core den Descriptor bestätigt. Standard 20 Empfangs- und Wechseladressen. Dazu: Reverse-Proxy Host-Allowlist.',
    es_ES:
      'Políticas guardadas en el navegador, hoja de recuperación imprimible y escaneo UTXO (scantxoutset) tras validar el descriptor en Core. 20 direcciones por defecto.',
    pl_PL:
      'Zapisane polityki w przeglądarce, karta recovery do druku i skan UTXO (scantxoutset) po akceptacji deskryptora przez Core. Domyślnie 20 adresów.',
    fr_FR:
      'Politiques enregistrées dans le navigateur, feuille de recovery imprimable et scan UTXO (scantxoutset) une fois le descripteur validé par Core. 20 adresses par défaut.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
