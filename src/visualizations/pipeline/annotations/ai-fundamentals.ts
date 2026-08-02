import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  'what-is-ai': {
    subject: 'the email "Your account is on hold — verify now"',
    stages: {
      'ai-1': {
        name: 'Hand-written rules',
        op: 'match the subject line against an explicit keyword rule list',
        in: 'one inbox email, spam or not',
        out: '"FREE" matched → labelled spam',
      },
      'ai-2': {
        name: 'Adversarial input',
        op: 're-send the same email as "F R E E" and patch the rule list',
        out: '430 rules · catch rate stuck at 71%',
      },
      'ai-3': {
        name: 'Labelled corpus',
        op: 'abandon the rules and collect examples with the answer attached',
        out: '24,000 spam + 26,000 ham pairs',
      },
      'ai-4': {
        name: 'Fitted model',
        op: 'fit parameters on those pairs, then score the unseen email',
        out: '87% spam / 13% legitimate',
      },
      'ai-5': {
        name: 'Eval + monitoring',
        op: 'score on a held-out split, then watch live traffic for drift',
        out: '98% recall, 0.1% FP target · watched',
      },
    },
  },

  'machine-learning': {
    subject: 'a batch of examples and whatever signal arrives with them',
    stages: {
      'ml-1': {
        name: 'Supervised fit',
        op: 'correct each prediction directly against the known label y',
        in: '3 houses, each with its sold price',
        out: '92 m² → ₹ 82 lakh · label is the target',
      },
      'ml-2': {
        name: 'Clustering',
        op: 'remove the labels and group the 8 points by distance alone',
        out: '2 clusters · 4 + 4 shoppers, unnamed',
      },
      'ml-3': {
        name: 'Reward signal',
        op: 'replace labels with one scalar that only arrives at the end',
        out: '4 moves · 0, 0, −1, +10 at the exit',
      },
      'ml-4': {
        name: 'Held-out split',
        op: 'score every epoch on data the model has never trained on',
        out: 'train 0.05 · held-out 0.29 · best ep 5',
      },
      'ml-5': {
        name: 'Bias audit',
        op: 'slice the fitted model by group and compare approval rates',
        out: '71% group A vs 44% group B',
      },
    },
  },

  'deep-learning': {
    subject: 'one 224×224 face photograph',
    stages: {
      'dl-1': {
        name: 'Pixel input',
        op: 'flatten the photo into raw numbers with no structure attached',
        in: 'a 224×224×3 face photograph',
        out: '150,528 raw pixel values',
      },
      'dl-2': {
        name: 'Layer 1 · edges',
        op: 'apply local filters that fire on oriented lines and gradients',
        out: '5 edge detectors · oriented lines',
      },
      'dl-3': {
        name: 'Layer 2 · parts',
        op: 'combine those edges into corners, textures and object parts',
        out: '4 part detectors · eyes, noses',
      },
      'dl-4': {
        name: 'Layer 3 + head',
        op: 'compose parts into whole-object concepts, then softmax a label',
        out: '3 face concepts → 2-way label',
      },
      'dl-5': {
        name: 'Depth cost audit',
        op: 'price the stack in data, compute and lost interpretability',
        out: 'millions of examples · no explanation',
      },
    },
  },

  'neural-networks': {
    subject: 'the input vector x = 0.8, −0.4, 0.6',
    stages: {
      'nn-1': {
        name: 'Input vector x',
        op: 'arrange one example as the three numbers the unit can read',
        in: 'one example, three measured features',
        out: 'x = 0.8, −0.4, 0.6',
      },
      'nn-2': {
        name: 'Weights w',
        op: 'pair each input with its learned weight, sign included',
        out: 'w = 1.5, 2.0, −0.5 · b = −0.3',
      },
      'nn-3': {
        name: 'Weighted sum',
        op: 'multiply each input by its weight, add them up, add the bias',
        out: 'z = 1.20 − 0.80 − 0.30 − 0.30 = −0.20',
      },
      'nn-4': {
        name: 'Activation φ',
        op: 'apply ReLU: keep the value if positive, otherwise emit zero',
        out: 'ReLU(−0.2) = 0 · the unit stays silent',
      },
      'nn-5': {
        name: 'Layer stack',
        op: 'repeat that same unit across layers and count every w and b',
        out: '50 weights + 12 biases in this net',
      },
    },
  },

  'what-is-generative-ai': {
    subject: 'the prompt "Write a refund email."',
    stages: {
      'gen-1': {
        name: 'Classifier head',
        op: 'score the input against a fixed output space of two labels',
        in: 'one email, two allowed answers',
        out: '91% spam / 9% not spam',
      },
      'gen-2': {
        name: 'Vocabulary softmax',
        op: 'score all 50,257 tokens and normalise them into one distribution',
        out: 'p(" Dear") = 0.37, p(" Hi") = 0.28',
      },
      'gen-3': {
        name: 'Sampler',
        op: 'draw one token at random in proportion to those probabilities',
        out: 'drew " Hi" · p = 0.28, rank 2',
      },
      'gen-4': {
        name: 'Full decode',
        op: 'run the sampler to the end of the email three separate times',
        out: '3 fluent drafts · 1 invented policy',
      },
      'gen-5': {
        name: 'Shared sampler',
        op: 'swap tokens for pixels or waveforms and draw the same way',
        out: 'text · image · audio, all sampled',
      },
    },
  },

  'discriminative-vs-generative': {
    subject: '10 labelled cat and dog feature vectors',
    stages: {
      'dvg-1': {
        name: 'Feature space',
        op: 'embed every labelled example as a point in two learned dims',
        in: '5 cat photos and 5 dog photos',
        out: '10 points · 5 cats, 5 dogs',
      },
      'dvg-2': {
        name: 'p(y | x) boundary',
        op: 'fit only the surface that separates the two classes',
        out: '1 boundary line · cannot draw a cat',
      },
      'dvg-3': {
        name: 'p(x | y) density',
        op: 'fit where each class is dense instead of the wall between them',
        out: '2 densities · p(x|cat), p(x|dog)',
      },
      'dvg-4': {
        name: 'Density sampler',
        op: 'draw a fresh point from p(x | cat) that was never in the data',
        out: 'new cat at (29, 20) · unseen',
      },
      'dvg-5': {
        name: 'Hybrid pipeline',
        op: 'classify, rewrite with the generator, then re-score the result',
        in: 'a user comment flagged for review',
        out: 'p(toxic) 0.83 → 0.04 · published',
      },
    },
  },

  'transformers-overview': {
    subject: 'the sentence "The cat sat on the"',
    stages: {
      'tr-1': {
        name: 'Embed + position',
        op: 'map text to ids, look up a vector, add a position signal',
        in: 'the prompt "The cat sat on the"',
        out: '5 token vectors + position',
      },
      'tr-2': {
        name: 'Attention sublayer',
        op: 'layer-norm, let each token gather from the rest, add residual',
        out: 'x + Attn(x) · positions now mixed',
      },
      'tr-3': {
        name: 'Feed-forward',
        op: 'layer-norm, expand ×4 through an MLP, project back, add residual',
        out: 'h + FFN(h) · 5 refined vectors',
      },
      'tr-4': {
        name: 'Block stack ×32',
        op: 'repeat that identical block 32 times along the residual stream',
        out: 'final vector at the last position',
      },
      'tr-5': {
        name: 'Unembedding head',
        op: 'multiply the last vector by the unembedding matrix',
        out: 'logit(" mat") = 8.4, top of 50,257',
      },
    },
  },

  'foundation-models': {
    subject: 'one 7B base model and three applications built on it',
    stages: {
      'fm-1': {
        name: 'Pretraining run',
        op: 'spend almost the whole compute budget once on broad data',
        in: 'web-scale text and one very large budget',
        out: '7B base · 96% of project compute',
      },
      'fm-2': {
        name: 'Prompting',
        op: 'change behaviour only by changing what enters the context window',
        out: '0 parameters trained · base frozen',
      },
      'fm-3': {
        name: 'Retrieval attach',
        op: 'index 50 manuals nightly and inject top-k passages per query',
        out: 'still 0 trained · answers cite manuals',
      },
      'fm-4': {
        name: 'LoRA fine-tune',
        op: 'train small adapter matrices while the base stays frozen',
        out: '20M adapters · 0.3% of parameters',
      },
      'fm-5': {
        name: 'Inheritance audit',
        op: 'weigh the shared capabilities against the shared flaws',
        out: '1 base · shared cutoff and biases',
      },
    },
  },

  llms: {
    subject: 'the request "Write a polite refund email."',
    stages: {
      'llm-1': {
        name: 'Pretraining',
        op: 'predict the next token across trillions of tokens, nothing else',
        in: 'trillions of tokens of raw web text',
        out: 'base continues the prompt, no answer',
      },
      'llm-2': {
        name: 'Instruction SFT',
        op: 'tune on curated request/response pairs so a prompt means a task',
        out: '"Dear Ms Rao, thank you…" · answers',
      },
      'llm-3': {
        name: 'Scale curve',
        op: 'raise training compute and re-measure multi-step arithmetic',
        out: 'accuracy 0.02 → 0.74, sharp rise mid',
      },
      'llm-4': {
        name: 'Capability triage',
        op: 'split requests into weights-only versus needs tools or RAG',
        out: '3 answerable / 3 need tools or RAG',
      },
      'llm-5': {
        name: 'Application layer',
        op: 'wrap the tuned model in retrieval, tools, guardrails and evals',
        out: 'shippable assistant · 5-part stack',
      },
    },
  },

  'multimodal-intro': {
    subject: 'a board photo plus "Which resistor is burnt?"',
    stages: {
      'mm-1': {
        name: 'Two raw inputs',
        op: 'hold a pixel grid and a token line that cannot share a sequence',
        in: 'a 224×224 photo and a typed question',
        out: '150,528 pixels + 6 text token IDs',
      },
      'mm-2': {
        name: 'Patchifier',
        op: 'cut the image into a grid of fixed 16×16 pixel patches',
        out: '64 patches · 8×8 grid',
      },
      'mm-3': {
        name: 'Encoder + project',
        op: 'run a ViT over each patch, then map 1024 dims into d_model',
        out: '64 visual tokens at d_model',
      },
      'mm-4': {
        name: 'Sequence merge',
        op: 'lay the visual tokens beside the text tokens in one line',
        out: '1 sequence · <img> 64 patches </img> + text',
      },
      'mm-5': {
        name: 'Grounding check',
        op: 'compare each answer against what the photo can actually show',
        out: '1 grounded · 1 invented "R7, 220Ω"',
      },
    },
  },

  'diffusion-intro': {
    subject: 'the prompt "a glowing orb"',
    stages: {
      'df-1': {
        name: 'Forward noiser',
        op: 'add a known amount of Gaussian noise so the target ε is known',
        in: 'a real training image x₀',
        out: 'x_t at ᾱ 0.85 · ε is the label',
        lane: 'training-time',
      },
      'df-2': {
        name: 'Noise init',
        op: 'draw one full field of Gaussian noise to start sampling from',
        in: 'a random seed + "a glowing orb"',
        out: '12×12 pure noise · ᾱ ≈ 0.02',
      },
      'df-3': {
        name: 'Denoiser U-Net',
        op: 'predict the noise and subtract a slice, steered by the prompt',
        out: 'step 10/30 · ᾱ 0.25 · coarse blob',
        loop: { group: 'denoise', iteration: 10, of: 30, label: 'denoising loop' },
      },
      'df-4': {
        name: 'Denoiser U-Net',
        op: 'predict and subtract again; each later pass removes less noise',
        out: 'step 22/30 · ᾱ 0.62 · edges firm',
        loop: { group: 'denoise', iteration: 22, of: 30, label: 'denoising loop' },
      },
      'df-5': {
        name: 'Denoiser U-Net',
        op: 'run the remaining passes until almost no noise is left',
        out: 'step 30/30 · ᾱ 0.97 · finished orb',
        loop: { group: 'denoise', iteration: 30, of: 30, label: 'denoising loop' },
      },
    },
  },
};
