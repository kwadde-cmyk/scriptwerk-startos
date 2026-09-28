import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.47:0',
  releaseNotes: {
    en_US:
      'The node dialog and the other long panes use the same thin scrollbar as the expert tab.',
    de_DE:
      'Der Node-Dialog und die anderen langen Bereiche nutzen denselben schmalen Scrollbalken wie der Experten-Tab.',
    es_ES:
      'El diálogo del nodo y los demás paneles largos usan la misma barra de desplazamiento fina que la pestaña experto.',
    pl_PL:
      'Okno noda i pozostałe długie panele mają ten sam cienki pasek przewijania co karta eksperta.',
    fr_FR:
      'La fenêtre du nœud et les autres longs panneaux utilisent la même fine barre de défilement que l’onglet expert.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
