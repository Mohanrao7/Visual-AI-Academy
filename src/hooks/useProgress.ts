import { useCallback, useEffect, useSyncExternalStore } from 'react';

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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Quota / private mode — keep in-memory progress for this session.
  }
}

/** Shared store so every page sees the same progress after Mark understood / quiz submit. */
let progressState: ProgressState = typeof localStorage !== 'undefined' ? readStorage() : {};
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function getSnapshot() {
  return progressState;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function setProgressState(next: ProgressState) {
  progressState = next;
  writeStorage(next);
  emit();
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, getSnapshot, (): ProgressState => ({}));

  // Keep in sync if another tab updates localStorage.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      progressState = readStorage();
      emit();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setProgressState(next);
  }, []);

  const markUnderstood = useCallback(
    (conceptId: string) => {
      const current = { ...progressState };
      const next = {
        ...current,
        [conceptId]: {
          ...current[conceptId],
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
      const passed = total > 0 && score / total >= 0.67;
      const current = { ...progressState };
      const next = {
        ...current,
        [conceptId]: {
          ...current[conceptId],
          quizScore: score,
          quizTotal: total,
          completed: Boolean(current[conceptId]?.completed) || passed,
          understoodAt:
            current[conceptId]?.understoodAt ?? (passed ? new Date().toISOString() : undefined),
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
