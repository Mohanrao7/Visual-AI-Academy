import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "tokenization",
    "categoryId": "how-llms-work",
    "title": "Tokenization",
    "subtitle": "Split text into model-readable pieces",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [],
    "laymanSummary": "Tokenization converts text into tokens—integer IDs the model understands. Tokens may be words, subwords, or characters depending on the tokenizer. Everything an LLM reads or writes is mediated by this segmentation, which affects cost, context limits, and awkward splits of rare words.",
    "analogy": "Like cutting a paragraph into LEGO bricks before a machine rebuilds meaning from brick IDs.",
    "explanation": [
      "Tokenizers map text to token ID sequences and back.",
      "Subword schemes balance vocabulary size and coverage.",
      "Token counts drive context usage and pricing.",
      "Weird splits can hurt reasoning on codes, names, or math."
    ],
    "keyTerms": [
      {
        "term": "Token",
        "definition": "Atomic text unit for the model"
      },
      {
        "term": "Tokenizer",
        "definition": "Algorithm mapping text to token IDs"
      },
      {
        "term": "Subword",
        "definition": "Fragment smaller than a full word"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Tokenization — visual walkthrough",
      "description": "Step through the core idea behind Tokenization.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Raw sentence arrives.",
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
          "caption": "Tokenizer applies merge rules.",
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
          "caption": "Produce token strings.",
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
          "caption": "Map to numeric IDs.",
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
          "caption": "IDs enter the embedding layer.",
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
      "kind": "token-split",
      "title": "Split a sentence into tokens",
      "description": "Type a sentence and see a demo tokenizer.",
      "fixture": {
        "text": "Generative AI learns patterns from data.",
        "vocabHint": true
      }
    },
    "realWorldExample": {
      "title": "API billing by tokens",
      "story": "A verbose prompt costs more even if word count looks modest.",
      "takeaway": "Measure tokens, not only words."
    },
    "quiz": [
      {
        "id": "tokenization-q1",
        "prompt": "Tokenization turns text into…",
        "options": [
          {
            "id": "o0",
            "text": "Pixels only"
          },
          {
            "id": "o1",
            "text": "Token IDs"
          },
          {
            "id": "o2",
            "text": "CSS classes"
          },
          {
            "id": "o3",
            "text": "IP addresses"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "IDs the model consumes."
      },
      {
        "id": "tokenization-q2",
        "prompt": "Subword tokenization helps…",
        "options": [
          {
            "id": "o0",
            "text": "Delete GPUs"
          },
          {
            "id": "o1",
            "text": "Handle rare words with fragments"
          },
          {
            "id": "o2",
            "text": "Remove attention"
          },
          {
            "id": "o3",
            "text": "Ban Unicode"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Fragments compose unknowns."
      },
      {
        "id": "tokenization-q3",
        "prompt": "Token count affects…",
        "options": [
          {
            "id": "o0",
            "text": "Only wallpaper"
          },
          {
            "id": "o1",
            "text": "Context limits and often pricing"
          },
          {
            "id": "o2",
            "text": "Ocean tides"
          },
          {
            "id": "o3",
            "text": "Mouse DPI"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Context and cost."
      }
    ],
    "nextConceptId": "vocabulary-context-window"
  },
  {
    "id": "vocabulary-context-window",
    "categoryId": "how-llms-work",
    "title": "Vocabulary & Context Window",
    "subtitle": "What the model can name, and how much it can see",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "tokenization"
    ],
    "laymanSummary": "Vocabulary is the finite set of tokens a model knows IDs for. The context window is how many tokens of prompt, history, and generation the model can consider at once. If information falls outside the window, the model cannot directly use it unless you retrieve or summarize it back in.",
    "analogy": "Vocabulary is the dictionary of bricks; context window is the size of the table you can build on.",
    "explanation": [
      "Finite vocab plus subword strategies cover open text.",
      "Context window is a hard capacity constraint.",
      "Long context helps but is not perfect memory.",
      "Attention cost scales with context length."
    ],
    "keyTerms": [
      {
        "term": "Vocabulary",
        "definition": "Set of known tokens"
      },
      {
        "term": "Context window",
        "definition": "Max tokens per model pass"
      },
      {
        "term": "Truncation",
        "definition": "Dropping overflow tokens"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Vocabulary & Context Window — visual walkthrough",
      "description": "Step through the core idea behind Vocabulary & Context Window.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Prompt grows with chat history.",
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
          "caption": "Tokenizer counts tokens.",
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
          "caption": "Nearing the window limit.",
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
          "caption": "Oldest turns get truncated or summarized.",
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
          "caption": "Model only sees what remains.",
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
          "Short FAQ answer",
          "Paste entire codebase",
          "Summarize then ask"
        ],
        "insights": {
          "Short FAQ answer": "Usually fits easily.",
          "Paste entire codebase": "May blow the window; chunk/retrieve instead.",
          "Summarize then ask": "Practical context engineering."
        },
        "selected": "Short FAQ answer"
      }
    },
    "realWorldExample": {
      "title": "Support chat resets",
      "story": "Agents summarize old turns to stay inside context.",
      "takeaway": "Long conversations need memory strategies."
    },
    "quiz": [
      {
        "id": "vocabulary-context-window-q1",
        "prompt": "If text exceeds context…",
        "options": [
          {
            "id": "o0",
            "text": "Model telepathically knows it"
          },
          {
            "id": "o1",
            "text": "It must be truncated, summarized, or retrieved later"
          },
          {
            "id": "o2",
            "text": "RAM upgrades itself"
          },
          {
            "id": "o3",
            "text": "CSS expands"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Outside window is invisible."
      },
      {
        "id": "vocabulary-context-window-q2",
        "prompt": "Vocabulary is…",
        "options": [
          {
            "id": "o0",
            "text": "Infinite always"
          },
          {
            "id": "o1",
            "text": "Finite token inventory"
          },
          {
            "id": "o2",
            "text": "A Kubernetes pod"
          },
          {
            "id": "o3",
            "text": "A color palette"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Finite token set."
      },
      {
        "id": "vocabulary-context-window-q3",
        "prompt": "Longer context always means perfect recall.",
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
            "text": "Only at night"
          },
          {
            "id": "o3",
            "text": "Only in Python"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Capacity is not perfect memory."
      }
    ],
    "prevConceptId": "tokenization",
    "nextConceptId": "embeddings"
  },
  {
    "id": "embeddings",
    "categoryId": "how-llms-work",
    "title": "Embeddings",
    "subtitle": "Meaning as coordinates in vector space",
    "difficulty": "intermediate",
    "estimatedMinutes": 9,
    "prerequisites": [
      "vocabulary-context-window"
    ],
    "laymanSummary": "Embeddings are numeric vectors representing tokens, sentences, or documents so similar meanings land nearby geometrically. Models use embeddings internally; retrieval systems also embed queries and docs to find neighbors. Distances become a proxy for semantic relatedness.",
    "analogy": "A city map for meaning: doctor sits nearer nurse than screwdriver.",
    "explanation": [
      "Embedding layer maps token IDs to vectors.",
      "Training places related items closer.",
      "Cosine similarity is a common closeness measure.",
      "Dimensionality and data shape the geometry."
    ],
    "keyTerms": [
      {
        "term": "Embedding",
        "definition": "Vector representing meaning"
      },
      {
        "term": "Vector space",
        "definition": "Coordinate world for similarity"
      },
      {
        "term": "Cosine similarity",
        "definition": "Angle-based closeness score"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Embeddings — visual walkthrough",
      "description": "Step through the core idea behind Embeddings.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Token IDs enter.",
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
          "caption": "Lookup embedding vectors.",
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
          "caption": "Nearby meanings cluster.",
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
          "caption": "Downstream layers transform vectors.",
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
          "caption": "Similarity search can reuse embeddings.",
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
      "kind": "similarity",
      "title": "Compare meaning distances",
      "description": "Pick two phrases and compare demo similarity.",
      "fixture": {
        "phrases": [
          "king",
          "queen",
          "apple",
          "orange",
          "transformer model",
          "neural network"
        ],
        "vectors": {
          "king": [
            0.9,
            0.1
          ],
          "queen": [
            0.85,
            0.2
          ],
          "apple": [
            0.1,
            0.9
          ],
          "orange": [
            0.15,
            0.85
          ],
          "transformer model": [
            0.7,
            0.65
          ],
          "neural network": [
            0.68,
            0.6
          ]
        }
      }
    },
    "realWorldExample": {
      "title": "Duplicate question detection",
      "story": "Forums embed posts to find near-duplicate asks.",
      "takeaway": "Vectors power semantic matching."
    },
    "quiz": [
      {
        "id": "embeddings-q1",
        "prompt": "Embeddings represent…",
        "options": [
          {
            "id": "o0",
            "text": "Only file sizes"
          },
          {
            "id": "o1",
            "text": "Meaning as vectors"
          },
          {
            "id": "o2",
            "text": "CSS breakpoints"
          },
          {
            "id": "o3",
            "text": "MAC addresses"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Vectors for meaning."
      },
      {
        "id": "embeddings-q2",
        "prompt": "Similar meanings should be…",
        "options": [
          {
            "id": "o0",
            "text": "Far apart"
          },
          {
            "id": "o1",
            "text": "Nearby in vector space"
          },
          {
            "id": "o2",
            "text": "Deleted"
          },
          {
            "id": "o3",
            "text": "Sorted alphabetically only"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Geometry encodes similarity."
      },
      {
        "id": "embeddings-q3",
        "prompt": "Cosine similarity measures…",
        "options": [
          {
            "id": "o0",
            "text": "Exact string equality only"
          },
          {
            "id": "o1",
            "text": "Directional closeness of vectors"
          },
          {
            "id": "o2",
            "text": "CPU temperature"
          },
          {
            "id": "o3",
            "text": "Packet loss"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Common semantic metric."
      }
    ],
    "prevConceptId": "vocabulary-context-window",
    "nextConceptId": "positional-encoding"
  },
  {
    "id": "positional-encoding",
    "categoryId": "how-llms-work",
    "title": "Positional Encoding",
    "subtitle": "Tell the model token order matters",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "embeddings"
    ],
    "laymanSummary": "Self-attention alone does not inherently know order. Positional encodings (sinusoidal, learned, RoPE, ALiBi, and others) inject order so “dog bites man” differs from “man bites dog.”",
    "analogy": "Like page numbers in a shuffled manuscript—bricks need positions to rebuild the plot.",
    "explanation": [
      "Attention mixes tokens; positions disambiguate order.",
      "Absolute and relative schemes exist.",
      "Modern LLMs often use rotary embeddings (RoPE).",
      "Length generalization depends on the scheme."
    ],
    "keyTerms": [
      {
        "term": "Positional encoding",
        "definition": "Signal carrying sequence order"
      },
      {
        "term": "RoPE",
        "definition": "Rotary position embedding used in many LLMs"
      },
      {
        "term": "Relative position",
        "definition": "Encoding distances between tokens"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Positional Encoding — visual walkthrough",
      "description": "Step through the core idea behind Positional Encoding.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Tokens without order look bag-of-words-ish.",
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
          "caption": "Add position signals to embeddings.",
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
          "caption": "Attention uses order-aware interactions.",
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
          "caption": "Sentence meaning stabilizes.",
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
          "caption": "Long-context behavior depends on the method.",
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
          "Bag embeddings only",
          "Embeddings + positions",
          "Shuffle tokens at inference"
        ],
        "insights": {
          "Bag embeddings only": "Weak order signal.",
          "Embeddings + positions": "Standard fix.",
          "Shuffle tokens at inference": "Breaks meaning on purpose."
        },
        "selected": "Bag embeddings only"
      }
    },
    "realWorldExample": {
      "title": "Code completion sensitivity",
      "story": "Swapping two args changes meaning; positions preserve that.",
      "takeaway": "Order is semantics in language and code."
    },
    "quiz": [
      {
        "id": "positional-encoding-q1",
        "prompt": "Without positions, transformers risk…",
        "options": [
          {
            "id": "o0",
            "text": "Perfect grammar always"
          },
          {
            "id": "o1",
            "text": "Losing word-order information"
          },
          {
            "id": "o2",
            "text": "Faster DNS"
          },
          {
            "id": "o3",
            "text": "Bigger monitors"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Order must be injected."
      },
      {
        "id": "positional-encoding-q2",
        "prompt": "RoPE is…",
        "options": [
          {
            "id": "o0",
            "text": "A climbing sport only"
          },
          {
            "id": "o1",
            "text": "A positional method used in many LLMs"
          },
          {
            "id": "o2",
            "text": "A database"
          },
          {
            "id": "o3",
            "text": "A CSS unit"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Rotary positions."
      },
      {
        "id": "positional-encoding-q3",
        "prompt": "Dog bites man vs man bites dog shows…",
        "options": [
          {
            "id": "o0",
            "text": "Positions do not matter"
          },
          {
            "id": "o1",
            "text": "Order changes meaning"
          },
          {
            "id": "o2",
            "text": "Tokens are pixels"
          },
          {
            "id": "o3",
            "text": "Models ignore verbs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Order encodes meaning."
      }
    ],
    "prevConceptId": "embeddings",
    "nextConceptId": "self-attention"
  },
  {
    "id": "self-attention",
    "categoryId": "how-llms-work",
    "title": "Self-Attention",
    "subtitle": "Each token gathers relevant context from others",
    "difficulty": "intermediate",
    "estimatedMinutes": 10,
    "prerequisites": [
      "positional-encoding"
    ],
    "laymanSummary": "Self-attention lets every token build a new representation by taking a weighted mix of other tokens information. Weights come from compatibility between queries and keys; values carry the content mixed in. This is how context disambiguates words like bank.",
    "analogy": "In a meeting, you glance more at people relevant to your current sentence—not equally at everyone forever.",
    "explanation": [
      "Query, Key, Value projections create attention scores.",
      "Softmax turns scores into weights.",
      "Weighted values form the output.",
      "Causal masks prevent looking ahead in decoders.",
      "Attention is powerful but quadratic in sequence length."
    ],
    "keyTerms": [
      {
        "term": "Query",
        "definition": "What I am looking for"
      },
      {
        "term": "Key",
        "definition": "What I contain for matching"
      },
      {
        "term": "Value",
        "definition": "Information I contribute when selected"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Self-Attention — visual walkthrough",
      "description": "Step through the core idea behind Self-Attention.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Each token makes Q, K, V.",
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
          "caption": "Score Q against all K.",
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
          "caption": "Softmax yields attention weights.",
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
          "caption": "Mix V by those weights.",
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
          "caption": "New contextual vectors appear.",
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
      "title": "What should “bank” attend to?",
      "description": "Change sentence context and see focus shift.",
      "fixture": {
        "options": [
          "river bank erosion",
          "bank account balance"
        ],
        "insights": {
          "river bank erosion": "Attend to river/erosion senses of bank.",
          "bank account balance": "Attend to money/account senses of bank."
        },
        "selected": "river bank erosion"
      }
    },
    "realWorldExample": {
      "title": "Pronoun resolution",
      "story": "Attention helps bind pronouns to the right noun.",
      "takeaway": "Context selection is core to understanding."
    },
    "quiz": [
      {
        "id": "self-attention-q1",
        "prompt": "Self-attention mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Sorts files"
          },
          {
            "id": "o1",
            "text": "Lets tokens gather info from other tokens"
          },
          {
            "id": "o2",
            "text": "Charges laptops"
          },
          {
            "id": "o3",
            "text": "Paints UI"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Contextual mixing."
      },
      {
        "id": "self-attention-q2",
        "prompt": "Softmax over scores produces…",
        "options": [
          {
            "id": "o0",
            "text": "Random bytes"
          },
          {
            "id": "o1",
            "text": "Attention weights"
          },
          {
            "id": "o2",
            "text": "IP leases"
          },
          {
            "id": "o3",
            "text": "PDF fonts"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Weights sum to about 1."
      },
      {
        "id": "self-attention-q3",
        "prompt": "Causal masking stops…",
        "options": [
          {
            "id": "o0",
            "text": "All learning"
          },
          {
            "id": "o1",
            "text": "Looking at future tokens while decoding"
          },
          {
            "id": "o2",
            "text": "Using GPUs"
          },
          {
            "id": "o3",
            "text": "Saving logs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "No peeking ahead."
      }
    ],
    "prevConceptId": "positional-encoding",
    "nextConceptId": "multi-head-attention"
  },
  {
    "id": "multi-head-attention",
    "categoryId": "how-llms-work",
    "title": "Multi-Head Attention",
    "subtitle": "Several attention perspectives in parallel",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "self-attention"
    ],
    "laymanSummary": "Multi-head attention runs several attention operations in parallel, each potentially specializing in different relationship types, then concatenates results. More heads increase expressive capacity at a compute cost.",
    "analogy": "Multiple specialists reading the same paragraph: one tracks subjects, one tracks numbers, one tracks quotes.",
    "explanation": [
      "Split Q/K/V into heads.",
      "Each head attends independently.",
      "Concatenate head outputs.",
      "Project back to model dimension.",
      "Heads can specialize but are not guaranteed interpretable."
    ],
    "keyTerms": [
      {
        "term": "Attention head",
        "definition": "One parallel attention subspace"
      },
      {
        "term": "Model dimension",
        "definition": "Width of token vectors"
      },
      {
        "term": "Concatenation",
        "definition": "Joining head outputs"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Multi-Head Attention — visual walkthrough",
      "description": "Step through the core idea behind Multi-Head Attention.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Start with token vectors.",
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
          "caption": "Project into multiple QKV sets.",
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
          "caption": "Heads attend in parallel.",
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
          "caption": "Merge head outputs.",
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
          "caption": "Feed the combined signal onward.",
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
          "1 head only",
          "8 heads",
          "512 heads on a tiny model"
        ],
        "insights": {
          "1 head only": "Less diverse relational capacity.",
          "8 heads": "Common practical setting.",
          "512 heads on a tiny model": "Diminishing returns risk."
        },
        "selected": "1 head only"
      }
    },
    "realWorldExample": {
      "title": "Translation alignments",
      "story": "Different heads may track different alignment patterns.",
      "takeaway": "Parallel perspectives enrich representations."
    },
    "quiz": [
      {
        "id": "multi-head-attention-q1",
        "prompt": "Multi-head means…",
        "options": [
          {
            "id": "o0",
            "text": "Many computers under a desk"
          },
          {
            "id": "o1",
            "text": "Parallel attention subspaces"
          },
          {
            "id": "o2",
            "text": "Many CSS files"
          },
          {
            "id": "o3",
            "text": "Multiple passwords"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Parallel heads."
      },
      {
        "id": "multi-head-attention-q2",
        "prompt": "Heads are always human-interpretable.",
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
            "text": "Only Fridays"
          },
          {
            "id": "o3",
            "text": "Only in JSON"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Specialization is emergent, not guaranteed."
      },
      {
        "id": "multi-head-attention-q3",
        "prompt": "Outputs of heads are typically…",
        "options": [
          {
            "id": "o0",
            "text": "Deleted"
          },
          {
            "id": "o1",
            "text": "Concatenated and projected"
          },
          {
            "id": "o2",
            "text": "Converted to MP3"
          },
          {
            "id": "o3",
            "text": "Emailed"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Merge then continue."
      }
    ],
    "prevConceptId": "self-attention",
    "nextConceptId": "feed-forward-network"
  },
  {
    "id": "feed-forward-network",
    "categoryId": "how-llms-work",
    "title": "Feed-Forward Network",
    "subtitle": "Per-token MLP that refines representations",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "multi-head-attention"
    ],
    "laymanSummary": "After attention mixes information across tokens, a position-wise feed-forward network transforms each token vector independently. Intuitively, attention is communication; the FFN is private computation.",
    "analogy": "Group discussion (attention) then each person quietly rewrites their notes (FFN).",
    "explanation": [
      "FFN applies the same MLP at each position.",
      "Usually expand, nonlinearity, project back.",
      "Pairs with attention inside each block.",
      "Holds substantial parameter count in LLMs."
    ],
    "keyTerms": [
      {
        "term": "FFN / MLP",
        "definition": "Position-wise feed-forward layers"
      },
      {
        "term": "GeLU/ReLU",
        "definition": "Common nonlinearities"
      },
      {
        "term": "Block",
        "definition": "Attention plus FFN unit with residuals/norms"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Feed-Forward Network — visual walkthrough",
      "description": "Step through the core idea behind Feed-Forward Network.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Contextual vectors leave attention.",
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
          "caption": "Each position enters the MLP.",
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
          "caption": "Hidden width expands.",
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
          "caption": "Nonlinear transform applied.",
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
          "caption": "Projected vectors continue.",
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
          "Remove FFN",
          "Remove attention",
          "Keep both"
        ],
        "insights": {
          "Remove FFN": "Loses heavy per-token computation.",
          "Remove attention": "Tokens cannot share context well.",
          "Keep both": "Standard transformer block."
        },
        "selected": "Remove FFN"
      }
    },
    "realWorldExample": {
      "title": "Factual association research",
      "story": "Studies suggest FFNs play a large role in storing associations.",
      "takeaway": "Attention routes; FFNs often compute and store."
    },
    "quiz": [
      {
        "id": "feed-forward-network-q1",
        "prompt": "FFN operates…",
        "options": [
          {
            "id": "o0",
            "text": "Across users private emails by default"
          },
          {
            "id": "o1",
            "text": "Position-wise on each token vector"
          },
          {
            "id": "o2",
            "text": "Only without math"
          },
          {
            "id": "o3",
            "text": "On CSS selectors"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Per position."
      },
      {
        "id": "feed-forward-network-q2",
        "prompt": "Attention vs FFN intuition…",
        "options": [
          {
            "id": "o0",
            "text": "Attention mixes across tokens; FFN transforms each"
          },
          {
            "id": "o1",
            "text": "FFN replaces tokenization"
          },
          {
            "id": "o2",
            "text": "Neither uses numbers"
          },
          {
            "id": "o3",
            "text": "Both are databases"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Communicate vs compute."
      },
      {
        "id": "feed-forward-network-q3",
        "prompt": "FFNs usually…",
        "options": [
          {
            "id": "o0",
            "text": "Shrink then disappear"
          },
          {
            "id": "o1",
            "text": "Expand then project back"
          },
          {
            "id": "o2",
            "text": "Ban softmax"
          },
          {
            "id": "o3",
            "text": "Delete residuals"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Expand-contract pattern."
      }
    ],
    "prevConceptId": "multi-head-attention",
    "nextConceptId": "residual-connections"
  },
  {
    "id": "residual-connections",
    "categoryId": "how-llms-work",
    "title": "Residual Connections",
    "subtitle": "Add the input back to ease deep training",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "feed-forward-network"
    ],
    "laymanSummary": "Residual connections add a block input to its output so layers learn residual updates rather than whole transformations from scratch. This stabilizes deep stacks and improves gradient flow.",
    "analogy": "Editing with track changes: keep the original and add a delta instead of rewriting the whole essay each time.",
    "explanation": [
      "Output is roughly input plus layer(input).",
      "Helps train very deep nets.",
      "Used around attention and FFN sublayers.",
      "Works with normalization for stability."
    ],
    "keyTerms": [
      {
        "term": "Residual",
        "definition": "Skip connection adding input to output"
      },
      {
        "term": "Gradient flow",
        "definition": "How error signals propagate backward"
      },
      {
        "term": "Sublayer",
        "definition": "Attention or FFN unit inside a block"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Residual Connections — visual walkthrough",
      "description": "Step through the core idea behind Residual Connections.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Token vector enters a sublayer.",
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
          "caption": "Sublayer computes an update.",
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
          "caption": "Add update to original.",
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
          "caption": "Normalized result proceeds.",
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
          "caption": "Deep stacks remain trainable.",
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
          "Plain stack no skips",
          "Residual stack",
          "Zero the input path"
        ],
        "insights": {
          "Plain stack no skips": "Harder to train deep.",
          "Residual stack": "Standard stable approach.",
          "Zero the input path": "Breaks the skip benefit."
        },
        "selected": "Plain stack no skips"
      }
    },
    "realWorldExample": {
      "title": "Deeper models, fewer crashes",
      "story": "Residuals were key to training very deep nets.",
      "takeaway": "Architecture details unlock depth."
    },
    "quiz": [
      {
        "id": "residual-connections-q1",
        "prompt": "Residuals add…",
        "options": [
          {
            "id": "o0",
            "text": "Random noise always"
          },
          {
            "id": "o1",
            "text": "Input back to sublayer output"
          },
          {
            "id": "o2",
            "text": "Extra taxes"
          },
          {
            "id": "o3",
            "text": "CSS margins"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "x + F(x)."
      },
      {
        "id": "residual-connections-q2",
        "prompt": "They help mainly by…",
        "options": [
          {
            "id": "o0",
            "text": "Improving gradient flow"
          },
          {
            "id": "o1",
            "text": "Deleting data"
          },
          {
            "id": "o2",
            "text": "Removing GPUs"
          },
          {
            "id": "o3",
            "text": "Banning batching"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Depth becomes trainable."
      },
      {
        "id": "residual-connections-q3",
        "prompt": "Transformers use residuals…",
        "options": [
          {
            "id": "o0",
            "text": "Never"
          },
          {
            "id": "o1",
            "text": "Around major sublayers"
          },
          {
            "id": "o2",
            "text": "Only in CSS"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Standard pattern."
      }
    ],
    "prevConceptId": "feed-forward-network",
    "nextConceptId": "layer-normalization"
  },
  {
    "id": "layer-normalization",
    "categoryId": "how-llms-work",
    "title": "Layer Normalization",
    "subtitle": "Stabilize activations across features",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "residual-connections"
    ],
    "laymanSummary": "Layer normalization rescales activations across features for each token so values stay well-behaved through deep stacks. Combined with residuals, it stabilizes training. Placement (pre-norm vs post-norm) varies by architecture.",
    "analogy": "Auto-adjusting microphone gain so each singer sits in a healthy volume range before the next effect pedal.",
    "explanation": [
      "Normalize mean and variance across features.",
      "Learned scale and bias restore flexibility.",
      "Pre-norm is common in modern LLMs.",
      "Stabilizes deep residual pipelines."
    ],
    "keyTerms": [
      {
        "term": "LayerNorm",
        "definition": "Per-token feature normalization"
      },
      {
        "term": "Pre-norm",
        "definition": "Normalize before sublayer"
      },
      {
        "term": "Activation scale",
        "definition": "Magnitude of neuron outputs"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Layer Normalization — visual walkthrough",
      "description": "Step through the core idea behind Layer Normalization.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Vector enters with uneven magnitudes.",
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
          "caption": "Compute mean and variance.",
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
          "caption": "Normalize.",
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
          "caption": "Apply learned scale and bias.",
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
          "caption": "Sublayer receives stable inputs.",
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
          "No normalization",
          "LayerNorm",
          "BatchNorm style only"
        ],
        "insights": {
          "No normalization": "Training can become brittle.",
          "LayerNorm": "Standard in transformers.",
          "BatchNorm style only": "Less common for variable-length NLP."
        },
        "selected": "No normalization"
      }
    },
    "realWorldExample": {
      "title": "Training deep chat models",
      "story": "Norm choices affect convergence speed and stability.",
      "takeaway": "Small engineering choices, large training impact."
    },
    "quiz": [
      {
        "id": "layer-normalization-q1",
        "prompt": "LayerNorm mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Deletes tokens"
          },
          {
            "id": "o1",
            "text": "Stabilizes feature scales"
          },
          {
            "id": "o2",
            "text": "Paints icons"
          },
          {
            "id": "o3",
            "text": "Sets DNS"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Stabilization."
      },
      {
        "id": "layer-normalization-q2",
        "prompt": "Pre-norm means…",
        "options": [
          {
            "id": "o0",
            "text": "Norm after optimizer"
          },
          {
            "id": "o1",
            "text": "Normalize before the sublayer"
          },
          {
            "id": "o2",
            "text": "No residuals"
          },
          {
            "id": "o3",
            "text": "No attention"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Placement variant."
      },
      {
        "id": "layer-normalization-q3",
        "prompt": "Norm works with residuals to…",
        "options": [
          {
            "id": "o0",
            "text": "Make depth trainable"
          },
          {
            "id": "o1",
            "text": "Remove datasets"
          },
          {
            "id": "o2",
            "text": "Ban GPUs"
          },
          {
            "id": "o3",
            "text": "Replace loss"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stability pair."
      }
    ],
    "prevConceptId": "residual-connections",
    "nextConceptId": "encoder-decoder-types"
  },
  {
    "id": "encoder-decoder-types",
    "categoryId": "how-llms-work",
    "title": "Encoder/Decoder types",
    "subtitle": "BERT-like, GPT-like, and seq2seq layouts",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "layer-normalization"
    ],
    "laymanSummary": "Transformer families differ by attention layout. Encoder-only models bidirectional-encode inputs. Decoder-only models causally generate left-to-right. Encoder-decoder models encode a source then decode a target.",
    "analogy": "Encoder is reading comprehension; decoder is writing with only past drafts visible; encoder-decoder is read then write.",
    "explanation": [
      "Encoder: bidirectional context.",
      "Decoder: causal mask for generation.",
      "Encoder-decoder: conditional generation.",
      "Choose by task: understand, generate, or transform."
    ],
    "keyTerms": [
      {
        "term": "Causal mask",
        "definition": "Block attending to future tokens"
      },
      {
        "term": "Bidirectional",
        "definition": "See left and right context"
      },
      {
        "term": "Seq2seq",
        "definition": "Map an input sequence to an output sequence"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Encoder/Decoder types — visual walkthrough",
      "description": "Step through the core idea behind Encoder/Decoder types.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Task appears: classify, chat, or translate.",
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
          "caption": "Pick architecture family.",
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
          "caption": "Wire attention masks accordingly.",
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
          "caption": "Train objective matches layout.",
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
          "caption": "Deploy the right interface.",
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
          "Spam classify",
          "Write a story",
          "Translate docs"
        ],
        "insights": {
          "Spam classify": "Encoder/classifier style.",
          "Write a story": "Decoder-only generation.",
          "Translate docs": "Encoder-decoder strong classic."
        },
        "selected": "Spam classify"
      }
    },
    "realWorldExample": {
      "title": "T5-style unification",
      "story": "Many NLP tasks cast as text-to-text with encoder-decoder models.",
      "takeaway": "Layout follows the information flow you need."
    },
    "quiz": [
      {
        "id": "encoder-decoder-types-q1",
        "prompt": "Chat GPTs are typically…",
        "options": [
          {
            "id": "o0",
            "text": "Encoder-only"
          },
          {
            "id": "o1",
            "text": "Decoder-only"
          },
          {
            "id": "o2",
            "text": "Spreadsheets"
          },
          {
            "id": "o3",
            "text": "Routers"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Causal decoders."
      },
      {
        "id": "encoder-decoder-types-q2",
        "prompt": "BERT-like models are…",
        "options": [
          {
            "id": "o0",
            "text": "Encoder-oriented"
          },
          {
            "id": "o1",
            "text": "Only diffusion"
          },
          {
            "id": "o2",
            "text": "Only audio"
          },
          {
            "id": "o3",
            "text": "Only CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Bidirectional encoders."
      },
      {
        "id": "encoder-decoder-types-q3",
        "prompt": "Translation classic fit…",
        "options": [
          {
            "id": "o0",
            "text": "Encoder-decoder"
          },
          {
            "id": "o1",
            "text": "No neural nets"
          },
          {
            "id": "o2",
            "text": "Only regex"
          },
          {
            "id": "o3",
            "text": "Only FTP"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Seq2seq."
      }
    ],
    "prevConceptId": "layer-normalization",
    "nextConceptId": "autoregressive-decoding"
  },
  {
    "id": "autoregressive-decoding",
    "categoryId": "how-llms-work",
    "title": "Autoregressive Decoding",
    "subtitle": "Generate the next token using past tokens only",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "encoder-decoder-types"
    ],
    "laymanSummary": "Autoregressive decoding produces tokens one by one, each conditioned on previously generated tokens and the prompt. That is why chat models stream words and why early mistakes can cascade.",
    "analogy": "Writing a sentence aloud without erasing: each new word must fit what you already said.",
    "explanation": [
      "Predict token t given tokens before t.",
      "Append sample and repeat.",
      "Streaming UX matches this loop.",
      "Errors compound; decoding strategy matters."
    ],
    "keyTerms": [
      {
        "term": "Autoregressive",
        "definition": "Left-to-right sequential generation"
      },
      {
        "term": "Prefix",
        "definition": "Tokens already fixed"
      },
      {
        "term": "Stop condition",
        "definition": "EOS token or max length"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Autoregressive Decoding — visual walkthrough",
      "description": "Step through the core idea behind Autoregressive Decoding.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Prompt tokens fixed.",
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
          "caption": "Model predicts next distribution.",
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
          "caption": "Sample or argmax a token.",
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
          "caption": "Append to prefix.",
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
          "caption": "Repeat until stop.",
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
          "Greedy top token",
          "Sample with temperature",
          "Beam search for short outputs"
        ],
        "insights": {
          "Greedy top token": "Deterministic but can be dull.",
          "Sample with temperature": "More variety; needs tuning.",
          "Beam search for short outputs": "Classic for some structured tasks."
        },
        "selected": "Greedy top token"
      }
    },
    "realWorldExample": {
      "title": "Live token streaming",
      "story": "UIs show partial answers as tokens arrive.",
      "takeaway": "AR decoding enables incremental UX."
    },
    "quiz": [
      {
        "id": "autoregressive-decoding-q1",
        "prompt": "Autoregressive models generate…",
        "options": [
          {
            "id": "o0",
            "text": "All tokens independently at once always"
          },
          {
            "id": "o1",
            "text": "Sequentially conditioned on the past"
          },
          {
            "id": "o2",
            "text": "Only images"
          },
          {
            "id": "o3",
            "text": "Only hashes"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Sequential conditioning."
      },
      {
        "id": "autoregressive-decoding-q2",
        "prompt": "An early wrong token can…",
        "options": [
          {
            "id": "o0",
            "text": "Never matter"
          },
          {
            "id": "o1",
            "text": "Steer later tokens off course"
          },
          {
            "id": "o2",
            "text": "Speed up light"
          },
          {
            "id": "o3",
            "text": "Fix DNS"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Error cascade."
      },
      {
        "id": "autoregressive-decoding-q3",
        "prompt": "Streaming is natural because…",
        "options": [
          {
            "id": "o0",
            "text": "Tokens arrive one after another"
          },
          {
            "id": "o1",
            "text": "Browsers forbid text"
          },
          {
            "id": "o2",
            "text": "GPUs hate math"
          },
          {
            "id": "o3",
            "text": "CSS forbids words"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Sequential emission."
      }
    ],
    "prevConceptId": "encoder-decoder-types",
    "nextConceptId": "next-token-prediction"
  },
  {
    "id": "next-token-prediction",
    "categoryId": "how-llms-work",
    "title": "Next-Token Prediction",
    "subtitle": "The core training and inference objective",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "autoregressive-decoding"
    ],
    "laymanSummary": "Next-token prediction asks: given previous tokens, what is the probability distribution over the next token? Pretraining minimizes error on this task at scale; inference samples from it. Rich behaviors emerge without guaranteeing truth.",
    "analogy": "A fill-in-the-next-word game played billions of times until the player becomes an expert stylist of continuations.",
    "explanation": [
      "Loss compares predicted distribution vs actual next token.",
      "Inference samples from the distribution.",
      "Capabilities emerge from objective plus data.",
      "Calibration and factuality still need extra systems."
    ],
    "keyTerms": [
      {
        "term": "Logits",
        "definition": "Raw scores before softmax"
      },
      {
        "term": "Softmax",
        "definition": "Convert scores to probabilities"
      },
      {
        "term": "Teacher forcing",
        "definition": "Train on true prefixes"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Next-Token Prediction — visual walkthrough",
      "description": "Step through the core idea behind Next-Token Prediction.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Prefix: The cat sat on the.",
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
          "caption": "Model outputs scores for many tokens.",
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
          "caption": "Softmax yields probabilities.",
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
          "caption": "mat ranks high.",
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
          "caption": "Sample and continue.",
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
      "kind": "decode-sampler",
      "title": "Predict the next token",
      "description": "Inspect top candidate tokens for a prefix.",
      "fixture": {
        "prefix": "The cat sat on the",
        "candidates": [
          {
            "t": "mat",
            "p": 0.42
          },
          {
            "t": "floor",
            "p": 0.18
          },
          {
            "t": "couch",
            "p": 0.12
          },
          {
            "t": "moon",
            "p": 0.01
          }
        ]
      }
    },
    "realWorldExample": {
      "title": "Email subject autocomplete",
      "story": "Productive continuation without understanding your whole company.",
      "takeaway": "Prediction is not verified knowledge."
    },
    "quiz": [
      {
        "id": "next-token-prediction-q1",
        "prompt": "The core LLM objective is…",
        "options": [
          {
            "id": "o0",
            "text": "Next-token prediction"
          },
          {
            "id": "o1",
            "text": "Sorting arrays"
          },
          {
            "id": "o2",
            "text": "Compiling C"
          },
          {
            "id": "o3",
            "text": "Rendering CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "NTP."
      },
      {
        "id": "next-token-prediction-q2",
        "prompt": "Softmax turns logits into…",
        "options": [
          {
            "id": "o0",
            "text": "Files"
          },
          {
            "id": "o1",
            "text": "Probabilities"
          },
          {
            "id": "o2",
            "text": "Pods"
          },
          {
            "id": "o3",
            "text": "Fonts"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Distributions."
      },
      {
        "id": "next-token-prediction-q3",
        "prompt": "Fluent next tokens imply true facts.",
        "options": [
          {
            "id": "o0",
            "text": "Always"
          },
          {
            "id": "o1",
            "text": "Not necessarily"
          },
          {
            "id": "o2",
            "text": "Never useful"
          },
          {
            "id": "o3",
            "text": "Only in Latin"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Fluency is not truth."
      }
    ],
    "prevConceptId": "autoregressive-decoding",
    "nextConceptId": "temperature-top-k-top-p"
  },
  {
    "id": "temperature-top-k-top-p",
    "categoryId": "how-llms-work",
    "title": "Temperature / Top-k / Top-p",
    "subtitle": "Knobs that shape randomness of sampling",
    "difficulty": "intermediate",
    "estimatedMinutes": 9,
    "prerequisites": [
      "next-token-prediction"
    ],
    "laymanSummary": "Decoding strategies reshape the next-token distribution. Temperature softens or sharpens probabilities. Top-k keeps only k highest tokens; top-p keeps the smallest set whose cumulative probability exceeds p. These knobs trade creativity versus stability.",
    "analogy": "Temperature is spice level; top-k and top-p cut off absurd ingredients.",
    "explanation": [
      "Temperature divides logits before softmax.",
      "Low temp is peaky; high temp is flatter.",
      "Top-k and top-p truncate the tail.",
      "Task-dependent tuning beats dogma."
    ],
    "keyTerms": [
      {
        "term": "Temperature",
        "definition": "Softmax sharpness control"
      },
      {
        "term": "Top-k",
        "definition": "Keep k best tokens"
      },
      {
        "term": "Top-p / nucleus",
        "definition": "Keep probability mass at least p"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Temperature / Top-k / Top-p — visual walkthrough",
      "description": "Step through the core idea behind Temperature / Top-k / Top-p.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Model yields raw logits.",
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
          "caption": "Apply temperature scaling.",
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
          "caption": "Optionally mask with top-k or top-p.",
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
          "caption": "Softmax on reduced set.",
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
          "caption": "Sample the next token.",
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
      "kind": "temperature",
      "title": "Tune sampling randomness",
      "description": "Adjust temperature and see distribution sharpness.",
      "fixture": {
        "labels": [
          "mat",
          "floor",
          "couch",
          "window",
          "moon"
        ],
        "logits": [
          3.2,
          2.1,
          1.7,
          0.4,
          -1
        ]
      }
    },
    "realWorldExample": {
      "title": "Creative copy vs legal boilerplate",
      "story": "Marketing wants higher temperature; contracts want near-greedy decoding.",
      "takeaway": "Match sampler to risk tolerance."
    },
    "quiz": [
      {
        "id": "temperature-top-k-top-p-q1",
        "prompt": "Higher temperature generally…",
        "options": [
          {
            "id": "o0",
            "text": "Always increases factuality"
          },
          {
            "id": "o1",
            "text": "Flattens distribution toward more randomness"
          },
          {
            "id": "o2",
            "text": "Deletes context"
          },
          {
            "id": "o3",
            "text": "Removes GPUs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "More random."
      },
      {
        "id": "temperature-top-k-top-p-q2",
        "prompt": "Top-p sampling keeps…",
        "options": [
          {
            "id": "o0",
            "text": "All tokens always"
          },
          {
            "id": "o1",
            "text": "A dynamic nucleus of probability mass"
          },
          {
            "id": "o2",
            "text": "Only verbs"
          },
          {
            "id": "o3",
            "text": "Only digits"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Nucleus."
      },
      {
        "id": "temperature-top-k-top-p-q3",
        "prompt": "For strict formatting, prefer…",
        "options": [
          {
            "id": "o0",
            "text": "Maximum chaos"
          },
          {
            "id": "o1",
            "text": "Lower temperature or constrained decoding"
          },
          {
            "id": "o2",
            "text": "Infinite temperature"
          },
          {
            "id": "o3",
            "text": "No evaluation"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Stability first."
      }
    ],
    "prevConceptId": "next-token-prediction",
    "nextConceptId": "text-generation-loop"
  },
  {
    "id": "text-generation-loop",
    "categoryId": "how-llms-work",
    "title": "Text Generation Loop",
    "subtitle": "The full prompt to sample to append cycle",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "temperature-top-k-top-p"
    ],
    "laymanSummary": "The generation loop tokenizes the prompt, repeatedly samples a next token under the decoding policy, appends it, and stops on end-of-sequence, max length, or a stop string. Tool-using apps insert actions inside or around this loop.",
    "analogy": "A typewriter that guesses the next character, types it, then guesses again until it stops.",
    "explanation": [
      "Encode prompt.",
      "Decode step-by-step.",
      "Apply stop rules.",
      "Detokenize to text.",
      "Optionally stream partial results."
    ],
    "keyTerms": [
      {
        "term": "EOS",
        "definition": "End-of-sequence token"
      },
      {
        "term": "Max tokens",
        "definition": "Hard length cap"
      },
      {
        "term": "Stop sequence",
        "definition": "String that halts generation"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Text Generation Loop — visual walkthrough",
      "description": "Step through the core idea behind Text Generation Loop.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Receive prompt.",
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
          "caption": "Tokenize.",
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
          "caption": "Sample next token.",
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
          "caption": "Append and check stops.",
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
          "caption": "Detokenize and return.",
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
          "Stop on EOS",
          "Stop on code fence",
          "Hit max tokens mid-sentence"
        ],
        "insights": {
          "Stop on EOS": "Natural completion.",
          "Stop on code fence": "Useful for code block control.",
          "Hit max tokens mid-sentence": "Truncation artifact."
        },
        "selected": "Stop on EOS"
      }
    },
    "realWorldExample": {
      "title": "Chat UX streaming",
      "story": "Tokens appear as the loop runs for perceived speed.",
      "takeaway": "Loop mechanics shape product feel."
    },
    "quiz": [
      {
        "id": "text-generation-loop-q1",
        "prompt": "Generation stops when…",
        "options": [
          {
            "id": "o0",
            "text": "EOS, max, or stop hit"
          },
          {
            "id": "o1",
            "text": "The sun explodes only"
          },
          {
            "id": "o2",
            "text": "CSS loads"
          },
          {
            "id": "o3",
            "text": "DNS fails"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stop conditions."
      },
      {
        "id": "text-generation-loop-q2",
        "prompt": "Appending tokens updates…",
        "options": [
          {
            "id": "o0",
            "text": "The prefix for the next prediction"
          },
          {
            "id": "o1",
            "text": "Only the footer CSS"
          },
          {
            "id": "o2",
            "text": "Kubernetes"
          },
          {
            "id": "o3",
            "text": "The BIOS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "AR state."
      },
      {
        "id": "text-generation-loop-q3",
        "prompt": "Detokenization converts…",
        "options": [
          {
            "id": "o0",
            "text": "IDs back to text"
          },
          {
            "id": "o1",
            "text": "Text to electricity"
          },
          {
            "id": "o2",
            "text": "Pods to fonts"
          },
          {
            "id": "o3",
            "text": "JSON to rain"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Readable output."
      }
    ],
    "prevConceptId": "temperature-top-k-top-p",
    "nextConceptId": "why-hallucinations-happen"
  },
  {
    "id": "why-hallucinations-happen",
    "categoryId": "how-llms-work",
    "title": "Why Hallucinations Happen",
    "subtitle": "Fluent guesses without grounded truth checks",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "text-generation-loop"
    ],
    "laymanSummary": "Hallucinations happen because models optimize for plausible continuations, not verified world state. When context is missing or conflicting, the model still produces confident-sounding text. Decoding randomness, outdated data, and prompts that forbid uncertainty amplify the issue.",
    "analogy": "A skilled improv actor who never says I do not know unless trained to—and invents details to keep the scene going.",
    "explanation": [
      "Objective is plausible tokens, not database lookup.",
      "Gaps get filled with likely-sounding content.",
      "Prompts can demand answers without uncertainty.",
      "Mitigations include retrieval, tools, citations, refusals, and evals."
    ],
    "keyTerms": [
      {
        "term": "Hallucination",
        "definition": "Confident false or unverifiable content"
      },
      {
        "term": "Grounding",
        "definition": "Tying answers to sources or tools"
      },
      {
        "term": "Calibration",
        "definition": "Matching confidence to correctness"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Why Hallucinations Happen — visual walkthrough",
      "description": "Step through the core idea behind Why Hallucinations Happen.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Hard question, weak evidence.",
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
          "caption": "Model still must emit tokens.",
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
          "caption": "Prior patterns suggest a tidy answer.",
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
          "caption": "Fluent falsehood appears.",
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
          "caption": "Grounding systems could interrupt.",
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
          "Answer with sources only",
          "Force an answer with no context",
          "Allow I am not sure"
        ],
        "insights": {
          "Answer with sources only": "Reduces unsupported claims.",
          "Force an answer with no context": "Hallucination bait.",
          "Allow I am not sure": "Healthy uncertainty."
        },
        "selected": "Answer with sources only"
      }
    },
    "realWorldExample": {
      "title": "Fake case citations",
      "story": "Legal tools invented case law that looked real.",
      "takeaway": "High-stakes domains need grounding and verification."
    },
    "quiz": [
      {
        "id": "why-hallucinations-happen-q1",
        "prompt": "Hallucinations stem largely from…",
        "options": [
          {
            "id": "o0",
            "text": "Optimizing plausible text without guaranteed grounding"
          },
          {
            "id": "o1",
            "text": "Evil GPUs"
          },
          {
            "id": "o2",
            "text": "CSS bugs"
          },
          {
            "id": "o3",
            "text": "USB-C"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Plausibility objective."
      },
      {
        "id": "why-hallucinations-happen-q2",
        "prompt": "A useful mitigation is…",
        "options": [
          {
            "id": "o0",
            "text": "Never evaluate"
          },
          {
            "id": "o1",
            "text": "RAG, tools, and verification"
          },
          {
            "id": "o2",
            "text": "Delete logs"
          },
          {
            "id": "o3",
            "text": "Raise temperature always"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Ground and check."
      },
      {
        "id": "why-hallucinations-happen-q3",
        "prompt": "Fluency guarantees truth.",
        "options": [
          {
            "id": "o0",
            "text": "Yes"
          },
          {
            "id": "o1",
            "text": "No"
          },
          {
            "id": "o2",
            "text": "Only in poetry"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "No."
      }
    ],
    "prevConceptId": "text-generation-loop"
  }
] as Concept[];
