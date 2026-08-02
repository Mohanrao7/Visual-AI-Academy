import type { PipelineAnnotationMap } from '../../scenes/types';

/**
 * Pipeline metadata for the "how LLMs work" category. Every `out` is the value actually
 * rendered by that step's frame, so the packet travelling the rail carries the same numbers
 * the payload below it shows. Loop groups are reserved for mechanics the scene really
 * repeats: the decode turns of autoregressive generation, the surrounding generation loop,
 * and the per-head repetition inside multi-head attention.
 */
export const pipelines: PipelineAnnotationMap = {
  'tokenization': {
    subject: 'the text "Generative AI rocks!"',
    stages: {
      'tk-1': {
        name: 'Raw text',
        op: 'take the user string exactly as typed, spaces and all',
        out: '"Generative AI rocks!" — 20 characters',
        in: 'the keystrokes "Generative AI rocks!"',
      },
      'tk-2': {
        name: 'BPE merges',
        op: 'split on learned merges, keeping the leading space with its word',
        out: '4 tokens: Generative | AI | rocks | !',
      },
      'tk-3': {
        name: 'Rare word split',
        op: 'break a word with no vocabulary entry into pieces that do exist',
        out: '4 pieces: anti|dis|establish|ment',
        in: 'the rare word "antidisestablishment"',
        lane: 'rare word',
      },
      'tk-4': {
        name: 'ID lookup',
        op: 'map each token to its integer index into the embedding table',
        out: 'ids 4521, 9552, 17804, 0',
        in: 'the 4 tokens of "Generative AI rocks!"',
      },
      'tk-5': {
        name: 'Token meter',
        op: 'count tokens for billing and for the context budget',
        out: '"A" and " A" are two different ids',
      },
    },
  },

  'embeddings': {
    subject: 'the ids for "king", "queen" and "apple"',
    stages: {
      'emb-1': {
        name: 'Embedding lookup',
        op: 'select row id i of the table E and return its d numbers',
        out: 'king 0.9, 0.2, -0.1, 0.4, 0.1, 0.0',
        in: 'ids for "king", "queen" and "apple"',
      },
      'emb-2': {
        name: '2D projection',
        op: 'flatten the high-dimensional rows onto two axes for viewing',
        out: 'king (0.22, 0.70), apple (0.72, 0.35)',
      },
      'emb-3': {
        name: 'Neighbour query',
        op: 'place the query in the same space and link its nearest rows',
        out: 'monarch at (0.28, 0.72), beside king',
        in: 'the query word "monarch"',
        lane: 'query',
      },
      'emb-4': {
        name: 'Cosine similarity',
        op: 'divide each dot product by both vector lengths to compare angles',
        out: 'cos: king 1.00, queen 1.00, apple 0.01',
      },
    },
  },

  'vocabulary-context-window': {
    subject: 'one rare word and a 40-turn support chat',
    stages: {
      'vocab-1': {
        name: 'Vocabulary table',
        op: 'hold one integer id for every token the model knows',
        out: 'the=262, is=318, <|endoftext|>=50256',
        in: 'a fixed list of 50,000 tokens',
      },
      'vocab-2': {
        name: 'Subword fallback',
        op: 'rebuild a word with no id of its own from smaller known pieces',
        out: '6 ids: Z|yl|op|ro|fen| dosage',
        in: 'the unseen word "Zyloprofen dosage"',
        lane: 'rare word',
      },
      'vocab-3': {
        name: 'Context budget',
        op: 'add system, history and reply tokens up against the 8,000 cap',
        out: '7,000 of 8,000 tokens packed',
        in: 'turn 12 of the support chat',
        lane: 'context window',
      },
      'vocab-4': {
        name: 'Overflow check',
        op: 'compare the requested tokens with the window and flag the excess',
        out: '10,300 packed, 2,300 over the cap',
      },
      'vocab-5': {
        name: 'Compaction',
        op: 'drop or summarise the oldest turns until the request fits again',
        out: '3,700 packed; 7,500 raw tokens dropped',
      },
    },
  },

  'positional-encoding': {
    subject: 'the word "bank" at positions 1 and 4',
    stages: {
      'pe-1': {
        name: 'Embedding lookup',
        op: 'fetch the same table row for "bank" at both positions',
        out: 'two identical rows: 0.42, -0.31, 0.18…',
        in: 'the token "bank" seen twice in one sentence',
      },
      'pe-2': {
        name: 'Sinusoid generator',
        op: 'take sin and cos of pos / 10000^(2i/d) for each dimension pair',
        out: 'PE(1) starts 0.84; PE(4) starts -0.76',
      },
      'pe-3': {
        name: 'Position add',
        op: 'add the position vector to the token embedding, element by element',
        out: 'bank@1 starts 1.26; bank@4 starts -0.34',
      },
      'pe-4': {
        name: 'Attention scoring',
        op: 'score the order-tagged vectors so word order changes the result',
        out: '"dog bites man" ≠ "man bites dog"',
      },
      'pe-5': {
        name: 'Scheme selector',
        op: 'choose sinusoidal, learned, RoPE or ALiBi for the position signal',
        out: 'RoPE: rotate Q and K by position',
      },
    },
  },

  'self-attention': {
    subject: 'the sentence "The bank by the river"',
    stages: {
      'sa-1': {
        name: 'Token inputs',
        op: 'present the 5 token vectors, with "bank" still ambiguous',
        out: '5 tokens; "bank" is the query',
        in: 'the sentence "The bank by the river"',
      },
      'sa-2': {
        name: 'Q/K/V projection',
        op: 'multiply each token vector by W_Q, W_K and W_V',
        out: 'q, k and v for each of the 5 tokens',
      },
      'sa-3': {
        name: 'Score + softmax',
        op: 'divide each q·k by √d_k, then softmax so the row sums to 1',
        out: 'α for "bank": river 0.55, self 0.15',
      },
      'sa-4': {
        name: 'Value mixing',
        op: 'sum the value vectors weighted by their attention weights',
        out: 'output_bank pulled to "river" (0.66)',
      },
      'sa-5': {
        name: 'Context swap',
        op: 'rescore the same query against a money-sense sentence',
        out: 'account 0.35, froze 0.25, river gone',
        in: 'the sentence "The bank froze the account"',
        lane: 'other context',
      },
    },
  },

  'multi-head-attention': {
    subject: 'the sentence "The bank by the river"',
    stages: {
      'mha-1': {
        name: 'Head split',
        op: 'project each token into 6 sets of 64-dim Q, K and V vectors',
        out: '6 heads × 64 dims per token',
        in: 'one 384-dim vector per token',
      },
      'mha-2': {
        name: 'Attention head',
        op: 'scale the Q·K scores for this head by 1/√d_k, then softmax rows',
        out: 'head 1: "bank" 0.47 self, 0.35 prev',
        loop: { group: 'heads', iteration: 1, of: 3, label: 'head, 3 of 6 shown' },
      },
      'mha-3': {
        name: 'Attention head',
        op: 'scale the Q·K scores for this head by 1/√d_k, then softmax rows',
        out: 'head 2: "the" sends 0.68 to "river"',
        loop: { group: 'heads', iteration: 2, of: 3, label: 'head, 3 of 6 shown' },
      },
      'mha-4': {
        name: 'Attention head',
        op: 'scale the Q·K scores for this head by 1/√d_k, then softmax rows',
        out: 'head 3: "bank" sends 0.72 to "river"',
        loop: { group: 'heads', iteration: 3, of: 3, label: 'head, 3 of 6 shown' },
      },
      'mha-5': {
        name: 'Concat + W_O',
        op: 'glue the 6 head outputs back to 384 dims and mix them with W_O',
        out: 'one 384-dim vector per token',
      },
    },
  },

  'feed-forward-network': {
    subject: 'the contextual vectors for "bank" and "river"',
    stages: {
      'ffn-1': {
        name: 'Token vectors in',
        op: 'take one contextual vector per token, now processed separately',
        out: 'bank 0.5, -0.2, 0.9…; river -0.3, 0.7…',
        in: 'post-attention vectors from the sublayer below',
      },
      'ffn-2': {
        name: 'W₁ expansion',
        op: 'multiply by W₁ to widen 512 dims into a 2048-dim hidden vector',
        out: '2048 hidden units, about 2.1M weights',
      },
      'ffn-3': {
        name: 'GELU',
        op: 'apply GELU element-wise, squashing strong negatives toward zero',
        out: 'GELU: -2.4 becomes -0.02, 3.1 stays 3.09',
      },
      'ffn-4': {
        name: 'W₂ projection',
        op: 'multiply by W₂ to compress the hidden vector back to d_model',
        out: 'FFN(x) = 0.22, 0.41, -0.15, 0.33…',
      },
      'ffn-5': {
        name: 'Position-wise run',
        op: 'run the same W₁ and W₂ at every position with no mixing of tokens',
        out: '"bank" and "river" never interact',
      },
    },
  },

  'residual-connections': {
    subject: 'one token vector x through a single block',
    stages: {
      'res-1': {
        name: 'Skip-path copy',
        op: 'keep a copy of x before the sublayer touches it',
        out: 'x held: 0.5, -0.2, 0.9, 0.1, -0.4, 0.3',
        in: 'x = 0.5, -0.2, 0.9, 0.1, -0.4, 0.3',
      },
      'res-2': {
        name: 'Sublayer F',
        op: 'compute the sublayer update F(x) from that copy of x',
        out: 'F(x) = 0.12, 0.31, -0.22, 0.05…',
      },
      'res-3': {
        name: 'Residual add',
        op: 'add x back to F(x) element by element',
        out: 'y = 0.62, 0.11, 0.68, 0.15, -0.22…',
      },
      'res-4': {
        name: 'Residual stream',
        op: 'let each block add into one running sum instead of overwriting it',
        out: 'x₃ = x₀ + F₁ + F₂ + F₃',
      },
      'res-5': {
        name: 'Gradient path',
        op: 'send the gradient back through the identity term I + ∂F/∂x',
        out: '0.77 with skips vs 0.004 without',
      },
    },
  },

  'layer-normalization': {
    subject: 'one token activation vector, mid-network',
    stages: {
      'ln-1': {
        name: 'Activation input',
        op: 'take one token feature vector as it arrives mid-stack',
        out: 'range -3.1 to 7.9 across 6 features',
        in: 'x = 4.2, -1.6, 0.4, 7.9, -3.1, 1.2',
      },
      'ln-2': {
        name: 'Feature statistics',
        op: 'compute μ and σ² across the features of this one token',
        out: 'μ = 1.5, σ² = 13.39',
      },
      'ln-3': {
        name: 'Normalise',
        op: 'subtract μ and divide by √(σ² + ε) to get unit variance',
        out: '0.74, -0.85, -0.3, 1.75, -1.26, -0.08',
      },
      'ln-4': {
        name: 'Scale and shift',
        op: 'multiply by the learned γ and add the learned β',
        out: '0.99, -0.68, -0.4, 2.65, -1.13, -0.04',
      },
      'ln-5': {
        name: 'Per-token check',
        op: 'normalise token B from its own μ and σ², untouched by token A',
        out: 'token B: own μ = 0.12, σ² = 0.04',
        in: 'token B = 0.3, 0.2, -0.1, 0.4, -0.2, 0.1',
        lane: 'another row',
      },
    },
  },

  'encoder-decoder-types': {
    subject: 'the 5×5 score matrix for "The bank by the river"',
    stages: {
      'ed-1': {
        name: 'Unmasked softmax',
        op: 'softmax every row of the score matrix with no position blocked',
        out: '"The" already sees "river" at 0.16',
        in: 'raw Q·K scores, already scaled by 1/√d_k',
      },
      'ed-2': {
        name: 'Causal mask',
        op: 'set every score where j > i to −∞ before the softmax runs',
        out: '10 masked cells; row "The" is 1.00',
      },
      'ed-3': {
        name: 'Row renormalise',
        op: 'spread each row over the positions it may still use, summing to 1',
        out: 'row "by": 0.16, 0.26, 0.58, 0, 0',
      },
      'ed-4': {
        name: 'Cross-attention',
        op: 'let every target row read the whole source with no mask',
        out: '"fleuve" sends 0.66 to "river"',
        in: 'French target rows plus the encoder output',
        lane: 'encoder–decoder',
      },
      'ed-5': {
        name: 'Family selector',
        op: 'pick the masking rule that matches the information flow you need',
        out: 'decoder-only for chat and completion',
      },
    },
  },

  'next-token-prediction': {
    subject: 'the prefix "The cat sat on the"',
    stages: {
      'ntp-1': {
        name: 'Prefix buffer',
        op: 'condition only on the tokens already present',
        out: '5 tokens; predict position 6',
        in: 'the prefix "The cat sat on the"',
      },
      'ntp-2': {
        name: 'Output head',
        op: 'produce one logit for every entry in the vocabulary',
        out: 'logits mat 3.0, floor 2.0, moon -0.5',
      },
      'ntp-3': {
        name: 'Softmax',
        op: 'exponentiate and normalise the logits so they sum to 1',
        out: 'mat 0.625, floor 0.230, moon 0.019',
      },
      'ntp-4': {
        name: 'Token selector',
        op: 'take one token by argmax or by sampling, then stop',
        out: '"mat" chosen; no second token yet',
      },
    },
  },

  'temperature-top-k-top-p': {
    subject: 'the four logits 3.0, 2.0, 1.4, -0.5',
    stages: {
      'tt-1': {
        name: 'Softmax at T = 1',
        op: 'divide the logits by T = 1 and normalise them into probabilities',
        out: 'mat 0.625, floor 0.230, moon 0.019',
        in: 'logits 3.0, 2.0, 1.4, -0.5',
      },
      'tt-2': {
        name: 'Temperature 0.5',
        op: 'divide the same logits by 0.5 before the softmax, sharpening them',
        out: 'mat 0.850, floor 0.115, moon 0.001',
        in: 'the same four logits',
        lane: 'comparison run',
      },
      'tt-3': {
        name: 'Temperature 1.5',
        op: 'divide the same logits by 1.5 before the softmax, flattening them',
        out: 'mat 0.512, floor 0.263, moon 0.050',
        in: 'the same four logits',
        lane: 'comparison run',
      },
      'tt-4': {
        name: 'Top-k truncation',
        op: 'keep the 2 largest probabilities, zero the rest, then renormalise',
        out: 'mat 0.731, floor 0.269, rest zeroed',
        in: 'the T = 1 distribution',
      },
      'tt-5': {
        name: 'Top-p truncation',
        op: 'keep the smallest set reaching 0.9 cumulative, then renormalise',
        out: 'mat 0.637, floor 0.234, couch 0.129',
        in: 'the same T = 1 distribution',
        lane: 'parallel branch',
      },
    },
  },

  'autoregressive-decoding': {
    subject: 'the prompt "The capital of France is"',
    stages: {
      'ar-1': {
        name: 'Condition + predict',
        op: 'run one forward pass over the whole prefix and sample one token',
        out: 'p(x₆ | x₁…x₅) over the vocabulary',
        in: 'the prompt "The capital of France is"',
        loop: { group: 'decode', iteration: 1, of: 9, label: 'decode step' },
      },
      'ar-2': {
        name: 'Condition + predict',
        op: 'run one forward pass over the whole prefix and sample one token',
        out: 'prefix 6 tokens after " Paris"',
        loop: { group: 'decode', iteration: 2, of: 9, label: 'decode step' },
      },
      'ar-3': {
        name: 'KV cache',
        op: 'reuse the cached keys and values and compute only the new position',
        out: '6 cached positions, 1 new',
        loop: { group: 'decode', iteration: 3, of: 9, label: 'decode step' },
      },
      'ar-4': {
        name: 'Error cascade',
        op: 'condition every later distribution on the token already committed',
        out: '" Lyon" fixed, then " Rhône" follows',
        in: 'a sampled " Lyon" instead of " Paris"',
        lane: 'unlucky sample',
      },
      'ar-5': {
        name: 'Condition + predict',
        op: 'run one forward pass over the whole prefix and sample one token',
        out: 'EOS sampled; the loop ends',
        in: 'the prefix "…is Paris." after 8 steps',
        loop: { group: 'decode', iteration: 9, of: 9, label: 'decode step' },
      },
    },
  },

  'text-generation-loop': {
    subject: 'the prompt "Write a haiku."',
    stages: {
      'gen-1': {
        name: 'Tokenizer',
        op: 'turn the prompt text into integer ids for the model',
        out: '4 ids: 8144, 257, 43606, 13',
        in: 'the prompt "Write a haiku."',
      },
      'gen-2': {
        name: 'Forward + sample',
        op: 'run the model, apply the sampling policy, append the chosen token',
        out: 'sampled " Silent"; prefix 5 tokens',
        loop: { group: 'generate', iteration: 1, of: 17, label: 'decode step' },
      },
      'gen-3': {
        name: 'Forward + sample',
        op: 'run the model, apply the sampling policy, append the chosen token',
        out: 'sampled " pond"; prefix 13 tokens',
        loop: { group: 'generate', iteration: 9, of: 17, label: 'decode step' },
      },
      'gen-4': {
        name: 'Stop rules',
        op: 'test the stream for EOS, max_tokens and any stop string',
        out: 'EOS fired; the other two rules did not',
        loop: { group: 'generate', iteration: 17, of: 17, label: 'decode step' },
      },
      'gen-5': {
        name: 'Detokenizer',
        op: 'join the ids back into a string, buffering partial characters',
        out: '21 ids become the finished haiku',
      },
    },
  },

  'why-hallucinations-happen': {
    subject: 'a question about Acme Corp refund policy',
    stages: {
      'hal-1': {
        name: 'Prompt intake',
        op: 'receive a question whose answer is not in the weights',
        out: 'no Acme policy anywhere in the weights',
        in: 'a question about a private Acme contract',
      },
      'hal-2': {
        name: 'Softmax head',
        op: 'turn the logits into a full distribution that must sum to 1',
        out: 'p("30 days") = 0.40, p(IDK) = 0.02',
      },
      'hal-3': {
        name: 'Text renderer',
        op: 'phrase the sampled answer as confidently as a grounded one',
        out: '"a 30-day refund window" stated flatly',
      },
      'hal-4': {
        name: 'Temperature 1.4',
        op: 'divide the logits by 1.4 before the softmax, fattening the tail',
        out: 'p("30 days") 0.35; p(IDK) 0.04',
        in: 'the same logits at temperature 1.4',
        lane: 'amplifier',
      },
      'hal-5': {
        name: 'Grounded rerun',
        op: 'put the retrieved clause in the context and score the answers again',
        out: 'p("45 days") = 0.99',
        in: 'the question plus the retrieved 45-day clause',
        lane: 'with retrieval',
      },
    },
  },
};
