# Scriptwerk on StartOS

After install, open **Interfaces → UI**. The studio is a website on your LAN (`.local` + StartOS TLS).

## Bitcoin Core (optional)

In **Config / Dependencies**, enable **Bitcoin Core**. Scriptwerk then:

1. Creates a unique RPC user `scriptwerk_` plus a random suffix (Core does not allow a hyphen in the name).
2. Talks to Core over the internal network — no bookmarklet.
3. Locks the Node dialog on those credentials. Unlock to point at another RPC; **Reset** restores the StartOS values.

If Core is not installed, the UI still works. Enter any RPC URL when unlocked. Core checks the descriptor and can receive a finished transaction.

## UTXOs (optional)

Enable **Fulcrum** (preferred) or **Electrs** on the same device. Scriptwerk uses the internal plaintext port 50001. Do not paste the LAN `ssl://` address from Interfaces. If neither is installed, enter an Electrum host in the Node dialog, on your LAN or a remote server. A remote Electrum or RPC host warns that you have to trust it.

## Transactions

Descriptor tab → **Tx**, three steps:

1. **Build** from scanned coins. Send, or one recovery transaction per coin whose timelock has opened.
2. **Finalize.** Export the PSBT as a file or a static QR. Import it as a file or a QR video, or sign over USB; the browser tells a Ledger from a BitBox. A trash icon deletes the loaded PSBT. A QR video (UR, BBQr, Specter) is read as a sequence, not one frame. Signatures for the same transaction stay together.
3. **Send** the finished transaction to the node, or save it as a file.

USB and the camera need desktop Chrome or Edge with WebHID. The StartOS webview cannot register or sign on hardware.

## Backup

Policy state lives in the **browser** (`localStorage`), not in the service volume. Export descriptors or BSMS before wiping the service. A StartOS backup of this package does not contain your keys. Scriptwerk does not store a seed.