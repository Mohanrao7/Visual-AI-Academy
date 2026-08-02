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
    "laymanSummary": "ChatGPT never reads raw letters—it first chops your message into tokens (chunks with numeric IDs). Those IDs are what the model actually processes.",
    "analogy": "Like cutting a sentence into LEGO bricks and labeling each brick with a number before assembly.",
    "explanation": [
      "Your ChatGPT message is split into tokens—often whole words, sometimes pieces like “ing”.",
      "Each token maps to an ID from a fixed list the model was trained with.",
      "Token count drives context limits and (on APIs) billing—not always word count.",
      "Rare names, code, or math can split awkwardly and confuse the model."
    ],
    "keyTerms": [
      {
        "term": "Token",
        "definition": "Text chunk the model reads as one unit"
      },
      {
        "term": "Tokenizer",
        "definition": "Tool that turns text into token IDs"
      },
      {
        "term": "Subword",
        "definition": "Piece of a word used as a token"
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
      "title": "Why a short ChatGPT prompt still “costs” tokens",
      "story": "You paste a code snippet into ChatGPT asking for a bug fix. It looks like 40 words, but the tokenizer splits symbols and names into many tokens. The reply also uses tokens, so a “short” chat can still fill the window fast.",
      "takeaway": "Count tokens, not just words, when chatting or calling an API."
    },
    "chatGptLens": {
      "setting": "You open ChatGPT and type a normal homework question.",
      "userInput": "Explain recursion with a Python example.",
      "insideTheModel": "Tokenization splits that sentence into IDs (maybe “Explain”, “ recursion”, “ with”, …) before any understanding step runs.",
      "modelOutput": "A short recursion explanation and a small function—assembled from tokens chosen one after another."
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
        "prompt": "Why might “ChatGPT” and a rare last name use different numbers of tokens?",
        "options": [
          {
            "id": "o0",
            "text": "Tokenizers ignore English"
          },
          {
            "id": "o1",
            "text": "Common chunks share IDs; rare text splits into more pieces"
          },
          {
            "id": "o2",
            "text": "Names are never tokenized"
          },
          {
            "id": "o3",
            "text": "Tokens only exist for numbers"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Rare strings often need several subword tokens."
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
    "laymanSummary": "Vocabulary is the set of token IDs ChatGPT knows. The context window is how many tokens of chat history plus reply it can see at once.",
    "analogy": "Vocabulary is the dictionary of allowed LEGO bricks; the context window is the size of the table you can build on.",
    "explanation": [
      "Every ChatGPT token must come from its vocabulary (or be built from subwords in that vocab).",
      "The context window includes system text, your messages, prior turns, and the reply so far.",
      "Text pushed outside the window is invisible—ChatGPT cannot “remember” it unless you paste it again.",
      "Longer windows help, but they are not perfect memory of every detail."
    ],
    "keyTerms": [
      {
        "term": "Vocabulary",
        "definition": "Finite set of tokens the model knows"
      },
      {
        "term": "Context window",
        "definition": "Max tokens visible in one pass"
      },
      {
        "term": "Truncation",
        "definition": "Dropping older text that exceeds the limit"
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
      "title": "Long ChatGPT thread “forgets” the brief",
      "story": "In a long project chat you pasted requirements on day one. By day three the thread is huge; early details fall out of the context window. ChatGPT answers as if those constraints never existed.",
      "takeaway": "Re-paste key facts or summarize—don’t assume infinite chat memory."
    },
    "chatGptLens": {
      "setting": "A long ChatGPT conversation about a semester project.",
      "userInput": "Use the API format we agreed on yesterday.",
      "insideTheModel": "Only tokens still inside the context window count. If yesterday’s format scrolled out, the model never sees it for this turn.",
      "modelOutput": "A reply that may invent a plausible format—or ask again—because the real agreement is no longer in view."
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
        "prompt": "In ChatGPT, what mainly fills the context window?",
        "options": [
          {
            "id": "o0",
            "text": "Only the last word you typed"
          },
          {
            "id": "o1",
            "text": "Prompt, history, and generated tokens so far"
          },
          {
            "id": "o2",
            "text": "Your entire hard drive"
          },
          {
            "id": "o3",
            "text": "Only punctuation marks"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "The window holds the visible conversation state for that pass."
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
    "laymanSummary": "Embeddings turn tokens (or whole snippets) into lists of numbers so similar meanings sit near each other. ChatGPT uses them inside the network; search tools use them to find related text.",
    "analogy": "A map of meaning: “doctor” lands nearer “nurse” than “screwdriver.”",
    "explanation": [
      "After tokenization, each token ID becomes a vector—the embedding.",
      "Nearby vectors usually mean related meanings or roles in language.",
      "ChatGPT stacks many layers that keep refining these vectors with context.",
      "Apps also embed docs and queries to retrieve neighbors for RAG-style chat."
    ],
    "keyTerms": [
      {
        "term": "Embedding",
        "definition": "Number vector representing meaning"
      },
      {
        "term": "Vector space",
        "definition": "Map where distance means similarity"
      },
      {
        "term": "Cosine similarity",
        "definition": "Angle-based relatedness score"
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
      "title": "ChatGPT-style FAQ search before answering",
      "story": "A campus bot embeds your question “Wi-Fi dead in hostel B?” and finds FAQ chunks whose embeddings are nearby. ChatGPT (or a similar model) then answers using those chunks instead of guessing from thin air.",
      "takeaway": "Embeddings power “find related text,” not just pretty geometry."
    },
    "chatGptLens": {
      "setting": "You ask ChatGPT to rewrite a sentence in a friendlier tone.",
      "userInput": "Make this email sound less harsh: “Submit the report by Friday.”",
      "insideTheModel": "Token IDs become embedding vectors; later layers move those vectors so “harsh” and “friendly” tones are distinguished in the math.",
      "modelOutput": "A softer email like “Could you please submit the report by Friday?”"
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
        "prompt": "Why convert ChatGPT tokens into embeddings?",
        "options": [
          {
            "id": "o0",
            "text": "So the model can do math on meaning-like vectors"
          },
          {
            "id": "o1",
            "text": "To delete the vocabulary"
          },
          {
            "id": "o2",
            "text": "Only for drawing charts for users"
          },
          {
            "id": "o3",
            "text": "To skip tokenization forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Vectors let the network mix and compare meanings."
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
    "laymanSummary": "Attention mixes tokens but needs a signal for order. Positional encoding tells ChatGPT which token came first so “dog bites man” ≠ “man bites dog.”",
    "analogy": "Page numbers in a shuffled manuscript—bricks need positions to rebuild the plot.",
    "explanation": [
      "Without position info, a bag of tokens loses word order.",
      "Encodings (learned, sinusoidal, RoPE, ALiBi, etc.) inject order into vectors.",
      "ChatGPT uses this so pronouns and arguments line up with the right words.",
      "Order is meaning: swapping words can flip who did what."
    ],
    "keyTerms": [
      {
        "term": "Positional encoding",
        "definition": "Signal that marks token order"
      },
      {
        "term": "RoPE",
        "definition": "Rotary method for encoding positions"
      },
      {
        "term": "Word order",
        "definition": "Sequence that changes sentence meaning"
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
      "title": "ChatGPT follows steps in the right order",
      "story": "You ask: “First summarize, then list risks, then give a fix.” Position signals help the model treat “first/then” as sequence, not a random pile of instructions.",
      "takeaway": "Order cues in your prompt matter because the model tracks positions."
    },
    "chatGptLens": {
      "setting": "You paste two nearly identical sentences into ChatGPT.",
      "userInput": "Which is worse: “student fails exam” or “exam fails student”?",
      "insideTheModel": "Same words, different positions. Positional encoding makes those sequences look different to attention.",
      "modelOutput": "An explanation that the first blames the student, while the second is odd or metaphorical."
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
        "prompt": "What problem does positional encoding solve for ChatGPT-like models?",
        "options": [
          {
            "id": "o0",
            "text": "Billing by the minute"
          },
          {
            "id": "o1",
            "text": "Telling the model which token came in which order"
          },
          {
            "id": "o2",
            "text": "Downloading more GPUs"
          },
          {
            "id": "o3",
            "text": "Removing the vocabulary"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Order must be injected; attention alone is permutation-weak."
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
    "laymanSummary": "Self-attention lets each token look at others and pull in the useful ones. That is how ChatGPT uses “bank” with “river” vs “loan” to pick the right sense.",
    "analogy": "In a group project meeting, you glance more at the person relevant to your current sentence—not equally at everyone forever.",
    "explanation": [
      "Each token makes a query; others offer keys and values.",
      "High query–key match → higher attention weight on that value.",
      "The new vector is a weighted mix of other tokens’ information.",
      "In chat models, causal masking blocks peeking at future tokens while writing."
    ],
    "keyTerms": [
      {
        "term": "Query / Key / Value",
        "definition": "Triple used to score and mix tokens"
      },
      {
        "term": "Attention weight",
        "definition": "How much one token uses another"
      },
      {
        "term": "Causal mask",
        "definition": "Rule: cannot look ahead while generating"
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
      "title": "ChatGPT resolves “it” in your question",
      "story": "You write: “I built a Flask API. It returns 500 on /login.” Self-attention links “It” to “Flask API,” not to some earlier noun in the thread.",
      "takeaway": "Attention is how context disambiguates pronouns and jargon."
    },
    "chatGptLens": {
      "setting": "A short ChatGPT clarification about ambiguous wording.",
      "userInput": "I deposited money at the bank by the river. What does bank mean here?",
      "insideTheModel": "Self-attention lets “bank” weight “river” heavily, pulling river-side meaning instead of finance.",
      "modelOutput": "“Bank” here means the land beside the river, not a financial institution."
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
        "prompt": "In ChatGPT-style decoding, why use a causal mask in self-attention?",
        "options": [
          {
            "id": "o0",
            "text": "To stop the model peeking at future tokens while writing"
          },
          {
            "id": "o1",
            "text": "To delete embeddings"
          },
          {
            "id": "o2",
            "text": "To double the vocabulary size"
          },
          {
            "id": "o3",
            "text": "To turn off temperature"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Generation must only condition on the past."
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
    "laymanSummary": "Multi-head attention runs several attention “views” in parallel on the same tokens. ChatGPT can track grammar, numbers, and quotes at once, then merge the results.",
    "analogy": "Several specialists reading one paragraph: one tracks subjects, one tracks numbers, one tracks quoted text.",
    "explanation": [
      "One head is one attention pass with its own projections.",
      "Many heads run in parallel on the same token sequence.",
      "Outputs are concatenated (then projected) into one richer vector.",
      "More heads add capacity and cost; specializations are learned, not guaranteed labels."
    ],
    "keyTerms": [
      {
        "term": "Attention head",
        "definition": "One parallel attention pathway"
      },
      {
        "term": "Multi-head",
        "definition": "Several heads combined for richer context"
      },
      {
        "term": "Concatenation",
        "definition": "Joining head outputs into one vector"
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
      "title": "ChatGPT edits code and comments together",
      "story": "You ask ChatGPT to rename a variable and update the docstring. Different heads can emphasize identifier links vs surrounding comment words, then merge into one coherent edit.",
      "takeaway": "Multiple views help mixed tasks (code + prose) in one reply."
    },
    "chatGptLens": {
      "setting": "You paste a messy meeting note into ChatGPT.",
      "userInput": "Extract action items, owners, and deadlines from this note.",
      "insideTheModel": "Multi-head attention lets separate heads focus on verbs, names, and dates, then combine those signals.",
      "modelOutput": "A clean bullet list: task → owner → due date."
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
        "prompt": "What do multi-head attention layers typically do with head outputs?",
        "options": [
          {
            "id": "o0",
            "text": "Throw away all but one head"
          },
          {
            "id": "o1",
            "text": "Concatenate (then project) them into one representation"
          },
          {
            "id": "o2",
            "text": "Send each head to a different user"
          },
          {
            "id": "o3",
            "text": "Convert them into raw text immediately"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Heads merge so later layers see a combined signal."
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
    "laymanSummary": "After attention shares info across tokens, a feed-forward network (FFN) transforms each token’s vector on its own. Attention is the group chat; the FFN is private thinking.",
    "analogy": "Group discussion (attention), then each person quietly rewrites their notes (FFN).",
    "explanation": [
      "The FFN runs the same small MLP at every position, independently.",
      "It usually expands the vector, applies a nonlinearity, then shrinks it back.",
      "This step stores and applies lots of learned “patterns” after mixing context.",
      "In ChatGPT’s stack, attention and FFN alternate inside each layer."
    ],
    "keyTerms": [
      {
        "term": "FFN / MLP",
        "definition": "Per-token neural net after attention"
      },
      {
        "term": "Position-wise",
        "definition": "Same FFN applied at each token alone"
      },
      {
        "term": "Nonlinearity",
        "definition": "Activation that enables richer transforms"
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
      "title": "ChatGPT turns mixed context into a crisp label",
      "story": "Attention gathers clues that your paste is a stack trace. The FFN helps each token’s vector become more “error-diagnosis shaped,” so the next layers write a fix instead of a poem.",
      "takeaway": "FFN is the private compute after the context mix."
    },
    "chatGptLens": {
      "setting": "You ask ChatGPT to classify a support ticket.",
      "userInput": "Tag this: “App crashes when I upload a PDF larger than 10MB.”",
      "insideTheModel": "Attention mixes “crashes,” “upload,” and “PDF”; the FFN then transforms each token vector toward a useful category decision.",
      "modelOutput": "Something like: Category = file upload / size limit bug."
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
        "prompt": "How does the FFN differ from self-attention in a Transformer block?",
        "options": [
          {
            "id": "o0",
            "text": "FFN mixes all tokens together; attention never does"
          },
          {
            "id": "o1",
            "text": "Attention mixes across tokens; FFN transforms each token alone"
          },
          {
            "id": "o2",
            "text": "FFN only runs at training time"
          },
          {
            "id": "o3",
            "text": "They are identical operations"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Communicate (attention) vs compute per position (FFN)."
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
    "laymanSummary": "A residual connection adds a layer’s input back to its output. Deep ChatGPT stacks can tweak representations instead of rewriting them from scratch each time.",
    "analogy": "Track-changes editing: keep the original paragraph and add a delta, instead of rewriting the whole essay every pass.",
    "explanation": [
      "Pattern: output = x + Layer(x).",
      "Layers learn refinements; the original signal can still flow forward.",
      "Residuals help gradients train very deep Transformers stably.",
      "ChatGPT-style models use residuals around attention and FFN blocks."
    ],
    "keyTerms": [
      {
        "term": "Residual / skip",
        "definition": "Add block input to block output"
      },
      {
        "term": "Gradient flow",
        "definition": "How learning signals reach early layers"
      },
      {
        "term": "Identity path",
        "definition": "Route that preserves the input signal"
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
      "title": "Why a 50+ layer chat model can still train",
      "story": "Without residuals, stacking dozens of attention/FFN blocks often collapses training. Residuals let each block make a small useful update so ChatGPT-scale depth is trainable.",
      "takeaway": "Skip connections make deep chat models practical."
    },
    "chatGptLens": {
      "setting": "ChatGPT is mid-reply refining a rough draft inside its layers.",
      "userInput": "Tighten this paragraph without changing the facts.",
      "insideTheModel": "Each block proposes a change, then adds it to the incoming vector so core meaning isn’t wiped every layer.",
      "modelOutput": "A tighter paragraph that still keeps the original facts."
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
        "prompt": "What is the usual residual pattern around a Transformer block?",
        "options": [
          {
            "id": "o0",
            "text": "output = Layer(x) only, input discarded"
          },
          {
            "id": "o1",
            "text": "output = x + Layer(x)"
          },
          {
            "id": "o2",
            "text": "output = x − vocabulary size"
          },
          {
            "id": "o3",
            "text": "output = temperature × top-p"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Add the update to the original input."
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
    "laymanSummary": "Layer normalization rescales each token’s features so activations stay well-behaved through deep stacks. Together with residuals, it keeps ChatGPT-like training and inference stable.",
    "analogy": "Auto-gain on a mic: keep each singer in a healthy volume range before the next effect pedal.",
    "explanation": [
      "For each token, LayerNorm recenters/rescales across its feature dimensions.",
      "This reduces wild activation scales as depth grows.",
      "Pre-norm vs post-norm changes where norm sits relative to the residual block.",
      "Modern chat models almost always pair norms with residuals."
    ],
    "keyTerms": [
      {
        "term": "LayerNorm",
        "definition": "Per-token feature rescaling for stability"
      },
      {
        "term": "Pre-norm",
        "definition": "Normalize before the sub-layer"
      },
      {
        "term": "Activation",
        "definition": "Internal numbers flowing through layers"
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
      "title": "Long ChatGPT answers don’t “blow up” numerically",
      "story": "Generating a long solution involves many layer passes. LayerNorm keeps internal scales in a sane range so later tokens don’t become numerical garbage.",
      "takeaway": "Norm is plumbing for stable deep generation."
    },
    "chatGptLens": {
      "setting": "You ask ChatGPT for a multi-step derivation.",
      "userInput": "Walk through solving this recurrence step by step.",
      "insideTheModel": "As vectors pass many residual blocks, LayerNorm keeps each token’s features scaled so the next attention/FFN can work reliably.",
      "modelOutput": "A coherent step-by-step solution instead of a collapsed or exploding mess of tokens."
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
        "prompt": "What is LayerNorm mainly for in Transformer chat models?",
        "options": [
          {
            "id": "o0",
            "text": "Choosing the next emoji"
          },
          {
            "id": "o1",
            "text": "Stabilizing activation scales through deep layers"
          },
          {
            "id": "o2",
            "text": "Downloading fresh web pages"
          },
          {
            "id": "o3",
            "text": "Setting the UI theme"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "It keeps internal values well-behaved with depth."
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
    "laymanSummary": "Transformers come in three common layouts: encoder-only, decoder-only, and encoder–decoder. ChatGPT-style chatbots are typically decoder-only models that write left to right.",
    "analogy": "Encoder = reading comprehension; decoder = writing with only past drafts visible; encoder–decoder = read the source, then write the target.",
    "explanation": [
      "Encoder-only (e.g., BERT-style): bidirectional view of the input for understanding tasks.",
      "Decoder-only (ChatGPT-style): causal generation—each new token sees only the past.",
      "Encoder–decoder: encode a source, then decode a target (classic translation).",
      "Product choice follows the job: classify text vs chat vs translate."
    ],
    "keyTerms": [
      {
        "term": "Encoder-only",
        "definition": "Bidirectional model for understanding inputs"
      },
      {
        "term": "Decoder-only",
        "definition": "Causal left-to-right generator (chat style)"
      },
      {
        "term": "Encoder–decoder",
        "definition": "Encode source, then generate target"
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
      "title": "Why ChatGPT streams a reply",
      "story": "Chat products use decoder-only Transformers. They generate token by token, so the UI can stream words. A BERT-like encoder alone wouldn’t naturally write that open-ended chat reply.",
      "takeaway": "Architecture choice matches chat vs classify vs translate."
    },
    "chatGptLens": {
      "setting": "You compare tools: a classifier vs ChatGPT vs a translator.",
      "userInput": "Translate this Hindi sentence to English, then explain it casually.",
      "insideTheModel": "A classic translator may use encoder–decoder; ChatGPT does both jobs inside a decoder-only generate-from-prompt setup.",
      "modelOutput": "An English translation plus a friendly explanation in one streamed reply."
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
        "prompt": "Which Transformer type is ChatGPT most like?",
        "options": [
          {
            "id": "o0",
            "text": "Encoder-only only"
          },
          {
            "id": "o1",
            "text": "Decoder-only (causal) generator"
          },
          {
            "id": "o2",
            "text": "A pure rules engine with no neural net"
          },
          {
            "id": "o3",
            "text": "An image CNN with no language head"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Chat models generate left-to-right under a causal mask."
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
    "laymanSummary": "Autoregressive decoding means ChatGPT writes one token at a time, and each new token depends on everything already written. That is why replies stream—and why early mistakes can snowball.",
    "analogy": "Speaking a sentence aloud without a backspace: each new word must fit what you already said.",
    "explanation": [
      "Start from the prompt tokens; predict the next token.",
      "Append it; repeat until a stop condition.",
      "Streaming UIs show tokens as soon as they are chosen.",
      "A wrong early token becomes part of the context for later ones."
    ],
    "keyTerms": [
      {
        "term": "Autoregressive",
        "definition": "Each step conditions on prior outputs"
      },
      {
        "term": "Decoding",
        "definition": "Turning model scores into chosen tokens"
      },
      {
        "term": "Error cascade",
        "definition": "Early mistakes steer later tokens wrong"
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
      "title": "ChatGPT starts a wrong JSON key and keeps going",
      "story": "You ask for strict JSON. The model emits `\"nam\"` instead of `\"name\"`. Later fields still try to look consistent with that broken start, so the whole object fails validation.",
      "takeaway": "Autoregression makes prefixes sticky—constrain or regenerate early errors."
    },
    "chatGptLens": {
      "setting": "You watch ChatGPT stream a bullet list live.",
      "userInput": "List 4 revision tips for my OS midterm.",
      "insideTheModel": "Token 1 is chosen from the prompt; token 2 sees prompt+token1; and so on—classic autoregressive decoding.",
      "modelOutput": "Bullets appear word-by-word until the list completes or a stop rule hits."
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
        "prompt": "Why can an early wrong token ruin a later ChatGPT answer?",
        "options": [
          {
            "id": "o0",
            "text": "Because later tokens condition on everything already generated"
          },
          {
            "id": "o1",
            "text": "Because embeddings are deleted after one token"
          },
          {
            "id": "o2",
            "text": "Because temperature always becomes zero"
          },
          {
            "id": "o3",
            "text": "Because the vocabulary shrinks each step"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Autoregression feeds past outputs back in."
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
    "laymanSummary": "Under the hood, ChatGPT’s core job is: given the tokens so far, score every possible next token. Training taught those scores; chatting samples from them.",
    "analogy": "A fill-in-the-next-word game played billions of times until the player becomes expert at plausible continuations.",
    "explanation": [
      "The model outputs logits (raw scores) for the vocabulary.",
      "Softmax turns scores into a probability distribution over next tokens.",
      "Pretraining minimizes wrong next-token guesses on huge text.",
      "Fluent next tokens ≠ verified facts—plausibility is the direct goal."
    ],
    "keyTerms": [
      {
        "term": "Logits",
        "definition": "Raw next-token scores before softmax"
      },
      {
        "term": "Softmax",
        "definition": "Turns scores into probabilities"
      },
      {
        "term": "Next-token prediction",
        "definition": "Guess the following token from the past"
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
      "title": "Subject-line autocomplete feels “smart”",
      "story": "Gmail-style or ChatGPT continuation suggests “meeting tomorrow at…” because those tokens were likely after similar prefixes in training—not because it checked your calendar.",
      "takeaway": "Next-token skill is pattern completion, not a truth database."
    },
    "chatGptLens": {
      "setting": "Mid-sentence, ChatGPT is about to pick the next word.",
      "userInput": "Complete: “The compiler reported an unused…”",
      "insideTheModel": "Next-token prediction scores candidates like “variable”, “import”, “parameter”; sampling picks one.",
      "modelOutput": "“…variable” (or similar), then continues from that choice."
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
        "prompt": "If ChatGPT’s next tokens sound fluent, does that guarantee the facts are true?",
        "options": [
          {
            "id": "o0",
            "text": "Yes—fluency means verified knowledge"
          },
          {
            "id": "o1",
            "text": "No—fluency is about likely text, not guaranteed truth"
          },
          {
            "id": "o2",
            "text": "Only when temperature is high"
          },
          {
            "id": "o3",
            "text": "Only for code, never for English"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "The objective is plausible continuation, not proof."
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
    "laymanSummary": "After ChatGPT scores next tokens, sampling knobs reshape the odds. Temperature, top-k, and top-p trade safer, repetitive answers for more variety—or the reverse.",
    "analogy": "Temperature is spice level; top-k and top-p cut off absurd ingredients before tasting.",
    "explanation": [
      "Temperature scales logits: low → peaky/safe; high → flatter/more random.",
      "Top-k keeps only the k highest-scoring tokens.",
      "Top-p (nucleus) keeps the smallest set whose probabilities sum to at least p.",
      "For JSON or exams, prefer low randomness; for brainstorming, raise it carefully."
    ],
    "keyTerms": [
      {
        "term": "Temperature",
        "definition": "Controls how sharp the next-token odds are"
      },
      {
        "term": "Top-k",
        "definition": "Keep only the k best token choices"
      },
      {
        "term": "Top-p",
        "definition": "Keep a probability-mass “nucleus” of options"
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
      "title": "Same prompt, two ChatGPT personalities",
      "story": "Marketing drafts a slogan at higher temperature and gets wild variants. Legal regenerates a clause near-greedy (low temperature) so wording stays stable and less surprising.",
      "takeaway": "Match sampling knobs to risk: creative vs precise."
    },
    "chatGptLens": {
      "setting": "You regenerate a ChatGPT answer for a creative vs strict task.",
      "userInput": "Give me a team name for our hackathon project.",
      "insideTheModel": "Higher temperature / wider nucleus lets lower-ranked fun names compete; a low-temp setting would stick to safer top choices.",
      "modelOutput": "Varied names on creative settings; more repetitive, “obvious” names when sampling is tight."
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
        "prompt": "You need ChatGPT to output strict JSON. Which sampling bias helps most?",
        "options": [
          {
            "id": "o0",
            "text": "Maximum temperature for more commas"
          },
          {
            "id": "o1",
            "text": "Lower temperature (and/or constrained decoding)"
          },
          {
            "id": "o2",
            "text": "Disable the vocabulary"
          },
          {
            "id": "o3",
            "text": "Always pick a random Unicode emoji"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Less randomness stabilizes structured formats."
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
    "laymanSummary": "ChatGPT’s reply is a loop: tokenize the prompt, sample a next token, append it, repeat, then detokenize. Streaming is just showing the loop as it runs.",
    "analogy": "A typewriter that guesses the next piece, types it, then guesses again until it stops.",
    "explanation": [
      "Encode/tokenize the user (and system) prompt once to start.",
      "Each step: score → sample under decoding rules → append.",
      "Stop on EOS, max tokens, or a stop string.",
      "Detokenize IDs to readable text; UIs often stream partial text."
    ],
    "keyTerms": [
      {
        "term": "EOS",
        "definition": "End-of-sequence stop token"
      },
      {
        "term": "Max tokens",
        "definition": "Hard cap on generated length"
      },
      {
        "term": "Stop sequence",
        "definition": "Text pattern that halts generation"
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
      "title": "Why ChatGPT stops mid-code at max length",
      "story": "You ask for a full app. The loop hits the max-token cap mid-function. The UI looks “cut off” because the stop rule fired, not because the model finished the design.",
      "takeaway": "Loop stop rules shape what you see as a complete answer."
    },
    "chatGptLens": {
      "setting": "You click Send and watch tokens appear in the ChatGPT bubble.",
      "userInput": "Write a 6-line Python function that reverses a string.",
      "insideTheModel": "The generation loop samples and appends tokens until EOS or another stop; each partial string is detokenized for the stream.",
      "modelOutput": "A short function appearing line by line, then stopping cleanly."
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
        "prompt": "What does the text-generation loop do after sampling a token?",
        "options": [
          {
            "id": "o0",
            "text": "Appends it to the prefix and predicts again (unless stopping)"
          },
          {
            "id": "o1",
            "text": "Deletes the prompt and starts over every time"
          },
          {
            "id": "o2",
            "text": "Converts the GPU into a tokenizer"
          },
          {
            "id": "o3",
            "text": "Ends training permanently"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Append-and-continue is the core loop."
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
    "laymanSummary": "ChatGPT can sound sure while being wrong because it predicts likely text, not a checked database. Missing context and “must answer” prompts make confident guesses more common.",
    "analogy": "A skilled improv actor who keeps the scene going—inventing details unless trained and allowed to say “I don’t know.”",
    "explanation": [
      "The trained goal is plausible next tokens, not verified world lookup.",
      "Gaps get filled with what usually appears in similar text.",
      "Prompts that forbid uncertainty push fluent guesses.",
      "Mitigate with sources, tools, retrieval, and human checks."
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
        "definition": "Matching confidence to actual correctness"
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
      "title": "Fake paper citations in a ChatGPT essay",
      "story": "A student asks for sources on a niche topic. ChatGPT invents realistic author names and titles. They look academic but don’t exist—because fluent citation patterns ≠ a library lookup.",
      "takeaway": "Verify high-stakes claims; fluency is not evidence."
    },
    "chatGptLens": {
      "setting": "You ask ChatGPT for a specific fact it may not know.",
      "userInput": "What grade did I get on last week’s hidden quiz?",
      "insideTheModel": "No grounded grade is in context. Next-token prediction still can emit a confident-looking number unless refusal/grounding stops it.",
      "modelOutput": "Either a refusal—“I don’t have that data”—or a hallucinated score if pushed to invent."
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
        "prompt": "Why can a fluent ChatGPT answer still be wrong?",
        "options": [
          {
            "id": "o0",
            "text": "Because the model optimizes plausible text, not guaranteed truth"
          },
          {
            "id": "o1",
            "text": "Because tokenization always deletes nouns"
          },
          {
            "id": "o2",
            "text": "Because residuals forbid correct answers"
          },
          {
            "id": "o3",
            "text": "Because LayerNorm invents facts on purpose"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Plausibility ≠ verified knowledge."
      }
    ],
    "prevConceptId": "text-generation-loop"
  }
] as Concept[];
