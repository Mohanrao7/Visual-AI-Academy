import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  datasets: {
    subject: '100 raw web-crawl documents',
    stages: {
      'ds-1': {
        name: 'Source mixture',
        op: 'weight each raw source so the blend is a deliberate choice',
        in: 'web, code, books, wiki, curated',
        out: '60% web · 15% code · 12% books',
      },
      'ds-2': {
        name: 'Quality filter',
        op: 'drop duplicates, boilerplate, wrong-language and unsafe documents',
        out: '24 of 100 documents kept',
      },
      'ds-3': {
        name: 'Split',
        op: 'cut the surviving corpus into three disjoint slices',
        out: 'train 90% · val 5% · test 5%',
      },
      'ds-4': {
        name: 'Contamination check',
        op: 'score a leaked test set against a clean held-out one',
        out: '0.98 contaminated vs 0.73 clean',
      },
      'ds-5': {
        name: 'Governance review',
        op: 'settle licence, consent, PII and representation before the run',
        out: '3 questions with no code answer',
      },
    },
  },

  preprocessing: {
    subject: 'one crawled refund-policy page',
    stages: {
      'pp-1': {
        name: 'Raw scrape',
        op: 'take the page exactly as downloaded, chrome and entities included',
        in: 'one crawled URL',
        out: 'HTML: nav + h1 + p + footer',
      },
      'pp-2': {
        name: 'Markup cleaner',
        op: 'strip tags, decode entities and delete nav and boilerplate lines',
        out: '2 content lines kept, 3 dropped',
      },
      'pp-3': {
        name: 'PII redaction',
        op: 'swap emails and phone numbers for typed placeholders',
        out: '"Contact [EMAIL] or call [PHONE]"',
      },
      'pp-4': {
        name: 'Dedupe',
        op: 'collapse near-identical copies of the paragraph across the corpus',
        out: '1,470 copies → 1',
      },
      'pp-5': {
        name: 'Sequence packer',
        op: 'tokenise and concatenate documents until the sequence is exactly full',
        out: '2,048 / 2,048 tokens, no padding',
      },
    },
  },

  'tokenization-training': {
    subject: 'the corpus sample "lower lowest slower"',
    stages: {
      'tt-1': {
        name: 'Byte vocabulary',
        op: 'spell the corpus out in the 256 byte values, no merges learned yet',
        in: '19 characters of raw text',
        out: '19 tokens, vocab = 256 bytes',
      },
      'tt-2': {
        name: 'Pair counter',
        op: 'tally every adjacent pair in the corpus and pick the most frequent',
        out: '"l"+"o" wins with 3 occurrences',
        loop: { group: 'bpe', iteration: 1, of: 30000, label: 'merge round' },
      },
      'tt-3': {
        name: 'Merge',
        op: 'add the winning pair to the vocabulary and re-encode the corpus',
        out: 'vocab 257 · "lo" is one token',
        loop: { group: 'bpe', iteration: 1, of: 30000, label: 'merge round' },
      },
      'tt-4': {
        name: 'Finished tokenizer',
        op: 'encode unseen text with the frozen 30,000-merge vocabulary',
        out: '7 tokens · "lower"=6042, "ism"=1042',
      },
      'tt-5': {
        name: 'Domain fit check',
        op: 'encode the same sentence in other scripts and compare token counts',
        out: 'English 11 vs Thai 41 tokens',
        lane: 'eval',
      },
    },
  },

  'loss-function': {
    subject: 'one position: "The cat sat on the" → " mat"',
    stages: {
      'ls-1': {
        name: 'Softmax head',
        op: 'turn the final logits into a probability over the vocabulary',
        in: 'logits [1.1, 2.6, 2.2, 0.4]',
        out: 'p(" mat") = 0.499',
      },
      'ls-2': {
        name: 'Cross-entropy',
        op: 'take the negative log of the probability on the true next token',
        out: 'loss 0.70 nats',
      },
      'ls-3': {
        name: 'Update + rescore',
        op: 'apply one update, then push the same prompt through again',
        out: 'p 0.499 → 0.912, loss 0.09 nats',
      },
      'ls-4': {
        name: 'Batch average',
        op: 'average the per-token loss over every position in every batch',
        out: 'training loss 10.4 → 2.31 nats',
      },
      'ls-5': {
        name: 'Proxy check',
        op: 'ask what a low loss does and does not guarantee',
        out: 'perplexity ≈ 10, truth unproven',
      },
    },
  },

  'gradient-descent': {
    subject: 'one parameter w = −2 on L(w) = (w−3)² + 1',
    stages: {
      'gd-1': {
        name: 'Gradient ∇L',
        op: 'evaluate the slope 2(w−3) of the loss at the current parameter',
        in: 'w = −2',
        out: '∇L = −10, L = 26 at w = −2',
        loop: { group: 'descent', iteration: 1, of: 6, label: 'update step' },
      },
      'gd-2': {
        name: 'Update rule',
        op: 'move against the gradient scaled by the learning rate η = 0.3',
        out: 'w: −2 → 1.0, L: 26 → 5',
        loop: { group: 'descent', iteration: 1, of: 6, label: 'update step' },
      },
      'gd-3': {
        name: 'Update rule',
        op: 'run gradient-then-step five more times at the same η',
        out: 'w → 2.98, L → 1.00 after 6 steps',
        loop: { group: 'descent', iteration: 6, of: 6, label: 'update step' },
      },
      'gd-4': {
        name: 'LR sweep',
        op: 'rerun the same descent at η = 0.02, 0.30 and 1.05',
        out: 'η = 1.05 diverges: w → −5.86',
        lane: 'sweep',
      },
      'gd-5': {
        name: 'Mini-batch ∇L',
        op: 'estimate the gradient from one mini-batch instead of the full set',
        in: 'w = −2, exact ∇L unaffordable',
        out: 'noisy ∇L, L 26 → 1.4 in 6 steps',
      },
    },
  },

  backpropagation: {
    subject: 'one training example with loss L = 2.31',
    stages: {
      'bp-1': {
        name: 'Forward pass',
        op: 'run the input through the layers and cache every activation',
        in: 'input x, 3 features',
        out: 'L = 2.31, activations cached',
      },
      'bp-2': {
        name: 'Output gradient',
        op: 'differentiate the loss with respect to the output activation a₃',
        out: '∂L/∂a₃ = −0.42',
      },
      'bp-3': {
        name: 'Chain rule',
        op: 'multiply the incoming gradient by the local derivative at each layer',
        out: '∂L/∂a₂ = −0.256 → ∂L/∂a₁ = −0.123',
      },
      'bp-4': {
        name: 'Weight gradients',
        op: 'turn the layer gradients into one ∂L/∂w per parameter',
        out: '7B gradients, no weight moved yet',
      },
      'bp-5': {
        name: 'Optimizer hand-off',
        op: 'pass the gradient buffers on and stop; backprop does not update',
        out: '∂L/∂w → optimizer, then zero grads',
      },
    },
  },

  optimizers: {
    subject: 'the same gradients on L(w) = (w−3)² + 1',
    stages: {
      'op-1': {
        name: 'SGD step',
        op: 'step straight against the gradient with no memory of past steps',
        in: 'g = 2(w−3) at w = −2, η = 0.15',
        out: 'SGD: L 26 → 1.35 over 6 steps',
      },
      'op-2': {
        name: 'Momentum',
        op: 'add a velocity term so consistent directions accelerate',
        out: 'momentum: L 2.21 by step 2, then overshoots',
      },
      'op-3': {
        name: 'Adam',
        op: 'divide by a running gradient variance to give each weight its rate',
        out: 'Adam steps ≈ 0.6 whatever |g| is',
      },
      'op-4': {
        name: 'Optimizer state',
        op: 'allocate the extra buffers the rule keeps for every parameter',
        out: 'SGD 28 GB vs AdamW 84 GB',
      },
      'op-5': {
        name: 'Weight decay',
        op: 'shrink every weight by λ each step, decoupled from the gradient',
        out: 'mean |w| 4.8 → 1.9 at λ = 0.01',
      },
    },
  },

  'epochs-batches-lr': {
    subject: '1,000,000 examples at batch size 256',
    stages: {
      'eb-1': {
        name: 'Batcher',
        op: 'group examples into batches of 256, one optimizer step each',
        in: '1,000,000 training examples',
        out: '3,906 steps per epoch',
      },
      'eb-2': {
        name: 'Batch size dial',
        op: 'trade gradient noise against throughput by resizing the batch',
        out: 'batch 256: loss 4.2 → 2.48',
      },
      'eb-3': {
        name: 'LR warmup',
        op: 'ramp the rate linearly from zero over the first 3k steps',
        out: 'η = 3.0 ×10⁻⁴ at step 3,000',
      },
      'eb-4': {
        name: 'Cosine decay',
        op: 'anneal the rate toward zero across the rest of the run',
        out: 'η 3.0 → 0.1 ×10⁻⁴ by step 11k',
      },
      'eb-5': {
        name: 'Progress unit',
        op: 'quote tokens seen for pretraining, epochs for fine-tuning',
        out: '2T tokens, or 3 epochs × 12k rows',
      },
    },
  },

  'pretraining-vs-finetuning': {
    subject: 'a 7B model on its way to clinical summarisation',
    stages: {
      'pf-1': {
        name: 'Pretraining',
        op: 'train from random init on 2T broad tokens for general capability',
        in: 'random init, 7B parameters',
        out: 'base model, ~2T tokens seen',
      },
      'pf-2': {
        name: 'Fine-tune',
        op: 'continue the same loss on 18k clinical pairs at η = 2×10⁻⁵',
        out: 'domain score 0.41 → 0.81',
      },
      'pf-3': {
        name: 'Forgetting check',
        op: 'track a general benchmark alongside the domain metric each epoch',
        out: 'general 0.72 → 0.44 by epoch 5',
        lane: 'eval',
      },
      'pf-4': {
        name: 'Cheaper options',
        op: 'test whether prompting or retrieval already solves the problem',
        in: 'the requirement, before training',
        out: 'facts → retrieval; style → tuning',
      },
      'pf-5': {
        name: 'LoRA adapter',
        op: 'train a small adapter and leave the base weights frozen',
        out: '0.3% trained, base untouched',
      },
    },
  },

  sft: {
    subject: 'one support request about resetting a password',
    stages: {
      'sft-1': {
        name: 'Base model',
        op: 'continue the prompt as text, which is all pretraining rewarded',
        in: '"How do I reset my password?"',
        out: 'FAQ continuation, not an answer',
      },
      'sft-2': {
        name: 'Demonstration',
        op: 'pair the prompt with a written gold reply in the chat format',
        out: 'prompt + gold assistant reply',
      },
      'sft-3': {
        name: 'Loss mask',
        op: 'zero the loss on prompt tokens, keep it on response tokens',
        out: '5 of 12 positions scored',
      },
      'sft-4': {
        name: 'Data scaling',
        op: 'compare win rate as the demonstration set grows in size and care',
        out: 'expert 0.75 vs scraped 0.47',
      },
      'sft-5': {
        name: 'Post-SFT audit',
        op: 'name what demonstrations still cannot teach',
        out: 'no way to say "B beat A"',
      },
    },
  },

  'lora-qlora': {
    subject: 'one 4,096 × 4,096 attention projection',
    stages: {
      'lo-1': {
        name: 'Full fine-tune',
        op: 'update every weight, so hold grads and optimizer state for all',
        in: '7B parameters, mixed precision',
        out: '≈84 GB peak: 14 + 14 + 56',
      },
      'lo-2': {
        name: 'Freeze base W',
        op: 'stop updating W while it still runs in the forward pass',
        out: '16,777,216 params, 0 trainable',
      },
      'lo-3': {
        name: 'LoRA adapter',
        op: 'inject A (8×4096) and B (4096×8) beside W as the only trainables',
        out: '65,536 trainable = 0.391%',
      },
      'lo-4': {
        name: 'Adapted forward',
        op: 'add the adapter path to the frozen path: h = Wx + B·A·x',
        out: 'h = Wx + BAx, BA = 0 at init',
      },
      'lo-5': {
        name: 'QLoRA 4-bit base',
        op: 'store the frozen base in 4-bit and dequantise block by block',
        out: '≈5 GB peak, fits one 8 GB card',
      },
    },
  },

  rlhf: {
    subject: 'one prompt about the refund window',
    stages: {
      'rl-1': {
        name: 'Preference pair',
        op: 'have annotators compare two answers and pick the better one',
        in: 'two candidate answers, one prompt',
        out: 'A chosen over B',
        lane: 'human-labelled',
      },
      'rl-2': {
        name: 'Reward model',
        op: 'fit a scalar scorer so chosen outranks rejected on every pair',
        out: 'r(A)=2.1, r(B)=−0.8, margin 2.9',
        lane: 'offline',
      },
      'rl-3': {
        name: 'PPO loop',
        op: 'sample, score, penalise KL drift, then update the policy',
        in: 'SFT policy + trained reward model',
        out: 'r = 1.42 sampled, θ updated',
        loop: { group: 'ppo', iteration: 4120, label: 'PPO iteration' },
      },
      'rl-4': {
        name: 'KL penalty',
        op: 'hold the policy near the frozen reference to stop reward hacking',
        out: 'unleashed: r 4.1 but human 0.6',
      },
      'rl-5': {
        name: 'Runtime footprint',
        op: 'count what must stay resident for the loop to keep running',
        out: '3 models: policy, RM, reference',
      },
    },
  },

  dpo: {
    subject: 'one preference triple from the same labelling run',
    stages: {
      'dp-1': {
        name: 'Preference triple',
        op: 'take the prompt, chosen and rejected labels RLHF would use',
        in: 'human-labelled comparison',
        out: 'prompt + y_chosen + y_rejected',
      },
      'dp-2': {
        name: 'Log-prob read',
        op: 'score both responses under the policy and the frozen reference',
        out: 'log π_θ: −18.4 chosen, −15.1 rej',
      },
      'dp-3': {
        name: 'DPO loss',
        op: 'raise the chosen margin over the reference and lower the rejected',
        out: 'margin −0.1 → 2.9, no reward model',
      },
      'dp-4': {
        name: 'Pipeline diff',
        op: 'count what stays resident against the RLHF pipeline',
        out: '2 models, offline, no PPO',
      },
      'dp-5': {
        name: 'Annotator bias',
        op: 'trace what the preference labels themselves teach the model',
        out: '72% prefer longer → 64% wordier',
      },
    },
  },

  'overfit-underfit': {
    subject: 'the same dataset trained for 7 epochs',
    stages: {
      'of-1': {
        name: 'Underfit run',
        op: 'train a linear model with too little capacity for the curve',
        in: 'curved data, 7 epochs',
        out: 'train 0.48, val 0.50, gap 0.02',
      },
      'of-2': {
        name: 'Right-sized run',
        op: 'raise capacity until both curves fall and stay close together',
        out: 'train 0.14, val 0.19, gap 0.05',
      },
      'of-3': {
        name: 'Overfit run',
        op: 'push a large model on small repetitive data past the turn',
        out: 'train 0.004, val 0.51, gap 0.51',
      },
      'of-4': {
        name: 'Remedies',
        op: 'add early stopping, regularisation and more diverse data',
        out: 'val 0.51 → 0.18',
      },
      'of-5': {
        name: 'Memorisation audit',
        op: 'probe the trained model for verbatim training text',
        out: 'verbatim recall = privacy leak',
      },
    },
  },
};
