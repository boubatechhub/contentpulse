type StatCardProps = {
  titre: string;
  valeur: number;
  variation?: number;
};

function StatCard({ titre, valeur, variation }: StatCardProps) {
  const enHausse = (variation ?? 0) >= 0;
  return (
    <div className="stat-card">
      <h3>{titre}</h3>
      <strong>{valeur.toLocaleString("fr-FR")}</strong>
      {variation !== undefined && (
        <span className={enHausse ? "trend trend--up" : "trend trend--down"}>
          {enHausse ? "▲" : "▼"} {Math.abs(variation)} %
        </span>
      )}
    </div>
  );
}

export default StatCard;