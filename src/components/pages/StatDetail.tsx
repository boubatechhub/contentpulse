// src/components/pages/StatDetail.tsx
import { useParams, Link } from "react-router";
import { useDashboard } from "../../stores/dashboardStore"; // ← Zustand, PAS le Context
import { useStatDetail } from "../../hooks/useStatDetail";
import StatChart from "../StatChart";

function StatDetail() {
  const { id = "" } = useParams();

  // Zustand : on sélectionne la tranche voulue (plus de { state } du Context).
  const periode = useDashboard((s) => s.periode);

  const { data, isPending, isError, error } = useStatDetail(id, periode);

  if (isPending) return <p>Chargement…</p>;
  if (isError) return <p className="error">{error.message}</p>;

  return (
    <div className="detail">
      <Link to="/">← Retour</Link>
      <h2>{data.titre}</h2>
      <p className="valeur">{data.valeur.toLocaleString("fr-FR")}</p>
      <p>Variation : {data.variation} %</p>
      <StatChart serie={data.serie} />
    </div>
  );
}
export default StatDetail;
