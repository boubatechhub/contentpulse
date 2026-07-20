// src/api/statsApi.ts
import type { Stat, Periode } from "../data/stats";
import { getStats } from "../data/stats";

// Simule un appel réseau : renvoie les stats après un délai,
// et échoue aléatoirement de temps en temps (pour tester la gestion d'erreur).
export function fetchStats(periode: Periode): Promise<Stat[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Le serveur n'a pas répondu")); // 10% d'échec simulé
      } else {
        resolve(getStats(periode)); // succès : données de la période
      }
    }, 800); // 800 ms de latence simulée
  });
}
