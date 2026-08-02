import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConceptPageLayout } from '../components/concept/ConceptPageLayout';
import { getCategory, getConceptSummary, loadConcept } from '../data/generative-ai';
import { useProgress } from '../hooks/useProgress';
import type { Concept } from '../types/content';

export function ConceptPage() {
  const { categoryId = '', conceptId = '' } = useParams();
  const category = getCategory(categoryId);
  const summary = getConceptSummary(conceptId);
  const belongsHere = Boolean(category && summary && summary.categoryId === category.id);

  const [concept, setConcept] = useState<Concept | null>(null);
  const { isCompleted, markUnderstood, saveQuizResult } = useProgress();

  useEffect(() => {
    if (!belongsHere) return;

    let active = true;
    setConcept(null);
    void loadConcept(conceptId).then((loaded) => {
      if (active) setConcept(loaded ?? null);
    });

    return () => {
      active = false;
    };
  }, [belongsHere, conceptId]);

  if (!category || !summary || !belongsHere) {
    return (
      <div className="section container">
        <h1>Concept not found</h1>
        <Link to="/generative-ai">Back to Generative AI</Link>
      </div>
    );
  }

  if (!concept) {
    return (
      <div className="section">
        <div className="container stack">
          <div className="breadcrumb">
            <Link to="/generative-ai">Generative AI</Link>
            <span>/</span>
            <Link to={`/generative-ai/${category.id}`}>{category.title}</Link>
            <span>/</span>
            <span>{summary.title}</span>
          </div>
          <h1 className="page-title">{summary.title}</h1>
          <p className="muted" role="status">
            Loading the visualization lab…
          </p>
        </div>
      </div>
    );
  }

  return (
    <ConceptPageLayout
      concept={concept}
      category={category}
      completed={isCompleted(concept.id)}
      onMarkUnderstood={() => markUnderstood(concept.id)}
      onQuizComplete={(score, total) => saveQuizResult(concept.id, score, total)}
      resolveTitle={(id) => getConceptSummary(id)?.title}
      resolveCategoryId={(id) => getConceptSummary(id)?.categoryId}
    />
  );
}
