// src/components/Layout.tsx
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    // Fond sombre, texte clair, pleine hauteur.
    <div className="min-h-screen bg-ink text-slate-100">
      <header className="border-b border-line bg-surface/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Pastille dégradée violet→bleu pour le logo */}
            <div className="grid size-9 place-items-center rounded-lg bg-brand-500 text-white">
              📊
            </div>
            <div>
              <h1 className="text-base font-medium">ContentPulse</h1>
              <p className="text-xs text-slate-400">Analyse de contenu</p>
            </div>
          </div>
          <nav className="flex gap-1 text-sm">
            {/* NavLink actif : fond violet translucide + texte clair */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 transition ${
                  isActive
                    ? "bg-brand-500/20 text-brand-400"
                    : "text-slate-400 hover:text-slate-100"
                }`
              }
            >
              Vue d'ensemble
            </NavLink>
            <NavLink
              to="/reglages"
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 transition ${
                  isActive
                    ? "bg-brand-500/20 text-brand-400"
                    : "text-slate-400 hover:text-slate-100"
                }`
              }
            >
              Réglages
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
