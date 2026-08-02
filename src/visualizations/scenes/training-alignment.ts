import { crossEntropy, round, softmax } from './math';
import type { SceneMap } from './types';

/* ---------- cross-entropy, computed for real ---------- */
const CE_PROBS = [0.05, 0.15, 0.35, 0.6, 0.85, 0.97];
const CE_VALUES = CE_PROBS.map((p) => round(crossEntropy(p), 2));

const LOSS_LOGITS_BEFORE = [1.1, 2.6, 2.2, 0.4];
const LOSS_LOGITS_AFTER = [0.6, 4.3, 1.4, 0.2];
const LOSS_LABELS = ['" floor"', '" mat"', '" couch"', '" moon"'];
const P_BEFORE = softmax(LOSS_LOGITS_BEFORE);
const P_AFTER = softmax(LOSS_LOGITS_AFTER);
const CE_BEFORE = round(crossEntropy(P_BEFORE[1]), 2);
const CE_AFTER = round(crossEntropy(P_AFTER[1]), 2);

/* ---------- gradient descent on L(w) = (w − 3)² + 1 ---------- */
const lossAt = (w: number) => (w - 3) ** 2 + 1;
const gradAt = (w: number) => 2 * (w - 3);

function descend(lr: number, steps = 6, start = -2): { ws: number[]; losses: number[] } {
  const ws = [start];
  const losses = [lossAt(start)];
  let w = start;
  for (let i = 0; i < steps; i += 1) {
    w = w - lr * gradAt(w);
    ws.push(round(w, 2));
    losses.push(round(Math.min(lossAt(w), 60), 2));
  }
  return { ws, losses };
}

const GD_SANE = descend(0.3);
const GD_TINY = descend(0.02);
const GD_HUGE = descend(1.05);

/* ---------- optimizer comparison on the same loss ---------- */
function runOptimizer(kind: 'sgd' | 'momentum' | 'adam', steps = 6, start = -2) {
  let w = start;
  let velocity = 0;
  let m = 0;
  let v = 0;
  const losses = [round(lossAt(start), 2)];
  for (let t = 1; t <= steps; t += 1) {
    const g = gradAt(w);
    if (kind === 'sgd') {
      w -= 0.15 * g;
    } else if (kind === 'momentum') {
      velocity = 0.9 * velocity - 0.15 * g;
      w += velocity;
    } else {
      m = 0.9 * m + 0.1 * g;
      v = 0.999 * v + 0.001 * g * g;
      const mHat = m / (1 - 0.9 ** t);
      const vHat = v / (1 - 0.999 ** t);
      w -= (0.6 * mHat) / (Math.sqrt(vHat) + 1e-8);
    }
    losses.push(round(Math.min(lossAt(w), 40), 2));
  }
  return losses;
}

const OPT_SGD = runOptimizer('sgd');
const OPT_MOMENTUM = runOptimizer('momentum');
const OPT_ADAM = runOptimizer('adam');

/* ---------- learning-rate schedule: linear warmup + cosine decay ---------- */
const TOTAL_STEPS = 12;
const WARMUP = 3;
const PEAK_LR = 3e-4;
const LR_SCHEDULE = Array.from({ length: TOTAL_STEPS + 1 }, (_, s) => {
  if (s < WARMUP) return round((PEAK_LR * s) / WARMUP / 1e-4, 2);
  const progress = (s - WARMUP) / (TOTAL_STEPS - WARMUP);
  return round((PEAK_LR * 0.5 * (1 + Math.cos(Math.PI * progress))) / 1e-4, 2);
});

/* ---------- LoRA parameter counts ---------- */
const D = 4096;
const RANK = 8;
const FULL_PARAMS = D * D;
const LORA_PARAMS = 2 * D * RANK;
const LORA_PERCENT = round((LORA_PARAMS / FULL_PARAMS) * 100, 3);

export const scenes: SceneMap = {
  datasets: {
    title: 'Datasets and the splits that keep you honest',
    description: 'Where training data comes from, what gets thrown away, and why one slice must never be trained on.',
    legend: [
      { tone: 'active', label: 'kept for training' },
      { tone: 'bad', label: 'removed' },
      { tone: 'good', label: 'held out for evaluation' },
    ],
    mathNote:
      'No formula here, but one rule: any example used to fit θ cannot be used to estimate generalisation. If a test item leaks into training, the measured error is a lower bound on training error, not an estimate of real-world error.',
    steps: [
      {
        id: 'ds-1',
        caption: 'Collection — raw sources arrive at wildly different scales and quality levels.',
        frame: {
          kind: 'blocks',
          heading: 'A pretraining mixture',
          groups: [
            {
              label: 'Raw token counts by source',
              blocks: [
                { label: 'web crawl', weight: 60, tone: 'neutral' },
                { label: 'code', weight: 15, tone: 'neutral' },
                { label: 'books', weight: 12, tone: 'neutral' },
                { label: 'wiki', weight: 8, tone: 'neutral' },
                { label: 'curated', weight: 5, tone: 'active' },
              ],
              note: 'Mixture weights are a design choice with a large effect on the resulting model.',
            },
          ],
        },
      },
      {
        id: 'ds-2',
        caption: 'Filtering — most of the crawl is discarded. Quality heuristics, language detection and safety filters cut it hard.',
        frame: {
          kind: 'bars',
          heading: 'What survives filtering, per 100 raw web documents',
          bars: [
            { label: 'kept', value: 24, tone: 'active' },
            { label: 'near-duplicate', value: 38, tone: 'bad' },
            { label: 'boilerplate / nav', value: 21, tone: 'bad' },
            { label: 'wrong language', value: 11, tone: 'bad' },
            { label: 'unsafe / PII', value: 6, tone: 'bad' },
          ],
          format: 'raw',
          max: 40,
          footer: 'Illustrative ratios. The consistent finding is that aggressive filtering beats raw volume.',
        },
      },
      {
        id: 'ds-3',
        caption:
          'Splitting — the surviving data is divided. Validation guides your decisions; test is touched once, at the end.',
        frame: {
          kind: 'blocks',
          heading: 'Three disjoint slices',
          groups: [
            {
              label: 'Filtered corpus',
              blocks: [
                { label: 'train 90%', weight: 90, tone: 'active' },
                { label: 'validation 5%', weight: 5, tone: 'warn' },
                { label: 'test 5%', weight: 5, tone: 'good' },
              ],
              note: 'Validation is for tuning. Test is for one honest number, reported once.',
            },
          ],
        },
      },
      {
        id: 'ds-4',
        caption:
          'Leakage — if a test example also sits in training, the model recalls it instead of generalising and your metric becomes fiction.',
        frame: {
          kind: 'chart',
          heading: 'Reported accuracy with and without contamination',
          series: [
            { label: 'contaminated test set', tone: 'bad', points: [0.62, 0.74, 0.85, 0.92, 0.96, 0.98] },
            { label: 'clean held-out set', tone: 'good', points: [0.6, 0.68, 0.72, 0.74, 0.74, 0.73], dashed: true },
          ],
          xLabel: 'training progress',
          yLabel: 'accuracy',
          yMax: 1.05,
          footer: 'The gap is not skill. It is memorisation being scored as understanding.',
        },
      },
      {
        id: 'ds-5',
        caption:
          'Governance — licence, consent, PII and bias are properties of the dataset, so they become properties of the model.',
        callout: 'Data decisions are the most durable decisions in the project. You can swap the architecture; you cannot un-train the corpus.',
        frame: {
          kind: 'panels',
          heading: 'Questions with no technical answer',
          panels: [
            { title: 'Licence', body: 'Are you allowed to train on this? Answer before the run, not after.', tone: 'warn' },
            { title: 'Consent and PII', body: 'Personal data in the corpus can be regurgitated at inference time.', tone: 'bad' },
            { title: 'Representation', body: 'Whatever is under-represented in the data is under-served by the model.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  preprocessing: {
    title: 'Preprocessing: raw text to training records',
    description: 'The concrete transformations applied to one document before it can be used as a training example.',
    legend: [
      { tone: 'bad', label: 'removed' },
      { tone: 'good', label: 'kept' },
    ],
    mathNote:
      'Packing matters for throughput: short examples concatenated up to the sequence length avoid wasting compute on padding tokens. A separator or attention-mask reset stops one packed document from attending into the next.',
    steps: [
      {
        id: 'pp-1',
        caption: 'Raw scrape — HTML, navigation chrome and encoding noise surround the actual content.',
        frame: {
          kind: 'panels',
          heading: 'One crawled page',
          panels: [
            {
              title: 'As downloaded',
              body: '<nav>Home | About</nav><h1>Refund policy</h1><p>Customers may request a refund within 30&nbsp;days.</p><footer>© 2019 · Cookie settings</footer>',
              tone: 'warn',
            },
          ],
        },
      },
      {
        id: 'pp-2',
        caption: 'Cleaning — markup is stripped, entities decoded, and boilerplate removed so only content text remains.',
        frame: {
          kind: 'ranking',
          heading: 'Line-by-line decisions',
          columns: [
            {
              title: 'Discarded',
              items: [
                { label: '"Home | About"', score: 'nav', tone: 'bad' },
                { label: '"© 2019 · Cookie settings"', score: 'boilerplate', tone: 'bad' },
                { label: '&nbsp; entity', score: 'decoded', tone: 'bad' },
              ],
            },
            {
              title: 'Kept',
              items: [
                { label: '"Refund policy"', score: 'heading', tone: 'good' },
                { label: '"Customers may request a refund within 30 days."', score: 'content', tone: 'good' },
              ],
            },
          ],
        },
      },
      {
        id: 'pp-3',
        caption: 'Privacy filtering — pattern matching and classifiers remove personal data before it can be memorised.',
        frame: {
          kind: 'panels',
          heading: 'PII redaction',
          panels: [
            { title: 'Before', body: '"Contact priya.rao@example.com or call +91 98765 43210 for refund status."', tone: 'bad' },
            { title: 'After', body: '"Contact [EMAIL] or call [PHONE] for refund status."', tone: 'good' },
          ],
          footer: 'Imperfect, but it lowers the chance of a model reciting a real address when prompted.',
        },
      },
      {
        id: 'pp-4',
        caption:
          'Deduplication — near-identical copies are collapsed. Duplicates make the model over-weight whatever happens to be repeated.',
        frame: {
          kind: 'bars',
          heading: 'Copies of the same paragraph across the corpus',
          bars: [
            { label: 'before dedupe', value: 1470, tone: 'bad', note: 'syndicated across mirror sites' },
            { label: 'after dedupe', value: 1, tone: 'good' },
          ],
          format: 'raw',
          max: 1500,
          footer: 'Deduplication reliably improves quality per token and reduces verbatim memorisation.',
        },
      },
      {
        id: 'pp-5',
        caption:
          'Packing — cleaned documents are tokenised and concatenated to fill the sequence length exactly, so no compute is spent on padding.',
        callout: 'Every one of these steps is silent. A bug here shows up months later as a mysterious quality problem.',
        frame: {
          kind: 'budget',
          heading: 'Filling a 2,048-token training sequence',
          capacity: 2048,
          segments: [
            { label: 'doc A', tokens: 640, tone: 'active' },
            { label: '<eos>', tokens: 1, tone: 'accent' },
            { label: 'doc B', tokens: 910, tone: 'active' },
            { label: '<eos>', tokens: 1, tone: 'accent' },
            { label: 'doc C (start)', tokens: 496, tone: 'active' },
          ],
          footer: 'Doc C continues in the next sequence. Padding-free packing can be 20–30% cheaper per epoch.',
        },
      },
    ],
  },

  'tokenization-training': {
    title: 'Training a tokenizer (BPE merges)',
    description: 'Where the vocabulary comes from: counting adjacent pairs and merging the most frequent one, over and over.',
    legend: [
      { tone: 'active', label: 'pair being merged' },
      { tone: 'good', label: 'new vocabulary entry' },
    ],
    mathNote:
      'Byte-Pair Encoding starts from bytes and repeatedly merges the most frequent adjacent pair until the vocabulary reaches its target size. Once frozen, the vocabulary is tied to the embedding matrix — changing it invalidates every learned embedding row, which is why tokenizers are almost never changed after pretraining.',
    steps: [
      {
        id: 'tt-1',
        caption:
          'Start from bytes — before any merges, the vocabulary is just the 256 byte values. Every word is spelled out one character at a time.',
        frame: {
          kind: 'tokens',
          heading: 'Corpus sample "lower lowest slower" at merge 0',
          tokens: 'l o w e r _ l o w e s t _ s l o w e r'.split(' ').map((t) => ({ text: t === '_' ? ' ' : t, tone: 'neutral' as const })),
          footer: '19 tokens for 19 characters. Correct, but hopelessly inefficient.',
        },
      },
      {
        id: 'tt-2',
        caption:
          'Count pairs — every adjacent pair in the corpus is tallied. The most frequent pair wins the next merge slot.',
        frame: {
          kind: 'bars',
          heading: 'Adjacent pair frequencies in the training corpus',
          bars: [
            { label: '"l" + "o"', value: 3, tone: 'active', note: 'most frequent → merge this' },
            { label: '"o" + "w"', value: 3, tone: 'neutral' },
            { label: '"w" + "e"', value: 3, tone: 'neutral' },
            { label: '"e" + "r"', value: 2, tone: 'neutral' },
            { label: '"e" + "s"', value: 1, tone: 'muted' },
          ],
          format: 'raw',
          max: 3.5,
          footer: 'Real corpora count billions of pairs; ties are broken by a fixed rule so the process is deterministic.',
        },
      },
      {
        id: 'tt-3',
        caption:
          'Merge — "l"+"o" becomes the single token "lo" and is added to the vocabulary. The corpus is re-encoded and the count repeats.',
        frame: {
          kind: 'tokens',
          heading: 'After merge 1',
          tokens: [
            { text: 'lo', tone: 'good', note: 'new' },
            { text: 'w', tone: 'neutral' },
            { text: 'e', tone: 'neutral' },
            { text: 'r', tone: 'neutral' },
            { text: ' ', tone: 'neutral' },
            { text: 'lo', tone: 'good' },
            { text: 'w', tone: 'neutral' },
            { text: 'e', tone: 'neutral' },
            { text: 's', tone: 'neutral' },
            { text: 't', tone: 'neutral' },
          ],
          footer: 'Repeat this a few tens of thousands of times and common words become single tokens.',
        },
      },
      {
        id: 'tt-4',
        caption:
          'After 30,000 merges — frequent words are one token, rare words are still assembled from pieces. Nothing is ever out-of-vocabulary.',
        frame: {
          kind: 'tokens',
          heading: 'The finished tokenizer on new text',
          source: 'lower lowest antidisestablishmentarianism',
          tokens: [
            { text: 'lower', id: 6042, tone: 'good' },
            { text: ' lowest', id: 9016, tone: 'good' },
            { text: ' anti', id: 3098, tone: 'warn' },
            { text: 'dis', id: 6381, tone: 'warn' },
            { text: 'establishment', id: 24138, tone: 'warn' },
            { text: 'arian', id: 8997, tone: 'warn' },
            { text: 'ism', id: 1042, tone: 'warn' },
          ],
          footer: '2 tokens for the two common words, 5 for the rare one. Frequency in the training corpus decides.',
        },
      },
      {
        id: 'tt-5',
        caption:
          'Domain fit — a vocabulary fitted on English web text over-fragments code and other languages, making them slower and more expensive.',
        callout: 'Tokenizer choice is a fairness and cost decision, not just an engineering detail.',
        frame: {
          kind: 'bars',
          heading: 'Tokens needed for the same sentence, English-fitted vocabulary',
          bars: [
            { label: 'English', value: 11, tone: 'good' },
            { label: 'Spanish', value: 15, tone: 'active' },
            { label: 'Hindi (Devanagari)', value: 34, tone: 'warn' },
            { label: 'Thai', value: 41, tone: 'bad', note: '≈3.7× the English cost for the same meaning' },
          ],
          format: 'raw',
          max: 45,
          footer: 'Same context window, same per-token price — but far less content fits and it costs more.',
        },
      },
    ],
  },

  'loss-function': {
    title: 'Cross-entropy loss',
    description: 'The number training actually minimises, and how it responds to the probability placed on the correct token.',
    legend: [
      { tone: 'good', label: 'correct token' },
      { tone: 'muted', label: 'everything else' },
    ],
    mathNote:
      'For a single position, cross-entropy is L = −Σ_v y_v · log p_v. With a one-hot target this collapses to L = −log p(correct). So L = 0.69 nats when p = 0.5, 0.10 when p = 0.9, and 3.00 when p = 0.05. Total pretraining loss is this averaged over every token position in the batch. Perplexity is simply exp(L).',
    steps: [
      {
        id: 'ls-1',
        caption:
          'The prediction — the model outputs a distribution over the vocabulary. The training text says the next token is " mat".',
        frame: {
          kind: 'bars',
          heading: 'p(next token | "The cat sat on the") before this update',
          bars: LOSS_LABELS.map((label, i) => ({
            label,
            value: P_BEFORE[i],
            tone: i === 1 ? 'good' : 'muted',
            note: i === 1 ? 'the true next token' : undefined,
          })),
          format: 'percent',
          max: 0.7,
          footer: `The correct token got ${(P_BEFORE[1] * 100).toFixed(1)}% of the mass.`,
        },
      },
      {
        id: 'ls-2',
        caption:
          `Score it — cross-entropy looks only at the probability on the correct token: L = −log(${round(P_BEFORE[1], 3)}) = ${CE_BEFORE} nats.`,
        frame: {
          kind: 'bars',
          heading: 'How the loss responds to p(correct)',
          bars: CE_PROBS.map((p, i) => ({
            label: `p = ${p.toFixed(2)}`,
            value: CE_VALUES[i],
            tone: i === 2 ? 'active' : 'neutral',
            note: i === 0 ? 'confidently wrong is punished hard' : i === 5 ? 'confidently right is nearly free' : undefined,
          })),
          format: 'decimal2',
          max: 3.2,
          footer: 'Strictly decreasing: more probability on the truth always means less loss. That is the entire training signal.',
        },
      },
      {
        id: 'ls-3',
        caption:
          `After a gradient step — the probability on " mat" rose, so the loss fell from ${CE_BEFORE} to ${CE_AFTER} nats.`,
        frame: {
          kind: 'bars',
          heading: 'Same prompt, after the update (hatched = before)',
          bars: LOSS_LABELS.map((label, i) => ({
            label,
            value: P_AFTER[i],
            ghost: P_BEFORE[i],
            tone: i === 1 ? 'good' : 'muted',
          })),
          format: 'percent',
          max: 0.9,
          footer: `Loss ${CE_BEFORE} → ${CE_AFTER} nats. Mass moved from the wrong tokens onto the right one.`,
        },
      },
      {
        id: 'ls-4',
        caption:
          'Averaged over everything — the reported training loss is this quantity averaged across every token in every batch.',
        frame: {
          kind: 'chart',
          heading: 'Pretraining loss over a run',
          series: [
            { label: 'training loss (nats/token)', tone: 'active', points: [10.4, 5.2, 3.6, 2.9, 2.6, 2.45, 2.36, 2.31] },
          ],
          xLabel: 'billions of tokens seen',
          yLabel: 'loss',
          yMax: 11,
          footer: 'Perplexity = exp(loss). A loss of 2.31 nats is a perplexity of about 10 — roughly "10 equally likely next words".',
        },
      },
      {
        id: 'ls-5',
        caption:
          'Loss is a proxy, not a goal — it measures likelihood of the observed text. It says nothing about truth, safety or usefulness.',
        callout: 'A model can lower its loss by becoming a better mimic of the corpus, including the corpus\'s errors.',
        frame: {
          kind: 'panels',
          heading: 'What low loss does and does not buy',
          panels: [
            { title: 'Does mean', body: 'The model predicts real text well, so it writes fluently and follows the corpus\'s conventions.', tone: 'good' },
            { title: 'Does not mean', body: 'Factual accuracy, calibrated confidence, safe refusals, or good behaviour on your specific task.', tone: 'warn' },
            { title: 'So also track', body: 'Task metrics and evaluation suites that measure the thing you actually care about.', tone: 'accent' },
          ],
        },
      },
    ],
  },

  'gradient-descent': {
    title: 'Gradient descent: taking the step',
    description:
      'Given gradients, how parameters actually move — and what the learning rate does to that movement. (Computing the gradients is backpropagation, the next concept.)',
    legend: [
      { tone: 'good', label: 'well-chosen learning rate' },
      { tone: 'warn', label: 'too small' },
      { tone: 'bad', label: 'too large' },
    ],
    mathNote:
      'Update rule: w ← w − η·∇_w L. Here L(w) = (w−3)² + 1 so ∇L = 2(w−3), and every trace above is that rule iterated from w₀ = −2. With η = 0.3 the parameter converges; with η = 1.05 the multiplier |1 − 2η| = 1.1 exceeds 1 and the steps grow without bound. Stochastic gradient descent replaces the exact ∇L with an estimate from one mini-batch.',
    steps: [
      {
        id: 'gd-1',
        caption:
          'Where we are — the parameter sits at w = −2. The gradient at that point is ∇L = 2(w−3) = −10: the slope points steeply downhill to the right.',
        frame: {
          kind: 'bars',
          heading: 'Current state',
          bars: [
            { label: 'parameter w', value: -2, tone: 'accent' },
            { label: 'loss L(w)', value: lossAt(-2), tone: 'bad' },
            { label: 'gradient ∇L', value: gradAt(-2), tone: 'warn', note: 'negative → increasing w reduces loss' },
          ],
          format: 'decimal1',
          max: 27,
        },
      },
      {
        id: 'gd-2',
        caption:
          'The step — move against the gradient, scaled by the learning rate: w ← w − 0.3 × (−10) = 1.0. One step, a big improvement.',
        frame: {
          kind: 'bars',
          heading: 'Before and after one update with η = 0.3',
          bars: [
            { label: 'w before', value: GD_SANE.ws[0], tone: 'muted' },
            { label: 'w after', value: GD_SANE.ws[1], tone: 'good', note: 'moved 3.0 toward the optimum at w = 3' },
            { label: 'L before', value: GD_SANE.losses[0], tone: 'muted' },
            { label: 'L after', value: GD_SANE.losses[1], tone: 'good' },
          ],
          format: 'decimal2',
          max: 27,
          footer: 'Nothing clever happened — the gradient said which way is downhill and η said how far to go.',
        },
      },
      {
        id: 'gd-3',
        caption:
          'Repeat — six steps at η = 0.3 land the parameter essentially on the optimum, with the loss flattening out at its minimum of 1.',
        frame: {
          kind: 'chart',
          heading: 'Loss over six updates, η = 0.3',
          series: [{ label: 'η = 0.3', tone: 'good', points: GD_SANE.losses }],
          xLabel: 'update step',
          yLabel: 'loss',
          yMax: 28,
          footer: `w trajectory: ${GD_SANE.ws.join(' → ')}`,
        },
      },
      {
        id: 'gd-4',
        caption:
          'Learning rate is the whole game — too small crawls, too large overshoots so badly that the loss grows every step.',
        frame: {
          kind: 'chart',
          heading: 'Same loss surface, three learning rates',
          series: [
            { label: 'η = 0.02 (too small)', tone: 'warn', points: GD_TINY.losses, dashed: true },
            { label: 'η = 0.30 (sane)', tone: 'good', points: GD_SANE.losses },
            { label: 'η = 1.05 (diverging)', tone: 'bad', points: GD_HUGE.losses },
          ],
          xLabel: 'update step',
          yLabel: 'loss (clipped at 60)',
          yMax: 62,
          footer: `η = 1.05 sends w to ${GD_HUGE.ws[GD_HUGE.ws.length - 1]}. Divergence looks like NaNs a few hundred steps later.`,
        },
      },
      {
        id: 'gd-5',
        caption:
          'Stochastic in practice — the true gradient over the full dataset is unaffordable, so each step uses a noisy estimate from one mini-batch.',
        callout: 'Backpropagation computes ∇L. Gradient descent decides what to do with it. Two separate jobs, often confused.',
        frame: {
          kind: 'chart',
          heading: 'Full-batch versus mini-batch descent',
          series: [
            { label: 'full-batch (exact ∇L)', tone: 'good', points: [26, 12.4, 6.2, 3.5, 2.1, 1.5, 1.2] },
            { label: 'mini-batch (noisy ∇L)', tone: 'accent', points: [26, 14.1, 7.8, 5.2, 2.6, 2.4, 1.4], dashed: true },
          ],
          xLabel: 'update step',
          yLabel: 'loss',
          yMax: 28,
          footer: 'Noisier per step, but hundreds of times cheaper per step — so it reaches a low loss far sooner in wall-clock time.',
        },
      },
    ],
  },

  backpropagation: {
    title: 'Backpropagation: computing the gradients',
    description:
      'Before anything can be updated, every parameter needs to know how much it contributed to the loss. That is a backward pass, not an update.',
    legend: [
      { tone: 'accent', label: 'forward pass (activations)' },
      { tone: 'bad', label: 'backward pass (gradients)' },
    ],
    mathNote:
      'Chain rule: ∂L/∂w₁ = (∂L/∂a₃)·(∂a₃/∂a₂)·(∂a₂/∂a₁)·(∂a₁/∂w₁). Backpropagation evaluates this right-to-left, reusing each partial product instead of recomputing it — which is why one backward pass costs about the same as one forward pass regardless of depth. Computing each parameter\'s derivative independently would be quadratic in the number of layers.',
    steps: [
      {
        id: 'bp-1',
        caption:
          'Forward pass — inputs flow through the layers and produce a prediction. Every intermediate activation is stored, because the backward pass will need it.',
        frame: {
          kind: 'network',
          heading: 'Forward: compute activations and the loss',
          layers: [
            { label: 'input', units: 3, note: 'x' },
            { label: 'layer 1', units: 4, note: 'a₁' },
            { label: 'layer 2', units: 4, note: 'a₂' },
            { label: 'output', units: 2, note: 'a₃' },
            { label: 'loss', units: 1, note: 'L = 2.31' },
          ],
          direction: 'forward',
          activeLayer: 4,
          edgeLabel: 'activations stored for reuse — this is why training needs far more memory than inference',
        },
      },
      {
        id: 'bp-2',
        caption:
          'Start at the loss — the first derivative is ∂L/∂a₃, how much the loss changes if the output changes. Everything else is derived from this.',
        frame: {
          kind: 'network',
          heading: 'Backward step 1: gradient at the output',
          layers: [
            { label: 'input', units: 3, note: '' },
            { label: 'layer 1', units: 4, note: '' },
            { label: 'layer 2', units: 4, note: '' },
            { label: 'output', units: 2, note: '∂L/∂a₃' },
            { label: 'loss', units: 1, note: 'L' },
          ],
          direction: 'backward',
          activeLayer: 3,
          edgeLabel: '∂L/∂a₃ = −0.42',
        },
      },
      {
        id: 'bp-3',
        caption:
          'Chain rule backwards — each layer multiplies the incoming gradient by its own local derivative and passes the result to the layer below.',
        frame: {
          kind: 'bars',
          heading: 'The product being accumulated, layer by layer',
          bars: [
            { label: '∂L/∂a₃', value: -0.42, tone: 'bad' },
            { label: '× ∂a₃/∂a₂', value: 0.61, tone: 'accent' },
            { label: '= ∂L/∂a₂', value: round(-0.42 * 0.61, 3), tone: 'bad' },
            { label: '× ∂a₂/∂a₁', value: 0.48, tone: 'accent' },
            { label: '= ∂L/∂a₁', value: round(-0.42 * 0.61 * 0.48, 3), tone: 'bad', note: 'shrinking with depth — the vanishing-gradient problem' },
          ],
          format: 'decimal2',
          max: 1,
          footer: 'Each factor below 1 shrinks the signal. Residual connections add an identity term that stops this collapse.',
        },
      },
      {
        id: 'bp-4',
        caption:
          'Every parameter gets a number — the gradient tells each weight the direction and size of its contribution to the loss. Nothing has moved yet.',
        frame: {
          kind: 'network',
          heading: 'Backward complete: ∂L/∂w for every weight',
          layers: [
            { label: 'input', units: 3, note: '' },
            { label: 'layer 1', units: 4, note: '∂L/∂W₁' },
            { label: 'layer 2', units: 4, note: '∂L/∂W₂' },
            { label: 'output', units: 2, note: '∂L/∂W₃' },
            { label: 'loss', units: 1, note: 'L' },
          ],
          direction: 'backward',
          activeLayer: 1,
          edgeLabel: 'one gradient per parameter — for a 7B model that is 7 billion numbers',
        },
      },
      {
        id: 'bp-5',
        caption:
          'Hand-off — backpropagation stops here. The optimizer takes these gradients and decides the actual parameter update.',
        callout: 'Autograd frameworks build this backward graph automatically from the forward code you wrote.',
        frame: {
          kind: 'flow',
          heading: 'One training step, split by responsibility',
          stages: [
            { label: 'Forward', detail: 'compute predictions and loss', tone: 'accent' },
            { label: 'Backward', detail: 'chain rule → ∂L/∂w for every w', tone: 'bad' },
            { label: 'Optimizer', detail: 'turn gradients into an update', tone: 'active' },
            { label: 'Apply', detail: 'w ← w − η·(update)', tone: 'good' },
            { label: 'Zero grads', detail: 'clear buffers before the next batch' },
          ],
          activeIndex: 1,
          footer: 'Backprop answers "who is responsible?". Gradient descent answers "what do we do about it?".',
        },
      },
    ],
  },

  optimizers: {
    title: 'Optimizers: turning gradients into updates',
    description: 'Same gradients, same loss surface — three different rules for deciding how far and in which direction to actually move.',
    legend: [
      { tone: 'neutral', label: 'plain SGD' },
      { tone: 'accent', label: 'SGD with momentum' },
      { tone: 'good', label: 'Adam / AdamW' },
    ],
    mathNote:
      'SGD: w ← w − η·g. Momentum: v ← βv − η·g, w ← w + v, which accumulates a velocity across steps. Adam keeps running estimates of the mean (m) and uncentred variance (v) of the gradient and steps by η·m̂/(√v̂ + ε), giving each parameter its own effective rate. AdamW applies weight decay directly to w rather than folding it into g, which is why it regularises more predictably.',
    steps: [
      {
        id: 'op-1',
        caption: 'Plain SGD — step directly against the gradient, every time. Simple, and it has no memory of the previous steps.',
        frame: {
          kind: 'chart',
          heading: 'SGD, η = 0.15',
          series: [{ label: 'SGD', tone: 'neutral', points: OPT_SGD }],
          xLabel: 'update step',
          yLabel: 'loss',
          yMax: 28,
          footer: 'Steady but slow when the gradient is consistently pointing the same way.',
        },
      },
      {
        id: 'op-2',
        caption:
          'Momentum — the update carries a velocity from previous steps, so consistent directions accelerate and noisy ones cancel out.',
        frame: {
          kind: 'chart',
          heading: 'Momentum β = 0.9 versus plain SGD',
          series: [
            { label: 'SGD', tone: 'neutral', points: OPT_SGD, dashed: true },
            { label: 'momentum', tone: 'accent', points: OPT_MOMENTUM },
          ],
          xLabel: 'update step',
          yLabel: 'loss',
          yMax: 28,
          footer: 'Momentum can overshoot the minimum and swing back — visible as the dip below and recovery.',
        },
      },
      {
        id: 'op-3',
        caption:
          'Adam — per-parameter adaptive step sizes from running mean and variance of the gradient. Rare parameters get larger effective steps.',
        frame: {
          kind: 'chart',
          heading: 'All three on the same problem',
          series: [
            { label: 'SGD', tone: 'neutral', points: OPT_SGD, dashed: true },
            { label: 'momentum', tone: 'accent', points: OPT_MOMENTUM, dashed: true },
            { label: 'Adam', tone: 'good', points: OPT_ADAM },
          ],
          xLabel: 'update step',
          yLabel: 'loss',
          yMax: 28,
          footer: 'On a well-conditioned toy problem the gap is small. On real transformers Adam-family optimizers are dramatically more robust.',
        },
      },
      {
        id: 'op-4',
        caption:
          'The memory cost — Adam stores two extra numbers per parameter, so optimizer state can be twice the size of the model itself.',
        frame: {
          kind: 'blocks',
          heading: 'GPU memory for a 7B model in mixed precision',
          groups: [
            {
              label: 'SGD',
              blocks: [
                { label: 'weights 14 GB', weight: 14, tone: 'frozen' },
                { label: 'grads 14 GB', weight: 14, tone: 'accent' },
              ],
              note: '≈ 28 GB',
            },
            {
              label: 'AdamW',
              blocks: [
                { label: 'weights 14 GB', weight: 14, tone: 'frozen' },
                { label: 'grads 14 GB', weight: 14, tone: 'accent' },
                { label: 'm 28 GB', weight: 28, tone: 'warn' },
                { label: 'v 28 GB', weight: 28, tone: 'warn' },
              ],
              note: '≈ 84 GB — the optimizer state, in fp32, dominates. This is a large part of why LoRA exists.',
            },
          ],
        },
      },
      {
        id: 'op-5',
        caption:
          'Weight decay — AdamW additionally shrinks every weight slightly each step, discouraging large parameters and improving generalisation.',
        callout: 'AdamW plus a warmup-then-decay schedule is the current default for LLM training. Deviating from it needs a reason.',
        frame: {
          kind: 'bars',
          heading: 'Effect of decoupled weight decay on parameter magnitude',
          bars: [
            { label: 'no decay', value: 4.8, tone: 'warn', note: 'weights drift large; sharper minima, worse generalisation' },
            { label: 'λ = 0.01', value: 1.9, tone: 'good' },
            { label: 'λ = 0.1', value: 0.7, tone: 'accent', note: 'strong regularisation; can underfit' },
          ],
          format: 'decimal1',
          max: 5.5,
          footer: 'Mean absolute weight after training. Decay is a dial between memorisation and smoothness.',
        },
      },
    ],
  },

  'epochs-batches-lr': {
    title: 'Epochs, batches and the learning-rate schedule',
    description: 'The rhythm of a training run: how data is grouped and how the step size changes over time.',
    legend: [
      { tone: 'active', label: 'learning rate' },
      { tone: 'warn', label: 'warmup phase' },
    ],
    mathNote:
      'One optimizer step consumes one batch. Steps per epoch = dataset size / batch size. Linear warmup: η_t = η_max · t / t_warmup. Cosine decay after warmup: η_t = η_max · ½(1 + cos(π · progress)). For LLM pretraining the headline number is usually total tokens seen, not epochs, because the corpus is typically traversed once or less.',
    steps: [
      {
        id: 'eb-1',
        caption:
          'Batch — a group of examples processed together to produce one gradient and one parameter update. Not one example, not the whole dataset.',
        frame: {
          kind: 'blocks',
          heading: '1,000,000 examples, batch size 256',
          groups: [
            {
              label: 'One epoch',
              blocks: [
                { label: 'batch 1', weight: 1, tone: 'active' },
                { label: 'batch 2', weight: 1, tone: 'active' },
                { label: 'batch 3', weight: 1, tone: 'active' },
                { label: '… 3,902 more batches', weight: 8, tone: 'neutral' },
              ],
              note: '3,906 optimizer steps per epoch. Each step sees 256 examples and updates every parameter once.',
            },
          ],
        },
      },
      {
        id: 'eb-2',
        caption:
          'Batch size trades noise against throughput — small batches give noisy gradients, large batches give smooth ones but need a matching learning rate.',
        frame: {
          kind: 'chart',
          heading: 'Loss trajectory by batch size',
          series: [
            { label: 'batch 8 (noisy)', tone: 'warn', points: [4.2, 3.6, 3.9, 3.1, 3.3, 2.7, 2.9, 2.5], dashed: true },
            { label: 'batch 256', tone: 'good', points: [4.2, 3.7, 3.3, 3.0, 2.8, 2.65, 2.55, 2.48] },
            { label: 'batch 4096, same η', tone: 'accent', points: [4.2, 4.0, 3.85, 3.75, 3.68, 3.62, 3.58, 3.55] },
          ],
          xLabel: 'wall-clock time',
          yLabel: 'loss',
          yMax: 4.6,
          footer: 'The big batch is not worse per se — it is under-stepping. Larger batches generally want a larger learning rate.',
        },
      },
      {
        id: 'eb-3',
        caption:
          'Warmup — the learning rate starts near zero and ramps up. Early full-size steps on a random initialisation frequently blow the run up.',
        frame: {
          kind: 'chart',
          heading: 'Learning rate schedule (×10⁻⁴)',
          series: [{ label: 'η_t', tone: 'active', points: LR_SCHEDULE }],
          xLabel: 'training step (thousands)',
          yLabel: 'η ×10⁻⁴',
          yMax: 3.6,
          markers: [{ atIndex: WARMUP, label: 'peak' }],
          footer: `Linear warmup for the first ${WARMUP}k steps to η = 3×10⁻⁴, then cosine decay toward zero.`,
        },
      },
      {
        id: 'eb-4',
        caption:
          'Decay — the rate is annealed toward zero so late updates make small refinements instead of jumping out of the basin.',
        frame: {
          kind: 'bars',
          heading: 'Step size at three points in the run',
          bars: [
            { label: 'step 500 (warmup)', value: 0.5, tone: 'warn' },
            { label: 'step 3,000 (peak)', value: 3.0, tone: 'active' },
            { label: 'step 11,000 (decayed)', value: 0.1, tone: 'good' },
          ],
          format: 'decimal2',
          max: 3.4,
          footer: 'Same optimizer, same gradients — a 30× difference in how far each step moves.',
        },
      },
      {
        id: 'eb-5',
        caption:
          'For LLMs, count tokens — pretraining usually makes a single pass or less over the corpus, so "epochs" stops being the useful unit.',
        callout: 'Fine-tuning is different: small datasets, 1–3 epochs, and more than that usually means memorisation.',
        frame: {
          kind: 'panels',
          heading: 'Which unit to quote',
          panels: [
            { title: 'Pretraining', body: '"Trained on 2 trillion tokens." Epochs would be a fraction, and the corpus is not traversed uniformly.', tone: 'accent' },
            { title: 'Fine-tuning', body: '"3 epochs over 12,000 examples." Small enough that repeated passes make sense — up to a point.', tone: 'active' },
          ],
        },
      },
    ],
  },

  'pretraining-vs-finetuning': {
    title: 'Pretraining vs fine-tuning',
    description: 'Two stages that differ by three orders of magnitude in cost — and one risk that only appears in the second.',
    legend: [
      { tone: 'accent', label: 'pretraining' },
      { tone: 'active', label: 'fine-tuning' },
    ],
    mathNote:
      'Both stages minimise the same next-token cross-entropy; only the data distribution and the learning rate differ. Fine-tuning typically uses η one to two orders of magnitude smaller than pretraining precisely to limit how far the weights move from the base.',
    steps: [
      {
        id: 'pf-1',
        caption:
          'Pretraining — broad data, enormous scale, no particular task. The output is general capability with no manners.',
        frame: {
          kind: 'blocks',
          heading: 'Scale comparison, log-ish',
          groups: [
            {
              label: 'Pretraining',
              blocks: [
                { label: '~2,000,000,000,000 tokens · thousands of GPU-months', weight: 100, tone: 'accent' },
              ],
            },
            {
              label: 'Fine-tuning',
              blocks: [{ label: '~20,000,000 tokens · GPU-hours', weight: 1, tone: 'active' }],
              note: 'Roughly 1/100,000 of the data. This is why almost nobody pretrains.',
            },
          ],
        },
      },
      {
        id: 'pf-2',
        caption:
          'Fine-tuning — the same objective on narrow data. The weights start from the base rather than from random initialisation.',
        frame: {
          kind: 'flow',
          heading: 'Adapting a base model to clinical note summarisation',
          stages: [
            { label: 'Base model', detail: 'general 7B, already pretrained', tone: 'frozen' },
            { label: 'Domain data', detail: '18k de-identified note/summary pairs' },
            { label: 'Continue training', detail: 'same loss, η = 2×10⁻⁵ instead of 3×10⁻⁴', tone: 'active' },
            { label: 'Evaluate both', detail: 'domain metric AND general benchmarks', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'pf-3',
        caption:
          'Catastrophic forgetting — push too hard on narrow data and the model gets better at your task while quietly losing general ability.',
        frame: {
          kind: 'chart',
          heading: 'Two metrics during the same fine-tune',
          series: [
            { label: 'clinical summarisation score', tone: 'active', points: [0.41, 0.58, 0.69, 0.76, 0.79, 0.81] },
            { label: 'general reasoning benchmark', tone: 'bad', points: [0.72, 0.71, 0.68, 0.61, 0.52, 0.44], dashed: true },
          ],
          xLabel: 'fine-tuning epochs',
          yLabel: 'score',
          yMax: 1,
          markers: [{ atIndex: 2, label: 'stop here' }],
          footer: 'If you only measure the metric you are optimising, this damage is invisible until users find it.',
        },
      },
      {
        id: 'pf-4',
        caption:
          'Cheaper alternatives first — most "we need to fine-tune" problems are actually prompt or retrieval problems.',
        frame: {
          kind: 'ranking',
          heading: 'What each approach can and cannot fix',
          columns: [
            {
              title: 'Prompting',
              subtitle: 'minutes, no training',
              items: [
                { label: 'Output format', score: 'yes', tone: 'good' },
                { label: 'Tone', score: 'mostly', tone: 'good' },
                { label: 'Private facts', score: 'no', tone: 'bad' },
              ],
            },
            {
              title: 'Retrieval',
              subtitle: 'hours, no training',
              items: [
                { label: 'Private facts', score: 'yes', tone: 'good' },
                { label: 'Fresh data', score: 'yes', tone: 'good' },
                { label: 'Deep style change', score: 'weak', tone: 'warn' },
              ],
            },
            {
              title: 'Fine-tuning',
              subtitle: 'days, real cost',
              items: [
                { label: 'Consistent style', score: 'yes', tone: 'good' },
                { label: 'Rigid formats', score: 'yes', tone: 'good' },
                { label: 'Fresh data', score: 'no', tone: 'bad' },
              ],
            },
          ],
          footer: 'Fine-tuning teaches behaviour reliably. It is a poor and expensive way to teach facts that change.',
        },
      },
      {
        id: 'pf-5',
        caption:
          'Parameter-efficient methods — training a small adapter instead of all weights keeps the base intact and largely sidesteps forgetting.',
        callout: 'The order to try things in: prompt, then retrieve, then adapter fine-tune, then full fine-tune. Stop as soon as it works.',
        frame: {
          kind: 'blocks',
          heading: 'What actually changes',
          groups: [
            {
              label: 'Full fine-tune',
              blocks: [{ label: 'all 7,000,000,000 parameters updated', weight: 100, tone: 'warn' }],
              note: 'A whole new 14 GB checkpoint per task, and the base is gone.',
            },
            {
              label: 'LoRA adapter',
              blocks: [
                { label: 'frozen base', weight: 99.7, tone: 'frozen' },
                { label: '~0.3% trained', weight: 0.3, tone: 'active' },
              ],
              note: 'The base is untouched, so its general ability cannot be overwritten.',
            },
          ],
        },
      },
    ],
  },

  sft: {
    title: 'Supervised fine-tuning',
    description: 'Teaching a completion engine to behave like an assistant, using demonstrations — and only scoring the part it should learn.',
    legend: [
      { tone: 'muted', label: 'prompt tokens — loss masked' },
      { tone: 'active', label: 'response tokens — loss applied' },
    ],
    mathNote:
      'L_SFT = −Σ_{t ∈ response} log p(x_t | x_<t). The sum runs only over response positions; prompt tokens are masked out. Without that mask the model would spend capacity learning to generate user questions, which is not the behaviour you want.',
    steps: [
      {
        id: 'sft-1',
        caption:
          'The starting point — a base model continues text rather than answering it, because that is exactly what pretraining rewarded.',
        frame: {
          kind: 'panels',
          heading: 'Base model, same prompt',
          panels: [
            { title: 'Input', body: 'How do I reset my password?', tone: 'neutral' },
            { title: 'Base output', body: 'How do I reset my password? How do I change my email? How do I close my account? These are the top questions in our…', tone: 'warn' },
          ],
          footer: 'A perfectly good continuation of an FAQ page. Not an answer.',
        },
      },
      {
        id: 'sft-2',
        caption:
          'Demonstration data — curated pairs showing exactly the behaviour you want, in the chat format the model will see in production.',
        frame: {
          kind: 'ranking',
          heading: 'One training example',
          columns: [
            {
              title: 'Prompt (given)',
              items: [
                { label: 'system: You are a concise support agent.', tone: 'muted' },
                { label: 'user: How do I reset my password?', tone: 'muted' },
              ],
            },
            {
              title: 'Gold response (target)',
              items: [
                { label: 'assistant: Open Settings → Security → Reset password.', tone: 'active' },
                { label: 'A reset link is emailed to your registered address.', tone: 'active' },
              ],
            },
          ],
        },
      },
      {
        id: 'sft-3',
        caption:
          'Loss masking — cross-entropy is applied only to the response tokens. The prompt is context, not something to be predicted.',
        frame: {
          kind: 'tokens',
          heading: 'Which positions contribute to the loss',
          tokens: [
            { text: 'user', tone: 'muted', note: 'masked' },
            { text: ':', tone: 'muted' },
            { text: ' How', tone: 'muted' },
            { text: ' do', tone: 'muted' },
            { text: ' I', tone: 'muted' },
            { text: ' reset', tone: 'muted' },
            { text: '?', tone: 'muted' },
            { text: 'assistant', tone: 'active', note: 'scored' },
            { text: ':', tone: 'active' },
            { text: ' Open', tone: 'active' },
            { text: ' Settings', tone: 'active' },
            { text: '…', tone: 'active' },
          ],
          footer: 'Same forward pass, selective loss. This is the single most common implementation detail people get wrong.',
        },
      },
      {
        id: 'sft-4',
        caption:
          'Quality over quantity — a few thousand carefully reviewed demonstrations beat hundreds of thousands of scraped ones.',
        frame: {
          kind: 'chart',
          heading: 'Human preference win-rate versus dataset size',
          series: [
            { label: 'expert-reviewed demos', tone: 'good', points: [0.31, 0.52, 0.64, 0.71, 0.74, 0.75] },
            { label: 'scraped Q&A', tone: 'warn', points: [0.28, 0.38, 0.44, 0.47, 0.48, 0.47], dashed: true },
          ],
          xLabel: 'examples (log scale: 100 → 100k)',
          yLabel: 'win rate',
          yMax: 0.85,
          footer: 'Noisy demonstrations teach noisy behaviour. The model has no way to tell a bad example from a good one.',
        },
      },
      {
        id: 'sft-5',
        caption:
          'What SFT does not fix — it teaches the shape of a good answer, not truthfulness, and offers no way to express "this is better than that".',
        callout: 'That gap is exactly what the preference-tuning stage (RLHF or DPO) exists to fill.',
        frame: {
          kind: 'panels',
          heading: 'After SFT',
          panels: [
            { title: 'Fixed', body: 'Answers requests, uses the right format, adopts the house tone, refuses obvious out-of-scope asks.', tone: 'good' },
            { title: 'Not fixed', body: 'Still invents facts confidently. Cannot learn "answer B was better than answer A" — demonstrations only show one target.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  'lora-qlora': {
    title: 'LoRA and QLoRA',
    description: 'Freeze the base, train a low-rank correction next to it, and watch the trainable parameter count collapse.',
    legend: [
      { tone: 'frozen', label: 'frozen base weights W' },
      { tone: 'active', label: 'trainable adapter A·B' },
    ],
    mathNote:
      `LoRA replaces the update ΔW with a low-rank product: h = Wx + (B·A)x, where A is r×d and B is d×r with r ≪ d. For d = ${D} and r = ${RANK}: a full ΔW has ${FULL_PARAMS.toLocaleString()} parameters, while A and B together have 2·d·r = ${LORA_PARAMS.toLocaleString()} — ${LORA_PERCENT}% of the original. A is initialised randomly and B to zero, so B·A = 0 at the start and the adapted model exactly equals the base. QLoRA additionally stores W in 4-bit NF4 and dequantises per-block during the forward pass, so the frozen base costs about a quarter of the memory while gradients still flow through it into A and B.`,
    steps: [
      {
        id: 'lo-1',
        caption:
          'The problem — a full fine-tune updates every weight, so you need memory for the weights, their gradients and the optimizer state.',
        frame: {
          kind: 'blocks',
          heading: 'Full fine-tune of a 7B model in mixed precision',
          groups: [
            {
              label: 'Peak GPU memory',
              blocks: [
                { label: 'weights 14 GB', weight: 14, tone: 'frozen' },
                { label: 'gradients 14 GB', weight: 14, tone: 'accent' },
                { label: 'optimizer state 56 GB', weight: 56, tone: 'warn' },
              ],
              note: '≈ 84 GB before activations. That is multiple data-centre GPUs for one small model.',
            },
          ],
        },
      },
      {
        id: 'lo-2',
        caption:
          'Freeze the base — W stops receiving updates. It still participates in the forward pass; it just never changes.',
        frame: {
          kind: 'blocks',
          heading: `One attention projection matrix, d = ${D.toLocaleString()}`,
          groups: [
            {
              label: 'W (frozen)',
              blocks: [{ label: `${D} × ${D} = ${FULL_PARAMS.toLocaleString()} parameters, none trainable`, weight: 100, tone: 'frozen' }],
            },
          ],
        },
      },
      {
        id: 'lo-3',
        caption:
          `Inject a low-rank pair — A is ${RANK}×${D} and B is ${D}×${RANK}. Their product has the same shape as W but only ${LORA_PARAMS.toLocaleString()} parameters.`,
        frame: {
          kind: 'blocks',
          heading: 'Trainable parameters for this one matrix',
          groups: [
            {
              label: 'Full fine-tune',
              blocks: [{ label: `${(FULL_PARAMS / 1e6).toFixed(1)}M trainable`, weight: 100, tone: 'warn' }],
            },
            {
              label: `LoRA, rank ${RANK}`,
              blocks: [
                { label: `frozen W`, weight: 100 - LORA_PERCENT, tone: 'frozen' },
                { label: `A·B — ${(LORA_PARAMS / 1e3).toFixed(0)}k trainable`, weight: LORA_PERCENT, tone: 'active' },
              ],
              note: `${LORA_PERCENT}% of the parameters. Optimizer state shrinks by the same factor.`,
            },
          ],
        },
      },
      {
        id: 'lo-4',
        caption:
          'Forward pass — the base output and the adapter output are added: h = Wx + B·A·x. At initialisation B = 0, so the model starts identical to the base.',
        frame: {
          kind: 'flow',
          heading: 'One adapted layer',
          stages: [
            { label: 'input x', detail: 'd = 4096' },
            { label: 'W·x', detail: 'frozen path, full rank', tone: 'frozen' },
            { label: 'A·x', detail: 'down-project to r = 8', tone: 'active' },
            { label: 'B·(A·x)', detail: 'up-project back to 4096', tone: 'active' },
            { label: 'sum', detail: 'h = Wx + BAx', tone: 'good' },
          ],
          activeIndex: 4,
          footer: 'Adapters can be merged into W after training, so inference costs exactly what the base cost.',
        },
      },
      {
        id: 'lo-5',
        caption:
          'QLoRA — additionally store the frozen base in 4-bit. Memory drops far enough that a 7B fine-tune fits on one consumer GPU.',
        callout: 'Because the base is untouched, one copy can serve many tenants with a different small adapter swapped in per request.',
        frame: {
          kind: 'blocks',
          heading: 'Peak memory for the same 7B fine-tune',
          groups: [
            {
              label: 'Full fine-tune',
              blocks: [{ label: '≈ 84 GB', weight: 84, tone: 'bad' }],
            },
            {
              label: 'LoRA (16-bit base)',
              blocks: [
                { label: 'frozen base 14 GB', weight: 14, tone: 'frozen' },
                { label: 'adapter + state ~1 GB', weight: 1, tone: 'active' },
              ],
              note: '≈ 15 GB',
            },
            {
              label: 'QLoRA (4-bit base)',
              blocks: [
                { label: 'frozen base 3.5 GB', weight: 3.5, tone: 'frozen' },
                { label: 'adapter + state ~1 GB', weight: 1, tone: 'active' },
              ],
              note: '≈ 5 GB — fits on a single 8 GB card. Slightly slower per step due to dequantisation.',
            },
          ],
        },
      },
    ],
  },

  rlhf: {
    title: 'RLHF: reward model plus policy optimisation',
    description: 'Three separate models and a training loop. Compare this carefully with DPO, which removes most of it.',
    legend: [
      { tone: 'accent', label: 'reward model' },
      { tone: 'active', label: 'policy being trained' },
      { tone: 'frozen', label: 'frozen reference model' },
    ],
    mathNote:
      'Stage 1 fits a reward model on preference pairs with the Bradley–Terry loss: L_RM = −log σ(r(x, y_chosen) − r(x, y_rejected)). Stage 2 optimises the policy with PPO against the objective E[r(x, y)] − β·KL(π_θ ‖ π_ref). The KL term is what stops the policy from drifting into degenerate text that happens to score well.',
    steps: [
      {
        id: 'rl-1',
        caption:
          'Collect preferences — humans compare two model answers and pick one. They rank; they do not write the ideal answer.',
        frame: {
          kind: 'ranking',
          heading: 'One labelled comparison',
          columns: [
            {
              title: 'Response A',
              subtitle: 'chosen by the annotator',
              items: [{ label: '"I can\'t verify that. Here is what the handbook says, with a link."', tone: 'good' }],
            },
            {
              title: 'Response B',
              subtitle: 'rejected',
              items: [{ label: '"Absolutely — the policy is 30 days, guaranteed."', tone: 'bad' }],
            },
          ],
          footer: 'Comparisons are much cheaper and more reliable to collect than absolute quality scores.',
        },
      },
      {
        id: 'rl-2',
        caption:
          'Train a reward model — a separate network learns to output a scalar score that ranks chosen above rejected on the collected pairs.',
        frame: {
          kind: 'bars',
          heading: 'Reward model outputs after training',
          bars: [
            { label: 'r(A) chosen', value: 2.1, tone: 'good' },
            { label: 'r(B) rejected', value: -0.8, tone: 'bad' },
            { label: 'margin', value: 2.9, tone: 'accent', note: 'the Bradley–Terry loss pushes this above zero' },
          ],
          format: 'decimal1',
          max: 3.4,
          footer: 'The reward model is a stand-in for a human rater — and it is only as good as the preference data behind it.',
        },
      },
      {
        id: 'rl-3',
        caption:
          'The RL loop — the policy samples an answer, the reward model scores it, and PPO updates the policy to make higher-scoring answers likelier.',
        frame: {
          kind: 'loop',
          heading: 'One PPO iteration',
          nodes: [
            { id: 'sample', label: 'sample' },
            { id: 'score', label: 'score' },
            { id: 'kl', label: 'KL' },
            { id: 'update', label: 'update' },
          ],
          activeId: 'score',
          iteration: 'iter 4,120',
          log: [
            { role: 'Policy', text: 'Samples a response to a prompt from the training set.', tone: 'active' },
            { role: 'Reward model', text: 'Scores it: r = 1.42.', tone: 'accent' },
            { role: 'Reference', text: 'Frozen SFT model gives log-probs for the KL penalty.', tone: 'frozen' },
            { role: 'PPO', text: 'Update θ to raise E[r] − β·KL. Three models in memory at once.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'rl-4',
        caption:
          'The KL leash — without a penalty for drifting from the reference model, the policy finds text that games the reward model rather than pleasing people.',
        frame: {
          kind: 'chart',
          heading: 'Reward-model score versus actual human preference',
          series: [
            { label: 'reward model score', tone: 'accent', points: [0.4, 1.1, 1.9, 2.6, 3.2, 3.7, 4.1] },
            { label: 'true human preference', tone: 'good', points: [0.4, 1.0, 1.6, 1.9, 1.7, 1.2, 0.6], dashed: true },
          ],
          xLabel: 'PPO steps (no KL penalty)',
          yLabel: 'score',
          yMax: 4.5,
          markers: [{ atIndex: 3, label: 'reward hacking begins' }],
          footer: 'Classic over-optimisation: the proxy keeps rising while the thing it proxies for falls. β·KL is the brake.',
        },
      },
      {
        id: 'rl-5',
        caption:
          'The operational cost — RLHF needs a reward model, a policy, a frozen reference, and a stable RL loop. That is a lot of moving parts.',
        callout: 'Every one of these pieces is a place to get it wrong. DPO exists because most teams wanted the outcome without the loop.',
        frame: {
          kind: 'panels',
          heading: 'What has to be running',
          panels: [
            { title: 'Reward model', body: 'Separately trained and separately evaluated. Its errors become the policy\'s objective.', tone: 'accent' },
            { title: 'Policy', body: 'The model you ship. Updated by PPO against a noisy, learned reward.', tone: 'active' },
            { title: 'Reference model', body: 'A frozen copy of the SFT model, kept in memory purely to compute the KL penalty.', tone: 'frozen' },
          ],
        },
      },
    ],
  },

  dpo: {
    title: 'DPO: preference tuning without the RL loop',
    description: 'Same preference data as RLHF, no reward model, no sampling loop — one supervised-style objective on the pairs directly.',
    legend: [
      { tone: 'good', label: 'chosen response' },
      { tone: 'bad', label: 'rejected response' },
      { tone: 'frozen', label: 'frozen reference model' },
    ],
    mathNote:
      'L_DPO = −log σ( β·[ log π_θ(y_w|x) − log π_ref(y_w|x) ] − β·[ log π_θ(y_l|x) − log π_ref(y_l|x) ] ). The derivation shows the optimal RLHF policy can be written in closed form in terms of the reward, which lets you substitute the policy back in and eliminate the reward model entirely. The reference model still appears — it plays the role the KL penalty played in RLHF.',
    steps: [
      {
        id: 'dp-1',
        caption:
          'Same input data — prompt, chosen response, rejected response. Nothing about the labelling changes from RLHF.',
        frame: {
          kind: 'ranking',
          heading: 'A DPO training triple',
          columns: [
            {
              title: 'Prompt',
              items: [{ label: '"Is our refund window 30 days?"', tone: 'neutral' }],
            },
            {
              title: 'y_chosen',
              items: [{ label: '"I can\'t confirm that from memory — here is the handbook link."', tone: 'good' }],
            },
            {
              title: 'y_rejected',
              items: [{ label: '"Yes, 30 days, guaranteed."', tone: 'bad' }],
            },
          ],
        },
      },
      {
        id: 'dp-2',
        caption:
          'No reward model — instead of scoring text with a second network, DPO reads the log-probabilities the policy already assigns to each response.',
        frame: {
          kind: 'bars',
          heading: 'Log-probabilities before the update',
          bars: [
            { label: 'log π_θ(chosen)', value: -18.4, tone: 'good' },
            { label: 'log π_ref(chosen)', value: -18.2, tone: 'frozen' },
            { label: 'log π_θ(rejected)', value: -15.1, tone: 'bad', note: 'currently the model prefers the wrong one' },
            { label: 'log π_ref(rejected)', value: -15.0, tone: 'frozen' },
          ],
          format: 'decimal1',
          max: 20,
          footer: 'Bars show magnitude; all four values are negative. The model starts out preferring the confident, wrong answer.',
        },
      },
      {
        id: 'dp-3',
        caption:
          'The objective — raise the chosen response\'s probability relative to the reference, and lower the rejected one\'s, in a single loss.',
        frame: {
          kind: 'bars',
          heading: 'Implicit reward: β·(log π_θ − log π_ref)',
          bars: [
            { label: 'chosen, before', value: -0.2, tone: 'muted' },
            { label: 'chosen, after', value: 1.6, tone: 'good' },
            { label: 'rejected, before', value: -0.1, tone: 'muted' },
            { label: 'rejected, after', value: -1.3, tone: 'bad' },
          ],
          format: 'decimal1',
          max: 2,
          footer: 'The margin went from −0.1 to 2.9 — the same quantity RLHF trains a whole reward model to produce.',
        },
      },
      {
        id: 'dp-4',
        caption:
          'Side by side — DPO removes the reward model and the sampling loop. Two models in memory instead of three, and no PPO to stabilise.',
        frame: {
          kind: 'panels',
          heading: 'Pipeline comparison',
          panels: [
            {
              title: 'RLHF',
              body: 'Preferences → train reward model → sample from policy → score → PPO update against reward − β·KL. Three models, an online loop, RL hyperparameters.',
              tone: 'warn',
            },
            {
              title: 'DPO',
              body: 'Preferences → one gradient step per pair, straight on the data. Two models, offline, looks like ordinary supervised training.',
              tone: 'good',
            },
          ],
          footer: 'The reference model survives in both. It is what stops the policy wandering away from its SFT behaviour.',
        },
      },
      {
        id: 'dp-5',
        caption:
          'Shared limitation — both methods inherit whatever is in the preference data. Simpler machinery does not mean better judgement.',
        callout: 'DPO is offline: it can only learn from the responses already in the dataset, whereas RLHF explores fresh samples. That is a genuine trade-off, not just a simplification.',
        frame: {
          kind: 'bars',
          heading: 'Effect of annotator bias, either method',
          bars: [
            { label: 'annotators prefer longer answers', value: 0.72, tone: 'warn', note: 'seen in real preference datasets' },
            { label: 'resulting model verbosity increase', value: 0.64, tone: 'bad', note: 'the model learns "longer = better"' },
          ],
          format: 'percent',
          max: 1,
          footer: 'Garbage in, aligned garbage out. Preference data quality is the binding constraint for both approaches.',
        },
      },
    ],
  },

  'overfit-underfit': {
    title: 'Underfitting and overfitting',
    description: 'Three training runs on the same data, told apart by the gap between the training curve and the validation curve.',
    legend: [
      { tone: 'accent', label: 'training error' },
      { tone: 'good', label: 'validation error' },
    ],
    mathNote:
      'Generalisation gap = validation error − training error. Underfitting: both high, small gap — the model lacks capacity or training. Overfitting: training low, validation rising, large gap. Early stopping picks the epoch that minimises validation error, which is why validation must stay separate from both training and final test data.',
    steps: [
      {
        id: 'of-1',
        caption:
          'Underfitting — both curves stay high and close together. The model is too small or trained too briefly to capture the pattern.',
        frame: {
          kind: 'chart',
          heading: 'Linear model on a curved relationship',
          series: [
            { label: 'training error', tone: 'accent', points: [0.62, 0.55, 0.51, 0.49, 0.48, 0.48, 0.48] },
            { label: 'validation error', tone: 'good', points: [0.64, 0.57, 0.53, 0.51, 0.5, 0.5, 0.5], dashed: true },
          ],
          xLabel: 'epochs',
          yLabel: 'error',
          yMax: 0.75,
          footer: 'Gap ≈ 0.02. The problem is capacity, not generalisation — a bigger model or more training will help.',
        },
      },
      {
        id: 'of-2',
        caption:
          'A good fit — both curves fall and stay close. The model learned the signal and stopped there.',
        frame: {
          kind: 'chart',
          heading: 'Right-sized model, diverse data',
          series: [
            { label: 'training error', tone: 'accent', points: [0.61, 0.42, 0.29, 0.21, 0.17, 0.15, 0.14] },
            { label: 'validation error', tone: 'good', points: [0.63, 0.45, 0.33, 0.25, 0.21, 0.2, 0.19], dashed: true },
          ],
          xLabel: 'epochs',
          yLabel: 'error',
          yMax: 0.75,
          footer: 'Gap ≈ 0.05 and stable. This is what you are aiming for.',
        },
      },
      {
        id: 'of-3',
        caption:
          'Overfitting — training error keeps falling while validation error turns upward. The model is memorising examples, not learning the rule.',
        frame: {
          kind: 'chart',
          heading: 'Large model on a small, repetitive dataset',
          series: [
            { label: 'training error', tone: 'accent', points: [0.6, 0.34, 0.18, 0.08, 0.03, 0.01, 0.004] },
            { label: 'validation error', tone: 'good', points: [0.62, 0.41, 0.31, 0.29, 0.34, 0.42, 0.51], dashed: true },
          ],
          xLabel: 'epochs',
          yLabel: 'error',
          yMax: 0.75,
          markers: [{ atIndex: 3, label: 'early stop' }],
          footer: 'The divergence point is the signal. Training error alone would have told you everything was going brilliantly.',
        },
      },
      {
        id: 'of-4',
        caption:
          'Remedies — more and more diverse data, regularisation, or simply stopping earlier. All of them shrink the gap rather than the training error.',
        frame: {
          kind: 'bars',
          heading: 'Validation error after each intervention',
          bars: [
            { label: 'baseline (overfit)', value: 0.51, tone: 'bad' },
            { label: '+ early stopping', value: 0.29, tone: 'warn' },
            { label: '+ weight decay & dropout', value: 0.24, tone: 'active' },
            { label: '+ 4× more diverse data', value: 0.18, tone: 'good', note: 'usually the strongest single lever' },
          ],
          format: 'decimal2',
          max: 0.6,
        },
      },
      {
        id: 'of-5',
        caption:
          'For LLMs it becomes a privacy issue — an overfitted model can reproduce training text verbatim, including data that should never leave.',
        callout: 'Tuning against a public benchmark until the score is high is overfitting to the benchmark. Keep one truly unseen test set.',
        frame: {
          kind: 'panels',
          heading: 'Memorisation in large models',
          panels: [
            { title: 'Verbatim recall', body: 'Sequences repeated many times in the corpus can be emitted word for word, including keys and personal data.', tone: 'bad' },
            { title: 'Mitigation', body: 'Deduplicate aggressively, filter PII before training, and test with extraction prompts.', tone: 'good' },
            { title: 'Benchmark contamination', body: 'If a test set was on the public web, it was probably in the pretraining data. Treat those scores with suspicion.', tone: 'warn' },
          ],
        },
      },
    ],
  },
};
