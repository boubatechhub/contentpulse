// src/components/StatsGrid.tsx
import { Link } from "react-router";
import StatCard from "./StatCard";
import type { Stat } from "../data/stats";

type Props = { stats: Stat[] };

const ACCENTS = ["violet", "teal", "amber"] as const;

function StatsGrid({ stats }: Props) {
  if (stats.length === 0) {
    return <p className="text-sm text-slate-500">Aucune statistique</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s, i) => (
        <Link key={s.id} to={`/stat/${s.id}`}>
          <StatCard
            titre={s.titre}
            valeur={s.valeur}
            variation={s.variation}
            accent={ACCENTS[i % ACCENTS.length]}
          />
        </Link>
      ))}
    </div>
  );
}

export default StatsGrid;
