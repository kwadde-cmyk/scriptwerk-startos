import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.29:0',
  releaseNotes: {
    en_US:
      'Imported BIP-329 labels can be edited. Wallet coins sort by age, size, address index or tag (filters removed). Derive a receive or change address by index on the Check tab. Every Bitcoin address has copy plus a QR popup.',
    de_DE:
      'Importierte BIP-329-Labels lassen sich bearbeiten. Coins in der Wallet sortierst du nach Alter, Größe, Adressindex oder Tag (Filter entfernt). Im Prüfen-Tab eine Empfangs- oder Wechseladresse per Index ableiten. Jede Bitcoin-Adresse hat Kopieren und ein QR-Popup.',
    es_ES:
      'Las etiquetas BIP-329 importadas se pueden editar. Las monedas se ordenan por edad, tamaño, índice de dirección o etiqueta (sin filtros). Deriva una dirección de recepción o cambio por índice en la pestaña Check. Cada dirección Bitcoin tiene copiar y un popup QR.',
    pl_PL:
      'Zaimportowane etykiety BIP-329 można edytować. Monety sortujesz według wieku, rozmiaru, indeksu adresu lub tagu (filtry usunięte). Na karcie Check wyprowadź adres receive/change po indeksie. Każdy adres Bitcoin ma kopiowanie i popup QR.',
    fr_FR:
      'Les libellés BIP-329 importés sont éditables. Les pièces se trient par âge, taille, index d’adresse ou tag (filtres retirés). Onglet Check : dériver une adresse receive/change par index. Chaque adresse Bitcoin a copie et popup QR.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
