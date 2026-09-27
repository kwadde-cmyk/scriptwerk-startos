import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.43:0',
  releaseNotes: {
    en_US:
      'A spend writes the chosen path into the transaction: older(N) sets nSequence to N, after(H) sets nLockTime to at least H, and the locktime is the chain tip when known. The expert tab uses the same thin scrollbar as the other panes.',
    de_DE:
      'Eine Ausgabe schreibt den gewählten Pfad in die Transaktion: older(N) setzt nSequence auf N, after(H) setzt nLockTime mindestens auf H, und die Locktime ist die Blockhöhe, wenn sie bekannt ist. Der Experten-Tab nutzt denselben schmalen Scrollbalken wie die anderen Bereiche.',
    es_ES:
      'Un gasto escribe la ruta elegida: older(N) pone nSequence en N, after(H) pone nLockTime al menos en H, y la locktime es la altura si se conoce. La pestaña experto usa la misma barra de desplazamiento fina.',
    pl_PL:
      'Wydanie zapisuje wybraną ścieżkę: older(N) ustawia nSequence na N, after(H) ustawia nLockTime co najmniej na H, a locktime to wysokość, gdy jest znana. Karta eksperta ma ten sam cienki pasek przewijania.',
    fr_FR:
      'Une dépense écrit le chemin choisi : older(N) met nSequence à N, after(H) met nLockTime au moins à H, et le locktime est la hauteur si elle est connue. L’onglet expert utilise la même fine barre de défilement.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
