// src/components/PeriodFilter.tsx — MODIFIÉ
import { useDashboard } from "../stores/dashboardStore";
import type { Periode } from "../data/stats";

const PERIODES: Periode[] = [7, 30, 90];

function PeriodFilter() {
  // Deux sélecteurs ciblés : ne re-rend pas quand "recherche" change.
  const periode = useDashboard((s) => s.periode);
  const setPeriode = useDashboard((s) => s.setPeriode);

  return (
    <div className="period-filter">
      {PERIODES.map((p) => (
        <button
          key={p}
          className={p === periode ? "actif" : ""}
          onClick={() => setPeriode(p)}
        >
          {p} jours
        </button>
      ))}
    </div>
  );
}
export default PeriodFilter;
