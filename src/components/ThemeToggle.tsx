// src/components/ThemeToggle.tsx — NOUVEAU
import { useUI } from "../stores/uiStore";

function ThemeToggle() {
  const theme = useUI((s) => s.theme);
  const basculer = useUI((s) => s.basculerTheme);
  return (
    <button onClick={basculer}>
      Thème : {theme === "sombre" ? "🌙" : "☀️"}
    </button>
  );
}
export default ThemeToggle;
