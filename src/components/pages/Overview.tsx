// src/components/pages/Overview.tsx — filtrage mémoïsé
import { useMemo } from "react";
import { useStats } from "../../hooks/useStats";
import { useDashboard } from "../../stores/dashboardStore";
import PeriodFilter from "../PeriodFilter";
import SearchBar from "../SearchBar";
import StatsGrid from "../StatsGrid";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

function Overview() {
  const { data, isPending, isError, error, refetch } = useStats();
  const recherche = useDashboard((s) => s.recherche);

  // Filtrage mémoïsé (utile si la liste grandit).
  const filtrees = useMemo(() => {
    if (!data) return [];
    return data.filter((s) =>
      s.titre.toLowerCase().includes(recherche.toLowerCase()),
    );
  }, [data, recherche]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PeriodFilter />
        <SearchBar />
      </div>
      {isPending ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage message={error.message} onRetry={refetch} />
      ) : (
        <StatsGrid stats={filtrees} />
      )}
    </div>
  );
}
export default Overview;
