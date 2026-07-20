// src/api/stats.ts
import type { Stat, Periode } from "../data/stats";
import { getStats as getStatsLocal } from "../data/stats"; // données de démo (Ch.3)

export type PointSerie = { jour: string; vues: number };
export type StatDetail = Stat & { serie: PointSerie[] };

// Simule un appel réseau (latence). À remplacer par un vrai endpoint http<...>().
export function fetchStats(periode: Periode): Promise<Stat[]> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.08
        ? reject(new Error("Le serveur n'a pas répondu"))
        : resolve(getStatsLocal(periode));
    }, 700),
  );
}

// Détail d'une stat + série pour le graphique (simulée).
export function fetchStatDetail(
  id: string,
  periode: Periode,
): Promise<StatDetail> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const stat = getStatsLocal(periode).find((s) => s.id === id);
      if (!stat) return reject(new Error("Statistique introuvable"));
      // On génère une série factice de 7 jours.
      const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
      const serie = jours.map((jour) => ({
        jour,
        vues: Math.round(
          stat.valeur / 7 + (Math.random() - 0.5) * stat.valeur * 0.1,
        ),
      }));
      resolve({ ...stat, serie });
    }, 700),
  );
}
