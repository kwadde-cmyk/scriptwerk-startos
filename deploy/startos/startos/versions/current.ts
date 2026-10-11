import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.59:0',
  releaseNotes: {
    en_US:
      'Stage recovery can move every coin that is spendable now, so a stage can be reset before the next one opens. Choose one stage or all open coins. Marked keys select the coins they can move; marked coins show the keys they need. Descriptor check and loading UTXOs are on Build. The Check tab is gone.',
    de_DE:
      'Die Stufen-Recovery bewegt jeden Coin, der jetzt ausgebbar ist, damit eine Stufe vor dem Öffnen der nächsten zurückgesetzt werden kann. Eine Stufe oder alle offenen Coins. Markierte Schlüssel wählen die passenden Coins; markierte Coins zeigen die nötigen Schlüssel. Descriptor prüfen und UTXOs laden stehen unter Erstellen. Der Tab Prüfen entfällt.',
    es_ES:
      'La recuperación por etapas mueve cada moneda que ya se puede gastar, para reiniciar una etapa antes de que abra la siguiente. Una etapa o todas las monedas abiertas. Las claves marcadas eligen esas monedas; las monedas marcadas muestran las claves necesarias. Comprobar el descriptor y cargar UTXOs está en Build. La pestaña Check desaparece.',
    pl_PL:
      'Odzyskiwanie etapów przenosi każdą monetę, którą da się teraz wydać, żeby zresetować etap, zanim otworzy się następny. Jeden etap albo wszystkie otwarte monety. Zaznaczone klucze wybierają te monety; zaznaczone monety pokazują potrzebne klucze. Sprawdzenie deskryptora i wczytanie UTXO jest w Build. Zakładka Check znika.',
    fr_FR:
      'La récupération par étape déplace chaque pièce dépensable maintenant, pour remettre une étape à zéro avant que la suivante s’ouvre. Une étape ou toutes les pièces ouvertes. Les clés cochées sélectionnent ces pièces ; les pièces cochées indiquent les clés nécessaires. Vérifier le descripteur et charger les UTXO se fait dans Build. L’onglet Check disparaît.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})