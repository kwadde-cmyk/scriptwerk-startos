import { useMemo, useState } from "react";
import { compileDescriptorCached } from "@/lib/miniscript/compile";
import { formatFingerprint, keyRoleLabel, childRoleLabel, shortXpub } from "@/lib/miniscript/keys";
import { describeStageSlots } from "@/lib/miniscript/stages";
import { peekChecksum } from "@/lib/policy-library";
import { useStudio } from "@/store/studio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useT } from "@/lib/use-t";
import { ScrollText } from "lucide-react";

export function RecoverySheetButton() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="size-9" aria-label={t("recovery.title")}>
          <ScrollText />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(720px,calc(100dvh-2rem))] w-[min(640px,calc(100vw-1.5rem))] overflow-hidden print:hidden">
        <DialogHeader>
          <DialogTitle>{t("recovery.title")}</DialogTitle>
          <DialogDescription>{t("recovery.blurb")}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[min(520px,calc(100dvh-12rem))] pr-3">
          <RecoveryDocument />
        </ScrollArea>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setOpen(false);
              window.setTimeout(() => window.print(), 80);
            }}
          >
            {t("recovery.print")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function RecoveryPrintRoot() {
  return (
    <div className="print-root hidden bg-white p-0 text-black print:block">
      <RecoveryDocument print />
    </div>
  );
}

function RecoveryDocument({ print = false }: { print?: boolean }) {
  const { t, locale } = useT();
  const policyName = useStudio((s) => s.policyName);
  const root = useStudio((s) => s.root);
  const keys = useStudio((s) => s.keys);
  const stages = useStudio((s) => s.stages);
  const reuseKeys = useStudio((s) => s.reuseKeys);
  const network = useStudio((s) => s.network);
  const compiled = useMemo(
    () => compileDescriptorCached(root, keys, reuseKeys),
    [root, keys, reuseKeys],
  );
  const descriptor = compiled?.ok ? compiled.descriptor : "";
  const checksum = peekChecksum(descriptor);
  const slots = useMemo(() => describeStageSlots(stages, reuseKeys), [stages, reuseKeys]);
  const when = new Date().toLocaleString(locale === "en" ? "en-GB" : "de-DE");
  const cls = print ? "recovery-sheet mx-auto max-w-[190mm] p-2 text-[11pt] leading-snug" : "space-y-4 text-sm";

  return (
    <div className={cls}>
      <header className="border-b border-neutral-400 pb-2">
        <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-600">Scriptwerk</p>
        <h2 className="font-display text-xl font-semibold">{t("recovery.heading")}</h2>
        <p className="text-xs text-neutral-700">
          {policyName || "Scriptwerk"} · {network} · {when}
        </p>
      </header>

      <section className="mt-3">
        <h3 className="text-[10px] font-semibold tracking-wide uppercase">{t("recovery.checksum")}</h3>
        <p className="font-mono text-lg">{checksum ? `#${checksum}` : "—"}</p>
        <p className="text-xs text-neutral-600">{t("recovery.checksumHint")}</p>
      </section>

      <section className="mt-3">
        <h3 className="text-[10px] font-semibold tracking-wide uppercase">{t("recovery.stages")}</h3>
        <ol className="mt-1 list-decimal space-y-1 pl-5">
          {slots.map((s) => {
            const stage = stages[s.index - 1];
            const must = stage?.required?.length ? stage.required.join(", ") : "";
            const delay =
              s.delay <= 0
                ? t("recovery.now")
                : `${s.delay} ${t("recovery.blocks")}${s.delay >= 144 ? ` ≈ ${Math.round(s.delay / 144)} ${t("recovery.days")}` : ""}`;
            return (
              <li key={s.index}>
                <span className="font-medium">{s.quorum}</span>
                {" · "}
                {delay}
                {" · "}
                {s.signers.map((x) => x.role).join(", ")}
                {must ? ` · ${t("recovery.must")}: ${must}` : ""}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-3">
        <h3 className="text-[10px] font-semibold tracking-wide uppercase">{t("recovery.keys")}</h3>
        <ul className="mt-1 space-y-2">
          {keys.map((k) => (
            <li key={k.id} className="border-b border-neutral-200 pb-1 font-mono text-[10px]">
              <div>
                <span className="font-sans font-medium">{k.note.trim() || "—"}</span>
                {" · "}
                {formatFingerprint(k.fingerprint) || "—"}
                {" · "}
                {keyRoleLabel(k.name)}
              </div>
              <div>
                {k.derivation || "—"}
                {k.xpub ? ` · ${shortXpub(k.xpub, 16, 8)}` : ""}
              </div>
              {(k.children ?? []).map((c) => (
                <div key={c.id} className="pl-3">
                  {c.note || childRoleLabel(k.name, c.path)} · {c.path} · {c.xpub ? shortXpub(c.xpub, 16, 8) : "—"}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-3 break-inside-avoid">
        <h3 className="text-[10px] font-semibold tracking-wide uppercase">{t("recovery.watchonly")}</h3>
        <p className="text-xs text-neutral-600">{t("recovery.watchonlyHint")}</p>
        <p className="mt-1 break-all font-mono text-[9px] leading-relaxed">{descriptor || "—"}</p>
      </section>

      <p className="mt-4 text-[10px] text-neutral-600">{t("recovery.disclaimer")}</p>
    </div>
  );
}
