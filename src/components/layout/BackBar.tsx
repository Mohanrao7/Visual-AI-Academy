import { Link, useLocation } from 'react-router-dom';
import { getCategory } from '../../data/generative-ai/categories';
import '../../styles/back-bar.css';

type BackTarget = { to: string; label: string };

/** Walks one level up the `/generative-ai/:categoryId/:conceptId` hierarchy. */
function resolveBackTarget(pathname: string): BackTarget | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] !== 'generative-ai') return null;

  const [, categoryId, conceptId] = segments;

  if (conceptId && categoryId) {
    const category = getCategory(categoryId);
    return {
      to: `/generative-ai/${categoryId}`,
      label: category?.title ?? 'Category',
    };
  }

  if (categoryId) {
    return { to: '/generative-ai', label: 'Generative AI' };
  }

  return { to: '/', label: 'Home' };
}

export function BackBar() {
  const { pathname } = useLocation();
  const target = resolveBackTarget(pathname);

  if (!target) return null;

  return (
    <div className="back-bar">
      <Link to={target.to} className="back-bar__link" aria-label={`Back to ${target.label}`}>
        <span className="back-bar__icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13 5 8l5-5" />
          </svg>
        </span>
        <span className="back-bar__label">Back to</span>
        <span className="back-bar__target">{target.label}</span>
      </Link>
    </div>
  );
}
