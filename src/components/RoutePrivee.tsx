// src/components/RoutePrivee.tsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

// Garde : bloque l'accès si non connecté.
function RoutePrivee() {
  const { state } = useAuth();
  // React Router se dit : "pas d'utilisateur → direction /login (sans retour arrière)."
  if (!state.utilisateur) return <Navigate to="/login" replace />;
  return <Outlet />; // connecté → on affiche la route enfant protégée
}
export default RoutePrivee;
