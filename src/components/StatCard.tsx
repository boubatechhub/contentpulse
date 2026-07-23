// src/components/StatCard.tsx
import { memo } from "react";
import { useUI } from "../stores/uiStore";

type Accent = "violet" | "teal" | "amber";
type Props = { titre: string; valeur: number; variation?: number; accent?: Accent };

// Chip décoratif par carte : identité visuelle, pas un encodage de donnée.
const CHIP: Record<Accent, { clair: string; sombre: string }> = {
  violet: { clair: "bg-violet-100 text-violet-600", sombre: "bg-violet-500/20 text-violet-300" },
  teal: { clair: "bg-teal-100 text-teal-600", sombre: "bg-teal-500/20 text-teal-300" },
  amber: { clair: "bg-amber-100 text-amber-600", sombre: "bg-amber-500/20 text-amber-300" },
};

const StatCard = memo(function StatCard({ titre, valeur, variation, accent = "violet" }: Props) {
  const sombre = useUI((s) => s.theme) === "sombre";
  const enHausse = (variation ?? 0) >= 0;

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        sombre ? "border-line bg-surface" : "border-slate-100 bg-white"
      }`}
    >
      <div
        className={`mb-3 inline-grid size-9 place-items-center rounded-xl text-sm font-semibold ${
          sombre ? CHIP[accent].sombre : CHIP[accent].clair
        }`}
      >
        {titre.charAt(0).toUpperCase()}
      </div>
      <p className={`text-sm ${sombre ? "text-slate-400" : "text-slate-500"}`}>{titre}</p>
      <p className="mt-1 text-2xl font-medium tracking-tight">
        {valeur.toLocaleString("fr-FR")}
      </p>
      {variation !== undefined && (
        <p
          className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${
            enHausse
              ? sombre
                ? "text-good-dark"
                : "text-good-light"
              : sombre
                ? "text-bad-dark"
                : "text-bad-light"
          }`}
        >
          {enHausse ? "▲" : "▼"} {Math.abs(variation)} %
        </p>
      )}
    </div>
  );
});
export default StatCard;
