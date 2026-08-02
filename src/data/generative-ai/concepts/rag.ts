import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "why-rag",
    "categoryId": "rag",
    "title": "Why RAG",
    "subtitle": "Ground answers in your documents",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [],
    "laymanSummary": "RAG means the chatbot looks up your documents first, then answers from those pages—not only from what it memorized in training. That helps with private handbooks, fresh policies, and answers you can point back to a source.",
    "analogy": "An open-book exam: grab the right chapter, then write—don’t rely only on memory.",
    "explanation": [
      "Plain ChatGPT may not know your private or brand-new docs.",
      "RAG searches a knowledge base, then pastes useful snippets into the prompt.",
      "You can update the docs without retraining the whole model.",
      "It still fails if the wrong pages are fetched or the model ignores them.",
    ],
    "keyTerms": [
      {
        "term": "RAG",
        "definition": "Look up docs, then write the answer"
      },
      {
        "term": "Parametric knowledge",
        "definition": "Facts the model memorized in training"
      },
      {
        "term": "Grounding",
        "definition": "Basing the reply on retrieved evidence"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Why RAG — visual walkthrough",
      "description": "Step through the core idea behind Why RAG.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User asks a policy question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "System retrieves relevant docs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Docs enter the prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Model answers with evidence.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Optional citations shown.",
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
          "Memorize all PDFs in weights",
          "RAG over PDFs",
          "Ignore documents"
        ],
        "insights": {
          "Memorize all PDFs in weights": "Expensive and stale.",
          "RAG over PDFs": "Practical grounding.",
          "Ignore documents": "Invented policies risk."
        },
        "selected": "Memorize all PDFs in weights"
      }
    },
    "realWorldExample": {
      "title": "HR leave-policy chat",
      "story": "An employee asks ChatGPT-style HR bot, “How many casual leaves can I take in a year?” The system pulls the latest handbook section and answers from that page, with a citation—not a guess from old training data.",
      "takeaway": "Update the handbook file; the bot can stay current without retraining."
    },
    "chatGptLens": {
      "setting": "Company ChatGPT with access to the HR handbook (RAG).",
      "userInput": "How many casual leaves can I take this year?",
      "insideTheModel": "Before answering, the app searches handbook chunks for “casual leave,” pastes the matching section into the prompt, then ChatGPT writes from that evidence.",
      "modelOutput": "“Per the 2026 handbook, you get 12 casual leaves per calendar year. Source: Leave Policy §3.”"
    },
    "quiz": [
      {
        "id": "why-rag-q1",
        "prompt": "RAG mainly helps by…",
        "options": [
          {
            "id": "o0",
            "text": "Fetching evidence for generation"
          },
          {
            "id": "o1",
            "text": "Deleting models"
          },
          {
            "id": "o2",
            "text": "Replacing GPUs"
          },
          {
            "id": "o3",
            "text": "Banning prompts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Retrieve then generate."
      },
      {
        "id": "why-rag-q2",
        "prompt": "A benefit is…",
        "options": [
          {
            "id": "o0",
            "text": "Easier knowledge updates"
          },
          {
            "id": "o1",
            "text": "Infinite perfect memory"
          },
          {
            "id": "o2",
            "text": "No need for evals"
          },
          {
            "id": "o3",
            "text": "Free electricity"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Updatable docs."
      },
      {
        "id": "why-rag-q3",
        "prompt": "Does RAG guarantee the model will never hallucinate?",
        "options": [
          {
            "id": "o0",
            "text": "Yes—retrieval always blocks wrong answers"
          },
          {
            "id": "o1",
            "text": "No—bad or missing docs can still mislead it"
          },
          {
            "id": "o2",
            "text": "Yes—but only on Fridays"
          },
          {
            "id": "o3",
            "text": "Yes—if you turn Wi‑Fi off"
          },
        ],
        "correctOptionId": "o1",
        "explanation": "RAG helps grounding, but wrong retrieval or ignored evidence still fails."
      }
    ],
    "nextConceptId": "chunking"
  },
  {
    "id": "chunking",
    "categoryId": "rag",
    "title": "Chunking",
    "subtitle": "Split documents into retrievable pieces",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "why-rag"
    ],
    "laymanSummary": "Chunking cuts long PDFs into smaller passages so search can find the right paragraph. Chunks that are too big are noisy; chunks that are too tiny lose meaning—overlap and heading-aware splits help.",
    "analogy": "Indexing a textbook by coherent sections, not one giant blob or random half-sentences.",
    "explanation": [
      "Pick a chunk size that fits your search model and ChatGPT’s context window.",
      "Prefer splits at headings, lists, or code functions when you can.",
      "A little overlap between neighbors stops ideas from getting cut in half.",
      "Keep metadata (file, page, section) so answers can cite the source.",
    ],
    "keyTerms": [
      {
        "term": "Chunk",
        "definition": "A short passage ready to search"
      },
      {
        "term": "Overlap",
        "definition": "Shared text between neighboring chunks"
      },
      {
        "term": "Metadata",
        "definition": "Labels like file, page, or section"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Chunking — visual walkthrough",
      "description": "Step through the core idea behind Chunking.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Load a document.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Split on structure.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Apply size and overlap.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Attach metadata.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Ready for embedding.",
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
          "One chunk = whole book",
          "Heading-aware medium chunks",
          "Random 20-character shards"
        ],
        "insights": {
          "One chunk = whole book": "Poor retrieval precision.",
          "Heading-aware medium chunks": "Strong default.",
          "Random 20-character shards": "Meaning destroyed."
        },
        "selected": "One chunk = whole book"
      }
    },
    "realWorldExample": {
      "title": "API docs assistant",
      "story": "A team splits API docs by endpoint (“POST /refunds”, “GET /orders”). When a developer asks about refunds in ChatGPT, retrieval returns the whole refund section—not a random mid-page fragment.",
      "takeaway": "Structure-aware chunks make ChatGPT answers more precise."
    },
    "chatGptLens": {
      "setting": "ChatGPT over your product docs with RAG indexing.",
      "userInput": "How do I call the refunds endpoint?",
      "insideTheModel": "The docs were pre-split into chunks. Search finds the “Refunds API” chunk (not the whole 200-page PDF) and that text is stuffed into the prompt.",
      "modelOutput": "Step-by-step for POST /refunds with required fields, citing the Refunds API section."
    },
    "quiz": [
      {
        "id": "chunking-q1",
        "prompt": "Chunking is…",
        "options": [
          {
            "id": "o0",
            "text": "Splitting docs into passages"
          },
          {
            "id": "o1",
            "text": "Deleting punctuation only"
          },
          {
            "id": "o2",
            "text": "GPU scheduling"
          },
          {
            "id": "o3",
            "text": "CSS minify"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Passages."
      },
      {
        "id": "chunking-q2",
        "prompt": "Too-small chunks risk…",
        "options": [
          {
            "id": "o0",
            "text": "Losing surrounding meaning"
          },
          {
            "id": "o1",
            "text": "Perfect answers always"
          },
          {
            "id": "o2",
            "text": "Infinite context"
          },
          {
            "id": "o3",
            "text": "Free hosting"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Fragmentation."
      },
      {
        "id": "chunking-q3",
        "prompt": "Why keep metadata on each chunk?",
        "options": [
          {
            "id": "o0",
            "text": "So you can cite and filter sources"
          },
          {
            "id": "o1",
            "text": "So the GPU runs hotter"
          },
          {
            "id": "o2",
            "text": "So fonts become bold"
          },
          {
            "id": "o3",
            "text": "So Ethernet cables route faster"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Metadata preserves provenance for citations and filters."
      }
    ],
    "prevConceptId": "why-rag",
    "nextConceptId": "embeddings-for-retrieval"
  },
  {
    "id": "embeddings-for-retrieval",
    "categoryId": "rag",
    "title": "Embeddings for retrieval",
    "subtitle": "Encode queries and chunks into one space",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "chunking"
    ],
    "laymanSummary": "Embeddings turn questions and document chunks into number lists so similar meanings sit near each other. ChatGPT-style search embeds your query, then finds chunks whose vectors are close—even if the wording differs.",
    "analogy": "Library call numbers for meaning: related ideas shelved in the same aisle.",
    "explanation": [
      "Offline: each chunk becomes a vector and is stored in an index.",
      "Online: your ChatGPT question is embedded the same way.",
      "Nearby vectors mean “similar meaning,” so paraphrases can still match.",
      "If you change chunking or the embedder, re-embed so the index stays consistent.",
    ],
    "keyTerms": [
      {
        "term": "Retrieval embedding",
        "definition": "Vector used to search for chunks"
      },
      {
        "term": "Recall",
        "definition": "Whether the needed evidence was found"
      },
      {
        "term": "Domain fit",
        "definition": "How well the embedder matches your docs"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Embeddings for retrieval — visual walkthrough",
      "description": "Step through the core idea behind Embeddings for retrieval.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Chunk text.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Embed and store vectors.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Embed user query.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Find nearest chunk vectors.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Pass text to generator.",
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
      "title": "Try the idea",
      "description": "Interactive local demo.",
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
      "title": "Bug-tracker semantic search",
      "story": "A support bot looks up past tickets. A user writes “app dies when I upload a photo”; embeddings match an older ticket titled “crash on image attach” even though the words differ.",
      "takeaway": "Meaning match beats exact keyword match alone."
    },
    "chatGptLens": {
      "setting": "Internal ChatGPT that searches past support tickets.",
      "userInput": "Users say the app dies when uploading a photo—seen this?",
      "insideTheModel": "Your sentence becomes an embedding. The system finds ticket chunks with nearby vectors (same crash idea, different words) and feeds them to ChatGPT.",
      "modelOutput": "“Yes—similar to ticket #4821: crash on image attach. Likely null EXIF on Android 14; fix shipped in v3.2.”"
    },
    "quiz": [
      {
        "id": "embeddings-for-retrieval-q1",
        "prompt": "Retrieval embeddings are used to…",
        "options": [
          {
            "id": "o0",
            "text": "Find semantically related chunks"
          },
          {
            "id": "o1",
            "text": "Render CSS"
          },
          {
            "id": "o2",
            "text": "Compile C"
          },
          {
            "id": "o3",
            "text": "Charge phones"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Semantic search."
      },
      {
        "id": "embeddings-for-retrieval-q2",
        "prompt": "Queries and docs should be…",
        "options": [
          {
            "id": "o0",
            "text": "In a comparable embedding space"
          },
          {
            "id": "o1",
            "text": "On different planets"
          },
          {
            "id": "o2",
            "text": "Unembedded"
          },
          {
            "id": "o3",
            "text": "Only hashed"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Shared space."
      },
      {
        "id": "embeddings-for-retrieval-q3",
        "prompt": "After you change how documents are chunked, you usually should…",
        "options": [
          {
            "id": "o0",
            "text": "Re-embed the new chunks"
          },
          {
            "id": "o1",
            "text": "Never update any vectors"
          },
          {
            "id": "o2",
            "text": "Delete the language model"
          },
          {
            "id": "o3",
            "text": "Ban all metadata"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "The index must match the text you actually store."
      }
    ],
    "prevConceptId": "chunking",
    "nextConceptId": "vector-db-concept"
  },
  {
    "id": "vector-db-concept",
    "categoryId": "rag",
    "title": "Vector DB concept",
    "subtitle": "Store and search embeddings at scale",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "embeddings-for-retrieval"
    ],
    "laymanSummary": "A vector database stores those embeddings plus tags (file, team, date) and finds nearest neighbors fast. Think of it as the search engine behind RAG—not the place that permanently replaces your original docs.",
    "analogy": "A card catalog for “coordinates of meaning,” with filters for author and date.",
    "explanation": [
      "You upsert each chunk’s vector with an ID and metadata.",
      "A query embedding asks: “which stored vectors are nearest?”",
      "Metadata filters can limit results (e.g., only HR docs you can see).",
      "ANN search trades a tiny bit of exactness for speed at scale.",
    ],
    "keyTerms": [
      {
        "term": "ANN",
        "definition": "Fast approximate nearest-neighbor search"
      },
      {
        "term": "Upsert",
        "definition": "Insert or update a vector record"
      },
      {
        "term": "Metadata filter",
        "definition": "Narrow search by tagged fields"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Vector DB concept — visual walkthrough",
      "description": "Step through the core idea behind Vector DB concept.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Embed chunk.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Upsert into vector DB.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Query with filters.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Return top IDs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Fetch raw text for prompting.",
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
          "Postgres only keywords",
          "Vector index + metadata filters",
          "Store vectors on sticky notes"
        ],
        "insights": {
          "Postgres only keywords": "Misses paraphrases.",
          "Vector index + metadata filters": "RAG standard.",
          "Store vectors on sticky notes": "Not scalable."
        },
        "selected": "Postgres only keywords"
      }
    },
    "realWorldExample": {
      "title": "Enterprise knowledge base",
      "story": "A company stores millions of handbook and wiki chunk vectors. When you ask ChatGPT about expense limits, the vector DB returns nearby chunks filtered to Finance docs you’re allowed to see.",
      "takeaway": "Scale and permissions meet at the vector index."
    },
    "chatGptLens": {
      "setting": "Work ChatGPT backed by a vector DB of company wiki chunks.",
      "userInput": "What’s our meal stipend for overnight travel?",
      "insideTheModel": "Your question is embedded; the vector DB returns top matching chunk IDs (optionally filtered by “Finance / Travel”), then those texts go into ChatGPT’s prompt.",
      "modelOutput": "“Overnight travel meal stipend is ₹1,500/day (Travel Policy 2025). Here’s the cited paragraph.”"
    },
    "quiz": [
      {
        "id": "vector-db-concept-q1",
        "prompt": "Vector DBs specialize in…",
        "options": [
          {
            "id": "o0",
            "text": "Nearest-neighbor embedding search"
          },
          {
            "id": "o1",
            "text": "Payroll taxes"
          },
          {
            "id": "o2",
            "text": "CSS grid"
          },
          {
            "id": "o3",
            "text": "HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Vector search."
      },
      {
        "id": "vector-db-concept-q2",
        "prompt": "ANN means…",
        "options": [
          {
            "id": "o0",
            "text": "Approximate nearest neighbors"
          },
          {
            "id": "o1",
            "text": "Absolute never never"
          },
          {
            "id": "o2",
            "text": "A new GPU"
          },
          {
            "id": "o3",
            "text": "A font"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Approx search."
      },
      {
        "id": "vector-db-concept-q3",
        "prompt": "Does a vector DB replace your original document store?",
        "options": [
          {
            "id": "o0",
            "text": "Yes—delete all source files afterward"
          },
          {
            "id": "o1",
            "text": "No—it indexes; sources stay elsewhere"
          },
          {
            "id": "o2",
            "text": "Yes—but only on Sundays"
          },
          {
            "id": "o3",
            "text": "Yes—if you store them in YAML"
          },
        ],
        "correctOptionId": "o1",
        "explanation": "Vector DBs index for search; the system of record remains your docs."
      }
    ],
    "prevConceptId": "embeddings-for-retrieval",
    "nextConceptId": "similarity-search"
  },
  {
    "id": "similarity-search",
    "categoryId": "rag",
    "title": "Similarity Search",
    "subtitle": "Find nearest neighbors to a query vector",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "vector-db-concept"
    ],
    "laymanSummary": "Similarity search ranks stored chunk vectors by how close they are to your question’s vector. The top few passages become the “open book” pages ChatGPT reads before answering.",
    "analogy": "Standing on a map pin and asking who is closest to you.",
    "explanation": [
      "Embed the user question the same way you embedded the chunks.",
      "Score closeness (often cosine similarity or inner product).",
      "Keep the top-k neighbors as candidate passages.",
      "Optionally drop weak matches below a score threshold, then send texts to ChatGPT.",
    ],
    "keyTerms": [
      {
        "term": "Top-k",
        "definition": "Keep the k closest matching chunks"
      },
      {
        "term": "Cosine similarity",
        "definition": "Score based on vector direction"
      },
      {
        "term": "Candidate set",
        "definition": "Passages retrieved before any re-rank"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Similarity Search — visual walkthrough",
      "description": "Step through the core idea behind Similarity Search.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Query arrives.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Become a vector.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Score neighbors.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Select top-k.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Hand texts to the model.",
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
      "title": "Try the idea",
      "description": "Interactive local demo.",
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
      "title": "FAQ ticket deflection",
      "story": "A new ticket says “password reset email never arrives.” Similarity search pulls the three closest FAQ chunks; ChatGPT drafts a reply from those, not from thin air.",
      "takeaway": "Nearest neighbors suggest the right help article."
    },
    "chatGptLens": {
      "setting": "Helpdesk ChatGPT with an FAQ vector index.",
      "userInput": "Password reset email never arrives—what should I tell the user?",
      "insideTheModel": "The query vector is compared to all FAQ vectors; top-k articles (spam folder, SSO delay, rate limits) are pasted into the prompt for ChatGPT.",
      "modelOutput": "A short agent reply: check spam, wait 10 minutes for SSO, then escalate—with FAQ links."
    },
    "quiz": [
      {
        "id": "similarity-search-q1",
        "prompt": "Similarity search returns…",
        "options": [
          {
            "id": "o0",
            "text": "Nearest vectors/passages"
          },
          {
            "id": "o1",
            "text": "Random GPUs"
          },
          {
            "id": "o2",
            "text": "CSS files"
          },
          {
            "id": "o3",
            "text": "DNS zones"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Neighbors."
      },
      {
        "id": "similarity-search-q2",
        "prompt": "Top-k means…",
        "options": [
          {
            "id": "o0",
            "text": "Keep k best matches"
          },
          {
            "id": "o1",
            "text": "Keep all internet"
          },
          {
            "id": "o2",
            "text": "Delete k tokens"
          },
          {
            "id": "o3",
            "text": "Train k epochs only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Best k."
      },
      {
        "id": "similarity-search-q3",
        "prompt": "Cosine similarity mainly cares about…",
        "options": [
          {
            "id": "o0",
            "text": "The direction of the vectors"
          },
          {
            "id": "o1",
            "text": "The color of network cables"
          },
          {
            "id": "o2",
            "text": "Fan stickers on the server"
          },
          {
            "id": "o3",
            "text": "Mouse DPI settings"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Cosine looks at angle/direction more than raw length."
      }
    ],
    "prevConceptId": "vector-db-concept",
    "nextConceptId": "hybrid-search"
  },
  {
    "id": "hybrid-search",
    "categoryId": "rag",
    "title": "Hybrid Search",
    "subtitle": "Combine keywords and vectors",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "similarity-search"
    ],
    "laymanSummary": "Hybrid search mixes keyword matching with vector similarity. Keywords catch exact IDs and rare codes; vectors catch the same idea said in different words—then the lists are fused.",
    "analogy": "Using both the back-of-book index and a librarian who understands meaning.",
    "explanation": [
      "Run a keyword search (e.g., BM25) and a vector search in parallel.",
      "Fuse the ranked lists so strong hits from either side survive.",
      "Exact SKUs, error codes, and order IDs often need keywords.",
      "Paraphrased symptoms (“won’t turn on” vs “no power”) need vectors.",
    ],
    "keyTerms": [
      {
        "term": "BM25",
        "definition": "Classic keyword ranking for text search"
      },
      {
        "term": "Fusion",
        "definition": "Merge two ranked result lists"
      },
      {
        "term": "Exact match",
        "definition": "Hit on the literal string or ID"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Hybrid Search — visual walkthrough",
      "description": "Step through the core idea behind Hybrid Search.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Query has a SKU and a symptom.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Keyword finds the SKU doc.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Vector finds paraphrase guides.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Fusion merges.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Better candidates.",
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
          "Keywords only",
          "Vectors only",
          "Hybrid fusion"
        ],
        "insights": {
          "Keywords only": "Misses paraphrases.",
          "Vectors only": "May miss exact IDs.",
          "Hybrid fusion": "Often best."
        },
        "selected": "Keywords only"
      }
    },
    "realWorldExample": {
      "title": "E-commerce support bot",
      "story": "A shopper asks ChatGPT, “Order A12-9941 won’t charge my card—declined at checkout.” Keywords lock onto A12-9941; vectors find “payment declined” troubleshooting guides; fusion feeds both to the model.",
      "takeaway": "Hybrid covers exact IDs and fuzzy wording."
    },
    "chatGptLens": {
      "setting": "Store support ChatGPT with hybrid retrieval.",
      "userInput": "Order A12-9941 payment declined at checkout—help?",
      "insideTheModel": "Keyword search grabs the order-ID doc; vector search grabs “card declined” guides; fusion merges them; ChatGPT answers from the combined snippets.",
      "modelOutput": "Checks for that order plus steps for declined cards (billing address, 3DS, retry)—with sources."
    },
    "quiz": [
      {
        "id": "hybrid-search-q1",
        "prompt": "Hybrid search combines…",
        "options": [
          {
            "id": "o0",
            "text": "Lexical and vector retrieval"
          },
          {
            "id": "o1",
            "text": "Only images and audio"
          },
          {
            "id": "o2",
            "text": "Loss and LR"
          },
          {
            "id": "o3",
            "text": "Pods and nodes only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Both modes."
      },
      {
        "id": "hybrid-search-q2",
        "prompt": "Keywords help with…",
        "options": [
          {
            "id": "o0",
            "text": "Exact IDs and rare tokens"
          },
          {
            "id": "o1",
            "text": "Only poetry vibes"
          },
          {
            "id": "o2",
            "text": "GPU voltage"
          },
          {
            "id": "o3",
            "text": "Font kerning"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Exactness."
      },
      {
        "id": "hybrid-search-q3",
        "prompt": "When do vector results help most in hybrid search?",
        "options": [
          {
            "id": "o0",
            "text": "When the user paraphrases the same idea"
          },
          {
            "id": "o1",
            "text": "Only when strings are identical"
          },
          {
            "id": "o2",
            "text": "Only for HDMI cable problems"
          },
          {
            "id": "o3",
            "text": "Only for CSS :hover bugs"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Vectors match meaning across different wording."
      }
    ],
    "prevConceptId": "similarity-search",
    "nextConceptId": "re-ranking"
  },
  {
    "id": "re-ranking",
    "categoryId": "rag",
    "title": "Re-ranking",
    "subtitle": "Second-stage relevance sorting",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "hybrid-search"
    ],
    "laymanSummary": "Re-ranking is a second pass: cheap search grabs many candidates, then a stronger scorer sorts which ones truly fit the question. ChatGPT then sees a short, cleaner shortlist instead of a noisy pile of pages.",
    "analogy": "Grab 50 library books quickly, then have an expert skim and keep the best five.",
    "explanation": [
      "First stage retrieves a broad set (say top 50) cheaply.",
      "A cross-encoder or judge scores each query–chunk pair more carefully.",
      "You keep only the top few for ChatGPT’s prompt.",
      "You trade a bit of latency for higher precision—and still need decent first-stage recall.",
    ],
    "keyTerms": [
      {
        "term": "Cross-encoder",
        "definition": "Model that scores a query and doc together"
      },
      {
        "term": "Precision",
        "definition": "How relevant the top results are"
      },
      {
        "term": "Candidate generation",
        "definition": "Cheap first-stage retrieval pass"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Re-ranking — visual walkthrough",
      "description": "Step through the core idea behind Re-ranking.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Retrieve top 50.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Re-rank with a stronger scorer.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Keep top 5.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Stuff into prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Answer quality rises.",
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
          "No rerank, stuff top 20",
          "Rerank to top 5",
          "Rerank with a random shuffle"
        ],
        "insights": {
          "No rerank, stuff top 20": "Noisy context.",
          "Rerank to top 5": "Common pattern.",
          "Rerank with a random shuffle": "Useless."
        },
        "selected": "No rerank, stuff top 20"
      }
    },
    "realWorldExample": {
      "title": "Legal research assistant",
      "story": "A lawyer asks ChatGPT about a contract clause. Search returns 40 vaguely related passages; a re-ranker promotes the five truly on-point case excerpts into the prompt.",
      "takeaway": "Precision of context matters when mistakes are costly."
    },
    "chatGptLens": {
      "setting": "Legal ChatGPT with retrieve → re-rank → answer.",
      "userInput": "Does force majeure cover pandemic lockdowns in our vendor MSA?",
      "insideTheModel": "Hybrid search pulls ~40 chunks; a re-ranker scores each against the question and keeps the top 5 for ChatGPT—dropping near-miss contract noise.",
      "modelOutput": "A careful yes/no with quoted MSA lines and case cites from the re-ranked set."
    },
    "quiz": [
      {
        "id": "re-ranking-q1",
        "prompt": "Re-ranking is…",
        "options": [
          {
            "id": "o0",
            "text": "Second-stage relevance sorting"
          },
          {
            "id": "o1",
            "text": "Deleting the index"
          },
          {
            "id": "o2",
            "text": "CSS minify"
          },
          {
            "id": "o3",
            "text": "GPU overclocking"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Rescoring."
      },
      {
        "id": "re-ranking-q2",
        "prompt": "It usually follows…",
        "options": [
          {
            "id": "o0",
            "text": "Cheap candidate retrieval"
          },
          {
            "id": "o1",
            "text": "Model deletion"
          },
          {
            "id": "o2",
            "text": "Font install"
          },
          {
            "id": "o3",
            "text": "DNS flush"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Two stages."
      },
      {
        "id": "re-ranking-q3",
        "prompt": "What is the main goal of re-ranking before ChatGPT answers?",
        "options": [
          {
            "id": "o0",
            "text": "Higher precision of the context shown"
          },
          {
            "id": "o1",
            "text": "Raising the model temperature"
          },
          {
            "id": "o2",
            "text": "Making server fans louder"
          },
          {
            "id": "o3",
            "text": "Always increasing token prices"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Re-ranking improves which docs reach the prompt."
      }
    ],
    "prevConceptId": "hybrid-search",
    "nextConceptId": "context-budget"
  },
  {
    "id": "context-budget",
    "categoryId": "rag",
    "title": "Context budget",
    "subtitle": "Spend limited tokens wisely",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "re-ranking"
    ],
    "laymanSummary": "ChatGPT only fits a limited number of tokens: instructions, chat history, retrieved chunks, and room for the answer. RAG quality often means choosing the highest-signal snippets and leaving space—not pasting everything.",
    "analogy": "A fixed-size suitcase: folding and choosing beats bringing the whole closet.",
    "explanation": [
      "Count tokens for system rules, history, retrieved text, and the reply.",
      "Prefer high-signal chunks that actually change the answer.",
      "Trim low-value history or duplicate passages when space is tight.",
      "Watch for silent truncation that drops the important evidence.",
    ],
    "keyTerms": [
      {
        "term": "Budget",
        "definition": "How you allocate limited tokens"
      },
      {
        "term": "Truncation",
        "definition": "Cutting text that exceeds the limit"
      },
      {
        "term": "High-signal",
        "definition": "Evidence that changes the answer"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Context budget — visual walkthrough",
      "description": "Step through the core idea behind Context budget.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Count instruction tokens.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Add ranked chunks until budget.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Reserve answer space.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Generate.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Log what was dropped.",
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
          "Stuff until overflow",
          "Ranked fill with reserve",
          "Empty retrieval"
        ],
        "insights": {
          "Stuff until overflow": "Silent truncation risk.",
          "Ranked fill with reserve": "Budget-aware.",
          "Empty retrieval": "Under-grounded."
        },
        "selected": "Stuff until overflow"
      }
    },
    "realWorldExample": {
      "title": "Mobile support bot",
      "story": "A phone chat UI has a smaller context window. The bot ranks refund-policy chunks, keeps the top two paragraphs, and reserves tokens so ChatGPT can still write a full reply.",
      "takeaway": "Budget discipline is product quality, not a side detail."
    },
    "chatGptLens": {
      "setting": "Mobile ChatGPT support widget with a tight token limit.",
      "userInput": "Can I return shoes bought 28 days ago without the box?",
      "insideTheModel": "Many related FAQ chunks exist, but the app only packs the top-ranked return rules plus a little history—leaving room for ChatGPT’s answer tokens.",
      "modelOutput": "A clear yes/no from the packed policy lines, without dumping the entire returns PDF."
    },
    "quiz": [
      {
        "id": "context-budget-q1",
        "prompt": "Context budget is about…",
        "options": [
          {
            "id": "o0",
            "text": "Limited tokens to allocate"
          },
          {
            "id": "o1",
            "text": "Unlimited paste"
          },
          {
            "id": "o2",
            "text": "GPU watts only"
          },
          {
            "id": "o3",
            "text": "Cable length"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Allocation."
      },
      {
        "id": "context-budget-q2",
        "prompt": "You should reserve space for…",
        "options": [
          {
            "id": "o0",
            "text": "The answer generation"
          },
          {
            "id": "o1",
            "text": "Nothing"
          },
          {
            "id": "o2",
            "text": "Only ads"
          },
          {
            "id": "o3",
            "text": "Only emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Completion room."
      },
      {
        "id": "context-budget-q3",
        "prompt": "What should you usually do with low-signal retrieved chunks?",
        "options": [
          {
            "id": "o0",
            "text": "Deprioritize or drop them under the budget"
          },
          {
            "id": "o1",
            "text": "Always paste them first"
          },
          {
            "id": "o2",
            "text": "Use them to replace system instructions"
          },
          {
            "id": "o3",
            "text": "Print them on paper only"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Spend limited tokens on evidence that matters."
      }
    ],
    "prevConceptId": "re-ranking",
    "nextConceptId": "retrieval-pipeline"
  },
  {
    "id": "retrieval-pipeline",
    "categoryId": "rag",
    "title": "Retrieval pipeline",
    "subtitle": "End-to-end RAG flow",
    "difficulty": "intermediate",
    "estimatedMinutes": 9,
    "prerequisites": [
      "context-budget"
    ],
    "laymanSummary": "A retrieval pipeline is the full path: ingest docs, chunk, embed, index, retrieve, (re-rank), build the prompt, generate, and cite. Production RAG is this pipeline plus evals and access control—not a single magic ChatGPT call.",
    "analogy": "A newsroom: archive stories, index them, research for a question, then write with sources.",
    "explanation": [
      "Offline path: ingest → chunk → embed → index as docs change.",
      "Online path: user question → retrieve → optional re-rank → prompt assembly.",
      "ChatGPT (or another LLM) generates from the assembled grounded prompt.",
      "Citations and evals check that answers map back to real chunks.",
    ],
    "keyTerms": [
      {
        "term": "Ingest",
        "definition": "Load source documents into the system"
      },
      {
        "term": "Prompt assembly",
        "definition": "Build the grounded context for the model"
      },
      {
        "term": "Citation",
        "definition": "Link answer claims back to sources"
      },
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Retrieval pipeline — visual walkthrough",
      "description": "Step through the core idea behind Retrieval pipeline.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Ingest docs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Chunk and embed.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Query retrieves.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Rerank and assemble.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Generate grounded answer.",
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
      "kind": "rag-query",
      "title": "Run a mini RAG trace",
      "description": "Ask a question and see retrieve→stuff→answer stages.",
      "fixture": {
        "question": "What is our refund window?",
        "docs": [
          {
            "id": "d1",
            "text": "Refunds accepted within 30 days with receipt."
          },
          {
            "id": "d2",
            "text": "Shipping takes 3–5 business days."
          },
          {
            "id": "d3",
            "text": "Warranty covers manufacturing defects for 1 year."
          }
        ],
        "answer": "According to policy docs, refunds are accepted within 30 days with receipt."
      }
    },
    "realWorldExample": {
      "title": "Internal wiki assistant",
      "story": "Every night the pipeline refreshes wiki pages into chunks and embeddings. Next day, teammates ask ChatGPT “How do we request a laptop?” and get a grounded answer from today’s wiki.",
      "takeaway": "Fresh index, same generator model."
    },
    "chatGptLens": {
      "setting": "Company ChatGPT wired to the full RAG pipeline.",
      "userInput": "How do I request a work laptop?",
      "insideTheModel": "Query hits retrieve → (re-rank) → assemble prompt with IT wiki chunks → ChatGPT writes steps and attaches citations from those chunks.",
      "modelOutput": "Numbered steps from the IT wiki, plus links/IDs to the source pages."
    },
    "quiz": [
      {
        "id": "retrieval-pipeline-q1",
        "prompt": "RAG online path starts with…",
        "options": [
          {
            "id": "o0",
            "text": "A user query"
          },
          {
            "id": "o1",
            "text": "Deleting the index"
          },
          {
            "id": "o2",
            "text": "CSS build"
          },
          {
            "id": "o3",
            "text": "DNS renew"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Query time."
      },
      {
        "id": "retrieval-pipeline-q2",
        "prompt": "Prompt assembly…",
        "options": [
          {
            "id": "o0",
            "text": "Builds grounded context for the LLM"
          },
          {
            "id": "o1",
            "text": "Trains GPUs"
          },
          {
            "id": "o2",
            "text": "Paints icons"
          },
          {
            "id": "o3",
            "text": "Replaces chunking"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Context build."
      },
      {
        "id": "retrieval-pipeline-q3",
        "prompt": "What do citations connect in a RAG pipeline?",
        "options": [
          {
            "id": "o0",
            "text": "Answer claims to source chunks"
          },
          {
            "id": "o1",
            "text": "Fans to computer cases"
          },
          {
            "id": "o2",
            "text": "Fonts to GPUs"
          },
          {
            "id": "o3",
            "text": "Pods to CSS files"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Citations show provenance from answer to evidence."
      }
    ],
    "prevConceptId": "context-budget",
    "nextConceptId": "agentic-rag-intro"
  },
  {
    "id": "agentic-rag-intro",
    "categoryId": "rag",
    "title": "Agentic RAG intro",
    "subtitle": "Retrieve iteratively with decisions",
    "difficulty": "advanced",
    "estimatedMinutes": 8,
    "prerequisites": [
      "retrieval-pipeline"
    ],
    "laymanSummary": "Agentic RAG lets ChatGPT decide when to search again—maybe several lookups—before finishing the answer. It’s more flexible than one-shot retrieve-then-read, but needs limits so it doesn’t loop forever.",
    "analogy": "A researcher who searches, reads, notices a gap, searches again, then writes—not one Google query.",
    "explanation": [
      "The model plans what information is still missing.",
      "It can call search tools in a loop until evidence is enough.",
      "Stop conditions and tool budgets prevent endless spinning.",
      "Best for multi-hop questions that need several facts chained together.",
    ],
    "keyTerms": [
      {
        "term": "Multi-hop",
        "definition": "Needs several facts chained together"
      },
      {
        "term": "Tool budget",
        "definition": "Max searches or actions allowed"
      },
      {
        "term": "Stop condition",
        "definition": "Rule for when to finally answer"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Agentic RAG intro — visual walkthrough",
      "description": "Step through the core idea behind Agentic RAG intro.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Question needs two facts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "First retrieval partial.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Agent plans second query.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Combines evidence.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Answers with sources.",
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
      "kind": "agent-loop",
      "title": "Try the idea",
      "description": "Interactive local demo.",
      "fixture": {
        "goal": "Find tomorrow’s weather in Pune and suggest an outfit.",
        "steps": [
          {
            "thought": "I need a weather lookup tool.",
            "action": "weather_api(city=\"Pune\", day=\"tomorrow\")",
            "observation": "32°C, sunny"
          },
          {
            "thought": "Hot and sunny—recommend light clothes.",
            "action": "final_answer",
            "observation": "Wear breathable cotton; sunglasses optional."
          }
        ]
      }
    },
    "realWorldExample": {
      "title": "Competitive research brief",
      "story": "You ask ChatGPT for a rival’s pricing vs last quarter. The agent pulls a market note, realizes pricing is missing, searches the pricing page, then drafts a short brief with both sources.",
      "takeaway": "Iteration finds facts that one search misses."
    },
    "chatGptLens": {
      "setting": "ChatGPT agent with a docs search tool (agentic RAG).",
      "userInput": "Compare RivalCo’s list price this quarter vs last quarter.",
      "insideTheModel": "First search finds a market note (no prices). The agent plans a second query for the pricing page, combines both, then answers—within a max tool-call budget.",
      "modelOutput": "A short comparison table with both figures and the two sources it retrieved."
    },
    "quiz": [
      {
        "id": "agentic-rag-intro-q1",
        "prompt": "Agentic RAG retrieves…",
        "options": [
          {
            "id": "o0",
            "text": "Iteratively with decisions"
          },
          {
            "id": "o1",
            "text": "Exactly once always"
          },
          {
            "id": "o2",
            "text": "Never"
          },
          {
            "id": "o3",
            "text": "Only images"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Loops."
      },
      {
        "id": "agentic-rag-intro-q2",
        "prompt": "A risk is…",
        "options": [
          {
            "id": "o0",
            "text": "Unbounded tool loops"
          },
          {
            "id": "o1",
            "text": "Perfect safety automatic"
          },
          {
            "id": "o2",
            "text": "Free tokens"
          },
          {
            "id": "o3",
            "text": "No need for ACLs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Control needed."
      },
      {
        "id": "agentic-rag-intro-q3",
        "prompt": "Why do multi-hop questions often need agentic RAG?",
        "options": [
          {
            "id": "o0",
            "text": "They need multiple retrievals chained together"
          },
          {
            "id": "o1",
            "text": "One keyword search is always enough"
          },
          {
            "id": "o2",
            "text": "They never need documents"
          },
          {
            "id": "o3",
            "text": "They only need CSS files"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Several linked facts often require more than one search."
      }
    ],
    "prevConceptId": "retrieval-pipeline",
    "nextConceptId": "rag-failure-modes"
  },
  {
    "id": "rag-failure-modes",
    "categoryId": "rag",
    "title": "RAG failure modes",
    "subtitle": "Why grounded systems still fail",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "agentic-rag-intro"
    ],
    "laymanSummary": "RAG can still fail: wrong chunks, messy context, stale indexes, or ChatGPT ignoring the evidence (even inventing citations). Check retrieval and generation separately so you know which stage broke.",
    "analogy": "An open-book exam where you grab the wrong chapter—or read the right one and still misquote it.",
    "explanation": [
      "Missed retrieval: the answer never had a chance.",
      "Noisy or conflicting context distracts the model.",
      "The model may ignore good evidence or invent citations.",
      "Stale indexes serve yesterday’s truth—measure recall@k and groundedness.",
    ],
    "keyTerms": [
      {
        "term": "Recall@k",
        "definition": "Was the needed chunk in the top k?"
      },
      {
        "term": "Groundedness",
        "definition": "Claims supported by the given context"
      },
      {
        "term": "Index freshness",
        "definition": "How up to date the search store is"
      },
    ],
    "visualization": {
      "kind": "stepped",
      "title": "RAG failure modes — visual walkthrough",
      "description": "Step through the core idea behind RAG failure modes.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Ask a known question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Needed chunk missing.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Model invents.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Fix chunking/embeddings.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Answer becomes citable.",
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
          "No evals",
          "Recall@k + groundedness checks",
          "Trust all citations"
        ],
        "insights": {
          "No evals": "Blind.",
          "Recall@k + groundedness checks": "Healthy.",
          "Trust all citations": "Dangerous."
        },
        "selected": "No evals"
      }
    },
    "realWorldExample": {
      "title": "Wrong policy version served",
      "story": "HR updated casual leave from 10 to 12 days, but the index lagged. Employees asking ChatGPT still got “10 days” with a confident citation to the old chunk.",
      "takeaway": "Freshness is a reliability feature, not optional polish."
    },
    "chatGptLens": {
      "setting": "HR ChatGPT with a lagged RAG index after a policy update.",
      "userInput": "How many casual leaves do we get now?",
      "insideTheModel": "Search still ranks the old “10 days” chunk highest. ChatGPT faithfully answers from that stale evidence—grounded to the wrong version.",
      "modelOutput": "“You get 10 casual leaves (handbook).” — confident, cited, and outdated until the index refreshes."
    },
    "quiz": [
      {
        "id": "rag-failure-modes-q1",
        "prompt": "If retrieval misses, generation often…",
        "options": [
          {
            "id": "o0",
            "text": "Hallucinates or abstains poorly"
          },
          {
            "id": "o1",
            "text": "Becomes perfectly true"
          },
          {
            "id": "o2",
            "text": "Speeds DNS"
          },
          {
            "id": "o3",
            "text": "Fixes CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "No evidence."
      },
      {
        "id": "rag-failure-modes-q2",
        "prompt": "Evaluate…",
        "options": [
          {
            "id": "o0",
            "text": "Retrieval and generation separately"
          },
          {
            "id": "o1",
            "text": "Only font size"
          },
          {
            "id": "o2",
            "text": "Only GPU brand"
          },
          {
            "id": "o3",
            "text": "Only cable length"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Two stages."
      },
      {
        "id": "rag-failure-modes-q3",
        "prompt": "Why are fabricated citations a serious RAG failure mode?",
        "options": [
          {
            "id": "o0",
            "text": "They look trustworthy but point to nothing real"
          },
          {
            "id": "o1",
            "text": "They are impossible with any LLM"
          },
          {
            "id": "o2",
            "text": "They are required for every answer"
          },
          {
            "id": "o3",
            "text": "They are just another vector metric"
          },
        ],
        "correctOptionId": "o0",
        "explanation": "Fake citations create false confidence—always verify links to real chunks."
      }
    ],
    "prevConceptId": "agentic-rag-intro"
  }
] as Concept[];
