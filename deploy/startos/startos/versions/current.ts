import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.65:0',
  releaseNotes: {
    en_US:
      'Wallet addresses that hold a coin show that coin’s tag at the start of the line. Used empty addresses leave the list and open from a button.',
    de_DE:
      'Wallet-Adressen mit einem Coin zeigen dessen Tag am Anfang der Zeile. Benutzte leere Adressen verlassen die Liste und öffnen sich über einen Knopf.',
    es_ES:
      'Las direcciones de la cartera que tienen una moneda muestran su etiqueta al inicio de la línea. Las direcciones usadas y vacías salen de la lista y se abren con un botón.',
    pl_PL:
      'Adresy portfela z monetą pokazują jej tag na początku wiersza. Użyte puste adresy znikają z listy i otwierają się przyciskiem.',
    fr_FR:
      'Les adresses du portefeuille qui portent une pièce montrent son tag au début de la ligne. Les adresses utilisées et vides quittent la liste et s’ouvrent par un bouton.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})