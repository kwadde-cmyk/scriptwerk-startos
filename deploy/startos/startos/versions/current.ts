import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.68:0',
  releaseNotes: {
    en_US:
      'Before a send, one line shows the amount, destination and fee. A sent transaction is marked until the coin has left the old address, then it disappears. No history.',
    de_DE:
      'Vor dem Senden zeigt eine Zeile Betrag, Ziel und Gebühr. Eine gesendete Transaktion bleibt markiert, bis der Coin die alte Adresse verlassen hat, und verschwindet dann. Keine Historie.',
    es_ES:
      'Antes de enviar, una línea muestra importe, destino y comisión. Una transacción enviada queda marcada hasta que la moneda deja la dirección antigua y entonces desaparece. Sin historial.',
    pl_PL:
      'Przed wysłaniem jedna linia pokazuje kwotę, cel i opłatę. Wysłana transakcja jest oznaczona, aż moneta opuści stary adres, i wtedy znika. Bez historii.',
    fr_FR:
      'Avant l’envoi, une ligne montre le montant, la destination et les frais. Une transaction envoyée reste marquée jusqu’à ce que la pièce quitte l’ancienne adresse, puis elle disparaît. Pas d’historique.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})