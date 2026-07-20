
export type Stat = { id: string; titre: string; valeur: number; variation: number };
export type Periode = 7 | 30 | 90; // union : seules ces 3 valeurs sont permises

// Jeu de données différent selon la période choisie.
const parPeriode: Record<Periode, Stat[]> = {
  7: [
    { id: "vues", titre: "Vues", valeur: 12480, variation: 5.2 },
    { id: "abos", titre: "Abonnés", valeur: 3200, variation: 1.1 },
    { id: "likes", titre: "Likes", valeur: 980, variation: -2.4 },
  ],
  30: [
    { id: "vues", titre: "Vues", valeur: 51230, variation: 9.8 },
    { id: "abos", titre: "Abonnés", valeur: 3550, variation: 2.7 },
    { id: "likes", titre: "Likes", valeur: 4120, variation: 3.1 },
  ],
  90: [
    { id: "vues", titre: "Vues", valeur: 162400, variation: 14.2 },
    { id: "abos", titre: "Abonnés", valeur: 4100, variation: 6.4 },
    { id: "likes", titre: "Likes", valeur: 12800, variation: 7.9 },
  ],
};

// Fonction utilitaire : renvoie les stats d'une période.
export function getStats(periode: Periode): Stat[] {
  return parPeriode[periode];
}