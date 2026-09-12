# Scriptwerk

Studio for Bitcoin miniscript wallets: build a policy in stages, inspect the descriptor and checksum, assign keys (master / child), check it against Bitcoin Core, register it on Ledger or BitBox.

Desktop and mobile, English / German. The Bitcoin node may live on another machine.

## Features

- **Easy / Expert** — toggle in the header; Easy is the default. Expert adds the **Expert** tab (desktop and mobile): max relative timelock, structure, key reuse, miniscript operators. Easy hides that tab and the extra stage options.
- **Stages** — k-of-n, relative timelock (`older` / CSV), keys that must always co-sign (`A + (B or C)`), several recovery stages
- **Timelock ceiling (Expert)** — 65534 (default, Nunchuk-compatible) or 65535 (Bitcoin maximum). Nunchuk rejects 65535.
- **Structure (Expert)** — late or early first in the descriptor (same paths, different checksum)
- **pk / pkh and 2-of-2 (Expert)** — per stage `pk` or `pkh`; 2-of-2 as `multi` or `and_v`
- **Policy tree** — zoom; tapping a stage highlights its branch
- **Keys** — name, fingerprint, A Master / A1 Child kept separate; import via text, QR, file, USB. Each key shows used / unused; **Delete unused** button
- **Key reuse (Expert)** — Off: one fingerprint = one signing slot; import child keys A1, A2, … On: the same xpub with an incrementing derivation in several stages
- **Checksums (Expert)** — key order and derivation `0/*` vs `<0;1>/*`; search for a known checksum
- **Import / Export** — descriptor, miniscript, BSMS, Scriptwerk JSON, `scriptwerk.keys.txt` (names), BIP-388 for Ledger and BitBox (QR, file, USB). Files carry key names; QR stays comment-free.
- **Saved policies** — named copies in this browser (same name overwrites). Load restores stages, keys and expert flags.
- **Recovery sheet** — print stages, named keys, checksum QR, receive addresses and watch-only descriptor. Preview is the full document.
- **Spend-path check** — on the Descriptor tab: tap the devices you have with you. Shows which stage can spend now, which keys are missing, and how many blocks of CSV remain (from Core/Electrum height, or the last UTXO scan).
- **Bitcoin Core** — `getdescriptorinfo` via host proxy or node bridge. On StartOS: optional dependency; Scriptwerk creates RPC user `scriptwerk_xxxx` itself. Self-host + remote StartOS: use that RPC user (not the `scriptwerk` placeholder). HTTP 401 = wrong user/password; the diagnosis shows the name and password length.
- **Hardware** — Ledger Bitcoin app and BitBox02 (WebHID), demo without a device. Register the policy, then compare receive/change addresses from the device with Bitcoin Core. After a full match (or after Core accepts the descriptor): **Check UTXOs** asks Electrs/Fulcrum for the first N receive and change addresses (default 20). Bitcoin Core only derives addresses — Scriptwerk does not run `scantxoutset` (that scan times out on a Pi). On StartOS, Fulcrum (preferred) or Electrs on the same device is used automatically over the internal bridge. Self-host: set Electrum in the Node dialog, e.g. `host.local:50001`. Watch-only is the descriptor (not a single wallet xpub); cosigner account xpubs sit next to it. Copy icons on addresses and fingerprints. Ledger HMAC stays in this Scriptwerk session and does not replace Nunchuk/Sparrow. BitBox stores the policy on the device (firmware 9.15+). After a full match: check the same addresses in wallet software.
- **Self-host** — one script for Debian / Raspberry Pi (Docker or Node)
- **StartOS** — wrapper in `deploy/startos`, sideload the `.s9pk` or Community Registry

## Requirements

- Debian or Raspberry Pi OS (or Linux with Docker **or** Node)
- Optional: Bitcoin Core on the LAN (StartOS, your own node). Not required just to design.
- Browser: Chrome or Edge for USB and camera

## Install

```bash
git clone https://github.com/kwadde-cmyk/scriptwerk-startos.git
cd scriptwerk-startos
./deploy/install.sh --probe
./deploy/install.sh
```

`--probe` prints OS, occupied ports, and a port suggestion. Without `SCRIPTWERK_PORT` the script asks in the terminal.

Then e.g. `http://127.0.0.1:8081` or `http://<Pi-IP>:8081`.

Without Docker: `npm ci` + Node. Without either, the script aborts and names the Docker install.

## Update

```bash
cd scriptwerk-startos
git pull
SCRIPTWERK_PORT=8081 ./deploy/install.sh
```

Port and RPC live in `deploy/.env` (overwritten on install). Pass the same port as before.

Stop (Docker):

```bash
docker compose --env-file deploy/.env -f deploy/docker-compose.yml down
```

Node start: PID in `/tmp/scriptwerk.pid`, log `/tmp/scriptwerk.log`.

## Parameters

| Variable / flag | Meaning |
|---|---|
| `SCRIPTWERK_PORT` | HTTP port. Default from `--probe` (often 8081 if 80/8080 are taken). |
| `BITCOIND_RPC_URL` | Node RPC, including on another machine. Empty = UI only, connect via the bridge. |
| `BITCOIND_RPC_USER` | RPC user |
| `BITCOIND_RPC_PASSWORD` | RPC password |
| `--probe` | Check the host only, do not install |
| `--dry-run` | Show port/RPC, do not start |
| `--simulate raspi` | Probe with a sample Pi |
| `--help` | Short help |

Example remote node (StartOS):

```bash
SCRIPTWERK_PORT=8081 \
BITCOIND_RPC_URL=https://node.local:57521 \
BITCOIND_RPC_USER=scriptwerk \
BITCOIND_RPC_PASSWORD='…' \
./deploy/install.sh
```

## Node without direct RPC

In the UI: **Node → Bridge**. Keep the bookmarklet/tab open on the node; Core speaks POST only. GET errors in the diagnosis are normal.

StartOS: Bitcoin Core → Interfaces → RPC LAN address (`.local` + https). Trust the root CA in the browser, then create an RPC user.

## Browser on LAN (http, no HTTPS)

Edge/Chrome do not treat `http://192.168.x.x:8081` as secure (USB, camera, LAN).

1. `edge://flags/#unsafely-treat-insecure-origin-as-secure` (Chrome: `chrome://flags/#unsafely-treat-insecure-origin-as-secure`)
2. Enable, add origin: `http://<Pi-IP>:8081`
3. Restart the browser, allow local network

Or SSH tunnel: `ssh -L 8081:127.0.0.1:8081 pi@pi4` → `http://127.0.0.1:8081`

## Nginx in front

If 80/443 already run a web server, leave Scriptwerk on 8081. Reverse-proxy with `deploy/nginx-scriptwerk.conf`: `server_name` = the DNS name, TLS cert paths, `proxy_pass` to `127.0.0.1:8081`. Do **not** `listen 8081` and do **not** `root`/`alias` the git clone (that is a 403). No subpath — the app must be `/` of that vhost. Nginx Proxy Manager: scheme http, port 8081, turn off “Block common exploits” / access lists if you get 403. Log: `sudo tail /var/log/nginx/error.log`.

## Development

```bash
npm ci
npm run dev
```

UI on port 8080. Tests: `node --experimental-strip-types --test src/lib/miniscript/miniscript.test.ts`

## StartOS

Wrapper and community docs: [`deploy/startos/README.md`](deploy/startos/README.md). Pack:

```bash
cd deploy/startos
./prepare.sh
make x86    # scriptwerk_x86_64.s9pk
make arm    # scriptwerk_aarch64.s9pk
```

In the StartOS GUI enable **Bitcoin Core** on Scriptwerk. Scriptwerk creates the RPC user `scriptwerk_xxxx` itself.

For UTXO lookup, enable **Fulcrum** (preferred) or **Electrs** on the same device. Scriptwerk talks to it over the internal StartOS network (plaintext port 50001). You do not paste the LAN `ssl://` wallet address.

Community Registry: send the public repo to [submissions@start9.com](mailto:submissions@start9.com). Tag form `v{upstream}_{downstream}` is in `deploy/startos/UPDATING.md`.

## License / notice

A tool to design and check policies. Not a wallet, not a mainnet signer without your own review. Verify descriptor and checksum on Bitcoin Core and on the device before coins sit on it.

@teh_jenz on X

---

# Deutsch

Studio für Bitcoin-Miniscript-Wallets: Policy als Stufen bauen, Descriptor und Checksumme sehen, Keys (Master/Child) zuordnen, auf Bitcoin Core prüfen, auf Ledger oder BitBox registrieren.

Desktop und Mobil, Deutsch/Englisch. Bitcoin-Node darf auf einer anderen Maschine liegen.

## Features

- **Einfach / Experte** — Umschalter in der Kopfleiste, Einfach ist Standard. Experte blendet den Tab **Experte** ein (Desktop und Mobil): max. relatives Timelock, Struktur, Key-Wiederverwendung, Miniscript-Operatoren. Einfach blendet den Tab und die erweiterten Stufen-Optionen aus.
- **Stufen** — k-von-n, relatives Timelock (`older` / CSV), Keys die immer mitunterschreiben (`A + (B oder C)`), mehrere Recovery-Stufen
- **Timelock-Maximum (Experte)** — 65534 (Default, Nunchuk-kompatibel) oder 65535 (Bitcoin-Maximum). Nunchuk lehnt 65535 ab.
- **Struktur (Experte)** — Spät oder früh zuerst im Descriptor (gleiche Pfade, andere Checksumme)
- **pk / pkh und 2-von-2 (Experte)** — je Stufe `pk` oder `pkh`; 2-von-2 als `multi` oder `and_v`
- **Policy-Baum** — Zoom, Stufen antippen hebt den Zweig hervor
- **Keys** — Name, Fingerprint, A Master / A1 Child getrennt; Import per Text, QR, Datei, USB. Jeder Key zeigt genutzt/unbenutzt; Button **Unbenutzte löschen**
- **Key-Wiederverwendung (Experte)** — Aus: ein Fingerprint = ein Signing-Slot, Child-Keys A1, A2 … importieren. An: derselbe xpub mit hochzählender Ableitung in mehreren Stufen
- **Checksummen (Experte)** — Key-Reihenfolge und Ableitung `0/*` vs `<0;1>/*`; Suche nach bekannter Checksumme
- **Import / Export** — Descriptor, Miniscript, BSMS, Scriptwerk-JSON, `scriptwerk.keys.txt` (Namen), BIP-388 für Ledger und BitBox (QR, Datei, USB). Dateien tragen Key-Namen mit; QR bleibt ohne Kommentare.
- **Gespeicherte Policies** — benannte Kopien in diesem Browser (gleicher Name überschreibt). Laden stellt Stufen, Keys und Expert-Flags wieder her.
- **Recovery-Blatt** — Stufen, benannte Keys, Checksummen-QR, Empfangsadressen und Watch-only-Descriptor. Vorschau ist das volle Dokument.
- **Ausgabepfad-Check** — im Descriptor-Tab: Geräte antippen, die du dabei hast. Zeigt, welche Stufe jetzt spendbar ist, welche Keys fehlen, und wie viele CSV-Blöcke noch fehlen (Höhe von Core/Electrum oder letzter UTXO-Scan).
- **Bitcoin Core** — `getdescriptorinfo` über Host-Proxy oder Node-Brücke. Auf StartOS: optionale Abhängigkeit; Scriptwerk legt RPC-Nutzer `scriptwerk_xxxx` selbst an. Self-host + Remote-StartOS: diesen RPC-Nutzer verwenden (nicht den Platzhalter `scriptwerk`). HTTP 401 = falscher Nutzer/Passwort; die Diagnose zeigt Name und Passwortlänge.
- **Hardware** — Ledger Bitcoin-App und BitBox02 (WebHID), Demo ohne Gerät. Policy registrieren, dann Empfangs-/Wechsel-Adressen vom Gerät mit Bitcoin Core abgleichen. Nach vollständigem Match (oder nachdem Core den Descriptor bestätigt): **Prüfe auf UTXOs** fragt Electrs/Fulcrum nach den ersten N Empfangs- und Wechseladressen (Standard 20). Bitcoin Core leitet nur Adressen ab — kein `scantxoutset` (das läuft auf einem Pi in Timeouts). Auf StartOS wird Fulcrum (bevorzugt) oder Electrs auf demselben Gerät intern angebunden. Self-host: Electrum im Node-Dialog, z. B. `host.local:50001`. Watch-only ist der Descriptor (kein einzelner Wallet-xpub); daneben die Account-xpubs der Cosigner. Kopier-Icons an Adressen und Fingerprints. Ledger-HMAC nur in dieser Scriptwerk-Session, ersetzt nicht Nunchuk/Sparrow. BitBox speichert die Policy auf dem Gerät (Firmware 9.15+). Nach vollständigem Match: dieselben Adressen in der Walletsoftware prüfen.
- **Selbst hosten** — ein Skript für Debian / Raspberry Pi (Docker oder Node)
- **StartOS** — Wrapper in `deploy/startos`, Sideload der `.s9pk` oder Community-Registry

## Voraussetzungen

- Debian oder Raspberry Pi OS (oder ein Linux mit Docker **oder** Node)
- Optional: Bitcoin Core im LAN (StartOS, eigener Node). Nicht nötig zum reinen Bauen.
- Browser: Chrome oder Edge für USB und Kamera

## Installation

```bash
git clone https://github.com/kwadde-cmyk/scriptwerk-startos.git
cd scriptwerk-startos
./deploy/install.sh --probe
./deploy/install.sh
```

`--probe` zeigt OS, belegte Ports und einen Port-Vorschlag. Ohne `SCRIPTWERK_PORT` fragt das Skript im Terminal.

Danach z. B. `http://127.0.0.1:8081` oder `http://<Pi-IP>:8081`.

Ohne Docker: `npm ci` + Node. Ohne beides bricht das Skript ab und nennt den Docker-Install.

## Aktualisieren

```bash
cd scriptwerk-startos
git pull
SCRIPTWERK_PORT=8081 ./deploy/install.sh
```

Port und RPC stehen in `deploy/.env` (wird beim Install überschrieben). Gleicher Port wie zuvor mitgeben.

Stoppen (Docker):

```bash
docker compose --env-file deploy/.env -f deploy/docker-compose.yml down
```

Node-Start: PID in `/tmp/scriptwerk.pid`, Log `/tmp/scriptwerk.log`.

## Parameter

| Variable / Flag | Bedeutung |
|---|---|
| `SCRIPTWERK_PORT` | HTTP-Port. Vorgabe aus `--probe` (oft 8081, wenn 80/8080 belegt). |
| `BITCOIND_RPC_URL` | RPC der Node, auch auf einem anderen Rechner. Leer = nur UI, Verbindung per Brücke. |
| `BITCOIND_RPC_USER` | RPC-Nutzer |
| `BITCOIND_RPC_PASSWORD` | RPC-Passwort |
| `--probe` | Nur Host prüfen, nichts installieren |
| `--dry-run` | Port/RPC anzeigen, nichts starten |
| `--simulate raspi` | Probe mit Beispiel-Pi |
| `--help` | Kurzhilfe |

Beispiel Remote-Node (StartOS):

```bash
SCRIPTWERK_PORT=8081 \
BITCOIND_RPC_URL=https://node.local:57521 \
BITCOIND_RPC_USER=scriptwerk \
BITCOIND_RPC_PASSWORD='…' \
./deploy/install.sh
```

## Node ohne direkten RPC

In der UI: **Node → Brücke**. Bookmarklet/Tab auf der Node offen lassen; Core spricht nur POST. GET-Fehler in der Diagnose sind normal.

StartOS: Bitcoin Core → Interfaces → RPC-LAN-Adresse (`.local` + https). Root-CA im Browser vertrauen, dann RPC-User anlegen.

## Browser im LAN (http, kein HTTPS)

Edge/Chrome behandeln `http://192.168.x.x:8081` nicht als sicher (USB, Kamera, LAN).

1. `edge://flags/#unsafely-treat-insecure-origin-as-secure` (Chrome: `chrome://flags/#unsafely-treat-insecure-origin-as-secure`)
2. Enable, Origin eintragen: `http://<Pi-IP>:8081`
3. Browser neu starten, lokales Netzwerk zulassen

Oder SSH-Tunnel: `ssh -L 8081:127.0.0.1:8081 pi@pi4` → `http://127.0.0.1:8081`

## Nginx davor

Wenn 80/443 schon ein Webserver ist, Scriptwerk auf 8081 lassen. Reverse-Proxy: `deploy/nginx-scriptwerk.conf` — `server_name` = DNS-Name, Zertifikatpfade, `proxy_pass` auf `127.0.0.1:8081`. **Nicht** `listen 8081`, **nicht** `root`/`alias` aufs Git-Repo (das ist 403). Kein Unterpfad, die App muss `/` dieses vhosts sein. Nginx Proxy Manager: Scheme http, Port 8081, „Block common exploits“ / Access List aus bei 403. Log: `sudo tail /var/log/nginx/error.log`.

## Entwicklung

```bash
npm ci
npm run dev
```

UI unter Port 8080. Tests: `node --experimental-strip-types --test src/lib/miniscript/miniscript.test.ts`

## StartOS

Wrapper und Community-Doku: [`deploy/startos/README.md`](deploy/startos/README.md). Packen:

```bash
cd deploy/startos
./prepare.sh
make x86    # scriptwerk_x86_64.s9pk
make arm    # scriptwerk_aarch64.s9pk
```

In der StartOS-GUI bei Scriptwerk **Bitcoin Core** einschalten. Scriptwerk legt den RPC-Nutzer `scriptwerk_xxxx` selbst an.

Für UTXOs **Fulcrum** (bevorzugt) oder **Electrs** auf demselben Gerät einschalten. Scriptwerk spricht intern mit dem Klartext-Port 50001 — nicht die LAN-`ssl://`-Adresse aus Interfaces.

Community-Registry: öffentliches Repo an [submissions@start9.com](mailto:submissions@start9.com). Tag-Form `v{upstream}_{downstream}` steht in `deploy/startos/UPDATING.md`.

## Lizenz / Hinweis

Werkzeug zum Entwerfen und Prüfen von Policies. Keine Wallet, kein Signer fürs Hauptnetz ohne eigene Prüfung. Descriptor und Checksumme an Bitcoin Core und am Gerät verifizieren, bevor Coins darauf liegen.

@teh_jenz on X
