// src/hooks/useStats.ts — MODIFIÉ (lit le store au lieu du Context)
import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../api/stats";
import { useDashboard } from "../stores/dashboardStore";

export function useStats() {
  const periode = useDashboard((s) => s.periode); // sélecteur ciblé (client state)
  return useQuery({
    queryKey: ["stats", periode],                 // server state (TanStack Query)
    queryFn: () => fetchStats(periode),
  });
}