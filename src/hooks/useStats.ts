// src/hooks/useStats.ts — RÉÉCRIT avec TanStack Query
import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../api/stats";
import type { Periode } from "../data/stats";

// Beaucoup plus court que la version useEffect du Ch.5 :
// plus de useState/loading/error/anti-race à la main → tout est géré.
export function useStats(periode: Periode) {
  return useQuery({
    queryKey: ["stats", periode], // cache PAR période
    queryFn: () => fetchStats(periode),
  });
}
