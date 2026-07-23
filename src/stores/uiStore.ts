// src/stores/uiStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UIStore = { theme: "clair" | "sombre"; basculerTheme: () => void };

export const useUI = create<UIStore>()(
  persist(
    (set) => ({
      theme: "clair",
      basculerTheme: () =>
        set((s) => ({ theme: s.theme === "clair" ? "sombre" : "clair" })),
    }),
    { name: "contentpulse-ui" }, // persiste le thème
  ),
);
