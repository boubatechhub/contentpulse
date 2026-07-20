type CardProps = { titre?: string; children: React.ReactNode };

function Card({ titre, children }: CardProps) {
  return (
    <section className="card">
      {titre && <header className="card__header">{titre}</header>}
      <div className="card__body">{children}</div>
    </section>
  );
}

export default Card;
