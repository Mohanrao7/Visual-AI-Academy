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
    "laymanSummary": "LangChain is a toolkit for gluing prompts, document search, tools, and memory into a chat-style app. Think of it as building blocks so your campus ChatGPT-like tutor can look up notes and answer in one flow.",
    "analogy": "LEGO adapters for chat apps: snap prompt → search → model → answer together without inventing every connector.",
    "explanation": [
      "You define steps (a “chain”) such as retrieve syllabus text, then ask the model.",
      "Ready-made connectors talk to many model vendors and vector stores.",
      "Great for weekend prototypes of a ChatGPT-like campus helper.",
      "Heavy abstractions can hide cost and bugs—still test answers yourself."
    ],
    "keyTerms": [
      {
        "term": "Chain",
        "definition": "Ordered steps that build one answer"
      },
      {
        "term": "Integration",
        "definition": "Built-in connector to a vendor or tool"
      },
      {
        "term": "Runnable",
        "definition": "Reusable step you can compose"
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
      "title": "Weekend campus FAQ bot",
      "story": "A club wires PDF handbook → chunk → search → QA chain so students ask “When is add/drop?” and get a grounded reply.",
      "takeaway": "LangChain speeds the path from idea to ChatGPT-like demo."
    },
    "chatGptLens": {
      "setting": "You’re building a ChatGPT-like campus app; LangChain wires the steps behind the chat box.",
      "userInput": "When does the library close on Sundays?",
      "insideTheModel": "LangChain runs: load handbook chunks → retrieve “library hours” → fill a prompt → call the LLM (same chat I/O the user sees).",
      "modelOutput": "“Sundays 10am–6pm (Student Handbook §4). Want weekday hours too?”"
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
        "prompt": "What is a practical reason teams reach for LangChain?",
        "options": [
          {
            "id": "o0",
            "text": "To prototype RAG and tool flows faster"
          },
          {
            "id": "o1",
            "text": "To replace all databases forever"
          },
          {
            "id": "o2",
            "text": "To ban Python in the project"
          },
          {
            "id": "o3",
            "text": "To delete prompts from the app"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "It accelerates composition of chat/RAG prototypes."
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
    "laymanSummary": "LangGraph turns a chat agent into a flowchart: steps, decisions, and saved state. That helps when your campus ChatGPT-like app must loop, wait for a human, or resume after a pause.",
    "analogy": "An executable flowchart: boxes are steps, arrows are choices, sticky notes are memory between turns.",
    "explanation": [
      "State (what we know so far) is stored explicitly between steps.",
      "Graphs can branch, loop, and pause for human approval.",
      "Better than a single straight chain when the conversation has many paths.",
      "Useful for durable campus agents that survive restarts."
    ],
    "keyTerms": [
      {
        "term": "Node",
        "definition": "One step in the agent graph"
      },
      {
        "term": "Edge",
        "definition": "Which step runs next"
      },
      {
        "term": "Durable execution",
        "definition": "Pause and resume a long run"
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
      "title": "Club event planner with approval",
      "story": "Graph drafts a budget, pauses for a faculty click (“approve”), then emails vendors—same chat UI, controlled flow underneath.",
      "takeaway": "Graphs match real campus processes with checkpoints."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus app needs a multi-step agent with an approve button mid-flow.",
      "userInput": "Plan a ₹5,000 hackathon pizza night and wait for my OK before booking.",
      "insideTheModel": "LangGraph walks nodes: draft plan → hit a human-approve node → on OK, call booking tool → return final reply; state keeps the draft.",
      "modelOutput": "Draft: 40 pizzas + drinks ≈ ₹4,800. Waiting for your approval… → after OK: “Booked Campus Café for Sat 7pm.”"
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
        "prompt": "Why does durable execution matter in LangGraph-style agents?",
        "options": [
          {
            "id": "o0",
            "text": "Long runs can pause and resume safely"
          },
          {
            "id": "o1",
            "text": "It deletes all logs automatically"
          },
          {
            "id": "o2",
            "text": "It bans human approvals"
          },
          {
            "id": "o3",
            "text": "It removes the need for any schema"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Checkpoints let interrupted agent runs continue."
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
    "laymanSummary": "LlamaIndex is built for “chat with my documents”: load files, index them, and answer questions from that knowledge. Ideal when your ChatGPT-like campus app must stick to course PDFs.",
    "analogy": "A librarian’s toolkit that finds the right pages and hands them to the model before it answers.",
    "explanation": [
      "You load and index notes, PDFs, or tables once.",
      "A query engine retrieves relevant chunks, then asks the model to answer.",
      "Best fit when the main job is document Q&A (RAG).",
      "You still need checks that answers match the sources."
    ],
    "keyTerms": [
      {
        "term": "Index",
        "definition": "Searchable structure over your documents"
      },
      {
        "term": "Query engine",
        "definition": "Retrieve plus answer in one call"
      },
      {
        "term": "Node parser",
        "definition": "Splits docs into chunks"
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
      "title": "Lecture-PDF tutor",
      "story": "Students ask “What is deadlock avoidance?” and the app answers only from this week’s OS slides, with page citations.",
      "takeaway": "Data-first tools shine for syllabus chatbots."
    },
    "chatGptLens": {
      "setting": "You’re shipping a ChatGPT-like tutor that must answer from course PDFs, not the open web.",
      "userInput": "Summarize deadlock from this week’s OS notes.",
      "insideTheModel": "LlamaIndex retrieves matching slide chunks, stuffs them into the prompt, then the LLM writes a grounded summary.",
      "modelOutput": "Deadlock needs mutual exclusion, hold-and-wait, no preemption, circular wait (Slides 12–14). Want an example?"
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
        "prompt": "After you index documents with LlamaIndex, what should you still do?",
        "options": [
          {
            "id": "o0",
            "text": "Evaluate whether answers stay grounded"
          },
          {
            "id": "o1",
            "text": "Skip all tests forever"
          },
          {
            "id": "o2",
            "text": "Never chunk documents"
          },
          {
            "id": "o3",
            "text": "Drop all metadata"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Indexes help retrieval; evals prove faithfulness."
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
    "laymanSummary": "CrewAI lets you cast several AI “teammates” with roles—researcher, writer, editor—who collaborate on one user request. Your ChatGPT-like campus app can feel like a small staff, not one solo bot.",
    "analogy": "A tiny film crew: researcher gathers facts, writer drafts, editor polishes before the audience sees it.",
    "explanation": [
      "You define agents with clear roles and goals.",
      "Tasks assign who does what on a shared job.",
      "The crew hands work between roles until a final deliverable.",
      "More agents means more tokens and loops—keep crews small."
    ],
    "keyTerms": [
      {
        "term": "Crew",
        "definition": "Team of collaborating agents"
      },
      {
        "term": "Task",
        "definition": "One job assigned to an agent"
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
      "title": "Club newsletter pipeline",
      "story": "Researcher pulls event facts; writer drafts; editor shortens for WhatsApp—user only opens one chat and gets the final post.",
      "takeaway": "Roles mirror human teams behind a single chat UI."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus app uses a small CrewAI team behind one chat thread.",
      "userInput": "Write a 80-word Instagram caption for tomorrow’s robotics demo.",
      "insideTheModel": "Researcher pulls demo facts → writer drafts caption → editor trims to ~80 words → one polished reply returns to the user.",
      "modelOutput": "“Tomorrow 4pm, Lab 2: watch our bot stack cups live! Free snacks. Tag a friend 🤖 #CampusRobotics”"
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
        "prompt": "How should tasks be written for a CrewAI-style crew?",
        "options": [
          {
            "id": "o0",
            "text": "Clear ownership and goal per role"
          },
          {
            "id": "o1",
            "text": "Infinite and deliberately vague"
          },
          {
            "id": "o2",
            "text": "Hidden from all logs forever"
          },
          {
            "id": "o3",
            "text": "Unowned so anyone may ignore them"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Clear roles and tasks keep multi-agent work usable."
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
    "laymanSummary": "AutoGen-style systems treat agents as chat participants that message each other—and sometimes call tools—until they finish. Your campus ChatGPT-like product can hide that group chat and show one clean reply.",
    "analogy": "A group chat where each participant has a job and can run tools when stuck.",
    "explanation": [
      "Agents exchange messages to refine a plan or answer.",
      "A user-proxy agent can stand in for the human or run tools.",
      "Conversation rules decide who speaks next.",
      "Always set a stop condition so agents don’t debate forever."
    ],
    "keyTerms": [
      {
        "term": "User proxy",
        "definition": "Agent for the user or side effects"
      },
      {
        "term": "Assistant agent",
        "definition": "LLM-backed chat participant"
      },
      {
        "term": "Termination",
        "definition": "Rule that ends the agent chat"
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
      "title": "Code-help pair",
      "story": "One agent writes a Python fix; another runs tests via a tool; the student sees only the final patched snippet in the UI.",
      "takeaway": "Conversation drives iteration; the UI stays simple."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like coding helper uses AutoGen agents under the hood.",
      "userInput": "Fix this function—tests fail on empty lists. [paste code]",
      "insideTheModel": "User proxy posts the goal → assistant proposes a fix → tool agent runs tests → agents discuss until green → one answer is returned.",
      "modelOutput": "Here’s the fix: handle `if not items: return []`. All three tests passed."
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
        "prompt": "What can a user-proxy agent represent in AutoGen-style setups?",
        "options": [
          {
            "id": "o0",
            "text": "The human side or tool execution"
          },
          {
            "id": "o1",
            "text": "The building’s electricity supply"
          },
          {
            "id": "o2",
            "text": "Only SVG icon painting"
          },
          {
            "id": "o3",
            "text": "Campus DNS configuration only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Proxies bridge humans and side-effecting tools."
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
    "laymanSummary": "An Agent Development Kit (like Google’s ADK) is a starter kit for building, testing, and deploying agents with cloud helpers. It is scaffolding—not a new brain—for your ChatGPT-like campus service.",
    "analogy": "A robotics starter kit: motors, sensors, and manuals so you assemble faster than inventing every part.",
    "explanation": [
      "Gives opinionated project structure for agents and tools.",
      "Cloud integrations (auth, deploy, logging) sit nearby.",
      "Supports the full lifecycle: build → eval → deploy → monitor.",
      "Convenience can mean some lock-in—check portability."
    ],
    "keyTerms": [
      {
        "term": "ADK",
        "definition": "Agent development kit / starter toolkit"
      },
      {
        "term": "Scaffolding",
        "definition": "Ready-made project structure"
      },
      {
        "term": "Lifecycle",
        "definition": "Build, eval, deploy, monitor loop"
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
      "title": "IT helpdesk agent template",
      "story": "Campus IT uses a kit to standardize how every department ships an internal ChatGPT-like agent with the same logging and deploy path.",
      "takeaway": "Shared scaffolding beats one-off notebooks."
    },
    "chatGptLens": {
      "setting": "You’re scaffolding a ChatGPT-like campus helpdesk agent with an ADK-style kit.",
      "userInput": "My Wi-Fi won’t connect in Hostel B.",
      "insideTheModel": "ADK-shaped app: auth → ticket tool → model reply → traces to cloud logs; the user still just types in a chat box.",
      "modelOutput": "Try forgetting the network and reconnecting. If it fails, I opened ticket #4821 for Hostel B Wi-Fi."
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
        "prompt": "What should you remember about portability across agent kits?",
        "options": [
          {
            "id": "o0",
            "text": "It may vary by vendor kit"
          },
          {
            "id": "o1",
            "text": "It is always perfect everywhere"
          },
          {
            "id": "o2",
            "text": "It never matters in production"
          },
          {
            "id": "o3",
            "text": "It means you should ban all logs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Kits speed delivery but can increase lock-in."
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
    "laymanSummary": "LiteLLM gives one common way to call many model vendors (OpenAI-style, Anthropic, and others). Your ChatGPT-like campus app can switch or fail over without rewriting every call.",
    "analogy": "A universal remote that speaks many TV brands so you keep one button layout.",
    "explanation": [
      "Your code calls one chat-completion-style API shape.",
      "LiteLLM routes the request to the chosen provider.",
      "Handy for failover when one vendor rate-limits.",
      "It does not replace prompts, safety, or evals."
    ],
    "keyTerms": [
      {
        "term": "Provider",
        "definition": "Model vendor or hosted API"
      },
      {
        "term": "Routing",
        "definition": "Choosing which model endpoint"
      },
      {
        "term": "Failover",
        "definition": "Switching after errors or limits"
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
      "title": "Exam-week failover",
      "story": "Primary vendor hits rate limits; LiteLLM routes new campus chat traffic to a backup model with the same app code.",
      "takeaway": "A thin API layer buys resilience."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus app calls models through a LiteLLM-style router.",
      "userInput": "Explain Big-O of binary search in two sentences.",
      "insideTheModel": "App → unified LiteLLM call → router picks Vendor A (or fails over to B) → normalized tokens stream back to the chat UI.",
      "modelOutput": "Binary search is O(log n): each step halves the sorted list until the item is found or ruled out."
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
        "prompt": "Even with LiteLLM-style routing, what must your team still design?",
        "options": [
          {
            "id": "o0",
            "text": "Prompts, safety, and product logic"
          },
          {
            "id": "o1",
            "text": "Nothing—routing solves everything"
          },
          {
            "id": "o2",
            "text": "A ban on all logging"
          },
          {
            "id": "o3",
            "text": "Ignoring token costs forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Unified APIs don’t replace app responsibility."
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
    "laymanSummary": "Pick frameworks by the job: thin SDKs for control, LangChain for quick glue, LangGraph for stateful agents, LlamaIndex for docs, crews/AutoGen for multi-role work, LiteLLM for multi-provider routing. The winner is the thinnest stack your team can run.",
    "analogy": "Kitchen tools: a chef’s knife covers most jobs; buy a pasta machine only if you make pasta every week.",
    "explanation": [
      "Start from the user job (FAQ chat, HITL agent, multi-cloud).",
      "Prefer thin wrappers until orchestration pain is real.",
      "Add graphs or multi-agent only when state gets hard.",
      "Keep observability no matter which framework you choose."
    ],
    "keyTerms": [
      {
        "term": "Thin stack",
        "definition": "Fewer layers between you and APIs"
      },
      {
        "term": "Bottleneck",
        "definition": "What actually slows delivery"
      },
      {
        "term": "Operability",
        "definition": "Whether your team can run it"
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
      "title": "Capstone tool picks",
      "story": "FAQ over PDFs → LlamaIndex; approval workflow → LangGraph; vendor failover → LiteLLM—same ChatGPT-like UI, different guts.",
      "takeaway": "Match the tool to the bottleneck, not the hype."
    },
    "chatGptLens": {
      "setting": "You’re choosing tools for a ChatGPT-like campus app before writing code.",
      "userInput": "Product brief: answer syllabus FAQs; fail over if OpenAI is down.",
      "insideTheModel": "Decision: LlamaIndex (or light RAG) for docs + LiteLLM for provider routing; skip a heavy multi-agent crew for a simple FAQ.",
      "modelOutput": "Architecture note to the team: “RAG index + unified model router; one chat endpoint for students.”"
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
        "prompt": "Regardless of which framework you pick, what should still be present?",
        "options": [
          {
            "id": "o0",
            "text": "Observability for debugging and ops"
          },
          {
            "id": "o1",
            "text": "Zero visibility forever"
          },
          {
            "id": "o2",
            "text": "Only vibes-based shipping"
          },
          {
            "id": "o3",
            "text": "A ban on all monitoring"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "You need traces and metrics in any stack."
      }
    ],
    "prevConceptId": "litellm"
  }
] as Concept[];
