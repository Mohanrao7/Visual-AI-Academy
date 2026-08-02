import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useScene } from '../../hooks/useScene';
import type { Category, Concept } from '../../types/content';
import { CodeBlock } from './CodeBlock';
import { InteractiveExample } from './InteractiveExample';
import { KeyTerms } from './KeyTerms';
import { Quiz } from './Quiz';
import { VisualizationPlayer } from './VisualizationPlayer';

type Props = {
  concept: Concept;
  category: Category;
  completed: boolean;
  onMarkUnderstood: () => void;
  onQuizComplete: (score: number, total: number) => void;
  resolveTitle: (id: string) => string | undefined;
  resolveCategoryId: (id: string) => string | undefined;
};

export function ConceptPageLayout({
  concept,
  category,
  completed,
  onMarkUnderstood,
  onQuizComplete,
  resolveTitle,
  resolveCategoryId,
}: Props) {
  const scene = useScene(concept.categoryId, concept.id);

  return (
    <div className="section">
      <div className="container stack" style={{ gap: '1.5rem' }}>
        <header className="panel">
          <div className="breadcrumb">
            <Link to="/generative-ai">Generative AI</Link>
            <span>/</span>
            <Link to={`/generative-ai/${category.id}`}>{category.title}</Link>
            <span>/</span>
            <span>{concept.title}</span>
          </div>
          <h1 className="page-title">{concept.title}</h1>
          <p className="muted" style={{ fontSize: '1.05rem' }}>
            {concept.subtitle}
          </p>
          <div className="meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.75rem' }}>
            <span className={`pill ${concept.difficulty}`}>{concept.difficulty}</span>
            <span className="pill">~{concept.estimatedMinutes} min</span>
            {completed ? <span className="pill beginner">Completed</span> : null}
          </div>
          {concept.prerequisites.length > 0 ? (
            <p style={{ marginTop: '0.85rem' }}>
              <strong>Prerequisites:</strong>{' '}
              {concept.prerequisites.map((id, i) => (
                <span key={id}>
                  {i > 0 ? ', ' : ''}
                  <Link to={`/generative-ai/${resolveCategoryId(id) ?? category.id}/${id}`}>
                    {resolveTitle(id) ?? id}
                  </Link>
                </span>
              ))}
            </p>
          ) : (
            <p className="muted" style={{ marginTop: '0.85rem' }}>
              No prerequisites — a good entry point.
            </p>
          )}
        </header>

        {/* The visualization is the hero of every concept page: it runs first, above the prose. */}
        <Suspense fallback={<div className="panel viz-shell viz-hero">Loading visualization…</div>}>
          <VisualizationPlayer spec={concept.visualization} conceptId={concept.id} scene={scene} hero />
        </Suspense>

        <nav className="concept-jump" aria-label="Jump to section">
          <span className="concept-jump-label">On this page</span>
          <a href="#plain-english">Plain English</a>
          <a href="#how-it-works">How it works</a>
          <a href="#key-terms">Key terms</a>
          <a href="#try-it">Try it yourself</a>
          {concept.codeExample ? <a href="#code">Code</a> : null}
          <a href="#real-world">Real world</a>
          <a href="#quiz">Quick check</a>
        </nav>

        <section className="panel" id="plain-english">
          <h2>In plain English</h2>
          <p>{concept.laymanSummary}</p>
          <p className="viz-caption">
            <strong>Analogy:</strong> {concept.analogy}
          </p>
        </section>

        <section className="panel" id="how-it-works">
          <h2>How it works</h2>
          <ul>
            {concept.explanation.map((para) => (
              <li key={para.slice(0, 24)} style={{ marginBottom: '0.55rem' }}>
                {para}
              </li>
            ))}
          </ul>
        </section>

        <KeyTerms terms={concept.keyTerms} />

        <InteractiveExample spec={concept.interactiveExample} />

        {concept.codeExample ? <CodeBlock {...concept.codeExample} /> : null}

        <section className="panel" id="real-world">
          <h2>Real-world example</h2>
          <h3 style={{ fontSize: '1.1rem' }}>{concept.realWorldExample.title}</h3>
          <p>{concept.realWorldExample.story}</p>
          <p className="viz-caption">
            <strong>Takeaway:</strong> {concept.realWorldExample.takeaway}
          </p>
        </section>

        <Quiz questions={concept.quiz} onComplete={onQuizComplete} />

        <div className="panel" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <button type="button" className="btn btn-secondary" onClick={onMarkUnderstood}>
            Mark understood
          </button>
          {concept.prevConceptId ? (
            <Link className="btn btn-ghost" to={`/generative-ai/${category.id}/${concept.prevConceptId}`}>
              ← Previous
            </Link>
          ) : null}
          {concept.nextConceptId ? (
            <Link className="btn btn-primary" to={`/generative-ai/${category.id}/${concept.nextConceptId}`}>
              Next concept →
            </Link>
          ) : (
            <Link className="btn btn-primary" to={`/generative-ai/${category.id}`}>
              Back to category
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
