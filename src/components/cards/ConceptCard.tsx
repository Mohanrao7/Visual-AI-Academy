import { Link } from 'react-router-dom';
import type { ConceptSummary } from '../../types/content';

type Props = {
  concept: ConceptSummary;
  categoryId: string;
  completed: boolean;
};

export function ConceptCard({ concept, categoryId, completed }: Props) {
  return (
    <Link className="concept-card" to={`/generative-ai/${categoryId}/${concept.id}`}>
      <div className="meta">
        <span className={`pill ${concept.difficulty}`}>{concept.difficulty}</span>
        <span className="pill">~{concept.estimatedMinutes}m</span>
        {completed ? <span className="pill beginner">Done</span> : null}
      </div>
      <h3>{concept.title}</h3>
      <p className="promise">{concept.subtitle}</p>
    </Link>
  );
}
