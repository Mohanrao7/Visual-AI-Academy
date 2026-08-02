import { round, softmax } from './math';
import type { SceneMap } from './types';

/* ---------- deterministic pseudo-random field for the diffusion scene ---------- */
function mulberry(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GRID = 12;
/** A simple target "image": a bright disc on a dark ground. */
const TARGET: number[][] = Array.from({ length: GRID }, (_, r) =>
  Array.from({ length: GRID }, (_, c) => {
    const d = Math.hypot(r - 5.5, c - 5.5);
    return Math.max(0, 1 - d / 4.2);
  }),
);

/** x_t = √(ᾱ_t)·x₀ + √(1−ᾱ_t)·ε — the actual forward-diffusion interpolation. */
function noisy(alphaBar: number, seed: number): number[][] {
  const rand = mulberry(seed);
  const a = Math.sqrt(alphaBar);
  const b = Math.sqrt(1 - alphaBar);
  return TARGET.map((row) => row.map((v) => Math.max(0, Math.min(1, a * v + b * rand()))));
}

const BLANK = Array.from({ length: GRID }, () => '');

/* ---------- one neuron, computed for real ---------- */
const NEURON_INPUTS = [0.8, -0.4, 0.6];
const NEURON_WEIGHTS = [1.5, 2.0, -0.5];
const NEURON_BIAS = -0.3;
const NEURON_Z = round(
  NEURON_INPUTS.reduce((acc, x, i) => acc + x * NEURON_WEIGHTS[i], 0) + NEURON_BIAS,
  2,
);
const NEURON_RELU = Math.max(0, NEURON_Z);

/* ---------- generative sampling ---------- */
const GEN_LOGITS = [2.4, 2.1, 1.8, 1.1, 0.3];
const GEN_LABELS = ['" Dear"', '" Hi"', '" Hello"', '" Greetings"', '" Yo"'];
const GEN_PROBS = softmax(GEN_LOGITS);

export const scenes: SceneMap = {
  'what-is-ai': {
    title: 'What AI actually is',
    description: 'A worked example of the only thing that separates AI software from ordinary software: the rules are fitted from data.',
    legend: [
      { tone: 'accent', label: 'hand-written rule' },
      { tone: 'active', label: 'learned from data' },
    ],
    mathNote:
      'Ordinary software is a function you write: f(x) = your code. A learned model is f(x; θ) where θ is fitted by minimising an error measure over examples. "AI" in current usage almost always means the second kind, and the interesting engineering is choosing the data, the objective and the evaluation.',
    steps: [
      {
        id: 'ai-1',
        caption:
          'The task — decide whether an email is spam. A human can do it; the question is whether you can write the rules down.',
        frame: {
          kind: 'panels',
          heading: 'Two ways to build the same feature',
          panels: [
            { title: 'Hand-written rules', body: 'if subject contains "FREE" or "$$$" → spam. Explicit, auditable, and instantly gamed.', tone: 'accent' },
            { title: 'Learned model', body: 'Show it 50,000 labelled emails and fit parameters that separate them. Implicit, adaptive, harder to audit.', tone: 'active' },
          ],
        },
      },
      {
        id: 'ai-2',
        caption:
          'Rules break — spammers write "F R E E" and the rule misses it. Every patch adds a rule, and the rule set grows faster than the coverage.',
        frame: {
          kind: 'chart',
          heading: 'Rule maintenance versus spam catch rate over one year',
          series: [
            { label: 'rules written (×10)', tone: 'accent', points: [1, 4, 9, 16, 24, 33, 43] },
            { label: 'spam caught (%×10)', tone: 'bad', points: [6, 6.8, 7.1, 6.9, 7.2, 7.0, 7.1], dashed: true },
          ],
          xLabel: 'months',
          yLabel: 'scaled',
          yMax: 48,
          footer: 'Illustrative. The pattern is real: adversarial inputs outrun hand-written rules.',
        },
      },
      {
        id: 'ai-3',
        caption:
          'Learning instead — collect examples with the answer attached. The labelled pairs are the specification; nobody writes the rule.',
        frame: {
          kind: 'ranking',
          heading: 'Training data: input → label',
          columns: [
            {
              title: 'Labelled spam',
              subtitle: '24,000 examples',
              items: [
                { label: '"Claim your FREE prize"', score: 'spam', tone: 'bad' },
                { label: '"F.R.E.E. gift inside"', score: 'spam', tone: 'bad' },
                { label: '"Invoice attached, urgent wire"', score: 'spam', tone: 'bad' },
              ],
            },
            {
              title: 'Labelled legitimate',
              subtitle: '26,000 examples',
              items: [
                { label: '"Standup moved to 10am"', score: 'ham', tone: 'good' },
                { label: '"Free parking this weekend"', score: 'ham', tone: 'good' },
                { label: '"Invoice attached — Q3"', score: 'ham', tone: 'good' },
              ],
            },
          ],
          footer: 'Note the near-duplicates across columns. That is exactly the boundary a rule cannot express but a fitted model can.',
        },
      },
      {
        id: 'ai-4',
        caption:
          'Prediction — a new, unseen email arrives and the model outputs a probability, not a certainty. Thresholding that probability is a product decision.',
        frame: {
          kind: 'bars',
          heading: '"Your account is on hold — verify now"',
          bars: [
            { label: 'spam', value: 0.87, tone: 'bad' },
            { label: 'legitimate', value: 0.13, tone: 'good' },
          ],
          format: 'percent',
          max: 1,
          footer: 'Threshold at 0.5 → quarantine. Threshold at 0.95 → deliver. The model gives a score; you choose the cost of each mistake.',
        },
      },
      {
        id: 'ai-5',
        caption:
          'Oversight — the model is scored on held-out email it never trained on, and monitored after launch because spam keeps changing.',
        callout: 'That loop — data, objective, evaluation, monitoring — is what "AI system" means in practice. There is no mind in the box.',
        frame: {
          kind: 'flow',
          heading: 'The lifecycle you are actually operating',
          stages: [
            { label: 'Define success', detail: 'Catch ≥ 98% of spam, ≤ 0.1% false positives' },
            { label: 'Collect data', detail: 'Labelled examples with provenance' },
            { label: 'Fit model', detail: 'Minimise error on the training split' },
            { label: 'Evaluate', detail: 'Score on a held-out split the model never saw' },
            { label: 'Monitor', detail: 'Watch for drift as attackers adapt' },
          ],
          activeIndex: 4,
        },
      },
    ],
  },

  'machine-learning': {
    title: 'Machine learning: three ways to learn',
    description: 'Supervised, unsupervised and reinforcement learning differ in what signal is available, not in how clever they are.',
    legend: [
      { tone: 'active', label: 'label / reward available' },
      { tone: 'muted', label: 'no label available' },
    ],
    mathNote:
      'Supervised learning minimises a loss over (x, y) pairs: min_θ Σ L(f(x;θ), y). Unsupervised learning has no y and optimises structure instead (e.g. within-cluster distance). Reinforcement learning maximises expected cumulative reward E[Σ γᵗ r_t] with no ground-truth action ever given.',
    steps: [
      {
        id: 'ml-1',
        caption:
          'Supervised learning — every example arrives with the right answer attached. The model is corrected directly against it.',
        frame: {
          kind: 'ranking',
          heading: 'House price prediction',
          columns: [
            {
              title: 'Input x',
              items: [
                { label: '92 m², 2 bed, near station', tone: 'neutral' },
                { label: '140 m², 4 bed, suburb', tone: 'neutral' },
                { label: '58 m², 1 bed, city centre', tone: 'neutral' },
              ],
            },
            {
              title: 'Label y (known)',
              items: [
                { label: '₹ 82 lakh', tone: 'active' },
                { label: '₹ 1.15 crore', tone: 'active' },
                { label: '₹ 61 lakh', tone: 'active' },
              ],
            },
          ],
          footer: 'The label is the teaching signal. Getting labels is usually the expensive part, not the training.',
        },
      },
      {
        id: 'ml-2',
        caption:
          'Unsupervised learning — no labels exist. The algorithm can only find structure: groups, directions, densities.',
        frame: {
          kind: 'scatter',
          heading: 'Shopper behaviour, unlabelled',
          points: [
            { id: 'a1', label: '', x: 24, y: 20, tone: 'active' },
            { id: 'a2', label: '', x: 30, y: 26, tone: 'active' },
            { id: 'a3', label: '', x: 20, y: 28, tone: 'active' },
            { id: 'a4', label: '', x: 28, y: 16, tone: 'active' },
            { id: 'b1', label: '', x: 68, y: 40, tone: 'accent' },
            { id: 'b2', label: '', x: 74, y: 34, tone: 'accent' },
            { id: 'b3', label: '', x: 72, y: 46, tone: 'accent' },
            { id: 'b4', label: '', x: 64, y: 36, tone: 'accent' },
          ],
          clusters: [
            { label: 'cluster 1', x: 25, y: 22, r: 11 },
            { label: 'cluster 2', x: 70, y: 39, r: 11 },
          ],
          axisNote: 'axes: visits per month × average basket size',
          footer: 'The algorithm found two groups. It cannot tell you they are "bargain hunters" and "bulk buyers" — you name them.',
        },
      },
      {
        id: 'ml-3',
        caption:
          'Reinforcement learning — no correct action is ever shown. The agent tries something and receives a scalar reward, sometimes much later.',
        frame: {
          kind: 'timeline',
          heading: 'An agent learning a maze',
          events: [
            { label: 'Action: move right', detail: 'reward 0 — no information yet', tone: 'muted', marker: 'step' },
            { label: 'Action: move right', detail: 'reward 0', tone: 'muted', marker: 'step' },
            { label: 'Action: move down', detail: 'reward −1, hit a wall', tone: 'bad', marker: 'error' },
            { label: 'Action: move right', detail: 'reward +10, reached the exit', tone: 'good', marker: 'done' },
          ],
          activeIndex: 3,
          state: [
            { key: 'episodes', value: '1,204' },
            { key: 'credit problem', value: 'which of the 4 moves earned the +10?', changed: true },
          ],
          footer: 'Delayed, sparse reward is what makes RL hard — and why RLHF for LLMs is more involved than supervised fine-tuning.',
        },
      },
      {
        id: 'ml-4',
        caption:
          'Generalisation is the real goal — training error always falls. The number that matters is error on data the model has never seen.',
        frame: {
          kind: 'chart',
          heading: 'Error during training',
          series: [
            { label: 'training error', tone: 'accent', points: [0.52, 0.34, 0.22, 0.15, 0.1, 0.07, 0.05] },
            { label: 'held-out error', tone: 'good', points: [0.55, 0.4, 0.31, 0.27, 0.25, 0.26, 0.29], dashed: true },
          ],
          xLabel: 'training epochs',
          yLabel: 'error',
          yMax: 0.6,
          markers: [{ atIndex: 4, label: 'best' }],
          footer: 'After epoch 5 the model keeps improving on data it has memorised and starts getting worse on data it has not.',
        },
      },
      {
        id: 'ml-5',
        caption:
          'Inherited bias — the model reproduces the statistics of its data, including the ones you did not intend to teach it.',
        callout: 'ML replaces "write the rules" with "curate the data and the objective". The responsibility moves; it does not disappear.',
        frame: {
          kind: 'bars',
          heading: 'Hiring screen trained on 10 years of past decisions',
          bars: [
            { label: 'Approval rate, group A', value: 0.71, tone: 'active' },
            { label: 'Approval rate, group B', value: 0.44, tone: 'bad', note: 'mirrors the historical gap in the training labels' },
          ],
          format: 'percent',
          max: 1,
          footer: 'The model was not told to discriminate. It was told to predict past decisions, and it did so faithfully.',
        },
      },
    ],
  },

  'deep-learning': {
    title: 'Deep learning: composed representations',
    description: 'Why stacking layers helps — each layer builds features out of the layer below it.',
    legend: [
      { tone: 'active', label: 'layer currently being formed' },
      { tone: 'neutral', label: 'features already available' },
    ],
    mathNote:
      'A deep net computes f(x) = f_L(…f₂(f₁(x))…) where each fᵢ is linear-then-nonlinear. Without the nonlinearity the whole stack collapses: W_L·…·W₁·x is just one matrix. Depth buys compositional reuse — features found once are available to every later layer.',
    steps: [
      {
        id: 'dl-1',
        caption:
          'Raw input — pixels, with no structure attached. A single linear layer can only draw one straight boundary through this.',
        frame: {
          kind: 'network',
          heading: 'A face photo enters as 150,528 raw numbers',
          layers: [
            { label: 'pixels', units: 6, note: '224×224×3' },
            { label: 'layer 1', units: 5 },
            { label: 'layer 2', units: 4 },
            { label: 'layer 3', units: 3 },
            { label: 'output', units: 2 },
          ],
          direction: 'idle',
          activeLayer: 0,
        },
      },
      {
        id: 'dl-2',
        caption:
          'Shallow layers learn local detectors — edges and colour gradients. These are found automatically, not hand-designed.',
        frame: {
          kind: 'network',
          heading: 'Layer 1 features',
          layers: [
            { label: 'pixels', units: 6 },
            { label: 'edges', units: 5, note: 'oriented lines' },
            { label: 'layer 2', units: 4 },
            { label: 'layer 3', units: 3 },
            { label: 'output', units: 2 },
          ],
          direction: 'forward',
          activeLayer: 1,
          edgeLabel: 'each layer reads only the layer before it',
        },
      },
      {
        id: 'dl-3',
        caption:
          'Middle layers compose them — corners and textures are combinations of edges, and parts are combinations of those.',
        frame: {
          kind: 'network',
          heading: 'Layer 2 features',
          layers: [
            { label: 'pixels', units: 6 },
            { label: 'edges', units: 5 },
            { label: 'parts', units: 4, note: 'eyes, noses' },
            { label: 'layer 3', units: 3 },
            { label: 'output', units: 2 },
          ],
          direction: 'forward',
          activeLayer: 2,
          edgeLabel: 'parts = learned combinations of edges',
        },
      },
      {
        id: 'dl-4',
        caption:
          'Deep layers reach task concepts — whole faces. The same hierarchy appears in language: characters → words → phrases → intent.',
        frame: {
          kind: 'network',
          heading: 'Layer 3 features and the prediction head',
          layers: [
            { label: 'pixels', units: 6 },
            { label: 'edges', units: 5 },
            { label: 'parts', units: 4 },
            { label: 'faces', units: 3, note: 'object concepts' },
            { label: 'label', units: 2, note: 'softmax' },
          ],
          direction: 'forward',
          activeLayer: 3,
          edgeLabel: 'representation learning: nobody specified "eye detector"',
        },
      },
      {
        id: 'dl-5',
        caption:
          'The price — depth needs data and compute, and the learned features are hard to interpret. Depth bought capability, not clarity.',
        callout: 'Transformers are simply a deep architecture whose layers are attention plus MLP instead of convolutions.',
        frame: {
          kind: 'panels',
          heading: 'What depth costs',
          panels: [
            { title: 'Data', body: 'Millions of examples. A 3-layer net on 500 images will memorise, not generalise.', tone: 'warn' },
            { title: 'Compute', body: 'GPUs made it practical. The maths dates to the 1980s; the hardware did not.', tone: 'warn' },
            { title: 'Interpretability', body: 'You get a working function, not an explanation. Debugging becomes an empirical science.', tone: 'bad' },
          ],
        },
      },
    ],
  },

  'neural-networks': {
    title: 'One neuron, then a network',
    description: 'The whole computation, with real arithmetic: weighted sum, add a bias, apply a nonlinearity.',
    legend: [
      { tone: 'active', label: 'positive contribution' },
      { tone: 'accent', label: 'negative contribution' },
    ],
    mathNote:
      `A single unit computes a = φ(Σᵢ wᵢxᵢ + b). Here: (${NEURON_INPUTS[0]}×${NEURON_WEIGHTS[0]}) + (${NEURON_INPUTS[1]}×${NEURON_WEIGHTS[1]}) + (${NEURON_INPUTS[2]}×${NEURON_WEIGHTS[2]}) + (${NEURON_BIAS}) = ${NEURON_Z}, then ReLU(${NEURON_Z}) = ${NEURON_RELU}. A layer stacks many such units; "parameters" means every w and every b in the whole model.`,
    steps: [
      {
        id: 'nn-1',
        caption: 'Inputs — three numbers describing one example. Text, pixels and audio all reduce to a vector like this.',
        frame: {
          kind: 'bars',
          heading: 'Input vector x',
          bars: [
            { label: 'x₁', value: NEURON_INPUTS[0], tone: 'active' },
            { label: 'x₂', value: NEURON_INPUTS[1], tone: 'accent' },
            { label: 'x₃', value: NEURON_INPUTS[2], tone: 'active' },
          ],
          format: 'decimal2',
          max: 1,
        },
      },
      {
        id: 'nn-2',
        caption:
          'Weights — one learnable number per input, deciding how much that input matters and in which direction. These are what training changes.',
        frame: {
          kind: 'bars',
          heading: 'Weights w (learned)',
          bars: [
            { label: 'w₁', value: NEURON_WEIGHTS[0], tone: 'active' },
            { label: 'w₂', value: NEURON_WEIGHTS[1], tone: 'active', note: 'largest magnitude — this input dominates' },
            { label: 'w₃', value: NEURON_WEIGHTS[2], tone: 'accent', note: 'negative — this input pushes the output down' },
          ],
          format: 'decimal2',
          max: 2.2,
        },
      },
      {
        id: 'nn-3',
        caption:
          `Weighted sum plus bias — each input is multiplied by its weight and everything is added, including a learned offset b = ${NEURON_BIAS}.`,
        frame: {
          kind: 'bars',
          heading: 'Contributions to the pre-activation z',
          bars: [
            { label: 'w₁x₁', value: round(NEURON_INPUTS[0] * NEURON_WEIGHTS[0], 2), tone: 'active' },
            { label: 'w₂x₂', value: round(NEURON_INPUTS[1] * NEURON_WEIGHTS[1], 2), tone: 'accent', note: 'negative input × positive weight' },
            { label: 'w₃x₃', value: round(NEURON_INPUTS[2] * NEURON_WEIGHTS[2], 2), tone: 'accent' },
            { label: 'bias b', value: NEURON_BIAS, tone: 'warn' },
            { label: 'z (total)', value: NEURON_Z, tone: 'good' },
          ],
          format: 'decimal2',
          max: 1.4,
          footer: `z = ${NEURON_Z}. The bias lets the unit fire even when every input is zero.`,
        },
      },
      {
        id: 'nn-4',
        caption:
          `Activation — a nonlinearity is applied. ReLU keeps positives and zeroes negatives, so this unit outputs ${NEURON_RELU}: it stays silent.`,
        frame: {
          kind: 'bars',
          heading: 'φ(z) for three common activations',
          bars: [
            { label: 'z (input)', value: NEURON_Z, tone: 'neutral' },
            { label: 'ReLU(z)', value: NEURON_RELU, tone: 'good', note: 'max(0, z) — this neuron does not fire' },
            { label: 'GELU(z)', value: round(0.5 * NEURON_Z * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (NEURON_Z + 0.044715 * NEURON_Z ** 3))), 2), tone: 'active', note: 'smooth, near-zero but not exactly zero' },
            { label: 'tanh(z)', value: round(Math.tanh(NEURON_Z), 2), tone: 'accent' },
          ],
          format: 'decimal2',
          max: 1,
          footer: 'Without a nonlinearity here, a hundred stacked layers would be mathematically identical to one.',
        },
      },
      {
        id: 'nn-5',
        caption:
          'Scale it — a layer is thousands of these units side by side, and a model is dozens of layers. "7 billion parameters" counts every w and b.',
        callout: 'Knowledge is spread across all those numbers. There is no row you can look up to find a fact.',
        frame: {
          kind: 'network',
          heading: 'Same unit, repeated',
          layers: [
            { label: 'input', units: 3, note: 'x' },
            { label: 'hidden 1', units: 5, note: '5 units' },
            { label: 'hidden 2', units: 5 },
            { label: 'output', units: 2, note: 'scores' },
          ],
          direction: 'forward',
          activeLayer: 1,
          edgeLabel: 'every arrow is one weight; 3·5 + 5·5 + 5·2 = 50 weights plus 12 biases in this toy net',
        },
      },
    ],
  },

  'what-is-generative-ai': {
    title: 'Generative AI: sampling from a learned distribution',
    description: 'The defining behaviour — the same input can produce different valid outputs, because the model samples rather than looks up.',
    legend: [
      { tone: 'active', label: 'probability mass' },
      { tone: 'good', label: 'this run\'s sample' },
    ],
    mathNote:
      'A generative model represents p(x) or p(x | prompt) and draws from it. Because sampling is stochastic, running the same prompt twice gives different text unless temperature is 0. Plausibility under p is not the same as truth — that gap is the source of every hallucination.',
    steps: [
      {
        id: 'gen-1',
        caption:
          'A classifier picks from a fixed, tiny set of answers — here two. Its whole output space was defined by you in advance.',
        frame: {
          kind: 'bars',
          heading: 'Discriminative output: p(label | email)',
          bars: [
            { label: 'spam', value: 0.91, tone: 'bad' },
            { label: 'not spam', value: 0.09, tone: 'good' },
          ],
          format: 'percent',
          max: 1,
          footer: 'Two options. Nothing new is ever created.',
        },
      },
      {
        id: 'gen-2',
        caption:
          'A generator outputs a distribution over its entire vocabulary — tens of thousands of options — and then draws one.',
        frame: {
          kind: 'bars',
          heading: 'Generative output: p(next token | "Write a refund email.")  — top 5 of 50,257',
          bars: GEN_LABELS.map((label, i) => ({
            label,
            value: GEN_PROBS[i],
            tone: i === 0 ? 'active' : 'neutral',
          })),
          format: 'percent',
          max: 0.4,
          footer: 'The remaining 50,252 tokens share the leftover mass. Every one of them is possible.',
        },
      },
      {
        id: 'gen-3',
        caption:
          'Sampling — a token is drawn according to those probabilities. This run drew " Hi", the second-most-likely option, entirely legitimately.',
        frame: {
          kind: 'bars',
          heading: 'One draw',
          bars: GEN_LABELS.map((label, i) => ({
            label,
            value: GEN_PROBS[i],
            tone: i === 1 ? 'good' : 'muted',
            note: i === 1 ? 'drawn this time' : undefined,
          })),
          format: 'percent',
          max: 0.4,
          footer: 'Repeat the prompt and you may draw " Dear" instead. That variability is the feature, not a bug.',
        },
      },
      {
        id: 'gen-4',
        caption:
          'Three runs, three outputs — all fluent, all consistent with the prompt, and one of them contains an invented policy detail.',
        frame: {
          kind: 'panels',
          heading: 'Same prompt, three samples',
          panels: [
            { title: 'Sample 1', body: '"Dear Ms Rao, we have processed your refund and it should reach you within 5 working days."', tone: 'good' },
            { title: 'Sample 2', body: '"Hi Priya — your refund is on its way. Let us know if anything else comes up!"', tone: 'good' },
            { title: 'Sample 3', body: '"Dear Ms Rao, per our 14-day guarantee your refund has been issued."', tone: 'bad' },
          ],
          footer: 'Sample 3 invented "14-day guarantee". Nothing in the sampling process checks facts — only what is likely.',
        },
      },
      {
        id: 'gen-5',
        caption:
          'The same mechanism across media — text samples tokens, diffusion samples images, audio models sample waveforms. All draw from a fitted distribution.',
        callout: 'Generative models are excellent at drafting and transformation. Verification has to come from somewhere else.',
        frame: {
          kind: 'panels',
          heading: 'One idea, several output types',
          panels: [
            { title: 'Text (LLM)', body: 'Samples one token at a time from p(next token | prefix).', tone: 'active' },
            { title: 'Images (diffusion)', body: 'Samples a noise vector and denoises it toward a prompt-conditioned image.', tone: 'accent' },
            { title: 'Audio / video', body: 'Same principle over waveform or frame representations.', tone: 'neutral' },
          ],
        },
      },
    ],
  },

  'discriminative-vs-generative': {
    title: 'Discriminative vs generative',
    description: 'One learns where the boundary is. The other learns where the data lives — which is why only one of them can make new examples.',
    legend: [
      { tone: 'active', label: 'class A' },
      { tone: 'accent', label: 'class B' },
      { tone: 'good', label: 'newly generated point' },
    ],
    mathNote:
      'Discriminative models fit p(y | x) directly — logistic regression, BERT classifiers, rerankers. Generative models fit p(x) or p(x | y), which is strictly more information: from p(x | y) and p(y) you can recover p(y | x) by Bayes, but not the other way round. That extra information is what lets you sample.',
    steps: [
      {
        id: 'dvg-1',
        caption: 'The data — labelled examples of two classes in some feature space. Both approaches start here.',
        frame: {
          kind: 'scatter',
          heading: 'Cats and dogs as feature vectors',
          points: [
            { id: 'c1', label: '', x: 24, y: 18, tone: 'active' },
            { id: 'c2', label: '', x: 30, y: 24, tone: 'active' },
            { id: 'c3', label: '', x: 20, y: 26, tone: 'active' },
            { id: 'c4', label: '', x: 34, y: 16, tone: 'active' },
            { id: 'c5', label: '', x: 26, y: 32, tone: 'active' },
            { id: 'd1', label: '', x: 66, y: 38, tone: 'accent' },
            { id: 'd2', label: '', x: 74, y: 30, tone: 'accent' },
            { id: 'd3', label: '', x: 70, y: 46, tone: 'accent' },
            { id: 'd4', label: '', x: 78, y: 40, tone: 'accent' },
            { id: 'd5', label: '', x: 62, y: 32, tone: 'accent' },
          ],
          axisNote: 'two learned feature dimensions',
        },
      },
      {
        id: 'dvg-2',
        caption:
          'Discriminative — the model only needs the surface that separates the classes. Everything away from that surface is wasted effort.',
        frame: {
          kind: 'scatter',
          heading: 'p(y | x): a decision boundary',
          points: [
            { id: 'c1', label: '', x: 24, y: 18, tone: 'active' },
            { id: 'c2', label: '', x: 30, y: 24, tone: 'active' },
            { id: 'c3', label: '', x: 20, y: 26, tone: 'active' },
            { id: 'c4', label: '', x: 34, y: 16, tone: 'active' },
            { id: 'c5', label: '', x: 26, y: 32, tone: 'active' },
            { id: 'd1', label: '', x: 66, y: 38, tone: 'accent' },
            { id: 'd2', label: '', x: 74, y: 30, tone: 'accent' },
            { id: 'd3', label: '', x: 70, y: 46, tone: 'accent' },
            { id: 'd4', label: '', x: 78, y: 40, tone: 'accent' },
            { id: 'd5', label: '', x: 62, y: 32, tone: 'accent' },
            { id: 'p1', label: '', x: 40, y: 8, tone: 'bad' },
            { id: 'p2', label: 'boundary', x: 56, y: 52, tone: 'bad' },
          ],
          links: [{ from: 'p1', to: 'p2', tone: 'bad' }],
          footer: 'Ask it to draw a new cat and it has nothing to offer — it never modelled what a cat looks like, only what a dog does not.',
        },
      },
      {
        id: 'dvg-3',
        caption:
          'Generative — the model instead learns where each class\'s data is dense. That is a description of the class, not just a wall between classes.',
        frame: {
          kind: 'scatter',
          heading: 'p(x | y): density per class',
          points: [
            { id: 'c1', label: '', x: 24, y: 18, tone: 'active' },
            { id: 'c2', label: '', x: 30, y: 24, tone: 'active' },
            { id: 'c3', label: '', x: 20, y: 26, tone: 'active' },
            { id: 'c4', label: '', x: 34, y: 16, tone: 'active' },
            { id: 'c5', label: '', x: 26, y: 32, tone: 'active' },
            { id: 'd1', label: '', x: 66, y: 38, tone: 'accent' },
            { id: 'd2', label: '', x: 74, y: 30, tone: 'accent' },
            { id: 'd3', label: '', x: 70, y: 46, tone: 'accent' },
            { id: 'd4', label: '', x: 78, y: 40, tone: 'accent' },
            { id: 'd5', label: '', x: 62, y: 32, tone: 'accent' },
          ],
          clusters: [
            { label: 'p(x | cat)', x: 27, y: 23, r: 13 },
            { label: 'p(x | dog)', x: 70, y: 37, r: 13 },
          ],
        },
      },
      {
        id: 'dvg-4',
        caption:
          'Sampling — because the density is known, new points can be drawn from it. This is the capability a boundary can never provide.',
        frame: {
          kind: 'scatter',
          heading: 'Draw a fresh point from p(x | cat)',
          points: [
            { id: 'c1', label: '', x: 24, y: 18, tone: 'muted' },
            { id: 'c2', label: '', x: 30, y: 24, tone: 'muted' },
            { id: 'c3', label: '', x: 20, y: 26, tone: 'muted' },
            { id: 'c4', label: '', x: 34, y: 16, tone: 'muted' },
            { id: 'c5', label: '', x: 26, y: 32, tone: 'muted' },
            { id: 'new', label: 'new sample', x: 29, y: 20, tone: 'good' },
            { id: 'd1', label: '', x: 66, y: 38, tone: 'muted' },
            { id: 'd3', label: '', x: 70, y: 46, tone: 'muted' },
          ],
          clusters: [{ label: 'p(x | cat)', x: 27, y: 23, r: 13 }],
          footer: 'The new point was never in the training set, yet it is a plausible cat. That is generation.',
        },
      },
      {
        id: 'dvg-5',
        caption:
          'In practice you use both — a classifier to route or filter, a generator to draft. Real products are hybrids.',
        callout: 'An LLM is generative: it models p(next token | prefix). A reranker or a safety filter sitting next to it is discriminative.',
        frame: {
          kind: 'flow',
          heading: 'A moderation-and-rewrite pipeline',
          stages: [
            { label: 'User comment', detail: 'raw text' },
            { label: 'Toxicity classifier', detail: 'discriminative: p(toxic | text) = 0.83', tone: 'accent' },
            { label: 'Rewrite model', detail: 'generative: sample a civil paraphrase', tone: 'active' },
            { label: 'Classifier again', detail: 'discriminative: p(toxic | rewrite) = 0.04', tone: 'accent' },
            { label: 'Publish', detail: 'below threshold', tone: 'good' },
          ],
          activeIndex: 4,
        },
      },
    ],
  },

  'transformers-overview': {
    title: 'Inside a transformer block',
    description: 'The repeating unit that everything else in this category expands on.',
    legend: [
      { tone: 'accent', label: 'moves information between tokens' },
      { tone: 'active', label: 'transforms each token alone' },
    ],
    mathNote:
      'One pre-norm block: h = x + Attention(LayerNorm(x)); y = h + FFN(LayerNorm(h)). Stack N of these (N = 32 for a typical 7B model), then a final norm and an unembedding matrix that produces one logit per vocabulary entry.',
    steps: [
      {
        id: 'tr-1',
        caption: 'Input — text becomes token IDs, each ID becomes a vector, and a position signal is added.',
        frame: {
          kind: 'flow',
          heading: 'Before the first block',
          stages: [
            { label: 'Tokenize', detail: 'text → IDs' },
            { label: 'Embed', detail: 'ID → d_model-dim vector' },
            { label: 'Add position', detail: 'so order survives' },
            { label: 'Block 1', detail: 'attention + FFN', tone: 'muted' },
            { label: '… × N', detail: '', tone: 'muted' },
            { label: 'Output head', detail: '', tone: 'muted' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'tr-2',
        caption:
          'Attention sublayer — tokens read from each other. This is the only place in the whole architecture where positions interact.',
        frame: {
          kind: 'flow',
          heading: 'Inside block k',
          stages: [
            { label: 'LayerNorm', detail: 'stabilise scale per token' },
            { label: 'Multi-head attention', detail: 'each token gathers from the others', tone: 'accent' },
            { label: 'Residual add', detail: 'x + Attention(…)' },
            { label: 'LayerNorm', detail: 'again', tone: 'muted' },
            { label: 'Feed-forward', detail: 'per-token MLP', tone: 'muted' },
            { label: 'Residual add', detail: '', tone: 'muted' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'tr-3',
        caption:
          'Feed-forward sublayer — each token is refined on its own by a wide MLP. Communication, then computation.',
        frame: {
          kind: 'flow',
          heading: 'Inside block k, second half',
          stages: [
            { label: 'LayerNorm', detail: 'done', tone: 'good' },
            { label: 'Multi-head attention', detail: 'done', tone: 'good' },
            { label: 'Residual add', detail: 'done', tone: 'good' },
            { label: 'LayerNorm', detail: 'stabilise again' },
            { label: 'Feed-forward', detail: 'expand ×4, nonlinearity, project back', tone: 'active' },
            { label: 'Residual add', detail: 'h + FFN(…)' },
          ],
          activeIndex: 4,
        },
      },
      {
        id: 'tr-4',
        caption:
          'Stack — the identical block repeats N times. Depth is where the architecture gets its capacity.',
        frame: {
          kind: 'network',
          heading: 'A 7B-class model: 32 identical blocks',
          layers: [
            { label: 'embed', units: 4 },
            { label: 'block 1', units: 4 },
            { label: 'block 2', units: 4 },
            { label: 'blocks 3–31', units: 4, note: 'same shape' },
            { label: 'block 32', units: 4 },
            { label: 'head', units: 3, note: 'logits' },
          ],
          direction: 'forward',
          activeLayer: 3,
          edgeLabel: 'the residual stream runs straight through all of them',
        },
      },
      {
        id: 'tr-5',
        caption:
          'Output head — the final vector at each position is multiplied by the unembedding matrix to give one score per vocabulary token.',
        callout: 'Why transformers won: every position is computed in parallel during training, unlike a recurrent net that must walk the sequence.',
        frame: {
          kind: 'bars',
          heading: 'Logits at the last position, top 4 of 50,257',
          bars: [
            { label: '" mat"', value: 8.4, tone: 'active' },
            { label: '" floor"', value: 6.9, tone: 'neutral' },
            { label: '" couch"', value: 6.1, tone: 'neutral' },
            { label: '" moon"', value: 1.2, tone: 'muted' },
          ],
          format: 'decimal1',
          max: 10,
          footer: 'Raw scores. Softmax turns them into probabilities — that is the next concept.',
        },
      },
    ],
  },

  'foundation-models': {
    title: 'One base, many adaptations',
    description: 'What "foundation model" buys you, priced against the alternatives.',
    legend: [
      { tone: 'frozen', label: 'shared frozen base' },
      { tone: 'active', label: 'per-application work' },
    ],
    mathNote:
      'Nothing new mathematically — the point is amortisation. Pretraining costs are paid once (often 10²³–10²⁵ FLOPs) and reused across every downstream application, each of which touches only a small fraction of parameters or no parameters at all.',
    steps: [
      {
        id: 'fm-1',
        caption:
          'Pretraining — one very expensive run over broad data produces a base model with general capabilities and no particular job.',
        frame: {
          kind: 'blocks',
          heading: 'Where the compute goes',
          groups: [
            {
              label: 'Total project compute',
              blocks: [
                { label: 'pretraining the base', weight: 96, tone: 'frozen' },
                { label: 'adaptation', weight: 4, tone: 'active' },
              ],
              note: 'Roughly the industry split. Almost all cost is in the base nobody re-runs.',
            },
          ],
        },
      },
      {
        id: 'fm-2',
        caption:
          'Adaptation route 1: prompting — the base is untouched. You change behaviour by changing what enters the context window.',
        frame: {
          kind: 'blocks',
          heading: 'Tutoring assistant',
          groups: [
            {
              label: 'Parameters changed',
              blocks: [
                { label: 'frozen base — 7,000,000,000 parameters', weight: 100, tone: 'frozen' },
                { label: '0 trained', weight: 0.5, tone: 'active' },
              ],
              note: 'Cheapest and fastest to iterate. Limited by what fits in the context window.',
            },
          ],
        },
      },
      {
        id: 'fm-3',
        caption:
          'Adaptation route 2: retrieval — still zero training. You attach a searchable document store and inject evidence at query time.',
        frame: {
          kind: 'flow',
          heading: 'Support bot over 50 product manuals',
          stages: [
            { label: 'Same frozen base', detail: 'unchanged weights', tone: 'frozen' },
            { label: 'Document index', detail: 'rebuilt nightly, no retraining' },
            { label: 'Retrieve at query time', detail: 'top-k passages' },
            { label: 'Answer with citations', detail: 'grounded in the manuals', tone: 'good' },
          ],
          activeIndex: 3,
          footer: 'Update a manual at 09:00 and the answer changes at 09:05. Retraining could not do that.',
        },
      },
      {
        id: 'fm-4',
        caption:
          'Adaptation route 3: fine-tuning — a small fraction of parameters is trained on your data to change style or format reliably.',
        frame: {
          kind: 'blocks',
          heading: 'On-brand copy generator (LoRA fine-tune)',
          groups: [
            {
              label: 'Parameters changed',
              blocks: [
                { label: 'frozen base — 7B', weight: 99.7, tone: 'frozen' },
                { label: 'adapters ≈ 20M', weight: 0.3, tone: 'active' },
              ],
              note: 'About 0.3% trained. The adapter file is a few tens of megabytes, not fourteen gigabytes.',
            },
          ],
        },
      },
      {
        id: 'fm-5',
        caption:
          'The trade-off — one shared base means shared strengths and shared inherited flaws, and bigger is not automatically better for your task.',
        callout: 'Right-size deliberately: a 1B model with good retrieval often beats a 70B model guessing from memory.',
        frame: {
          kind: 'panels',
          heading: 'What you inherit with the base',
          panels: [
            { title: 'Upside', body: 'Capabilities you never trained for, one security review, one ops story across every application.', tone: 'good' },
            { title: 'Downside', body: 'Its biases, its knowledge cutoff and its failure modes appear in all your products at once.', tone: 'warn' },
            { title: 'Sizing', body: 'A wake-word detector on-device does not want a foundation model. Match capability to the job.', tone: 'accent' },
          ],
        },
      },
    ],
  },

  llms: {
    title: 'What makes a language model "large"',
    description: 'The training stages that turn a next-token predictor into an assistant, and what each stage can and cannot fix.',
    legend: [
      { tone: 'accent', label: 'pretraining' },
      { tone: 'active', label: 'post-training' },
      { tone: 'good', label: 'application layer' },
    ],
    mathNote:
      'All stages share one objective family: raise the probability of desirable continuations. Pretraining uses observed web text as the target, SFT uses curated demonstrations, and preference methods use pairwise comparisons. None of them add a fact-checking mechanism — that has to be built around the model.',
    steps: [
      {
        id: 'llm-1',
        caption:
          'Stage 1, pretraining — predict the next token across trillions of tokens of text. Every capability starts as a side effect of this one objective.',
        frame: {
          kind: 'panels',
          heading: 'The base model after pretraining',
          panels: [
            { title: 'Prompt', body: '"Write a polite refund email."', tone: 'neutral' },
            { title: 'Base model output', body: '"Write a polite refund email. Write a firm refund email. Write a refund email in Spanish…"', tone: 'warn' },
          ],
          footer: 'It continues the text. It has not yet learned that a request is meant to be answered rather than extended.',
        },
      },
      {
        id: 'llm-2',
        caption:
          'Stage 2, instruction tuning — training on curated request/response pairs teaches the model that a prompt is a task, not a prefix.',
        frame: {
          kind: 'panels',
          heading: 'After supervised fine-tuning',
          panels: [
            { title: 'Prompt', body: '"Write a polite refund email."', tone: 'neutral' },
            { title: 'Tuned model output', body: '"Dear Ms Rao, thank you for getting in touch. I have processed your refund…"', tone: 'good' },
          ],
          footer: 'Same weights, nudged. The capability was already there; the behaviour was not.',
        },
      },
      {
        id: 'llm-3',
        caption:
          'Emergent capability — abilities the objective never mentioned appear as scale grows, then plateau. Scale is a lever, not a guarantee.',
        frame: {
          kind: 'chart',
          heading: 'Multi-step arithmetic accuracy versus training compute (illustrative shape)',
          series: [
            { label: 'accuracy', tone: 'active', points: [0.02, 0.03, 0.05, 0.12, 0.41, 0.68, 0.74] },
          ],
          xLabel: 'training compute (log scale)',
          yLabel: 'accuracy',
          yMax: 1,
          markers: [{ atIndex: 4, label: 'sharp rise' }],
          footer: 'Curves like this are real but noisy and metric-dependent. Treat "emergence" as an observation, not a law.',
        },
      },
      {
        id: 'llm-4',
        caption:
          'What scale does not fix — the model still has a knowledge cutoff and no access to your private or live data.',
        frame: {
          kind: 'ranking',
          heading: 'Six requests to the same model',
          columns: [
            {
              title: 'Works from weights alone',
              items: [
                { label: 'Summarise this pasted text', score: '✓', tone: 'good' },
                { label: 'Explain recursion', score: '✓', tone: 'good' },
                { label: 'Refactor this function', score: '✓', tone: 'good' },
              ],
            },
            {
              title: 'Needs tools or retrieval',
              items: [
                { label: 'Today\'s share price', score: 'tool', tone: 'warn' },
                { label: 'Our Q3 revenue', score: 'RAG', tone: 'warn' },
                { label: 'Send this email', score: 'tool', tone: 'bad' },
              ],
            },
          ],
          footer: 'A larger model answers the left column better. It does not move anything from the right column to the left.',
        },
      },
      {
        id: 'llm-5',
        caption:
          'Stage 3, the application layer — retrieval, tools, guardrails and evaluation sit around the model. That is where products are actually built.',
        callout: 'The model is a component. Treating it as the whole system is the most common reason demos fail in production.',
        frame: {
          kind: 'flow',
          heading: 'What ships',
          stages: [
            { label: 'Pretrained base', detail: 'general capability', tone: 'accent' },
            { label: 'Instruction + preference tuning', detail: 'follows requests, refuses sensibly', tone: 'active' },
            { label: 'Retrieval', detail: 'your private, current facts', tone: 'good' },
            { label: 'Tools', detail: 'read and write real systems', tone: 'good' },
            { label: 'Guardrails + evals', detail: 'what makes it shippable', tone: 'good' },
          ],
          activeIndex: 4,
        },
      },
    ],
  },

  'multimodal-intro': {
    title: 'Multimodal models',
    description: 'How a picture ends up in the same sequence as words, so one attention stack can relate them.',
    legend: [
      { tone: 'accent', label: 'image-derived tokens' },
      { tone: 'active', label: 'text tokens' },
    ],
    mathNote:
      'A vision encoder maps an image to a grid of patch embeddings (e.g. 14×14 pixel patches → 256 vectors for a 224² image). A projection matrix maps those into the language model\'s d_model, after which they are ordinary sequence elements — the attention maths does not know or care which modality a token came from.',
    steps: [
      {
        id: 'mm-1',
        caption:
          'Input — an image plus a question. They are completely different data types, so they cannot yet share a sequence.',
        frame: {
          kind: 'panels',
          heading: 'Two incompatible inputs',
          panels: [
            { title: 'Image', body: '224 × 224 × 3 = 150,528 pixel values arranged in a grid.', tone: 'accent' },
            { title: 'Text', body: '"Which resistor is burnt?" → 6 token IDs in a line.', tone: 'active' },
          ],
        },
      },
      {
        id: 'mm-2',
        caption:
          'Patching — the image is cut into a grid of fixed-size patches. Each patch will become one sequence element.',
        frame: {
          kind: 'matrix',
          heading: 'The image cut into a grid of fixed-size patches',
          rowLabels: BLANK.slice(0, 8),
          colLabels: BLANK.slice(0, 8),
          values: Array.from({ length: 8 }, (_, r) => Array.from({ length: 8 }, (_, c) => 0.25 + ((r * 7 + c * 3) % 5) * 0.14)),
          showValues: false,
          footer: 'Abridged to 64 patches to stay readable. ViT-B/16 cuts a 224² image into 16×16 patches, giving 196.',
        },
      },
      {
        id: 'mm-3',
        caption:
          'Vision encoder and projection — each patch becomes a vector, then a learned matrix maps it into the language model\'s dimension.',
        frame: {
          kind: 'flow',
          heading: 'Getting pixels into the sequence',
          stages: [
            { label: 'Patches', detail: '64 image patches', tone: 'accent' },
            { label: 'Vision encoder', detail: 'ViT → 64 vectors of 1024 dims', tone: 'accent' },
            { label: 'Projection', detail: 'linear map 1024 → d_model' },
            { label: 'Visual tokens', detail: '64 sequence elements the LLM can read', tone: 'good' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'mm-4',
        caption:
          'One sequence — visual tokens and text tokens sit side by side. From here it is ordinary self-attention across both.',
        frame: {
          kind: 'tokens',
          heading: 'What the language model actually receives',
          tokens: [
            { text: '<img>', tone: 'accent' },
            { text: 'patch 1', tone: 'accent' },
            { text: 'patch 2', tone: 'accent' },
            { text: '…62 more', tone: 'accent' },
            { text: '</img>', tone: 'accent' },
            { text: 'Which', tone: 'active' },
            { text: ' resistor', tone: 'active' },
            { text: ' is', tone: 'active' },
            { text: ' burnt', tone: 'active' },
            { text: '?', tone: 'active' },
          ],
          footer: 'Attention can now let the token "resistor" read directly from the patches that contain one.',
        },
      },
      {
        id: 'mm-5',
        caption:
          'Grounding is still not guaranteed — the model can describe details the image does not contain, exactly as it invents text facts.',
        callout: 'Visual tokens consume the same context budget as text. A high-resolution image can cost thousands of tokens.',
        frame: {
          kind: 'panels',
          heading: 'Two answers to the same photo',
          panels: [
            { title: 'Grounded', body: '"The resistor at the top-left of the board is discoloured and its markings are charred."', tone: 'good' },
            { title: 'Hallucinated detail', body: '"The 220Ω resistor labelled R7 is burnt." — the photo is too blurry to read any label.', tone: 'bad' },
          ],
          footer: 'Evaluate visual grounding separately from language quality; fluency hides the difference.',
        },
      },
    ],
  },

  'diffusion-intro': {
    title: 'Diffusion: learning to undo noise',
    description: 'The image is not drawn. It is uncovered, one denoising step at a time, from a field of pure noise.',
    legend: [
      { tone: 'active', label: 'signal strength (brighter = more)' },
    ],
    mathNote:
      'Forward process: x_t = √(ᾱ_t)·x₀ + √(1 − ᾱ_t)·ε with ε ~ N(0, I). The network is trained to predict ε from x_t and t. Sampling runs that in reverse, subtracting predicted noise step by step. The grids above are generated with that exact interpolation at ᾱ = 0.02, 0.25, 0.62 and 0.97. Latent diffusion runs the whole loop in a compressed autoencoder space, which is why it is far cheaper.',
    steps: [
      {
        id: 'df-1',
        caption:
          'Training, forward process — take a real image and add a known amount of Gaussian noise. The network\'s job is to predict the noise that was added.',
        frame: {
          kind: 'matrix',
          heading: 'A training image, progressively noised (left to right in ᾱ)',
          rowLabels: BLANK,
          colLabels: BLANK,
          values: noisy(0.85, 11),
          showValues: false,
          footer: 'Because you added the noise, you know the exact target. Diffusion training is supervised learning in disguise.',
        },
      },
      {
        id: 'df-2',
        caption:
          'Sampling starts at pure noise — no image, no structure. ᾱ ≈ 0.02, so almost all of the signal is noise.',
        frame: {
          kind: 'matrix',
          heading: 'Step 0 of 30',
          rowLabels: BLANK,
          colLabels: BLANK,
          values: noisy(0.02, 7),
          showValues: false,
          footer: 'The random seed lives here. A different seed produces a different final image from the same prompt.',
        },
      },
      {
        id: 'df-3',
        caption:
          'Conditioning — the prompt is embedded and fed into every denoising step, steering which structure emerges. Coarse shapes appear first.',
        frame: {
          kind: 'matrix',
          heading: 'Step 10 of 30 · prompt: "a glowing orb"',
          rowLabels: BLANK,
          colLabels: BLANK,
          values: noisy(0.25, 7),
          showValues: false,
          footer: 'Guidance scale controls how hard the prompt pulls. Too high and images look over-saturated and brittle.',
        },
      },
      {
        id: 'df-4',
        caption:
          'Refinement — later steps remove less noise each time, so the remaining changes are fine detail rather than layout.',
        frame: {
          kind: 'matrix',
          heading: 'Step 22 of 30',
          rowLabels: BLANK,
          colLabels: BLANK,
          values: noisy(0.62, 7),
          showValues: false,
        },
      },
      {
        id: 'df-5',
        caption:
          'Final image — the same iterative loop, run to ᾱ ≈ 1. Fewer steps means faster and rougher; more steps costs latency.',
        callout: 'Contrast with an LLM: text is generated left to right one token at a time, images are refined all at once over many passes.',
        frame: {
          kind: 'matrix',
          heading: 'Step 30 of 30',
          rowLabels: BLANK,
          colLabels: BLANK,
          values: noisy(0.97, 7),
          showValues: false,
          footer: 'Simplified: a real sampler works on a 64×64 latent that a decoder expands to 512×512 pixels.',
        },
      },
    ],
  },
};
