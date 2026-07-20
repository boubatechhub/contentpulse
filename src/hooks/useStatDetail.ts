// src/hooks/useStatDetail.ts
import { useQuery } from "@tanstack/react-query";
import { fetchStatDetail } from "../api/stats";
import type { Periode } from "../data/stats";

export function useStatDetail(id: string, periode: Periode) {
  return useQuery({
    queryKey: ["stat", id, periode], // cache par stat ET par période
    queryFn: () => fetchStatDetail(id, periode),
    enabled: id !== "", // ne lance pas la requête si pas d'id
  });
}
