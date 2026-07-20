// src/components/Dashboard.tsx  (NOUVEAU : consomme contexte + hook)
import { useStats } from "../hooks/useStats";
import { useDashboard } from "../context/DashboardContext";
import Card from "./Card";
import PeriodFilter from "./PeriodFilter";
import SearchBar from "./SearchBar";
import StatsGrid from "./StatsGrid";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function Dashboard() {
  // On lit la période/recherche depuis le contexte…
  const { state } = useDashboard();
  // …et on charge les stats via le hook custom, piloté par la période.
  const { stats, loading, error, recharger } = useStats(state.periode);

  // Filtrage DÉRIVÉ (calcul, pas d'effet).
  const filtrees = stats.filter((s) =>
    s.titre.toLowerCase().includes(state.recherche.toLowerCase())
  );

  return (
    <Card titre="Vue d'ensemble">
      <PeriodFilter periode={7} onChange={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <SearchBar />
      {error ? (
        <ErrorMessage message={error} onRetry={recharger} />
      ) : loading ? (
        <Loader />
      ) : (
        <StatsGrid stats={filtrees} />
      )}
    </Card>
  );
}
export default Dashboard;