// src/components/StatCard.tsx
import { memo } from "react";

type Props = { titre: string; valeur: number; variation?: number };

const StatCard = memo(function StatCard({ titre, valeur, variation }: Props) {
  const enHausse = (variation ?? 0) >= 0;
  return (
    // Carte : surface sombre, bordure discrète, coins arrondis, hover subtil.
    <div className="rounded-xl border border-line bg-surface p-5 transition hover:border-brand-500/40">
      <p className="text-sm text-slate-400">{titre}</p>
      <p className="mt-1 text-2xl font-medium tracking-tight">
        {valeur.toLocaleString("fr-FR")}
      </p>
      {variation !== undefined && (
        <p className={`mt-1 text-xs ${enHausse ? "text-emerald-400" : "text-rose-400"}`}>
          {enHausse ? "▲" : "▼"} {Math.abs(variation)} %
        </p>
      )}
    </div>
  );
});
export default StatCard;