import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { btcToSats, buildPsbt, estimateVbytes, extractSignedTx, feeFromRate, inspectSignatures, planPayments, planSpend, satsToDecimal, sequenceAndLocktime } from "./psbt.ts";

const ADDR = "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4";
const TXID = "11".repeat(32);

describe("unsigned psbt", () => {
  it("converts btc to sats without float drift", () => {
    assert.equal(btcToSats(0.1), 10_000_000);
    assert.equal(btcToSats(1.00000001), 100_000_001);
  });

  it("builds a psbt that starts with the psbt magic", () => {
    const plan = planSpend({
      coins: [{ txid: TXID, vout: 0, amountBtc: 0.01, address: ADDR }],
      payTo: ADDR,
      paySats: 900_000,
      feeSats: 10_000,
      changeAddress: ADDR,
      rbf: true,
    });
    assert.equal(plan.outputs.length, 2);
    assert.equal(plan.outputs[0]!.sats, 900_000);
    assert.equal(plan.feeSats, 10_000);
    const psbt = buildPsbt(plan);
    assert.ok(psbt.startsWith("cHNidP8"));
    assert.ok(psbt.length > 40);
  });

  it("send-all needs no change address", () => {
    const plan = planSpend({
      coins: [{ txid: TXID, vout: 1, amountBtc: 0.002, address: ADDR }],
      payTo: ADDR,
      paySats: 0,
      feeSats: 2_000,
      sendAll: true,
    });
    assert.equal(plan.outputs.length, 1);
    assert.equal(plan.outputs[0]!.sats, 200_000 - 2_000);
  });

  it("rejects a missing change address when coins are left over", () => {
    assert.throws(
      () =>
        planSpend({
          coins: [{ txid: TXID, vout: 0, amountBtc: 0.01, address: ADDR }],
          payTo: ADDR,
          paySats: 100_000,
          feeSats: 1_000,
        }),
      /tx\.err\.change/,
    );
  });

  it("builds when change is dust and flags it", () => {
    const plan = planPayments({
      coins: [{ txid: TXID, vout: 0, amountBtc: 0.001, address: ADDR }],
      payments: [{ address: ADDR, sats: 99_500 }],
      feeSats: 200,
    });
    assert.equal(plan.dustChange, true);
    assert.equal(plan.outputs.length, 1);
    assert.equal(plan.feeSats, 500);
    assert.equal(buildPsbt(plan).startsWith("cHNidP"), true);
  });

  it("prices a fee from sat/vB", () => {
    const vb = estimateVbytes({ inputs: 1, outputs: [ADDR, ADDR], sigs: 2, keys: 3 });
    assert.ok(vb > 100 && vb < 400);
    assert.equal(feeFromRate(2, vb), vb * 2);
    assert.equal(feeFromRate(0, vb), 0);
    assert.equal(satsToDecimal(100_000_001), "1.00000001");
    const report = inspectSignatures(buildPsbt(planSpend({
      coins: [{ txid: TXID, vout: 0, amountBtc: 0.002, address: ADDR }],
      payTo: ADDR,
      paySats: 0,
      feeSats: 2_000,
      sendAll: true,
    })));
    assert.equal(report.inputs.length, 1);
    assert.equal(report.inputs[0]!.pubkeys.length, 0);
    assert.equal(report.inputs[0]!.finalized, false);
  });

  it("keeps a raw signed hex and refuses an unsigned psbt", () => {
    const hex = "0200000001" + "ab".repeat(16);
    assert.equal(extractSignedTx(`  ${hex}  `), hex);
    const plan = planSpend({
      coins: [{ txid: TXID, vout: 0, amountBtc: 0.002, address: ADDR }],
      payTo: ADDR,
      paySats: 0,
      feeSats: 2_000,
      sendAll: true,
    });
    assert.throws(() => extractSignedTx(buildPsbt(plan)), /tx\.err\.unsigned/);
  });

  it("writes older() into nSequence and the tip into nLockTime", () => {
    assert.deepEqual(sequenceAndLocktime({ older: 65534, tip: 968879 }), {
      sequence: 65534,
      locktime: 968879,
    });
    assert.deepEqual(sequenceAndLocktime({ after: 800000, tip: 968879 }), {
      sequence: 0xfffffffd,
      locktime: 968879,
    });
    assert.deepEqual(sequenceAndLocktime({ after: 1_200_000, tip: 968879 }), {
      sequence: 0xfffffffd,
      locktime: 1_200_000,
    });
    const plan = planPayments({
      coins: [{ txid: TXID, vout: 0, amountBtc: 0.002, address: ADDR }],
      payments: [{ address: ADDR, sats: 100_000 }],
      feeSats: 2_000,
      changeAddress: ADDR,
      older: 65534,
      tip: 968879,
    });
    assert.equal(plan.sequence, 65534);
    assert.equal(plan.locktime, 968879);
    const raw = Buffer.from(buildPsbt(plan), "base64");
    const txLen = raw[7]!;
    const tx = raw.subarray(8, 8 + txLen);
    assert.equal(tx.subarray(42, 46).readUInt32LE(0), 65534);
    assert.equal(tx.subarray(tx.length - 4).readUInt32LE(0), 968879);
  });
});
