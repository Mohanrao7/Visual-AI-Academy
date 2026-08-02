import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "llm-app-serving",
    "categoryId": "deployment",
    "title": "LLM app serving mental model",
    "subtitle": "Clients talk to your app, app talks to models",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [],
    "laymanSummary": "Serving an LLM app usually means your backend receives user requests, applies auth and policies, builds prompts/context, calls a model endpoint, streams tokens back, and logs traces. The model may be hosted by you or a cloud provider.",
    "analogy": "A restaurant: customers talk to waiters (your API), kitchen (model) cooks, food comes out in courses (streams).",
    "explanation": [
      "Client → API → orchestration → model.",
      "Keep secrets server-side.",
      "Separate product logic from model vendor.",
      "Design for timeouts and partial failures."
    ],
    "keyTerms": [
      {
        "term": "Endpoint",
        "definition": "Network API your clients call"
      },
      {
        "term": "Orchestration",
        "definition": "Prompt/RAG/tool logic"
      },
      {
        "term": "Model inference",
        "definition": "Generating tokens"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LLM app serving mental model — visual walkthrough",
      "description": "Step through the core idea behind LLM app serving mental model.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Client sends request.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "API authenticates.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Orchestration builds context.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Model generates.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Response streams back.",
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
          "Browser holds API keys",
          "Server-side orchestration",
          "No timeouts"
        ],
        "insights": {
          "Browser holds API keys": "Leak risk.",
          "Server-side orchestration": "Proper.",
          "No timeouts": "Hung UX."
        },
        "selected": "Browser holds API keys"
      }
    },
    "realWorldExample": {
      "title": "Campus tutor SaaS",
      "story": "Web UI hits a FastAPI service that calls a hosted LLM with RAG.",
      "takeaway": "Your app is the product boundary."
    },
    "quiz": [
      {
        "id": "llm-app-serving-q1",
        "prompt": "Clients should usually call…",
        "options": [
          {
            "id": "o0",
            "text": "Your app API"
          },
          {
            "id": "o1",
            "text": "Your raw cloud keys in the browser"
          },
          {
            "id": "o2",
            "text": "The GPU directly via USB"
          },
          {
            "id": "o3",
            "text": "Random IPs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "App boundary."
      },
      {
        "id": "llm-app-serving-q2",
        "prompt": "Secrets belong…",
        "options": [
          {
            "id": "o0",
            "text": "Server-side"
          },
          {
            "id": "o1",
            "text": "In frontend bundles"
          },
          {
            "id": "o2",
            "text": "In screenshots"
          },
          {
            "id": "o3",
            "text": "In CSS"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Server."
      },
      {
        "id": "llm-app-serving-q3",
        "prompt": "Orchestration includes…",
        "options": [
          {
            "id": "o0",
            "text": "Prompt/RAG/tool logic"
          },
          {
            "id": "o1",
            "text": "Only HDMI"
          },
          {
            "id": "o2",
            "text": "Only fonts"
          },
          {
            "id": "o3",
            "text": "Only fan curves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "App brain."
      }
    ],
    "nextConceptId": "fastapi-role"
  },
  {
    "id": "fastapi-role",
    "categoryId": "deployment",
    "title": "FastAPI role",
    "subtitle": "Python APIs that orchestrate LLM calls",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "llm-app-serving"
    ],
    "laymanSummary": "FastAPI is a popular Python web framework for building async APIs—commonly used as the orchestration layer for LLM apps: routes, auth, validation, and streaming responses. Conceptually any solid API framework can play this role.",
    "analogy": "The waiter station: takes orders in a standard format and coordinates the kitchen.",
    "explanation": [
      "Define request/response schemas.",
      "Implement orchestration routes.",
      "Stream tokens over HTTP.",
      "Validate inputs.",
      "Not the model itself—just the app layer."
    ],
    "keyTerms": [
      {
        "term": "Route",
        "definition": "URL handler"
      },
      {
        "term": "Pydantic model",
        "definition": "Request validation schema"
      },
      {
        "term": "Streaming response",
        "definition": "Send tokens incrementally"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "FastAPI role — visual walkthrough",
      "description": "Step through the core idea behind FastAPI role.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Define /chat route.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Validate body.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Call model provider.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Stream tokens.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Log trace id.",
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
          "Monolith notebook exposed publicly",
          "Typed API routes",
          "No input validation"
        ],
        "insights": {
          "Monolith notebook exposed publicly": "Fragile/unsafe.",
          "Typed API routes": "Solid.",
          "No input validation": "Injection and crashes."
        },
        "selected": "Monolith notebook exposed publicly"
      }
    },
    "realWorldExample": {
      "title": "Hackathon backends",
      "story": "Students expose /ask endpoints wrapping OpenAI-compatible APIs.",
      "takeaway": "Fast iteration API layer."
    },
    "quiz": [
      {
        "id": "fastapi-role-q1",
        "prompt": "FastAPI often serves as…",
        "options": [
          {
            "id": "o0",
            "text": "The orchestration API layer"
          },
          {
            "id": "o1",
            "text": "The GPU silicon"
          },
          {
            "id": "o2",
            "text": "The tokenizer hardware"
          },
          {
            "id": "o3",
            "text": "The vector math unit"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "API layer."
      },
      {
        "id": "fastapi-role-q2",
        "prompt": "It is…",
        "options": [
          {
            "id": "o0",
            "text": "Not the LLM itself"
          },
          {
            "id": "o1",
            "text": "Always a vector DB"
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
        "explanation": "App server."
      },
      {
        "id": "fastapi-role-q3",
        "prompt": "Streaming responses help…",
        "options": [
          {
            "id": "o0",
            "text": "Perceived latency"
          },
          {
            "id": "o1",
            "text": "Delete logs"
          },
          {
            "id": "o2",
            "text": "Ban JSON"
          },
          {
            "id": "o3",
            "text": "Cool rooms"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "UX."
      }
    ],
    "prevConceptId": "llm-app-serving",
    "nextConceptId": "docker"
  },
  {
    "id": "docker",
    "categoryId": "deployment",
    "title": "Docker",
    "subtitle": "Package the app and its dependencies",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "fastapi-role"
    ],
    "laymanSummary": "Docker packages your application, runtime, and dependencies into images that run as containers. For LLM apps, containers make API services portable across laptops and clouds—while model weights may still live on volumes or remote APIs.",
    "analogy": "A shipping container for software: same box runs on different ships (machines).",
    "explanation": [
      "Write a Dockerfile.",
      "Build an image.",
      "Run a container.",
      "Pin dependency versions.",
      "Keep secrets out of images."
    ],
    "keyTerms": [
      {
        "term": "Image",
        "definition": "Immutable package"
      },
      {
        "term": "Container",
        "definition": "Running instance"
      },
      {
        "term": "Dockerfile",
        "definition": "Build recipe"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Docker — visual walkthrough",
      "description": "Step through the core idea behind Docker.",
      "steps": [
        {
          "id": "step-1",
          "caption": "App code ready.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Build image.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Run container locally.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Same image in staging.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Promote to prod.",
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
          "Works on my machine only",
          "Containerized API",
          "Bake API keys into the image"
        ],
        "insights": {
          "Works on my machine only": "Fragile.",
          "Containerized API": "Portable.",
          "Bake API keys into the image": "Leak risk."
        },
        "selected": "Works on my machine only"
      }
    },
    "realWorldExample": {
      "title": "Identical tutor API envs",
      "story": "“Works on my machine” fades when classmates run the same image.",
      "takeaway": "Portability aids teamwork."
    },
    "quiz": [
      {
        "id": "docker-q1",
        "prompt": "Docker packages…",
        "options": [
          {
            "id": "o0",
            "text": "App and dependencies"
          },
          {
            "id": "o1",
            "text": "Ocean water"
          },
          {
            "id": "o2",
            "text": "Only CSS"
          },
          {
            "id": "o3",
            "text": "Only HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Images."
      },
      {
        "id": "docker-q2",
        "prompt": "Secrets should be…",
        "options": [
          {
            "id": "o0",
            "text": "Injected at runtime, not baked in"
          },
          {
            "id": "o1",
            "text": "Committed in Dockerfiles"
          },
          {
            "id": "o2",
            "text": "Printed on labels"
          },
          {
            "id": "o3",
            "text": "Stored in wallpapers"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Runtime secrets."
      },
      {
        "id": "docker-q3",
        "prompt": "Containers help…",
        "options": [
          {
            "id": "o0",
            "text": "Portable deploys"
          },
          {
            "id": "o1",
            "text": "Guaranteed model quality"
          },
          {
            "id": "o2",
            "text": "Infinite context"
          },
          {
            "id": "o3",
            "text": "Free GPUs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ops portability."
      }
    ],
    "prevConceptId": "fastapi-role",
    "nextConceptId": "kubernetes-overview"
  },
  {
    "id": "kubernetes-overview",
    "categoryId": "deployment",
    "title": "Kubernetes overview",
    "subtitle": "Orchestrate many containers",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "docker"
    ],
    "laymanSummary": "Kubernetes (K8s) schedules and manages containers across machines: deploy replicas, restart crashes, expose services, and scale. LLM apps may put API replicas on K8s while inference runs on GPU nodes or external APIs.",
    "analogy": "An air-traffic control system for containers—landing, scaling, and restarting workloads.",
    "explanation": [
      "Pods run containers.",
      "Deployments manage replicas.",
      "Services provide networking.",
      "Autoscaling reacts to load.",
      "Complexity must be justified."
    ],
    "keyTerms": [
      {
        "term": "Pod",
        "definition": "Smallest schedulable unit"
      },
      {
        "term": "Deployment",
        "definition": "Replica management"
      },
      {
        "term": "Service",
        "definition": "Stable network endpoint"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Kubernetes overview — visual walkthrough",
      "description": "Step through the core idea behind Kubernetes overview.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Build container image.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Declare Deployment.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Expose Service.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Scale on load.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Rolling update.",
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
          "Single VM docker run",
          "K8s for multi-replica API",
          "K8s for a 5-person static site"
        ],
        "insights": {
          "Single VM docker run": "Fine at small scale.",
          "K8s for multi-replica API": "Fits growth.",
          "K8s for a 5-person static site": "Overkill."
        },
        "selected": "Single VM docker run"
      }
    },
    "realWorldExample": {
      "title": "Campus cloud club",
      "story": "API autoscales during exam week traffic spikes.",
      "takeaway": "Orchestration absorbs load."
    },
    "quiz": [
      {
        "id": "kubernetes-overview-q1",
        "prompt": "Kubernetes mainly…",
        "options": [
          {
            "id": "o0",
            "text": "Orchestrates containers"
          },
          {
            "id": "o1",
            "text": "Trains models by itself"
          },
          {
            "id": "o2",
            "text": "Replaces prompts"
          },
          {
            "id": "o3",
            "text": "Paints UI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Orchestration."
      },
      {
        "id": "kubernetes-overview-q2",
        "prompt": "A Deployment manages…",
        "options": [
          {
            "id": "o0",
            "text": "Replicas of your pods"
          },
          {
            "id": "o1",
            "text": "Font files"
          },
          {
            "id": "o2",
            "text": "HDMI cables"
          },
          {
            "id": "o3",
            "text": "Cosine scores"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Replicas."
      },
      {
        "id": "kubernetes-overview-q3",
        "prompt": "Use K8s when…",
        "options": [
          {
            "id": "o0",
            "text": "You need scalable container ops"
          },
          {
            "id": "o1",
            "text": "You only have a static HTML file"
          },
          {
            "id": "o2",
            "text": "You hate logs"
          },
          {
            "id": "o3",
            "text": "You need no networking"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Justify complexity."
      }
    ],
    "prevConceptId": "docker",
    "nextConceptId": "bedrock"
  },
  {
    "id": "bedrock",
    "categoryId": "deployment",
    "title": "Bedrock",
    "subtitle": "Managed foundation models on AWS",
    "difficulty": "beginner",
    "estimatedMinutes": 5,
    "prerequisites": [
      "kubernetes-overview"
    ],
    "laymanSummary": "Amazon Bedrock is a managed service to call foundation models via AWS APIs without self-hosting GPUs. Conceptually: provider-hosted inference with cloud IAM, networking, and billing integrated into AWS.",
    "analogy": "Ordering kitchen output from a hotel that already runs industrial kitchens—you bring recipes (prompts), they run stoves.",
    "explanation": [
      "Invoke models through AWS APIs.",
      "IAM controls access.",
      "Useful when already on AWS.",
      "Still build your orchestration and RAG."
    ],
    "keyTerms": [
      {
        "term": "Managed inference",
        "definition": "Provider runs the model servers"
      },
      {
        "term": "IAM",
        "definition": "Identity and access management"
      },
      {
        "term": "Invocation",
        "definition": "API call to generate"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Bedrock — visual walkthrough",
      "description": "Step through the core idea behind Bedrock.",
      "steps": [
        {
          "id": "step-1",
          "caption": "App authenticates to AWS.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Calls Bedrock invoke API.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Receives generations.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Logs to CloudWatch.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Pays per usage.",
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
          "Self-host all GPUs",
          "Managed Bedrock-like API",
          "Browser-embedded cloud keys"
        ],
        "insights": {
          "Self-host all GPUs": "Ops heavy.",
          "Managed Bedrock-like API": "Faster path on AWS.",
          "Browser-embedded cloud keys": "Leak."
        },
        "selected": "Self-host all GPUs"
      }
    },
    "realWorldExample": {
      "title": "Enterprise AWS shops",
      "story": "Teams adopt Bedrock to stay inside existing AWS controls.",
      "takeaway": "Cloud gravity matters."
    },
    "quiz": [
      {
        "id": "bedrock-q1",
        "prompt": "Bedrock provides…",
        "options": [
          {
            "id": "o0",
            "text": "Managed model access on AWS"
          },
          {
            "id": "o1",
            "text": "A CSS framework"
          },
          {
            "id": "o2",
            "text": "A local tokenizer chip"
          },
          {
            "id": "o3",
            "text": "A vector proof"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Managed models."
      },
      {
        "id": "bedrock-q2",
        "prompt": "You still need…",
        "options": [
          {
            "id": "o0",
            "text": "Your app orchestration"
          },
          {
            "id": "o1",
            "text": "Zero auth"
          },
          {
            "id": "o2",
            "text": "No monitoring"
          },
          {
            "id": "o3",
            "text": "No prompts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "App remains."
      },
      {
        "id": "bedrock-q3",
        "prompt": "Access is typically governed by…",
        "options": [
          {
            "id": "o0",
            "text": "IAM policies"
          },
          {
            "id": "o1",
            "text": "Wallpaper color"
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
        "explanation": "IAM."
      }
    ],
    "prevConceptId": "kubernetes-overview",
    "nextConceptId": "vertex-ai"
  },
  {
    "id": "vertex-ai",
    "categoryId": "deployment",
    "title": "Vertex AI",
    "subtitle": "Google Cloud ML/LLM platform",
    "difficulty": "beginner",
    "estimatedMinutes": 5,
    "prerequisites": [
      "bedrock"
    ],
    "laymanSummary": "Vertex AI is Google Cloud’s platform for ML and generative AI services—model APIs, tooling, and MLOps integrations. Conceptually similar tradeoff: managed capabilities inside a cloud ecosystem versus self-hosting.",
    "analogy": "A city workshop district with shared power tools—you build products using the district’s infrastructure.",
    "explanation": [
      "Managed generative APIs.",
      "Ties into GCP IAM and networking.",
      "MLOps tooling nearby.",
      "Orchestration still your job."
    ],
    "keyTerms": [
      {
        "term": "Vertex AI",
        "definition": "GCP ML/GenAI platform"
      },
      {
        "term": "Managed API",
        "definition": "Hosted model endpoint"
      },
      {
        "term": "MLOps",
        "definition": "Operate ML systems in prod"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Vertex AI — visual walkthrough",
      "description": "Step through the core idea behind Vertex AI.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Enable Vertex APIs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Call a generative endpoint.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Wire results into app.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Monitor usage.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Iterate prompts/evals.",
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
          "DIY GPU cluster first day",
          "Managed Vertex-like APIs",
          "Skip monitoring"
        ],
        "insights": {
          "DIY GPU cluster first day": "Slow start.",
          "Managed Vertex-like APIs": "Faster on GCP.",
          "Skip monitoring": "Blind."
        },
        "selected": "DIY GPU cluster first day"
      }
    },
    "realWorldExample": {
      "title": "GCP-native startups",
      "story": "Use Vertex model APIs with BigQuery-stored logs.",
      "takeaway": "Ecosystem integration."
    },
    "quiz": [
      {
        "id": "vertex-ai-q1",
        "prompt": "Vertex AI is…",
        "options": [
          {
            "id": "o0",
            "text": "GCP’s ML/GenAI platform"
          },
          {
            "id": "o1",
            "text": "A CSS reset"
          },
          {
            "id": "o2",
            "text": "A HDMI switch"
          },
          {
            "id": "o3",
            "text": "A cosine formula"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "GCP platform."
      },
      {
        "id": "vertex-ai-q2",
        "prompt": "Managed endpoints reduce…",
        "options": [
          {
            "id": "o0",
            "text": "Self-host inference ops"
          },
          {
            "id": "o1",
            "text": "Need for evals"
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
        "explanation": "Ops relief."
      },
      {
        "id": "vertex-ai-q3",
        "prompt": "Your app still handles…",
        "options": [
          {
            "id": "o0",
            "text": "Product logic and safety"
          },
          {
            "id": "o1",
            "text": "Silicon design"
          },
          {
            "id": "o2",
            "text": "Ocean cooling"
          },
          {
            "id": "o3",
            "text": "Font casting"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Product layer."
      }
    ],
    "prevConceptId": "bedrock",
    "nextConceptId": "azure-ai"
  },
  {
    "id": "azure-ai",
    "categoryId": "deployment",
    "title": "Azure AI",
    "subtitle": "Microsoft cloud AI services",
    "difficulty": "beginner",
    "estimatedMinutes": 5,
    "prerequisites": [
      "vertex-ai"
    ],
    "laymanSummary": "Azure AI services provide managed model and AI capability APIs in Microsoft’s cloud, often attractive to enterprises already on Azure and Microsoft identity. Same mental model: managed inference plus your orchestration.",
    "analogy": "Building inside an office park that already has power, security badges, and utilities.",
    "explanation": [
      "Managed model endpoints.",
      "Enterprise identity integrations.",
      "Region and compliance options.",
      "Your RAG/agents remain custom."
    ],
    "keyTerms": [
      {
        "term": "Azure OpenAI / Azure AI",
        "definition": "Managed model offerings on Azure"
      },
      {
        "term": "Entra ID",
        "definition": "Microsoft identity platform"
      },
      {
        "term": "Compliance",
        "definition": "Regional/policy constraints"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Azure AI — visual walkthrough",
      "description": "Step through the core idea behind Azure AI.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Authenticate with Azure identity.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Call model deployment.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Apply enterprise policies.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Log to Azure Monitor.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Ship features.",
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
          "Ignore enterprise identity",
          "Use cloud identity with managed models",
          "Share one key in Slack"
        ],
        "insights": {
          "Ignore enterprise identity": "Hard in corps.",
          "Use cloud identity with managed models": "Enterprise fit.",
          "Share one key in Slack": "Incident."
        },
        "selected": "Ignore enterprise identity"
      }
    },
    "realWorldExample": {
      "title": "Corp Copilot add-ons",
      "story": "Enterprises host approved deployments on Azure.",
      "takeaway": "Identity and compliance drive cloud choice."
    },
    "quiz": [
      {
        "id": "azure-ai-q1",
        "prompt": "Azure AI appeals when…",
        "options": [
          {
            "id": "o0",
            "text": "You are invested in Microsoft cloud/identity"
          },
          {
            "id": "o1",
            "text": "You need a CSS framework"
          },
          {
            "id": "o2",
            "text": "You hate APIs"
          },
          {
            "id": "o3",
            "text": "You only train locally always"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Ecosystem fit."
      },
      {
        "id": "azure-ai-q2",
        "prompt": "Managed deployments still need…",
        "options": [
          {
            "id": "o0",
            "text": "App-side safety and evals"
          },
          {
            "id": "o1",
            "text": "No logging"
          },
          {
            "id": "o2",
            "text": "Public keys in mobile apps"
          },
          {
            "id": "o3",
            "text": "Zero auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Responsibility remains."
      },
      {
        "id": "azure-ai-q3",
        "prompt": "Identity integrations help…",
        "options": [
          {
            "id": "o0",
            "text": "Enterprise access control"
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
            "text": "Shorter cables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Access."
      }
    ],
    "prevConceptId": "vertex-ai",
    "nextConceptId": "streaming"
  },
  {
    "id": "streaming",
    "categoryId": "deployment",
    "title": "Streaming",
    "subtitle": "Send tokens as they generate",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "azure-ai"
    ],
    "laymanSummary": "Streaming delivers tokens to clients as they are produced, improving perceived latency and enabling cancelation. Implement with server-sent events or websockets, and design UIs for partial answers.",
    "analogy": "Reading a story as it’s being typed instead of waiting for the whole novel PDF.",
    "explanation": [
      "Model emits tokens incrementally.",
      "API streams to client.",
      "UI renders partial text.",
      "Users can stop early.",
      "Handle disconnects cleanly."
    ],
    "keyTerms": [
      {
        "term": "SSE",
        "definition": "Server-Sent Events"
      },
      {
        "term": "Time-to-first-token",
        "definition": "Latency until first output"
      },
      {
        "term": "Cancelation",
        "definition": "Stop generation early"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Streaming — visual walkthrough",
      "description": "Step through the core idea behind Streaming.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Request starts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "First token arrives quickly.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "UI updates live.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "User stops.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Server cancels generation.",
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
          "Wait for full answer",
          "Stream tokens",
          "No cancel button"
        ],
        "insights": {
          "Wait for full answer": "Feels slower.",
          "Stream tokens": "Better UX.",
          "No cancel button": "Wasted tokens."
        },
        "selected": "Wait for full answer"
      }
    },
    "realWorldExample": {
      "title": "Chat UIs",
      "story": "Streaming makes tutors feel responsive during long explanations.",
      "takeaway": "Perceived performance matters."
    },
    "quiz": [
      {
        "id": "streaming-q1",
        "prompt": "Streaming improves…",
        "options": [
          {
            "id": "o0",
            "text": "Perceived latency"
          },
          {
            "id": "o1",
            "text": "Model truth automatically"
          },
          {
            "id": "o2",
            "text": "GPU silicon"
          },
          {
            "id": "o3",
            "text": "CSS specificity"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "UX speed feel."
      },
      {
        "id": "streaming-q2",
        "prompt": "Time-to-first-token measures…",
        "options": [
          {
            "id": "o0",
            "text": "Latency to first output"
          },
          {
            "id": "o1",
            "text": "Disk RPM"
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
        "explanation": "TTFT."
      },
      {
        "id": "streaming-q3",
        "prompt": "Cancelation lets users…",
        "options": [
          {
            "id": "o0",
            "text": "Stop generation early"
          },
          {
            "id": "o1",
            "text": "Delete the cloud"
          },
          {
            "id": "o2",
            "text": "Ban JSON"
          },
          {
            "id": "o3",
            "text": "Skip auth"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Control."
      }
    ],
    "prevConceptId": "azure-ai",
    "nextConceptId": "monitoring-basics"
  },
  {
    "id": "monitoring-basics",
    "categoryId": "deployment",
    "title": "Monitoring basics",
    "subtitle": "Watch latency, errors, and cost",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [
      "streaming"
    ],
    "laymanSummary": "Monitoring tracks request rates, latencies, error codes, token usage, and tool failures. Without it, LLM apps fail quietly and bills surprise you. Start with golden signals plus token economics.",
    "analogy": "A car dashboard: speed, fuel, warning lights—not driving blind.",
    "explanation": [
      "Latency and error rate.",
      "Token/cost metrics.",
      "Trace IDs across orchestration.",
      "Alert on budgets.",
      "Dashboards for debugging."
    ],
    "keyTerms": [
      {
        "term": "Golden signals",
        "definition": "Latency, traffic, errors, saturation"
      },
      {
        "term": "Trace ID",
        "definition": "Correlates logs across steps"
      },
      {
        "term": "Token usage",
        "definition": "Consumption meter"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Monitoring basics — visual walkthrough",
      "description": "Step through the core idea behind Monitoring basics.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Emit metrics per request.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Dashboard graphs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Alert on error spikes.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Investigate traces.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Fix and verify.",
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
          "No metrics",
          "Latency/error/token dashboards",
          "Alert on nothing"
        ],
        "insights": {
          "No metrics": "Blind.",
          "Latency/error/token dashboards": "Minimum viable.",
          "Alert on nothing": "Too late."
        },
        "selected": "No metrics"
      }
    },
    "realWorldExample": {
      "title": "Exam-week spike",
      "story": "Latency alerts reveal retrieval bottlenecks under load.",
      "takeaway": "Metrics guide scaling."
    },
    "quiz": [
      {
        "id": "monitoring-basics-q1",
        "prompt": "Monitor especially…",
        "options": [
          {
            "id": "o0",
            "text": "Latency, errors, token cost"
          },
          {
            "id": "o1",
            "text": "Only wallpaper"
          },
          {
            "id": "o2",
            "text": "Only fan RGB"
          },
          {
            "id": "o3",
            "text": "Only commit emojis"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Golden + cost."
      },
      {
        "id": "monitoring-basics-q2",
        "prompt": "Trace IDs help…",
        "options": [
          {
            "id": "o0",
            "text": "Correlate multi-step requests"
          },
          {
            "id": "o1",
            "text": "Heat rooms"
          },
          {
            "id": "o2",
            "text": "Bold text"
          },
          {
            "id": "o3",
            "text": "Route HDMI"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Debug."
      },
      {
        "id": "monitoring-basics-q3",
        "prompt": "Cost alerts prevent…",
        "options": [
          {
            "id": "o0",
            "text": "Bill shock"
          },
          {
            "id": "o1",
            "text": "Better fonts"
          },
          {
            "id": "o2",
            "text": "Shorter cables"
          },
          {
            "id": "o3",
            "text": "Colder coffee automatically"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Budgets."
      }
    ],
    "prevConceptId": "streaming"
  }
] as Concept[];
