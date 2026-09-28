import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.51:0',
  releaseNotes: {
    en_US:
      'The policy tree can color spend paths that are open now versus still locked, based on the chain tip and watched coins. Signature status still names a key when the PSBT has no BIP32 derivation, by matching the public key to the studio xpub.',
    de_DE:
      'Der Policy-Baum kann Ausgabepfade färben, die jetzt offen oder noch gesperrt sind — anhand der Chain-Spitze und der beobachteten Coins. Der Signaturstatus nennt den Key auch dann, wenn die PSBT keine BIP32-Ableitung trägt, indem der Public Key mit dem xpub im Studio abgeglichen wird.',
    es_ES:
      'El árbol de la policy puede colorear los caminos de gasto abiertos ahora frente a los aún bloqueados, según la punta de la cadena y las monedas vigiladas. El estado de la firma nombra la key aunque la PSBT no traiga derivación BIP32, comparando la clave pública con el xpub del estudio.',
    pl_PL:
      'Drzewo polityki może kolorować ścieżki wydania otwarte teraz i jeszcze zablokowane, według czubka łańcucha i obserwowanych coinów. Status podpisu podaje klucz także wtedy, gdy PSBT nie ma derywacji BIP32 — dopasowując klucz publiczny do xpub w studiu.',
    fr_FR:
      'L’arbre de policy peut colorer les chemins de dépense ouverts maintenant et ceux encore verrouillés, d’après la pointe de chaîne et les pièces suivies. Le statut de signature nomme la clé même si la PSBT n’a pas de dérivation BIP32, en rapprochant la clé publique de l’xpub du studio.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
