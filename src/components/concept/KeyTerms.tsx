type Props = {
  terms: { term: string; definition: string }[];
};

export function KeyTerms({ terms }: Props) {
  return (
    <section className="panel" id="key-terms">
      <h2>Key terms</h2>
      <div className="term-grid" style={{ marginTop: '0.85rem' }}>
        {terms.map((t) => (
          <div key={t.term} className="term-item">
            <strong>{t.term}</strong>
            <span className="muted">{t.definition}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
