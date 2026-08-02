import type { Concept, ConceptSummary } from '../../types/content';
import { categories, getCategory } from './categories';
import { conceptSummaries } from './conceptIndex';

/** Full lesson payloads are fetched per category so the entry bundle stays small. */
const loaders: Record<string, () => Promise<{ concepts: Concept[] }>> = {
  'ai-fundamentals': () => import('./concepts/ai-fundamentals'),
  'how-llms-work': () => import('./concepts/how-llms-work'),
  'training-alignment': () => import('./concepts/training-alignment'),
  'prompt-engineering': () => import('./concepts/prompt-engineering'),
  rag: () => import('./concepts/rag'),
  'ai-agents': () => import('./concepts/ai-agents'),
  'ai-frameworks': () => import('./concepts/ai-frameworks'),
  deployment: () => import('./concepts/deployment'),
  'production-ai': () => import('./concepts/production-ai'),
};

const summaryById = new Map(conceptSummaries.map((s) => [s.id, s]));
const loaded = new Map<string, Concept[]>();

export function getConceptSummary(conceptId: string): ConceptSummary | undefined {
  return summaryById.get(conceptId);
}

export function getSummariesForCategory(categoryId: string): ConceptSummary[] {
  const category = getCategory(categoryId);
  if (!category) return [];
  return category.conceptIds
    .map((id) => summaryById.get(id))
    .filter((s): s is ConceptSummary => Boolean(s));
}

export async function loadCategoryConcepts(categoryId: string): Promise<Concept[]> {
  const cached = loaded.get(categoryId);
  if (cached) return cached;

  const loader = loaders[categoryId];
  if (!loader) return [];

  const { concepts } = await loader();
  loaded.set(categoryId, concepts);
  return concepts;
}

export async function loadConcept(conceptId: string): Promise<Concept | undefined> {
  const summary = summaryById.get(conceptId);
  if (!summary) return undefined;

  const concepts = await loadCategoryConcepts(summary.categoryId);
  return concepts.find((c) => c.id === conceptId);
}

export { categories, getCategory, conceptSummaries };
