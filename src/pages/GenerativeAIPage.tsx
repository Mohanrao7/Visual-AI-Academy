import { Link } from 'react-router-dom';
import { categories } from '../data/generative-ai';
import { useProgress } from '../hooks/useProgress';

export function GenerativeAIPage() {
  const { categoryCompletion } = useProgress();

  return (
    <div className="section">
      <div className="container">
        <div className="section-head">
          <h1 className="page-title">Generative AI</h1>
          <p>
            A visual curriculum from “what is AI?” through LLMs, prompting, RAG, agents, frameworks, deployment, and
            production practice. Progress is stored locally in your browser.
          </p>
        </div>
        <div className="grid-2">
          {categories.map((cat) => {
            const pct = categoryCompletion(cat.conceptIds);
            return (
              <Link key={cat.id} to={`/generative-ai/${cat.id}`} className="concept-card" style={{ minHeight: 190 }}>
                <div className="meta">
                  <span className="pill">{cat.conceptIds.length} concepts</span>
                  <span className="pill">{pct}% complete</span>
                </div>
                <h3>{cat.title}</h3>
                <p className="promise">{cat.description}</p>
                <div className="progress-bar" aria-hidden="true">
                  <span style={{ width: `${pct}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
