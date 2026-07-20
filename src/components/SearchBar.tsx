// src/components/SearchBar.tsx — MODIFIÉ
import { useDashboard } from "../stores/dashboardStore";

function SearchBar() {
  const recherche = useDashboard((s) => s.recherche);
  const setRecherche = useDashboard((s) => s.setRecherche);
  return (
    <input
      className="search"
      value={recherche}
      onChange={(e) => setRecherche(e.target.value)}
      placeholder="Filtrer une statistique…"
    />
  );
}
export default SearchBar;