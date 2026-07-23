// src/components/StatChart.tsx — MODIFIÉ (memo)
import { memo } from "react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import type { PointSerie } from "../api/stats";
import { useUI } from "../stores/uiStore";

// Le graphique est coûteux à rendre → memo évite de le refaire si "serie" est identique.
const StatChart = memo(function StatChart({ serie }: { serie: PointSerie[] }) {
  const sombre = useUI((s) => s.theme) === "sombre";
  // Grille/axes recessifs, tirés de la palette validée (rôles gridline/muted).
  const grille = sombre ? "#2c2c2a" : "#e1e0d9";
  const texte = "#898781";
  const surface = sombre ? "#131a2b" : "#ffffff";
  const bordure = sombre ? "#1e293b" : "#e1e0d9";
  const encre = sombre ? "#ffffff" : "#0b0b0b";

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={serie} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke={grille} />
        <XAxis dataKey="jour" stroke={texte} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <YAxis stroke={texte} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={48} />
        <Tooltip
          cursor={{ stroke: grille, strokeWidth: 1 }}
          contentStyle={{
            background: surface,
            border: `1px solid ${bordure}`,
            borderRadius: 12,
            fontSize: 13,
            color: encre,
          }}
          labelStyle={{ color: texte }}
        />
        {/* Série unique : pas de légende nécessaire (le titre de la carte la nomme déjà). */}
        <Line
          type="monotone"
          dataKey="vues"
          name="Vues"
          stroke="#8b5cf6"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, stroke: surface, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});
export default StatChart;
