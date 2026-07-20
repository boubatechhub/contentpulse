// src/components/StatsGrid.tsx
import StatCard from "./StatCard";
import type { Stat } from "../data/stats";

// La grille ne détient plus de données : elle REÇOIT les stats à afficher.
type Props = { stats: Stat[] };

function StatsGrid({ stats }: Props) {
  // Cas vide géré proprement.
  if (stats.length === 0) return <p>Aucune statistique</p>;

  return (
    <div className="grid">
      {stats.map((s) => (
        <StatCard
          key={s.id}
          titre={s.titre}
          valeur={s.valeur}
          variation={s.variation}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
