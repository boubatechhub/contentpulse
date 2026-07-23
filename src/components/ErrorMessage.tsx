// src/components/ErrorMessage.tsx
// Composant d'erreur réutilisable, avec bouton "Réessayer".
import { useUI } from "../stores/uiStore";

type Props = { message: string; onRetry: () => void };

function ErrorMessage({ message, onRetry }: Props) {
  const sombre = useUI((s) => s.theme) === "sombre";
  const teinte = sombre ? "text-bad-dark" : "text-bad-light";

  return (
    <div
      className={`flex flex-col items-start gap-3 rounded-2xl border p-5 ${teinte} ${
        sombre ? "border-bad-dark/30 bg-bad-dark/10" : "border-bad-light/20 bg-bad-light/5"
      }`}
    >
      <p className="text-sm font-medium">⚠️ {message}</p>
      <button
        onClick={onRetry}
        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
          sombre ? "bg-bad-dark/20 hover:bg-bad-dark/30" : "bg-bad-light/10 hover:bg-bad-light/20"
        }`}
      >
        Réessayer
      </button>
    </div>
  );
}
export default ErrorMessage;
