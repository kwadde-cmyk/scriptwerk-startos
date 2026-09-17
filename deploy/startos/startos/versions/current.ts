import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.26:0',
  releaseNotes: {
    en_US:
      'Frozen import keeps descriptors that do not map onto stages as watch-only (Taproot still rejected). Wallet tab lists Electrum coins with age and spendability, plus BIP-329 labels.',
    de_DE:
      'Eingefrorener Import: Descriptoren, die nicht auf Stufen passen, bleiben Watch-only (Taproot weiterhin abgelehnt). Wallet-Tab: Electrum-Coins mit Alter und Spendbarkeit, plus BIP-329-Labels.',
    es_ES:
      'Importación congelada: descriptores que no coinciden con las etapas quedan solo-lectura (Taproot sigue rechazado). Pestaña Wallet: UTXOs de Electrum con antigüedad y gastabilidad, más etiquetas BIP-329.',
    pl_PL:
      'Zamrożony import: deskryptory poza stopniami zostają watch-only (Taproot nadal odrzucany). Zakładka Wallet: UTXO z Electrum z wiekiem i możliwością wydania oraz etykiety BIP-329.',
    fr_FR:
      'Import figé : les descripteurs hors étapes restent en lecture seule (Taproot toujours refusé). Onglet Wallet : UTXO Electrum avec âge et dépensabilité, plus étiquettes BIP-329.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
