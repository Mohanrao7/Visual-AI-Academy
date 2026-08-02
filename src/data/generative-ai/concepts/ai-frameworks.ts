import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "langchain",
    "categoryId": "ai-frameworks",
    "title": "LangChain",
    "subtitle": "Composable chains and tool wrappers",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [],
    "laymanSummary": "LangChain is a popular framework for composing prompts, retrievers, tools, and memory into LLM applications. Conceptually it standardizes building blocks so you can assemble RAG and agents faster—while still owning evaluation and architecture choices.",
    "analogy": "A box of LEGO adapters for LLM apps: useful accelerators, not a substitute for design.",
    "explanation": [
      "Chains compose steps.",
      "Integrations wrap many vendors.",
      "Abstractions can hide costs/complexity.",
      "Great for prototypes; mind lock-in and opacity."
    ],
    "keyTerms": [
      {
        "term": "Chain",
        "definition": "Pipeline of LLM steps"
      },
      {
        "term": "Integration",
        "definition": "Connector to a vendor/tool"
      },
      {
        "term": "Runnable",
        "definition": "Composable unit of work"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LangChain — visual walkthrough",
      "description": "Step through the core idea behind LangChain.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define a prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Add a retriever.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Call an LLM.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Parse output.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Ship a thin app.",
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
          "Raw SDK only",
          "LangChain-style composition",
          "Framework with zero observability"
        ],
        "insights": {
          "Raw SDK only": "More control.",
          "LangChain-style composition": "Faster assembly.",
          "Framework with zero observability": "Hard to debug."
        },
        "selected": "Raw SDK only"
      }
    },
    "realWorldExample": {
      "title": "Weekend RAG demo",
      "story": "Students wire PDF loader → split → vectorstore → QA chain quickly.",
      "takeaway": "Speed for learning and spikes."
    },
    "quiz": [
      {
        "id": "langchain-q1",
        "prompt": "LangChain is mainly…",
        "options": [
          {
            "id": "o0",
            "text": "A composition framework for LLM apps"
          },
          {
            "id": "o1",
            "text": "A GPU"
          },
          {
            "id": "o2",
            "text": "A CSS engine"
          },
          {
            "id": "o3",
            "text": "A vector metric"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Framework."
      },
      {
        "id": "langchain-q2",
        "prompt": "A risk of heavy abstraction is…",
        "options": [
          {
            "id": "o0",
            "text": "Hidden complexity and cost"
          },
          {
            "id": "o1",
            "text": "Guaranteed correctness"
          },
          {
            "id": "o2",
            "text": "Free hosting"
          },
          {
            "id": "o3",
            "text": "No need for evals"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Opacity."
      },
      {
        "id": "langchain-q3",
        "prompt": "It often helps…",
        "options": [
          {
            "id": "o0",
            "text": "Prototype RAG/agents faster"
          },
          {
            "id": "o1",
            "text": "Replace all databases"
          },
          {
            "id": "o2",
            "text": "Ban Python"
          },
          {
            "id": "o3",
            "text": "Delete prompts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Speed."
      }
    ],
    "nextConceptId": "langgraph"
  },
  {
    "id": "langgraph",
    "categoryId": "ai-frameworks",
    "title": "LangGraph",
    "subtitle": "Graph-based agent control flow",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "langchain"
    ],
    "laymanSummary": "LangGraph models agent workflows as graphs with nodes, edges, and explicit state—useful for durable, branching, human-in-the-loop agent systems beyond linear chains.",
    "analogy": "A flowchart you can execute: boxes are steps, arrows are decisions, and sticky notes are state.",
    "explanation": [
      "State is first-class.",
      "Graphs support cycles and branches.",
      "Good for durable agents.",
      "More structure than free-form loops."
    ],
    "keyTerms": [
      {
        "term": "Node",
        "definition": "A computation step"
      },
      {
        "term": "Edge",
        "definition": "Transition between steps"
      },
      {
        "term": "Durable execution",
        "definition": "Resume-friendly runs"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LangGraph — visual walkthrough",
      "description": "Step through the core idea behind LangGraph.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define state schema.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Add nodes for retrieve/act/approve.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Connect edges.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Compile graph.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Run with checkpoints.",
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
          "Linear chain only",
          "Stateful graph with HITL node",
          "Spaghetti callbacks"
        ],
        "insights": {
          "Linear chain only": "Simple paths.",
          "Stateful graph with HITL node": "LangGraph sweet spot.",
          "Spaghetti callbacks": "Hard to reason."
        },
        "selected": "Linear chain only"
      }
    },
    "realWorldExample": {
      "title": "Approval-heavy ops bots",
      "story": "Graph pauses on HITL nodes then resumes.",
      "takeaway": "Control flow matches business process."
    },
    "quiz": [
      {
        "id": "langgraph-q1",
        "prompt": "LangGraph emphasizes…",
        "options": [
          {
            "id": "o0",
            "text": "Graph control flow and state"
          },
          {
            "id": "o1",
            "text": "Only CSS grids"
          },
          {
            "id": "o2",
            "text": "Only cosine"
          },
          {
            "id": "o3",
            "text": "Only HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Graphs."
      },
      {
        "id": "langgraph-q2",
        "prompt": "Cycles in graphs enable…",
        "options": [
          {
            "id": "o0",
            "text": "Agent loops"
          },
          {
            "id": "o1",
            "text": "Perfect truth"
          },
          {
            "id": "o2",
            "text": "Free GPUs"
          },
          {
            "id": "o3",
            "text": "No state"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Loops."
      },
      {
        "id": "langgraph-q3",
        "prompt": "Durable execution helps…",
        "options": [
          {
            "id": "o0",
            "text": "Resume long runs"
          },
          {
            "id": "o1",
            "text": "Delete logs"
          },
          {
            "id": "o2",
            "text": "Ban approvals"
          },
          {
            "id": "o3",
            "text": "Avoid schemas"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Recovery."
      }
    ],
    "prevConceptId": "langchain",
    "nextConceptId": "llamaindex"
  },
  {
    "id": "llamaindex",
    "categoryId": "ai-frameworks",
    "title": "LlamaIndex",
    "subtitle": "Data framework for LLM retrieval apps",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "langgraph"
    ],
    "laymanSummary": "LlamaIndex focuses on connecting LLMs to data: indexes, query engines, and retrieval abstractions. Conceptually reach for it when your core problem is document QA and structured data access patterns.",
    "analogy": "A librarian toolkit specialized for getting the right pages into the model’s hands.",
    "explanation": [
      "Indexes over documents and more.",
      "Query engines encapsulate retrieval+synthesis.",
      "Strong fit for RAG-centric apps.",
      "Still needs evals for faithfulness."
    ],
    "keyTerms": [
      {
        "term": "Index",
        "definition": "Data structure for retrieval"
      },
      {
        "term": "Query engine",
        "definition": "Retrieval plus answer interface"
      },
      {
        "term": "Node parser",
        "definition": "Chunking component"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LlamaIndex — visual walkthrough",
      "description": "Step through the core idea behind LlamaIndex.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Load documents.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Build an index.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Create a query engine.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Ask questions.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Return grounded answers.",
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
          "Chat with no docs",
          "Index docs + query engine",
          "Fine-tune for every FAQ edit"
        ],
        "insights": {
          "Chat with no docs": "Ungrounded.",
          "Index docs + query engine": "LlamaIndex-style.",
          "Fine-tune for every FAQ edit": "Heavy-handed."
        },
        "selected": "Chat with no docs"
      }
    },
    "realWorldExample": {
      "title": "Course material tutors",
      "story": "Index lecture PDFs for student questions.",
      "takeaway": "Data-first framework fit."
    },
    "quiz": [
      {
        "id": "llamaindex-q1",
        "prompt": "LlamaIndex is especially known for…",
        "options": [
          {
            "id": "o0",
            "text": "Data/RAG indexing patterns"
          },
          {
            "id": "o1",
            "text": "Painting icons"
          },
          {
            "id": "o2",
            "text": "Training GPUs from CSS"
          },
          {
            "id": "o3",
            "text": "DHCP"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Data framework."
      },
      {
        "id": "llamaindex-q2",
        "prompt": "A query engine typically…",
        "options": [
          {
            "id": "o0",
            "text": "Retrieves and synthesizes answers"
          },
          {
            "id": "o1",
            "text": "Only trains diffusion"
          },
          {
            "id": "o2",
            "text": "Only styles buttons"
          },
          {
            "id": "o3",
            "text": "Only pings hosts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "RAG interface."
      },
      {
        "id": "llamaindex-q3",
        "prompt": "You still need…",
        "options": [
          {
            "id": "o0",
            "text": "Evaluation of groundedness"
          },
          {
            "id": "o1",
            "text": "Zero tests"
          },
          {
            "id": "o2",
            "text": "No chunking"
          },
          {
            "id": "o3",
            "text": "No metadata"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Evals remain."
      }
    ],
    "prevConceptId": "langgraph",
    "nextConceptId": "crewai"
  },
  {
    "id": "crewai",
    "categoryId": "ai-frameworks",
    "title": "CrewAI",
    "subtitle": "Role-playing multi-agent crews",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "llamaindex"
    ],
    "laymanSummary": "CrewAI popularizes multi-agent “crews” with roles, tasks, and collaboration patterns. Conceptually it is an orchestration layer for role-based agent teams, with the usual multi-agent tradeoffs.",
    "analogy": "Assigning producer, writer, and editor roles on a small film set.",
    "explanation": [
      "Define agents with roles.",
      "Assign tasks.",
      "Orchestrate collaboration.",
      "Watch cost and loops.",
      "Validate outputs per role."
    ],
    "keyTerms": [
      {
        "term": "Crew",
        "definition": "Team of agents"
      },
      {
        "term": "Task",
        "definition": "Unit of work"
      },
      {
        "term": "Role",
        "definition": "Persona and responsibilities"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "CrewAI — visual walkthrough",
      "description": "Step through the core idea behind CrewAI.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Create researcher agent.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Create writer agent.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Assign tasks to crew.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Collaborate.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Emit final deliverable.",
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
          "Single agent draft",
          "Crew with researcher+writer",
          "Twenty agents rewrite forever"
        ],
        "insights": {
          "Single agent draft": "Simple.",
          "Crew with researcher+writer": "Crew-style.",
          "Twenty agents rewrite forever": "Waste."
        },
        "selected": "Single agent draft"
      }
    },
    "realWorldExample": {
      "title": "Content pipelines",
      "story": "Researcher gathers sources; writer drafts; editor polishes.",
      "takeaway": "Roles mirror human teams."
    },
    "quiz": [
      {
        "id": "crewai-q1",
        "prompt": "CrewAI centers on…",
        "options": [
          {
            "id": "o0",
            "text": "Role-based multi-agent teams"
          },
          {
            "id": "o1",
            "text": "Only vector math"
          },
          {
            "id": "o2",
            "text": "Only Kubernetes"
          },
          {
            "id": "o3",
            "text": "Only CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Crews."
      },
      {
        "id": "crewai-q2",
        "prompt": "A key tradeoff is…",
        "options": [
          {
            "id": "o0",
            "text": "Coordination cost"
          },
          {
            "id": "o1",
            "text": "Guaranteed cheaper answers"
          },
          {
            "id": "o2",
            "text": "No need for tools"
          },
          {
            "id": "o3",
            "text": "Perfect safety"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Overhead."
      },
      {
        "id": "crewai-q3",
        "prompt": "Tasks should be…",
        "options": [
          {
            "id": "o0",
            "text": "Clear per role"
          },
          {
            "id": "o1",
            "text": "Infinite and vague"
          },
          {
            "id": "o2",
            "text": "Secret from logs"
          },
          {
            "id": "o3",
            "text": "Unowned"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Clarity."
      }
    ],
    "prevConceptId": "llamaindex",
    "nextConceptId": "autogen"
  },
  {
    "id": "autogen",
    "categoryId": "ai-frameworks",
    "title": "AutoGen",
    "subtitle": "Multi-agent conversation frameworks",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "crewai"
    ],
    "laymanSummary": "AutoGen (and similar systems) structure multi-agent applications as conversations between agents—including user proxies and tool-using assistants. The conversation metaphor makes patterns easy to sketch and easy to overcomplicate.",
    "analogy": "A group chat where each participant has a job and can call tools when needed.",
    "explanation": [
      "Agents message each other.",
      "User proxy can represent humans/tools.",
      "Conversation policies control turns.",
      "Needs termination conditions."
    ],
    "keyTerms": [
      {
        "term": "User proxy",
        "definition": "Agent representing user/side effects"
      },
      {
        "term": "Assistant agent",
        "definition": "LLM-backed participant"
      },
      {
        "term": "Termination",
        "definition": "When chat stops"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "AutoGen — visual walkthrough",
      "description": "Step through the core idea behind AutoGen.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User proxy posts a goal.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Assistant proposes a plan.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Tool calls execute.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Agents discuss results.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Terminate with answer.",
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
          "Solo LLM call",
          "Multi-agent conversation with termination",
          "Infinite agent debate"
        ],
        "insights": {
          "Solo LLM call": "Minimal.",
          "Multi-agent conversation with termination": "AutoGen-like.",
          "Infinite agent debate": "Failure."
        },
        "selected": "Solo LLM call"
      }
    },
    "realWorldExample": {
      "title": "Coding helper groups",
      "story": "One agent writes code; another runs tests via tools.",
      "takeaway": "Conversation drives iteration."
    },
    "quiz": [
      {
        "id": "autogen-q1",
        "prompt": "AutoGen-style systems often model…",
        "options": [
          {
            "id": "o0",
            "text": "Agents as conversing participants"
          },
          {
            "id": "o1",
            "text": "Only CSS grids"
          },
          {
            "id": "o2",
            "text": "Only cosine distance"
          },
          {
            "id": "o3",
            "text": "Only HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Conversations."
      },
      {
        "id": "autogen-q2",
        "prompt": "Termination conditions…",
        "options": [
          {
            "id": "o0",
            "text": "Stop runaway chats"
          },
          {
            "id": "o1",
            "text": "Invite infinite loops"
          },
          {
            "id": "o2",
            "text": "Delete tools"
          },
          {
            "id": "o3",
            "text": "Ban state"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stops."
      },
      {
        "id": "autogen-q3",
        "prompt": "User proxies can…",
        "options": [
          {
            "id": "o0",
            "text": "Represent humans or tool sides"
          },
          {
            "id": "o1",
            "text": "Replace electricity"
          },
          {
            "id": "o2",
            "text": "Paint SVGs"
          },
          {
            "id": "o3",
            "text": "Set DNS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Bridge roles."
      }
    ],
    "prevConceptId": "crewai",
    "nextConceptId": "google-adk"
  },
  {
    "id": "google-adk",
    "categoryId": "ai-frameworks",
    "title": "Google ADK",
    "subtitle": "Agent development kit mindset",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "autogen"
    ],
    "laymanSummary": "Agent Development Kits (such as Google’s ADK conceptually) package patterns for building, evaluating, and deploying agents with cloud-native integrations. Think batteries-included tooling around orchestration, tools, and ops—not a new model architecture.",
    "analogy": "A robotics starter kit: motors, sensors, and manuals so you build a robot faster than inventing parts.",
    "explanation": [
      "Opinionated agent scaffolding.",
      "Cloud integrations nearby.",
      "Emphasis on tooling and lifecycle.",
      "Portability varies by kit."
    ],
    "keyTerms": [
      {
        "term": "ADK",
        "definition": "Agent development kit"
      },
      {
        "term": "Scaffolding",
        "definition": "Starter structure"
      },
      {
        "term": "Lifecycle",
        "definition": "Build, eval, deploy, monitor"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Google ADK — visual walkthrough",
      "description": "Step through the core idea behind Google ADK.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Scaffold an agent project.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Wire tools.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Add eval harness.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Deploy to cloud runtime.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Monitor traces.",
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
          "From-scratch agent runtime",
          "ADK-style scaffold",
          "Copy a random notebook forever"
        ],
        "insights": {
          "From-scratch agent runtime": "Max control.",
          "ADK-style scaffold": "Faster standards.",
          "Copy a random notebook forever": "Fragile."
        },
        "selected": "From-scratch agent runtime"
      }
    },
    "realWorldExample": {
      "title": "Enterprise agent platforms",
      "story": "Kits standardize how teams ship internal agents.",
      "takeaway": "Shared scaffolding beats one-offs."
    },
    "quiz": [
      {
        "id": "google-adk-q1",
        "prompt": "An ADK is mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Scaffolding and tools for building agents"
          },
          {
            "id": "o1",
            "text": "A tokenizer"
          },
          {
            "id": "o2",
            "text": "A loss curve"
          },
          {
            "id": "o3",
            "text": "A font"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Dev kit."
      },
      {
        "id": "google-adk-q2",
        "prompt": "Kits often include…",
        "options": [
          {
            "id": "o0",
            "text": "Lifecycle and integration helpers"
          },
          {
            "id": "o1",
            "text": "Guaranteed AGI"
          },
          {
            "id": "o2",
            "text": "Free unlimited tokens"
          },
          {
            "id": "o3",
            "text": "No need for auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Lifecycle."
      },
      {
        "id": "google-adk-q3",
        "prompt": "Portability…",
        "options": [
          {
            "id": "o0",
            "text": "May vary by vendor kit"
          },
          {
            "id": "o1",
            "text": "Is always perfect"
          },
          {
            "id": "o2",
            "text": "Is irrelevant"
          },
          {
            "id": "o3",
            "text": "Means no logs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Mind lock-in."
      }
    ],
    "prevConceptId": "autogen",
    "nextConceptId": "litellm"
  },
  {
    "id": "litellm",
    "categoryId": "ai-frameworks",
    "title": "LiteLLM",
    "subtitle": "One interface across many model APIs",
    "difficulty": "beginner",
    "estimatedMinutes": 5,
    "prerequisites": [
      "google-adk"
    ],
    "laymanSummary": "LiteLLM provides a unified API layer to call many LLM vendors with similar request shapes. Conceptually it reduces glue code when you want provider failover, routing, or simpler swaps—while you still handle prompts and safety.",
    "analogy": "A universal remote that speaks many TV brands’ dialects.",
    "explanation": [
      "Normalize chat completion calls.",
      "Route across providers.",
      "Helpful for failover and cost routing.",
      "Does not solve evaluation by itself."
    ],
    "keyTerms": [
      {
        "term": "Provider",
        "definition": "Model vendor/API"
      },
      {
        "term": "Routing",
        "definition": "Choose which model/endpoint"
      },
      {
        "term": "Failover",
        "definition": "Switch on errors"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LiteLLM — visual walkthrough",
      "description": "Step through the core idea behind LiteLLM.",
      "steps": [
        {
          "id": "step-1",
          "caption": "App calls unified API.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "LiteLLM-style router selects provider.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Request translated.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Response normalized.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "App continues.",
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
          "Hardcode one vendor SDK",
          "Unified router across vendors",
          "Call every vendor for every token blindly"
        ],
        "insights": {
          "Hardcode one vendor SDK": "Simple, less portable.",
          "Unified router across vendors": "LiteLLM-like.",
          "Call every vendor for every token blindly": "Wasteful."
        },
        "selected": "Hardcode one vendor SDK"
      }
    },
    "realWorldExample": {
      "title": "Multi-cloud copilots",
      "story": "Teams fail over when one vendor rate-limits.",
      "takeaway": "Indirection buys resilience."
    },
    "quiz": [
      {
        "id": "litellm-q1",
        "prompt": "LiteLLM-style layers…",
        "options": [
          {
            "id": "o0",
            "text": "Unify many model APIs"
          },
          {
            "id": "o1",
            "text": "Train diffusion"
          },
          {
            "id": "o2",
            "text": "Replace vector DBs"
          },
          {
            "id": "o3",
            "text": "Compile CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Unified API."
      },
      {
        "id": "litellm-q2",
        "prompt": "Useful for…",
        "options": [
          {
            "id": "o0",
            "text": "Routing and failover"
          },
          {
            "id": "o1",
            "text": "Guaranteeing truth"
          },
          {
            "id": "o2",
            "text": "Deleting prompts"
          },
          {
            "id": "o3",
            "text": "Removing auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ops flexibility."
      },
      {
        "id": "litellm-q3",
        "prompt": "You still must…",
        "options": [
          {
            "id": "o0",
            "text": "Design prompts and safety"
          },
          {
            "id": "o1",
            "text": "Do nothing"
          },
          {
            "id": "o2",
            "text": "Ban logging"
          },
          {
            "id": "o3",
            "text": "Ignore costs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "App logic remains."
      }
    ],
    "prevConceptId": "google-adk",
    "nextConceptId": "framework-comparison"
  },
  {
    "id": "framework-comparison",
    "categoryId": "ai-frameworks",
    "title": "When to use what",
    "subtitle": "Choose tools by job, not hype",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "litellm"
    ],
    "laymanSummary": "Pick frameworks by your bottleneck: raw SDK for control, LangChain for composable prototypes, LangGraph for durable agent graphs, LlamaIndex for data/RAG-centric apps, multi-agent kits for role workflows, LiteLLM for provider portability. The winning choice is the thinnest stack you can operate.",
    "analogy": "Choosing kitchen tools: a chef’s knife covers most jobs; buy a pasta machine only if you make pasta weekly.",
    "explanation": [
      "Start from the problem.",
      "Prefer thin wrappers early.",
      "Add orchestration when state gets hard.",
      "Standardize observability regardless of framework.",
      "Re-evaluate when requirements change."
    ],
    "keyTerms": [
      {
        "term": "Thin stack",
        "definition": "Fewer abstractions"
      },
      {
        "term": "Bottleneck",
        "definition": "What actually slows delivery"
      },
      {
        "term": "Operability",
        "definition": "Can your team run it?"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "When to use what — visual walkthrough",
      "description": "Step through the core idea behind When to use what.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define the job.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Map to framework strengths.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Spike two options.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Compare debuggability.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Choose and document.",
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
          "RAG FAQ bot",
          "Durable HITL agent",
          "Multi-provider routing"
        ],
        "insights": {
          "RAG FAQ bot": "Data/RAG-focused tools.",
          "Durable HITL agent": "Graph/stateful orchestration.",
          "Multi-provider routing": "Unified API layer."
        },
        "selected": "RAG FAQ bot"
      }
    },
    "realWorldExample": {
      "title": "Student capstone choices",
      "story": "RAG FAQ → LlamaIndex/light RAG; HITL agent → graph; multi-provider → LiteLLM.",
      "takeaway": "Match tool to task."
    },
    "quiz": [
      {
        "id": "framework-comparison-q1",
        "prompt": "Choose frameworks by…",
        "options": [
          {
            "id": "o0",
            "text": "Job and operability"
          },
          {
            "id": "o1",
            "text": "Only Twitter hype"
          },
          {
            "id": "o2",
            "text": "GPU sticker color"
          },
          {
            "id": "o3",
            "text": "Font fashion"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Fit."
      },
      {
        "id": "framework-comparison-q2",
        "prompt": "Thin stacks help…",
        "options": [
          {
            "id": "o0",
            "text": "Early clarity and control"
          },
          {
            "id": "o1",
            "text": "Guaranteed scale forever"
          },
          {
            "id": "o2",
            "text": "Skip evals"
          },
          {
            "id": "o3",
            "text": "Skip auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Simplicity."
      },
      {
        "id": "framework-comparison-q3",
        "prompt": "Observability should be…",
        "options": [
          {
            "id": "o0",
            "text": "Present regardless of framework"
          },
          {
            "id": "o1",
            "text": "Optional forever"
          },
          {
            "id": "o2",
            "text": "Replaced by vibes"
          },
          {
            "id": "o3",
            "text": "Banned"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Always."
      }
    ],
    "prevConceptId": "litellm"
  }
] as Concept[];
