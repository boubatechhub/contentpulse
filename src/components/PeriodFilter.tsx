// src/components/PeriodFilter.tsx
import type { Periode } from "../data/stats";

// Props : la période active + une fonction pour la changer (lifting state up).
type Props = {
  periode: Periode;
  onChange: (p: Periode) => void;
};

const PERIODES: Periode[] = [7, 30, 90]; // options disponibles

function PeriodFilter({ periode, onChange }: Props) {
  return (
    <div className="period-filter">
      {PERIODES.map((p) => (
        <button
          key={p}
          // bouton "actif" si c'est la période courante (classe conditionnelle)
          className={p === periode ? "actif" : ""}
          onClick={() => onChange(p)} // remonte le choix au parent
        >
          {p} jours
        </button>
      ))}
    </div>
  );
}

export default PeriodFilter;