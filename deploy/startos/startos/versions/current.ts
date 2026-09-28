import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.49:0',
  releaseNotes: {
    en_US:
      'The node dialog scrolls again, with the thin bar. The same fix covers the hardware, export, recovery and key dialogs.',
    de_DE:
      'Der Node-Dialog scrollt wieder, mit dem schmalen Balken. Dieselbe Korrektur gilt für Hardware, Export, Recovery und den Key-Dialog.',
    es_ES:
      'El diálogo del nodo vuelve a desplazarse, con la barra fina. La misma corrección vale para hardware, exportación, recovery y el diálogo de keys.',
    pl_PL:
      'Okno noda znowu się przewija, z cienkim paskiem. Ta sama poprawka obejmuje sprzęt, eksport, recovery i okno kluczy.',
    fr_FR:
      'La fenêtre du nœud défile à nouveau, avec la barre fine. Le même correctif couvre le matériel, l’export, la recovery et le dialogue des clés.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
