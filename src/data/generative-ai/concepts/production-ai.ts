import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "evaluation",
    "categoryId": "production-ai",
    "title": "Evaluation",
    "subtitle": "Measure quality with tests, not vibes",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [],
    "laymanSummary": "Evaluation scores whether an AI system meets task requirements: automated metrics, LLM-as-judge carefully used, human review, and regression sets. Production teams treat evals like unit tests for behavior.",
    "analogy": "Exam questions for your product—run them before every release.",
    "explanation": [
      "Build a golden dataset.",
      "Score answers automatically where possible.",
      "Sample human reviews.",
      "Run on every prompt/model change.",
      "Separate retrieval vs generation scores for RAG."
    ],
    "keyTerms": [
      {
        "term": "Golden set",
        "definition": "Curated labeled examples"
      },
      {
        "term": "Regression eval",
        "definition": "Catch quality drops"
      },
      {
        "term": "LLM-as-judge",
        "definition": "Model scoring outputs with caveats"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Evaluation — visual walkthrough",
      "description": "Step through the core idea behind Evaluation.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Collect representative cases.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Define rubrics.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Score baseline.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Change a prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Compare deltas.",
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
          "Ship by intuition",
          "Golden set regressions",
          "One anecdote from a friend"
        ],
        "insights": {
          "Ship by intuition": "Risky.",
          "Golden set regressions": "Healthy.",
          "One anecdote from a friend": "Anecdote ≠ eval."
        },
        "selected": "Ship by intuition"
      }
    },
    "realWorldExample": {
      "title": "Tutor answer quality gates",
      "story": "Weekly eval suite blocks deploys that hurt math accuracy.",
      "takeaway": "Evals are release gates."
    },
    "quiz": [
      {
        "id": "evaluation-q1",
        "prompt": "Evaluation should be…",
        "options": [
          {
            "id": "o0",
            "text": "Systematic and repeatable"
          },
          {
            "id": "o1",
            "text": "Only vibes"
          },
          {
            "id": "o2",
            "text": "Only GPU temps"
          },
          {
            "id": "o3",
            "text": "Only CSS lint"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Systematic."
      },
      {
        "id": "evaluation-q2",
        "prompt": "Golden sets are…",
        "options": [
          {
            "id": "o0",
            "text": "Curated test examples"
          },
          {
            "id": "o1",
            "text": "Random memes only"
          },
          {
            "id": "o2",
            "text": "Docker secrets"
          },
          {
            "id": "o3",
            "text": "Fan curves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Tests."
      },
      {
        "id": "evaluation-q3",
        "prompt": "For RAG, evaluate…",
        "options": [
          {
            "id": "o0",
            "text": "Retrieval and answers"
          },
          {
            "id": "o1",
            "text": "Only fonts"
          },
          {
            "id": "o2",
            "text": "Only HDMI"
          },
          {
            "id": "o3",
            "text": "Only cables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Both stages."
      }
    ],
    "nextConceptId": "observability"
  },
  {
    "id": "observability",
    "categoryId": "production-ai",
    "title": "Observability",
    "subtitle": "See inside live requests",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "evaluation"
    ],
    "laymanSummary": "Observability captures traces, logs, and artifacts for each request: prompts, retrieved chunks, tool calls, latencies, and outputs (with privacy controls). It turns “the model was weird” into a debuggable timeline.",
    "analogy": "Flight data recorders for AI requests.",
    "explanation": [
      "Trace orchestration steps.",
      "Redact sensitive fields.",
      "Link metrics to traces.",
      "Sample when volume is huge.",
      "Use traces to improve prompts/RAG."
    ],
    "keyTerms": [
      {
        "term": "Trace",
        "definition": "Structured timeline of a request"
      },
      {
        "term": "Span",
        "definition": "One step inside a trace"
      },
      {
        "term": "Redaction",
        "definition": "Remove sensitive data"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Observability — visual walkthrough",
      "description": "Step through the core idea behind Observability.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Request starts with trace id.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Retrieval span logs chunk IDs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "LLM span logs token stats.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Tool span logs args/results.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Debug with the timeline.",
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
          "Log nothing",
          "Traces with redaction",
          "Log raw secrets forever"
        ],
        "insights": {
          "Log nothing": "Cannot debug.",
          "Traces with redaction": "Balanced.",
          "Log raw secrets forever": "Breach risk."
        },
        "selected": "Log nothing"
      }
    },
    "realWorldExample": {
      "title": "Why did it cite the wrong doc?",
      "story": "Trace shows reranker order flipped after a deploy.",
      "takeaway": "Observability finds root causes."
    },
    "quiz": [
      {
        "id": "observability-q1",
        "prompt": "Observability provides…",
        "options": [
          {
            "id": "o0",
            "text": "Debuggable traces of requests"
          },
          {
            "id": "o1",
            "text": "Free GPUs"
          },
          {
            "id": "o2",
            "text": "Perfect truth"
          },
          {
            "id": "o3",
            "text": "Automatic compliance forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Visibility."
      },
      {
        "id": "observability-q2",
        "prompt": "Redaction is needed because…",
        "options": [
          {
            "id": "o0",
            "text": "Prompts may contain secrets"
          },
          {
            "id": "o1",
            "text": "Fonts are bold"
          },
          {
            "id": "o2",
            "text": "CSS is pink"
          },
          {
            "id": "o3",
            "text": "HDMI is hot"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Privacy."
      },
      {
        "id": "observability-q3",
        "prompt": "Spans represent…",
        "options": [
          {
            "id": "o0",
            "text": "Steps inside a trace"
          },
          {
            "id": "o1",
            "text": "Ocean waves"
          },
          {
            "id": "o2",
            "text": "Cable types"
          },
          {
            "id": "o3",
            "text": "Mouse LOD"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Steps."
      }
    ],
    "prevConceptId": "evaluation",
    "nextConceptId": "security-privacy"
  },
  {
    "id": "security-privacy",
    "categoryId": "production-ai",
    "title": "Security / Privacy",
    "subtitle": "Threat models for LLM apps",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "observability"
    ],
    "laymanSummary": "LLM apps add threats: prompt injection, data exfiltration via tools, training data leakage, insecure key handling, and sensitive logs. Apply least privilege, isolation, redaction, and adversarial testing.",
    "analogy": "A building with doors, badges, cameras, and rules for contractors—not only a polite receptionist.",
    "explanation": [
      "Threat-model tools and data flows.",
      "Never trust retrieved/web content as instructions.",
      "Isolate credentials.",
      "Minimize retained personal data.",
      "Pen-test prompts and tools."
    ],
    "keyTerms": [
      {
        "term": "Prompt injection",
        "definition": "Hostile text steering the model"
      },
      {
        "term": "Least privilege",
        "definition": "Minimal access rights"
      },
      {
        "term": "Exfiltration",
        "definition": "Stealing data via outputs/tools"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Security / Privacy — visual walkthrough",
      "description": "Step through the core idea behind Security / Privacy.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Map data flows.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Identify injection surfaces.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Constrain tools.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Redact logs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Test attacks.",
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
          "Trust all retrieved text",
          "Isolate tools + sanitize",
          "Put keys in the mobile app"
        ],
        "insights": {
          "Trust all retrieved text": "Unsafe.",
          "Isolate tools + sanitize": "Hardening.",
          "Put keys in the mobile app": "Leak."
        },
        "selected": "Trust all retrieved text"
      }
    },
    "realWorldExample": {
      "title": "Web-reading agents",
      "story": "Untrusted pages tried to exfiltrate secrets via tool calls.",
      "takeaway": "Isolation saved the day."
    },
    "quiz": [
      {
        "id": "security-privacy-q1",
        "prompt": "Prompt injection is…",
        "options": [
          {
            "id": "o0",
            "text": "Hostile text steering the model"
          },
          {
            "id": "o1",
            "text": "A CSS property"
          },
          {
            "id": "o2",
            "text": "A GPU driver"
          },
          {
            "id": "o3",
            "text": "A vector index type"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Injection."
      },
      {
        "id": "security-privacy-q2",
        "prompt": "Tool access should follow…",
        "options": [
          {
            "id": "o0",
            "text": "Least privilege"
          },
          {
            "id": "o1",
            "text": "Root for all"
          },
          {
            "id": "o2",
            "text": "No auth"
          },
          {
            "id": "o3",
            "text": "Public keys in apps"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Least privilege."
      },
      {
        "id": "security-privacy-q3",
        "prompt": "Logs may contain…",
        "options": [
          {
            "id": "o0",
            "text": "Sensitive prompts needing redaction"
          },
          {
            "id": "o1",
            "text": "Only weather"
          },
          {
            "id": "o2",
            "text": "Only fonts"
          },
          {
            "id": "o3",
            "text": "Only HDMI CEC"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Careful logging."
      }
    ],
    "prevConceptId": "observability",
    "nextConceptId": "hallucination-mitigation"
  },
  {
    "id": "hallucination-mitigation",
    "categoryId": "production-ai",
    "title": "Hallucination mitigation",
    "subtitle": "Reduce fluent falsehoods",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "security-privacy"
    ],
    "laymanSummary": "Mitigate hallucinations with grounding (RAG/tools), abstention (“I don’t know”), citation requirements, lower-stakes drafting roles, constrained decoding, and human review for high risk. No single trick eliminates them.",
    "analogy": "Journalism standards: require sources, allow “unknown,” and fact-check before publish.",
    "explanation": [
      "Ground with evidence.",
      "Allow uncertainty.",
      "Cite or link sources.",
      "Verify critical claims.",
      "Measure groundedness."
    ],
    "keyTerms": [
      {
        "term": "Abstention",
        "definition": "Refusing when unsure"
      },
      {
        "term": "Citation",
        "definition": "Pointer to evidence"
      },
      {
        "term": "Fact check",
        "definition": "Independent verification"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Hallucination mitigation — visual walkthrough",
      "description": "Step through the core idea behind Hallucination mitigation.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Ask a factual question.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Retrieve evidence.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Answer only from evidence.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Cite chunks.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Flag missing evidence.",
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
          "Always answer confidently",
          "Answer only with citations or abstain",
          "Ban all uncertainty language"
        ],
        "insights": {
          "Always answer confidently": "Hallucination bait.",
          "Answer only with citations or abstain": "Safer pattern.",
          "Ban all uncertainty language": "Forces guessing."
        },
        "selected": "Always answer confidently"
      }
    },
    "realWorldExample": {
      "title": "Medical adjacent FAQ",
      "story": "Bot refuses diagnosis and cites approved leaflets only.",
      "takeaway": "Scope control reduces harm."
    },
    "quiz": [
      {
        "id": "hallucination-mitigation-q1",
        "prompt": "A strong mitigation is…",
        "options": [
          {
            "id": "o0",
            "text": "Grounding plus abstention"
          },
          {
            "id": "o1",
            "text": "Max temperature always"
          },
          {
            "id": "o2",
            "text": "No evals"
          },
          {
            "id": "o3",
            "text": "Delete retrieval"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ground and abstain."
      },
      {
        "id": "hallucination-mitigation-q2",
        "prompt": "Citations help users…",
        "options": [
          {
            "id": "o0",
            "text": "Verify claims"
          },
          {
            "id": "o1",
            "text": "Heat laptops"
          },
          {
            "id": "o2",
            "text": "Bold text"
          },
          {
            "id": "o3",
            "text": "Route packets"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Verify."
      },
      {
        "id": "hallucination-mitigation-q3",
        "prompt": "Hallucinations can be fully solved by one prompt sentence.",
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
            "text": "Only in Latin"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Defense in depth."
      }
    ],
    "prevConceptId": "security-privacy",
    "nextConceptId": "production-guardrails"
  },
  {
    "id": "production-guardrails",
    "categoryId": "production-ai",
    "title": "Guardrails",
    "subtitle": "Runtime policy enforcement",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "hallucination-mitigation"
    ],
    "laymanSummary": "Production guardrails enforce policies at runtime: topic blocks, PII filters, tool allowlists, rate limits, and output validators. Layer them: before model, around tools, after generation.",
    "analogy": "Airport security lanes plus cockpit locks—multiple checkpoints.",
    "explanation": [
      "Input filters.",
      "Tool gates.",
      "Output validators.",
      "Rate and abuse limits.",
      "Metrics on blocks."
    ],
    "keyTerms": [
      {
        "term": "Rate limit",
        "definition": "Cap request volume"
      },
      {
        "term": "Output validator",
        "definition": "Checks format/policy"
      },
      {
        "term": "Policy engine",
        "definition": "Central rules"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Guardrails — visual walkthrough",
      "description": "Step through the core idea behind Guardrails.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Input screened.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Model runs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Output screened.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Tool call gated.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Safe path completes.",
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
          "Prompt-only policy",
          "Layered runtime guardrails",
          "Disable all filters in prod"
        ],
        "insights": {
          "Prompt-only policy": "Soft.",
          "Layered runtime guardrails": "Production grade.",
          "Disable all filters in prod": "Reckless."
        },
        "selected": "Prompt-only policy"
      }
    },
    "realWorldExample": {
      "title": "Student data bots",
      "story": "PII filters block national IDs in outputs.",
      "takeaway": "Policy as code."
    },
    "quiz": [
      {
        "id": "production-guardrails-q1",
        "prompt": "Guardrails should be layered…",
        "options": [
          {
            "id": "o0",
            "text": "Before, around tools, and after"
          },
          {
            "id": "o1",
            "text": "Only in marketing"
          },
          {
            "id": "o2",
            "text": "Only in CSS"
          },
          {
            "id": "o3",
            "text": "Only on Fridays"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Layers."
      },
      {
        "id": "production-guardrails-q2",
        "prompt": "Rate limits mitigate…",
        "options": [
          {
            "id": "o0",
            "text": "Abuse and cost spikes"
          },
          {
            "id": "o1",
            "text": "Hallucinations completely"
          },
          {
            "id": "o2",
            "text": "Need for auth"
          },
          {
            "id": "o3",
            "text": "Need for UX"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Abuse/cost."
      },
      {
        "id": "production-guardrails-q3",
        "prompt": "Validators check…",
        "options": [
          {
            "id": "o0",
            "text": "Outputs against rules/schemas"
          },
          {
            "id": "o1",
            "text": "Ocean tides"
          },
          {
            "id": "o2",
            "text": "Fan RGB"
          },
          {
            "id": "o3",
            "text": "Mouse LOD"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Checks."
      }
    ],
    "prevConceptId": "hallucination-mitigation",
    "nextConceptId": "cost-optimization"
  },
  {
    "id": "cost-optimization",
    "categoryId": "production-ai",
    "title": "Cost optimization",
    "subtitle": "Spend tokens where they matter",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "production-guardrails"
    ],
    "laymanSummary": "LLM cost is driven by tokens, model choice, retries, and tool calls. Optimize with caching, smaller models for easy tasks, tighter prompts, retrieval over long pastes, and routing hard cases to bigger models.",
    "analogy": "Household budgeting: stop leaving every light on; use the big oven only when needed.",
    "explanation": [
      "Measure cost per successful task.",
      "Cache repeated prompts/results.",
      "Route by difficulty.",
      "Trim context waste.",
      "Cap agent steps."
    ],
    "keyTerms": [
      {
        "term": "Cache",
        "definition": "Reuse prior results"
      },
      {
        "term": "Model routing",
        "definition": "Pick model by case difficulty"
      },
      {
        "term": "Cost per task",
        "definition": "Economic KPI"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Cost optimization — visual walkthrough",
      "description": "Step through the core idea behind Cost optimization.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Log token spend.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Find verbose prompts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Tighten and cache.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Route simple intents small.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Bill drops, quality holds.",
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
          "Largest model for everything",
          "Routed models + cache",
          "Uncapped agent loops"
        ],
        "insights": {
          "Largest model for everything": "Expensive.",
          "Routed models + cache": "Sane.",
          "Uncapped agent loops": "Bill shock."
        },
        "selected": "Largest model for everything"
      }
    },
    "realWorldExample": {
      "title": "Support deflection",
      "story": "FAQ intents use a small model; complex cases escalate.",
      "takeaway": "Routing saves money."
    },
    "quiz": [
      {
        "id": "cost-optimization-q1",
        "prompt": "Major LLM cost driver is…",
        "options": [
          {
            "id": "o0",
            "text": "Tokens and model choice"
          },
          {
            "id": "o1",
            "text": "Wallpaper resolution"
          },
          {
            "id": "o2",
            "text": "Cable color"
          },
          {
            "id": "o3",
            "text": "Commit emoji count"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Tokens/models."
      },
      {
        "id": "cost-optimization-q2",
        "prompt": "Caching helps…",
        "options": [
          {
            "id": "o0",
            "text": "Repeated work"
          },
          {
            "id": "o1",
            "text": "Guaranteed novelty always"
          },
          {
            "id": "o2",
            "text": "Infinite context"
          },
          {
            "id": "o3",
            "text": "No auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Reuse."
      },
      {
        "id": "cost-optimization-q3",
        "prompt": "Routing sends…",
        "options": [
          {
            "id": "o0",
            "text": "Hard cases to bigger models"
          },
          {
            "id": "o1",
            "text": "All cases to the largest always"
          },
          {
            "id": "o2",
            "text": "No cases anywhere"
          },
          {
            "id": "o3",
            "text": "Only CSS to GPUs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Right-size."
      }
    ],
    "prevConceptId": "production-guardrails",
    "nextConceptId": "latency-scaling"
  },
  {
    "id": "latency-scaling",
    "categoryId": "production-ai",
    "title": "Latency / Scaling",
    "subtitle": "Make it fast enough under load",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "cost-optimization"
    ],
    "laymanSummary": "Latency comes from retrieval, model time-to-first-token, tool calls, and network hops. Scale with concurrency limits, caches, async jobs, streaming, and horizontal replicas—while watching queueing delays.",
    "analogy": "Grocery checkout: open more lanes at peak, and let people see items scanned live (streaming).",
    "explanation": [
      "Measure p50/p95 latency.",
      "Stream early tokens.",
      "Cache hot retrievals.",
      "Bound concurrency.",
      "Scale replicas carefully."
    ],
    "keyTerms": [
      {
        "term": "p95 latency",
        "definition": "Slowish typical-worse delay"
      },
      {
        "term": "Concurrency",
        "definition": "Simultaneous in-flight requests"
      },
      {
        "term": "Queueing",
        "definition": "Wait time under overload"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Latency / Scaling — visual walkthrough",
      "description": "Step through the core idea behind Latency / Scaling.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Load test starts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "p95 spikes.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Add cache + replicas.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Stream TTFT improves.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "SLOs met.",
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
          "No load tests",
          "p95 SLOs + streaming + cache",
          "Infinite concurrency"
        ],
        "insights": {
          "No load tests": "Surprises.",
          "p95 SLOs + streaming + cache": "Solid.",
          "Infinite concurrency": "Meltdown."
        },
        "selected": "No load tests"
      }
    },
    "realWorldExample": {
      "title": "Exam-week tutor traffic",
      "story": "Caching syllabus chunks keeps RAG snappy.",
      "takeaway": "Scale the bottleneck, not everything."
    },
    "quiz": [
      {
        "id": "latency-scaling-q1",
        "prompt": "Streaming mainly helps…",
        "options": [
          {
            "id": "o0",
            "text": "Time-to-first-token UX"
          },
          {
            "id": "o1",
            "text": "Model truth"
          },
          {
            "id": "o2",
            "text": "GPU lithography"
          },
          {
            "id": "o3",
            "text": "CSS grids"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Perceived speed."
      },
      {
        "id": "latency-scaling-q2",
        "prompt": "p95 focuses on…",
        "options": [
          {
            "id": "o0",
            "text": "Worse common latency"
          },
          {
            "id": "o1",
            "text": "Best case only"
          },
          {
            "id": "o2",
            "text": "Font size"
          },
          {
            "id": "o3",
            "text": "Cable ohms"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Tail-ish latency."
      },
      {
        "id": "latency-scaling-q3",
        "prompt": "Under overload, watch…",
        "options": [
          {
            "id": "o0",
            "text": "Queues and concurrency limits"
          },
          {
            "id": "o1",
            "text": "Only wallpapers"
          },
          {
            "id": "o2",
            "text": "Only emojis"
          },
          {
            "id": "o3",
            "text": "Only HDMI CEC"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Saturation."
      }
    ],
    "prevConceptId": "cost-optimization",
    "nextConceptId": "reliability"
  },
  {
    "id": "reliability",
    "categoryId": "production-ai",
    "title": "Reliability",
    "subtitle": "Fail gracefully and recover",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "latency-scaling"
    ],
    "laymanSummary": "Reliable AI systems define timeouts, retries with idempotency, fallbacks (smaller model, cached answer, human), and clear degraded modes. Models will error; products should not hard-crash.",
    "analogy": "City power grids with backup generators and polite “service degraded” banners.",
    "explanation": [
      "Timeouts everywhere.",
      "Retries only when safe.",
      "Fallbacks for outages.",
      "Circuit breakers.",
      "Status communication to users."
    ],
    "keyTerms": [
      {
        "term": "Fallback",
        "definition": "Backup behavior"
      },
      {
        "term": "Circuit breaker",
        "definition": "Stop calling a sick dependency"
      },
      {
        "term": "Degraded mode",
        "definition": "Limited but honest functionality"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Reliability — visual walkthrough",
      "description": "Step through the core idea behind Reliability.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Provider outage starts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Timeouts fire.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Fallback model engages.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "User sees degraded notice.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Primary recovers.",
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
          "Crash on provider 500",
          "Fallback + user notice",
          "Silent wrong answers"
        ],
        "insights": {
          "Crash on provider 500": "Brittle.",
          "Fallback + user notice": "Reliable.",
          "Silent wrong answers": "Worst."
        },
        "selected": "Crash on provider 500"
      }
    },
    "realWorldExample": {
      "title": "Checkout assistants",
      "story": "If LLM down, show FAQ search fallback.",
      "takeaway": "Degrade, don’t blank-screen."
    },
    "quiz": [
      {
        "id": "reliability-q1",
        "prompt": "Reliability includes…",
        "options": [
          {
            "id": "o0",
            "text": "Timeouts, retries, fallbacks"
          },
          {
            "id": "o1",
            "text": "Only happy paths"
          },
          {
            "id": "o2",
            "text": "No monitoring"
          },
          {
            "id": "o3",
            "text": "Infinite waits"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Resilience."
      },
      {
        "id": "reliability-q2",
        "prompt": "Idempotency matters for…",
        "options": [
          {
            "id": "o0",
            "text": "Safe retries"
          },
          {
            "id": "o1",
            "text": "Bold fonts"
          },
          {
            "id": "o2",
            "text": "Cool GPUs"
          },
          {
            "id": "o3",
            "text": "Short cables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Retry safety."
      },
      {
        "id": "reliability-q3",
        "prompt": "Degraded mode should be…",
        "options": [
          {
            "id": "o0",
            "text": "Honest and limited"
          },
          {
            "id": "o1",
            "text": "Hidden always"
          },
          {
            "id": "o2",
            "text": "Louder hallucinations"
          },
          {
            "id": "o3",
            "text": "Keyless admin"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Honesty."
      }
    ],
    "prevConceptId": "latency-scaling",
    "nextConceptId": "best-practices-checklist"
  },
  {
    "id": "best-practices-checklist",
    "categoryId": "production-ai",
    "title": "Best practices checklist",
    "subtitle": "A practical ship list",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "reliability"
    ],
    "laymanSummary": "Before calling an AI feature “done,” check: threat model, eval suite, tracing, budgets, guardrails, fallbacks, privacy review, and on-call ownership. This checklist turns Generative AI from a demo into an engineered product.",
    "analogy": "Preflight checklist before takeoff—not optional theater.",
    "explanation": [
      "Define user value and risks.",
      "Evals gate releases.",
      "Observe production.",
      "Control cost and latency.",
      "Own incidents and improvements."
    ],
    "keyTerms": [
      {
        "term": "Go/no-go",
        "definition": "Release readiness decision"
      },
      {
        "term": "Owner",
        "definition": "Person/team on point"
      },
      {
        "term": "SLO",
        "definition": "Service level objective"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Best practices checklist — visual walkthrough",
      "description": "Step through the core idea behind Best practices checklist.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Draft checklist.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Score the feature.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Fix gaps.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Ship with owners.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Review after incidents.",
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
          "Ship demo as prod",
          "Pass checklist with owners",
          "Ignore incidents"
        ],
        "insights": {
          "Ship demo as prod": "Reckless.",
          "Pass checklist with owners": "Professional.",
          "Ignore incidents": "Culture failure."
        },
        "selected": "Ship demo as prod"
      }
    },
    "realWorldExample": {
      "title": "Capstone demos to pilots",
      "story": "Student teams use the checklist before showing faculty advisors.",
      "takeaway": "Discipline beats dazzle."
    },
    "quiz": [
      {
        "id": "best-practices-checklist-q1",
        "prompt": "A release checklist should include…",
        "options": [
          {
            "id": "o0",
            "text": "Evals, safety, observability, owners"
          },
          {
            "id": "o1",
            "text": "Only logos"
          },
          {
            "id": "o2",
            "text": "Only GPU brands"
          },
          {
            "id": "o3",
            "text": "Only emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Readiness."
      },
      {
        "id": "best-practices-checklist-q2",
        "prompt": "SLOs help define…",
        "options": [
          {
            "id": "o0",
            "text": "Reliability targets"
          },
          {
            "id": "o1",
            "text": "Font fashion"
          },
          {
            "id": "o2",
            "text": "Cable taste"
          },
          {
            "id": "o3",
            "text": "Wallpaper art"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Targets."
      },
      {
        "id": "best-practices-checklist-q3",
        "prompt": "Demos without owners…",
        "options": [
          {
            "id": "o0",
            "text": "Become orphan incidents"
          },
          {
            "id": "o1",
            "text": "Are always safe"
          },
          {
            "id": "o2",
            "text": "Need no logs"
          },
          {
            "id": "o3",
            "text": "Never fail"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ownership matters."
      }
    ],
    "prevConceptId": "reliability"
  }
] as Concept[];
