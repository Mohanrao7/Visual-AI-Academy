/** Shared numeric helpers so every scene shows real computed values instead of hand-typed guesses. */

export function softmax(xs: number[], temperature = 1): number[] {
  const t = Math.max(temperature, 1e-6);
  const scaled = xs.map((x) => x / t);
  const max = Math.max(...scaled);
  const exps = scaled.map((x) => Math.exp(x - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

export function dot(a: number[], b: number[]): number {
  return a.reduce((acc, x, i) => acc + x * (b[i] ?? 0), 0);
}

export function norm(a: number[]): number {
  return Math.sqrt(dot(a, a));
}

export function cosine(a: number[], b: number[]): number {
  const denom = norm(a) * norm(b);
  return denom === 0 ? 0 : dot(a, b) / denom;
}

export function scale(a: number[], k: number): number[] {
  return a.map((x) => x * k);
}

export function add(a: number[], b: number[]): number[] {
  return a.map((x, i) => x + (b[i] ?? 0));
}

export function mean(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
}

export function variance(xs: number[]): number {
  const m = mean(xs);
  return mean(xs.map((x) => (x - m) ** 2));
}

/** LayerNorm: normalise across the feature dimension of a single token, then apply learned gain/bias. */
export function layerNorm(xs: number[], gain = 1, bias = 0, eps = 1e-5): number[] {
  const m = mean(xs);
  const v = variance(xs);
  return xs.map((x) => ((x - m) / Math.sqrt(v + eps)) * gain + bias);
}

/** Cross-entropy loss for a single target, in nats. */
export function crossEntropy(pCorrect: number): number {
  return -Math.log(Math.max(pCorrect, 1e-9));
}

/** Keep only the k highest-scoring entries; the rest are dropped before renormalising. */
export function topKMask(probs: number[], k: number): boolean[] {
  const order = probs.map((p, i) => [p, i] as const).sort((a, b) => b[0] - a[0]);
  const keep = new Set(order.slice(0, k).map(([, i]) => i));
  return probs.map((_, i) => keep.has(i));
}

/** Nucleus (top-p): keep the smallest set of tokens whose cumulative probability first reaches p. */
export function topPMask(probs: number[], p: number): boolean[] {
  const order = probs.map((v, i) => [v, i] as const).sort((a, b) => b[0] - a[0]);
  const keep = new Set<number>();
  let cumulative = 0;
  for (const [value, index] of order) {
    keep.add(index);
    cumulative += value;
    if (cumulative >= p) break;
  }
  return probs.map((_, i) => keep.has(i));
}

export function renormalise(probs: number[], mask: boolean[]): number[] {
  const total = probs.reduce((acc, p, i) => acc + (mask[i] ? p : 0), 0);
  if (total === 0) return probs.map(() => 0);
  return probs.map((p, i) => (mask[i] ? p / total : 0));
}

/** Reciprocal Rank Fusion — the standard way hybrid search merges two ranked lists. */
export function rrf(ranks: (number | undefined)[], k = 60): number {
  return ranks.reduce<number>((acc, r) => acc + (r === undefined ? 0 : 1 / (k + r)), 0);
}

export function round(value: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}
