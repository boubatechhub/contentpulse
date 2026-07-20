// src/components/SearchBar.tsx
import { useEffect, useRef } from "react";
import { useDashboard } from "../context/DashboardContext";

function SearchBar() {
  const { state, dispatch } = useDashboard();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { ref.current?.focus(); }, []); // focus au montage

  return (
    <input
      ref={ref}
      className="search"
      value={state.recherche}
      onChange={(e) => dispatch({ type: "CHERCHER", texte: e.target.value })}
      placeholder="Filtrer une statistique…"
    />
  );
}
export default SearchBar;