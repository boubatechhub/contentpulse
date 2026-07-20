// src/context/AuthContext.tsx
import { createContext, useContext, useReducer, type ReactNode } from "react";

// ---- Types ----
export type User = { id: string; nom: string };
type State = { utilisateur: User | null };

// Les actions décrivent les événements d'authentification.
type Action = { type: "CONNEXION"; user: User } | { type: "DECONNEXION" };

// ---- Reducer (pur + immuable) ----
function authReducer(state: State, action: Action): State {
  switch (action.type) {
    case "CONNEXION":
      return { utilisateur: action.user }; // on connecte l'utilisateur
    case "DECONNEXION":
      return { utilisateur: null }; // on le déconnecte
    default:
      return state;
  }
}

// ---- Contexte : il diffusera { state, dispatch } ----
type AuthCtx = { state: State; dispatch: React.Dispatch<Action> };
const AuthContext = createContext<AuthCtx | null>(null);

// ---- Provider : à placer haut dans l'arbre (dans App) ----
export function AuthProvider({ children }: { children: ReactNode }) {
  // État initial : personne n'est connecté.
  const [state, dispatch] = useReducer(authReducer, { utilisateur: null });
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// ---- Hook de consommation sécurisé ----
export function useAuth() {
  const ctx = useContext(AuthContext);
  // Si on l'utilise hors du Provider → erreur claire (aide au débogage).
  if (!ctx) throw new Error("useAuth doit être utilisé dans <AuthProvider>");
  return ctx;
}
