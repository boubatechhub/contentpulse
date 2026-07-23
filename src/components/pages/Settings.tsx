// src/components/pages/Settings.tsx
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useUI } from "../../stores/uiStore";
import Card from "../Card";

function Settings() {
  const { state, dispatch } = useAuth();
  const naviguer = useNavigate();
  const sombre = useUI((s) => s.theme) === "sombre";

  function deconnecter() {
    dispatch({ type: "DECONNEXION" });
    naviguer("/", { replace: true });
  }

  return (
    <div className="mx-auto max-w-sm">
      <Card titre="Réglages 🔒">
        <p className="text-sm">Connecté en tant que {state.utilisateur?.nom}.</p>
        <button
          onClick={deconnecter}
          className={`mt-4 rounded-lg px-3 py-2 text-sm font-medium transition ${
            sombre
              ? "bg-bad-dark/20 text-bad-dark hover:bg-bad-dark/30"
              : "bg-bad-light/10 text-bad-light hover:bg-bad-light/20"
          }`}
        >
          Se déconnecter
        </button>
      </Card>
    </div>
  );
}

export { Settings };