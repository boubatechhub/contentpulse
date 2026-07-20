// src/components/ErrorMessage.tsx
// Composant d'erreur réutilisable, avec bouton "Réessayer".
type Props = { message: string; onRetry: () => void };

function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="error">
      <p>⚠️ {message}</p>
      <button onClick={onRetry}>Réessayer</button>
    </div>
  );
}
export default ErrorMessage;
