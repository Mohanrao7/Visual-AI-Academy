import { Link, useParams } from 'react-router-dom';
import { ConceptCard } from '../components/cards/ConceptCard';
import { getCategory, getSummariesForCategory } from '../data/generative-ai';
import { useProgress } from '../hooks/useProgress';

export function CategoryPage() {
  const { categoryId = '' } = useParams();
  const category = getCategory(categoryId);
  const concepts = getSummariesForCategory(categoryId);
  const { categoryCompletion, isCompleted } = useProgress();

  if (!category) {
    return (
      <div className="section container">
        <h1>Category not found</h1>
        <Link to="/generative-ai">Back to Generative AI</Link>
      </div>
    );
  }

  const pct = categoryCompletion(category.conceptIds);

  return (
    <div className="section">
      <div className="container stack">
        <header>
          <div className="breadcrumb">
            <Link to="/generative-ai">Generative AI</Link>
            <span>/</span>
            <span>{category.title}</span>
          </div>
          <h1 className="page-title">{category.title}</h1>
          <p className="muted">{category.description}</p>
          <div style={{ marginTop: '1rem', maxWidth: 420 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span>Category progress</span>
              <strong>{pct}%</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${pct}%` }} />
            </div>
          </div>
        </header>
        <div className="grid-3">
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              categoryId={category.id}
              completed={isCompleted(concept.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
