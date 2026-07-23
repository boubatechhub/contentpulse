// src/components/Layout.tsx
import { NavLink, Outlet, Link } from "react-router";
import { useUI } from "../stores/uiStore";
import { useAuth } from "../context/AuthContext";
import { IconHome, IconGear } from "./icons";
import ThemeToggle from "./ThemeToggle";

function Layout() {
  const sombre = useUI((s) => s.theme) === "sombre";
  const { state } = useAuth();
  const initiale = state.utilisateur?.nom.charAt(0).toUpperCase() ?? "?";

  return (
    <div
      className={`flex min-h-screen transition-colors ${
        sombre ? "bg-ink text-slate-100" : "bg-mint-50 text-slate-900"
      }`}
    >
      {/* Sidebar : navigation par icônes, dégradé teal (identité visuelle de la maquette) */}
      <aside className="flex w-20 shrink-0 flex-col items-center gap-4 bg-gradient-to-b from-teal-500 to-teal-700 py-6">
        <Link
          to={state.utilisateur ? "/reglages" : "/login"}
          title={state.utilisateur ? state.utilisateur.nom : "Se connecter"}
          className="grid size-11 place-items-center rounded-full bg-white/15 text-base font-medium text-white ring-2 ring-white/30 transition hover:bg-white/25"
        >
          {initiale}
        </Link>

        <nav className="mt-4 flex flex-1 flex-col items-center gap-3">
          <NavLink
            to="/"
            end
            title="Vue d'ensemble"
            className={({ isActive }) =>
              `grid size-11 place-items-center rounded-xl transition ${
                isActive
                  ? "bg-white text-teal-600 shadow-sm"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <IconHome className="size-5" />
          </NavLink>
          <NavLink
            to="/reglages"
            title="Réglages"
            className={({ isActive }) =>
              `grid size-11 place-items-center rounded-xl transition ${
                isActive
                  ? "bg-white text-teal-600 shadow-sm"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <IconGear className="size-5" />
          </NavLink>
        </nav>

        <ThemeToggle />
      </aside>

      <div className="flex-1">
        <header
          className={`border-b px-8 py-5 backdrop-blur transition-colors ${
            sombre ? "border-line bg-surface/60" : "border-slate-200/70 bg-white/60"
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Pastille dégradée violet→bleu pour le logo */}
            <div className="grid size-9 place-items-center rounded-lg bg-brand-500 text-white">
              📊
            </div>
            <div>
              <h1 className="text-base font-medium">ContentPulse</h1>
              <p className={`text-xs ${sombre ? "text-slate-400" : "text-slate-500"}`}>
                Analyse de contenu
              </p>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default Layout;
