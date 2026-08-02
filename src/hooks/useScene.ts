import { useEffect, useState } from 'react';
import { loadScene } from '../visualizations/scenes';
import type { SceneSpec } from '../visualizations/scenes/types';

/** Loads the purpose-built visualization scene for a concept, if one exists. */
export function useScene(categoryId: string, conceptId: string): SceneSpec | null {
  const [scene, setScene] = useState<SceneSpec | null>(null);

  useEffect(() => {
    let active = true;
    setScene(null);
    loadScene(categoryId, conceptId).then((result) => {
      if (active) setScene(result);
    });
    return () => {
      active = false;
    };
  }, [categoryId, conceptId]);

  return scene;
}
