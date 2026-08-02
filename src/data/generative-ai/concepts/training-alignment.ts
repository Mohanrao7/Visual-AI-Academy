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
    "laymanSummary": "A dataset is the pile of examples ChatGPT-like models learn from—web text, books, code, or Q&A pairs. What goes in shapes what the model can say, refuse, or get wrong later.",
    "analogy": "A chef only cooks with what is in the pantry—bad ingredients make bad meals no matter how fancy the stove.",
    "explanation": [
      "Training reads many examples so the model copies useful patterns from them.",
      "Huge pretraining sets build general language skill; smaller sets teach a specific job.",
      "A held-out test set must stay unused during training, or scores look fake.",
      "Licenses, privacy, and bias in the data become part of the product."
    ],
    "keyTerms": [
      {
        "term": "Corpus",
        "definition": "A large collection of training text"
      },
      {
        "term": "Label",
        "definition": "The desired answer attached to an example"
      },
      {
        "term": "Data leakage",
        "definition": "Test examples sneaking into training"
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
      "title": "Campus help desk chatbot",
      "story": "A university trains a bot on FAQ pages, past tickets, and course catalogs. When secret student emails slip into the dump, the bot starts quoting private details. After they scrub PII and keep a clean eval set of new tickets, answers stay helpful without leaking.",
      "takeaway": "Your data policy becomes the model's behavior."
    },
    "chatGptLens": {
      "setting": "You ask ChatGPT a coding question. Its answer quality traces back to the code and docs it was trained on—not magic.",
      "userInput": "Write a Python function that reverses a linked list.",
      "insideTheModel": "Patterns from millions of code examples in the training datasets make “linked list + reverse” a familiar shape, so it can assemble a plausible solution.",
      "modelOutput": "def reverse(head):\n    prev = None\n    while head:\n        nxt = head.next\n        head.next = prev\n        prev = head\n        head = nxt\n    return prev"
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
        "prompt": "Why keep evaluation data separate from training data?",
        "options": [
          {
            "id": "o0",
            "text": "So the UI loads faster"
          },
          {
            "id": "o1",
            "text": "To measure how well the model handles new examples"
          },
          {
            "id": "o2",
            "text": "Because GPUs require two folders"
          },
          {
            "id": "o3",
            "text": "So loss can stay at zero forever"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Held-out data shows real generalization, not memorization."
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
    "laymanSummary": "Preprocessing cleans and formats raw text before training—removing junk, duplicates, secrets, and shaping chats into clear examples. Skip it and the model quietly learns noise and privacy leaks.",
    "analogy": "Washing and chopping vegetables before cooking—the pan only tastes what you actually put in.",
    "explanation": [
      "Raw crawls are messy: duplicates, spam, and broken HTML abound.",
      "Filters strip toxic text, personal data, and unwanted languages.",
      "Chat logs get turned into neat system/user/assistant turns.",
      "Clean packing of sequences makes training faster and more stable."
    ],
    "keyTerms": [
      {
        "term": "Deduplication",
        "definition": "Removing repeated near-identical examples"
      },
      {
        "term": "PII",
        "definition": "Personal info like names, emails, IDs"
      },
      {
        "term": "Filtering",
        "definition": "Dropping or rewriting unwanted content"
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
      "title": "Support-ticket fine-tune",
      "story": "A startup dumps three years of Zendesk tickets into a fine-tune folder. Half the threads repeat the same refund script; many include phone numbers. After dedupe and PII scrubbing, the model stops parroting one script and stops inventing customer phone numbers.",
      "takeaway": "Prep decides whether the model learns signal or spam."
    },
    "chatGptLens": {
      "setting": "ChatGPT replies in a polite assistant style partly because training chats were cleaned and formatted that way.",
      "userInput": "Summarize this messy email thread for my boss.",
      "insideTheModel": "Preprocessing once turned noisy threads into clear instruction→summary pairs, so the model expects tidy roles and short, useful answers.",
      "modelOutput": "Boss summary: Vendor delayed shipment by 5 days; customer approved partial refund; next step is warehouse restock by Friday."
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
        "prompt": "What is a main goal of PII filtering before training?",
        "options": [
          {
            "id": "o0",
            "text": "Make every sentence longer"
          },
          {
            "id": "o1",
            "text": "Lower the chance the model memorizes private details"
          },
          {
            "id": "o2",
            "text": "Replace the loss function"
          },
          {
            "id": "o3",
            "text": "Force the model to use only emojis"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Less private data in training means less risk of leaking it later."
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
    "laymanSummary": "Tokenization splits text into the small pieces the model actually trains on. Vocabulary choices change cost, rare-word handling, and how well code or other languages fit.",
    "analogy": "Deciding whether a recipe cuts carrots into cubes or ribbons—same food, different cooking time and texture.",
    "explanation": [
      "The model never sees raw characters; it sees token IDs.",
      "A good tokenizer keeps common words whole and splits rare ones.",
      "Special tokens mark roles like system, user, and end-of-turn.",
      "A mismatch (e.g., code-heavy text on a chat tokenizer) wastes tokens."
    ],
    "keyTerms": [
      {
        "term": "Vocabulary",
        "definition": "The fixed list of known token pieces"
      },
      {
        "term": "Special token",
        "definition": "A marker token for structure or control"
      },
      {
        "term": "Fragmentation",
        "definition": "Splitting text into too many tiny tokens"
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
      "title": "Medical abbreviation blow-up",
      "story": "A clinic fine-tunes on notes full of abbreviations like “bid” and drug names. A general chat tokenizer chops them into many fragments, so sequences get long and training slows. Switching to a domain-aware tokenizer shortens sequences and improves accuracy.",
      "takeaway": "Tokenizer fit is part of training efficiency."
    },
    "chatGptLens": {
      "setting": "When you type a prompt, ChatGPT first breaks it into tokens before any prediction starts.",
      "userInput": "Explain photosynthesis in two sentences.",
      "insideTheModel": "Your sentence becomes a short list of token IDs. Training taught the model which token usually comes next in that kind of science explanation.",
      "modelOutput": "Photosynthesis is how plants turn light, water, and CO2 into sugar. They release oxygen as a byproduct."
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
        "prompt": "What often happens if a tokenizer is a poor fit for your domain?",
        "options": [
          {
            "id": "o0",
            "text": "Training always gets free GPUs"
          },
          {
            "id": "o1",
            "text": "Domain text is over-split into many tokens"
          },
          {
            "id": "o2",
            "text": "The loss function disappears"
          },
          {
            "id": "o3",
            "text": "Batches become illegal"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Mismatched tokenizers fragment domain text and waste context."
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
    "laymanSummary": "The loss function scores how wrong the model’s next-token guess was. Training’s job is to push that score down—not to directly maximize truth or kindness.",
    "analogy": "A coach’s penalty card: every bad guess adds points, and practice aims to lower the score.",
    "explanation": [
      "For chat models, the usual loss is cross-entropy on the true next token.",
      "Lower loss means the model assigns higher probability to training answers.",
      "Loss is a training proxy; it is not the same as usefulness or safety.",
      "Extra losses can nudge style, length, or other constraints."
    ],
    "keyTerms": [
      {
        "term": "Cross-entropy",
        "definition": "Penalty when the true token gets low probability"
      },
      {
        "term": "Objective",
        "definition": "The number training tries to minimize"
      },
      {
        "term": "Metric",
        "definition": "A score you report that may differ from loss"
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
      "title": "Homework tutor that sounds sure",
      "story": "A tutoring model’s loss drops as it copies textbook solutions. On new word problems it still invents confident wrong steps because low loss on memorized answers ≠ correct reasoning. The team adds harder held-out metrics beyond loss.",
      "takeaway": "Chasing loss alone can miss real quality."
    },
    "chatGptLens": {
      "setting": "Imagine ChatGPT was still in training on “Capital of France?” → “Paris”.",
      "userInput": "What is the capital of France?",
      "insideTheModel": "It predicts token probabilities. If “Paris” is not near the top, cross-entropy loss is high and weights get a nudge toward preferring “Paris” next time.",
      "modelOutput": "Paris."
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
        "prompt": "What does the training loss mainly drive?",
        "options": [
          {
            "id": "o0",
            "text": "Gradient updates that adjust model weights"
          },
          {
            "id": "o1",
            "text": "Which CSS theme the chat UI uses"
          },
          {
            "id": "o2",
            "text": "DNS cache settings for the API"
          },
          {
            "id": "o3",
            "text": "How loud the server fans spin"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Loss provides the signal used to update parameters."
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
    "laymanSummary": "Gradient descent nudges model weights a little downhill on the loss surface after each batch. The learning rate is how big each step is—too big and training jumps off a cliff.",
    "analogy": "Hiking down a foggy hill: feel the slope under your feet, take a careful step, repeat.",
    "explanation": [
      "The gradient points toward steeper loss; we step the other way.",
      "We estimate the slope from a mini-batch, not the whole internet at once.",
      "Learning rate controls step size and training stability.",
      "Many tiny steps over huge data slowly shape ChatGPT-like behavior."
    ],
    "keyTerms": [
      {
        "term": "Gradient",
        "definition": "Direction of steepest loss increase"
      },
      {
        "term": "Learning rate",
        "definition": "How large each weight update is"
      },
      {
        "term": "SGD",
        "definition": "Updates from small random batches"
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
      "title": "Fine-tune that “forgot” English",
      "story": "A team fine-tunes with a huge learning rate so loss drops in minutes. Midway, English replies turn into gibberish. Lowering the rate and warming up steps brings stable, readable answers back.",
      "takeaway": "Step size can make or break training."
    },
    "chatGptLens": {
      "setting": "Behind the scenes of training (not while you chat), every batch is a tiny downhill step.",
      "userInput": "Translate “good morning” to Spanish.",
      "insideTheModel": "When the model guessed wrong during training, gradients showed which weights to nudge so “buenos días” becomes more likely next time.",
      "modelOutput": "Buenos días."
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
        "prompt": "What does SGD typically use to estimate the gradient?",
        "options": [
          {
            "id": "o0",
            "text": "Mini-batch gradient estimates"
          },
          {
            "id": "o1",
            "text": "A single astrology chart"
          },
          {
            "id": "o2",
            "text": "The entire internet in one update always"
          },
          {
            "id": "o3",
            "text": "HTML comments in the UI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stochastic methods update from small batches for speed."
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
    "laymanSummary": "Backpropagation figures out how much each weight contributed to the loss by sending error signals backward through the network. Forward pass predicts; backward pass assigns blame.",
    "analogy": "Tracing a salty soup back through the recipe to see who added too much salt, then adjusting that step next time.",
    "explanation": [
      "A forward pass computes predictions and the loss.",
      "A backward pass uses the chain rule to get gradients for every weight.",
      "Frameworks do this automatically with autograd.",
      "Without backprop, you would not know which knobs to turn."
    ],
    "keyTerms": [
      {
        "term": "Forward pass",
        "definition": "Compute outputs from inputs through layers"
      },
      {
        "term": "Backward pass",
        "definition": "Send error signals back to compute gradients"
      },
      {
        "term": "Autograd",
        "definition": "Automatic differentiation of the compute graph"
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
      "title": "Bug in a custom attention layer",
      "story": "A researcher adds a new attention variant; loss barely moves. The forward math looks fine, but the backward path is broken so gradients are near zero. Fixing the graph lets learning resume.",
      "takeaway": "If gradients cannot flow, training stalls."
    },
    "chatGptLens": {
      "setting": "You never see backprop in the chat UI—it happened while the model was trained.",
      "userInput": "Fix the grammar: “She go to school.”",
      "insideTheModel": "During training, when the model said “go” instead of “goes,” backprop told earlier layers how to adjust so “goes” wins next time.",
      "modelOutput": "She goes to school."
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
        "prompt": "What does autograd do during training?",
        "options": [
          {
            "id": "o0",
            "text": "Forces you to differentiate every layer by hand"
          },
          {
            "id": "o1",
            "text": "Automatically differentiates the compute graph"
          },
          {
            "id": "o2",
            "text": "Turns training off completely"
          },
          {
            "id": "o3",
            "text": "Removes batches from the dataset"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Autograd computes gradients from the forward compute graph."
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
    "laymanSummary": "Optimizers decide how gradients become weight updates—plain steps, momentum, or adaptive rates like Adam. The choice affects speed, stability, and final quality.",
    "analogy": "Not just walking downhill, but whether you use hiking poles and change stride on rocky ground.",
    "explanation": [
      "SGD takes simple steps opposite the gradient.",
      "Momentum remembers recent directions to smooth the path.",
      "Adam/AdamW adapt step sizes per parameter and are common for LLMs.",
      "Weight decay gently shrinks large weights to reduce overfitting."
    ],
    "keyTerms": [
      {
        "term": "AdamW",
        "definition": "Popular adaptive optimizer with weight decay"
      },
      {
        "term": "Momentum",
        "definition": "Averaging recent gradients to smooth updates"
      },
      {
        "term": "Weight decay",
        "definition": "Penalty that keeps weights from growing huge"
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
      "title": "Same data, different optimizer",
      "story": "Two teams fine-tune the same customer-support model. Plain SGD needs careful LR tuning and converges slowly; AdamW with a short warmup reaches a helpful assistant style in fewer steps with fewer loss spikes.",
      "takeaway": "The update rule is part of the training recipe."
    },
    "chatGptLens": {
      "setting": "ChatGPT’s polished tone was shaped by many optimizer steps during training runs you never see.",
      "userInput": "Rewrite this email to sound more professional.",
      "insideTheModel": "Optimizers repeatedly applied gradient updates so “professional rewrite” patterns became reliable habits in the weights.",
      "modelOutput": "Dear Jordan, Thank you for the update. I propose we finalize the timeline by Thursday and share the revised draft with the team."
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
        "prompt": "What does weight decay tend to do?",
        "options": [
          {
            "id": "o0",
            "text": "Push weights to grow without limit"
          },
          {
            "id": "o1",
            "text": "Penalize large weights to encourage simpler solutions"
          },
          {
            "id": "o2",
            "text": "Delete the softmax layer"
          },
          {
            "id": "o3",
            "text": "Stop tokenization entirely"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Weight decay regularizes by shrinking large parameter magnitudes."
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
    "laymanSummary": "Training walks through data in batches; an epoch is one full pass. Learning-rate schedules change step size over time—and for LLMs, tokens seen often matter more than epoch count.",
    "analogy": "Gym plan: each set is a batch, a full routine is an epoch, and weekly weight on the bar is the learning-rate schedule.",
    "explanation": [
      "A batch is the group of examples used for one update.",
      "An epoch means the trainer has seen the whole set once.",
      "Warmup then decay of the learning rate often stabilizes LLM training.",
      "With huge corpora, people track tokens processed more than epochs."
    ],
    "keyTerms": [
      {
        "term": "Batch",
        "definition": "Examples processed together for one update"
      },
      {
        "term": "Epoch",
        "definition": "One full pass through the training set"
      },
      {
        "term": "LR schedule",
        "definition": "How learning rate changes over steps"
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
      "title": "Overnight fine-tune budget",
      "story": "A student has one night and 50k instruction examples. They pick batch size 32, two epochs, and a short LR warmup. Tracking tokens seen helps them stop before the model starts memorizing the same answers.",
      "takeaway": "Schedule the run like a workout, not endless reps."
    },
    "chatGptLens": {
      "setting": "Your chat happens after thousands of training steps with planned batch sizes and LR schedules.",
      "userInput": "Give me three dinner ideas under 20 minutes.",
      "insideTheModel": "During training, batches of similar “quick recipe” examples, seen across epochs with a decaying LR, carved in a habit of short, list-style answers.",
      "modelOutput": "1) Garlic shrimp tacos\n2) Egg fried rice\n3) Caprese pasta with jarred sauce"
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
        "prompt": "For large language models, teams often track which quantity?",
        "options": [
          {
            "id": "o0",
            "text": "Tokens processed during training"
          },
          {
            "id": "o1",
            "text": "Desktop wallpaper brightness"
          },
          {
            "id": "o2",
            "text": "Server fan RPM only"
          },
          {
            "id": "o3",
            "text": "Number of commit emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Token budgets describe how much text the model has seen."
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
    "laymanSummary": "Pretraining teaches general language from massive data; fine-tuning continues on narrower data to specialize. Products usually adapt a pretrained base because pretraining is extremely expensive.",
    "analogy": "Learn to read and write broadly first, then take a short professional course for your job.",
    "explanation": [
      "Pretraining predicts text at internet scale to build a base model.",
      "Fine-tuning updates that base on task- or brand-specific examples.",
      "Most apps start from a pretrained checkpoint, not from random weights.",
      "Heavy fine-tuning can erase old skills if you are not careful."
    ],
    "keyTerms": [
      {
        "term": "Pretraining",
        "definition": "Large-scale training for general skills"
      },
      {
        "term": "Fine-tuning",
        "definition": "Extra training to specialize a base model"
      },
      {
        "term": "Catastrophic forgetting",
        "definition": "New training wiping older abilities"
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
      "title": "Retail FAQ specialist",
      "story": "A store starts from a strong pretrained chat model, then fine-tunes on return policies and product SKUs. General English stays intact, but answers now cite the store’s rules. Over-training only on returns made it forget casual small talk until they mixed some general data back in.",
      "takeaway": "Specialize the base—don’t rebuild literacy from scratch."
    },
    "chatGptLens": {
      "setting": "ChatGPT feels broadly capable because of pretraining, then more helpful because of later fine-tuning.",
      "userInput": "Draft a polite refund request for a late package.",
      "insideTheModel": "Pretraining taught fluent English; fine-tuning taught assistant-style letters that follow instructions and stay polite.",
      "modelOutput": "Hello, my order #18422 arrived five days late. Could you please process a refund per your shipping guarantee? Thank you."
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
        "prompt": "What does catastrophic forgetting risk mean?",
        "options": [
          {
            "id": "o0",
            "text": "New training can weaken skills the model already had"
          },
          {
            "id": "o1",
            "text": "GPUs suddenly forget arithmetic hardware"
          },
          {
            "id": "o2",
            "text": "Unicode deletes tokens overnight"
          },
          {
            "id": "o3",
            "text": "Log files erase themselves each midnight"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Narrow fine-tuning can overwrite earlier general abilities."
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
    "laymanSummary": "Supervised Fine-Tuning (SFT) shows the model high-quality prompt→response examples so it follows instructions in a desired style. It turns a raw completer into a more helpful assistant.",
    "analogy": "Script rehearsal: the actor practices ideal dialogues until tone and structure stick.",
    "explanation": [
      "You train on curated (prompt, ideal answer) pairs.",
      "The model learns to continue like a helpful assistant, not random web text.",
      "SFT usually comes before preference methods like RLHF or DPO.",
      "Demo quality matters more than dumping millions of mediocre pairs."
    ],
    "keyTerms": [
      {
        "term": "SFT",
        "definition": "Supervised fine-tuning on ideal responses"
      },
      {
        "term": "Instruction data",
        "definition": "Prompts paired with target answers"
      },
      {
        "term": "Base model",
        "definition": "Pretrained model before assistant tuning"
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
      "title": "HR policy assistant",
      "story": "HR writes 2,000 gold answers for leave, benefits, and escalation rules. After SFT, the bot stops rambling like a wiki dump and answers in the company’s short, linked style. Bad demos that were sarcastic taught sarcasm—so they rewrote those examples.",
      "takeaway": "The model copies the demos you show it."
    },
    "chatGptLens": {
      "setting": "When ChatGPT follows your instruction cleanly, SFT-style training is a big reason.",
      "userInput": "List three tips to sleep better. Keep each tip under 10 words.",
      "insideTheModel": "SFT examples taught it to obey format constraints and give concise, helpful lists instead of free-associating blog text.",
      "modelOutput": "1) Keep a fixed bedtime.\n2) Avoid screens late.\n3) Cut caffeine after noon."
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
        "prompt": "How much does demo quality matter for SFT?",
        "options": [
          {
            "id": "o0",
            "text": "It barely matters if you have any text at all"
          },
          {
            "id": "o1",
            "text": "It strongly shapes the model’s later behavior"
          },
          {
            "id": "o2",
            "text": "It deletes GPU memory as a side effect"
          },
          {
            "id": "o3",
            "text": "It only fixes networking bugs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "SFT behavior tracks the quality of the demonstration data."
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
    "laymanSummary": "LoRA freezes most base weights and trains tiny adapter matrices, saving memory and storage. QLoRA also quantizes the base model so you can fine-tune on smaller GPUs.",
    "analogy": "Instead of rewriting a whole textbook, you add sticky notes you can swap per subject.",
    "explanation": [
      "Base weights stay frozen; small low-rank adapters learn the task.",
      "Adapter files are tiny compared with a full model copy.",
      "QLoRA keeps the base in low-bit form while training adapters.",
      "You can ship different adapters for different teams or topics."
    ],
    "keyTerms": [
      {
        "term": "LoRA",
        "definition": "Low-rank adapters trained on a frozen base"
      },
      {
        "term": "Quantization",
        "definition": "Storing weights with fewer bits"
      },
      {
        "term": "Adapter",
        "definition": "Small trainable module plugged into layers"
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
      "title": "Three brand voices, one base",
      "story": "A marketing team hosts one 7B base model and three LoRA adapters: playful, formal, and legal-safe. Swapping adapters changes tone without storing three full fine-tunes. QLoRA let them train each adapter on a single consumer GPU.",
      "takeaway": "Adapters make specialization cheap and swappable."
    },
    "chatGptLens": {
      "setting": "Product teams often customize a ChatGPT-like model with LoRA instead of retraining everything.",
      "userInput": "Describe our refund policy in one friendly paragraph.",
      "insideTheModel": "A LoRA adapter trained on the company’s FAQ shifts a few pathways so answers match brand tone while the frozen base keeps general English.",
      "modelOutput": "No worries—if your order isn’t right, start a return in the app within 30 days and we’ll refund to your original payment once we receive the item."
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
        "prompt": "Why are LoRA adapters often useful in practice?",
        "options": [
          {
            "id": "o0",
            "text": "They are small, trainable, and easy to swap"
          },
          {
            "id": "o1",
            "text": "They always erase the base model forever"
          },
          {
            "id": "o2",
            "text": "They forbid running any evaluation"
          },
          {
            "id": "o3",
            "text": "They replace the need for a tokenizer"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Adapters add modular specialization without full retraining."
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
    "laymanSummary": "RLHF trains a reward model from human preference rankings, then steers the chatbot to score higher while staying close to a reference model. It can boost helpfulness but is complex and can over-optimize quirks.",
    "analogy": "A comedy writer tries jokes, the audience ranks them, and a coach trains for crowd-pleasers without going off-character.",
    "explanation": [
      "Humans compare answers: A is better than B for the same prompt.",
      "A reward model learns to predict those preferences.",
      "The policy (chat model) is optimized to earn higher reward.",
      "A KL penalty keeps it from drifting too far from the SFT model."
    ],
    "keyTerms": [
      {
        "term": "Reward model",
        "definition": "Model that scores how preferred an answer is"
      },
      {
        "term": "Policy",
        "definition": "The chat model being optimized"
      },
      {
        "term": "KL penalty",
        "definition": "Brake that limits drift from a reference"
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
      "title": "Less lecturing, more answering",
      "story": "Raters prefer short direct answers over long lectures. After RLHF, the assistant opens with the answer first. Pushed too hard, it became overly agreeable—even when users were wrong—so the team rebalanced the reward data.",
      "takeaway": "You optimize what raters reward, quirks included."
    },
    "chatGptLens": {
      "setting": "ChatGPT’s “helpful and careful” feel often comes from preference training like RLHF after SFT.",
      "userInput": "Is it okay to copy a classmate’s homework?",
      "insideTheModel": "Preference training rewarded honest, constructive refusals over “sure, here’s how to cheat,” while staying close to the helpful SFT style.",
      "modelOutput": "I can’t help you copy someone’s work. I can help you understand the assignment or study the topic so you can do it yourself."
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
        "prompt": "Which statement best describes RLHF?",
        "options": [
          {
            "id": "o0",
            "text": "It is only a simple regex filter on outputs"
          },
          {
            "id": "o1",
            "text": "It is a complex but influential alignment method"
          },
          {
            "id": "o2",
            "text": "It is a font used in chat apps"
          },
          {
            "id": "o3",
            "text": "It is a hardware cable between GPUs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "RLHF is powerful for alignment and operationally heavy."
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
    "laymanSummary": "Direct Preference Optimization (DPO) trains on preferred vs rejected answers with a classification-style loss—no separate RL loop. It is often simpler to run than classic RLHF.",
    "analogy": "Show good vs bad answers and teach “prefer this over that,” without a separate scoreboard coach in an RL loop.",
    "explanation": [
      "Each example has a prompt, a chosen reply, and a rejected reply.",
      "The loss raises the chance of the chosen reply over the rejected one.",
      "You skip training a separate reward model and running RL.",
      "Bad preference labels still produce bad habits."
    ],
    "keyTerms": [
      {
        "term": "Preference pair",
        "definition": "Chosen answer vs rejected answer for one prompt"
      },
      {
        "term": "DPO",
        "definition": "Preference tuning without a separate RL loop"
      },
      {
        "term": "Reference model",
        "definition": "Frozen baseline the update stays relative to"
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
      "title": "Tone cleanup without RL infra",
      "story": "A small team lacks RL tooling. They collect 5,000 pairs where raters pick the clearer answer. DPO training makes the bot prefer crisp replies over waffle—until a batch of noisy labels taught it to refuse harmless questions, which they fixed by cleaning the pairs.",
      "takeaway": "DPO is simpler ops; data quality still rules."
    },
    "chatGptLens": {
      "setting": "Some ChatGPT-like assistants use DPO-style preference data instead of a full RLHF stack.",
      "userInput": "Explain recursion to a 10-year-old.",
      "insideTheModel": "Preference pairs favored a simple analogy over a dense CS lecture, so DPO boosted the friendly explanation style.",
      "modelOutput": "Recursion is like looking up a word that sends you to another word, until you finally reach a definition you understand."
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
        "prompt": "What happens if preference data for DPO is poor?",
        "options": [
          {
            "id": "o0",
            "text": "The model becomes magically safe forever"
          },
          {
            "id": "o1",
            "text": "The model can learn misaligned behavior"
          },
          {
            "id": "o2",
            "text": "Training suddenly grants free GPUs"
          },
          {
            "id": "o3",
            "text": "The model always tells perfect truth"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Garbage preference labels produce garbage preferences."
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
    "laymanSummary": "Underfitting means the model is too weak or under-trained to capture the pattern. Overfitting means it memorizes training quirks and fails on new prompts.",
    "analogy": "Underfit: only reading chapter titles. Overfit: memorizing the answer key, then freezing on a new question.",
    "explanation": [
      "Watch train vs validation metrics; a big gap often means overfitting.",
      "Underfit models stay wrong on both train and validation.",
      "More diverse data, regularization, and early stopping fight overfit.",
      "For chatbots, overfit looks like parroting training FAQs that don’t match the user’s case."
    ],
    "keyTerms": [
      {
        "term": "Overfitting",
        "definition": "Memorizing train quirks; weak on new data"
      },
      {
        "term": "Underfitting",
        "definition": "Too simple or undertrained to learn the pattern"
      },
      {
        "term": "Validation set",
        "definition": "Held-out data used to check generalization"
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
      "title": "FAQ bot that only knows last year’s promos",
      "story": "A shop bot trained too long on last year’s coupon FAQ scores perfectly on that file but fails on this year’s policy. Early stopping plus fresher examples closed the train/validation gap and fixed live chats.",
      "takeaway": "Perfect train score can still mean a bad product."
    },
    "chatGptLens": {
      "setting": "A well-tuned ChatGPT-like model balances fitting training chats without memorizing them word-for-word.",
      "userInput": "What is your return window for headphones bought today?",
      "insideTheModel": "If overfit, it might quote last year’s “14 days” from memorized FAQs. Proper fit uses current policy patterns and stays useful on new wording.",
      "modelOutput": "For headphones bought today, you have 30 days from delivery to start a return in unused condition."
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
        "prompt": "Which approach best helps reduce overfitting?",
        "options": [
          {
            "id": "o0",
            "text": "Use more diverse data and regularization"
          },
          {
            "id": "o1",
            "text": "Delete the validation set so gaps disappear"
          },
          {
            "id": "o2",
            "text": "Always use the maximum chaotic learning rate"
          },
          {
            "id": "o3",
            "text": "Ignore metrics and train forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Diversity and regularization improve generalization."
      }
    ],
    "prevConceptId": "dpo"
  }
] as Concept[];
