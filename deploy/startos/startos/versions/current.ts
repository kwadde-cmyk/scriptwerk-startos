import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.13:0',
  releaseNotes: {
    en_US:
      'Node bridge sends current RPC user/password on every call. HTTP 401 shows the username and password length. Self-host StartOS: use the RPC user from Bitcoin Core Actions, not the placeholder.',
    de_DE:
      'Node-Brücke sendet Nutzer/Passwort bei jedem RPC. HTTP 401 zeigt Nutzer und Passwortlänge. Self-host StartOS: RPC-Nutzer aus Bitcoin Core → Aktionen, nicht den Platzhalter.',
    es_ES:
      'El puente envía usuario/contraseña en cada RPC. HTTP 401 muestra usuario y longitud. StartOS autoalojado: usuario RPC de Acciones, no el marcador.',
    pl_PL:
      'Most wysyła użytkownika i hasło przy każdym RPC. HTTP 401 pokazuje nazwę i długość hasła. StartOS: użytkownik RPC z Akcji, nie placeholder.',
    fr_FR:
      'Le pont envoie identifiant/mot de passe à chaque RPC. HTTP 401 affiche le nom et la longueur. StartOS auto-hébergé : utilisateur RPC des Actions, pas le placeholder.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
