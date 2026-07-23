// src/components/Loader.tsx
function Loader() {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-400">
      <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      Chargement des statistiques…
    </div>
  );
}
export default Loader;
