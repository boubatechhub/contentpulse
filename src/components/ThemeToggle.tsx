// src/components/ThemeToggle.tsx
import { useUI } from "../stores/uiStore";

function ThemeToggle() {
  const theme = useUI((s) => s.theme);
  const basculer = useUI((s) => s.basculerTheme);
  return (
    <button
      onClick={basculer}
      title={theme === "sombre" ? "Passer au thème clair" : "Passer au thème sombre"}
      className="grid size-11 place-items-center rounded-xl text-lg text-white/70 transition hover:bg-white/10 hover:text-white"
    >
      {theme === "sombre" ? "🌙" : "☀️"}
    </button>
  );
}
export default ThemeToggle;
