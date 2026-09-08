import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.12:0',
  releaseNotes: {
    en_US:
      'Watch-only is the descriptor plus cosigner xpubs in the address check. Copy buttons on addresses and fingerprints. BitBox address comparison same as Ledger.',
    de_DE:
      'Watch-only ist der Descriptor plus Cosigner-xpubs im Adressabgleich. Kopieren für Adressen und Fingerprints. BitBox-Abgleich wie Ledger.',
    es_ES:
      'Watch-only es el descriptor más xpubs de cosignatarios. Botones de copiar en direcciones y huellas. Comparación BitBox como Ledger.',
    pl_PL:
      'Watch-only to deskryptor plus xpub współsygnatariuszy. Kopiowanie adresów i odcisków. Porównanie BitBox jak Ledger.',
    fr_FR:
      'Watch-only = descripteur plus xpubs des cosignataires. Copie des adresses et empreintes. Comparaison BitBox comme Ledger.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
