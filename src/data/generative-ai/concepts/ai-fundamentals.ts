import type { Concept } from '../../../types/content';

export const concepts: Concept[] = [
  {
    "id": "what-is-ai",
    "categoryId": "ai-fundamentals",
    "title": "What is AI?",
    "subtitle": "Machines doing judgment-like tasks",
    "difficulty": "beginner",
    "estimatedMinutes": 6,
    "prerequisites": [],
    "laymanSummary": "Artificial Intelligence (AI) is software that performs tasks associated with human judgment: recognizing patterns, predicting outcomes, understanding language, or generating content. It is not a digital mind—it is data, algorithms, and compute packaged into useful tools. Today’s popular “AI” usually means machine-learning systems trained for specific jobs, even when the chat interface feels general.",
    "analogy": "Like a fast apprentice who studied millions of examples: great at patterns, still needing goals and oversight.",
    "explanation": [
      "AI is an umbrella covering rule systems and learning systems.",
      "Modern hype mostly points at machine learning and neural nets.",
      "Mental model: Input → Model → Output, with parameters learned from data.",
      "Useful AI is evaluated in a workflow with clear success metrics."
    ],
    "keyTerms": [
      {
        "term": "Artificial Intelligence",
        "definition": "Software performing tasks linked to human intelligence"
      },
      {
        "term": "Model",
        "definition": "Learned function mapping inputs to outputs"
      },
      {
        "term": "Narrow AI",
        "definition": "AI specialized for particular tasks"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "What is AI? — visual walkthrough",
      "description": "Step through the core idea behind What is AI?.",
      "steps": [
        {
          "id": "step-1",
          "caption": "A human task appears (e.g., spam detection).",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Examples and metrics define success.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "A model learns patterns from data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "New inputs get predictions.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Humans monitor errors and decide trust boundaries.",
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
          "Sort tickets by topic",
          "Prove a brand-new theorem with guarantees",
          "Find cracks in factory photos"
        ],
        "insights": {
          "Sort tickets by topic": "Good ML fit: messy language + labels.",
          "Prove a brand-new theorem with guarantees": "Needs formal methods; pure statistical AI is a weak primary tool.",
          "Find cracks in factory photos": "Good vision ML fit."
        },
        "selected": "Sort tickets by topic"
      }
    },
    "realWorldExample": {
      "title": "Campus FAQ assistant",
      "story": "A college wraps AI around library FAQs for midnight answers.",
      "takeaway": "AI helps when the task is clear and measurable."
    },
    "quiz": [
      {
        "id": "what-is-ai-q1",
        "prompt": "AI is best described as…",
        "options": [
          {
            "id": "o0",
            "text": "A human-identical mind"
          },
          {
            "id": "o1",
            "text": "Software for judgment-like tasks using data/algorithms"
          },
          {
            "id": "o2",
            "text": "Any chat widget"
          },
          {
            "id": "o3",
            "text": "Only humanoid robots"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "AI is engineering, not mystical consciousness."
      },
      {
        "id": "what-is-ai-q2",
        "prompt": "Most production AI is…",
        "options": [
          {
            "id": "o0",
            "text": "Fully general human cognition"
          },
          {
            "id": "o1",
            "text": "Specialized for tasks"
          },
          {
            "id": "o2",
            "text": "Impossible"
          },
          {
            "id": "o3",
            "text": "Only hardware"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Narrow specialization is the norm."
      },
      {
        "id": "what-is-ai-q3",
        "prompt": "In one line, What is AI? is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Artificial Intelligence (AI) is software that performs tasks associated with human judgment: recognizing patterns, predicting outcomes, understanding language, or generating content"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "nextConceptId": "machine-learning"
  },
  {
    "id": "machine-learning",
    "categoryId": "ai-fundamentals",
    "title": "Machine Learning",
    "subtitle": "Learn from examples, not only hand-written rules",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "what-is-ai"
    ],
    "laymanSummary": "Machine Learning (ML) builds software by learning patterns from data instead of coding every rule. You supply examples and an objective; an algorithm adjusts a model to improve predictions. ML handles messy reality well, but it can also absorb bias and fail outside its training distribution.",
    "analogy": "Classic code is a recipe you write. ML is flashcard teaching: enough examples, and the system invents internal rules.",
    "explanation": [
      "Supervised learning uses labeled pairs (x → y).",
      "Unsupervised learning finds structure without labels.",
      "Reinforcement learning learns via rewards for actions.",
      "Generalization—to unseen data—is the real goal."
    ],
    "keyTerms": [
      {
        "term": "Supervised learning",
        "definition": "Learning from labeled examples"
      },
      {
        "term": "Training",
        "definition": "Updating parameters to reduce error"
      },
      {
        "term": "Generalization",
        "definition": "Doing well on new examples"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Machine Learning — visual walkthrough",
      "description": "Step through the core idea behind Machine Learning.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Hand-written keyword rules fail on clever spam.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Collect labeled emails instead.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Train a model on statistical patterns.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Evaluate on held-out messages.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Deploy with monitoring for drift.",
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
          "Predict house prices",
          "Cluster shoppers",
          "Learn maze with rewards"
        ],
        "insights": {
          "Predict house prices": "Supervised regression.",
          "Cluster shoppers": "Unsupervised structure finding.",
          "Learn maze with rewards": "Reinforcement learning."
        },
        "selected": "Predict house prices"
      }
    },
    "realWorldExample": {
      "title": "Fraud alerts",
      "story": "Banks score transactions with models trained on historical fraud labels.",
      "takeaway": "ML fits high-volume pattern recognition with feedback."
    },
    "quiz": [
      {
        "id": "machine-learning-q1",
        "prompt": "Supervised learning needs…",
        "options": [
          {
            "id": "o0",
            "text": "No data"
          },
          {
            "id": "o1",
            "text": "Input–label pairs"
          },
          {
            "id": "o2",
            "text": "Only GPUs"
          },
          {
            "id": "o3",
            "text": "CSS files"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Labels provide the teaching signal."
      },
      {
        "id": "machine-learning-q2",
        "prompt": "Generalization means…",
        "options": [
          {
            "id": "o0",
            "text": "Memorizing training data"
          },
          {
            "id": "o1",
            "text": "Performing well on unseen examples"
          },
          {
            "id": "o2",
            "text": "Training forever"
          },
          {
            "id": "o3",
            "text": "Bigger fonts"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Held-out performance matters."
      },
      {
        "id": "machine-learning-q3",
        "prompt": "In one line, Machine Learning is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Machine Learning (ML) builds software by learning patterns from data instead of coding every rule"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "what-is-ai",
    "nextConceptId": "deep-learning",
    "codeExample": {
      "language": "pseudo",
      "title": "Supervised loop",
      "code": "for each (x,y):\n  pred = model(x)\n  loss = error(pred,y)\n  update model",
      "notes": "Batches + gradients make this efficient."
    }
  },
  {
    "id": "deep-learning",
    "categoryId": "ai-fundamentals",
    "title": "Deep Learning",
    "subtitle": "Multi-layer nets that learn hierarchical features",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "machine-learning"
    ],
    "laymanSummary": "Deep learning uses neural networks with many layers. Early layers often capture simple patterns; deeper layers compose them into richer concepts. GPUs and large datasets made deep stacks practical, powering modern vision and language systems.",
    "analogy": "An assembly line of understanding: edges → parts → objects (or characters → words → intent).",
    "explanation": [
      "“Deep” means many stacked transformations.",
      "Networks learn representations instead of only hand-built features.",
      "Cost: data, compute, and harder interpretability.",
      "Transformers are a deep architecture for sequences."
    ],
    "keyTerms": [
      {
        "term": "Layer",
        "definition": "One transformation stage"
      },
      {
        "term": "Representation",
        "definition": "Internal numeric features"
      },
      {
        "term": "GPU",
        "definition": "Hardware accelerating tensor math"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Deep Learning — visual walkthrough",
      "description": "Step through the core idea behind Deep Learning.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Raw signal enters.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Shallow layers detect local patterns.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Mid layers form parts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Deep layers form task concepts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "A head outputs the prediction.",
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
          "Hand-built image features",
          "End-to-end learned filters",
          "Keyword sentiment counts"
        ],
        "insights": {
          "Hand-built image features": "Classical ML features.",
          "End-to-end learned filters": "Deep learning style.",
          "Keyword sentiment counts": "Simple baseline vs contextual deep text models."
        },
        "selected": "Hand-built image features"
      }
    },
    "realWorldExample": {
      "title": "Phone dictation",
      "story": "Deep acoustic models map sound to text better than older hand-tuned pipelines.",
      "takeaway": "Depth helps on hierarchical raw signals."
    },
    "quiz": [
      {
        "id": "deep-learning-q1",
        "prompt": "Deep learning is…",
        "options": [
          {
            "id": "o0",
            "text": "Any spreadsheet"
          },
          {
            "id": "o1",
            "text": "ML with multi-layer neural nets"
          },
          {
            "id": "o2",
            "text": "Only robots"
          },
          {
            "id": "o3",
            "text": "A disk format"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Layer depth is the idea."
      },
      {
        "id": "deep-learning-q2",
        "prompt": "It scaled because…",
        "options": [
          {
            "id": "o0",
            "text": "Thinner monitors"
          },
          {
            "id": "o1",
            "text": "Big data + GPU compute"
          },
          {
            "id": "o2",
            "text": "HTML alone"
          },
          {
            "id": "o3",
            "text": "Wi-Fi alone"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Data and compute unlocked it."
      },
      {
        "id": "deep-learning-q3",
        "prompt": "In one line, Deep Learning is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Deep learning uses neural networks with many layers"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "machine-learning",
    "nextConceptId": "neural-networks"
  },
  {
    "id": "neural-networks",
    "categoryId": "ai-fundamentals",
    "title": "Neural Networks",
    "subtitle": "Weighted units transforming numbers into predictions",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "deep-learning"
    ],
    "laymanSummary": "A neural network stacks simple units that mix inputs with learned weights, apply a nonlinearity, and pass signals forward. With enough capacity and data, nets approximate complex input–output maps—from pixels to labels to next-token probabilities.",
    "analogy": "A giant board of knobs (weights). Training twists knobs until outputs match targets.",
    "explanation": [
      "A neuron: weighted sum + bias + activation.",
      "Layers compose into powerful function approximators.",
      "Training uses loss and backpropagation.",
      "Regularization and evaluation prevent hollow “perfect train scores.”"
    ],
    "keyTerms": [
      {
        "term": "Weight",
        "definition": "Learnable connection strength"
      },
      {
        "term": "Activation",
        "definition": "Nonlinearity enabling complex functions"
      },
      {
        "term": "Parameter",
        "definition": "Any learnable number in the model"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Neural Networks — visual walkthrough",
      "description": "Step through the core idea behind Neural Networks.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Inputs arrive as numbers.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Hidden units mix them with weights.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Activations reshape signals.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Outputs become scores/probabilities.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Errors later drive weight updates.",
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
          "Weights store whole articles verbatim",
          "Weights control signal influence",
          "Weights are passwords"
        ],
        "insights": {
          "Weights store whole articles verbatim": "Knowledge is distributed—not a document DB.",
          "Weights control signal influence": "Yes—dials of influence.",
          "Weights are passwords": "No."
        },
        "selected": "Weights store whole articles verbatim"
      }
    },
    "realWorldExample": {
      "title": "Digit recognition",
      "story": "Tiny nets classify handwritten digits by learning stroke patterns as weights.",
      "takeaway": "Even small nets show learning from raw features."
    },
    "quiz": [
      {
        "id": "neural-networks-q1",
        "prompt": "A weight is…",
        "options": [
          {
            "id": "o0",
            "text": "Only gym mass"
          },
          {
            "id": "o1",
            "text": "A learnable connection strength"
          },
          {
            "id": "o2",
            "text": "A keyboard"
          },
          {
            "id": "o3",
            "text": "GPU temp"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Weights are parameters."
      },
      {
        "id": "neural-networks-q2",
        "prompt": "Activations matter because…",
        "options": [
          {
            "id": "o0",
            "text": "They compile code"
          },
          {
            "id": "o1",
            "text": "Nonlinearities enable complex functions"
          },
          {
            "id": "o2",
            "text": "They delete data"
          },
          {
            "id": "o3",
            "text": "They replace datasets"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Without them, deep stacks stay linear."
      },
      {
        "id": "neural-networks-q3",
        "prompt": "In one line, Neural Networks is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "A neural network stacks simple units that mix inputs with learned weights, apply a nonlinearity, and pass signals forward"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "deep-learning",
    "nextConceptId": "what-is-generative-ai",
    "codeExample": {
      "language": "pseudo",
      "title": "One neuron",
      "code": "z = w·x + b\ny = activation(z)",
      "notes": "Networks compose many such units."
    }
  },
  {
    "id": "what-is-generative-ai",
    "categoryId": "ai-fundamentals",
    "title": "What is Generative AI?",
    "subtitle": "Models that create new content",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "neural-networks"
    ],
    "laymanSummary": "Generative AI creates new samples—text, images, audio, code—by learning patterns of a data distribution and sampling from them. New does not mean true: outputs can be fluent and wrong. These models excel at drafting and transformation when paired with verification.",
    "analogy": "A musician improvising in a practiced genre: stylish, not automatically historically accurate.",
    "explanation": [
      "Generators model how data looks, then sample.",
      "LLMs sample tokens; diffusion denoise images.",
      "Use for ideation/drafting; verify facts and safety.",
      "Different from classifiers that only output labels."
    ],
    "keyTerms": [
      {
        "term": "Generation",
        "definition": "Producing new samples"
      },
      {
        "term": "Sampling",
        "definition": "Drawing outputs from model probabilities"
      },
      {
        "term": "Distribution",
        "definition": "Statistical shape of possible data"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "What is Generative AI? — visual walkthrough",
      "description": "Step through the core idea behind What is Generative AI?.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Classifier labels an email spam/ham.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Generator receives “write a refund email”.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "It samples tokens into a new message.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Output is a draft, not guaranteed truth.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Evaluate usefulness and factuality separately.",
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
          "Draft a launch email",
          "Detect fracture on X-ray",
          "Create logo variations"
        ],
        "insights": {
          "Draft a launch email": "Generative.",
          "Detect fracture on X-ray": "Mostly discriminative.",
          "Create logo variations": "Generative."
        },
        "selected": "Draft a launch email"
      }
    },
    "realWorldExample": {
      "title": "Code autocomplete",
      "story": "IDEs draft next lines; developers accept or edit.",
      "takeaway": "Generation accelerates drafting with human review."
    },
    "quiz": [
      {
        "id": "what-is-generative-ai-q1",
        "prompt": "Generative AI primarily…",
        "options": [
          {
            "id": "o0",
            "text": "Deletes files"
          },
          {
            "id": "o1",
            "text": "Creates new content samples"
          },
          {
            "id": "o2",
            "text": "Charges phones"
          },
          {
            "id": "o3",
            "text": "Replaces TCP"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Synthesis is the hallmark."
      },
      {
        "id": "what-is-generative-ai-q2",
        "prompt": "Generated text is…",
        "options": [
          {
            "id": "o0",
            "text": "Always true"
          },
          {
            "id": "o1",
            "text": "Plausible, not guaranteed correct"
          },
          {
            "id": "o2",
            "text": "Always false"
          },
          {
            "id": "o3",
            "text": "A DB key"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Plausibility ≠ truth."
      },
      {
        "id": "what-is-generative-ai-q3",
        "prompt": "In one line, What is Generative AI? is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Generative AI creates new samples—text, images, audio, code—by learning patterns of a data distribution and sampling from them"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "neural-networks",
    "nextConceptId": "discriminative-vs-generative"
  },
  {
    "id": "discriminative-vs-generative",
    "categoryId": "ai-fundamentals",
    "title": "Discriminative vs Generative",
    "subtitle": "Separate classes vs model how data is made",
    "difficulty": "beginner",
    "estimatedMinutes": 7,
    "prerequisites": [
      "what-is-generative-ai"
    ],
    "laymanSummary": "Discriminative models learn p(y|x): decide the label given an input. Generative models learn enough about data to produce new samples (and often condition on prompts). Classifiers are typically discriminative; LLMs and diffusion models are generative. Products often combine both.",
    "analogy": "Bouncer (discriminative) vs chef who can cook new dishes in-house style (generative).",
    "explanation": [
      "Discriminative: decision boundaries / label probabilities.",
      "Generative: model/samplers for new x (or sequences).",
      "LLMs: generative next-token distributions.",
      "Pick based on whether you need labels or creations."
    ],
    "keyTerms": [
      {
        "term": "Discriminative",
        "definition": "Predict labels / separate classes"
      },
      {
        "term": "Generative",
        "definition": "Model and produce data samples"
      },
      {
        "term": "Conditional generation",
        "definition": "Generate given a prompt/constraints"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Discriminative vs Generative — visual walkthrough",
      "description": "Step through the core idea behind Discriminative vs Generative.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Plot cat vs dog points.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Draw a discriminative boundary.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Learn a generative notion of “cat images”.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Sample a new cat-like image.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Different goals need different metrics.",
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
          "Approve loans",
          "Generate product photos",
          "Route tickets and draft replies"
        ],
        "insights": {
          "Approve loans": "Discriminative (plus fairness constraints).",
          "Generate product photos": "Generative.",
          "Route tickets and draft replies": "Hybrid."
        },
        "selected": "Approve loans"
      }
    },
    "realWorldExample": {
      "title": "Moderate then rewrite",
      "story": "Classifier flags toxicity; generator suggests a civil rewrite.",
      "takeaway": "Hybrid pipelines are common."
    },
    "quiz": [
      {
        "id": "discriminative-vs-generative-q1",
        "prompt": "Spam filters are mostly…",
        "options": [
          {
            "id": "o0",
            "text": "Generative"
          },
          {
            "id": "o1",
            "text": "Discriminative"
          },
          {
            "id": "o2",
            "text": "Compilers"
          },
          {
            "id": "o3",
            "text": "CDNs"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "They predict labels."
      },
      {
        "id": "discriminative-vs-generative-q2",
        "prompt": "Image synthesizers are…",
        "options": [
          {
            "id": "o0",
            "text": "Discriminative"
          },
          {
            "id": "o1",
            "text": "Generative"
          },
          {
            "id": "o2",
            "text": "Caches"
          },
          {
            "id": "o3",
            "text": "Mutexes"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "They create samples."
      },
      {
        "id": "discriminative-vs-generative-q3",
        "prompt": "In one line, Discriminative vs Generative is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Discriminative models learn p(y|x): decide the label given an input"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "what-is-generative-ai",
    "nextConceptId": "transformers-overview"
  },
  {
    "id": "transformers-overview",
    "categoryId": "ai-fundamentals",
    "title": "Transformers (overview)",
    "subtitle": "Attention-based sequence architecture",
    "difficulty": "intermediate",
    "estimatedMinutes": 9,
    "prerequisites": [
      "discriminative-vs-generative"
    ],
    "laymanSummary": "Transformers process sequences with attention so each token can selectively gather information from others. They parallelize better than many recurrent nets and scale well—hence their dominance in LLMs and many multimodal systems.",
    "analogy": "In a group chat, attention is how each new message decides which prior messages matter now.",
    "explanation": [
      "Self-attention mixes token information.",
      "Multi-head attention tracks different relation types.",
      "FFN + residual + norm complete a block.",
      "Decoder-only models power most chat LLMs."
    ],
    "keyTerms": [
      {
        "term": "Attention",
        "definition": "Weighted focus over other tokens"
      },
      {
        "term": "Token",
        "definition": "Chunk of text the model reads/writes"
      },
      {
        "term": "Decoder-only",
        "definition": "Predicts next token from left context"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Transformers (overview) — visual walkthrough",
      "description": "Step through the core idea behind Transformers (overview).",
      "steps": [
        {
          "id": "step-1",
          "caption": "Split text into tokens.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Embed tokens as vectors.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Self-attention mixes context.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Feed-forward refines each position.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Stacked blocks feed prediction heads.",
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
          "Fill masked words",
          "Chat next-token assistant",
          "Translate EN→FR"
        ],
        "insights": {
          "Fill masked words": "Encoder/masked modeling style.",
          "Chat next-token assistant": "Decoder-only.",
          "Translate EN→FR": "Encoder-decoder classic."
        },
        "selected": "Fill masked words"
      }
    },
    "realWorldExample": {
      "title": "Translation leap",
      "story": "Attention transformers beat many older RNN translation stacks.",
      "takeaway": "Architecture + scale changed practical quality."
    },
    "quiz": [
      {
        "id": "transformers-overview-q1",
        "prompt": "Transformers rely heavily on…",
        "options": [
          {
            "id": "o0",
            "text": "Bubble sort"
          },
          {
            "id": "o1",
            "text": "Attention"
          },
          {
            "id": "o2",
            "text": "FTP"
          },
          {
            "id": "o3",
            "text": "Flexbox"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Attention is central."
      },
      {
        "id": "transformers-overview-q2",
        "prompt": "GPT-like chat models are usually…",
        "options": [
          {
            "id": "o0",
            "text": "Decoder-only transformers"
          },
          {
            "id": "o1",
            "text": "Only decision trees"
          },
          {
            "id": "o2",
            "text": "Excel macros"
          },
          {
            "id": "o3",
            "text": "GPS chips"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Autoregressive decoders dominate."
      },
      {
        "id": "transformers-overview-q3",
        "prompt": "In one line, Transformers (overview) is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Transformers process sequences with attention so each token can selectively gather information from others"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "discriminative-vs-generative",
    "nextConceptId": "foundation-models"
  },
  {
    "id": "foundation-models",
    "categoryId": "ai-fundamentals",
    "title": "Foundation Models",
    "subtitle": "Broad models adapted to many tasks",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "transformers-overview"
    ],
    "laymanSummary": "Foundation models are large models trained on broad data and reused across many downstream tasks via prompting, retrieval, fine-tuning, or tools. Teams adapt one base instead of training from scratch each time—changing product speed and concentrating capability.",
    "analogy": "A broadly educated graduate who later specializes—rather than training a newborn for each career.",
    "explanation": [
      "Broad pretraining creates transferable capabilities.",
      "Adaptation: prompts, RAG, fine-tunes, agents.",
      "Benefits: speed; risks: inherited bias and cost.",
      "Right-sizing still matters; bigger is not always better."
    ],
    "keyTerms": [
      {
        "term": "Foundation model",
        "definition": "Broad reusable base model"
      },
      {
        "term": "Adaptation",
        "definition": "Specializing a base to a task"
      },
      {
        "term": "Transfer learning",
        "definition": "Reuse knowledge across tasks"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Foundation Models — visual walkthrough",
      "description": "Step through the core idea behind Foundation Models.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Pretrain on diverse data.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "App A: tutoring prompts.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "App B: RAG over docs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "App C: fine-tune style.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Shared base + different controls.",
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
          "10 niche defect images",
          "Support bot for 50 products",
          "On-device wake word"
        ],
        "insights": {
          "10 niche defect images": "Tiny data—giant FM may be overkill.",
          "Support bot for 50 products": "Strong FM + RAG candidate.",
          "On-device wake word": "Small specialized model."
        },
        "selected": "10 niche defect images"
      }
    },
    "realWorldExample": {
      "title": "Enterprise copilots",
      "story": "One approved base model powers many department assistants with shared security.",
      "takeaway": "Foundations become platforms."
    },
    "quiz": [
      {
        "id": "foundation-models-q1",
        "prompt": "Foundation models are…",
        "options": [
          {
            "id": "o0",
            "text": "Only calculators"
          },
          {
            "id": "o1",
            "text": "Broad reusable models"
          },
          {
            "id": "o2",
            "text": "Printer drivers"
          },
          {
            "id": "o3",
            "text": "HTML tags"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Broad + adaptable."
      },
      {
        "id": "foundation-models-q2",
        "prompt": "You always need the largest model.",
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
            "text": "Only Tuesdays"
          },
          {
            "id": "o3",
            "text": "Only for CSS"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Right-size the model."
      },
      {
        "id": "foundation-models-q3",
        "prompt": "In one line, Foundation Models is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Foundation models are large models trained on broad data and reused across many downstream tasks via prompting, retrieval, fine-tuning, or tools"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "transformers-overview",
    "nextConceptId": "llms"
  },
  {
    "id": "llms",
    "categoryId": "ai-fundamentals",
    "title": "LLMs",
    "subtitle": "Large language models as next-token engines",
    "difficulty": "beginner",
    "estimatedMinutes": 8,
    "prerequisites": [
      "foundation-models"
    ],
    "laymanSummary": "Large Language Models are neural nets trained to predict tokens at scale. From that objective emerge summarization, drafting, coding help, and dialogue. They model language patterns—they do not automatically ground claims in live reality without tools or retrieval.",
    "analogy": "Extremely well-read autocomplete that can converse: eloquent, fallible on facts without grounding.",
    "explanation": [
      "Pretraining predicts tokens over huge corpora.",
      "Instruction/preference tuning shapes helpful behavior.",
      "Context length and decoding settings change outcomes.",
      "Apps add RAG, tools, evals, and guardrails."
    ],
    "keyTerms": [
      {
        "term": "LLM",
        "definition": "Large neural language model"
      },
      {
        "term": "Context window",
        "definition": "Token capacity per request"
      },
      {
        "term": "Alignment",
        "definition": "Steering behavior to preferences/policies"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "LLMs — visual walkthrough",
      "description": "Step through the core idea behind LLMs.",
      "steps": [
        {
          "id": "step-1",
          "caption": "User enters a prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Tokenizer emits token IDs.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Transformer contextualizes them.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Next-token distribution appears.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Decoding loops until stop.",
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
          "Draft a lab outline",
          "See private DB with no access",
          "Execute bank transfer alone"
        ],
        "insights": {
          "Draft a lab outline": "Strong generation fit.",
          "See private DB with no access": "Needs provided data/tools.",
          "Execute bank transfer alone": "Needs auth + hard controls."
        },
        "selected": "Draft a lab outline"
      }
    },
    "realWorldExample": {
      "title": "Algorithms tutor",
      "story": "Students get adaptive explanations that may invent citations if ungrounded.",
      "takeaway": "Great for teaching drafts; verify critical claims."
    },
    "quiz": [
      {
        "id": "llms-q1",
        "prompt": "LLMs are mainly trained to…",
        "options": [
          {
            "id": "o0",
            "text": "Predict/generate tokens"
          },
          {
            "id": "o1",
            "text": "Replace CPUs"
          },
          {
            "id": "o2",
            "text": "Render CSS"
          },
          {
            "id": "o3",
            "text": "Run payroll by default"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Token prediction is core."
      },
      {
        "id": "llms-q2",
        "prompt": "Without tools, an LLM knows live prices.",
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
            "text": "If font is green"
          },
          {
            "id": "o3",
            "text": "Only offline"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "No magic live data."
      },
      {
        "id": "llms-q3",
        "prompt": "In one line, LLMs is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Large Language Models are neural nets trained to predict tokens at scale"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "foundation-models",
    "nextConceptId": "multimodal-intro"
  },
  {
    "id": "multimodal-intro",
    "categoryId": "ai-fundamentals",
    "title": "Multimodal intro",
    "subtitle": "Connecting text, images, audio, and more",
    "difficulty": "intermediate",
    "estimatedMinutes": 7,
    "prerequisites": [
      "llms"
    ],
    "laymanSummary": "Multimodal models handle more than one signal type—e.g., image+text in, text out. They relate pixels and words in a shared representational space, enabling captioning, visual Q&A, and document understanding.",
    "analogy": "A friend who can look at your whiteboard photo and answer your question about it.",
    "explanation": [
      "Modalities: text, image, audio, video, sensors.",
      "Encoders + fusion combine signals.",
      "Images may become visual tokens for transformers.",
      "Risks: mis-seeing details; eval is harder."
    ],
    "keyTerms": [
      {
        "term": "Modality",
        "definition": "A data type/signal kind"
      },
      {
        "term": "Fusion",
        "definition": "Combining modalities"
      },
      {
        "term": "Visual tokens",
        "definition": "Image features as sequence units"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Multimodal intro — visual walkthrough",
      "description": "Step through the core idea behind Multimodal intro.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Image + question arrive.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Vision encoder yields features/tokens.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Joint model attends across both.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Answer tokens are generated.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Check grounding against the image.",
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
          "Explain a schematic photo",
          "Rewrite a paragraph",
          "Transcribe a lecture"
        ],
        "insights": {
          "Explain a schematic photo": "Vision+language.",
          "Rewrite a paragraph": "Text-only may suffice.",
          "Transcribe a lecture": "Audio→text pipeline."
        },
        "selected": "Explain a schematic photo"
      }
    },
    "realWorldExample": {
      "title": "Worksheet photos",
      "story": "Students photograph homework; a tutor reads and guides.",
      "takeaway": "Multimodality removes retyping friction."
    },
    "quiz": [
      {
        "id": "multimodal-intro-q1",
        "prompt": "Multimodal means…",
        "options": [
          {
            "id": "o0",
            "text": "Many GPUs only"
          },
          {
            "id": "o1",
            "text": "Multiple data types"
          },
          {
            "id": "o2",
            "text": "Many passwords"
          },
          {
            "id": "o3",
            "text": "Many CSS files"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Multiple modalities."
      },
      {
        "id": "multimodal-intro-q2",
        "prompt": "A key risk is…",
        "options": [
          {
            "id": "o0",
            "text": "Inventing image details"
          },
          {
            "id": "o1",
            "text": "Too much font RAM"
          },
          {
            "id": "o2",
            "text": "DNS only"
          },
          {
            "id": "o3",
            "text": "USB-C"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Visual hallucination."
      },
      {
        "id": "multimodal-intro-q3",
        "prompt": "In one line, Multimodal intro is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Multimodal models handle more than one signal type—e"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "llms",
    "nextConceptId": "diffusion-intro"
  },
  {
    "id": "diffusion-intro",
    "categoryId": "ai-fundamentals",
    "title": "Diffusion intro",
    "subtitle": "Images via iterative denoising",
    "difficulty": "intermediate",
    "estimatedMinutes": 8,
    "prerequisites": [
      "multimodal-intro"
    ],
    "laymanSummary": "Diffusion models generate images by learning to reverse a noising process: start from noise and denoise step-by-step toward a prompt-conditioned picture. Latent diffusion runs this in a compressed space for speed.",
    "analogy": "Reassembling a clear stained-glass picture out of static, guided by a caption.",
    "explanation": [
      "Training: add noise to images; learn to remove it.",
      "Sampling: iterative denoising from noise.",
      "Text embeddings condition each step.",
      "Tradeoffs: steps/latency, prompt brittleness, safety filters."
    ],
    "keyTerms": [
      {
        "term": "Denoising",
        "definition": "Removing estimated noise"
      },
      {
        "term": "Latent diffusion",
        "definition": "Diffusion in compressed latent space"
      },
      {
        "term": "Guidance",
        "definition": "How hard the prompt steers sampling"
      }
    ],
    "visualization": {
      "kind": "stepped",
      "title": "Diffusion intro — visual walkthrough",
      "description": "Step through the core idea behind Diffusion intro.",
      "steps": [
        {
          "id": "step-1",
          "caption": "Start from noise.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
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
          "caption": "Condition on the prompt.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
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
          "caption": "Coarse structure appears.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Details refine.",
          "nodes": [
            {
              "id": "n0",
              "label": "Input",
              "x": 12,
              "y": 36,
              "tone": "active"
            },
            {
              "id": "n1",
              "label": "Process",
              "x": 34,
              "y": 50,
              "tone": "active"
            },
            {
              "id": "n2",
              "label": "Transform",
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
          "caption": "Final image emerges.",
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
          "Stronger guidance",
          "Fewer steps",
          "New random seed"
        ],
        "insights": {
          "Stronger guidance": "Tighter prompt match; can look brittle if extreme.",
          "Fewer steps": "Faster, maybe less refined.",
          "New random seed": "Different sample."
        },
        "selected": "Stronger guidance"
      }
    },
    "realWorldExample": {
      "title": "Concept art ideation",
      "story": "Artists generate variations, then paint over winners.",
      "takeaway": "Diffusion explores; humans finish."
    },
    "quiz": [
      {
        "id": "diffusion-intro-q1",
        "prompt": "Sampling usually starts from…",
        "options": [
          {
            "id": "o0",
            "text": "A finished JPEG"
          },
          {
            "id": "o1",
            "text": "Random noise"
          },
          {
            "id": "o2",
            "text": "A SQL row"
          },
          {
            "id": "o3",
            "text": "CSS grid"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Noise first."
      },
      {
        "id": "diffusion-intro-q2",
        "prompt": "Latent diffusion helps because…",
        "options": [
          {
            "id": "o0",
            "text": "It ignores prompts"
          },
          {
            "id": "o1",
            "text": "It is more efficient"
          },
          {
            "id": "o2",
            "text": "It deletes GPUs"
          },
          {
            "id": "o3",
            "text": "It bans images"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Compressed space efficiency."
      },
      {
        "id": "diffusion-intro-q3",
        "prompt": "In one line, Diffusion intro is mainly about…",
        "options": [
          {
            "id": "o0",
            "text": "Diffusion models generate images by learning to reverse a noising process: start from noise and denoise step-by-step toward a prompt-conditioned picture"
          },
          {
            "id": "o1",
            "text": "Replacing all databases with CSS"
          },
          {
            "id": "o2",
            "text": "Turning off networking permanently"
          },
          {
            "id": "o3",
            "text": "Only hardware manufacturing"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Focus on the core teaching point of this concept."
      }
    ],
    "prevConceptId": "multimodal-intro"
  }
] as Concept[];
