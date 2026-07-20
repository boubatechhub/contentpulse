// src/components/Layout.tsx
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { state, dispatch } = useAuth();

  return (
    <div className="app">
      <header className="header">
        <h1>📊 ContentPulse</h1>
        <nav className="nav">
          {/* "end" sur "/" → actif uniquement sur l'accueil exact */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "actif" : "")}
          >
            Vue d'ensemble
          </NavLink>
          <NavLink
            to="/reglages"
            className={({ isActive }) => (isActive ? "actif" : "")}
          >
            Réglages
          </NavLink>
          {state.utilisateur ? (
            <button onClick={() => dispatch({ type: "DECONNEXION" })}>
              Déconnexion ({state.utilisateur.nom})
            </button>
          ) : (
            <NavLink to="/login">Connexion</NavLink>
          )}
        </nav>
      </header>

      {/* Le contenu de la page courante s'affiche ici */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
