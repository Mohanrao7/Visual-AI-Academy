import {
  cosine,
  crossEntropy,
  layerNorm,
  mean,
  renormalise,
  round,
  softmax,
  topKMask,
  topPMask,
  variance,
} from './math';
import type { SceneMap } from './types';

/* ---------- shared example sentence ---------- */
const SENT = ['The', 'bank', 'by', 'the', 'river'];

/** Softmax each row of a raw score matrix so every row sums to 1, exactly like attention does. */
function rowSoftmax(scores: number[][]): number[][] {
  return scores.map((row) => softmax(row).map((v) => round(v, 2)));
}

/** Causal (decoder) attention: a position may only attend to itself and earlier positions. */
function causalSoftmax(scores: number[][]): { values: number[][]; masked: [number, number][] } {
  const masked: [number, number][] = [];
  const values = scores.map((row, i) => {
    const allowed = row.slice(0, i + 1);
    const probs = softmax(allowed);
    return row.map((_, j) => {
      if (j > i) {
        masked.push([i, j]);
        return 0;
      }
      return round(probs[j], 2);
    });
  });
  return { values, masked };
}

/* ---------- positional encoding (real sinusoids) ---------- */
const D_MODEL = 6;
function sinusoidalPE(pos: number): number[] {
  return Array.from({ length: D_MODEL }, (_, i) => {
    const pair = Math.floor(i / 2);
    const angle = pos / 10000 ** ((2 * pair) / D_MODEL);
    return round(i % 2 === 0 ? Math.sin(angle) : Math.cos(angle), 2);
  });
}
/** Same word, so the same token embedding is looked up at every position. */
const BANK_EMBEDDING = [0.42, -0.31, 0.18, 0.55, -0.12, 0.27];
const PE_1 = sinusoidalPE(1);
const PE_4 = sinusoidalPE(4);
const BANK_AT_1 = BANK_EMBEDDING.map((v, i) => round(v + PE_1[i], 2));
const BANK_AT_4 = BANK_EMBEDDING.map((v, i) => round(v + PE_4[i], 2));

/* ---------- layer norm (real statistics) ---------- */
const LN_INPUT = [4.2, -1.6, 0.4, 7.9, -3.1, 1.2];
const LN_MEAN = round(mean(LN_INPUT), 2);
const LN_VAR = round(variance(LN_INPUT), 2);
const LN_NORMALISED = layerNorm(LN_INPUT).map((v) => round(v, 2));
const LN_GAIN = [1.2, 0.8, 1, 1.4, 0.9, 1.1];
const LN_BIAS = [0.1, 0, -0.1, 0.2, 0, 0.05];
const LN_OUTPUT = LN_NORMALISED.map((v, i) => round(v * LN_GAIN[i] + LN_BIAS[i], 2));
const LN_OTHER_TOKEN = [0.3, 0.2, -0.1, 0.4, -0.2, 0.1];

/* ---------- residual ---------- */
const RES_X = [0.5, -0.2, 0.9, 0.1, -0.4, 0.3];
const RES_FX = [0.12, 0.31, -0.22, 0.05, 0.18, -0.09];
const RES_SUM = RES_X.map((v, i) => round(v + RES_FX[i], 2));

/* ---------- multi-head attention ---------- */
const HEAD_SCORES: Record<string, number[][]> = {
  // Head 1 leans on the immediately preceding token (local/syntactic).
  h1: [
    [2.4, 0.2, 0.1, 0.0, 0.1],
    [1.9, 2.2, 0.1, 0.1, 0.1],
    [0.2, 2.0, 1.8, 0.1, 0.1],
    [0.1, 0.3, 1.7, 1.9, 0.2],
    [0.1, 0.4, 0.2, 1.8, 2.0],
  ],
  // Head 2 binds the determiner to its noun.
  h2: [
    [1.0, 2.6, 0.1, 0.1, 0.2],
    [0.6, 1.4, 0.2, 0.2, 0.6],
    [0.1, 0.4, 1.2, 0.5, 0.4],
    [0.2, 0.3, 0.3, 1.1, 2.7],
    [0.1, 0.9, 0.2, 0.4, 1.5],
  ],
  // Head 3 hunts for the content word that disambiguates the sentence.
  h3: [
    [0.3, 0.7, 0.2, 0.2, 1.9],
    [0.2, 0.9, 0.3, 0.2, 2.8],
    [0.2, 0.6, 0.7, 0.2, 1.7],
    [0.2, 0.5, 0.2, 0.7, 2.0],
    [0.2, 1.1, 0.2, 0.3, 2.2],
  ],
};
const H1 = rowSoftmax(HEAD_SCORES.h1);
const H2 = rowSoftmax(HEAD_SCORES.h2);
const H3 = rowSoftmax(HEAD_SCORES.h3);

/* ---------- encoder vs decoder masks ---------- */
const RAW_SCORES = [
  [2.1, 0.6, 0.3, 0.4, 0.9],
  [0.7, 2.0, 0.4, 0.5, 2.4],
  [0.3, 0.8, 1.6, 0.4, 0.7],
  [0.4, 0.5, 0.4, 1.7, 1.3],
  [0.6, 2.2, 0.5, 0.9, 2.0],
];
const BIDIRECTIONAL = rowSoftmax(RAW_SCORES);
const CAUSAL = causalSoftmax(RAW_SCORES);

/* ---------- hallucination distributions ---------- */
const HALLU_LABELS = ['"30 days"', '"14 days"', '"60 days"', '"no refunds"', '"I don\'t know"'];
const HALLU_NO_EVIDENCE = softmax([2.6, 2.4, 1.9, 0.8, -0.4]);
const HALLU_WITH_EVIDENCE = softmax([6.2, 0.4, 0.2, 0.1, 0.3]);

/* ---------- cross-entropy demo used by the loss curve footer ---------- */
const CE_AT_P = (p: number) => round(crossEntropy(p), 2);

export const scenes: SceneMap = {
  'vocabulary-context-window': {
    title: 'Vocabulary and context window',
    description:
      'Two different limits: the finite list of tokens the model has IDs for, and the number of tokens it can hold in one pass.',
    legend: [
      { tone: 'active', label: 'in vocabulary' },
      { tone: 'warn', label: 'split into subwords' },
      { tone: 'bad', label: 'dropped by truncation' },
    ],
    mathNote:
      'Vocabulary size V is the number of rows in the embedding matrix (commonly 32k–256k). The context window L is the maximum sequence length; standard self-attention costs O(L²·d) time and memory, which is why L is capped.',
    steps: [
      {
        id: 'vocab-1',
        caption:
          'Vocabulary — the model only has integer IDs for a fixed list of tokens. Common words like "the" get their own single ID.',
        frame: {
          kind: 'tokens',
          heading: 'A slice of a 50,000-entry vocabulary',
          tokens: [
            { text: 'the', id: 262, tone: 'active' },
            { text: ' refund', id: 8138, tone: 'active' },
            { text: ' policy', id: 2450, tone: 'active' },
            { text: ' is', id: 318, tone: 'active' },
            { text: '<|endoftext|>', id: 50256, tone: 'accent', note: 'special' },
          ],
          footer: 'Illustrative IDs. Every model ships its own vocabulary, so the same word has different IDs across models.',
        },
      },
      {
        id: 'vocab-2',
        caption:
          'Out-of-vocabulary words — a word with no ID of its own is rebuilt from smaller subword pieces, so nothing is ever truly unknown.',
        frame: {
          kind: 'tokens',
          heading: '"Zyloprofen" is not in the vocabulary',
          source: 'Zyloprofen dosage',
          tokens: [
            { text: 'Z', id: 57, tone: 'warn' },
            { text: 'yl', id: 2645, tone: 'warn' },
            { text: 'op', id: 404, tone: 'warn' },
            { text: 'ro', id: 305, tone: 'warn' },
            { text: 'fen', id: 41037, tone: 'warn' },
            { text: ' dosage', id: 33623, tone: 'active' },
          ],
          footer: 'One rare word costs 5 tokens; one common word costs 1. That is why token count and word count disagree.',
        },
      },
      {
        id: 'vocab-3',
        caption:
          'Context window — the separate cap on how many tokens fit in one forward pass. Here the conversation still fits inside 8,000 tokens.',
        frame: {
          kind: 'budget',
          heading: 'Turn 12 of a support chat',
          capacity: 8000,
          segments: [
            { label: 'system', tokens: 400, tone: 'accent' },
            { label: 'older turns', tokens: 4200, tone: 'neutral' },
            { label: 'recent turns', tokens: 1600, tone: 'active' },
            { label: 'room for reply', tokens: 800, tone: 'good' },
          ],
          footer: 'Prompt, chat history and the reply all share one budget — the reply is not free.',
        },
      },
      {
        id: 'vocab-4',
        caption:
          'Overflow — by turn 40 the history exceeds the window, so something must go. Nothing is remembered by magic.',
        frame: {
          kind: 'budget',
          heading: 'Turn 40 — 10,300 tokens requested into an 8,000-token window',
          capacity: 8000,
          segments: [
            { label: 'system', tokens: 400, tone: 'accent' },
            { label: 'older turns', tokens: 7500, tone: 'warn' },
            { label: 'recent turns', tokens: 1600, tone: 'active' },
            { label: 'reply', tokens: 800, tone: 'good' },
          ],
          footer: 'Requesting more than the window either errors or silently truncates, depending on the API.',
        },
      },
      {
        id: 'vocab-5',
        caption:
          'Truncation or summarisation — the oldest turns are dropped or compressed into a summary. Whatever leaves the window is invisible to the model.',
        callout: 'A bigger window buys capacity, not perfect recall — attention still has to find the relevant tokens inside it.',
        frame: {
          kind: 'budget',
          heading: 'After compaction',
          capacity: 8000,
          segments: [
            { label: 'system', tokens: 400, tone: 'accent' },
            { label: 'summary of turns 1–30', tokens: 900, tone: 'good' },
            { label: 'recent turns', tokens: 1600, tone: 'active' },
            { label: 'reply', tokens: 800, tone: 'good' },
          ],
          dropped: [{ label: 'raw turns 1–30', tokens: 7500 }],
          footer: '3,700 tokens now in use. The detail of turns 1–30 only survives as far as the summary preserved it.',
        },
      },
    ],
  },

  'positional-encoding': {
    title: 'Positional encoding',
    description:
      'Why the same word at two different places in a sentence must arrive at attention as two different vectors.',
    legend: [
      { tone: 'accent', label: 'negative value' },
      { tone: 'active', label: 'positive value' },
    ],
    mathNote:
      'Sinusoidal encoding: PE(pos, 2i) = sin(pos / 10000^(2i/d)) and PE(pos, 2i+1) = cos(pos / 10000^(2i/d)). The values above are computed with d = 6. Learned absolute encodings replace this table with trainable rows; RoPE instead rotates the query and key vectors by an angle proportional to position, and ALiBi adds a distance-based bias to attention scores.',
    steps: [
      {
        id: 'pe-1',
        caption:
          'The problem — attention is a weighted sum, and sums do not care about order. Without position, "the river bank" and "the bank river" produce identical token sets.',
        frame: {
          kind: 'vectors',
          heading: 'Token embeddings only: "bank" is identical at position 1 and position 4',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'bank @ pos 1', values: BANK_EMBEDDING, tone: 'active' },
            { label: 'bank @ pos 4', values: BANK_EMBEDDING, tone: 'active', note: 'byte-for-byte the same vector' },
          ],
          scale: 1.2,
          footer: 'Same lookup row, same numbers — the model literally cannot tell the two occurrences apart.',
        },
      },
      {
        id: 'pe-2',
        caption:
          'Positional encoding — a position-dependent signal is generated. Each position gets its own distinctive pattern of sines and cosines.',
        frame: {
          kind: 'vectors',
          heading: 'Sinusoidal position signals (d = 6)',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'PE(pos = 1)', values: PE_1, tone: 'accent' },
            { label: 'PE(pos = 4)', values: PE_4, tone: 'accent', note: 'different frequencies → different fingerprint' },
          ],
          scale: 1.2,
          footer: 'Even dimensions use sin, odd dimensions use cos, and each pair uses a slower frequency than the last.',
        },
      },
      {
        id: 'pe-3',
        caption:
          'Injection — the position signal is added to the token embedding, so the vector entering attention now encodes both "which word" and "where".',
        frame: {
          kind: 'vectors',
          heading: 'embedding + PE',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'bank (no pos)', values: BANK_EMBEDDING, tone: 'muted' },
            { label: 'bank @ pos 1', values: BANK_AT_1, tone: 'active' },
            { label: 'bank @ pos 4', values: BANK_AT_4, tone: 'good', note: 'now clearly a different vector' },
          ],
          scale: 1.6,
          footer: 'Same word, two positions, two distinct inputs — order information is now inside the vector itself.',
        },
      },
      {
        id: 'pe-4',
        caption:
          'Consequence — because the inputs differ, attention scores differ, so "dog bites man" and "man bites dog" no longer collapse to the same computation.',
        frame: {
          kind: 'panels',
          heading: 'Order now changes the result',
          panels: [
            { title: 'dog bites man', body: '"dog" carries PE(0) and lands in the subject slot; "man" carries PE(2) and lands in the object slot.', tone: 'active' },
            { title: 'man bites dog', body: 'The same three token embeddings, but each is added to a different PE, so attention resolves who bites whom differently.', tone: 'accent' },
          ],
          footer: 'The token embeddings are unchanged between the two sentences. Only the position signals moved.',
        },
      },
      {
        id: 'pe-5',
        caption:
          'Scheme choice — absolute, learned, RoPE and ALiBi all inject order, but they differ in how well they extrapolate past the training length.',
        callout: 'Most current open LLMs use RoPE, which rotates queries and keys instead of adding a vector.',
        frame: {
          kind: 'panels',
          heading: 'Four ways to say "where"',
          panels: [
            { title: 'Sinusoidal (absolute)', body: 'Fixed formula, no parameters. Extrapolates to unseen lengths in principle, weakly in practice.', tone: 'neutral' },
            { title: 'Learned absolute', body: 'A trainable row per position. Simple, but undefined beyond the maximum trained position.', tone: 'neutral' },
            { title: 'RoPE (rotary)', body: 'Rotates Q and K by an angle set by position, so the dot product depends on relative distance. Common in modern LLMs.', tone: 'active' },
            { title: 'ALiBi', body: 'Adds a linear distance penalty straight to the attention scores. Cheap and length-friendly.', tone: 'neutral' },
          ],
        },
      },
    ],
  },

  'multi-head-attention': {
    title: 'Multi-head attention',
    description:
      'Several attention patterns computed in parallel over the same sentence, then concatenated and projected back.',
    legend: [
      { tone: 'active', label: 'attention weight (darker = higher)' },
      { tone: 'accent', label: 'head being examined' },
    ],
    mathNote:
      'MultiHead(Q,K,V) = Concat(head₁ … head_h)·Wᴼ where headᵢ = Attention(Q·Wᵢ^Q, K·Wᵢ^K, V·Wᵢ^V). Each head projects into a subspace of size d_model / h, so 8 heads on d_model = 512 give 64 dimensions per head — total compute stays roughly the same as one wide head.',
    steps: [
      {
        id: 'mha-1',
        caption:
          'Split — the d_model-wide token vectors are projected into h smaller Q/K/V sets, one per head. Each head gets its own learned projection matrices.',
        frame: {
          kind: 'blocks',
          heading: 'd_model = 384 split across 6 heads',
          groups: [
            {
              label: 'One wide vector per token',
              blocks: [{ label: 'd_model = 384', weight: 6, tone: 'neutral' }],
            },
            {
              label: 'Projected into 6 subspaces of 64 dimensions',
              blocks: [
                { label: 'head 1', weight: 1, tone: 'accent' },
                { label: 'head 2', weight: 1, tone: 'active' },
                { label: 'head 3', weight: 1, tone: 'good' },
                { label: 'head 4', weight: 1, tone: 'neutral' },
                { label: 'head 5', weight: 1, tone: 'neutral' },
                { label: 'head 6', weight: 1, tone: 'neutral' },
              ],
              note: 'Heads are not extra work bolted on — the same width is divided up.',
            },
          ],
        },
      },
      {
        id: 'mha-2',
        caption:
          'Head 1 — this head ended up tracking local order: almost every row puts its weight on itself and the token immediately before it.',
        frame: {
          kind: 'matrix',
          heading: 'Head 1 attention weights (each row sums to 1)',
          rowLabels: SENT,
          colLabels: SENT,
          values: H1,
          rowAxisLabel: 'query ↓',
          colAxisLabel: 'key → : how much each row token pulls from each column token',
          footer: 'A near-diagonal band. This head mostly answers "what did I just read?".',
        },
      },
      {
        id: 'mha-3',
        caption:
          'Head 2 — a different pattern from the same sentence: determiners lock onto their nouns ("The"→"bank", "the"→"river").',
        frame: {
          kind: 'matrix',
          heading: 'Head 2 attention weights',
          rowLabels: SENT,
          colLabels: SENT,
          values: H2,
          highlightRow: 3,
          rowAxisLabel: 'query ↓',
          colAxisLabel: 'row 4 ("the") puts 0.68 of its weight on "river"',
          footer: 'Same inputs, different learned projections, completely different weight map.',
        },
      },
      {
        id: 'mha-4',
        caption:
          'Head 3 — a content head: nearly every token reaches for "river", the word that decides which sense of "bank" is meant.',
        frame: {
          kind: 'matrix',
          heading: 'Head 3 attention weights',
          rowLabels: SENT,
          colLabels: SENT,
          values: H3,
          highlightRow: 1,
          rowAxisLabel: 'query ↓',
          colAxisLabel: 'row 2 ("bank") sends most of its weight to "river"',
          footer: 'Heads often specialise like this, but the specialisation is emergent — nobody assigns these jobs.',
        },
      },
      {
        id: 'mha-5',
        caption:
          'Concatenate and project — each head returns a 64-dim result per token; they are glued back into 384 dims and passed through Wᴼ so the heads can mix.',
        callout: 'Without the final Wᴼ projection the heads would stay in separate lanes and never combine their findings.',
        frame: {
          kind: 'blocks',
          heading: 'Per token: 6 × 64 → concat → Wᴼ → 384',
          groups: [
            {
              label: 'Head outputs',
              blocks: [
                { label: 'h1', weight: 1, tone: 'accent' },
                { label: 'h2', weight: 1, tone: 'active' },
                { label: 'h3', weight: 1, tone: 'good' },
                { label: 'h4', weight: 1, tone: 'neutral' },
                { label: 'h5', weight: 1, tone: 'neutral' },
                { label: 'h6', weight: 1, tone: 'neutral' },
              ],
            },
            {
              label: 'After the output projection Wᴼ',
              blocks: [{ label: 'one 384-dim contextual vector per token', weight: 6, tone: 'active' }],
              note: 'This is what the feed-forward sublayer receives next.',
            },
          ],
        },
      },
    ],
  },

  'feed-forward-network': {
    title: 'Feed-forward network (position-wise MLP)',
    description:
      'After attention has moved information between tokens, each token is transformed on its own — no mixing across positions.',
    legend: [
      { tone: 'accent', label: 'negative activation' },
      { tone: 'active', label: 'positive activation' },
    ],
    mathNote:
      'FFN(x) = W₂ · φ(W₁x + b₁) + b₂, applied independently at every position with the same weights. The hidden width is typically 4× d_model (SwiGLU variants use ~⅔·4× across two gated projections), which is why FFN blocks hold roughly two thirds of a transformer\'s parameters.',
    steps: [
      {
        id: 'ffn-1',
        caption:
          'Input — one contextual vector per token arrives from attention. From here on the tokens are processed separately.',
        frame: {
          kind: 'vectors',
          heading: 'Post-attention vectors (d_model = 6 for legibility)',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: '"bank"', values: [0.5, -0.2, 0.9, 0.1, -0.4, 0.3], tone: 'active' },
            { label: '"river"', values: [-0.3, 0.7, 0.2, -0.6, 0.4, 0.1], tone: 'active' },
          ],
          scale: 1,
          footer: 'Attention was communication between tokens. The FFN is private computation inside each token.',
        },
      },
      {
        id: 'ffn-2',
        caption:
          'Expand — the first linear layer W₁ widens the vector, usually to four times d_model. More dimensions means more room to separate features.',
        frame: {
          kind: 'blocks',
          heading: 'Width profile of one FFN sublayer',
          groups: [
            {
              label: 'Shape through the block',
              blocks: [
                { label: 'in 512', weight: 1, tone: 'neutral' },
                { label: 'hidden 2048  (W₁)', weight: 4, tone: 'active' },
                { label: 'out 512  (W₂)', weight: 1, tone: 'neutral' },
              ],
              note: 'Same W₁ and W₂ are reused at every position — the block does not care how long the sequence is.',
            },
          ],
          footer: 'Roughly 2·512·2048 ≈ 2.1M parameters per block, versus about 1.0M for its attention sublayer.',
        },
      },
      {
        id: 'ffn-3',
        caption:
          'Non-linearity — GELU (or SwiGLU) is applied element-wise. Without it, stacking linear layers would collapse into a single linear layer.',
        frame: {
          kind: 'vectors',
          heading: 'First 6 of 2048 hidden units for the token "bank"',
          columns: ['h0', 'h1', 'h2', 'h3', 'h4', 'h5'],
          rows: [
            { label: 'W₁x + b₁', values: [1.8, -2.4, 0.6, -0.9, 3.1, -0.2], tone: 'neutral' },
            { label: 'GELU(·)', values: [1.73, -0.02, 0.44, -0.16, 3.09, -0.08], tone: 'active', note: 'large negatives squashed toward 0' },
          ],
          scale: 3.2,
          footer: 'GELU passes large positive values through almost untouched and suppresses strong negatives.',
        },
      },
      {
        id: 'ffn-4',
        caption:
          'Project back — W₂ compresses the wide hidden vector to d_model again so it can be added to the residual stream.',
        frame: {
          kind: 'vectors',
          heading: 'Back to 6 dimensions',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'input x', values: [0.5, -0.2, 0.9, 0.1, -0.4, 0.3], tone: 'muted' },
            { label: 'FFN(x)', values: [0.22, 0.41, -0.15, 0.33, 0.08, -0.27], tone: 'active', note: 'a refinement, not a replacement' },
          ],
          scale: 1,
          footer: 'The output is deliberately the same width as the input so the residual connection can add them.',
        },
      },
      {
        id: 'ffn-5',
        caption:
          'Position-wise — the same MLP ran on "bank" and on "river" with identical weights and zero interaction. Only attention moves information sideways.',
        callout: 'Interpretability work suggests these wide hidden layers behave partly like a key–value memory of learned associations.',
        frame: {
          kind: 'panels',
          heading: 'Division of labour inside a transformer block',
          panels: [
            { title: 'Attention sublayer', body: 'Communication. Every token reads from every other token it is allowed to see.', tone: 'accent' },
            { title: 'FFN sublayer', body: 'Computation. Every token is transformed on its own by the same shared MLP.', tone: 'active' },
          ],
        },
      },
    ],
  },

  'residual-connections': {
    title: 'Residual connections',
    description: 'The skip path that makes a 100-layer stack trainable: output = x + F(x).',
    legend: [
      { tone: 'muted', label: 'x — the untouched input' },
      { tone: 'accent', label: 'F(x) — what the sublayer computed' },
      { tone: 'good', label: 'x + F(x) — what continues' },
    ],
    mathNote:
      'A residual block computes y = x + F(x). Differentiating gives ∂y/∂x = I + ∂F/∂x, so the identity term guarantees a gradient path even when ∂F/∂x is tiny — that is why depth stopped being a barrier. Pre-norm transformers use y = x + F(LayerNorm(x)).',
    steps: [
      {
        id: 'res-1',
        caption: 'Input — a token vector x enters the block. Hold on to it; the whole trick is that it does not get thrown away.',
        frame: {
          kind: 'vectors',
          heading: 'x entering the sublayer',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [{ label: 'x', values: RES_X, tone: 'active' }],
          scale: 1,
        },
      },
      {
        id: 'res-2',
        caption:
          'Sublayer output — attention or the FFN computes F(x). Notice how small it is compared with x: the block learns a nudge, not a rewrite.',
        frame: {
          kind: 'vectors',
          heading: 'F(x) — the residual update',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'x', values: RES_X, tone: 'muted' },
            { label: 'F(x)', values: RES_FX, tone: 'accent', note: 'a delta, roughly a third of x in magnitude' },
          ],
          scale: 1,
        },
      },
      {
        id: 'res-3',
        caption:
          'Skip connection — x is added back element-wise. The block only has to learn the difference it wants to make, not reproduce its own input.',
        frame: {
          kind: 'vectors',
          heading: 'y = x + F(x)',
          columns: ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'],
          rows: [
            { label: 'x', values: RES_X, tone: 'muted' },
            { label: 'F(x)', values: RES_FX, tone: 'accent' },
            { label: 'y = x + F(x)', values: RES_SUM, tone: 'good', note: 'x is still recognisable inside y' },
          ],
          scale: 1.1,
        },
      },
      {
        id: 'res-4',
        caption:
          'Residual stream — every block reads from and writes to the same running sum, so information from layer 1 can reach layer 40 untouched.',
        frame: {
          kind: 'network',
          heading: 'The residual stream carries x forward past every block',
          layers: [
            { label: 'embed', units: 3, note: 'x₀' },
            { label: 'block 1', units: 3, note: '+F₁' },
            { label: 'block 2', units: 3, note: '+F₂' },
            { label: 'block 3', units: 3, note: '+F₃' },
            { label: 'head', units: 2, note: 'logits' },
          ],
          direction: 'forward',
          activeLayer: 2,
          edgeLabel: 'x₃ = x₀ + F₁ + F₂ + F₃  — each block adds, none overwrite',
        },
      },
      {
        id: 'res-5',
        caption:
          'Why it matters — without skips the gradient must survive a product of many Jacobians and usually vanishes. With skips it always has a direct route back.',
        callout: 'This is a different failure from instability: residuals fix gradient flow, LayerNorm fixes activation scale. Transformers use both.',
        frame: {
          kind: 'chart',
          heading: 'Gradient magnitude reaching each layer during backward pass (illustrative)',
          series: [
            { label: 'plain deep stack', tone: 'bad', points: [1, 0.42, 0.17, 0.07, 0.028, 0.011, 0.004], dashed: true },
            { label: 'with residual connections', tone: 'good', points: [1, 0.94, 0.89, 0.85, 0.82, 0.79, 0.77] },
          ],
          xLabel: 'layers travelled backward from the loss',
          yLabel: 'relative gradient',
          yMax: 1.1,
          footer: 'Shape is illustrative, but the effect is real: the identity term keeps the signal alive.',
        },
      },
    ],
  },

  'layer-normalization': {
    title: 'Layer normalization',
    description:
      'Normalisation computed across the features of one token — not across the batch. Each token is rescaled using only its own numbers.',
    legend: [
      { tone: 'accent', label: 'negative value' },
      { tone: 'active', label: 'positive value' },
      { tone: 'good', label: 'after normalisation' },
    ],
    mathNote:
      `LayerNorm(x) = γ ⊙ (x − μ) / √(σ² + ε) + β, where μ and σ² are computed over the feature dimension of a single token. Here μ = ${LN_MEAN} and σ² = ${LN_VAR} for that one token. BatchNorm instead computes μ and σ² per feature across the batch, which couples examples together and behaves badly with variable-length text — that is why transformers use LayerNorm. RMSNorm drops the mean subtraction and divides by the root-mean-square only.`,
    steps: [
      {
        id: 'ln-1',
        caption:
          'The problem — activations inside a deep stack drift to wildly different magnitudes, which destabilises the next sublayer.',
        frame: {
          kind: 'vectors',
          heading: 'One token\'s activation vector, mid-network',
          columns: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
          rows: [{ label: 'x (one token)', values: LN_INPUT, tone: 'active', note: 'range −3.1 … 7.9' }],
          scale: 8,
        },
      },
      {
        id: 'ln-2',
        caption:
          `Statistics across features — mean and variance are computed along this one token's feature dimension: μ = ${LN_MEAN}, σ² = ${LN_VAR}.`,
        frame: {
          kind: 'bars',
          heading: 'The six features of this single token, and their mean',
          bars: [
            { label: 'f0', value: LN_INPUT[0], tone: 'active' },
            { label: 'f1', value: LN_INPUT[1], tone: 'accent' },
            { label: 'f2', value: LN_INPUT[2], tone: 'active' },
            { label: 'f3', value: LN_INPUT[3], tone: 'active' },
            { label: 'f4', value: LN_INPUT[4], tone: 'accent' },
            { label: 'f5', value: LN_INPUT[5], tone: 'active' },
            { label: 'μ (mean)', value: LN_MEAN, tone: 'warn', note: 'averaged across features, not across examples' },
          ],
          format: 'decimal2',
          max: 8,
          footer: 'Nothing here involves any other token or any other example in the batch.',
        },
      },
      {
        id: 'ln-3',
        caption:
          'Normalise — subtract μ and divide by √(σ² + ε). The token now has zero mean and unit variance across its features.',
        frame: {
          kind: 'vectors',
          heading: '(x − μ) / √(σ² + ε)',
          columns: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
          rows: [
            { label: 'x', values: LN_INPUT, tone: 'muted' },
            { label: 'normalised', values: LN_NORMALISED, tone: 'good', note: 'mean ≈ 0, variance ≈ 1' },
          ],
          scale: 8,
        },
      },
      {
        id: 'ln-4',
        caption:
          'Learned scale and shift — γ and β are trained parameters that let the network undo the normalisation where it is unhelpful.',
        frame: {
          kind: 'vectors',
          heading: 'γ ⊙ normalised + β',
          columns: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
          rows: [
            { label: 'normalised', values: LN_NORMALISED, tone: 'muted' },
            { label: 'γ (learned)', values: LN_GAIN, tone: 'warn' },
            { label: 'output', values: LN_OUTPUT, tone: 'good' },
          ],
          scale: 2.4,
          footer: 'Normalisation is not a straitjacket — γ and β restore whatever scale the next layer actually wants.',
        },
      },
      {
        id: 'ln-5',
        caption:
          'Not BatchNorm — a second token in the same batch is normalised using its own statistics. Rows are independent; batch size is irrelevant.',
        callout: 'BatchNorm would normalise down each column across examples, making one sequence\'s output depend on its batch-mates. Wrong tool for variable-length text.',
        frame: {
          kind: 'vectors',
          heading: 'Each row normalised independently, left to right',
          columns: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
          rows: [
            { label: 'token A in', values: LN_INPUT, tone: 'muted' },
            { label: 'token A out', values: LN_NORMALISED, tone: 'good' },
            { label: 'token B in', values: LN_OTHER_TOKEN, tone: 'muted' },
            { label: 'token B out', values: layerNorm(LN_OTHER_TOKEN).map((v) => round(v, 2)), tone: 'good', note: 'own μ and σ², untouched by token A' },
          ],
          scale: 8,
        },
      },
    ],
  },

  'encoder-decoder-types': {
    title: 'Encoder, decoder and encoder–decoder',
    description: 'The families differ by one thing you can actually see: which cells of the attention matrix are allowed.',
    legend: [
      { tone: 'active', label: 'allowed attention weight' },
      { tone: 'muted', label: 'masked — blocked by the architecture' },
    ],
    mathNote:
      'The causal mask adds −∞ to scores where j > i before the softmax, so exp(−∞) = 0 and those positions receive exactly zero weight. Encoders omit the mask entirely. Encoder–decoder models keep the causal mask on self-attention in the decoder but use an unmasked cross-attention over the encoder output.',
    steps: [
      {
        id: 'ed-1',
        caption:
          'Encoder-only (BERT-like) — bidirectional attention. Every position may read every other position, including the ones after it.',
        frame: {
          kind: 'matrix',
          heading: 'Encoder self-attention: no mask, all 25 cells live',
          rowLabels: SENT,
          colLabels: SENT,
          values: BIDIRECTIONAL,
          rowAxisLabel: 'query ↓',
          colAxisLabel: 'key → : "The" can already see "river"',
          footer: 'Great for classification and embedding, useless for left-to-right generation — it would be reading the answer.',
        },
      },
      {
        id: 'ed-2',
        caption:
          'Decoder-only (GPT-like) — a causal mask zeroes the upper triangle, so position i can only attend to positions ≤ i.',
        frame: {
          kind: 'matrix',
          heading: 'Decoder self-attention: future positions masked out',
          rowLabels: SENT,
          colLabels: SENT,
          values: CAUSAL.values,
          masked: CAUSAL.masked,
          rowAxisLabel: 'query ↓',
          colAxisLabel: 'key → : hatched cells are set to −∞ before softmax',
          footer: 'Row 1 has a single 1.00 — "The" has nothing to look at but itself.',
        },
      },
      {
        id: 'ed-3',
        caption:
          'The same rows renormalise — masking happens before softmax, so each row still sums to 1 across the positions it is allowed to use.',
        frame: {
          kind: 'bars',
          heading: 'Row 3 ("by") of the causal matrix',
          bars: [
            { label: 'The', value: CAUSAL.values[2][0], tone: 'active' },
            { label: 'bank', value: CAUSAL.values[2][1], tone: 'active' },
            { label: 'by', value: CAUSAL.values[2][2], tone: 'active' },
            { label: 'the', value: CAUSAL.values[2][3], tone: 'muted', note: 'masked — future token' },
            { label: 'river', value: CAUSAL.values[2][4], tone: 'muted', note: 'masked — future token' },
          ],
          format: 'percent',
          max: 1,
          footer: `Allowed weights total ${round(CAUSAL.values[2].reduce((a, b) => a + b, 0), 2)}. The masked tokens contribute exactly zero.`,
        },
      },
      {
        id: 'ed-4',
        caption:
          'Encoder–decoder (T5-like) — the encoder reads the source bidirectionally, and the decoder cross-attends to it while staying causal over its own output.',
        frame: {
          kind: 'matrix',
          heading: 'Cross-attention: target rows attend to source columns, unmasked',
          rowLabels: ['La', 'banque', 'du', 'fleuve'],
          colLabels: SENT,
          values: rowSoftmax([
            [2.4, 0.6, 0.3, 0.5, 0.4],
            [0.5, 2.7, 0.4, 0.4, 0.8],
            [0.4, 0.6, 2.1, 1.1, 0.6],
            [0.3, 0.7, 0.5, 0.6, 2.6],
          ]),
          rowAxisLabel: 'target ↓',
          colAxisLabel: 'source (English) → : the decoder may see the whole source at once',
          footer: 'Two different masking rules coexist: causal within the target, unrestricted from target to source.',
        },
      },
      {
        id: 'ed-5',
        caption:
          'Pick by information flow — do you need to understand a fixed input, continue text, or map one sequence to another?',
        frame: {
          kind: 'panels',
          heading: 'Which layout fits the job',
          panels: [
            { title: 'Encoder-only', body: 'Classification, retrieval embeddings, token tagging. Trained with masked-language modelling.', tone: 'accent' },
            { title: 'Decoder-only', body: 'Chat and completion. Trained with next-token prediction under a causal mask. Powers most current LLMs.', tone: 'active' },
            { title: 'Encoder–decoder', body: 'Translation, summarisation, any text-to-text transform where source and target are distinct.', tone: 'good' },
          ],
        },
      },
    ],
  },

  'autoregressive-decoding': {
    title: 'Autoregressive decoding',
    description:
      'The conditioning story: each new token is drawn from a distribution that depends on every token already fixed, including the ones the model itself produced.',
    legend: [
      { tone: 'accent', label: 'prompt tokens (given)' },
      { tone: 'active', label: 'tokens the model generated' },
      { tone: 'warn', label: 'position being predicted now' },
    ],
    mathNote:
      'p(x₁…x_T) = Π_t p(x_t | x_<t). Every step re-conditions on the full prefix, which is why an early mistake changes the distribution of everything after it. Cached keys and values make step t cost O(t·d) instead of recomputing the whole prefix.',
    steps: [
      {
        id: 'ar-1',
        caption:
          'Prefix — the prompt is encoded once. Nothing has been generated yet; the model is conditioning on 5 given tokens.',
        frame: {
          kind: 'tokens',
          heading: 'Step 1 — prefix length 5',
          source: 'The capital of France is',
          tokens: [
            { text: 'The', tone: 'accent' },
            { text: ' capital', tone: 'accent' },
            { text: ' of', tone: 'accent' },
            { text: ' France', tone: 'accent' },
            { text: ' is', tone: 'accent' },
            { text: '?', tone: 'warn', note: 'predicting' },
          ],
          footer: 'p(x₆ | x₁…x₅) — one distribution over the whole vocabulary.',
        },
      },
      {
        id: 'ar-2',
        caption:
          'Append — the sampled token becomes part of the prefix. The model is now conditioning on its own output, not just yours.',
        frame: {
          kind: 'tokens',
          heading: 'Step 2 — prefix length 6',
          source: 'The capital of France is Paris',
          tokens: [
            { text: 'The', tone: 'accent' },
            { text: ' capital', tone: 'accent' },
            { text: ' of', tone: 'accent' },
            { text: ' France', tone: 'accent' },
            { text: ' is', tone: 'accent' },
            { text: ' Paris', tone: 'active', note: 'generated' },
            { text: '?', tone: 'warn', note: 'predicting' },
          ],
          footer: 'p(x₇ | x₁…x₆). The conditioning set grew by exactly one token.',
        },
      },
      {
        id: 'ar-3',
        caption:
          'KV cache — keys and values for tokens already processed are reused, so each step only computes the new position rather than the whole prefix again.',
        frame: {
          kind: 'timeline',
          heading: 'Work done per decoding step',
          events: [
            { label: 'Step 1 — prefill', detail: 'Compute K,V for all 5 prompt tokens. This is the expensive one.', tone: 'accent', marker: 'step' },
            { label: 'Step 2', detail: 'Reuse 5 cached K,V. Compute only "Paris".', tone: 'active', marker: 'step' },
            { label: 'Step 3', detail: 'Reuse 6 cached K,V. Compute only the new token.', tone: 'active', marker: 'step' },
          ],
          activeIndex: 2,
          state: [
            { key: 'cached positions', value: '6', changed: true },
            { key: 'new positions', value: '1' },
            { key: 'cost/step', value: 'O(prefix length)' },
          ],
          footer: 'Time-to-first-token is dominated by prefill; the tokens after it stream out steadily.',
        },
      },
      {
        id: 'ar-4',
        caption:
          'Error cascade — a wrong token is not corrected later. It is conditioned on, so every following distribution is computed from the mistake.',
        frame: {
          kind: 'tokens',
          heading: 'A bad sample at step 2 rewrites the future',
          source: 'The capital of France is Lyon, a city on the Rhône…',
          tokens: [
            { text: ' is', tone: 'accent' },
            { text: ' Lyon', tone: 'bad', note: 'unlucky sample' },
            { text: ',', tone: 'muted' },
            { text: ' a', tone: 'muted' },
            { text: ' city', tone: 'muted' },
            { text: ' on', tone: 'muted' },
            { text: ' the', tone: 'muted' },
            { text: ' Rhône', tone: 'muted', note: 'consistent with the error, still wrong' },
          ],
          footer: 'The model has no eraser. Once "Lyon" is in the prefix, fluent continuation means staying wrong.',
        },
      },
      {
        id: 'ar-5',
        caption:
          'Termination — decoding stops when the model samples an end-of-sequence token, or when a length or stop-string limit fires first.',
        callout: 'Autoregressive means "conditioned on its own past output". That single property explains streaming, latency and cascading errors.',
        frame: {
          kind: 'tokens',
          heading: 'Step 9 — the model emits EOS',
          source: 'The capital of France is Paris.',
          tokens: [
            { text: ' Paris', tone: 'active' },
            { text: '.', tone: 'active' },
            { text: '<|endoftext|>', tone: 'good', note: 'sampled, not forced' },
          ],
          footer: 'EOS is an ordinary vocabulary token. The model learned when it is the likely continuation.',
        },
      },
    ],
  },

  'text-generation-loop': {
    title: 'The text generation loop',
    description:
      'The control flow wrapped around the model: what your runtime does before, between and after each forward pass.',
    legend: [
      { tone: 'active', label: 'current stage' },
      { tone: 'good', label: 'completed' },
      { tone: 'muted', label: 'not reached yet' },
    ],
    mathNote:
      'Nothing probabilistic here — this is the surrounding program. The loop is: while not stopped { logits = model(prefix); token = sample(logits, policy); prefix += token; check stop rules }. Stop rules are checked on the token stream, so a stop string spanning two tokens needs buffering.',
    steps: [
      {
        id: 'gen-1',
        caption:
          'Encode — the prompt text is turned into token IDs. Everything after this point works with integers, not characters.',
        frame: {
          kind: 'flow',
          stages: [
            { label: 'Tokenize', detail: '"Write a haiku." → [8144, 257, 43606, 13]' },
            { label: 'Forward pass', detail: 'Logits over the vocabulary' },
            { label: 'Sample', detail: 'Apply the decoding policy' },
            { label: 'Append', detail: 'Token joins the prefix' },
            { label: 'Check stops', detail: 'EOS / max_tokens / stop string' },
            { label: 'Detokenize', detail: 'IDs back to text' },
          ],
          activeIndex: 0,
          footer: 'Accumulated output: (empty)',
        },
      },
      {
        id: 'gen-2',
        caption:
          'One iteration — forward pass, sample, append. This trio repeats once per token and is the only part that touches the model.',
        frame: {
          kind: 'flow',
          stages: [
            { label: 'Tokenize', detail: 'done', tone: 'good' },
            { label: 'Forward pass', detail: '50,257 logits for position 5' },
            { label: 'Sample', detail: 'temperature 0.8, top-p 0.9 → " Silent"' },
            { label: 'Append', detail: 'prefix is now 5 tokens' },
            { label: 'Check stops', detail: 'none fired — loop again' },
            { label: 'Detokenize', detail: 'not yet' },
          ],
          activeIndex: 2,
          footer: 'Accumulated output: " Silent"',
        },
      },
      {
        id: 'gen-3',
        caption:
          'Streaming — each appended token can be flushed to the client immediately, which is why answers appear word by word.',
        frame: {
          kind: 'flow',
          stages: [
            { label: 'Tokenize', detail: 'done', tone: 'good' },
            { label: 'Forward pass', detail: 'iteration 9', tone: 'good' },
            { label: 'Sample', detail: '" pond"', tone: 'good' },
            { label: 'Append', detail: 'prefix is now 13 tokens' },
            { label: 'Check stops', detail: 'none fired' },
            { label: 'Detokenize', detail: 'partial flush to the client' },
          ],
          activeIndex: 5,
          footer: 'Accumulated output: " Silent pond in spring / a frog leaps toward the pond"',
        },
      },
      {
        id: 'gen-4',
        caption:
          'Stop conditions — three independent rules can end the loop, and which one fired changes how you should treat the output.',
        frame: {
          kind: 'panels',
          heading: 'Why the loop ended',
          panels: [
            { title: 'EOS token sampled', body: 'The model decided it was finished. This is a clean completion.', tone: 'good' },
            { title: 'max_tokens reached', body: 'Your cap fired. The text is very likely cut mid-sentence — treat it as truncated, not complete.', tone: 'warn' },
            { title: 'Stop sequence matched', body: 'A string you supplied (e.g. "```" or "\\nUser:") appeared. The stop string itself is usually excluded.', tone: 'accent' },
          ],
          footer: 'APIs report this as a finish_reason. Logging it is the cheapest way to spot silent truncation bugs.',
        },
      },
      {
        id: 'gen-5',
        caption:
          'Detokenize — IDs are joined back into a string. Byte-level tokenizers must buffer, because one character can span several tokens.',
        callout: 'The loop is plain program logic. Swapping the sampling policy or the stop rules changes the product without touching the model.',
        frame: {
          kind: 'flow',
          stages: [
            { label: 'Tokenize', detail: 'done', tone: 'good' },
            { label: 'Forward pass', detail: '17 iterations', tone: 'good' },
            { label: 'Sample', detail: 'last token was EOS', tone: 'good' },
            { label: 'Append', detail: 'final prefix: 21 tokens', tone: 'good' },
            { label: 'Check stops', detail: 'finish_reason = "stop"', tone: 'good' },
            { label: 'Detokenize', detail: 'return the string' },
          ],
          activeIndex: 5,
          footer: 'Final output: "Silent pond in spring / a frog leaps toward the water / ripples carry sound"',
        },
      },
    ],
  },

  'why-hallucinations-happen': {
    title: 'Why hallucinations happen',
    description:
      'The same mechanism that makes the model fluent makes it confident when it should not be: it always returns a distribution, even with no evidence.',
    legend: [
      { tone: 'bad', label: 'confident and wrong' },
      { tone: 'good', label: 'correct / supported' },
      { tone: 'warn', label: 'honest uncertainty' },
    ],
    mathNote:
      `Cross-entropy training rewards assigning high probability to the observed continuation, not to true statements. A model that answers "30 days" with p = 0.34 when the truth is unknown is behaving exactly as trained. Note the asymmetry: being confidently wrong costs ${CE_AT_P(0.02)} nats, while being unsure but right costs only ${CE_AT_P(0.4)}.`,
    steps: [
      {
        id: 'hal-1',
        caption:
          'The question — a fact that lives in a private document the model has never seen. There is no correct answer inside the weights.',
        frame: {
          kind: 'panels',
          heading: 'User asks a question the model cannot know',
          panels: [
            { title: 'Question', body: '"What is Acme Corp\'s refund window for enterprise plans?"', tone: 'accent' },
            { title: 'What the model has', body: 'Statistical patterns from public text. Thousands of refund policies, none of them Acme\'s.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'hal-2',
        caption:
          'It must still produce a distribution — the forward pass cannot return "nothing". Every candidate continuation gets a probability.',
        frame: {
          kind: 'bars',
          heading: 'p(next answer | prompt), no evidence supplied',
          bars: [
            { label: HALLU_LABELS[0], value: HALLU_NO_EVIDENCE[0], tone: 'bad' },
            { label: HALLU_LABELS[1], value: HALLU_NO_EVIDENCE[1], tone: 'bad' },
            { label: HALLU_LABELS[2], value: HALLU_NO_EVIDENCE[2], tone: 'bad' },
            { label: HALLU_LABELS[3], value: HALLU_NO_EVIDENCE[3], tone: 'muted' },
            { label: HALLU_LABELS[4], value: HALLU_NO_EVIDENCE[4], tone: 'warn', note: 'rarely the most likely continuation' },
          ],
          format: 'percent',
          max: 0.45,
          footer: 'The mass is spread over plausible-sounding policies. "30 days" wins because it is common in training text, not because it is Acme\'s policy.',
        },
      },
      {
        id: 'hal-3',
        caption:
          'Fluency hides the uncertainty — the sampled answer is rendered in the same confident prose as a well-grounded one. Nothing in the output signals the 34% figure.',
        frame: {
          kind: 'panels',
          heading: 'What the user sees',
          panels: [
            { title: 'Model output', body: '"Acme Corp offers a 30-day refund window on enterprise plans, with a full refund available on written request."', tone: 'bad' },
            { title: 'What was actually true', body: 'Acme\'s enterprise contracts specify 45 days. The answer is confident, specific, and wrong.', tone: 'warn' },
          ],
          footer: 'Calibration failure: the tone of the answer does not track the probability behind it.',
        },
      },
      {
        id: 'hal-4',
        caption:
          'Amplifiers — high temperature spreads the mass further, and prompts that forbid "I don\'t know" remove the only honest option.',
        frame: {
          kind: 'bars',
          heading: 'Same prompt at temperature 1.4',
          bars: [
            { label: HALLU_LABELS[0], value: softmax([2.6, 2.4, 1.9, 0.8, -0.4], 1.4)[0], ghost: HALLU_NO_EVIDENCE[0], tone: 'bad' },
            { label: HALLU_LABELS[1], value: softmax([2.6, 2.4, 1.9, 0.8, -0.4], 1.4)[1], ghost: HALLU_NO_EVIDENCE[1], tone: 'bad' },
            { label: HALLU_LABELS[2], value: softmax([2.6, 2.4, 1.9, 0.8, -0.4], 1.4)[2], ghost: HALLU_NO_EVIDENCE[2], tone: 'bad' },
            { label: HALLU_LABELS[3], value: softmax([2.6, 2.4, 1.9, 0.8, -0.4], 1.4)[3], ghost: HALLU_NO_EVIDENCE[3], tone: 'muted' },
            { label: HALLU_LABELS[4], value: softmax([2.6, 2.4, 1.9, 0.8, -0.4], 1.4)[4], ghost: HALLU_NO_EVIDENCE[4], tone: 'warn' },
          ],
          format: 'percent',
          max: 0.45,
          footer: 'Hatched bars are temperature 1.0 for comparison. Flatter distribution, more chance of sampling a different invented number.',
        },
      },
      {
        id: 'hal-5',
        caption:
          'Grounding changes the distribution — put the actual policy text in the context and the correct answer becomes overwhelmingly likely.',
        callout: 'Retrieval does not make the model honest. It changes what is probable, which is the only lever the objective responds to.',
        frame: {
          kind: 'bars',
          heading: 'Same question, with the retrieved contract clause in context',
          bars: [
            { label: '"45 days"', value: HALLU_WITH_EVIDENCE[0], tone: 'good' },
            { label: HALLU_LABELS[1], value: HALLU_WITH_EVIDENCE[1], tone: 'muted' },
            { label: HALLU_LABELS[2], value: HALLU_WITH_EVIDENCE[2], tone: 'muted' },
            { label: HALLU_LABELS[3], value: HALLU_WITH_EVIDENCE[3], tone: 'muted' },
            { label: HALLU_LABELS[4], value: HALLU_WITH_EVIDENCE[4], tone: 'warn' },
          ],
          format: 'percent',
          max: 1,
          footer: 'Evidence in context reshapes the distribution. Abstention prompts and citation requirements make the remaining tail safer.',
        },
      },
    ],
  },

  tokenization: {
    title: 'Tokenization (BPE-style teaching demo)',
    description: 'Text → subword tokens → integer ids. Common pieces stay whole; rare/long words split. Leading spaces often matter.',
    legend: [
      { tone: 'good', label: 'kept as one token' },
      { tone: 'active', label: 'split subword' },
      { tone: 'accent', label: 'special / punctuation' },
    ],
    mathNote:
      'This visualization is a teaching approximation of Byte-Pair Encoding (BPE), not a dump of any production tokenizer. Real tokenizers differ by model (GPT-class vs SentencePiece, etc.). Cost and context limits are counted in tokens, not words or characters.',
    steps: [
      {
        id: 'tk-1',
        caption:
          'Raw text — humans see words; the model will see tokens from a fixed vocabulary.',
        frame: {
          kind: 'tokens',
          heading: 'Input',
          source: 'Generative AI rocks!',
          tokens: [{ text: 'Generative AI rocks!', tone: 'neutral' }],
        },
      },
      {
        id: 'tk-2',
        caption:
          'Subword split — a teaching BPE: common words/phrases may be one token; long/rare forms split. Leading spaces are often part of the token.',
        frame: {
          kind: 'tokens',
          heading: 'Teaching tokenizer output (approximation)',
          tokens: [
            { text: 'Generative', tone: 'good', note: 'whole word in vocab' },
            { text: ' AI', tone: 'good', note: 'leading space kept' },
            { text: ' rocks', tone: 'good' },
            { text: '!', tone: 'accent' },
          ],
          footer: 'Simplification: a real GPT-style tokenizer may merge or split differently.',
        },
      },
      {
        id: 'tk-3',
        caption:
          'Rare word splits — “antidisestablishment” is not one vocab entry, so it becomes pieces the model knows.',
        frame: {
          kind: 'tokens',
          heading: 'Rare / long word',
          source: 'antidisestablishment',
          tokens: [
            { text: 'anti', tone: 'active' },
            { text: 'dis', tone: 'active' },
            { text: 'establish', tone: 'active' },
            { text: 'ment', tone: 'active' },
          ],
          footer: 'More tokens ⇒ more cost and faster context fill for the same letters.',
        },
      },
      {
        id: 'tk-4',
        caption:
          'IDs — each token maps to an integer index into the embedding table. That integer is what training and inference operate on.',
        frame: {
          kind: 'tokens',
          heading: 'Token → id',
          tokens: [
            { text: 'Generative', id: 4521, tone: 'good' },
            { text: ' AI', id: 9552, tone: 'good' },
            { text: ' rocks', id: 17804, tone: 'good' },
            { text: '!', id: 0, tone: 'accent' },
          ],
          footer: 'Ids shown are fake demo numbers — real ids depend on the tokenizer vocabulary.',
        },
      },
      {
        id: 'tk-5',
        caption:
          'Why it matters — billing, context windows, and quirks like “A” vs “ A” being different tokens all come from this step.',
        callout: 'Always count with the same tokenizer the model uses. Character length is not a safe proxy.',
        frame: {
          kind: 'panels',
          heading: 'Consequences',
          panels: [
            { title: 'Context', body: 'Windows are token budgets, not page counts.', tone: 'good' },
            { title: 'Cost', body: 'APIs charge per token in and out.', tone: 'warn' },
            { title: 'Quirk', body: 'Leading spaces and casing can change token boundaries.', tone: 'accent' },
          ],
        },
      },
    ],
  },

  embeddings: {
    title: 'Token embeddings',
    description: 'Ids become vectors; similar meanings land nearby in a high-d space — shown here as a labeled 2D projection.',
    legend: [
      { tone: 'good', label: 'related cluster' },
      { tone: 'accent', label: 'query' },
    ],
    mathNote:
      'Embedding table E ∈ ℝ^{V×d}: row id i is the vector for token i. Geometry below is a 2D teaching projection of a much higher-dimensional space — distances are illustrative. Similarity for retrieval often uses cosine(q, d).',
    steps: [
      {
        id: 'emb-1',
        caption:
          'Lookup — each token id selects a learned vector from the embedding table (d numbers).',
        frame: {
          kind: 'vectors',
          heading: 'Demo rows (d=6, toy values)',
          columns: ['e0', 'e1', 'e2', 'e3', 'e4', 'e5'],
          rows: [
            { label: 'king', values: [0.9, 0.2, -0.1, 0.4, 0.1, 0.0], tone: 'good' },
            { label: 'queen', values: [0.85, 0.25, -0.05, 0.35, 0.15, 0.05], tone: 'good' },
            { label: 'apple', values: [-0.2, 0.7, 0.6, -0.1, 0.3, 0.4], tone: 'warn' },
          ],
          scale: 1,
        },
      },
      {
        id: 'emb-2',
        caption:
          'Projected space — royalty words cluster; fruit words cluster elsewhere. Label: 2D projection for teaching.',
        frame: {
          kind: 'scatter',
          heading: '2D projection (not the real d-space)',
          points: [
            { id: 'king', label: 'king', x: 0.22, y: 0.7, tone: 'good' },
            { id: 'queen', label: 'queen', x: 0.3, y: 0.78, tone: 'good' },
            { id: 'apple', label: 'apple', x: 0.72, y: 0.35, tone: 'warn' },
            { id: 'orange', label: 'orange', x: 0.8, y: 0.42, tone: 'warn' },
            { id: 'nn', label: 'neural net', x: 0.55, y: 0.65, tone: 'muted' },
          ],
          clusters: [
            { label: 'royalty', x: 0.26, y: 0.74, r: 0.12 },
            { label: 'fruit', x: 0.76, y: 0.38, r: 0.12 },
          ],
          axisNote: 'Axes are a teaching projection of high-dimensional embeddings.',
        },
      },
      {
        id: 'emb-3',
        caption:
          'Query near neighbours — “monarch” lands near king/queen by cosine in the toy geometry.',
        frame: {
          kind: 'scatter',
          heading: 'Nearest neighbours to query “monarch”',
          points: [
            { id: 'q', label: 'monarch', x: 0.28, y: 0.72, tone: 'accent' },
            { id: 'king', label: 'king', x: 0.22, y: 0.7, tone: 'good' },
            { id: 'queen', label: 'queen', x: 0.3, y: 0.78, tone: 'good' },
            { id: 'apple', label: 'apple', x: 0.72, y: 0.35, tone: 'muted' },
          ],
          links: [
            { from: 'q', to: 'king', label: 'near', tone: 'good' },
            { from: 'q', to: 'queen', label: 'near', tone: 'good' },
          ],
          axisNote: '2D projection for teaching.',
        },
      },
      {
        id: 'emb-4',
        caption:
          'Cosine on demo vectors — higher means smaller angle (more similar direction).',
        callout: 'Embeddings are the substrate for attention and for retrieval — same idea, different stages.',
        frame: {
          kind: 'bars',
          heading: 'cos(monarch, ·) on toy 3-d vectors',
          bars: [
            { label: 'king', value: round(cosine([0.9, 0.2, 0.1], [0.88, 0.22, 0.12]), 2), tone: 'good' },
            { label: 'queen', value: round(cosine([0.9, 0.2, 0.1], [0.86, 0.24, 0.08]), 2), tone: 'good' },
            { label: 'apple', value: round(cosine([0.9, 0.2, 0.1], [-0.2, 0.7, 0.5]), 2), tone: 'muted' },
          ],
          format: 'decimal2',
          max: 1,
        },
      },
    ],
  },

  'self-attention': {
    title: 'Self-attention',
    description: 'Q·K scores → softmax weights → weighted sum of V. Context chooses what “bank” means.',
    legend: [
      { tone: 'accent', label: 'query token' },
      { tone: 'good', label: 'high attention weight' },
    ],
    mathNote:
      'For token i: qᵢ = xᵢW_Q, kⱼ = xⱼW_K, vⱼ = xⱼW_V. scoreᵢⱼ = qᵢ·kⱼ / √dₖ; αᵢ = softmax(scoreᵢ); outputᵢ = Σⱼ αᵢⱼ vⱼ. Softmax rows sum to 1. This demo uses small hand-chosen scores so the arithmetic is visible.',
    steps: [
      {
        id: 'sa-1',
        caption:
          'Tokens in — “bank” is ambiguous until other tokens can influence its representation.',
        frame: {
          kind: 'tokens',
          heading: 'Sentence',
          tokens: SENT.map((t, i) => ({ text: t, tone: i === 1 ? 'accent' : 'neutral' })),
        },
      },
      {
        id: 'sa-2',
        caption:
          'Q, K, V — each token makes a query, key, and value vector (linear projections of its embedding).',
        frame: {
          kind: 'panels',
          heading: 'Projections (conceptual)',
          panels: [
            { title: 'Q (query)', body: 'What is “bank” looking for?', tone: 'accent' },
            { title: 'K (key)', body: 'What does each token advertise?', tone: 'active' },
            { title: 'V (value)', body: 'What content is mixed in if attended?', tone: 'good' },
          ],
        },
      },
      {
        id: 'sa-3',
        caption:
          'Scores → weights — dot products of Q_bank with each K, then softmax so weights sum to 1.',
        frame: {
          kind: 'bars',
          heading: 'Attention weights α for query “bank” (river context)',
          bars: [
            { label: 'The', value: 0.08, tone: 'muted' },
            { label: 'bank', value: 0.15, tone: 'accent' },
            { label: 'by', value: 0.12, tone: 'muted' },
            { label: 'the', value: 0.1, tone: 'muted' },
            { label: 'river', value: 0.55, tone: 'good', note: 'disambiguates' },
          ],
          format: 'percent',
          max: 1,
          footer: 'Weights are a valid softmax: 0.08+0.15+0.12+0.10+0.55 = 1.00',
        },
      },
      {
        id: 'sa-4',
        caption:
          'Weighted sum of V — output_bank ≈ Σ αⱼ vⱼ. Mass on “river” pulls the representation toward the landscape sense.',
        frame: {
          kind: 'matrix',
          heading: 'Full attention matrix (softmax per row)',
          rowLabels: SENT,
          colLabels: SENT,
          values: rowSoftmax([
            [2.2, 0.4, 0.3, 0.5, 0.4],
            [0.5, 1.2, 0.6, 0.5, 2.8],
            [0.4, 0.5, 1.5, 0.4, 0.6],
            [0.5, 0.4, 0.4, 1.6, 0.5],
            [0.4, 1.1, 0.5, 0.4, 2.0],
          ]),
          highlightRow: 1,
          rowAxisLabel: 'query',
          colAxisLabel: 'key →',
        },
      },
      {
        id: 'sa-5',
        caption:
          'Different context — swap in money-related words and the weight mass on “river” collapses; “bank” reorients.',
        callout: 'Self-attention is content-addressable mixing — not a fixed parse tree.',
        frame: {
          kind: 'bars',
          heading: 'α for “bank” in “The bank froze the account”',
          bars: [
            { label: 'The', value: 0.1, tone: 'muted' },
            { label: 'bank', value: 0.2, tone: 'accent' },
            { label: 'froze', value: 0.25, tone: 'good' },
            { label: 'the', value: 0.1, tone: 'muted' },
            { label: 'account', value: 0.35, tone: 'good' },
          ],
          format: 'percent',
          max: 1,
        },
      },
    ],
  },

  'next-token-prediction': {
    title: 'Next-token prediction',
    description: 'One forward pass → logits over the vocabulary → a probability distribution for the single next token.',
    legend: [
      { tone: 'good', label: 'likely next token' },
      { tone: 'muted', label: 'low-probability tail' },
    ],
    mathNote:
      'Given prefix tokens, the model outputs logits z ∈ ℝ^V; p = softmax(z). Training minimises cross-entropy of p on the true next token. Generation samples or argmaxes from p, appends, and repeats — that loop is a later concept.',
    steps: [
      {
        id: 'ntp-1',
        caption:
          'Prefix — the model conditions only on tokens already present (plus system/tools if any).',
        frame: {
          kind: 'tokens',
          heading: 'Context',
          tokens: [
            { text: 'The', tone: 'neutral' },
            { text: ' cat', tone: 'neutral' },
            { text: ' sat', tone: 'neutral' },
            { text: ' on', tone: 'neutral' },
            { text: ' the', tone: 'neutral' },
            { text: ' ▌', tone: 'accent', note: 'predict here' },
          ],
        },
      },
      {
        id: 'ntp-2',
        caption:
          'Logits — a score for every vocab entry (shown: a tiny slice). Higher logit ⇒ preferred before normalisation.',
        frame: {
          kind: 'bars',
          heading: 'Logits (slice of V)',
          bars: [
            { label: 'mat', value: 3.0, tone: 'good' },
            { label: 'floor', value: 2.0, tone: 'active' },
            { label: 'couch', value: 1.4, tone: 'warn' },
            { label: 'moon', value: -0.5, tone: 'muted' },
          ],
          format: 'decimal1',
          max: 3.5,
        },
      },
      {
        id: 'ntp-3',
        caption:
          'Softmax — convert logits to probabilities that sum to 1. This is the full predictive distribution for the next token.',
        frame: {
          kind: 'bars',
          heading: 'p = softmax(logits)',
          bars: (() => {
            const p = softmax([3, 2, 1.4, -0.5]);
            return [
              { label: 'mat', value: round(p[0], 3), tone: 'good' },
              { label: 'floor', value: round(p[1], 3), tone: 'active' },
              { label: 'couch', value: round(p[2], 3), tone: 'warn' },
              { label: 'moon', value: round(p[3], 3), tone: 'muted' },
            ];
          })(),
          format: 'percent',
          max: 1,
          footer: 'Computed softmax — not hand-waved percentages.',
        },
      },
      {
        id: 'ntp-4',
        caption:
          'One decision — sampling or argmax picks a single token. That is next-token prediction; looping it is generation.',
        callout: 'Distinct from temperature/top-k (which reshape p) and from the full generation loop (which appends and repeats).',
        frame: {
          kind: 'panels',
          heading: 'Outcome of this step',
          panels: [
            { title: 'Chosen', body: '“mat” (e.g. argmax or sample)', tone: 'good' },
            { title: 'Not yet', body: 'No second token until another forward pass on the extended prefix.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  'temperature-top-k-top-p': {
    title: 'Temperature, top-k, and top-p',
    description: 'Reshape the next-token distribution: temperature scales logits; top-k / top-p truncate before sampling.',
    legend: [
      { tone: 'good', label: 'kept for sampling' },
      { tone: 'muted', label: 'truncated / zeroed' },
    ],
    mathNote:
      'Temperature T: p = softmax(z / T). Higher T flattens; lower T sharpens (T→0 → argmax). Top-k: keep k largest probabilities, zero the rest, renormalise. Top-p (nucleus): keep the smallest set whose cumulative probability ≥ p, then renormalise. Order usually: temperature → truncate → sample.',
    steps: [
      {
        id: 'tt-1',
        caption:
          'Base distribution — softmax at T=1 on fixed logits.',
        frame: {
          kind: 'bars',
          heading: 'T = 1',
          bars: (() => {
            const p = softmax([3, 2, 1.4, -0.5], 1);
            return ['mat', 'floor', 'couch', 'moon'].map((label, i) => ({
              label,
              value: round(p[i], 3),
              tone: i === 0 ? 'good' : 'neutral',
            }));
          })(),
          format: 'percent',
          max: 1,
        },
      },
      {
        id: 'tt-2',
        caption:
          'Low temperature — T=0.5 sharpens peaks; high-probability tokens dominate more.',
        frame: {
          kind: 'bars',
          heading: 'T = 0.5 (sharper)',
          bars: (() => {
            const p = softmax([3, 2, 1.4, -0.5], 0.5);
            return ['mat', 'floor', 'couch', 'moon'].map((label, i) => ({
              label,
              value: round(p[i], 3),
              tone: i === 0 ? 'good' : 'muted',
            }));
          })(),
          format: 'percent',
          max: 1,
        },
      },
      {
        id: 'tt-3',
        caption:
          'High temperature — T=1.5 flattens; the tail (“moon”) gains mass.',
        frame: {
          kind: 'bars',
          heading: 'T = 1.5 (flatter)',
          bars: (() => {
            const p = softmax([3, 2, 1.4, -0.5], 1.5);
            return ['mat', 'floor', 'couch', 'moon'].map((label, i) => ({
              label,
              value: round(p[i], 3),
              tone: i === 3 ? 'warn' : 'neutral',
            }));
          })(),
          format: 'percent',
          max: 1,
        },
      },
      {
        id: 'tt-4',
        caption:
          'Top-k = 2 — keep only the two largest probabilities, zero the rest, renormalise.',
        frame: {
          kind: 'bars',
          heading: 'After top-k=2 on T=1 distribution',
          bars: (() => {
            const base = softmax([3, 2, 1.4, -0.5], 1);
            const mask = topKMask(base, 2);
            const p = renormalise(base, mask);
            return ['mat', 'floor', 'couch', 'moon'].map((label, i) => ({
              label,
              value: round(p[i], 3),
              ghost: round(base[i], 3),
              tone: mask[i] ? 'good' : 'muted',
              note: mask[i] ? 'kept' : 'truncated',
            }));
          })(),
          format: 'percent',
          max: 1,
          cutAfter: { index: 1, label: 'k = 2 cutoff' },
          footer: 'Hatched = pre-truncation mass.',
        },
      },
      {
        id: 'tt-5',
        caption:
          'Top-p = 0.9 — keep the smallest prefix of sorted tokens whose cumulative probability reaches 0.9, then renormalise.',
        callout: 'Top-k is a count cutoff; top-p is a probability-mass cutoff. They are different truncations.',
        frame: {
          kind: 'bars',
          heading: 'After top-p=0.9 on T=1 distribution',
          bars: (() => {
            const base = softmax([3, 2, 1.4, -0.5], 1);
            const mask = topPMask(base, 0.9);
            const p = renormalise(base, mask);
            return ['mat', 'floor', 'couch', 'moon'].map((label, i) => ({
              label,
              value: round(p[i], 3),
              ghost: round(base[i], 3),
              tone: mask[i] ? 'good' : 'muted',
              note: mask[i] ? 'in nucleus' : 'outside nucleus',
            }));
          })(),
          format: 'percent',
          max: 1,
        },
      },
    ],
  },
};
