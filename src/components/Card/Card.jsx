const Card = ({ title, eyebrow, children }) => {
  return (
    <section className="card">
      <h2 className="card__title">{title}</h2>
      <span className="eyebrow">{eyebrow}</span>
      {children}
    </section>
  );
};

export default Card;
