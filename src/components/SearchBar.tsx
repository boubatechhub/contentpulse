// src/components/SearchBar.tsx
import { useDashboard } from "../stores/dashboardStore";
import { useUI } from "../stores/uiStore";
import { IconSearch } from "./icons";

function SearchBar() {
  const recherche = useDashboard((s) => s.recherche);
  const setRecherche = useDashboard((s) => s.setRecherche);
  const sombre = useUI((s) => s.theme) === "sombre";

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
        sombre ? "border-line bg-surface" : "border-slate-200 bg-white"
      }`}
    >
      <IconSearch className={`size-4 shrink-0 ${sombre ? "text-slate-500" : "text-slate-400"}`} />
      <input
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Filtrer une statistique…"
        className={`w-48 bg-transparent text-sm outline-none placeholder:text-slate-400 ${
          sombre ? "text-slate-100" : "text-slate-900"
        }`}
      />
    </div>
  );
}
export default SearchBar;
