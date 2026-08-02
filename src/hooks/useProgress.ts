import { useCallback, useEffect, useState } from 'react';

export type ConceptProgress = {
  completed: boolean;
  quizScore?: number;
  quizTotal?: number;
  understoodAt?: string;
};

type ProgressState = Record<string, ConceptProgress>;

const STORAGE_KEY = 'visual-ai-academy-progress-v1';

function readStorage(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ProgressState;
  } catch {
    return {};
  }
}

function writeStorage(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({});

  useEffect(() => {
    setProgress(readStorage());
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setProgress(next);
    writeStorage(next);
  }, []);

  const markUnderstood = useCallback(
    (conceptId: string) => {
      const next = {
        ...readStorage(),
        [conceptId]: {
          ...readStorage()[conceptId],
          completed: true,
          understoodAt: new Date().toISOString(),
        },
      };
      persist(next);
    },
    [persist],
  );

  const saveQuizResult = useCallback(
    (conceptId: string, score: number, total: number) => {
      const passed = score / total >= 0.67;
      const current = readStorage();
      const next = {
        ...current,
        [conceptId]: {
          ...current[conceptId],
          quizScore: score,
          quizTotal: total,
          completed: current[conceptId]?.completed || passed,
          understoodAt: current[conceptId]?.understoodAt ?? (passed ? new Date().toISOString() : undefined),
        },
      };
      persist(next);
    },
    [persist],
  );

  const isCompleted = useCallback(
    (conceptId: string) => Boolean(progress[conceptId]?.completed),
    [progress],
  );

  const categoryCompletion = useCallback(
    (conceptIds: string[]) => {
      if (conceptIds.length === 0) return 0;
      const done = conceptIds.filter((id) => progress[id]?.completed).length;
      return Math.round((done / conceptIds.length) * 100);
    },
    [progress],
  );

  return {
    progress,
    markUnderstood,
    saveQuizResult,
    isCompleted,
    categoryCompletion,
  };
}
