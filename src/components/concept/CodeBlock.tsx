type Props = {
  language: string;
  title: string;
  code: string;
  notes: string;
};

export function CodeBlock({ language, title, code, notes }: Props) {
  return (
    <section className="panel" id="code">
      <h2>Code / Pseudocode</h2>
      <p className="muted">
        {title} · <code>{language}</code>
      </p>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
      <p className="muted" style={{ marginTop: '0.75rem' }}>
        {notes}
      </p>
    </section>
  );
}
