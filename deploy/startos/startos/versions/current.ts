import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.58:0',
  releaseNotes: {
    en_US:
      'BSMS export matches Nunchuk: the path stays in the descriptor, the third line is "No path restrictions", and the fourth line is the first receive address. Key names live only in the keys file and wallet.json. Coin tags are in that JSON and in the separate labels file. Import asks before replacing a tag. Ledger and BitBox JSON files are no longer downloaded.',
    de_DE:
      'BSMS-Export wie Nunchuk: der Pfad bleibt im Descriptor, die dritte Zeile ist „No path restrictions“, die vierte die erste Empfangsadresse. Key-Namen nur in der Keys-Datei und in wallet.json. Coin-Tags stehen in dieser JSON und in der Labels-Datei. Der Import fragt, bevor ein Tag überschrieben wird. Ledger- und BitBox-JSON-Dateien entfallen.',
    es_ES:
      'La exportación BSMS sigue a Nunchuk: la ruta queda en el descriptor, la tercera línea es "No path restrictions" y la cuarta es la primera dirección de recepción. Los nombres de las claves solo van en el archivo de claves y en wallet.json. Las etiquetas de monedas van en ese JSON y en el archivo de etiquetas. La importación pregunta antes de sustituir una etiqueta. Ya no se descargan archivos JSON de Ledger ni BitBox.',
    pl_PL:
      'Eksport BSMS jak w Nunchuk: ścieżka zostaje w deskryptorze, trzecia linia to „No path restrictions”, czwarta to pierwszy adres odbioru. Nazwy kluczy tylko w pliku kluczy i w wallet.json. Tagi monet są w tym JSON i w osobnym pliku etykiet. Import pyta, zanim nadpisze tag. Pliki JSON Ledger i BitBox nie są już pobierane.',
    fr_FR:
      'L’export BSMS suit Nunchuk : le chemin reste dans le descripteur, la troisième ligne est « No path restrictions » et la quatrième est la première adresse de réception. Les noms de clés ne sont que dans le fichier de clés et wallet.json. Les tags de pièces sont dans ce JSON et dans le fichier d’étiquettes. L’import demande avant de remplacer un tag. Les fichiers JSON Ledger et BitBox ne sont plus téléchargés.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})