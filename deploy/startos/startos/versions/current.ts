import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.27:0',
  releaseNotes: {
    en_US:
      'Stages can use an absolute block height (after / CLTV) as well as relative older / CSV. Wallet coins show each stage as an open or closed lock with remaining blocks.',
    de_DE:
      'Stufen können eine absolute Blockhöhe (after / CLTV) oder relatives older / CSV nutzen. Wallet-Coins zeigen je Stufe ein offenes oder geschlossenes Schloss mit Restblöcken.',
    es_ES:
      'Las etapas admiten altura de bloque absoluta (after / CLTV) además de older / CSV relativo. Cada UTXO muestra las etapas con candado abierto o cerrado y bloques restantes.',
    pl_PL:
      'Etapy mogą używać bezwzględnej wysokości bloku (after / CLTV) oraz względnego older / CSV. Monety w Wallet pokazują każdy etap jako otwartą lub zamkniętą kłódkę z pozostałymi blokami.',
    fr_FR:
      'Les étapes acceptent une hauteur de bloc absolue (after / CLTV) en plus de older / CSV relatif. Les pièces du Wallet affichent chaque étape avec un cadenas ouvert ou fermé et les blocs restants.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
