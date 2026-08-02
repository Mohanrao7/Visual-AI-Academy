import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "datasets",
    "categoryId": "training-alignment",
    "title": "Datasets",
    "subtitle": "The raw fuel of model behavior",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [],
    "laymanSummary": "Datasets are collections of examples used to train or evaluate models. For LLMs this may be web text, books, code, instructions, or preference pairs. Data quality, licensing, diversity, and filters shape capabilities and harms more than most people expect.",
    "analogy": "You are what you eat—models absorb the statistics of their data diet.",
    "explanation": [
      "Pretraining corpora are huge and noisy.",
      "Fine-tune sets are smaller and task-focused.",
      "Eval sets must not leak into training.",
      "Governance covers consent, license, PII, and bias."
    ],
    "keyTerms": [
      {
        "term": "Corpus",
        "definition": "Large text collection"
      },
      {
        "term": "Label",
        "definition": "Desired output annotation"
      },
      {
        "term": "Data leakage",
        "definition": "Train/test contamination"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Datasets — visual walkthrough",
      "description": "Step through the core idea behind Datasets.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Collect raw sources.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Filter and deduplicate.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Split train/validation/test.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Document provenance.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Train and evaluate carefully.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Web crawl dump",
          "Curated textbooks and code",
          "Personal emails without consent"
        ],
        "insights": {
          "Web crawl dump": "Scale plus noise plus legal risk.",
          "Curated textbooks and code": "Higher signal, smaller scale.",
          "Personal emails without consent": "Hard no—privacy violation."
        },
        "selected": "Web crawl dump"
      }
    },
    "realWorldExample": {
      "title": "Code models",
      "story": "Training on repositories boosts coding help—and can memorize secrets if unfiltered.",
      "takeaway": "Data policy is model policy."
    },
    "quiz": [
      {
        "id": "datasets-q1",
        "prompt": "Datasets primarily…",
        "options": [
          {
            "id": "o0",
            "text": "Decorate UIs"
          },
          {
            "id": "o1",
            "text": "Provide learning signal examples"
          },
          {
            "id": "o2",
            "text": "Replace loss functions"
          },
          {
            "id": "o3",
            "text": "Cool GPUs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Fuel for learning."
      },
      {
        "id": "datasets-q2",
        "prompt": "Eval data should…",
        "options": [
          {
            "id": "o0",
            "text": "Always equal training data"
          },
          {
            "id": "o1",
            "text": "Stay separate to measure generalization"
          },
          {
            "id": "o2",
            "text": "Be deleted always"
          },
          {
            "id": "o3",
            "text": "Be only emojis"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "No leakage."
      },
      {
        "id": "datasets-q3",
        "prompt": "Licensing matters because…",
        "options": [
          {
            "id": "o0",
            "text": "Fonts look nicer"
          },
          {
            "id": "o1",
            "text": "Legal and ethical constraints bind training data"
          },
          {
            "id": "o2",
            "text": "GPUs hate licenses"
          },
          {
            "id": "o3",
            "text": "CSS requires it"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Compliance and ethics."
      }
    ],
    "nextConceptId": "preprocessing"
  },
  {
    "id": "preprocessing",
    "categoryId": "training-alignment",
    "title": "Preprocessing",
    "subtitle": "Clean and shape raw data before training",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "datasets"
    ],
    "laymanSummary": "Preprocessing turns messy raw sources into trainable examples: cleaning, filtering toxicity and PII, language detection, deduplication, formatting dialogues, and packing sequences. Bad preprocessing silently poisons quality.",
    "analogy": "Washing and measuring ingredients before cooking—the model only tastes what you prep.",
    "explanation": [
      "Normalize encodings and formats.",
      "Filter harmful or private content.",
      "Deduplicate near-copies.",
      "Structure into tensors and batches."
    ],
    "keyTerms": [
      {
        "term": "Deduplication",
        "definition": "Removing repeated near-identical samples"
      },
      {
        "term": "PII",
        "definition": "Personally identifiable information"
      },
      {
        "term": "Packing",
        "definition": "Combining short examples into sequences"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Preprocessing — visual walkthrough",
      "description": "Step through the core idea behind Preprocessing.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Raw messy text.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Strip boilerplate.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Filter PII and abuse.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Deduplicate.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Emit clean training records.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Keep all duplicates",
          "Aggressive dedupe",
          "Strip PII patterns"
        ],
        "insights": {
          "Keep all duplicates": "Wastes compute.",
          "Aggressive dedupe": "Often improves quality.",
          "Strip PII patterns": "Necessary privacy step."
        },
        "selected": "Keep all duplicates"
      }
    },
    "realWorldExample": {
      "title": "Chat instruction formatting",
      "story": "Messages labeled system/user/assistant become supervised samples.",
      "takeaway": "Structure teaches roles."
    },
    "quiz": [
      {
        "id": "preprocessing-q1",
        "prompt": "Preprocessing happens…",
        "options": [
          {
            "id": "o0",
            "text": "After the universe ends"
          },
          {
            "id": "o1",
            "text": "During dataset prep for training"
          },
          {
            "id": "o2",
            "text": "Only in CSS"
          },
          {
            "id": "o3",
            "text": "Only on phones"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Data prep stage."
      },
      {
        "id": "preprocessing-q2",
        "prompt": "Deduplication helps…",
        "options": [
          {
            "id": "o0",
            "text": "Memorize more spam"
          },
          {
            "id": "o1",
            "text": "Reduce repetitive bias from clones"
          },
          {
            "id": "o2",
            "text": "Delete GPUs"
          },
          {
            "id": "o3",
            "text": "Ban Unicode"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Less clone dominance."
      },
      {
        "id": "preprocessing-q3",
        "prompt": "PII filtering aims to…",
        "options": [
          {
            "id": "o0",
            "text": "Increase secrets in models"
          },
          {
            "id": "o1",
            "text": "Reduce private data memorization risk"
          },
          {
            "id": "o2",
            "text": "Remove math"
          },
          {
            "id": "o3",
            "text": "Break tokenizers"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Privacy hygiene."
      }
    ],
    "prevConceptId": "datasets",
    "nextConceptId": "tokenization-training"
  },
  {
    "id": "tokenization-training",
    "categoryId": "training-alignment",
    "title": "Tokenization (training view)",
    "subtitle": "Choose a vocab that shapes learning",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "preprocessing"
    ],
    "laymanSummary": "From a training view, tokenization is a compression and inductive-bias choice: vocabulary size and special tokens affect sequence lengths, rare word handling, multilingual fairness, and throughput.",
    "analogy": "Deciding whether your kitchen cuts veggies into cubes or ribbons—same ingredients, different cooking dynamics.",
    "explanation": [
      "Fit tokenizer on domain-relevant text.",
      "Special tokens mark roles and boundaries.",
      "Domain mismatch hurts efficiency.",
      "Frozen tokenizers couple to embedding matrices."
    ],
    "keyTerms": [
      {
        "term": "BPE",
        "definition": "Byte Pair Encoding merges"
      },
      {
        "term": "Special token",
        "definition": "Reserved symbol like EOS"
      },
      {
        "term": "Vocab size",
        "definition": "Number of distinct tokens"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Tokenization (training view) — visual walkthrough",
      "description": "Step through the core idea behind Tokenization (training view).",
      "steps": [
        {
          "id": "step-1",
          "caption": "Sample training text.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Count and merge subwords.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Freeze vocab.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Encode corpus to IDs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Train embeddings on those IDs.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "General web vocab",
          "Code-heavy vocab",
          "Tiny 500-token vocab"
        ],
        "insights": {
          "General web vocab": "Broad coverage.",
          "Code-heavy vocab": "Better for repos.",
          "Tiny 500-token vocab": "Long sequences, slow learning."
        },
        "selected": "General web vocab"
      }
    },
    "realWorldExample": {
      "title": "Multilingual fairness",
      "story": "Tiny English-heavy vocab can over-fragment other languages.",
      "takeaway": "Tokenization can encode inequity."
    },
    "quiz": [
      {
        "id": "tokenization-training-q1",
        "prompt": "Tokenizer choice affects…",
        "options": [
          {
            "id": "o0",
            "text": "Only wallpaper color"
          },
          {
            "id": "o1",
            "text": "Sequence length and learning dynamics"
          },
          {
            "id": "o2",
            "text": "Ocean salinity"
          },
          {
            "id": "o3",
            "text": "Mouse DPI"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Core training factor."
      },
      {
        "id": "tokenization-training-q2",
        "prompt": "Special tokens are used to…",
        "options": [
          {
            "id": "o0",
            "text": "Mark structure and control"
          },
          {
            "id": "o1",
            "text": "Replace GPUs"
          },
          {
            "id": "o2",
            "text": "Paint SVGs"
          },
          {
            "id": "o3",
            "text": "Route packets"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Control markers."
      },
      {
        "id": "tokenization-training-q3",
        "prompt": "Domain-mismatched tokenizers often…",
        "options": [
          {
            "id": "o0",
            "text": "Help always"
          },
          {
            "id": "o1",
            "text": "Over-fragment domain text"
          },
          {
            "id": "o2",
            "text": "Delete loss"
          },
          {
            "id": "o3",
            "text": "Ban batching"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Inefficient splits."
      }
    ],
    "prevConceptId": "preprocessing",
    "nextConceptId": "loss-function"
  },
  {
    "id": "loss-function",
    "categoryId": "training-alignment",
    "title": "Loss Function",
    "subtitle": "The training score to minimize",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "tokenization-training"
    ],
    "laymanSummary": "A loss function measures how wrong predictions are. For LLMs, cross-entropy versus the true next token is standard. Training iteratively reduces loss—it does not directly maximize truth or safety.",
    "analogy": "A coach scorecard: mistakes add penalty points; practice aims to lower the score.",
    "explanation": [
      "Loss quantifies error for gradient updates.",
      "Cross-entropy fits next-token prediction.",
      "Low loss is a proxy, not a virtue metric.",
      "Auxiliary losses can add constraints."
    ],
    "keyTerms": [
      {
        "term": "Cross-entropy",
        "definition": "Penalty for low probability on the true token"
      },
      {
        "term": "Objective",
        "definition": "What optimization targets"
      },
      {
        "term": "Metric",
        "definition": "Evaluation measure that may differ from loss"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Loss Function — visual walkthrough",
      "description": "Step through the core idea behind Loss Function.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Model predicts a distribution.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Compare to true next token.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Compute cross-entropy.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Backprop gradients.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Optimizer steps parameters.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Track loss only",
          "Track loss and task accuracy",
          "Track nothing"
        ],
        "insights": {
          "Track loss only": "Incomplete picture.",
          "Track loss and task accuracy": "Healthier.",
          "Track nothing": "Flying blind."
        },
        "selected": "Track loss only"
      }
    },
    "realWorldExample": {
      "title": "Overconfident wrong answers",
      "story": "Loss can look fine on frequent patterns while rare facts stay wrong.",
      "takeaway": "Monitor task metrics beyond loss."
    },
    "quiz": [
      {
        "id": "loss-function-q1",
        "prompt": "LLM pretraining loss is usually…",
        "options": [
          {
            "id": "o0",
            "text": "Cross-entropy on next tokens"
          },
          {
            "id": "o1",
            "text": "JPEG size"
          },
          {
            "id": "o2",
            "text": "CSS lint"
          },
          {
            "id": "o3",
            "text": "Ping time"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "CE NTP."
      },
      {
        "id": "loss-function-q2",
        "prompt": "Lower loss always means ethical behavior.",
        "options": [
          {
            "id": "o0",
            "text": "True"
          },
          {
            "id": "o1",
            "text": "False"
          },
          {
            "id": "o2",
            "text": "Only Sundays"
          },
          {
            "id": "o3",
            "text": "Only in Rust"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Proxy is not values."
      },
      {
        "id": "loss-function-q3",
        "prompt": "Loss drives…",
        "options": [
          {
            "id": "o0",
            "text": "Gradient updates"
          },
          {
            "id": "o1",
            "text": "Only UI themes"
          },
          {
            "id": "o2",
            "text": "DNS TTLs"
          },
          {
            "id": "o3",
            "text": "Fan noise only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Training signal."
      }
    ],
    "prevConceptId": "tokenization-training",
    "nextConceptId": "gradient-descent",
    "codeExample": {
      "language": "pseudo",
      "title": "Cross-entropy idea",
      "code": "loss = -log p(true_token | prefix)",
      "notes": "Minimize average loss over tokens."
    }
  },
  {
    "id": "gradient-descent",
    "categoryId": "training-alignment",
    "title": "Gradient Descent",
    "subtitle": "Nudge parameters downhill on the loss surface",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "loss-function"
    ],
    "laymanSummary": "Gradient descent updates parameters in the direction that locally decreases loss. The gradient indicates downhill; learning rate controls step size. Deep learning uses stochastic mini-batch estimates.",
    "analogy": "Hiking down a foggy mountain: feel the slope, take a step, repeat—avoid leaping into a ravine with a huge learning rate.",
    "explanation": [
      "Compute gradient of loss versus parameters.",
      "Step opposite the gradient.",
      "Learning rate is critical.",
      "Stochastic estimates come from batches."
    ],
    "keyTerms": [
      {
        "term": "Gradient",
        "definition": "Local slope of loss"
      },
      {
        "term": "Learning rate",
        "definition": "Step size"
      },
      {
        "term": "Local minimum",
        "definition": "Bowl the optimizer may settle in"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Gradient Descent — visual walkthrough",
      "description": "Step through the core idea behind Gradient Descent.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Parameters at a point.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Estimate gradient from a batch.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Step downhill.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Loss trends down overall.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Repeat for many steps.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Tiny LR",
          "Sane LR",
          "Huge LR"
        ],
        "insights": {
          "Tiny LR": "Slow progress.",
          "Sane LR": "Stable learning.",
          "Huge LR": "Divergence risk."
        },
        "selected": "Tiny LR"
      }
    },
    "realWorldExample": {
      "title": "Training curves",
      "story": "Smooth descending loss suggests healthy LR; explosions suggest trouble.",
      "takeaway": "Plots diagnose optimization."
    },
    "quiz": [
      {
        "id": "gradient-descent-q1",
        "prompt": "Gradient descent updates…",
        "options": [
          {
            "id": "o0",
            "text": "Parameters to reduce loss"
          },
          {
            "id": "o1",
            "text": "Only CSS"
          },
          {
            "id": "o2",
            "text": "DNS records"
          },
          {
            "id": "o3",
            "text": "Cable colors"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Optimize params."
      },
      {
        "id": "gradient-descent-q2",
        "prompt": "Too high learning rate can…",
        "options": [
          {
            "id": "o0",
            "text": "Diverge training"
          },
          {
            "id": "o1",
            "text": "Guarantee perfection"
          },
          {
            "id": "o2",
            "text": "Delete tokens safely"
          },
          {
            "id": "o3",
            "text": "Fix hallucinations"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Instability."
      },
      {
        "id": "gradient-descent-q3",
        "prompt": "SGD uses…",
        "options": [
          {
            "id": "o0",
            "text": "Mini-batch gradient estimates"
          },
          {
            "id": "o1",
            "text": "Astrology"
          },
          {
            "id": "o2",
            "text": "One batch of all Earth data always"
          },
          {
            "id": "o3",
            "text": "HTML comments"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stochastic batches."
      }
    ],
    "prevConceptId": "loss-function",
    "nextConceptId": "backpropagation"
  },
  {
    "id": "backpropagation",
    "categoryId": "training-alignment",
    "title": "Backpropagation",
    "subtitle": "Efficiently compute gradients through the net",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "gradient-descent"
    ],
    "laymanSummary": "Backpropagation applies the chain rule to compute how each parameter affected the loss, reusing intermediate calculations. Forward pass computes predictions; backward pass propagates error signals.",
    "analogy": "Tracing a cooking fail backward: salty soup, who added salt, which step, adjust that step next time.",
    "explanation": [
      "Forward computes outputs and loss.",
      "Backward applies the chain rule.",
      "Each weight gets a gradient.",
      "Vanishing and exploding gradients challenged depth historically."
    ],
    "keyTerms": [
      {
        "term": "Autograd",
        "definition": "Automatic differentiation"
      },
      {
        "term": "Chain rule",
        "definition": "Compose derivatives through layers"
      },
      {
        "term": "Backward pass",
        "definition": "Gradient propagation phase"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Backpropagation — visual walkthrough",
      "description": "Step through the core idea behind Backpropagation.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Forward through layers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Arrive at loss.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Send gradients backward.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Each weight receives a gradient.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Optimizer applies updates.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Manual derivatives for a 7B model",
          "Autograd",
          "Ignore gradients"
        ],
        "insights": {
          "Manual derivatives for a 7B model": "Impractical.",
          "Autograd": "Standard.",
          "Ignore gradients": "No learning."
        },
        "selected": "Manual derivatives for a 7B model"
      }
    },
    "realWorldExample": {
      "title": "Framework training",
      "story": "PyTorch and JAX compute grads via autograd graphs.",
      "takeaway": "You design the graph; backprop fills gradients."
    },
    "quiz": [
      {
        "id": "backpropagation-q1",
        "prompt": "Backprop computes…",
        "options": [
          {
            "id": "o0",
            "text": "Gradients via chain rule"
          },
          {
            "id": "o1",
            "text": "New GPUs"
          },
          {
            "id": "o2",
            "text": "CSS grids"
          },
          {
            "id": "o3",
            "text": "SSL certs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Gradients."
      },
      {
        "id": "backpropagation-q2",
        "prompt": "Forward pass…",
        "options": [
          {
            "id": "o0",
            "text": "Computes predictions and loss"
          },
          {
            "id": "o1",
            "text": "Deletes weights"
          },
          {
            "id": "o2",
            "text": "Only shuffles tokens"
          },
          {
            "id": "o3",
            "text": "Paints UI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Outputs."
      },
      {
        "id": "backpropagation-q3",
        "prompt": "Autograd means…",
        "options": [
          {
            "id": "o0",
            "text": "Manual quill math always"
          },
          {
            "id": "o1",
            "text": "Automatic differentiation of the compute graph"
          },
          {
            "id": "o2",
            "text": "No training"
          },
          {
            "id": "o3",
            "text": "No batches"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Auto diffs."
      }
    ],
    "prevConceptId": "gradient-descent",
    "nextConceptId": "optimizers"
  },
  {
    "id": "optimizers",
    "categoryId": "training-alignment",
    "title": "Optimizers",
    "subtitle": "Algorithms that apply gradients wisely",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "backpropagation"
    ],
    "laymanSummary": "Optimizers decide how to turn gradients into parameter updates. SGD, Momentum, Adam, and AdamW add adaptive step sizes and regularization behaviors that affect speed, stability, and final quality.",
    "analogy": "Not just walk downhill, but whether you use hiking poles or adapt stride to terrain.",
    "explanation": [
      "SGD is simple and sometimes sharp.",
      "Momentum smooths updates.",
      "Adam and AdamW adapt per-parameter rates.",
      "Weight decay curbs parameter growth."
    ],
    "keyTerms": [
      {
        "term": "AdamW",
        "definition": "Adaptive optimizer with decoupled weight decay"
      },
      {
        "term": "Momentum",
        "definition": "Velocity carrying past gradients"
      },
      {
        "term": "Weight decay",
        "definition": "Parameter magnitude penalty"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Optimizers — visual walkthrough",
      "description": "Step through the core idea behind Optimizers.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Receive gradients.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Optimizer adapts the step.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Apply to weights.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Track moving stats if adaptive.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Repeat next batch.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Plain SGD no schedule",
          "AdamW with LR schedule",
          "Random weight jerks"
        ],
        "insights": {
          "Plain SGD no schedule": "Can work; may be slow.",
          "AdamW with LR schedule": "Common modern default.",
          "Random weight jerks": "Not an optimizer."
        },
        "selected": "Plain SGD no schedule"
      }
    },
    "realWorldExample": {
      "title": "Stable pretraining runs",
      "story": "Optimizer and schedule tweaks prevent costly divergences.",
      "takeaway": "Optimization is part of the research."
    },
    "quiz": [
      {
        "id": "optimizers-q1",
        "prompt": "Optimizers convert gradients into…",
        "options": [
          {
            "id": "o0",
            "text": "Parameter updates"
          },
          {
            "id": "o1",
            "text": "Podcasts"
          },
          {
            "id": "o2",
            "text": "Dockerfiles"
          },
          {
            "id": "o3",
            "text": "Font files"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Updates."
      },
      {
        "id": "optimizers-q2",
        "prompt": "AdamW is popular because…",
        "options": [
          {
            "id": "o0",
            "text": "It bans data"
          },
          {
            "id": "o1",
            "text": "Adaptive steps and weight decay work well"
          },
          {
            "id": "o2",
            "text": "It removes loss"
          },
          {
            "id": "o3",
            "text": "It paints icons"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Practical stability."
      },
      {
        "id": "optimizers-q3",
        "prompt": "Weight decay tends to…",
        "options": [
          {
            "id": "o0",
            "text": "Encourage huge weights"
          },
          {
            "id": "o1",
            "text": "Penalize large weights"
          },
          {
            "id": "o2",
            "text": "Delete softmax"
          },
          {
            "id": "o3",
            "text": "Stop tokenization"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Regularize magnitude."
      }
    ],
    "prevConceptId": "backpropagation",
    "nextConceptId": "epochs-batches-lr"
  },
  {
    "id": "epochs-batches-lr",
    "categoryId": "training-alignment",
    "title": "Epochs / Batches / LR",
    "subtitle": "The rhythm of training steps",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "optimizers"
    ],
    "laymanSummary": "Data is processed in batches. An epoch is one pass over the training set. Learning rate schedules change step size over time. For LLMs, tokens seen often matters more than epoch count.",
    "analogy": "Gym plan: sets are batches, full routines are epochs, and weekly weight is the LR schedule.",
    "explanation": [
      "Batch size trades noise versus compute.",
      "Epochs measure progress through data.",
      "LR schedules prevent early shocks.",
      "Token budgets dominate LLM training talk."
    ],
    "keyTerms": [
      {
        "term": "Batch",
        "definition": "Group of examples per update"
      },
      {
        "term": "Epoch",
        "definition": "Pass through dataset"
      },
      {
        "term": "LR schedule",
        "definition": "Plan for learning rate over time"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Epochs / Batches / LR — visual walkthrough",
      "description": "Step through the core idea behind Epochs / Batches / LR.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Shuffle data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Take a batch.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Update with current LR.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Advance schedule.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Complete epoch or token budget.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Batch size 1",
          "Moderate batches",
          "Enormous batch with tiny LR"
        ],
        "insights": {
          "Batch size 1": "Noisy and slow.",
          "Moderate batches": "Common balance.",
          "Enormous batch with tiny LR": "Possible with care."
        },
        "selected": "Batch size 1"
      }
    },
    "realWorldExample": {
      "title": "Warmup saves runs",
      "story": "Too-high early LR destabilizes; warmup ramps gently.",
      "takeaway": "Schedules are practical engineering."
    },
    "quiz": [
      {
        "id": "epochs-batches-lr-q1",
        "prompt": "A batch is…",
        "options": [
          {
            "id": "o0",
            "text": "One GPU brand"
          },
          {
            "id": "o1",
            "text": "A group of examples per step"
          },
          {
            "id": "o2",
            "text": "A CSS file"
          },
          {
            "id": "o3",
            "text": "A DNS zone"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Step group."
      },
      {
        "id": "epochs-batches-lr-q2",
        "prompt": "Warmup means…",
        "options": [
          {
            "id": "o0",
            "text": "Gradually increase LR early"
          },
          {
            "id": "o1",
            "text": "Delete data"
          },
          {
            "id": "o2",
            "text": "Ban Adam"
          },
          {
            "id": "o3",
            "text": "Stop evals"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Gentle start."
      },
      {
        "id": "epochs-batches-lr-q3",
        "prompt": "For LLMs people often track…",
        "options": [
          {
            "id": "o0",
            "text": "Tokens processed"
          },
          {
            "id": "o1",
            "text": "Only wallpaper"
          },
          {
            "id": "o2",
            "text": "Only fan RPM"
          },
          {
            "id": "o3",
            "text": "Only commit emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Token budgets."
      }
    ],
    "prevConceptId": "optimizers",
    "nextConceptId": "pretraining-vs-finetuning"
  },
  {
    "id": "pretraining-vs-finetuning",
    "categoryId": "training-alignment",
    "title": "Pretraining vs Fine-tuning",
    "subtitle": "Broad learning first, specialize second",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "epochs-batches-lr"
    ],
    "laymanSummary": "Pretraining teaches general patterns from massive data. Fine-tuning continues training on narrower data to specialize behavior. Most products adapt a pretrained base because pretraining is extremely expensive.",
    "analogy": "Learn general literacy first, then take a professional short course.",
    "explanation": [
      "Pretrain is expensive and broad.",
      "Fine-tune is cheaper adaptation.",
      "Catastrophic forgetting is a risk.",
      "Parameter-efficient methods often beat full fine-tunes."
    ],
    "keyTerms": [
      {
        "term": "Pretraining",
        "definition": "Large-scale general training"
      },
      {
        "term": "Fine-tuning",
        "definition": "Task or domain adaptation"
      },
      {
        "term": "Catastrophic forgetting",
        "definition": "Losing old skills while learning new"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Pretraining vs Fine-tuning — visual walkthrough",
      "description": "Step through the core idea behind Pretraining vs Fine-tuning.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Pretrain on broad corpora.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Obtain a base model.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Fine-tune on domain data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Evaluate general and domain metrics.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Ship adaptation with safeguards.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Train from scratch for FAQ bot",
          "Fine-tune base",
          "Prompt only"
        ],
        "insights": {
          "Train from scratch for FAQ bot": "Usually wasteful.",
          "Fine-tune base": "Strong when domain data exists.",
          "Prompt only": "Cheapest starting point."
        },
        "selected": "Train from scratch for FAQ bot"
      }
    },
    "realWorldExample": {
      "title": "Hospital note summarizer",
      "story": "Start from a general LLM; fine-tune on de-identified note styles.",
      "takeaway": "Do not pretrain from scratch for every app."
    },
    "quiz": [
      {
        "id": "pretraining-vs-finetuning-q1",
        "prompt": "Pretraining is usually…",
        "options": [
          {
            "id": "o0",
            "text": "Narrow and tiny"
          },
          {
            "id": "o1",
            "text": "Broad and expensive"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only mobile"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Scale stage."
      },
      {
        "id": "pretraining-vs-finetuning-q2",
        "prompt": "Fine-tuning…",
        "options": [
          {
            "id": "o0",
            "text": "Adapts a base model"
          },
          {
            "id": "o1",
            "text": "Deletes the base always"
          },
          {
            "id": "o2",
            "text": "Replaces electricity"
          },
          {
            "id": "o3",
            "text": "Bans prompts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Specialize."
      },
      {
        "id": "pretraining-vs-finetuning-q3",
        "prompt": "Forgetting risk means…",
        "options": [
          {
            "id": "o0",
            "text": "New training can erode old skills"
          },
          {
            "id": "o1",
            "text": "GPUs forget math"
          },
          {
            "id": "o2",
            "text": "Tokens vanish from Unicode"
          },
          {
            "id": "o3",
            "text": "Logs delete themselves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Catastrophic forgetting."
      }
    ],
    "prevConceptId": "epochs-batches-lr",
    "nextConceptId": "sft"
  },
  {
    "id": "sft",
    "categoryId": "training-alignment",
    "title": "SFT",
    "subtitle": "Supervised Fine-Tuning on instructions",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "pretraining-vs-finetuning"
    ],
    "laymanSummary": "Supervised Fine-Tuning trains the model on high-quality prompt-response examples so it follows instructions in a desired style. It turns a base completion model into a more helpful assistant before preference optimization.",
    "analogy": "Script rehearsal: show ideal dialogues until the actor hits the right tone and structure.",
    "explanation": [
      "Curate instruction datasets.",
      "Minimize loss on target responses.",
      "Quality beats sheer quantity.",
      "SFT alone may still hallucinate."
    ],
    "keyTerms": [
      {
        "term": "Instruction tuning",
        "definition": "Fine-tuning to follow instructions"
      },
      {
        "term": "Gold response",
        "definition": "Target answer text"
      },
      {
        "term": "Demonstration data",
        "definition": "Example dialogues"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "SFT — visual walkthrough",
      "description": "Step through the core idea behind SFT.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Base model completes text.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Provide instruction examples.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "SFT updates toward gold answers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Assistant-style behavior emerges.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Later preference stages refine choices.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Noisy scraped Q&A",
          "Expert-reviewed demos",
          "Contradictory instructions"
        ],
        "insights": {
          "Noisy scraped Q&A": "Teaches messy habits.",
          "Expert-reviewed demos": "Best SFT fuel.",
          "Contradictory instructions": "Confuses behavior."
        },
        "selected": "Noisy scraped Q&A"
      }
    },
    "realWorldExample": {
      "title": "Company tone of voice",
      "story": "SFT on approved templates yields on-brand support drafts.",
      "takeaway": "Demonstrations teach manners and format."
    },
    "quiz": [
      {
        "id": "sft-q1",
        "prompt": "SFT stands for…",
        "options": [
          {
            "id": "o0",
            "text": "Supervised Fine-Tuning"
          },
          {
            "id": "o1",
            "text": "Super Fast TCP"
          },
          {
            "id": "o2",
            "text": "Soft Font Type"
          },
          {
            "id": "o3",
            "text": "Secure File Telegram"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "SFT."
      },
      {
        "id": "sft-q2",
        "prompt": "SFT uses…",
        "options": [
          {
            "id": "o0",
            "text": "Labeled prompt-response pairs"
          },
          {
            "id": "o1",
            "text": "Only unlabeled noise"
          },
          {
            "id": "o2",
            "text": "Only rewards without text"
          },
          {
            "id": "o3",
            "text": "Only CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Supervised pairs."
      },
      {
        "id": "sft-q3",
        "prompt": "Quality of demos…",
        "options": [
          {
            "id": "o0",
            "text": "Barely matters"
          },
          {
            "id": "o1",
            "text": "Strongly drives behavior"
          },
          {
            "id": "o2",
            "text": "Deletes GPUs"
          },
          {
            "id": "o3",
            "text": "Fixes networking"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Quality over quantity."
      }
    ],
    "prevConceptId": "pretraining-vs-finetuning",
    "nextConceptId": "lora-qlora"
  },
  {
    "id": "lora-qlora",
    "categoryId": "training-alignment",
    "title": "LoRA / QLoRA",
    "subtitle": "Fine-tune small adapters instead of all weights",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "sft"
    ],
    "laymanSummary": "LoRA freezes most base weights and trains tiny low-rank adapter matrices, cutting memory and storage. QLoRA quantizes the base model while training adapters, enabling fine-tuning on smaller GPUs.",
    "analogy": "Instead of rewriting an entire textbook, stick removable sticky notes you can swap per subject.",
    "explanation": [
      "Inject low-rank updates into layers.",
      "Train adapters; freeze base.",
      "QLoRA uses a quantized base plus adapters.",
      "Swap adapters per task or tenant."
    ],
    "keyTerms": [
      {
        "term": "LoRA",
        "definition": "Low-Rank Adaptation"
      },
      {
        "term": "Quantization",
        "definition": "Store weights with fewer bits"
      },
      {
        "term": "Adapter",
        "definition": "Small trainable module"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LoRA / QLoRA — visual walkthrough",
      "description": "Step through the core idea behind LoRA / QLoRA.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Load base model.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Insert LoRA adapters.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Optionally quantize base.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Train adapters on task data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Ship tiny adapter files.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Full fine-tune 70B on one laptop",
          "LoRA",
          "QLoRA on limited VRAM"
        ],
        "insights": {
          "Full fine-tune 70B on one laptop": "Usually impossible.",
          "LoRA": "Efficient adaptation.",
          "QLoRA on limited VRAM": "Practical on smaller GPUs."
        },
        "selected": "Full fine-tune 70B on one laptop"
      }
    },
    "realWorldExample": {
      "title": "Multi-tenant customization",
      "story": "One base plus many per-customer adapters.",
      "takeaway": "Efficient specialization at scale."
    },
    "quiz": [
      {
        "id": "lora-qlora-q1",
        "prompt": "LoRA trains…",
        "options": [
          {
            "id": "o0",
            "text": "Small adapter matrices typically"
          },
          {
            "id": "o1",
            "text": "Every marketing PDF"
          },
          {
            "id": "o2",
            "text": "Only CSS variables"
          },
          {
            "id": "o3",
            "text": "DNS records"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Adapters."
      },
      {
        "id": "lora-qlora-q2",
        "prompt": "QLoRA helps by…",
        "options": [
          {
            "id": "o0",
            "text": "Quantizing base to save memory"
          },
          {
            "id": "o1",
            "text": "Deleting attention"
          },
          {
            "id": "o2",
            "text": "Banning data"
          },
          {
            "id": "o3",
            "text": "Removing loss"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Memory efficiency."
      },
      {
        "id": "lora-qlora-q3",
        "prompt": "Adapters are useful because…",
        "options": [
          {
            "id": "o0",
            "text": "They are swappable and small"
          },
          {
            "id": "o1",
            "text": "They erase bases always"
          },
          {
            "id": "o2",
            "text": "They forbid evals"
          },
          {
            "id": "o3",
            "text": "They replace tokenizers"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Modularity."
      }
    ],
    "prevConceptId": "sft",
    "nextConceptId": "rlhf",
    "codeExample": {
      "language": "pseudo",
      "title": "LoRA idea",
      "code": "W' = W + BA  (B,A low-rank trained)",
      "notes": "Base W frozen."
    }
  },
  {
    "id": "rlhf",
    "categoryId": "training-alignment",
    "title": "RLHF",
    "subtitle": "Align with human preferences via rewards",
    "difficulty": "advanced",
    "estimatedMinutes": 9,
    "prerequisites": [
      "lora-qlora"
    ],
    "laymanSummary": "Reinforcement Learning from Human Feedback fits a reward model on human preference comparisons, then optimizes the LLM policy to score higher while staying close to a reference model. It can improve helpfulness but is complex and can over-optimize quirks.",
    "analogy": "A comedy writer tries jokes, audience ranks them, coach trains for crowd-pleasers without wandering off-character.",
    "explanation": [
      "Collect pairwise human preferences.",
      "Train a reward model.",
      "Optimize policy with RL plus KL penalty.",
      "Expensive and sensitive to preference data."
    ],
    "keyTerms": [
      {
        "term": "Reward model",
        "definition": "Model predicting preference scores"
      },
      {
        "term": "Policy",
        "definition": "The generating LLM being optimized"
      },
      {
        "term": "KL penalty",
        "definition": "Keep policy near reference"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "RLHF — visual walkthrough",
      "description": "Step through the core idea behind RLHF.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Humans compare answers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Reward model learns preferences.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Policy samples answers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Update toward higher reward.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Stay near reference behavior.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "No preference stage",
          "RLHF",
          "Only SFT"
        ],
        "insights": {
          "No preference stage": "More raw completion behavior.",
          "RLHF": "Preference-optimized.",
          "Only SFT": "Strong baseline before RL."
        },
        "selected": "No preference stage"
      }
    },
    "realWorldExample": {
      "title": "Assistant helpfulness jumps",
      "story": "Chat models became more instruction-following after preference tuning eras.",
      "takeaway": "Human preferences shape product feel."
    },
    "quiz": [
      {
        "id": "rlhf-q1",
        "prompt": "RLHF uses…",
        "options": [
          {
            "id": "o0",
            "text": "Preference feedback to shape rewards"
          },
          {
            "id": "o1",
            "text": "Only unsupervised clustering"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only ping"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Preferences."
      },
      {
        "id": "rlhf-q2",
        "prompt": "KL penalties aim to…",
        "options": [
          {
            "id": "o0",
            "text": "Prevent drifting too far from reference"
          },
          {
            "id": "o1",
            "text": "Delete tokens"
          },
          {
            "id": "o2",
            "text": "Ban GPUs"
          },
          {
            "id": "o3",
            "text": "Stop tokenization"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stay close."
      },
      {
        "id": "rlhf-q3",
        "prompt": "RLHF is…",
        "options": [
          {
            "id": "o0",
            "text": "Simple regex"
          },
          {
            "id": "o1",
            "text": "Complex but influential alignment method"
          },
          {
            "id": "o2",
            "text": "A font"
          },
          {
            "id": "o3",
            "text": "A cable"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Powerful and heavy."
      }
    ],
    "prevConceptId": "lora-qlora",
    "nextConceptId": "dpo"
  },
  {
    "id": "dpo",
    "categoryId": "training-alignment",
    "title": "DPO",
    "subtitle": "Preference tuning without a full RL loop",
    "difficulty": "advanced",
    "estimatedMinutes": 8,
    "prerequisites": [
      "rlhf"
    ],
    "laymanSummary": "Direct Preference Optimization fine-tunes on preferred versus rejected responses using a classification-style objective that avoids a separate RL loop. It is often simpler operationally than classic RLHF.",
    "analogy": "Show good versus bad answers and teach prefer this over that, without a separate scoreboard coach in an RL loop.",
    "explanation": [
      "Dataset holds prompt, chosen, rejected.",
      "Optimize a closed-form preference loss.",
      "No explicit reward-model RL loop required.",
      "Still depends on preference data quality."
    ],
    "keyTerms": [
      {
        "term": "Chosen",
        "definition": "Preferred response"
      },
      {
        "term": "Rejected",
        "definition": "Dispreferred response"
      },
      {
        "term": "Reference model",
        "definition": "Anchor for implicit regularization"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "DPO — visual walkthrough",
      "description": "Step through the core idea behind DPO.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Gather preference triples.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Compute DPO loss.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Update policy parameters.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Preferred style becomes likelier.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Evaluate regressions.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "RLHF stack",
          "DPO",
          "No preference optimization"
        ],
        "insights": {
          "RLHF stack": "Powerful, ops-heavy.",
          "DPO": "Simpler preference tuning.",
          "No preference optimization": "Misses preference shaping."
        },
        "selected": "RLHF stack"
      }
    },
    "realWorldExample": {
      "title": "Safer refusal style",
      "story": "Teams use DPO to nudge refusals without heavy RL ops.",
      "takeaway": "Operational simplicity matters."
    },
    "quiz": [
      {
        "id": "dpo-q1",
        "prompt": "DPO trains on…",
        "options": [
          {
            "id": "o0",
            "text": "Chosen versus rejected responses"
          },
          {
            "id": "o1",
            "text": "Only unlabeled audio"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only IP addresses"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Preference pairs."
      },
      {
        "id": "dpo-q2",
        "prompt": "DPO typically avoids…",
        "options": [
          {
            "id": "o0",
            "text": "A full RL loop with explicit reward model"
          },
          {
            "id": "o1",
            "text": "Any math"
          },
          {
            "id": "o2",
            "text": "Any data"
          },
          {
            "id": "o3",
            "text": "Any eval"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Simpler pipeline."
      },
      {
        "id": "dpo-q3",
        "prompt": "Bad preference data yields…",
        "options": [
          {
            "id": "o0",
            "text": "Magic safety"
          },
          {
            "id": "o1",
            "text": "Misaligned behavior"
          },
          {
            "id": "o2",
            "text": "Free GPUs"
          },
          {
            "id": "o3",
            "text": "Perfect truth"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Garbage in, garbage out."
      }
    ],
    "prevConceptId": "rlhf",
    "nextConceptId": "overfit-underfit",
    "codeExample": {
      "language": "pseudo",
      "title": "DPO sketch",
      "code": "increase log π(chosen) relative to π(rejected)\n(with reference constraints)",
      "notes": "See the DPO paper for details."
    }
  },
  {
    "id": "overfit-underfit",
    "categoryId": "training-alignment",
    "title": "Overfit / Underfit intuition",
    "subtitle": "Memorize too hard versus learn too little",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "dpo"
    ],
    "laymanSummary": "Underfitting means the model is too simple or under-trained. Overfitting means it memorizes training quirks and fails to generalize. Watch train versus validation metrics for gaps.",
    "analogy": "Underfit: studying only chapter titles. Overfit: memorizing answer keys, then freezing on a new question.",
    "explanation": [
      "Train and val curves diagnose fit.",
      "Regularization and more data fight overfit.",
      "More capacity or training can fix underfit.",
      "LLMs can memorize; privacy and eval design matter."
    ],
    "keyTerms": [
      {
        "term": "Overfitting",
        "definition": "Great train, poor generalization"
      },
      {
        "term": "Underfitting",
        "definition": "Poor train and poor generalization"
      },
      {
        "term": "Regularization",
        "definition": "Techniques limiting memorization"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Overfit / Underfit intuition — visual walkthrough",
      "description": "Step through the core idea behind Overfit / Underfit intuition.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Train accuracy climbs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": []
        },
        {
          "id": "step-2",
          "caption": "Validation stalls or drops.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-3",
          "caption": "Suspect overfitting.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "muted"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-4",
          "caption": "Add data, regularize, or stop earlier.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3",
              "label": "now"
            }
          ]
        },
        {
          "id": "step-5",
          "caption": "Generalization improves.",
          "callout": "Pause and restate this in your own words.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
              "x": 56,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n3",
              "label": "Output",
              "x": 78,
              "y": 50,
              "tone": "active"
            }
          ],
          "edges": [
            {
              "from": "n0",
              "to": "n1"
            },
            {
              "from": "n1",
              "to": "n2"
            },
            {
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      ]
    },
    "interactiveExample": {
      "kind": "generic-toggle",
      "title": "Try the idea",
      "description": "Switch options to build intuition.",
      "fixture": {
        "options": [
          "Tiny model, huge task",
          "Huge model, tiny duplicated set",
          "Right-sized model and diverse data"
        ],
        "insights": {
          "Tiny model, huge task": "Underfit risk.",
          "Huge model, tiny duplicated set": "Overfit risk.",
          "Right-sized model and diverse data": "Healthier fit."
        },
        "selected": "Tiny model, huge task"
      }
    },
    "realWorldExample": {
      "title": "Leaderboard leakage",
      "story": "Tuning to a public test set overfits the leaderboard.",
      "takeaway": "Hold out truly unseen tests."
    },
    "quiz": [
      {
        "id": "overfit-underfit-q1",
        "prompt": "Overfitting looks like…",
        "options": [
          {
            "id": "o0",
            "text": "Train up, validation down"
          },
          {
            "id": "o1",
            "text": "Both always perfect forever"
          },
          {
            "id": "o2",
            "text": "No training"
          },
          {
            "id": "o3",
            "text": "Only CSS bugs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Gap pattern."
      },
      {
        "id": "overfit-underfit-q2",
        "prompt": "Underfitting means…",
        "options": [
          {
            "id": "o0",
            "text": "Model too weak or undertrained"
          },
          {
            "id": "o1",
            "text": "Too much perfect memory"
          },
          {
            "id": "o2",
            "text": "Infinite context"
          },
          {
            "id": "o3",
            "text": "No loss"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Too simple."
      },
      {
        "id": "overfit-underfit-q3",
        "prompt": "A remedy for overfit…",
        "options": [
          {
            "id": "o0",
            "text": "More diverse data and regularization"
          },
          {
            "id": "o1",
            "text": "Delete validation"
          },
          {
            "id": "o2",
            "text": "Max LR chaos always"
          },
          {
            "id": "o3",
            "text": "Ignore metrics"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Generalization tools."
      }
    ],
    "prevConceptId": "dpo"
  }
] as Concept[];
