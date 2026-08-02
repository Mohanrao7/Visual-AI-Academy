import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "roles-system-user-assistant",
    "categoryId": "prompt-engineering",
    "title": "Roles (system/user/assistant)",
    "subtitle": "Who is speaking in the dialogue format",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [],
    "laymanSummary": "Chat models are trained on roles: system sets policy and persona, user provides requests, assistant responds. Clear role separation improves control. System messages are powerful but not magical security boundaries.",
    "analogy": "A play script: stage directions (system), audience request (user), actor lines (assistant).",
    "explanation": [
      "System steers global behavior.",
      "User turns carry tasks.",
      "Assistant turns are model outputs.",
      "Do not treat system prompts as perfect sandboxing."
    ],
    "keyTerms": [
      {
        "term": "System prompt",
        "definition": "High-level instructions and policies"
      },
      {
        "term": "User message",
        "definition": "Human or app request"
      },
      {
        "term": "Assistant message",
        "definition": "Model response"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Roles (system/user/assistant) — visual walkthrough",
      "description": "Step through the core idea behind Roles (system/user/assistant).",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define system policy.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "User asks a question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Assistant answers in-policy.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Next user turn continues.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Roles keep structure stable.",
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
          "No system prompt",
          "Clear system policy",
          "Stuff secrets only in system prompt"
        ],
        "insights": {
          "No system prompt": "Less consistent behavior.",
          "Clear system policy": "Better steering.",
          "Stuff secrets only in system prompt": "Unsafe assumption."
        },
        "selected": "No system prompt"
      }
    },
    "realWorldExample": {
      "title": "Support bot persona",
      "story": "System: be brief and cite policy; user asks refund question.",
      "takeaway": "Roles encode product behavior."
    },
    "quiz": [
      {
        "id": "roles-system-user-assistant-q1",
        "prompt": "System role mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Sets policy and persona"
          },
          {
            "id": "o1",
            "text": "Replaces the GPU"
          },
          {
            "id": "o2",
            "text": "Is the user question"
          },
          {
            "id": "o3",
            "text": "Is CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Global steering."
      },
      {
        "id": "roles-system-user-assistant-q2",
        "prompt": "Assistant role is…",
        "options": [
          {
            "id": "o0",
            "text": "The model response channel"
          },
          {
            "id": "o1",
            "text": "Always the database"
          },
          {
            "id": "o2",
            "text": "Only offline"
          },
          {
            "id": "o3",
            "text": "A Kubernetes node"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Model output."
      },
      {
        "id": "roles-system-user-assistant-q3",
        "prompt": "System prompts are perfect security.",
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
            "text": "Only on Mondays"
          },
          {
            "id": "o3",
            "text": "Only in XML"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Not a hard security boundary."
      }
    ],
    "nextConceptId": "zero-one-few-shot"
  },
  {
    "id": "zero-one-few-shot",
    "categoryId": "prompt-engineering",
    "title": "Zero / One / Few-shot",
    "subtitle": "Teach by giving zero to a few examples",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "roles-system-user-assistant"
    ],
    "laymanSummary": "Zero-shot asks the model to perform a task with instructions only. One-shot and few-shot provide example input-output pairs in the prompt so the model mirrors the pattern. Examples are a lightweight way to specify format and style without fine-tuning.",
    "analogy": "Showing a worked example on the blackboard before asking students to do the next problem.",
    "explanation": [
      "Zero-shot: instructions alone.",
      "Few-shot: demos in context.",
      "Pick diverse, correct examples.",
      "Too many demos can crowd the context window."
    ],
    "keyTerms": [
      {
        "term": "Zero-shot",
        "definition": "No examples in the prompt"
      },
      {
        "term": "Few-shot",
        "definition": "Multiple in-context examples"
      },
      {
        "term": "In-context learning",
        "definition": "Adapting from prompt examples"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Zero / One / Few-shot — visual walkthrough",
      "description": "Step through the core idea behind Zero / One / Few-shot.",
      "steps": [
        {
          "id": "step-1",
          "caption": "State the task.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Optionally add examples.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Ask for the new case.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Model mirrors the pattern.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Check format adherence.",
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
          "Zero-shot extract JSON",
          "One good example",
          "Five conflicting examples"
        ],
        "insights": {
          "Zero-shot extract JSON": "Works if instructions are crisp.",
          "One good example": "Often stabilizes format.",
          "Five conflicting examples": "Confuses the pattern."
        },
        "selected": "Zero-shot extract JSON"
      }
    },
    "realWorldExample": {
      "title": "Ticket triage labels",
      "story": "Show three labeled tickets, then ask for the fourth label.",
      "takeaway": "Examples specify the label taxonomy quickly."
    },
    "quiz": [
      {
        "id": "zero-one-few-shot-q1",
        "prompt": "Few-shot prompting provides…",
        "options": [
          {
            "id": "o0",
            "text": "Examples in the prompt"
          },
          {
            "id": "o1",
            "text": "New GPU drivers"
          },
          {
            "id": "o2",
            "text": "A database schema automatically"
          },
          {
            "id": "o3",
            "text": "CSS themes"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "In-context demos."
      },
      {
        "id": "zero-one-few-shot-q2",
        "prompt": "Zero-shot means…",
        "options": [
          {
            "id": "o0",
            "text": "No examples, instructions only"
          },
          {
            "id": "o1",
            "text": "Zero temperature always"
          },
          {
            "id": "o2",
            "text": "No tokens"
          },
          {
            "id": "o3",
            "text": "No model"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Instructions only."
      },
      {
        "id": "zero-one-few-shot-q3",
        "prompt": "Bad examples usually…",
        "options": [
          {
            "id": "o0",
            "text": "Help always"
          },
          {
            "id": "o1",
            "text": "Teach the wrong pattern"
          },
          {
            "id": "o2",
            "text": "Delete context"
          },
          {
            "id": "o3",
            "text": "Fix hallucinations"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Demos are teachers."
      }
    ],
    "prevConceptId": "roles-system-user-assistant",
    "nextConceptId": "chain-of-thought"
  },
  {
    "id": "chain-of-thought",
    "categoryId": "prompt-engineering",
    "title": "Chain of Thought",
    "subtitle": "Ask for step-by-step reasoning",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "zero-one-few-shot"
    ],
    "laymanSummary": "Chain-of-Thought (CoT) prompting asks the model to reason in intermediate steps before the final answer. For multi-step problems, visible reasoning often improves accuracy—though steps can also look convincing while being wrong.",
    "analogy": "Show your work on a math quiz: intermediate lines catch arithmetic slips.",
    "explanation": [
      "Encourage stepwise reasoning.",
      "Helps on multi-step tasks.",
      "Does not guarantee correctness.",
      "Can be combined with self-consistency or tools."
    ],
    "keyTerms": [
      {
        "term": "Chain of Thought",
        "definition": "Intermediate reasoning tokens"
      },
      {
        "term": "Final answer",
        "definition": "The concluded result"
      },
      {
        "term": "Scratchpad",
        "definition": "Working space for steps"
      }
    ],
    "visualization": {
      "kind": "flagship",
      "title": "Chain of Thought — visual walkthrough",
      "description": "Step through the core idea behind Chain of Thought.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Pose a multi-step question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Ask for step-by-step reasoning.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Model emits intermediate steps.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Conclude with an answer.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Verify the steps.",
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
      "kind": "prompt-builder",
      "title": "Add reasoning scaffolding",
      "description": "Toggle CoT instructions and compare structure.",
      "fixture": {
        "base": "If a factory makes 12 widgets/hour and runs 7 hours, how many widgets?",
        "withCot": "Think step by step, then give the final number.",
        "answers": {
          "base": "Jumps to 84 (maybe).",
          "withCot": "Shows 12×7=84 with intermediate checks."
        }
      }
    },
    "realWorldExample": {
      "title": "Physics word problems",
      "story": "Students prompt think step by step for unit conversions.",
      "takeaway": "Process scaffolding lifts performance."
    },
    "quiz": [
      {
        "id": "chain-of-thought-q1",
        "prompt": "CoT mainly asks the model to…",
        "options": [
          {
            "id": "o0",
            "text": "Hide all reasoning"
          },
          {
            "id": "o1",
            "text": "Write intermediate reasoning steps"
          },
          {
            "id": "o2",
            "text": "Delete tokens"
          },
          {
            "id": "o3",
            "text": "Ban math"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Show work."
      },
      {
        "id": "chain-of-thought-q2",
        "prompt": "CoT guarantees correctness.",
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
            "text": "Only in rhyme"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Helpful but fallible."
      },
      {
        "id": "chain-of-thought-q3",
        "prompt": "CoT helps most when…",
        "options": [
          {
            "id": "o0",
            "text": "Tasks are multi-step"
          },
          {
            "id": "o1",
            "text": "Tasks are single-token copies"
          },
          {
            "id": "o2",
            "text": "CSS is involved"
          },
          {
            "id": "o3",
            "text": "DNS is down"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Multi-step reasoning."
      }
    ],
    "prevConceptId": "zero-one-few-shot",
    "nextConceptId": "self-consistency"
  },
  {
    "id": "self-consistency",
    "categoryId": "prompt-engineering",
    "title": "Self-Consistency",
    "subtitle": "Sample multiple reasonings and vote",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "chain-of-thought"
    ],
    "laymanSummary": "Self-consistency samples several chain-of-thought trajectories (usually with temperature) and selects the most common final answer. Agreement across diverse paths often beats one greedy reasoning trace.",
    "analogy": "Ask three study partners to solve independently, then trust the answer they converge on.",
    "explanation": [
      "Sample multiple reasoning paths.",
      "Extract final answers.",
      "Majority vote.",
      "Costs more tokens.",
      "Helps when reasoning is brittle."
    ],
    "keyTerms": [
      {
        "term": "Self-consistency",
        "definition": "Vote over multiple sampled solutions"
      },
      {
        "term": "Diversity",
        "definition": "Different reasoning paths"
      },
      {
        "term": "Majority vote",
        "definition": "Pick the most common answer"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Self-Consistency — visual walkthrough",
      "description": "Step through the core idea behind Self-Consistency.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Ask a hard question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Sample N CoT answers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Parse finals.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Vote.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Return consensus.",
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
          "One greedy CoT",
          "Five sampled CoTs + vote",
          "Hundred samples for a yes/no FAQ"
        ],
        "insights": {
          "One greedy CoT": "Cheap, riskier.",
          "Five sampled CoTs + vote": "Common reliability boost.",
          "Hundred samples for a yes/no FAQ": "Overkill cost."
        },
        "selected": "One greedy CoT"
      }
    },
    "realWorldExample": {
      "title": "Math contest practice",
      "story": "Multiple samples reduce unlucky reasoning slips.",
      "takeaway": "Compute trades for reliability."
    },
    "quiz": [
      {
        "id": "self-consistency-q1",
        "prompt": "Self-consistency uses…",
        "options": [
          {
            "id": "o0",
            "text": "Multiple sampled solutions and voting"
          },
          {
            "id": "o1",
            "text": "A single forced lie"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only one token ever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Vote ensemble."
      },
      {
        "id": "self-consistency-q2",
        "prompt": "It usually needs…",
        "options": [
          {
            "id": "o0",
            "text": "Higher token cost"
          },
          {
            "id": "o1",
            "text": "Zero compute"
          },
          {
            "id": "o2",
            "text": "No parsing"
          },
          {
            "id": "o3",
            "text": "No question"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "More samples cost more."
      },
      {
        "id": "self-consistency-q3",
        "prompt": "It helps when…",
        "options": [
          {
            "id": "o0",
            "text": "Single traces are brittle"
          },
          {
            "id": "o1",
            "text": "The answer is a random GIF"
          },
          {
            "id": "o2",
            "text": "Networking is off"
          },
          {
            "id": "o3",
            "text": "Fonts are bold"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Brittle reasoning."
      }
    ],
    "prevConceptId": "chain-of-thought",
    "nextConceptId": "tree-of-thoughts"
  },
  {
    "id": "tree-of-thoughts",
    "categoryId": "prompt-engineering",
    "title": "Tree of Thoughts",
    "subtitle": "Explore branching reasoning options",
    "difficulty": "advanced",
    "estimatedMinutes": 8,
    "prerequisites": [
      "self-consistency"
    ],
    "laymanSummary": "Tree of Thoughts explores multiple partial reasoning branches, evaluates them, and expands promising ones—more search-like than a single linear chain. It can improve hard planning problems at higher complexity and cost.",
    "analogy": "A chess player considers several move trees, prunes weak lines, and deepens strong ones.",
    "explanation": [
      "Propose multiple next thoughts.",
      "Evaluate branches.",
      "Expand the best candidates.",
      "Prune weak paths.",
      "Heavier than linear CoT."
    ],
    "keyTerms": [
      {
        "term": "Branch",
        "definition": "An alternative partial solution"
      },
      {
        "term": "Evaluation",
        "definition": "Scoring intermediate thoughts"
      },
      {
        "term": "Search",
        "definition": "Exploring a tree of options"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Tree of Thoughts — visual walkthrough",
      "description": "Step through the core idea behind Tree of Thoughts.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Root problem posed.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Generate candidate thoughts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Score them.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Expand top branches.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Choose best leaf answer.",
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
          "Linear CoT",
          "Tree search of thoughts",
          "Random words"
        ],
        "insights": {
          "Linear CoT": "Simple path.",
          "Tree search of thoughts": "Explore alternatives.",
          "Random words": "Not reasoning."
        },
        "selected": "Linear CoT"
      }
    },
    "realWorldExample": {
      "title": "Puzzle solving demos",
      "story": "ToT-style search helps certain planning puzzles.",
      "takeaway": "Search wrappers sit around the LLM."
    },
    "quiz": [
      {
        "id": "tree-of-thoughts-q1",
        "prompt": "Tree of Thoughts is…",
        "options": [
          {
            "id": "o0",
            "text": "Branching exploration of reasoning"
          },
          {
            "id": "o1",
            "text": "A CSS layout only"
          },
          {
            "id": "o2",
            "text": "A database index"
          },
          {
            "id": "o3",
            "text": "A GPU brand"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Branching search."
      },
      {
        "id": "tree-of-thoughts-q2",
        "prompt": "Compared with linear CoT, ToT is usually…",
        "options": [
          {
            "id": "o0",
            "text": "Cheaper always"
          },
          {
            "id": "o1",
            "text": "More expensive and search-like"
          },
          {
            "id": "o2",
            "text": "Impossible"
          },
          {
            "id": "o3",
            "text": "Only for images"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Heavier."
      },
      {
        "id": "tree-of-thoughts-q3",
        "prompt": "Pruning means…",
        "options": [
          {
            "id": "o0",
            "text": "Dropping weak branches"
          },
          {
            "id": "o1",
            "text": "Deleting the model"
          },
          {
            "id": "o2",
            "text": "Banning prompts"
          },
          {
            "id": "o3",
            "text": "Formatting JSON"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Cut weak lines."
      }
    ],
    "prevConceptId": "self-consistency",
    "nextConceptId": "react-prompting"
  },
  {
    "id": "react-prompting",
    "categoryId": "prompt-engineering",
    "title": "ReAct prompting",
    "subtitle": "Interleave reasoning with actions",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "tree-of-thoughts"
    ],
    "laymanSummary": "ReAct prompting structures outputs as interleaved Thought, Action, and Observation. The model plans, calls a tool, reads the result, and continues. It is a prompting pattern that later becomes the backbone of many agents.",
    "analogy": "A lab notebook: hypothesize, run an experiment, record the observation, then decide the next step.",
    "explanation": [
      "Think about what is needed.",
      "Act with a tool or API.",
      "Observe the result.",
      "Repeat until answerable.",
      "Reduces pure hallucination on lookup tasks."
    ],
    "keyTerms": [
      {
        "term": "Thought",
        "definition": "Internal plan text"
      },
      {
        "term": "Action",
        "definition": "Tool call"
      },
      {
        "term": "Observation",
        "definition": "Tool result"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "ReAct prompting — visual walkthrough",
      "description": "Step through the core idea behind ReAct prompting.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User asks a grounded question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Thought: need a lookup.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Action: call tool.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Observation returns facts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Final answer uses observations.",
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
          "Answer with no tools",
          "ReAct with a calculator",
          "ReAct but ignore observations"
        ],
        "insights": {
          "Answer with no tools": "May invent numbers.",
          "ReAct with a calculator": "Grounded arithmetic.",
          "ReAct but ignore observations": "Defeats the pattern."
        },
        "selected": "Answer with no tools"
      }
    },
    "realWorldExample": {
      "title": "Weather plus outfit advice",
      "story": "Thought needs weather; action calls API; observation guides clothing advice.",
      "takeaway": "Tools ground the loop."
    },
    "quiz": [
      {
        "id": "react-prompting-q1",
        "prompt": "ReAct interleaves…",
        "options": [
          {
            "id": "o0",
            "text": "Thought, action, observation"
          },
          {
            "id": "o1",
            "text": "Only CSS and HTML"
          },
          {
            "id": "o2",
            "text": "Only loss and accuracy"
          },
          {
            "id": "o3",
            "text": "Only pods and nodes"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "TAO loop."
      },
      {
        "id": "react-prompting-q2",
        "prompt": "Actions are typically…",
        "options": [
          {
            "id": "o0",
            "text": "Tool calls"
          },
          {
            "id": "o1",
            "text": "Random poetry only"
          },
          {
            "id": "o2",
            "text": "GPU temperatures"
          },
          {
            "id": "o3",
            "text": "Font downloads"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Tools."
      },
      {
        "id": "react-prompting-q3",
        "prompt": "Observations are…",
        "options": [
          {
            "id": "o0",
            "text": "Tool results fed back"
          },
          {
            "id": "o1",
            "text": "Ignored always"
          },
          {
            "id": "o2",
            "text": "CSS variables"
          },
          {
            "id": "o3",
            "text": "DNS TXT records only"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Feedback."
      }
    ],
    "prevConceptId": "tree-of-thoughts",
    "nextConceptId": "prompt-chaining"
  },
  {
    "id": "prompt-chaining",
    "categoryId": "prompt-engineering",
    "title": "Prompt Chaining",
    "subtitle": "Break a job into staged prompts",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "react-prompting"
    ],
    "laymanSummary": "Prompt chaining splits a complex task into stages where each prompt’s output feeds the next: extract, transform, verify, format. Smaller steps are easier to control, test, and cache than one mega-prompt.",
    "analogy": "An assembly line: cut, assemble, paint, inspect—rather than one chaotic workshop moment.",
    "explanation": [
      "Decompose the workflow.",
      "Define interfaces between steps.",
      "Validate intermediate outputs.",
      "Parallelize independent stages.",
      "Easier debugging than monolith prompts."
    ],
    "keyTerms": [
      {
        "term": "Chain",
        "definition": "Sequence of prompt steps"
      },
      {
        "term": "Intermediate artifact",
        "definition": "Output passed downstream"
      },
      {
        "term": "Validator step",
        "definition": "Checks quality before continuing"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Prompt Chaining — visual walkthrough",
      "description": "Step through the core idea behind Prompt Chaining.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Big task arrives.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Step 1 extracts facts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Step 2 drafts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Step 3 critiques.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Step 4 formats final.",
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
          "One mega-prompt",
          "Extract then draft then check",
          "Infinite chain of 200 microsteps"
        ],
        "insights": {
          "One mega-prompt": "Hard to debug.",
          "Extract then draft then check": "Practical chain.",
          "Infinite chain of 200 microsteps": "Over-fragmented latency."
        },
        "selected": "One mega-prompt"
      }
    },
    "realWorldExample": {
      "title": "RFP response drafting",
      "story": "Extract requirements, draft sections, compliance check, then polish.",
      "takeaway": "Chains match real document workflows."
    },
    "quiz": [
      {
        "id": "prompt-chaining-q1",
        "prompt": "Prompt chaining…",
        "options": [
          {
            "id": "o0",
            "text": "Splits work into staged prompts"
          },
          {
            "id": "o1",
            "text": "Merges all GPUs"
          },
          {
            "id": "o2",
            "text": "Deletes context always"
          },
          {
            "id": "o3",
            "text": "Bans JSON"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Staged prompts."
      },
      {
        "id": "prompt-chaining-q2",
        "prompt": "A benefit is…",
        "options": [
          {
            "id": "o0",
            "text": "Easier testing of steps"
          },
          {
            "id": "o1",
            "text": "Guaranteed truth"
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
        "explanation": "Debuggability."
      },
      {
        "id": "prompt-chaining-q3",
        "prompt": "Interfaces between steps should be…",
        "options": [
          {
            "id": "o0",
            "text": "Clear and validated"
          },
          {
            "id": "o1",
            "text": "Random"
          },
          {
            "id": "o2",
            "text": "Hidden forever"
          },
          {
            "id": "o3",
            "text": "Only emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Contracts."
      }
    ],
    "prevConceptId": "react-prompting",
    "nextConceptId": "structured-outputs"
  },
  {
    "id": "structured-outputs",
    "categoryId": "prompt-engineering",
    "title": "Structured Outputs",
    "subtitle": "Force machine-readable answers",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "prompt-chaining"
    ],
    "laymanSummary": "Structured outputs ask the model to return JSON, tables, or schema-valid objects so software can parse results reliably. Schemas, constrained decoding, and validators turn prose generators into API-friendly components.",
    "analogy": "Fill a form with labeled fields instead of writing a free-form essay your parser cannot read.",
    "explanation": [
      "Provide a schema or template.",
      "Prefer constrained decoding when available.",
      "Validate and retry on failure.",
      "Keep schemas minimal and explicit."
    ],
    "keyTerms": [
      {
        "term": "Schema",
        "definition": "Expected fields and types"
      },
      {
        "term": "Constrained decoding",
        "definition": "Limit tokens to valid structures"
      },
      {
        "term": "Validation",
        "definition": "Check output against schema"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Structured Outputs — visual walkthrough",
      "description": "Step through the core idea behind Structured Outputs.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define JSON schema.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Prompt for schema-only output.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Model emits JSON.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Validator checks.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "App consumes fields.",
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
          "Free prose only",
          "JSON schema + validation",
          "Huge ambiguous schema"
        ],
        "insights": {
          "Free prose only": "Hard to parse.",
          "JSON schema + validation": "Production pattern.",
          "Huge ambiguous schema": "Brittle compliance."
        },
        "selected": "Free prose only"
      }
    },
    "realWorldExample": {
      "title": "Invoice field extraction",
      "story": "Return vendor, date, total as JSON for accounting software.",
      "takeaway": "Structure bridges LLMs and programs."
    },
    "quiz": [
      {
        "id": "structured-outputs-q1",
        "prompt": "Structured outputs help…",
        "options": [
          {
            "id": "o0",
            "text": "Programs parse results reliably"
          },
          {
            "id": "o1",
            "text": "GPUs overheat less by magic"
          },
          {
            "id": "o2",
            "text": "DNS resolve faster"
          },
          {
            "id": "o3",
            "text": "Fonts bold themselves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Machine readability."
      },
      {
        "id": "structured-outputs-q2",
        "prompt": "A schema defines…",
        "options": [
          {
            "id": "o0",
            "text": "Expected fields and types"
          },
          {
            "id": "o1",
            "text": "Ocean currents"
          },
          {
            "id": "o2",
            "text": "Cable colors"
          },
          {
            "id": "o3",
            "text": "Only temperatures"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Shape contract."
      },
      {
        "id": "structured-outputs-q3",
        "prompt": "On invalid JSON you should…",
        "options": [
          {
            "id": "o0",
            "text": "Validate and retry or repair"
          },
          {
            "id": "o1",
            "text": "Trust it anyway"
          },
          {
            "id": "o2",
            "text": "Delete the app"
          },
          {
            "id": "o3",
            "text": "Raise temperature to 100"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Validate."
      }
    ],
    "prevConceptId": "prompt-chaining",
    "nextConceptId": "role-prompting-constraints",
    "codeExample": {
      "language": "ts",
      "title": "Schema sketch",
      "code": "type Invoice = { vendor: string; total: number }",
      "notes": "Keep fields tight."
    }
  },
  {
    "id": "role-prompting-constraints",
    "categoryId": "prompt-engineering",
    "title": "Role prompting & constraints",
    "subtitle": "Persona plus hard rules",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "structured-outputs"
    ],
    "laymanSummary": "Role prompting assigns a persona (tutor, reviewer, SRE) while constraints specify hard rules: length limits, banned topics, citation requirements, or tool-only claims. Constraints matter more than theatrical personas.",
    "analogy": "Costume plus safety rules: the costume sets tone; the rules keep the performance legal.",
    "explanation": [
      "Persona shapes style.",
      "Constraints encode non-negotiables.",
      "Prefer testable rules.",
      "Conflicts between style and safety need priority order."
    ],
    "keyTerms": [
      {
        "term": "Persona",
        "definition": "Assumed role or style"
      },
      {
        "term": "Constraint",
        "definition": "Hard requirement"
      },
      {
        "term": "Priority",
        "definition": "Which rule wins on conflict"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Role prompting & constraints — visual walkthrough",
      "description": "Step through the core idea behind Role prompting & constraints.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Assign a helpful tutor persona.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Add constraints: no final exam answers verbatim.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "User asks for a solution.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Model teaches with hints.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Constraints override flair.",
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
          "Funny persona only",
          "Funny persona + hard privacy rules",
          "No constraints"
        ],
        "insights": {
          "Funny persona only": "Style without guardrails.",
          "Funny persona + hard privacy rules": "Balanced.",
          "No constraints": "Risky drift."
        },
        "selected": "Funny persona only"
      }
    },
    "realWorldExample": {
      "title": "Exam-safe tutoring",
      "story": "Tutor role with ban on full answer dumps.",
      "takeaway": "Constraints protect academic integrity."
    },
    "quiz": [
      {
        "id": "role-prompting-constraints-q1",
        "prompt": "Constraints should be…",
        "options": [
          {
            "id": "o0",
            "text": "Testable rules"
          },
          {
            "id": "o1",
            "text": "Only vibes"
          },
          {
            "id": "o2",
            "text": "Hidden from evals"
          },
          {
            "id": "o3",
            "text": "Random"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Testable."
      },
      {
        "id": "role-prompting-constraints-q2",
        "prompt": "Persona mainly affects…",
        "options": [
          {
            "id": "o0",
            "text": "Tone and framing"
          },
          {
            "id": "o1",
            "text": "GPU voltage"
          },
          {
            "id": "o2",
            "text": "DNS TTL"
          },
          {
            "id": "o3",
            "text": "Disk format"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Style."
      },
      {
        "id": "role-prompting-constraints-q3",
        "prompt": "If persona conflicts with safety…",
        "options": [
          {
            "id": "o0",
            "text": "Safety should win"
          },
          {
            "id": "o1",
            "text": "Persona always wins"
          },
          {
            "id": "o2",
            "text": "Flip a coin"
          },
          {
            "id": "o3",
            "text": "Delete both"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Priorities."
      }
    ],
    "prevConceptId": "structured-outputs",
    "nextConceptId": "context-engineering"
  },
  {
    "id": "context-engineering",
    "categoryId": "prompt-engineering",
    "title": "Context Engineering",
    "subtitle": "Design what enters the window on purpose",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "role-prompting-constraints"
    ],
    "laymanSummary": "Context engineering is the discipline of selecting, compressing, ordering, and refreshing what the model sees: instructions, tools, retrieved docs, memory, and user state. Prompts are only one ingredient; the whole window is the product.",
    "analogy": "Packing a backpack for a hike: bring the map and snacks that matter, leave the encyclopedias.",
    "explanation": [
      "Choose high-value tokens.",
      "Order matters; put critical rules where models attend reliably.",
      "Compress history with summaries.",
      "Retrieve just-in-time facts.",
      "Measure context ablations."
    ],
    "keyTerms": [
      {
        "term": "Context budget",
        "definition": "Limited token capacity"
      },
      {
        "term": "Memory",
        "definition": "Persisted state outside raw chat"
      },
      {
        "term": "Ablation",
        "definition": "Remove pieces to test impact"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Context Engineering — visual walkthrough",
      "description": "Step through the core idea behind Context Engineering.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Inventory possible context sources.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Rank by relevance.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Fit into budget.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Place instructions carefully.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Generate with that curated window.",
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
          "Paste everything",
          "Rank and fit top evidence",
          "Empty context"
        ],
        "insights": {
          "Paste everything": "Noise and truncation.",
          "Rank and fit top evidence": "Core skill.",
          "Empty context": "Under-specified."
        },
        "selected": "Paste everything"
      }
    },
    "realWorldExample": {
      "title": "IDE coding agents",
      "story": "Rules files, open tabs, and retrieved chunks are curated into context.",
      "takeaway": "Engineering the window beats prompt poetry alone."
    },
    "quiz": [
      {
        "id": "context-engineering-q1",
        "prompt": "Context engineering focuses on…",
        "options": [
          {
            "id": "o0",
            "text": "What enters the model window"
          },
          {
            "id": "o1",
            "text": "Only temperature"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only GPU brands"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Window design."
      },
      {
        "id": "context-engineering-q2",
        "prompt": "A context budget is…",
        "options": [
          {
            "id": "o0",
            "text": "Limited token capacity"
          },
          {
            "id": "o1",
            "text": "Unlimited always"
          },
          {
            "id": "o2",
            "text": "A finance PDF only"
          },
          {
            "id": "o3",
            "text": "A font file"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Capacity."
      },
      {
        "id": "context-engineering-q3",
        "prompt": "Summaries help by…",
        "options": [
          {
            "id": "o0",
            "text": "Compressing old history"
          },
          {
            "id": "o1",
            "text": "Deleting the model"
          },
          {
            "id": "o2",
            "text": "Banning tools"
          },
          {
            "id": "o3",
            "text": "Raising loss"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Compression."
      }
    ],
    "prevConceptId": "role-prompting-constraints",
    "nextConceptId": "prompt-failure-modes"
  },
  {
    "id": "prompt-failure-modes",
    "categoryId": "prompt-engineering",
    "title": "Prompt failure modes",
    "subtitle": "How prompts go wrong in practice",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "context-engineering"
    ],
    "laymanSummary": "Prompts fail through ambiguity, conflicting instructions, missing constraints, format drift, jailbreak pressure, and overlong clutter. Treat prompts like code: test, version, and monitor regressions when models change.",
    "analogy": "Vague homework instructions that get five different interpretations from five students.",
    "explanation": [
      "Ambiguity yields variance.",
      "Conflicts create unstable behavior.",
      "Missing evals hide breakage.",
      "Model upgrades can invalidate prompt assumptions."
    ],
    "keyTerms": [
      {
        "term": "Ambiguity",
        "definition": "Unclear success criteria"
      },
      {
        "term": "Instruction conflict",
        "definition": "Two rules that disagree"
      },
      {
        "term": "Prompt regression",
        "definition": "Old prompt fails on new model"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Prompt failure modes — visual walkthrough",
      "description": "Step through the core idea behind Prompt failure modes.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Ship a vague prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Users interpret differently.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Outputs vary wildly.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Add constraints and examples.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Variance drops; quality rises.",
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
          "Vague adjectives",
          "Measurable constraints",
          "Contradictory rules"
        ],
        "insights": {
          "Vague adjectives": "High variance.",
          "Measurable constraints": "More reliable.",
          "Contradictory rules": "Unstable behavior."
        },
        "selected": "Vague adjectives"
      }
    },
    "realWorldExample": {
      "title": "Promo email generator",
      "story": "“Make it pop” produced chaos until length, audience, and CTA were specified.",
      "takeaway": "Specificity beats adjectives."
    },
    "quiz": [
      {
        "id": "prompt-failure-modes-q1",
        "prompt": "A common failure is…",
        "options": [
          {
            "id": "o0",
            "text": "Ambiguous success criteria"
          },
          {
            "id": "o1",
            "text": "Too much electricity"
          },
          {
            "id": "o2",
            "text": "CSS being blue"
          },
          {
            "id": "o3",
            "text": "USB-C"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ambiguity."
      },
      {
        "id": "prompt-failure-modes-q2",
        "prompt": "Prompts should be…",
        "options": [
          {
            "id": "o0",
            "text": "Tested like code"
          },
          {
            "id": "o1",
            "text": "Never changed"
          },
          {
            "id": "o2",
            "text": "Hidden from product"
          },
          {
            "id": "o3",
            "text": "Written only in emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Engineer them."
      },
      {
        "id": "prompt-failure-modes-q3",
        "prompt": "Model upgrades can…",
        "options": [
          {
            "id": "o0",
            "text": "Invalidate prompt assumptions"
          },
          {
            "id": "o1",
            "text": "Never affect prompts"
          },
          {
            "id": "o2",
            "text": "Delete JSON forever"
          },
          {
            "id": "o3",
            "text": "Ban evaluation"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Regressions happen."
      }
    ],
    "prevConceptId": "context-engineering"
  }
] as Concept[];
