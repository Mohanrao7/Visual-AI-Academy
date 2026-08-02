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
    "laymanSummary": "Retrieval-Augmented Generation (RAG) fetches relevant documents at query time and conditions the model on that evidence. It reduces reliance on parametric memory for private or changing facts and makes citations possible.",
    "analogy": "An open-book exam: instead of memorizing every page, look up the chapter you need, then write the answer.",
    "explanation": [
      "LLMs have stale or missing private knowledge.",
      "Retrieve first, then generate.",
      "Enables citations and updates without full retraining.",
      "Still fails if retrieval misses or context is misused."
    ],
    "keyTerms": [
      {
        "term": "RAG",
        "definition": "Retrieve then generate"
      },
      {
        "term": "Parametric knowledge",
        "definition": "Facts stored in weights"
      },
      {
        "term": "Grounding",
        "definition": "Basing answers on evidence"
      }
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
      "title": "HR policy assistant",
      "story": "Employees ask about leave; answers come from the latest handbook chunks.",
      "takeaway": "Update docs without retraining the LLM."
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
        "prompt": "RAG guarantees no hallucinations.",
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
            "text": "Only on Fridays"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Bad retrieval still fails."
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
    "laymanSummary": "Chunking splits documents into passages sized for embedding and context budgets. Too large and retrieval is noisy; too small and meaning fragments. Overlap and structure-aware splits (headings, code functions) often help.",
    "analogy": "Indexing a textbook by coherent sections instead of one giant blob or single sentences with no context.",
    "explanation": [
      "Choose chunk size for embedder and LLM.",
      "Preserve semantic boundaries.",
      "Overlap reduces boundary loss.",
      "Metadata keeps source trail."
    ],
    "keyTerms": [
      {
        "term": "Chunk",
        "definition": "A retrievable text passage"
      },
      {
        "term": "Overlap",
        "definition": "Shared text between adjacent chunks"
      },
      {
        "term": "Metadata",
        "definition": "Source, page, section labels"
      }
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
      "title": "API docs RAG",
      "story": "Split by endpoint sections so retrieval returns whole endpoint explanations.",
      "takeaway": "Structure-aware chunks win."
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
        "prompt": "Metadata helps…",
        "options": [
          {
            "id": "o0",
            "text": "Cite and filter sources"
          },
          {
            "id": "o1",
            "text": "Heat the room"
          },
          {
            "id": "o2",
            "text": "Bold fonts"
          },
          {
            "id": "o3",
            "text": "Route Ethernet"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Provenance."
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
    "laymanSummary": "Retrieval embeddings map queries and document chunks into a shared vector space so similar meanings neighbor each other. Embedding model choice, domain fit, and instruction formats strongly affect recall.",
    "analogy": "Library call numbers for meaning: related books shelved near each other so you can walk to the right aisle.",
    "explanation": [
      "Embed chunks offline.",
      "Embed query online.",
      "Compare vectors by similarity.",
      "Domain mismatch hurts recall.",
      "Re-embed when chunking changes."
    ],
    "keyTerms": [
      {
        "term": "Retrieval embedding",
        "definition": "Vector used for search"
      },
      {
        "term": "Recall",
        "definition": "Did we fetch the needed evidence?"
      },
      {
        "term": "Domain fit",
        "definition": "Match between embedder and corpus"
      }
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
      "title": "Bug tracker search",
      "story": "Semantic search finds issues describing the same crash with different words.",
      "takeaway": "Meaning beats keywords alone."
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
        "prompt": "Changing chunking usually means…",
        "options": [
          {
            "id": "o0",
            "text": "Re-embedding"
          },
          {
            "id": "o1",
            "text": "Never updating vectors"
          },
          {
            "id": "o2",
            "text": "Deleting the LLM"
          },
          {
            "id": "o3",
            "text": "Banning metadata"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Keep index consistent."
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
    "laymanSummary": "A vector database stores embeddings plus metadata and supports nearest-neighbor search at scale. It is the index behind most RAG stacks. Think retrieval engine, not a replacement for your system of record.",
    "analogy": "A specialized card catalog for coordinates of meaning, with filters for author and date.",
    "explanation": [
      "Upsert vectors with IDs and metadata.",
      "Query by nearest neighbors.",
      "Filter with metadata.",
      "ANN algorithms trade exactness for speed.",
      "Still need the original text store."
    ],
    "keyTerms": [
      {
        "term": "ANN",
        "definition": "Approximate nearest neighbor search"
      },
      {
        "term": "Upsert",
        "definition": "Insert or update a vector record"
      },
      {
        "term": "Metadata filter",
        "definition": "Constrain search by fields"
      }
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
      "story": "Teams store millions of chunk vectors with ACL metadata filters.",
      "takeaway": "Scale and permissions meet."
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
        "prompt": "Vector DB replaces your source docs store.",
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
            "text": "Only in YAML"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "It indexes; source of truth remains elsewhere."
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
    "laymanSummary": "Similarity search ranks stored vectors by closeness to the query embedding using metrics like cosine similarity or inner product. Top-k results become candidate passages for the LLM.",
    "analogy": "Standing at a map pin and asking who is closest to me.",
    "explanation": [
      "Embed the query.",
      "Score against index.",
      "Take top-k.",
      "Optionally threshold.",
      "Feed texts downstream."
    ],
    "keyTerms": [
      {
        "term": "Top-k",
        "definition": "Return k nearest items"
      },
      {
        "term": "Cosine similarity",
        "definition": "Angle-based score"
      },
      {
        "term": "Candidate set",
        "definition": "Retrieved passages before rerank"
      }
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
      "title": "FAQ deflection",
      "story": "Similar past answers retrieved for new tickets.",
      "takeaway": "Neighbors suggest solutions."
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
        "prompt": "Cosine similarity cares a lot about…",
        "options": [
          {
            "id": "o0",
            "text": "Vector direction"
          },
          {
            "id": "o1",
            "text": "Cable color"
          },
          {
            "id": "o2",
            "text": "Fan stickers"
          },
          {
            "id": "o3",
            "text": "Mouse DPI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Direction/angle."
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
    "laymanSummary": "Hybrid search blends lexical matching (BM25/keywords) with vector similarity. Keywords catch exact IDs and rare terms; vectors catch paraphrases. Fusion methods merge ranked lists into a stronger candidate set.",
    "analogy": "Using both the index at the back of a book and a librarian who understands meaning.",
    "explanation": [
      "Run keyword and vector retrieval.",
      "Fuse rankings.",
      "Boost exact SKUs and codes.",
      "Tune weights per corpus.",
      "Often beats either alone."
    ],
    "keyTerms": [
      {
        "term": "BM25",
        "definition": "Classic lexical ranking"
      },
      {
        "term": "Fusion",
        "definition": "Combine ranked lists"
      },
      {
        "term": "Exact match",
        "definition": "Literal string hits"
      }
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
      "title": "E-commerce support",
      "story": "Order IDs need keywords; fuzzy symptom descriptions need vectors.",
      "takeaway": "Hybrid covers both."
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
        "prompt": "Vectors help with…",
        "options": [
          {
            "id": "o0",
            "text": "Paraphrases"
          },
          {
            "id": "o1",
            "text": "Only identical strings"
          },
          {
            "id": "o2",
            "text": "HDMI hotplug"
          },
          {
            "id": "o3",
            "text": "CSS :hover"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Meaning."
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
    "laymanSummary": "Re-ranking takes a broader candidate set from cheap retrieval and scores each query-document pair with a stronger model. It improves precision before the LLM sees context, at extra compute cost.",
    "analogy": "A first pass grabs 50 library books quickly; an expert skims and keeps the best 5.",
    "explanation": [
      "Retrieve many candidates cheaply.",
      "Score pairs with a cross-encoder or LLM judge.",
      "Keep top n.",
      "Trade latency for precision.",
      "Garbage in still limits quality."
    ],
    "keyTerms": [
      {
        "term": "Cross-encoder",
        "definition": "Model scoring a query-doc pair together"
      },
      {
        "term": "Precision",
        "definition": "Are top results relevant?"
      },
      {
        "term": "Candidate generation",
        "definition": "First-stage retrieval"
      }
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
      "title": "Legal research assistants",
      "story": "Re-rankers prioritize truly on-point case passages.",
      "takeaway": "Precision matters under liability."
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
        "prompt": "Goal is higher…",
        "options": [
          {
            "id": "o0",
            "text": "Precision of context"
          },
          {
            "id": "o1",
            "text": "Temperature"
          },
          {
            "id": "o2",
            "text": "Fan noise"
          },
          {
            "id": "o3",
            "text": "Token prices always"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Better top docs."
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
    "laymanSummary": "The context budget is how many tokens you can afford for instructions, history, retrieved chunks, and the answer. RAG quality often hinges on what you include and exclude under that budget.",
    "analogy": "A fixed-size suitcase: folding and choosing beats bringing the whole closet.",
    "explanation": [
      "Measure token costs of each section.",
      "Prefer high-signal chunks.",
      "Compress or omit low-value history.",
      "Leave room for the answer.",
      "Monitor truncation bugs."
    ],
    "keyTerms": [
      {
        "term": "Budget",
        "definition": "Token capacity allocation"
      },
      {
        "term": "Truncation",
        "definition": "Cutting overflow"
      },
      {
        "term": "High-signal",
        "definition": "Evidence that changes the answer"
      }
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
      "title": "Mobile support bots",
      "story": "Smaller windows force aggressive chunk selection.",
      "takeaway": "Budget discipline is product quality."
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
        "prompt": "Low-signal chunks should be…",
        "options": [
          {
            "id": "o0",
            "text": "Deprioritized"
          },
          {
            "id": "o1",
            "text": "Always included first"
          },
          {
            "id": "o2",
            "text": "Used to replace instructions"
          },
          {
            "id": "o3",
            "text": "Printed"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Prioritize signal."
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
    "laymanSummary": "A retrieval pipeline chains ingest, chunk, embed, index, retrieve, (rerank), prompt assembly, generate, and cite. Production RAG is this pipeline plus evaluation and access control—not a single API call.",
    "analogy": "A newsroom workflow: archive stories, index them, research for a question, then write with sources.",
    "explanation": [
      "Offline path builds the index.",
      "Online path answers a query.",
      "Assembly builds the grounded prompt.",
      "Citations map claims to chunks.",
      "Evals measure retrieval and answer quality."
    ],
    "keyTerms": [
      {
        "term": "Ingest",
        "definition": "Load source documents"
      },
      {
        "term": "Prompt assembly",
        "definition": "Build the grounded context"
      },
      {
        "term": "Citation",
        "definition": "Link answer spans to sources"
      }
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
      "story": "Pipeline refreshes nightly as wiki pages change.",
      "takeaway": "Fresh index, same generator."
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
        "prompt": "Citations connect…",
        "options": [
          {
            "id": "o0",
            "text": "Answers to sources"
          },
          {
            "id": "o1",
            "text": "Fans to cases"
          },
          {
            "id": "o2",
            "text": "Fonts to GPUs"
          },
          {
            "id": "o3",
            "text": "Pods to CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Provenance."
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
    "laymanSummary": "Agentic RAG lets the model decide when and what to retrieve, possibly running multiple search steps, comparing sources, or asking clarifying questions. It is more flexible than one-shot retrieve-then-read, and more failure-prone without limits.",
    "analogy": "A researcher who searches, reads, realizes a gap, searches again, then writes—not a single Google query.",
    "explanation": [
      "Plan information needs.",
      "Retrieve in loops.",
      "Stop when enough evidence.",
      "Needs tool budgets and audits.",
      "Great for multi-hop questions."
    ],
    "keyTerms": [
      {
        "term": "Multi-hop",
        "definition": "Needs several facts chained"
      },
      {
        "term": "Tool budget",
        "definition": "Max retrieval/actions"
      },
      {
        "term": "Stop condition",
        "definition": "When to answer"
      }
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
      "title": "Competitive research briefs",
      "story": "Agent pulls market notes then pricing pages before drafting.",
      "takeaway": "Iteration finds multi-hop facts."
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
        "prompt": "Multi-hop questions often need…",
        "options": [
          {
            "id": "o0",
            "text": "Multiple retrievals"
          },
          {
            "id": "o1",
            "text": "One keyword only"
          },
          {
            "id": "o2",
            "text": "No docs"
          },
          {
            "id": "o3",
            "text": "CSS only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Several facts."
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
    "laymanSummary": "RAG fails when chunking is bad, embeddings miss, filters exclude the truth, context is noisy, the model ignores evidence, or citations are fabricated. Evaluate retrieval and generation separately.",
    "analogy": "An open-book exam where you grab the wrong chapter, or read the right chapter and still misquote it.",
    "explanation": [
      "Missed retrieval: answer has no chance.",
      "Noisy context: model gets distracted.",
      "Refusal to use evidence: ungrounded prose.",
      "Stale indexes: outdated truth.",
      "Measure recall@k and groundedness."
    ],
    "keyTerms": [
      {
        "term": "Recall@k",
        "definition": "Was the needed chunk in top k?"
      },
      {
        "term": "Groundedness",
        "definition": "Claims supported by context"
      },
      {
        "term": "Index freshness",
        "definition": "How up to date the store is"
      }
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
      "story": "Index lagged after handbook update; bot cited old leave days.",
      "takeaway": "Freshness is a reliability feature."
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
        "prompt": "Fabricated citations are…",
        "options": [
          {
            "id": "o0",
            "text": "A known failure mode"
          },
          {
            "id": "o1",
            "text": "Impossible"
          },
          {
            "id": "o2",
            "text": "Required"
          },
          {
            "id": "o3",
            "text": "A vector metric"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Must check."
      }
    ],
    "prevConceptId": "agentic-rag-intro"
  }
] as Concept[];
