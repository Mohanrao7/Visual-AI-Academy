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
    "laymanSummary": "A ChatGPT-like campus app rarely talks to the model from the browser. Your backend takes the message, checks auth, builds context, calls a model, and streams the reply back.",
    "analogy": "A restaurant: diners talk to waiters (your API); the kitchen (model) cooks; food arrives course by course (streams).",
    "explanation": [
      "Flow: client → your API → orchestration → model → stream back.",
      "Keep API keys and secrets on the server, never in the frontend.",
      "Separate product logic from whichever model vendor you use.",
      "Plan for timeouts and half-finished replies."
    ],
    "keyTerms": [
      {
        "term": "Endpoint",
        "definition": "URL your clients call"
      },
      {
        "term": "Orchestration",
        "definition": "Prompt, RAG, and tool logic"
      },
      {
        "term": "Model inference",
        "definition": "Generating reply tokens"
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
      "story": "Web UI posts to `/chat`; FastAPI builds a RAG prompt, calls a hosted LLM, and streams tokens into the chat bubble.",
      "takeaway": "Your app is the product boundary students trust."
    },
    "chatGptLens": {
      "setting": "A student uses your ChatGPT-like campus web app in the browser.",
      "userInput": "Explain mutex vs semaphore with one campus example.",
      "insideTheModel": "Browser → your API (auth) → build prompt/RAG → call model → stream tokens; keys never leave the server.",
      "modelOutput": "Tokens appear in the bubble: mutex = one bathroom key; semaphore = N lab seats…"
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
        "prompt": "What does orchestration usually include in an LLM app?",
        "options": [
          {
            "id": "o0",
            "text": "Prompt, RAG, and tool logic"
          },
          {
            "id": "o1",
            "text": "Only HDMI cable setup"
          },
          {
            "id": "o2",
            "text": "Only choosing website fonts"
          },
          {
            "id": "o3",
            "text": "Only GPU fan curves"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Orchestration is the app brain around the model."
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
    "laymanSummary": "FastAPI is a common Python web framework for the “waiter” layer: routes, validation, auth, and streaming chat replies. Any solid API framework can play this role for a ChatGPT-like campus app.",
    "analogy": "The waiter station: takes orders in a standard form and coordinates the kitchen (model).",
    "explanation": [
      "Define typed request/response shapes for `/chat`.",
      "Routes run orchestration then call the model provider.",
      "Streaming responses push tokens as they arrive.",
      "FastAPI is the app server—not the LLM itself."
    ],
    "keyTerms": [
      {
        "term": "Route",
        "definition": "URL path handler in the API"
      },
      {
        "term": "Pydantic model",
        "definition": "Schema that validates requests"
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
      "title": "Hackathon `/ask` endpoint",
      "story": "Students expose a typed FastAPI route that wraps an OpenAI-compatible API and returns streamed tutor answers.",
      "takeaway": "A thin typed API is enough to start shipping chat."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus frontend calls a FastAPI `/chat` route.",
      "userInput": "JSON body: { \"message\": \"Quiz me on HTTP status codes\" }",
      "insideTheModel": "FastAPI validates the body, runs your prompt logic, calls the model, and streams SSE chunks back to the UI.",
      "modelOutput": "Streamed quiz: “Q1: What does 404 mean?” … appearing live in the chat."
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
        "prompt": "How do streaming responses help a ChatGPT-like UI?",
        "options": [
          {
            "id": "o0",
            "text": "They improve perceived latency"
          },
          {
            "id": "o1",
            "text": "They delete server logs"
          },
          {
            "id": "o2",
            "text": "They ban JSON entirely"
          },
          {
            "id": "o3",
            "text": "They cool the server room"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Users see tokens early instead of waiting for the full reply."
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
    "laymanSummary": "Docker packs your ChatGPT-like API, Python version, and libraries into an image that runs the same on a laptop or in the cloud. Model weights may still live elsewhere; the container carries the app.",
    "analogy": "A shipping container for software: the same box runs on different ships (machines).",
    "explanation": [
      "A Dockerfile is the recipe for your app image.",
      "Build once, run as a container anywhere Docker works.",
      "Pin dependency versions so classmates get the same env.",
      "Inject secrets at runtime—never bake API keys into images."
    ],
    "keyTerms": [
      {
        "term": "Image",
        "definition": "Immutable package of your app"
      },
      {
        "term": "Container",
        "definition": "Running instance of an image"
      },
      {
        "term": "Dockerfile",
        "definition": "Build recipe for the image"
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
      "title": "Identical tutor API for the club",
      "story": "“Works on my machine” disappears when every teammate runs the same Docker image for the campus chat API.",
      "takeaway": "Containers make teamwork and deploys predictable."
    },
    "chatGptLens": {
      "setting": "You’re deploying the backend of a ChatGPT-like campus app with Docker.",
      "userInput": "Student still types: “Help me revise DBMS normalization.”",
      "insideTheModel": "Same containerized API handles the request on laptop or cloud—deps match; model call happens inside the containerized service.",
      "modelOutput": "Normal chat reply about 1NF/2NF/3NF—user never sees Docker, but ops stays reliable."
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
        "prompt": "What is a main ops benefit of containers for LLM apps?",
        "options": [
          {
            "id": "o0",
            "text": "Portable, repeatable deploys"
          },
          {
            "id": "o1",
            "text": "Guaranteed perfect model quality"
          },
          {
            "id": "o2",
            "text": "Infinite context windows"
          },
          {
            "id": "o3",
            "text": "Free unlimited GPUs"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Containers standardize how the app runs across machines."
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
    "laymanSummary": "Kubernetes runs and scales many containers: restart crashes, expose services, add replicas under load. Your ChatGPT-like campus API can sit on K8s while inference uses GPU nodes or an external model API.",
    "analogy": "Air-traffic control for containers—landing, scaling, and restarting workloads across machines.",
    "explanation": [
      "Pods run your containerized chat API.",
      "Deployments keep N replicas healthy.",
      "Services give a stable network name for clients.",
      "Use K8s when scale justifies the complexity—not for a tiny static site."
    ],
    "keyTerms": [
      {
        "term": "Pod",
        "definition": "Smallest schedulable unit"
      },
      {
        "term": "Deployment",
        "definition": "Manages replicas of your pods"
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
      "title": "Exam-week autoscaling",
      "story": "Campus chat API pods scale from 2→10 during finals so tutor latency stays usable.",
      "takeaway": "Orchestration absorbs traffic spikes."
    },
    "chatGptLens": {
      "setting": "Hundreds of students hit your ChatGPT-like tutor during midterms.",
      "userInput": "Explain polymorphism with a short Java example.",
      "insideTheModel": "K8s load-balances the request to a healthy API pod replica; that pod calls the model and streams the answer.",
      "modelOutput": "Normal streamed explanation—extra pods keep wait time low under load."
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
        "prompt": "When is Kubernetes a reasonable choice for an LLM app API?",
        "options": [
          {
            "id": "o0",
            "text": "When you need scalable container operations"
          },
          {
            "id": "o1",
            "text": "When you only host one static HTML file"
          },
          {
            "id": "o2",
            "text": "When you want to avoid all logs"
          },
          {
            "id": "o3",
            "text": "When you need no networking at all"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Justify K8s complexity with real scale needs."
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
    "laymanSummary": "Amazon Bedrock is managed model access on AWS—you call foundation models via AWS APIs without running your own GPUs. Your ChatGPT-like campus app still owns prompts, RAG, and the chat UI.",
    "analogy": "Ordering food from a hotel that already runs industrial kitchens: you bring the recipe (prompt); they run the stoves.",
    "explanation": [
      "Invoke models through AWS APIs with IAM access control.",
      "Fits teams already living in the AWS ecosystem.",
      "Billing and networking integrate with other AWS services.",
      "You still build orchestration, RAG, and product safety."
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
        "definition": "API call that generates text"
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
      "title": "AWS-heavy university stack",
      "story": "Campus cloud team keeps keys and network rules in AWS; the student chat app calls Bedrock for generations.",
      "takeaway": "Cloud gravity often picks the model host."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus API uses Bedrock for the model call.",
      "userInput": "Draft a polite email to reschedule my advisor meeting.",
      "insideTheModel": "API authenticates with AWS IAM → Bedrock invoke → tokens return → your app streams them to the chat UI.",
      "modelOutput": "A polite reschedule email draft the student can copy—no self-hosted GPU involved."
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
        "prompt": "What typically governs access to Bedrock model calls?",
        "options": [
          {
            "id": "o0",
            "text": "IAM policies"
          },
          {
            "id": "o1",
            "text": "Desktop wallpaper color"
          },
          {
            "id": "o2",
            "text": "Laptop fan stickers"
          },
          {
            "id": "o3",
            "text": "Mouse DPI setting"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "AWS IAM controls who can invoke models."
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
    "laymanSummary": "Vertex AI is Google Cloud’s platform for ML and generative APIs—hosted models plus nearby MLOps tools. Same idea as other clouds: managed inference, your ChatGPT-like app still does product logic.",
    "analogy": "A city workshop district with shared power tools—you build products using the district’s infrastructure.",
    "explanation": [
      "Call managed generative endpoints from your backend.",
      "Uses GCP identity, networking, and billing.",
      "MLOps and data tools sit in the same cloud.",
      "Orchestration, RAG, and UX remain your job."
    ],
    "keyTerms": [
      {
        "term": "Vertex AI",
        "definition": "GCP ML and GenAI platform"
      },
      {
        "term": "Managed API",
        "definition": "Hosted model endpoint you call"
      },
      {
        "term": "MLOps",
        "definition": "Operate ML systems in production"
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
      "title": "GCP-native student startup",
      "story": "Team hosts a ChatGPT-like study app on GCP, calls Vertex model APIs, and stores usage logs in BigQuery.",
      "takeaway": "Ecosystem fit speeds integration."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like study app’s backend calls Vertex AI for replies.",
      "userInput": "Make 5 flashcards from this paragraph on photosynthesis.",
      "insideTheModel": "App → Vertex generative endpoint → model returns cards → app shows them in the chat/flashcard UI.",
      "modelOutput": "Five Q/A flashcards grounded in the pasted paragraph."
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
        "prompt": "With managed Vertex-style endpoints, what does your app still handle?",
        "options": [
          {
            "id": "o0",
            "text": "Product logic and safety"
          },
          {
            "id": "o1",
            "text": "Designing GPU silicon"
          },
          {
            "id": "o2",
            "text": "Ocean cooling systems"
          },
          {
            "id": "o3",
            "text": "Casting metal fonts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Managed models don’t replace your product layer."
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
    "laymanSummary": "Azure AI offers managed model APIs inside Microsoft’s cloud—often chosen when the campus already uses Azure and Microsoft identity. Your ChatGPT-like app still owns chat UX, RAG, and policies.",
    "analogy": "Building inside an office park that already has power, security badges, and utilities.",
    "explanation": [
      "Hosted model deployments you call from your backend.",
      "Strong fit with enterprise identity (Entra ID).",
      "Regions and compliance options matter for schools.",
      "Custom RAG and agents stay in your code."
    ],
    "keyTerms": [
      {
        "term": "Azure OpenAI / Azure AI",
        "definition": "Managed models on Azure"
      },
      {
        "term": "Entra ID",
        "definition": "Microsoft identity platform"
      },
      {
        "term": "Compliance",
        "definition": "Regional and policy constraints"
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
      "title": "University Microsoft tenant",
      "story": "Students sign in with campus Microsoft accounts; approved Azure model deployments power an internal ChatGPT-like advisor bot.",
      "takeaway": "Identity and compliance often pick the cloud."
    },
    "chatGptLens": {
      "setting": "A student signed in with campus Microsoft ID uses your ChatGPT-like advisor bot on Azure.",
      "userInput": "What electives count toward the AI minor?",
      "insideTheModel": "App checks Entra auth → calls Azure model deployment with RAG over the catalog → streams the answer.",
      "modelOutput": "Lists approved electives from the catalog with links—access controlled by campus identity."
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
        "prompt": "How do identity integrations help Azure-hosted campus AI apps?",
        "options": [
          {
            "id": "o0",
            "text": "Enterprise access control for users"
          },
          {
            "id": "o1",
            "text": "Making fonts bolder"
          },
          {
            "id": "o2",
            "text": "Cooling GPUs automatically"
          },
          {
            "id": "o3",
            "text": "Shortening network cables"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Campus SSO and policies gate who can use the bot."
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
    "laymanSummary": "Streaming sends tokens to the chat UI as soon as they are generated—like ChatGPT’s live typing. It feels faster and lets users hit Stop to cancel a long answer.",
    "analogy": "Reading a story as it’s typed instead of waiting for the whole PDF to download.",
    "explanation": [
      "The model emits tokens one after another.",
      "Your API forwards them (SSE or websockets) to the client.",
      "The UI paints partial text immediately.",
      "Cancelation stops generation and saves tokens."
    ],
    "keyTerms": [
      {
        "term": "SSE",
        "definition": "Server-Sent Events for streams"
      },
      {
        "term": "Time-to-first-token",
        "definition": "Wait until first output"
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
      "title": "Live tutor explanations",
      "story": "Long OS lecture answers appear word-by-word so students start reading while the rest is still generating.",
      "takeaway": "Perceived speed matters as much as raw latency."
    },
    "chatGptLens": {
      "setting": "Your ChatGPT-like campus UI shows tokens appearing live—just like ChatGPT.",
      "userInput": "Explain TCP handshake in 6 short bullets.",
      "insideTheModel": "Model streams tokens → API forwards SSE chunks → UI appends text; user can press Stop mid-reply.",
      "modelOutput": "Bullets appear one by one: SYN → SYN-ACK → ACK… until done or canceled."
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
        "prompt": "What does cancelation let users do during streaming?",
        "options": [
          {
            "id": "o0",
            "text": "Stop generation early"
          },
          {
            "id": "o1",
            "text": "Delete the entire cloud account"
          },
          {
            "id": "o2",
            "text": "Ban JSON from the API"
          },
          {
            "id": "o3",
            "text": "Skip authentication forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Stop saves time and tokens on unwanted long replies."
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
    "laymanSummary": "Monitoring watches whether your ChatGPT-like campus app is healthy: latency, errors, token spend, and broken tools. Without dashboards and alerts, outages and surprise bills sneak up on you.",
    "analogy": "A car dashboard: speed, fuel, and warning lights—so you are not driving blind.",
    "explanation": [
      "Track latency and error rate on `/chat`.",
      "Meter tokens and cost per request or per day.",
      "Use trace IDs to follow one student request across steps.",
      "Alert when budgets or error rates spike."
    ],
    "keyTerms": [
      {
        "term": "Golden signals",
        "definition": "Latency, traffic, errors, saturation"
      },
      {
        "term": "Trace ID",
        "definition": "ID linking logs for one request"
      },
      {
        "term": "Token usage",
        "definition": "How many tokens you spent"
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
      "title": "Exam-week latency alert",
      "story": "p95 latency jumps; dashboards show retrieval timeouts, not the model—team scales the vector DB.",
      "takeaway": "Metrics tell you what to fix under load."
    },
    "chatGptLens": {
      "setting": "Ops watches dashboards while students use your ChatGPT-like tutor.",
      "userInput": "Any normal question—e.g. “Define ACID in databases.”",
      "insideTheModel": "Each chat request emits latency, error, and token metrics with a trace ID; alerts fire if thresholds break.",
      "modelOutput": "Student still gets a normal answer; ops sees “200 OK, 1.2s, 900 tokens” on the dashboard."
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
        "prompt": "What do cost alerts mainly help prevent?",
        "options": [
          {
            "id": "o0",
            "text": "Bill shock from runaway usage"
          },
          {
            "id": "o1",
            "text": "Better website fonts"
          },
          {
            "id": "o2",
            "text": "Shorter network cables"
          },
          {
            "id": "o3",
            "text": "Automatically colder coffee"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Budget alerts catch token spend before invoices explode."
      }
    ],
    "prevConceptId": "streaming"
  }
] as Concept[];
