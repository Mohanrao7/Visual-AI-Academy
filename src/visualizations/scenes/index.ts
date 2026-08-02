import { loadPipelineAnnotations } from '../pipeline/annotations';
import type { SceneMap, SceneSpec } from './types';

/**
 * Scenes are authored per category and loaded on demand, mirroring the flagship
 * component registry. Keeping them out of the concept data files means the
 * visualization for a term can be corrected without touching its prose.
 */
const loaders: Record<string, () => Promise<{ scenes: SceneMap }>> = {
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

const cache = new Map<string, SceneMap>();

export async function loadScene(categoryId: string, conceptId: string): Promise<SceneSpec | null> {
  let map = cache.get(categoryId);
  if (!map) {
    const loader = loaders[categoryId];
    if (!loader) return null;
    map = (await loader()).scenes;
    cache.set(categoryId, map);
  }
  const scene = map[conceptId];
  if (!scene) return null;
  const pipeline = await loadPipelineAnnotations(categoryId, conceptId);
  return pipeline ? { ...scene, pipeline } : scene;
}

export type { SceneSpec };
