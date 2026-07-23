// src/components/PeriodFilter.tsx
import { useDashboard } from "../stores/dashboardStore";
import { useUI } from "../stores/uiStore";
import type { Periode } from "../data/stats";

const PERIODES: Periode[] = [7, 30, 90];

function PeriodFilter() {
  // Deux sélecteurs ciblés : ne re-rend pas quand "recherche" change.
  const periode = useDashboard((s) => s.periode);
  const setPeriode = useDashboard((s) => s.setPeriode);
  const sombre = useUI((s) => s.theme) === "sombre";

  return (
    <div
      className={`inline-flex gap-1 rounded-full border p-1 ${
        sombre ? "border-line bg-surface" : "border-slate-200 bg-white"
      }`}
    >
      {PERIODES.map((p) => (
        <button
          key={p}
          onClick={() => setPeriode(p)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            p === periode
              ? "bg-brand-500 text-white"
              : sombre
                ? "text-slate-400 hover:text-slate-100"
                : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {p} jours
        </button>
      ))}
    </div>
  );
}
export default PeriodFilter;
