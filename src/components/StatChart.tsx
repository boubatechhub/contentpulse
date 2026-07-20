// src/components/StatChart.tsx — Recharts
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { PointSerie } from "../api/stats";

function StatChart({ serie }: { serie: PointSerie[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={serie}
        margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="jour" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        {/* Courbe des vues — orange de la marque ContentPulse */}
        <Line
          type="monotone"
          dataKey="vues"
          stroke="#f97316"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default StatChart;
