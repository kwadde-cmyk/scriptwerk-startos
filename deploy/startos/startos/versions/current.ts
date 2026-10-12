import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.60:0',
  releaseNotes: {
    en_US:
      'Recovery signing takes one key and one transport at a time. Each transaction is sent, signed, and imported before the next. File transport downloads every open PSBT in one zip. Coins that share a tag can be merged into one transaction, per coin or all at once. The Ledger registers the descriptor on the first transaction if it is not there yet.',
    de_DE:
      'Beim Signieren der Recovery ist ein Schlüssel und ein Transport an der Reihe. Jede Transaktion wird gesendet, signiert und importiert, bevor die nächste kommt. Per Datei landen alle offenen PSBTs in einer Zip. Coins mit demselben Tag können eine Transaktion werden, pro Coin oder alle auf einmal. Der Ledger registriert den Descriptor bei der ersten Transaktion, falls er noch fehlt.',
    es_ES:
      'Firmar la recuperación va de una clave y un transporte a la vez. Cada transacción se envía, se firma y se importa antes de la siguiente. Por archivo, todas las PSBT abiertas van en un zip. Las monedas con la misma etiqueta pueden juntarse en una transacción, por moneda o todas a la vez. El Ledger registra el descriptor en la primera transacción si aún no está.',
    pl_PL:
      'Podpisywanie odzyskiwania idzie po jednym kluczu i jednym transporcie. Każda transakcja jest wysyłana, podpisywana i importowana, zanim przyjdzie następna. Plik pobiera wszystkie otwarte PSBT w jednym zipie. Monety z tym samym tagiem mogą wejść do jednej transakcji, pojedynczo albo wszystkie naraz. Ledger rejestruje deskryptor przy pierwszej transakcji, jeśli go jeszcze nie ma.',
    fr_FR:
      'La signature de récupération se fait une clé et un transport à la fois. Chaque transaction est envoyée, signée et importée avant la suivante. Par fichier, toutes les PSBT ouvertes partent dans un zip. Les pièces qui partagent un tag peuvent former une seule transaction, pièce par pièce ou toutes à la fois. Le Ledger enregistre le descripteur à la première transaction s’il n’y est pas encore.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})