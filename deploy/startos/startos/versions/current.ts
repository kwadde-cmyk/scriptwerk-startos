import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.55:0',
  releaseNotes: {
    en_US:
      'Amounts use the unit icon only. The fee is sat/vB or absolute sats, and the other value is calculated. Loading or importing a policy clears the previous UTXO list. Icon buttons have tooltips.',
    de_DE:
      'Beträge zeigen nur noch das Einheiten-Icon. Die Gebühr ist sat/vB oder absolute sats, der andere Wert wird ausgerechnet. Laden oder Import leert die alte UTXO-Liste. Icon-Buttons haben Tooltips.',
    es_ES:
      'Los importes muestran solo el icono de unidad. La comisión es sat/vB o sats absolutos; el otro valor se calcula. Cargar o importar una policy borra la lista de UTXO anterior. Los botones de icono tienen tooltips.',
    pl_PL:
      'Kwoty pokazują tylko ikonę jednostki. Opłata to sat/vB albo sats absolutne; druga wartość jest liczona. Wczytanie lub import policy czyści poprzednią listę UTXO. Przyciski z ikonami mają podpowiedzi.',
    fr_FR:
      'Les montants n’affichent que l’icône d’unité. Les frais sont en sat/vB ou en sats absolus, l’autre valeur est calculée. Charger ou importer une policy vide la liste d’UTXO précédente. Les boutons icône ont des infobulles.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
