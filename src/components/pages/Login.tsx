// src/components/pages/Login.tsx
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useUI } from "../../stores/uiStore";
import Card from "../Card";

function Login() {
  const { dispatch } = useAuth();
  const naviguer = useNavigate();
  const [nom, setNom] = useState("");
  const sombre = useUI((s) => s.theme) === "sombre";

  function connecter(e: FormEvent) {
    e.preventDefault();
    const nomPropre = nom.trim();
    if (!nomPropre) return;
    dispatch({ type: "CONNEXION", user: { id: "u1", nom: nomPropre } });
    // Après connexion, on redirige par code vers les réglages (zone protégée).
    naviguer("/reglages", { replace: true });
  }

  return (
    <div className="mx-auto max-w-sm">
      <Card titre="Connexion">
        <form onSubmit={connecter} className="flex flex-col gap-3">
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            autoFocus
            className={`rounded-lg border px-3 py-2 text-sm outline-none focus:border-brand-500 ${
              sombre
                ? "border-line bg-ink text-slate-100 placeholder:text-slate-500"
                : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
            }`}
          />
          <button
            type="submit"
            disabled={!nom.trim()}
            className="rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Se connecter (démo)
          </button>
        </form>
      </Card>
    </div>
  );
}
export default Login;
