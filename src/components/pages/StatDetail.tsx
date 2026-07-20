// src/components/pages/StatDetail.tsx — MODIFIÉ (graphique)
import { useParams, Link } from "react-router";
import { useDashboard } from "../../context/DashboardContext";
import { useStatDetail } from "../../hooks/useStatDetail";
import StatChart from "../StatChart";

function StatDetail() {
  const { id = "" } = useParams();
  const { state } = useDashboard(); // période courante (Ch.5)
  const { data, isPending, isError, error } = useStatDetail(id, state.periode);

  if (isPending) return <p>Chargement…</p>;
  if (isError) return <p className="error">{error.message}</p>;

  return (
    <div className="detail">
      <Link to="/">← Retour</Link>
      <h2>{data.titre}</h2>
      <p className="valeur">{data.valeur.toLocaleString("fr-FR")}</p>
      <p>Variation : {data.variation} %</p>
      {/* Enfin un vrai graphique d'évolution ! */}
      <StatChart serie={data.serie} />
    </div>
  );
}
export default StatDetail;
