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
    "laymanSummary": "AI is software that handles judgment-like jobs—spotting spam, suggesting replies, or reading text in photos. It is not a digital mind; it learns patterns from data and turns them into a tool.",
    "analogy": "Like a skilled campus intern who studied thousands of past helpdesk tickets: fast at patterns, still needs clear goals and a human check.",
    "explanation": [
      "AI is an umbrella: some systems use hand-written rules, others learn from examples.",
      "Most products called “AI” today are machine-learning models built for one job.",
      "Mental model: Input → Model → Output, with the model’s knobs learned from data.",
      "Useful AI has a clear task and a way to measure right vs wrong answers."
    ],
    "keyTerms": [
      {
        "term": "Artificial Intelligence",
        "definition": "Software that does judgment-like tasks"
      },
      {
        "term": "Model",
        "definition": "Program that maps inputs to outputs"
      },
      {
        "term": "Narrow AI",
        "definition": "AI built for one specific kind of job"
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
      "story": "Your college launches a chatbot for library hours and Wi-Fi resets. Students type questions at midnight and get answers drawn from past FAQs and ticket logs. Staff still review odd cases and update the knowledge base weekly. The win is faster help on repeat questions, not a robot that “understands campus life.”",
      "takeaway": "AI helps when the job is clear and you can check the answers."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT about a college assignment.",
      "userInput": "Summarize this lab report in 5 bullet points for my presentation.",
      "insideTheModel": "AI here means a trained model taking your text as input and producing a useful summary as output—pattern matching from training, not a human mind reading the report.",
      "modelOutput": "Five short bullets covering methods, results, and one limitation—ready for slides, still yours to fact-check."
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
        "prompt": "Which mental model best fits everyday AI tools?",
        "options": [
          {
            "id": "o0",
            "text": "Input → Model → Output"
          },
          {
            "id": "o1",
            "text": "Database → CSS → Robot"
          },
          {
            "id": "o2",
            "text": "Hardware only, no software"
          },
          {
            "id": "o3",
            "text": "A chat box with no model"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "AI tools take inputs, run a model, and return outputs."
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
    "laymanSummary": "Machine learning builds software by learning patterns from examples instead of writing every rule by hand. You give data and a goal; training adjusts the model so it predicts better on new cases.",
    "analogy": "Classic code is a recipe you write. ML is flashcard drill: enough labeled examples, and the system invents its own internal rules.",
    "explanation": [
      "Supervised learning uses labeled pairs: input x and correct answer y.",
      "Unsupervised learning finds groups or structure when labels are missing.",
      "Reinforcement learning improves by trying actions and getting rewards.",
      "The real goal is generalization—doing well on data the model never saw."
    ],
    "keyTerms": [
      {
        "term": "Supervised learning",
        "definition": "Learning from input–label example pairs"
      },
      {
        "term": "Training",
        "definition": "Updating the model to reduce errors"
      },
      {
        "term": "Generalization",
        "definition": "Performing well on new, unseen examples"
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
      "title": "Gmail spam filter",
      "story": "Gmail cannot hard-code every scam subject line students see. Instead it trains on millions of emails labeled spam or not. When a new internship “offer” lands in your inbox, the model scores it from learned patterns. False alarms still happen, so users can mark “Not spam” and feed the next round of training.",
      "takeaway": "ML shines on high-volume pattern jobs where labeled feedback exists."
    },
    "chatGptLens": {
      "setting": "You’re asking ChatGPT how Gmail-style filters learn.",
      "userInput": "How does email spam filtering learn from past messages?",
      "insideTheModel": "Machine learning is the idea behind the answer: past labeled emails train a model; your new email is scored as spam or not without hand-writing every rule.",
      "modelOutput": "A short explanation: labeled examples → train a classifier → score new mail → improve from user corrections."
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
        "prompt": "How is machine learning different from classic if/else rules?",
        "options": [
          {
            "id": "o0",
            "text": "It learns patterns from examples"
          },
          {
            "id": "o1",
            "text": "It only runs on CSS files"
          },
          {
            "id": "o2",
            "text": "It never needs any data"
          },
          {
            "id": "o3",
            "text": "It replaces the operating system"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "ML invents internal rules from data instead of hand-coding every case."
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
    "laymanSummary": "Deep learning is machine learning with neural nets that have many layers. Early layers catch simple patterns; deeper layers combine them into richer ideas—like edges becoming objects, or words becoming intent.",
    "analogy": "A phone-camera pipeline of understanding: edges → shapes → faces (or letters → words → meaning).",
    "explanation": [
      "“Deep” means stacking many transformation layers, not one shallow model.",
      "The network learns its own features instead of only hand-built ones.",
      "Tradeoff: you usually need more data and compute, and explanations get harder.",
      "Modern chat and vision systems are deep nets; transformers are one deep design."
    ],
    "keyTerms": [
      {
        "term": "Layer",
        "definition": "One stage that transforms the data"
      },
      {
        "term": "Representation",
        "definition": "Internal numbers that encode patterns"
      },
      {
        "term": "GPU",
        "definition": "Chip that speeds up neural-net math"
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
      "title": "Phone voice typing",
      "story": "You dictate a WhatsApp message on the bus. Older systems needed hand-tuned audio features; deep models learn layers that turn sound waves into phonemes, then words. Accuracy jumped once phones and clouds had enough data and GPUs. You still correct names and slang, but the draft appears in seconds.",
      "takeaway": "Depth helps when the raw signal has many levels of structure."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT about how modern AI “sees” and “reads.”",
      "userInput": "Why do ChatGPT and phone cameras need deep neural networks?",
      "insideTheModel": "Deep learning is the stack of many layers: early layers pick simple cues; deeper layers build meaning so ChatGPT can turn your prompt into a coherent reply.",
      "modelOutput": "A plain answer: many layers learn hierarchical features; big data and GPUs made that practical for language and vision."
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
        "prompt": "What does “deep” mainly refer to?",
        "options": [
          {
            "id": "o0",
            "text": "Many stacked layers"
          },
          {
            "id": "o1",
            "text": "Darker UI themes"
          },
          {
            "id": "o2",
            "text": "Deeper ocean sensors only"
          },
          {
            "id": "o3",
            "text": "More CSS nesting"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Depth means many transformation layers in the network."
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
    "laymanSummary": "A neural network stacks simple units that mix inputs with learned weights, bend the signal with an activation, and pass it forward. With enough data and capacity, the net can map pixels to labels or text to next-word guesses.",
    "analogy": "A giant mixer board of knobs (weights). Training twists the knobs until the output matches the target.",
    "explanation": [
      "One unit does a weighted sum, adds a bias, then applies an activation.",
      "Stacking layers lets the net approximate complex input→output maps.",
      "Training measures error (loss) and adjusts weights with backpropagation.",
      "Check held-out data so the net does not only memorize the training set."
    ],
    "keyTerms": [
      {
        "term": "Weight",
        "definition": "Learnable strength of a connection"
      },
      {
        "term": "Activation",
        "definition": "Nonlinear step that enables complex maps"
      },
      {
        "term": "Parameter",
        "definition": "Any number the model learns"
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
      "title": "Attendance sheet OCR",
      "story": "Your club scans handwritten roll numbers into a spreadsheet. A small neural net turns ink strokes into digit classes by learning weights from many labeled samples. Early mistakes on messy 4s and 9s shrink as training continues. The app never stores “the idea of four”—it stores numbers that make the right digit more likely.",
      "takeaway": "Even small nets learn useful maps from raw features to labels."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT about what happens under the hood.",
      "userInput": "When I type a prompt, what do the “neurons” and weights actually do?",
      "insideTheModel": "Your text becomes numbers; layers of weighted units + activations transform those numbers until the model can pick the next token to show you.",
      "modelOutput": "A friendly walkthrough: inputs → weighted mixes → activations → next-token scores → your reply text."
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
        "prompt": "What does training mainly adjust in a neural network?",
        "options": [
          {
            "id": "o0",
            "text": "The learnable weights"
          },
          {
            "id": "o1",
            "text": "Your laptop’s wallpaper"
          },
          {
            "id": "o2",
            "text": "The Wi-Fi password"
          },
          {
            "id": "o3",
            "text": "The USB cable length"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Training updates weights (and other parameters) to reduce error."
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
    "laymanSummary": "Generative AI creates new content—text, images, audio, or code—by learning patterns from data and sampling new examples. Fluent does not mean true, so treat outputs as drafts you still check.",
    "analogy": "A bandmate who can improvise in your genre: sounds right, not automatically fact-checked.",
    "explanation": [
      "Generators learn what typical data looks like, then create new samples.",
      "ChatGPT samples next words; image tools often denoise step by step.",
      "Best uses: drafts, rewrites, brainstorming—always verify facts and safety.",
      "This differs from classifiers that only pick a label like spam/not spam."
    ],
    "keyTerms": [
      {
        "term": "Generation",
        "definition": "Creating new content samples"
      },
      {
        "term": "Sampling",
        "definition": "Picking outputs from model probabilities"
      },
      {
        "term": "Distribution",
        "definition": "The pattern of what data looks like"
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
      "title": "Internship email draft",
      "story": "Before a career fair, you ask ChatGPT to draft a short email to a recruiter. It invents a polite opening, your interest line, and a clear ask for next steps. You paste in your real project names and delete anything that sounds fake. The model sped up the blank page; you own the final send.",
      "takeaway": "Generation accelerates drafting; humans verify and send."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT to create something new for campus life.",
      "userInput": "Write a 3-sentence email asking my professor for a project deadline extension.",
      "insideTheModel": "Generative AI samples new text word-by-word from patterns it learned—producing a fresh email draft, not retrieving one fixed stored message.",
      "modelOutput": "A polite three-sentence draft you can edit with your real reason and dates."
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
        "prompt": "Which task is generative AI best suited for?",
        "options": [
          {
            "id": "o0",
            "text": "Drafting a new email"
          },
          {
            "id": "o1",
            "text": "Charging a phone battery"
          },
          {
            "id": "o2",
            "text": "Replacing the network cable"
          },
          {
            "id": "o3",
            "text": "Formatting a hard drive"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Generative AI creates new content such as text drafts."
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
    "laymanSummary": "Discriminative models answer “what label fits this input?” Generative models answer “what new sample could look like this?” Spam filters are usually discriminative; ChatGPT and image generators are generative—and apps often use both.",
    "analogy": "A club bouncer (discriminative) vs a chef who can cook new dishes in the house style (generative).",
    "explanation": [
      "Discriminative models draw a boundary or score: spam vs not, cat vs dog.",
      "Generative models learn how to create new text, images, or other samples.",
      "ChatGPT is generative: it samples the next token given your prompt.",
      "Choose labels when you need decisions; choose generation when you need creations."
    ],
    "keyTerms": [
      {
        "term": "Discriminative",
        "definition": "Predicts a label for an input"
      },
      {
        "term": "Generative",
        "definition": "Creates new data samples"
      },
      {
        "term": "Conditional generation",
        "definition": "Creates output guided by a prompt"
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
      "title": "Moderate, then rewrite",
      "story": "A student Discord bot first runs a discriminative toxicity classifier on each message. If a message is flagged, a generative model suggests a calmer rewrite the user can send. Mods still review edge cases during rush weeks. Labeling and creating work as a pipeline, not rivals.",
      "takeaway": "Real products often combine discriminative checks with generative drafts."
    },
    "chatGptLens": {
      "setting": "You’re comparing two campus tools with ChatGPT.",
      "userInput": "Is a spam filter the same kind of AI as ChatGPT writing my email?",
      "insideTheModel": "Discriminative AI would label your mail spam/ham; generative AI (ChatGPT) creates new email text. Same “AI” umbrella, different jobs.",
      "modelOutput": "A clear contrast: filter → label; ChatGPT → new sample—and many apps use both."
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
        "prompt": "What question does a discriminative model mainly answer?",
        "options": [
          {
            "id": "o0",
            "text": "What label fits this input?"
          },
          {
            "id": "o1",
            "text": "How do I invent a new JPEG?"
          },
          {
            "id": "o2",
            "text": "Which CSS color is trendy?"
          },
          {
            "id": "o3",
            "text": "How long is the USB cable?"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Discriminative models predict labels for inputs."
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
    "laymanSummary": "Transformers process text as tokens and use attention so each piece can pull useful context from the others. They train efficiently at scale, which is why they power ChatGPT-style models.",
    "analogy": "In a group chat, attention is how each new message decides which earlier messages matter right now.",
    "explanation": [
      "Self-attention lets every token mix information from other tokens.",
      "Multi-head attention tracks different kinds of relationships at once.",
      "A transformer block also uses feed-forward layers, residuals, and normalization.",
      "Most chat LLMs are decoder-only: they predict the next token from left context."
    ],
    "keyTerms": [
      {
        "term": "Attention",
        "definition": "Weighted focus over other tokens"
      },
      {
        "term": "Token",
        "definition": "Text chunk the model reads or writes"
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
      "title": "Lecture notes across languages",
      "story": "Your roommate records a Hindi lecture and wants English study notes. Older RNN translators struggled with long sentences and context. Transformer attention can link a late pronoun back to the right earlier noun. The notes are still imperfect on jargon, but far more usable for exam week.",
      "takeaway": "Attention + scale made long-context language tools practical."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT about a long assignment prompt.",
      "userInput": "Using the rubric and my outline above, write the intro paragraph for my report.",
      "insideTheModel": "A transformer uses attention so words in your rubric, outline, and request can influence each other; then it predicts the next tokens of the intro.",
      "modelOutput": "An intro paragraph that reflects points from both the rubric and your outline."
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
        "prompt": "What does attention let each token do?",
        "options": [
          {
            "id": "o0",
            "text": "Pull useful info from other tokens"
          },
          {
            "id": "o1",
            "text": "Delete the training dataset"
          },
          {
            "id": "o2",
            "text": "Replace the GPU with CSS"
          },
          {
            "id": "o3",
            "text": "Skip tokenization entirely"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Attention mixes information across tokens with learned weights."
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
    "laymanSummary": "Foundation models are large models trained on broad data, then reused for many jobs. Teams adapt one base with prompts, retrieval, or fine-tuning instead of training a new model from scratch each time.",
    "analogy": "A broadly educated graduate who later specializes—cheaper than training a newborn for every career.",
    "explanation": [
      "Broad pretraining builds skills that transfer to many tasks.",
      "You adapt with prompts, document retrieval (RAG), fine-tunes, or tools.",
      "Upside is speed to product; downside includes cost and inherited biases.",
      "Pick the right size: bigger is not always better for a campus app."
    ],
    "keyTerms": [
      {
        "term": "Foundation model",
        "definition": "Broad, reusable base model"
      },
      {
        "term": "Adaptation",
        "definition": "Specializing a base for a task"
      },
      {
        "term": "Transfer learning",
        "definition": "Reusing knowledge across tasks"
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
      "title": "One campus model, many apps",
      "story": "Your university licenses one approved foundation model. The library builds a FAQ helper with prompts and docs; career services fine-tunes a résumé coach; IT wraps the same base for ticket triage. Security and billing stay centralized. No team trains a giant model from zero for their small app.",
      "takeaway": "Foundation models turn one broad base into many specialized tools."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT—the same base model students use for many jobs.",
      "userInput": "Help me debug this Python loop, then rewrite my LinkedIn About section.",
      "insideTheModel": "One foundation model handles both tasks via different prompts—no separate “debug model” and “LinkedIn model” trained from scratch.",
      "modelOutput": "A bug fix explanation for the loop, then a short LinkedIn About draft in a different tone."
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
        "prompt": "Why do teams reuse a foundation model?",
        "options": [
          {
            "id": "o0",
            "text": "Adapt one base to many tasks"
          },
          {
            "id": "o1",
            "text": "To avoid using any prompts"
          },
          {
            "id": "o2",
            "text": "Because CSS trains the model"
          },
          {
            "id": "o3",
            "text": "To delete all evaluation"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "One broad base can be adapted instead of training from scratch."
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
    "laymanSummary": "Large language models are neural nets trained to predict the next token at huge scale. That skill unlocks summarizing, drafting, coding help, and chat—but they still guess from patterns, not a live feed of truth.",
    "analogy": "Super-charged Gmail autocomplete that can hold a conversation: fluent, still wrong without grounding.",
    "explanation": [
      "Pretraining teaches next-token prediction on massive text.",
      "Instruction and preference tuning make the model more helpful and safer.",
      "Context window size and decoding settings change what you get back.",
      "Real apps add retrieval, tools, evaluations, and guardrails around the LLM."
    ],
    "keyTerms": [
      {
        "term": "LLM",
        "definition": "Large neural net for language"
      },
      {
        "term": "Context window",
        "definition": "How much text fits per request"
      },
      {
        "term": "Alignment",
        "definition": "Steering the model toward preferred behavior"
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
      "title": "DSA doubt clearing",
      "story": "Before a coding test, you paste a recursion problem into ChatGPT and ask for a walkthrough. It explains the base case, draws a small call stack in text, and suggests a practice variant. Sometimes it invents a fake “standard theorem” name—so you check your textbook. The LLM is a tutor draft, not an official answer key.",
      "takeaway": "LLMs are great study partners; verify claims that matter."
    },
    "chatGptLens": {
      "setting": "You’re chatting with ChatGPT—the product people mean by “an LLM.”",
      "userInput": "Explain binary search in simple words, then give one practice question.",
      "insideTheModel": "The LLM tokenizes your request, runs a transformer, and repeatedly samples the next token until it finishes an explanation plus a question.",
      "modelOutput": "A plain-language binary search explanation and one short practice problem."
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
        "prompt": "What is an LLM’s core training objective?",
        "options": [
          {
            "id": "o0",
            "text": "Predict the next token"
          },
          {
            "id": "o1",
            "text": "Compile C++ programs"
          },
          {
            "id": "o2",
            "text": "Charge phone batteries"
          },
          {
            "id": "o3",
            "text": "Manage Wi-Fi routers"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "LLMs learn by predicting tokens at scale."
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
    "laymanSummary": "Multimodal models work with more than one kind of input—like an image plus a question. They connect pixels and words so you can caption photos, ask visual questions, or read a worksheet from a camera shot.",
    "analogy": "A friend who can look at your whiteboard photo and answer your question about it.",
    "explanation": [
      "Modalities include text, images, audio, video, and sensors.",
      "Encoders turn each modality into features; fusion combines them.",
      "Images are often split into visual tokens a transformer can attend over.",
      "Risk: the model can “see” details that are not really there—always check."
    ],
    "keyTerms": [
      {
        "term": "Modality",
        "definition": "A kind of data or signal"
      },
      {
        "term": "Fusion",
        "definition": "Combining different modalities"
      },
      {
        "term": "Visual tokens",
        "definition": "Image pieces treated like sequence units"
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
      "title": "Photo of a homework sheet",
      "story": "You snap a phone photo of a printed circuit diagram and ask ChatGPT what R3 does. The model reads labels from the image and explains the resistor’s role in plain English. If glare hides a value, it may guess wrong—so you zoom and confirm. Multimodal input skipped typing every symbol by hand.",
      "takeaway": "Image + text removes retyping friction; still verify what it “saw.”"
    },
    "chatGptLens": {
      "setting": "You’re chatting with a multimodal ChatGPT that accepts image uploads.",
      "userInput": "[uploads whiteboard photo] What are the three bullet points written on the board?",
      "insideTheModel": "A vision encoder turns the photo into visual tokens; the language model fuses those with your question and generates a text answer.",
      "modelOutput": "A short list of the three bullets it could read—plus a note if any text was unclear."
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
        "prompt": "Which request needs a multimodal model?",
        "options": [
          {
            "id": "o0",
            "text": "Explain this photo of my schematic"
          },
          {
            "id": "o1",
            "text": "Change my desktop wallpaper color"
          },
          {
            "id": "o2",
            "text": "Restart the campus Wi-Fi router"
          },
          {
            "id": "o3",
            "text": "Format a blank USB drive"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Image + question is a classic multimodal task."
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
    "laymanSummary": "Diffusion models make images by starting from random noise and cleaning it step by step until a prompt-matching picture appears. Latent diffusion does this in a compressed space so generation is faster.",
    "analogy": "Clearing static from a TV until a picture appears, steered by the caption you typed.",
    "explanation": [
      "Training teaches the model to remove noise that was added to real images.",
      "Sampling starts from noise and denoises over many steps.",
      "Your text prompt conditions each step toward the right content.",
      "Tradeoffs: more steps can look better but take longer; prompts can be brittle."
    ],
    "keyTerms": [
      {
        "term": "Denoising",
        "definition": "Removing estimated noise from an image"
      },
      {
        "term": "Latent diffusion",
        "definition": "Running diffusion in a compressed space"
      },
      {
        "term": "Guidance",
        "definition": "How strongly the prompt steers sampling"
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
      "title": "Hackathon poster drafts",
      "story": "Your team needs a poster by tonight. You type a prompt into an image tool and get four noisy-to-clear diffusion samples. You pick the best layout, regenerate with a tighter prompt, then edit titles in Canva. Diffusion explored styles quickly; humans fixed logos and spelling.",
      "takeaway": "Diffusion is for ideation; humans finish brand-critical details."
    },
    "chatGptLens": {
      "setting": "You’re using ChatGPT (or a sibling image tool) to create a picture from text.",
      "userInput": "Generate a simple campus hackathon poster: dark blue background, bold title HACK NIGHT, no tiny unreadable text.",
      "insideTheModel": "Diffusion starts from noise and denoises step by step, steered by your prompt embeddings, until an image appears (often in latent space for speed).",
      "modelOutput": "A poster-like image with a dark blue field and a large HACK NIGHT title—still needing your logo and real event details."
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
        "prompt": "How do diffusion models usually create an image?",
        "options": [
          {
            "id": "o0",
            "text": "Denoise step by step from noise"
          },
          {
            "id": "o1",
            "text": "Sort pixels with bubble sort"
          },
          {
            "id": "o2",
            "text": "Download one fixed stock photo"
          },
          {
            "id": "o3",
            "text": "Compile CSS into a PNG"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Diffusion iteratively denoises toward a prompt-conditioned image."
      }
    ],
    "prevConceptId": "multimodal-intro"
  }
] as Concept[];
