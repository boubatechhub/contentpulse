// src/components/StatChart.tsx — MODIFIÉ (memo)
import { memo } from "react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import type { PointSerie } from "../api/stats";

// Le graphique est coûteux à rendre → memo évite de le refaire si "serie" est identique.
const StatChart = memo(function StatChart({ serie }: { serie: PointSerie[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={serie}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="jour" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line type="monotone" dataKey="vues" stroke="#f97316" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
});
export default StatChart;