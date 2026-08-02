import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "ai-agent",
    "categoryId": "ai-agents",
    "title": "AI Agent",
    "subtitle": "A model that acts toward goals with tools",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [],
    "laymanSummary": "An AI agent is a system that uses a model to pursue a goal by planning, calling tools, observing results, and updating state until it finishes or stops. It is more than a single reply; it is a loop with side effects.",
    "analogy": "An intern with a checklist and phone access: think, call someone, update the checklist, repeat.",
    "explanation": [
      "Goal-directed behavior.",
      "Tools create real-world effects.",
      "State tracks progress.",
      "Needs limits and supervision."
    ],
    "keyTerms": [
      {
        "term": "Agent",
        "definition": "Goal-seeking loop with actions"
      },
      {
        "term": "Tool",
        "definition": "External capability the agent can invoke"
      },
      {
        "term": "Side effect",
        "definition": "Change outside the chat text"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "AI Agent — visual walkthrough",
      "description": "Step through the core idea behind AI Agent.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Receive a goal.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Plan first action.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Call a tool.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observe result.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Continue or finish.",
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
          "Single FAQ reply",
          "Multi-step tool loop",
          "Random button clicking"
        ],
        "insights": {
          "Single FAQ reply": "Chatbot style.",
          "Multi-step tool loop": "Agent style.",
          "Random button clicking": "Unsafe chaos."
        },
        "selected": "Single FAQ reply"
      }
    },
    "realWorldExample": {
      "title": "Travel booking helper",
      "story": "Agent searches flights, compares, then drafts an itinerary.",
      "takeaway": "Actions make it an agent."
    },
    "quiz": [
      {
        "id": "ai-agent-q1",
        "prompt": "An agent typically…",
        "options": [
          {
            "id": "o0",
            "text": "Acts in a loop with tools toward a goal"
          },
          {
            "id": "o1",
            "text": "Only styles CSS"
          },
          {
            "id": "o2",
            "text": "Only stores vectors"
          },
          {
            "id": "o3",
            "text": "Only trains GPUs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Goal loop."
      },
      {
        "id": "ai-agent-q2",
        "prompt": "Tools enable…",
        "options": [
          {
            "id": "o0",
            "text": "Side effects and lookups"
          },
          {
            "id": "o1",
            "text": "Nothing"
          },
          {
            "id": "o2",
            "text": "Font bolding only"
          },
          {
            "id": "o3",
            "text": "HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Capabilities."
      },
      {
        "id": "ai-agent-q3",
        "prompt": "Agents need…",
        "options": [
          {
            "id": "o0",
            "text": "Limits and supervision"
          },
          {
            "id": "o1",
            "text": "Infinite rights always"
          },
          {
            "id": "o2",
            "text": "No logging"
          },
          {
            "id": "o3",
            "text": "No goals"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Control."
      }
    ],
    "nextConceptId": "agentic-vs-chatbot"
  },
  {
    "id": "agentic-vs-chatbot",
    "categoryId": "ai-agents",
    "title": "Agentic AI vs chatbot",
    "subtitle": "Reply once versus act over time",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "ai-agent"
    ],
    "laymanSummary": "A chatbot mainly returns a next message. An agentic system can take multi-step actions, maintain state, and use tools across turns. Many products are hybrids: chat UI with optional agent modes for harder jobs.",
    "analogy": "Answering a question at a help desk versus actually filing the ticket, checking status, and emailing you.",
    "explanation": [
      "Chatbot: conversational response.",
      "Agent: plans and acts.",
      "Risk and cost rise with actions.",
      "Pick the simplest mode that works."
    ],
    "keyTerms": [
      {
        "term": "Chatbot",
        "definition": "Conversational interface mostly without side effects"
      },
      {
        "term": "Agentic system",
        "definition": "Multi-step tool-using autonomy"
      },
      {
        "term": "Human handoff",
        "definition": "Escalate to a person"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Agentic AI vs chatbot — visual walkthrough",
      "description": "Step through the core idea behind Agentic AI vs chatbot.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User asks a simple definition.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Chat reply suffices.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "User asks to book and email.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Agent mode engages tools.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Confirm before irreversible acts.",
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
          "Define HTTP",
          "Book travel and email itinerary",
          "Delete production DB"
        ],
        "insights": {
          "Define HTTP": "Chat is enough.",
          "Book travel and email itinerary": "Agentic candidate.",
          "Delete production DB": "Danger—needs hard blocks."
        },
        "selected": "Define HTTP"
      }
    },
    "realWorldExample": {
      "title": "Banking assistant",
      "story": "Balances answered in chat; transfers require agentic flows plus approvals.",
      "takeaway": "Match autonomy to risk."
    },
    "quiz": [
      {
        "id": "agentic-vs-chatbot-q1",
        "prompt": "Chatbots mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Return conversational replies"
          },
          {
            "id": "o1",
            "text": "Always file taxes"
          },
          {
            "id": "o2",
            "text": "Manage Kubernetes by default"
          },
          {
            "id": "o3",
            "text": "Train diffusion"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Conversation."
      },
      {
        "id": "agentic-vs-chatbot-q2",
        "prompt": "Agentic systems…",
        "options": [
          {
            "id": "o0",
            "text": "Take multi-step actions"
          },
          {
            "id": "o1",
            "text": "Never use tools"
          },
          {
            "id": "o2",
            "text": "Forbid state"
          },
          {
            "id": "o3",
            "text": "Only render CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Actions."
      },
      {
        "id": "agentic-vs-chatbot-q3",
        "prompt": "Prefer…",
        "options": [
          {
            "id": "o0",
            "text": "Simplest mode that works"
          },
          {
            "id": "o1",
            "text": "Max autonomy always"
          },
          {
            "id": "o2",
            "text": "No UX"
          },
          {
            "id": "o3",
            "text": "No logs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Right-size autonomy."
      }
    ],
    "prevConceptId": "ai-agent",
    "nextConceptId": "plan-act-observe"
  },
  {
    "id": "plan-act-observe",
    "categoryId": "ai-agents",
    "title": "Plan-Act-Observe loop",
    "subtitle": "The heartbeat of agent behavior",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "agentic-vs-chatbot"
    ],
    "laymanSummary": "Most agents iterate: plan what to do, act via a tool or message, observe the outcome, then replan. This loop turns a static model into an interactive problem solver—and can loop forever without caps.",
    "analogy": "Cooking while tasting: plan spice, act with a pinch, observe taste, adjust.",
    "explanation": [
      "Plan proposes next step.",
      "Act executes.",
      "Observe captures result.",
      "Update state and repeat.",
      "Stop conditions are mandatory."
    ],
    "keyTerms": [
      {
        "term": "Plan",
        "definition": "Decide next action"
      },
      {
        "term": "Act",
        "definition": "Execute tool/action"
      },
      {
        "term": "Observe",
        "definition": "Read the result"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Plan-Act-Observe loop — visual walkthrough",
      "description": "Step through the core idea behind Plan-Act-Observe loop.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Goal set.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Plan an action.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Act.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observe.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Replan or finish.",
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
      "title": "Data cleanup agent",
      "story": "Plans column fixes, runs scripts, observes errors, replans.",
      "takeaway": "Loop drives progress."
    },
    "quiz": [
      {
        "id": "plan-act-observe-q1",
        "prompt": "The core loop is…",
        "options": [
          {
            "id": "o0",
            "text": "Plan, act, observe"
          },
          {
            "id": "o1",
            "text": "Compile, link, only"
          },
          {
            "id": "o2",
            "text": "Margin, padding, border"
          },
          {
            "id": "o3",
            "text": "Ping, traceroute, only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "PAO."
      },
      {
        "id": "plan-act-observe-q2",
        "prompt": "Without stop conditions agents may…",
        "options": [
          {
            "id": "o0",
            "text": "Loop forever"
          },
          {
            "id": "o1",
            "text": "Become perfectly safe"
          },
          {
            "id": "o2",
            "text": "Cool the room"
          },
          {
            "id": "o3",
            "text": "Fix DNS forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Caps needed."
      },
      {
        "id": "plan-act-observe-q3",
        "prompt": "Observe feeds…",
        "options": [
          {
            "id": "o0",
            "text": "The next plan"
          },
          {
            "id": "o1",
            "text": "Only CSS"
          },
          {
            "id": "o2",
            "text": "Only fonts"
          },
          {
            "id": "o3",
            "text": "Only HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Feedback."
      }
    ],
    "prevConceptId": "agentic-vs-chatbot",
    "nextConceptId": "agent-state"
  },
  {
    "id": "agent-state",
    "categoryId": "ai-agents",
    "title": "State",
    "subtitle": "What the agent remembers between steps",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "plan-act-observe"
    ],
    "laymanSummary": "State is structured memory the agent updates: goals, scratchpads, tool results, file pointers, and status flags. Good state design makes agents debuggable; stuffing everything into chat text alone becomes fragile.",
    "analogy": "A pilot checklist and instrument panel—not only remembered conversation vibes.",
    "explanation": [
      "Separate chat transcript from structured state.",
      "Persist key fields.",
      "Keep secrets out of prompts when possible.",
      "Schema state enables recovery."
    ],
    "keyTerms": [
      {
        "term": "State",
        "definition": "Structured variables across steps"
      },
      {
        "term": "Scratchpad",
        "definition": "Working notes"
      },
      {
        "term": "Checkpoint",
        "definition": "Saved state snapshot"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "State — visual walkthrough",
      "description": "Step through the core idea behind State.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Initialize state.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "After each tool, update fields.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Next plan reads state.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Persist checkpoint.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Resume after failure.",
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
          "Only chat log",
          "Typed state object",
          "Global mutable everything"
        ],
        "insights": {
          "Only chat log": "Fragile.",
          "Typed state object": "Debuggable.",
          "Global mutable everything": "Hard to audit."
        },
        "selected": "Only chat log"
      }
    },
    "realWorldExample": {
      "title": "Research agent folders",
      "story": "State tracks which sources were read and remaining questions.",
      "takeaway": "Structure beats vibes."
    },
    "quiz": [
      {
        "id": "agent-state-q1",
        "prompt": "Agent state should be…",
        "options": [
          {
            "id": "o0",
            "text": "Structured and updated each step"
          },
          {
            "id": "o1",
            "text": "Only random prose always"
          },
          {
            "id": "o2",
            "text": "Deleted every token"
          },
          {
            "id": "o3",
            "text": "Stored in CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Structured."
      },
      {
        "id": "agent-state-q2",
        "prompt": "Checkpoints help…",
        "options": [
          {
            "id": "o0",
            "text": "Resume after failures"
          },
          {
            "id": "o1",
            "text": "Heat GPUs"
          },
          {
            "id": "o2",
            "text": "Bold fonts"
          },
          {
            "id": "o3",
            "text": "Route packets"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Recovery."
      },
      {
        "id": "agent-state-q3",
        "prompt": "Secrets in prompts are…",
        "options": [
          {
            "id": "o0",
            "text": "Risky"
          },
          {
            "id": "o1",
            "text": "Required always"
          },
          {
            "id": "o2",
            "text": "Impossible"
          },
          {
            "id": "o3",
            "text": "A vector metric"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Minimize exposure."
      }
    ],
    "prevConceptId": "plan-act-observe",
    "nextConceptId": "planning"
  },
  {
    "id": "planning",
    "categoryId": "ai-agents",
    "title": "Planning",
    "subtitle": "Decide the sequence before thrashing tools",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "agent-state"
    ],
    "laymanSummary": "Planning decomposes a goal into steps before or between actions. Plans can be implicit in thoughts or explicit checklists. Overplanning wastes tokens; underplanning causes tool thrash.",
    "analogy": "Writing grocery sections before wandering every aisle at random.",
    "explanation": [
      "Clarify goal and constraints.",
      "Decompose into steps.",
      "Replan when observations invalidate assumptions.",
      "Keep plans short and testable.",
      "Share plan with users for trust."
    ],
    "keyTerms": [
      {
        "term": "Plan",
        "definition": "Ordered intended steps"
      },
      {
        "term": "Replan",
        "definition": "Update plan after new info"
      },
      {
        "term": "Constraint",
        "definition": "Hard limit on actions"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Planning — visual walkthrough",
      "description": "Step through the core idea behind Planning.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Goal arrives.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Draft a short plan.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Execute step 1.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observation changes assumptions.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Replan remaining steps.",
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
          "No plan, spam tools",
          "Short checklist plan",
          "100-page plan before hello world"
        ],
        "insights": {
          "No plan, spam tools": "Thrash.",
          "Short checklist plan": "Healthy.",
          "100-page plan before hello world": "Overplanning."
        },
        "selected": "No plan, spam tools"
      }
    },
    "realWorldExample": {
      "title": "Migration agents",
      "story": "Plan schema changes before running migrations.",
      "takeaway": "Look-ahead prevents disasters."
    },
    "quiz": [
      {
        "id": "planning-q1",
        "prompt": "Planning helps agents…",
        "options": [
          {
            "id": "o0",
            "text": "Avoid random tool thrash"
          },
          {
            "id": "o1",
            "text": "Delete evals"
          },
          {
            "id": "o2",
            "text": "Ignore observations"
          },
          {
            "id": "o3",
            "text": "Ban state"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Structure."
      },
      {
        "id": "planning-q2",
        "prompt": "Replanning happens when…",
        "options": [
          {
            "id": "o0",
            "text": "Observations invalidate assumptions"
          },
          {
            "id": "o1",
            "text": "Fonts change"
          },
          {
            "id": "o2",
            "text": "CSS hot-reloads"
          },
          {
            "id": "o3",
            "text": "HDMI flickers"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "New info."
      },
      {
        "id": "planning-q3",
        "prompt": "Plans should be…",
        "options": [
          {
            "id": "o0",
            "text": "Short and testable"
          },
          {
            "id": "o1",
            "text": "Infinite novels"
          },
          {
            "id": "o2",
            "text": "Secret from logs"
          },
          {
            "id": "o3",
            "text": "Written only in emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Practical."
      }
    ],
    "prevConceptId": "agent-state",
    "nextConceptId": "memory"
  },
  {
    "id": "memory",
    "categoryId": "ai-agents",
    "title": "Memory",
    "subtitle": "Persist useful information beyond one prompt",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "planning"
    ],
    "laymanSummary": "Agent memory stores information across steps or sessions: conversation summaries, user preferences, retrieved facts, and episode logs. Memory systems must handle freshness, privacy, and relevance—or they become cluttered noise.",
    "analogy": "Sticky notes, a diary, and a filing cabinet—not expecting perfect photographic recall every second.",
    "explanation": [
      "Short-term: working context.",
      "Long-term: stored notes/vectors.",
      "Summarize to compress.",
      "Forget stale or private items.",
      "Retrieve memory like RAG."
    ],
    "keyTerms": [
      {
        "term": "Short-term memory",
        "definition": "Current working context"
      },
      {
        "term": "Long-term memory",
        "definition": "Persisted knowledge store"
      },
      {
        "term": "Memory retrieval",
        "definition": "Pull relevant notes into context"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Memory — visual walkthrough",
      "description": "Step through the core idea behind Memory.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Conversation grows.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Summarize older turns.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Store key preferences.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Later query retrieves memory.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Personalization with control.",
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
          "No memory",
          "Summaries + preference store",
          "Store every raw token forever"
        ],
        "insights": {
          "No memory": "Stateless.",
          "Summaries + preference store": "Practical.",
          "Store every raw token forever": "Cost and privacy risk."
        },
        "selected": "No memory"
      }
    },
    "realWorldExample": {
      "title": "Personal tutor memory",
      "story": "Remembers a student struggles with recursion and adapts examples.",
      "takeaway": "Useful memory needs consent and controls."
    },
    "quiz": [
      {
        "id": "memory-q1",
        "prompt": "Memory helps agents…",
        "options": [
          {
            "id": "o0",
            "text": "Use info beyond one prompt"
          },
          {
            "id": "o1",
            "text": "Avoid all tools"
          },
          {
            "id": "o2",
            "text": "Delete logs"
          },
          {
            "id": "o3",
            "text": "Ban users"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Persistence."
      },
      {
        "id": "memory-q2",
        "prompt": "Stale memory can…",
        "options": [
          {
            "id": "o0",
            "text": "Mislead decisions"
          },
          {
            "id": "o1",
            "text": "Only help"
          },
          {
            "id": "o2",
            "text": "Cool GPUs"
          },
          {
            "id": "o3",
            "text": "Fix CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Freshness matters."
      },
      {
        "id": "memory-q3",
        "prompt": "Memory retrieval is similar to…",
        "options": [
          {
            "id": "o0",
            "text": "RAG over notes"
          },
          {
            "id": "o1",
            "text": "HDMI negotiation"
          },
          {
            "id": "o2",
            "text": "Font subsetting"
          },
          {
            "id": "o3",
            "text": "DHCP only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Retrieve notes."
      }
    ],
    "prevConceptId": "planning",
    "nextConceptId": "tools-tool-calling"
  },
  {
    "id": "tools-tool-calling",
    "categoryId": "ai-agents",
    "title": "Tools / Tool-calling",
    "subtitle": "Let models invoke functions safely",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "memory"
    ],
    "laymanSummary": "Tool-calling lets a model emit structured function calls that your runtime executes. Schemas describe arguments; the app returns observations. This is how models browse, calculate, or update systems—under your permission model.",
    "analogy": "A voice assistant that can dial APIs the way you dial apps—only the ones you installed and allowed.",
    "explanation": [
      "Declare tools with schemas.",
      "Model selects and fills arguments.",
      "Runtime executes and returns results.",
      "Validate args and authenticate.",
      "Never expose unconstrained shell by default."
    ],
    "keyTerms": [
      {
        "term": "Tool schema",
        "definition": "Name, description, parameters"
      },
      {
        "term": "Function call",
        "definition": "Structured invocation"
      },
      {
        "term": "Allowlist",
        "definition": "Permitted tools only"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Tools / Tool-calling — visual walkthrough",
      "description": "Step through the core idea behind Tools / Tool-calling.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User asks for weather.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Model calls weather tool.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Runtime fetches data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observation returns.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Model answers with facts.",
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
          "No tools",
          "Allowlisted tools with auth",
          "Root shell tool for everyone"
        ],
        "insights": {
          "No tools": "Language only.",
          "Allowlisted tools with auth": "Production pattern.",
          "Root shell tool for everyone": "Incident waiting."
        },
        "selected": "No tools"
      }
    },
    "realWorldExample": {
      "title": "Calendar assistants",
      "story": "Create-event tool with OAuth scopes.",
      "takeaway": "Permissions make tools safe enough to ship."
    },
    "quiz": [
      {
        "id": "tools-tool-calling-q1",
        "prompt": "Tool-calling emits…",
        "options": [
          {
            "id": "o0",
            "text": "Structured function calls"
          },
          {
            "id": "o1",
            "text": "Random poetry only"
          },
          {
            "id": "o2",
            "text": "CSS only"
          },
          {
            "id": "o3",
            "text": "GPU microcode"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Functions."
      },
      {
        "id": "tools-tool-calling-q2",
        "prompt": "Schemas define…",
        "options": [
          {
            "id": "o0",
            "text": "Parameters and types"
          },
          {
            "id": "o1",
            "text": "Ocean salinity"
          },
          {
            "id": "o2",
            "text": "Fan curves"
          },
          {
            "id": "o3",
            "text": "Mouse LOD"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Contracts."
      },
      {
        "id": "tools-tool-calling-q3",
        "prompt": "Unconstrained shell access is…",
        "options": [
          {
            "id": "o0",
            "text": "Dangerous by default"
          },
          {
            "id": "o1",
            "text": "Always required"
          },
          {
            "id": "o2",
            "text": "A vector DB"
          },
          {
            "id": "o3",
            "text": "A font"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Avoid."
      }
    ],
    "prevConceptId": "memory",
    "nextConceptId": "react-agents",
    "codeExample": {
      "language": "ts",
      "title": "Tool schema sketch",
      "code": "{ name: \"weather\", parameters: { city: \"string\" } }",
      "notes": "Validate before execute."
    }
  },
  {
    "id": "react-agents",
    "categoryId": "ai-agents",
    "title": "ReAct agents",
    "subtitle": "Agents that think and act in text traces",
    "difficulty": "intermediate",
    "estimatedMinutes": 9,
    "prerequisites": [
      "tools-tool-calling"
    ],
    "laymanSummary": "ReAct agents operationalize the Thought-Action-Observation pattern as a runtime loop with tools. Traces make debugging easier, but verbose thoughts can leak private reasoning and cost tokens.",
    "analogy": "A detective notebook: hypothesize, check a clue, write what was found, hypothesize again.",
    "explanation": [
      "Emit thought.",
      "Emit action.",
      "Runtime provides observation.",
      "Repeat with budgets.",
      "Parse carefully; models drift from format."
    ],
    "keyTerms": [
      {
        "term": "Trace",
        "definition": "Visible thought/action log"
      },
      {
        "term": "Budget",
        "definition": "Max steps/tokens/tools"
      },
      {
        "term": "Parser",
        "definition": "Extract actions reliably"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "ReAct agents — visual walkthrough",
      "description": "Step through the core idea behind ReAct agents.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Goal: weather-based outfit.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Thought needs weather.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Action calls API.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observation: 32C sunny.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Final recommendation.",
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
      "title": "Walk a ReAct loop",
      "description": "Step Thought→Action→Observation locally.",
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
      "title": "Ops runbooks",
      "story": "Agents follow ReAct to query metrics then suggest mitigations.",
      "takeaway": "Traces aid incident review."
    },
    "quiz": [
      {
        "id": "react-agents-q1",
        "prompt": "ReAct agents interleave…",
        "options": [
          {
            "id": "o0",
            "text": "Thoughts and tool actions"
          },
          {
            "id": "o1",
            "text": "Only embeddings"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only epochs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "TAO."
      },
      {
        "id": "react-agents-q2",
        "prompt": "Budgets prevent…",
        "options": [
          {
            "id": "o0",
            "text": "Runaway loops"
          },
          {
            "id": "o1",
            "text": "All learning"
          },
          {
            "id": "o2",
            "text": "Tokenization"
          },
          {
            "id": "o3",
            "text": "JSON"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Caps."
      },
      {
        "id": "react-agents-q3",
        "prompt": "Traces help…",
        "options": [
          {
            "id": "o0",
            "text": "Debugging"
          },
          {
            "id": "o1",
            "text": "Overheating intentionally"
          },
          {
            "id": "o2",
            "text": "Deleting indexes"
          },
          {
            "id": "o3",
            "text": "Hiding audits"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Visibility."
      }
    ],
    "prevConceptId": "tools-tool-calling",
    "nextConceptId": "multi-agent"
  },
  {
    "id": "multi-agent",
    "categoryId": "ai-agents",
    "title": "Multi-agent",
    "subtitle": "Several specialized agents collaborating",
    "difficulty": "advanced",
    "estimatedMinutes": 8,
    "prerequisites": [
      "react-agents"
    ],
    "laymanSummary": "Multi-agent systems assign roles to multiple agents—researcher, coder, critic—that communicate. Specialization can improve quality, but coordination overhead, cost, and failure modes grow quickly.",
    "analogy": "A small studio: writer, editor, and fact-checker instead of one exhausted generalist.",
    "explanation": [
      "Split roles clearly.",
      "Define communication protocols.",
      "Avoid infinite debate loops.",
      "Centralize shared state carefully.",
      "Measure if multi-agent beats a single strong agent."
    ],
    "keyTerms": [
      {
        "term": "Role",
        "definition": "Specialized agent responsibility"
      },
      {
        "term": "Protocol",
        "definition": "How agents message"
      },
      {
        "term": "Orchestration",
        "definition": "Who speaks when"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Multi-agent — visual walkthrough",
      "description": "Step through the core idea behind Multi-agent.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Manager assigns roles.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Researcher gathers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Writer drafts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Critic reviews.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Merge final output.",
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
          "One general agent",
          "Researcher + writer + critic",
          "Ten agents arguing forever"
        ],
        "insights": {
          "One general agent": "Simple baseline.",
          "Researcher + writer + critic": "Common pattern.",
          "Ten agents arguing forever": "Failure mode."
        },
        "selected": "One general agent"
      }
    },
    "realWorldExample": {
      "title": "Software PR agents",
      "story": "One agent writes tests, another reviews security.",
      "takeaway": "Specialization mirrors teams."
    },
    "quiz": [
      {
        "id": "multi-agent-q1",
        "prompt": "Multi-agent means…",
        "options": [
          {
            "id": "o0",
            "text": "Multiple specialized collaborating agents"
          },
          {
            "id": "o1",
            "text": "Multiple GPUs only"
          },
          {
            "id": "o2",
            "text": "Multiple CSS files"
          },
          {
            "id": "o3",
            "text": "Multiple DNS servers only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Roles."
      },
      {
        "id": "multi-agent-q2",
        "prompt": "A risk is…",
        "options": [
          {
            "id": "o0",
            "text": "Coordination overhead and loops"
          },
          {
            "id": "o1",
            "text": "Guaranteed cheaper always"
          },
          {
            "id": "o2",
            "text": "No need for evals"
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
        "id": "multi-agent-q3",
        "prompt": "You should check…",
        "options": [
          {
            "id": "o0",
            "text": "Whether one agent suffices"
          },
          {
            "id": "o1",
            "text": "That debate never ends"
          },
          {
            "id": "o2",
            "text": "That logs are off"
          },
          {
            "id": "o3",
            "text": "That tools are root"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Justify complexity."
      }
    ],
    "prevConceptId": "react-agents",
    "nextConceptId": "supervisor-pattern"
  },
  {
    "id": "supervisor-pattern",
    "categoryId": "ai-agents",
    "title": "Supervisor pattern",
    "subtitle": "A manager agent routes work",
    "difficulty": "advanced",
    "estimatedMinutes": 7,
    "prerequisites": [
      "multi-agent"
    ],
    "laymanSummary": "In the supervisor pattern, a central agent routes subtasks to worker agents, aggregates results, and decides next steps. It simplifies control flow compared with fully peer-to-peer swarms.",
    "analogy": "A shift manager assigning tickets to specialists and combining their results.",
    "explanation": [
      "Supervisor plans and routes.",
      "Workers execute narrow skills.",
      "Supervisor merges outputs.",
      "Clear ownership of stop/fail.",
      "Good fit for tool-specialist farms."
    ],
    "keyTerms": [
      {
        "term": "Supervisor",
        "definition": "Orchestrating agent"
      },
      {
        "term": "Worker",
        "definition": "Specialized agent"
      },
      {
        "term": "Handoff",
        "definition": "Passing a subtask"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Supervisor pattern — visual walkthrough",
      "description": "Step through the core idea behind Supervisor pattern.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User goal to supervisor.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Route to retrieval worker.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Route to drafting worker.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Supervisor reviews.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Final response.",
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
          "Peer swarm with no owner",
          "Supervisor + workers",
          "Everyone can call everyone with no limits"
        ],
        "insights": {
          "Peer swarm with no owner": "Harder to control.",
          "Supervisor + workers": "Clearer orchestration.",
          "Everyone can call everyone with no limits": "Chaos."
        },
        "selected": "Peer swarm with no owner"
      }
    },
    "realWorldExample": {
      "title": "Customer ops suites",
      "story": "Supervisor sends billing questions to billing tools agent.",
      "takeaway": "Routing clarifies ownership."
    },
    "quiz": [
      {
        "id": "supervisor-pattern-q1",
        "prompt": "Supervisor pattern uses…",
        "options": [
          {
            "id": "o0",
            "text": "A central router agent"
          },
          {
            "id": "o1",
            "text": "No orchestration"
          },
          {
            "id": "o2",
            "text": "Only peer chaos"
          },
          {
            "id": "o3",
            "text": "Only CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Central control."
      },
      {
        "id": "supervisor-pattern-q2",
        "prompt": "Workers should be…",
        "options": [
          {
            "id": "o0",
            "text": "Specialized"
          },
          {
            "id": "o1",
            "text": "Omnipotent root shells"
          },
          {
            "id": "o2",
            "text": "Silent forever"
          },
          {
            "id": "o3",
            "text": "Unlogged"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Narrow skills."
      },
      {
        "id": "supervisor-pattern-q3",
        "prompt": "Supervisor owns…",
        "options": [
          {
            "id": "o0",
            "text": "Stop/fail decisions often"
          },
          {
            "id": "o1",
            "text": "Nothing"
          },
          {
            "id": "o2",
            "text": "Only fonts"
          },
          {
            "id": "o3",
            "text": "Only HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Control plane."
      }
    ],
    "prevConceptId": "multi-agent",
    "nextConceptId": "guardrails"
  },
  {
    "id": "guardrails",
    "categoryId": "ai-agents",
    "title": "Guardrails",
    "subtitle": "Hard rails around soft models",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "supervisor-pattern"
    ],
    "laymanSummary": "Guardrails are checks that constrain inputs, tools, and outputs: allowlists, policy classifiers, regex validators, rate limits, and human approvals. They acknowledge that prompts alone are soft.",
    "analogy": "Guardrails on a mountain road: the driver still steers, but barriers prevent falling off cliffs.",
    "explanation": [
      "Validate inputs.",
      "Constrain tools.",
      "Filter outputs.",
      "Fail closed on high risk.",
      "Log violations for review."
    ],
    "keyTerms": [
      {
        "term": "Allowlist",
        "definition": "Only permitted operations"
      },
      {
        "term": "Policy filter",
        "definition": "Blocks disallowed content"
      },
      {
        "term": "Fail closed",
        "definition": "Deny when unsure on high risk"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Guardrails — visual walkthrough",
      "description": "Step through the core idea behind Guardrails.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User input arrives.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Input guard runs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Agent acts within tool allowlist.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Output filter checks.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Safe response ships.",
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
          "Prompt-only safety",
          "Allowlists + validators + logs",
          "No logging of violations"
        ],
        "insights": {
          "Prompt-only safety": "Soft.",
          "Allowlists + validators + logs": "Stronger.",
          "No logging of violations": "Cannot improve."
        },
        "selected": "Prompt-only safety"
      }
    },
    "realWorldExample": {
      "title": "PII redaction filters",
      "story": "Outputs scrub account numbers before chat display.",
      "takeaway": "Defense in depth."
    },
    "quiz": [
      {
        "id": "guardrails-q1",
        "prompt": "Guardrails are…",
        "options": [
          {
            "id": "o0",
            "text": "Hard checks around model behavior"
          },
          {
            "id": "o1",
            "text": "Only system prompt poetry"
          },
          {
            "id": "o2",
            "text": "GPU fans"
          },
          {
            "id": "o3",
            "text": "CSS variables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Hard checks."
      },
      {
        "id": "guardrails-q2",
        "prompt": "Fail closed means…",
        "options": [
          {
            "id": "o0",
            "text": "Deny when unsure on high risk"
          },
          {
            "id": "o1",
            "text": "Allow everything"
          },
          {
            "id": "o2",
            "text": "Delete logs"
          },
          {
            "id": "o3",
            "text": "Raise temperature"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Safe default."
      },
      {
        "id": "guardrails-q3",
        "prompt": "Tool allowlists…",
        "options": [
          {
            "id": "o0",
            "text": "Limit capabilities"
          },
          {
            "id": "o1",
            "text": "Grant root always"
          },
          {
            "id": "o2",
            "text": "Remove auth"
          },
          {
            "id": "o3",
            "text": "Ban schemas"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Least privilege."
      }
    ],
    "prevConceptId": "supervisor-pattern",
    "nextConceptId": "mcp-conceptual"
  },
  {
    "id": "mcp-conceptual",
    "categoryId": "ai-agents",
    "title": "MCP (conceptual)",
    "subtitle": "A standard way to plug tools and context",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "guardrails"
    ],
    "laymanSummary": "Model Context Protocol (MCP) is a conceptual standard for exposing tools, resources, and prompts to models through a consistent interface. The idea is portable capabilities: connect an IDE, docs server, or database gateway without bespoke glue each time.",
    "analogy": "USB for AI tools: a common plug so many accessories work with many hosts.",
    "explanation": [
      "Hosts connect to MCP servers.",
      "Servers expose tools/resources.",
      "Models call tools via the host.",
      "Permissions still belong to your app.",
      "Standards reduce integration sprawl."
    ],
    "keyTerms": [
      {
        "term": "MCP host",
        "definition": "App that connects to servers"
      },
      {
        "term": "MCP server",
        "definition": "Exposes tools/resources"
      },
      {
        "term": "Resource",
        "definition": "Readable context object"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "MCP (conceptual) — visual walkthrough",
      "description": "Step through the core idea behind MCP (conceptual).",
      "steps": [
        {
          "id": "step-1",
          "caption": "Host starts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Connects to a docs MCP server.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Lists tools/resources.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Model invokes read/search.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observation returns.",
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
          "Custom one-off tool glue each time",
          "Shared protocol for tools",
          "Give model raw cloud root keys"
        ],
        "insights": {
          "Custom one-off tool glue each time": "Sprawl.",
          "Shared protocol for tools": "MCP-style portability.",
          "Give model raw cloud root keys": "Unsafe."
        },
        "selected": "Custom one-off tool glue each time"
      }
    },
    "realWorldExample": {
      "title": "IDE copilots",
      "story": "A repo tools server exposes test runners and file readers via a shared protocol.",
      "takeaway": "Portable tool ecosystems emerge."
    },
    "quiz": [
      {
        "id": "mcp-conceptual-q1",
        "prompt": "MCP is conceptually…",
        "options": [
          {
            "id": "o0",
            "text": "A standard interface for tools/context"
          },
          {
            "id": "o1",
            "text": "A GPU brand"
          },
          {
            "id": "o2",
            "text": "A CSS framework"
          },
          {
            "id": "o3",
            "text": "A loss function"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Protocol idea."
      },
      {
        "id": "mcp-conceptual-q2",
        "prompt": "Permissions still…",
        "options": [
          {
            "id": "o0",
            "text": "Belong to your application"
          },
          {
            "id": "o1",
            "text": "Disappear"
          },
          {
            "id": "o2",
            "text": "Belong to temperature"
          },
          {
            "id": "o3",
            "text": "Belong to cosine"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "App owns authz."
      },
      {
        "id": "mcp-conceptual-q3",
        "prompt": "Servers expose…",
        "options": [
          {
            "id": "o0",
            "text": "Tools and resources"
          },
          {
            "id": "o1",
            "text": "Only wallpapers"
          },
          {
            "id": "o2",
            "text": "Only HDMI"
          },
          {
            "id": "o3",
            "text": "Only fan curves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Capabilities."
      }
    ],
    "prevConceptId": "guardrails",
    "nextConceptId": "hitl"
  },
  {
    "id": "hitl",
    "categoryId": "ai-agents",
    "title": "HITL",
    "subtitle": "Human-in-the-loop approvals",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "mcp-conceptual"
    ],
    "laymanSummary": "Human-in-the-loop (HITL) inserts people at critical steps: approve spends, edit drafts, confirm deletions. Autonomy handles draft work; humans own irreversible or regulated actions.",
    "analogy": "Autopilot can fly, but a pilot takes over for landing in a storm.",
    "explanation": [
      "Identify high-risk actions.",
      "Pause for approval.",
      "Show evidence and diffs.",
      "Record who approved.",
      "Tune which steps need humans."
    ],
    "keyTerms": [
      {
        "term": "Approval gate",
        "definition": "Pause for human decision"
      },
      {
        "term": "Escalation",
        "definition": "Route to an expert"
      },
      {
        "term": "Audit trail",
        "definition": "Who did what when"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "HITL — visual walkthrough",
      "description": "Step through the core idea behind HITL.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Agent drafts a money transfer.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "HITL gate pauses.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Human reviews.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Approve or reject.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Continue safely.",
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
          "Auto-send all emails",
          "Approve outbound customer emails",
          "Human types every token"
        ],
        "insights": {
          "Auto-send all emails": "Risky.",
          "Approve outbound customer emails": "Practical HITL.",
          "Human types every token": "No leverage."
        },
        "selected": "Auto-send all emails"
      }
    },
    "realWorldExample": {
      "title": "Refund agents",
      "story": "Auto-approve tiny refunds; humans approve large ones.",
      "takeaway": "Risk-based autonomy."
    },
    "quiz": [
      {
        "id": "hitl-q1",
        "prompt": "HITL means…",
        "options": [
          {
            "id": "o0",
            "text": "Humans approve critical steps"
          },
          {
            "id": "o1",
            "text": "Humans never involved"
          },
          {
            "id": "o2",
            "text": "Only models approve"
          },
          {
            "id": "o3",
            "text": "No logs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Human gates."
      },
      {
        "id": "hitl-q2",
        "prompt": "Use HITL especially for…",
        "options": [
          {
            "id": "o0",
            "text": "Irreversible or high-risk actions"
          },
          {
            "id": "o1",
            "text": "Changing font size"
          },
          {
            "id": "o2",
            "text": "Ping latency"
          },
          {
            "id": "o3",
            "text": "CSS hover color"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Risk."
      },
      {
        "id": "hitl-q3",
        "prompt": "Audit trails record…",
        "options": [
          {
            "id": "o0",
            "text": "Approvals and actions"
          },
          {
            "id": "o1",
            "text": "Nothing"
          },
          {
            "id": "o2",
            "text": "Only GPU temps"
          },
          {
            "id": "o3",
            "text": "Only wallpapers"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Accountability."
      }
    ],
    "prevConceptId": "mcp-conceptual",
    "nextConceptId": "checkpointing"
  },
  {
    "id": "checkpointing",
    "categoryId": "ai-agents",
    "title": "Checkpointing",
    "subtitle": "Save progress to recover and audit",
    "difficulty": "intermediate",
    "estimatedMinutes": 6,
    "prerequisites": [
      "hitl"
    ],
    "laymanSummary": "Checkpointing snapshots agent state after steps so runs can resume, branch, or audit. It is essential for long jobs and for replaying failures without redoing expensive tool calls.",
    "analogy": "Video game save points before boss fights.",
    "explanation": [
      "Snapshot state and outputs.",
      "Resume from last good point.",
      "Support time-travel debugging.",
      "Store securely with retention policies.",
      "Combine with idempotent tools."
    ],
    "keyTerms": [
      {
        "term": "Checkpoint",
        "definition": "Saved snapshot"
      },
      {
        "term": "Resume",
        "definition": "Continue from snapshot"
      },
      {
        "term": "Idempotent tool",
        "definition": "Safe to retry"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Checkpointing — visual walkthrough",
      "description": "Step through the core idea behind Checkpointing.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Start long research.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Checkpoint after each source.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Crash occurs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Resume from last checkpoint.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Finish without full redo.",
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
          "No saves",
          "Checkpoint each major step",
          "Checkpoint every keystroke to public S3"
        ],
        "insights": {
          "No saves": "Fragile long jobs.",
          "Checkpoint each major step": "Practical.",
          "Checkpoint every keystroke to public S3": "Privacy disaster."
        },
        "selected": "No saves"
      }
    },
    "realWorldExample": {
      "title": "ETL agent jobs",
      "story": "Nightly agents checkpoint after each table migration step.",
      "takeaway": "Recovery beats reruns."
    },
    "quiz": [
      {
        "id": "checkpointing-q1",
        "prompt": "Checkpointing enables…",
        "options": [
          {
            "id": "o0",
            "text": "Resume and audit"
          },
          {
            "id": "o1",
            "text": "Hotter GPUs"
          },
          {
            "id": "o2",
            "text": "Bolder fonts"
          },
          {
            "id": "o3",
            "text": "Faster light"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Recovery."
      },
      {
        "id": "checkpointing-q2",
        "prompt": "Idempotent tools help because…",
        "options": [
          {
            "id": "o0",
            "text": "Retries are safer"
          },
          {
            "id": "o1",
            "text": "Retries are impossible"
          },
          {
            "id": "o2",
            "text": "Logs are banned"
          },
          {
            "id": "o3",
            "text": "Schemas vanish"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Safe retry."
      },
      {
        "id": "checkpointing-q3",
        "prompt": "Checkpoints should be…",
        "options": [
          {
            "id": "o0",
            "text": "Stored with security/retention in mind"
          },
          {
            "id": "o1",
            "text": "Posted publicly always"
          },
          {
            "id": "o2",
            "text": "Deleted every millisecond"
          },
          {
            "id": "o3",
            "text": "Written in CSS only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Govern them."
      }
    ],
    "prevConceptId": "hitl",
    "nextConceptId": "agent-failure-modes"
  },
  {
    "id": "agent-failure-modes",
    "categoryId": "ai-agents",
    "title": "Agent failure modes",
    "subtitle": "How autonomy breaks",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "checkpointing"
    ],
    "laymanSummary": "Agents fail via loops, tool misuse, prompt injection from tool outputs, goal misinterpretation, cost explosions, and silent partial completion. Design budgets, validators, and evaluations for agent traces—not only final answers.",
    "analogy": "A well-meaning intern endlessly emailing the wrong distribution list because nobody set a stop rule.",
    "explanation": [
      "Unbounded retries.",
      "Trusting malicious tool text as instructions.",
      "Wrong success criteria.",
      "Missing HITL on irreversible acts.",
      "Trace evals catch patterns."
    ],
    "keyTerms": [
      {
        "term": "Prompt injection",
        "definition": "Malicious instructions in data/tools"
      },
      {
        "term": "Looping",
        "definition": "Repeating actions without progress"
      },
      {
        "term": "Partial completion",
        "definition": "Stops mid-goal unnoticed"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Agent failure modes — visual walkthrough",
      "description": "Step through the core idea behind Agent failure modes.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Agent reads a web page.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Page says ignore policies.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Without guards, agent complies.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Injection succeeds.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Sanitize and isolate tool text.",
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
          "Trust all web text as system",
          "Isolate tool text + budgets",
          "Infinite retries"
        ],
        "insights": {
          "Trust all web text as system": "Injection bait.",
          "Isolate tool text + budgets": "Hardening.",
          "Infinite retries": "Cost bomb."
        },
        "selected": "Trust all web text as system"
      }
    },
    "realWorldExample": {
      "title": "Web-using agents",
      "story": "Untrusted pages attempted to override system rules.",
      "takeaway": "Treat tool outputs as untrusted data."
    },
    "quiz": [
      {
        "id": "agent-failure-modes-q1",
        "prompt": "Tool outputs should be treated as…",
        "options": [
          {
            "id": "o0",
            "text": "Untrusted data"
          },
          {
            "id": "o1",
            "text": "Root commands"
          },
          {
            "id": "o2",
            "text": "Always safe system prompts"
          },
          {
            "id": "o3",
            "text": "CSS variables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Untrusted."
      },
      {
        "id": "agent-failure-modes-q2",
        "prompt": "Budgets mitigate…",
        "options": [
          {
            "id": "o0",
            "text": "Cost and loop explosions"
          },
          {
            "id": "o1",
            "text": "All hallucinations forever"
          },
          {
            "id": "o2",
            "text": "Need for auth"
          },
          {
            "id": "o3",
            "text": "Need for tests"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Caps."
      },
      {
        "id": "agent-failure-modes-q3",
        "prompt": "Evaluate…",
        "options": [
          {
            "id": "o0",
            "text": "Traces and outcomes"
          },
          {
            "id": "o1",
            "text": "Only final marketing copy"
          },
          {
            "id": "o2",
            "text": "Only GPU stickers"
          },
          {
            "id": "o3",
            "text": "Only fonts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Agent evals."
      }
    ],
    "prevConceptId": "checkpointing"
  }
] as Concept[];
