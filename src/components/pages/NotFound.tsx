// src/components/pages/NotFound.tsx
import Card from "../Card";

function NotFound() {
  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <p className="text-sm">404 — Cette page n'existe pas</p>
      </Card>
    </div>
  );
}
export { NotFound };