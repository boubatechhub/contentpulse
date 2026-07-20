// src/components/pages/Overview.tsx — MODIFIÉ (useStats via query)
import { Link } from "react-router";
import { useDashboard } from "../../context/DashboardContext";
import { useStats } from "../../hooks/useStats";

function Overview() {
  const { state } = useDashboard();
  const { data, isPending, isError, error } = useStats(state.periode);

  if (isPending) return <p>Chargement…</p>;
  if (isError) return <p className="error">{error.message}</p>;

  const filtrees = data.filter((s) =>
    s.titre.toLowerCase().includes(state.recherche.toLowerCase()),
  );

  return (
    <div className="grid">
      {filtrees.map((s) => (
        <Link key={s.id} to={`/stat/${s.id}`} className="stat-card">
          <h3>{s.titre}</h3>
          <strong>{s.valeur.toLocaleString("fr-FR")}</strong>
        </Link>
      ))}
    </div>
  );
}
export default Overview;
