import type { ConceptPipeline, PipelineAnnotationMap } from '../../scenes/types';

/**
 * Pipeline metadata lives beside the scenes but in its own per-category module so the
 * block names, operations and hand-off values can be tuned without touching the payload
 * data. Keys are step ids, so reordering a scene's steps cannot desync the two.
 */
const loaders: Record<string, () => Promise<{ pipelines: PipelineAnnotationMap }>> = {
  'ai-fundamentals': () => import('./ai-fundamentals'),
  'how-llms-work': () => import('./how-llms-work'),
  'training-alignment': () => import('./training-alignment'),
  'prompt-engineering': () => import('./prompt-engineering'),
  rag: () => import('./rag'),
  'ai-agents': () => import('./ai-agents'),
  'ai-frameworks': () => import('./ai-frameworks'),
  deployment: () => import('./deployment'),
  'production-ai': () => import('./production-ai'),
};

const cache = new Map<string, PipelineAnnotationMap>();

export async function loadPipelineAnnotations(categoryId: string, conceptId: string): Promise<ConceptPipeline | undefined> {
  let map = cache.get(categoryId);
  if (!map) {
    const loader = loaders[categoryId];
    if (!loader) return undefined;
    map = (await loader()).pipelines;
    cache.set(categoryId, map);
  }
  return map[conceptId];
}
