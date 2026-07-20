// src/components/pages/Overview.tsx — filtrage mémoïsé
import { useMemo } from "react";
import { Link } from "react-router";
import { useStats } from "../../hooks/useStats";
import { useDashboard } from "../../stores/dashboardStore";
import StatCard from "../StatCard";

function Overview() {
  const { data, isPending, isError, error } = useStats();
  const recherche = useDashboard((s) => s.recherche);

  // Filtrage mémoïsé (utile si la liste grandit).
  const filtrees = useMemo(() => {
    if (!data) return [];
    return data.filter((s) =>
      s.titre.toLowerCase().includes(recherche.toLowerCase()),
    );
  }, [data, recherche]);

  if (isPending) return <p>Chargement…</p>;
  if (isError) return <p className="error">{error.message}</p>;

  return (
    <div className="grid">
      {filtrees.map((s) => (
        <Link key={s.id} to={`/stat/${s.id}`}>
          <StatCard titre={s.titre} valeur={s.valeur} variation={s.variation} />
        </Link>
      ))}
    </div>
  );
}
export default Overview;
