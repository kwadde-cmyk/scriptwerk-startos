import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.33:0',
  releaseNotes: {
    en_US:
      'Internal cleanup: unused props gone, spend-check coin list is stable, BIP-329 / node / miniscript tests run in npm test. Node bridge and Electrum scan unchanged.',
    de_DE:
      'Aufräumen: unbenutzte Props weg, Spend-Check-Coins stabil, BIP-329-/Node-/Miniscript-Tests in npm test. Node-Brücke und Electrum-Scan unverändert.',
    es_ES:
      'Limpieza interna: props sin uso, lista de monedas estable, tests BIP-329/nodo/miniscript en npm test. Puente y Electrum igual.',
    pl_PL:
      'Porządki: zbędne propsy, stabilna lista monet, testy BIP-329/węzeł/miniscript w npm test. Mostek i Electrum bez zmian.',
    fr_FR:
      'Nettoyage : props inutilisées, liste de pièces stable, tests BIP-329/nœud/miniscript dans npm test. Pont et Electrum inchangés.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
