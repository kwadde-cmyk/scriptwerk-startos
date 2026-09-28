import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.48:0',
  releaseNotes: {
    en_US:
      'Cleanup only. Receive and change addresses are derived at the same time during a scan, and unused helpers are gone. Signing, the PSBT and the Electrum scan are unchanged.',
    de_DE:
      'Nur Aufräumen. Empfangs- und Wechseladressen werden beim Scan gleichzeitig abgeleitet, ungenutzte Helfer sind weg. Signieren, die PSBT und der Electrum-Scan bleiben gleich.',
    es_ES:
      'Solo limpieza. Las direcciones de recepción y de cambio se derivan a la vez en un escaneo, y desaparecen ayudas sin uso. La firma, la PSBT y el escaneo Electrum no cambian.',
    pl_PL:
      'Tylko porządki. Adresy odbioru i reszty są wyprowadzane równolegle przy skanie, nieużywane pomoce zniknęły. Podpisywanie, PSBT i skan Electrum bez zmian.',
    fr_FR:
      'Nettoyage seulement. Les adresses de réception et de change sont dérivées en même temps lors d’un scan, les aides inutilisées disparaissent. Signature, PSBT et scan Electrum inchangés.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
