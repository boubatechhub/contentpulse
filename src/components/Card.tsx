// src/components/Card.tsx
import type { ReactNode } from "react";
import { useUI } from "../stores/uiStore";

type CardProps = { titre?: string; children: ReactNode };

function Card({ titre, children }: CardProps) {
  const sombre = useUI((s) => s.theme) === "sombre";
  return (
    <section
      className={`rounded-2xl border p-5 shadow-sm transition-colors ${
        sombre ? "border-line bg-surface" : "border-slate-100 bg-white"
      }`}
    >
      {titre && (
        <header className={`mb-3 text-sm font-medium ${sombre ? "text-slate-300" : "text-slate-600"}`}>
          {titre}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
export default Card;
