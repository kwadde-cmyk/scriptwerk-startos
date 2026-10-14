import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.70:0',
  releaseNotes: {
    en_US:
      'Send uses the branch whose locktime matches the transaction. A later stage that is also signed is no longer picked when you spend the open path.',
    de_DE:
      'Senden nimmt die Stufe, deren Locktime zur Transaktion passt. Eine später signierte Stufe wird nicht mehr gewählt, wenn der offene Pfad ausgegeben wird.',
    es_ES:
      'Enviar usa la etapa cuya locktime coincide con la transacción. Una etapa posterior que también esté firmada ya no se elige al gastar el camino abierto.',
    pl_PL:
      'Wyślij bierze etap, którego locktime pasuje do transakcji. Późniejszy podpisany etap nie jest już wybierany, gdy wydajesz otwartą ścieżkę.',
    fr_FR:
      'Envoyer prend l’étape dont le locktime correspond à la transaction. Une étape plus tardive, même signée, n’est plus choisie quand on dépense le chemin ouvert.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})