import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.11:0',
  releaseNotes: {
    en_US:
      'After Ledger policy registration, derive receive/change addresses and compare them with Bitcoin Core. HMAC stays in this session only. Removed the generic “too many keys” Ledger warning.',
    de_DE:
      'Nach Ledger-Policy-Registrierung Adressen ableiten und mit Bitcoin Core abgleichen. HMAC nur in dieser Session. Pauschale Key-Anzahl-Warnung entfernt.',
    es_ES:
      'Tras registrar la política en Ledger, deriva direcciones y las compara con Bitcoin Core. HMAC solo de sesión. Sin aviso genérico por número de claves.',
    pl_PL:
      'Po rejestracji polityki na Ledgerze porównanie adresów z Bitcoin Core. HMAC tylko w sesji. Usunięto ostrzeżenie o liczbie kluczy.',
    fr_FR:
      'Après enregistrement Ledger, dérivation d’adresses et comparaison avec Bitcoin Core. HMAC de session uniquement. Plus d’avertissement générique sur le nombre de clés.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
