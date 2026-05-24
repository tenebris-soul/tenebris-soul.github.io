function FeatureCard({ title, text, index }) {
  return (
    <article className="feature-card">
      {index !== undefined && <span className="card-index">{String(index + 1).padStart(2, '0')}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
