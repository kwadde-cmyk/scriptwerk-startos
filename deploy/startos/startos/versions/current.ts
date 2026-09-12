import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.18:0',
  releaseNotes: {
    en_US:
      'Descriptor pane splits into Build and Check. Desktop side panes can be hidden so the tree has more room.',
    de_DE:
      'Descriptor-Tab in Erstellen und Prüfen geteilt. Desktop: linke und rechte Leiste ein- und ausblendbar, mehr Platz für den Baum.',
    es_ES:
      'El descriptor se parte en Crear y Comprobar. Los paneles laterales se pueden ocultar.',
    pl_PL:
      'Karta deskryptora: Twórz i Sprawdź. Panele boczne można ukryć.',
    fr_FR:
      'Onglet descripteur : Créer et Vérifier. Les panneaux latéraux se masquent.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
