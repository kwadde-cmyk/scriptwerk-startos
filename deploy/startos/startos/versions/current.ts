import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.50:0',
  releaseNotes: {
    en_US:
      'After a Ledger or BitBox sign, Scriptwerk checks that a signature is actually in the PSBT and names the key. QR import follows a QR video (UR, BBQr, Specter) and shows which signature the chosen path still needs.',
    de_DE:
      'Nach dem Signieren mit Ledger oder BitBox prüft Scriptwerk, dass die Signatur wirklich in der PSBT steht, und nennt den Key. Der QR-Import folgt einem QR-Video (UR, BBQr, Specter) und zeigt, welche Signatur auf dem gewählten Pfad noch fehlt.',
    es_ES:
      'Tras firmar con Ledger o BitBox, Scriptwerk comprueba que la firma está en la PSBT y dice de qué key es. La importación QR sigue un QR video (UR, BBQr, Specter) y muestra qué firma falta en el camino elegido.',
    pl_PL:
      'Po podpisie Ledgerem lub BitBoxem Scriptwerk sprawdza, że podpis jest w PSBT, i podaje klucz. Import QR śledzi wideo QR (UR, BBQr, Specter) i pokazuje, którego podpisu brakuje na wybranej ścieżce.',
    fr_FR:
      'Après une signature Ledger ou BitBox, Scriptwerk vérifie que la signature est bien dans la PSBT et nomme la clé. L’import QR suit une vidéo QR (UR, BBQr, Specter) et indique quelle signature manque encore sur le chemin choisi.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
