import { useEffect, useMemo, useState } from "react";
import { keyHeadline } from "@/lib/miniscript/keys";
import {
  coinHeightFromConfirms,
  confirmationsAt,
  evaluateSpendPaths,
  youngestCoinHeight,
} from "@/lib/miniscript/spend-check";
import { fetchElectrumTip } from "@/lib/bitcoind/rpc";
import { useBitcoind } from "@/store/bitcoind";
import { useStudio } from "@/store/studio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useT } from "@/lib/use-t";
import { numberLocale } from "@/lib/i18n";

export function SpendCheckCard() {
  const { t, locale } = useT();
  const keys = useStudio((s) => s.keys);
  const stages = useStudio((s) => s.stages);
  const reuseKeys = useStudio((s) => s.reuseKeys);
  const selectStage = useStudio((s) => s.selectStage);
  const selectedStageId = useStudio((s) => s.selectedStageId);
  const probe = useBitcoind((s) => s.probe);
  const status = useBitcoind((s) => s.status);
  const lastUtxo = useBitcoind((s) => s.lastUtxo);
  const [present, setPresent] = useState<string[]>([]);
  const [tip, setTip] = useState(0);
  const [tipSource, setTipSource] = useState<"core" | "electrum" | "manual">("manual");
  const [confirms, setConfirms] = useState(0);
  const [busy, setBusy] = useState(false);
  const [tipError, setTipError] = useState<string | null>(null);

  const masters = useMemo(
    () => keys.filter((k) => k.name.trim()).sort((a, b) => a.name.localeCompare(b.name)),
    [keys],
  );

  const coinHeight = coinHeightFromConfirms(tip, confirms);
  const report = useMemo(
    () =>
      evaluateSpendPaths({
        stages,
        reuse: reuseKeys,
        present,
        keys,
        tip,
        coinHeight,
      }),
    [stages, reuseKeys, present, keys, tip, coinHeight],
  );

  useEffect(() => {
    if (status === "ready" && probe && probe.blocks > 0 && probe.chain !== "demo") {
      setTip(probe.blocks);
      setTipSource("core");
      setTipError(null);
      setBusy(false);
    }
  }, [status, probe]);

  async function loadElectrumTip() {
    setBusy(true);
    setTipError(null);
    try {
      const height = await fetchElectrumTip(useBitcoind.getState().electrum);
      setTip(height);
      setTipSource("electrum");
    } catch (e) {
      setTipSource("manual");
      setTipError(e instanceof Error ? e.message : "spend.err.tip");
    } finally {
      setBusy(false);
    }
  }

  function toggle(name: string) {
    setPresent((cur) => (cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name]));
  }

  function useUtxoAge() {
    if (!lastUtxo?.coinHeights.length || tip <= 0) return;
    const h = youngestCoinHeight(lastUtxo.coinHeights);
    setConfirms(confirmationsAt(tip, h));
  }

  return (
    <section className="space-y-3">
      <h2 className="text-2xs font-medium tracking-[0.14em] text-fg-subtle uppercase">{t("spend.title")}</h2>
      <p className="text-2xs text-pretty text-fg-muted">{t("spend.blurb")}</p>

      <div>
        <Label>{t("spend.have")}</Label>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {masters.map((k) => {
            const on = present.includes(k.name);
            return (
              <button
                key={k.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(k.name)}
                className={
                  on
                    ? "min-h-9 rounded-full bg-primary px-3 text-xs text-primary-foreground"
                    : "min-h-9 rounded-full border border-border px-3 text-xs text-fg-muted hover:bg-muted hover:text-fg"
                }
              >
                {keyHeadline(k)}
                <span className="ml-1.5 font-mono text-2xs opacity-70">{k.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="spend-tip">{t("spend.tip")}</Label>
          <Input
            id="spend-tip"
            type="number"
            min={0}
            value={tip || ""}
            onChange={(e) => {
              setTip(Number(e.target.value) || 0);
              setTipSource("manual");
            }}
            className="mt-1.5 font-mono text-xs"
          />
          <p className="mt-1 text-2xs text-fg-subtle">
            {busy ? t("spend.tipLoading") : t("spend.tipSrc." + tipSource)}
          </p>
          {tipSource !== "core" ? (
            <Button type="button" variant="ghost" size="sm" className="mt-1 h-7 px-2 text-2xs" onClick={() => void loadElectrumTip()} disabled={busy}>
              {t("spend.tipElectrum")}
            </Button>
          ) : null}
        </div>
        <div>
          <Label htmlFor="spend-age">{t("spend.age")}</Label>
          <Input
            id="spend-age"
            type="number"
            min={0}
            value={confirms}
            onChange={(e) => setConfirms(Math.max(0, Number(e.target.value) || 0))}
            className="mt-1.5 font-mono text-xs"
          />
          <p className="mt-1 text-2xs text-fg-subtle">{t("spend.ageHint")}</p>
        </div>
      </div>
      {lastUtxo?.coinHeights.some((h) => h > 0) ? (
        <Button type="button" variant="outline" size="sm" onClick={useUtxoAge}>
          {t("spend.fromUtxo")}
        </Button>
      ) : null}
      {tipError && tipSource === "manual" && !tip ? (
        <p className="text-2xs text-fg-muted">{t("spend.tipManual")}</p>
      ) : null}

      {!present.length ? (
        <p className="text-xs text-fg-muted">{t("spend.pick")}</p>
      ) : report.anyNow ? (
        <p className="text-xs text-ok">{t("spend.someNow")}</p>
      ) : report.anyLater ? (
        <p className="text-xs text-warn">{t("spend.keysLater")}</p>
      ) : (
        <p className="text-xs text-danger">{t("spend.none")}</p>
      )}

      <ul className="space-y-2">
        {report.stages.map((s) => {
          const selected = selectedStageId === s.stageId;
          return (
            <li key={s.stageId}>
              <button
                type="button"
                onClick={() => selectStage(s.stageId)}
                className={`w-full rounded-lg border px-3 py-2 text-left ${
                  selected ? "border-primary bg-primary/15 ring-1 ring-primary" : "border-border bg-surface"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm">
                    {t("stages.n", { n: s.index })} · {s.quorum}
                  </span>
                  <Badge variant={s.canSpendNow ? "ok" : s.canSign ? "warn" : "danger"}>
                    {s.canSpendNow
                      ? t("spend.now")
                      : s.canSign
                        ? t("spend.wait", { n: s.blocksLeft.toLocaleString(numberLocale(locale)) })
                        : t("spend.needKeys")}
                  </Badge>
                </div>
                <p className="mt-1 text-2xs text-fg-muted">
                  {s.lockOpen
                    ? t("spend.lockOpen")
                    : t("spend.lockLeft", {
                        n: s.blocksLeft.toLocaleString(numberLocale(locale)),
                        h: s.opensAt.toLocaleString(numberLocale(locale)),
                      })}
                </p>
                {s.missingMust.length ? (
                  <p className="mt-1 text-2xs text-danger">
                    {t("spend.mustHave")}: {s.missingMust.join(", ")}
                  </p>
                ) : null}
                {s.restNeed > s.restHave ? (
                  <p className="mt-1 text-2xs text-fg">
                    {t("spend.needOf", {
                      k: s.restNeed - s.restHave,
                      keys: s.restPool.join(", ") || "—",
                    })}
                  </p>
                ) : s.have.length ? (
                  <p className="mt-1 font-mono text-2xs text-fg-subtle">{s.have.join(" · ")}</p>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}