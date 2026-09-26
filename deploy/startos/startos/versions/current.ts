import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.40:0',
  releaseNotes: {
    en_US:
      'The page finishes loading again. Address derivation for the Electrum scan runs on the Scriptwerk host, not in the browser. Google Fonts no longer block the first paint. Electrum is not contacted until a scan.',
    de_DE:
      'Die Seite lädt wieder fertig. Die Adress-Ableitung für den Electrum-Scan läuft auf dem Scriptwerk-Host, nicht im Browser. Google Fonts blockieren den Start nicht mehr. Electrum wird erst beim Scan gefragt.',
    es_ES:
      'La página vuelve a terminar de cargar. Las direcciones del escaneo Electrum se derivan en el host, no en el navegador. Google Fonts ya no bloquea el inicio. Electrum solo se consulta al escanear.',
    pl_PL:
      'Strona znowu kończy ładowanie. Adresy skanu Electrum liczy host, nie przeglądarka. Google Fonts nie blokuje startu. Electrum jest pytany dopiero przy skanie.',
    fr_FR:
      'La page finit de nouveau de charger. Les adresses du scan Electrum sont dérivées sur l’hôte, pas dans le navigateur. Google Fonts ne bloque plus le démarrage. Electrum n’est contacté qu’au scan.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
