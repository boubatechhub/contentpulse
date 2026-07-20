// src/stores/dashboardStore.ts
import { create } from "zustand";
import type { Periode } from "../data/stats";

// CLIENT STATE : ce que l'utilisateur choisit (filtres). Pas de Provider !
type DashboardStore = {
  periode: Periode;
  recherche: string;
  setPeriode: (p: Periode) => void;
  setRecherche: (v: string) => void;
};

export const useDashboard = create<DashboardStore>((set) => ({
  periode: 7,
  recherche: "",
  setPeriode: (periode) => set({ periode }),
  setRecherche: (recherche) => set({ recherche }),
}));