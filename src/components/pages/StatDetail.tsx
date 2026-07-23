// src/components/pages/StatDetail.tsx
import { useParams, Link } from "react-router";
import { useDashboard } from "../../stores/dashboardStore"; // ← Zustand, PAS le Context
import { useUI } from "../../stores/uiStore";
import { useStatDetail } from "../../hooks/useStatDetail";
import StatChart from "../StatChart";
import Card from "../Card";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

function StatDetail() {
  const { id = "" } = useParams();

  // Zustand : on sélectionne la tranche voulue (plus de { state } du Context).
  const periode = useDashboard((s) => s.periode);
  const sombre = useUI((s) => s.theme) === "sombre";

  const { data, isPending, isError, error, refetch } = useStatDetail(id, periode);

  if (isPending) return <Loader />;
  if (isError) return <ErrorMessage message={error.message} onRetry={refetch} />;

  const enHausse = data.variation >= 0;

  return (
    <div className="space-y-4">
      <Link
        to="/"
        className={`inline-block text-sm ${
          sombre ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-900"
        }`}
      >
        ← Retour
      </Link>
      <Card titre={data.titre}>
        <p className="text-3xl font-medium tracking-tight">
          {data.valeur.toLocaleString("fr-FR")}
        </p>
        <p
          className={`mt-1 text-sm font-medium ${
            enHausse ? (sombre ? "text-good-dark" : "text-good-light") : sombre ? "text-bad-dark" : "text-bad-light"
          }`}
        >
          {enHausse ? "▲" : "▼"} {Math.abs(data.variation)} %
        </p>
        <div className="mt-6">
          <StatChart serie={data.serie} />
        </div>
      </Card>
    </div>
  );
}
export default StatDetail;
