// src/context/DashboardContext.tsx
import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Periode } from "../data/stats";

// État central du dashboard : la période et le texte de recherche.
type State = { periode: Periode; recherche: string };

// Les actions décrivent les intentions de l'utilisateur.
type Action =
  | { type: "CHANGER_PERIODE"; periode: Periode }
  | { type: "CHERCHER"; texte: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGER_PERIODE":
      // Nouvel objet (immuable) : on remplace la période.
      return { ...state, periode: action.periode };
    case "CHERCHER":
      return { ...state, recherche: action.texte };
    default:
      return state;
  }
}

type Ctx = { state: State; dispatch: React.Dispatch<Action> };
const DashboardContext = createContext<Ctx | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  // État initial : 7 jours, recherche vide.
  const [state, dispatch] = useReducer(reducer, { periode: 7, recherche: "" });
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Hook de consommation sécurisé.
export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard doit être dans <DashboardProvider>");
  return ctx;
}