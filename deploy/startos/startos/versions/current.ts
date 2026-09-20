import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.28:0',
  releaseNotes: {
    en_US:
      'Wallet no longer shows another policy’s balance after addresses change. New designs are titled New / unsaved; a saved policy you edit shows modified until you save.',
    de_DE:
      'Die Wallet zeigt nach Adresswechsel nicht mehr den Stand einer anderen Policy. Neue Designs heißen Neu / ungespeichert; eine gespeicherte, die du änderst, zeigt geändert bis zum Speichern.',
    es_ES:
      'La cartera no muestra el saldo de otra política al cambiar las direcciones. Los diseños nuevos aparecen como New / unsaved; una guardada que editas muestra modified hasta guardar.',
    pl_PL:
      'Portfel nie pokazuje salda innej polityki po zmianie adresów. Nowe projekty to New / unsaved; zapisana i zmieniona pokazuje modified do zapisu.',
    fr_FR:
      'Le portefeuille n’affiche plus le solde d’une autre politique après un changement d’adresses. Un nouveau design s’intitule New / unsaved ; une politique enregistrée puis modifiée affiche modified jusqu’à l’enregistrement.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
