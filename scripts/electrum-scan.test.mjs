import assert from "node:assert/strict";
import net from "node:net";
import test from "node:test";
import middleware from "../server/middleware/bitcoind-proxy.ts";

const DESC =
  "wpkh(xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8/0/*)";
const SPENT = "bc1qp5wfcq48h6d63wyy9qz0awtpfqwwv4sma86mhz";

function fakeElectrum() {
  return new Promise((resolve) => {
    const server = net.createServer((sock) => {
      let buf = "";
      sock.setEncoding("utf8");
      sock.on("data", (chunk) => {
        buf += chunk;
        let nl;
        while ((nl = buf.indexOf("\n")) >= 0) {
          const line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (!line.trim()) continue;
          const msg = JSON.parse(line);
          let result = null;
          if (msg.method === "server.version") result = ["ElectrumX", "1.4"];
          else if (msg.method === "blockchain.headers.subscribe") result = { height: 800000 };
          else if (msg.method === "blockchain.scripthash.listunspent") result = [];
          else if (msg.method === "blockchain.scripthash.get_history") result = [{ tx_hash: "aa", height: 1 }];
          sock.write(JSON.stringify({ jsonrpc: "2.0", id: msg.id, result }) + "\n");
        }
      });
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ port, close: () => new Promise((done) => server.close(done)) });
    });
  });
}

async function post(body) {
  const res = await middleware(
    {
      url: new URL("http://studio.local/electrum"),
      req: { method: "POST", json: async () => body },
    },
    () => {
      throw new Error("next");
    },
  );
  const text = await res.text();
  return { status: res.status, body: JSON.parse(text) };
}

test("nitro electrum derives and groups spent history", async () => {
  const fx = await fakeElectrum();
  const server = `127.0.0.1:${fx.port}`;
  try {
    const derived = await post({ derive: [{ desc: DESC, from: 0, to: 1 }], server });
    assert.equal(derived.status, 200);
    assert.equal(derived.body.result.groups.length, 1);
    assert.equal(derived.body.result.groups[0].length, 2);
    assert.deepEqual(derived.body.result.used, [[true, true]]);
    assert.equal(derived.body.result.unspents.length, 0);

    const spanned = await post({ addresses: [SPENT], spans: [1], server });
    assert.equal(spanned.status, 200);
    assert.deepEqual(spanned.body.result.used, [[true]]);
    assert.deepEqual(spanned.body.result.groups, [[SPENT]]);
    assert.equal(spanned.body.result.unspents.length, 0);
  } finally {
    await fx.close();
  }
});
