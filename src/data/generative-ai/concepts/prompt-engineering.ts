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
    "laymanSummary": "ChatGPT chats use three roles: system (hidden rules), user (you), and assistant (the reply). Keeping those roles clear makes the bot behave more consistently.",
    "analogy": "A play script: stage directions (system), the audience’s request (user), and the actor’s lines (assistant).",
    "explanation": [
      "System messages set tone, rules, and product policy for the whole chat.",
      "User messages carry the actual question or task.",
      "Assistant messages are what the model writes back.",
      "System text steers behavior but is not a hard security lock."
    ],
    "keyTerms": [
      {
        "term": "System prompt",
        "definition": "Hidden rules that steer the whole chat"
      },
      {
        "term": "User message",
        "definition": "What you or the app ask"
      },
      {
        "term": "Assistant message",
        "definition": "The model’s reply text"
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
      "title": "Campus helpdesk chatbot",
      "story": "Your college puts a system prompt: “Be brief, cite refund policy, never invent fees.” A student asks, “Can I get a hostel fee refund after week 3?” The assistant answers from that policy voice, not as a free-form essay writer.",
      "takeaway": "Roles encode product behavior before the user even types."
    },
    "chatGptLens": {
      "setting": "You’re building a polite study buddy in ChatGPT Custom Instructions / API system role.",
      "userInput": "Explain photosynthesis in 5 bullet points for class 8.",
      "insideTheModel": "The system role (“friendly tutor, short bullets, no fluff”) sits above your message. ChatGPT treats that as standing rules, then answers in the assistant role.",
      "modelOutput": "Five short bullets on photosynthesis in a calm tutor tone—no long intro, because the system role asked for that style."
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
        "prompt": "Why shouldn’t you treat a system prompt as perfect security?",
        "options": [
          {
            "id": "o0",
            "text": "Because users can often override or ignore it"
          },
          {
            "id": "o1",
            "text": "Because system prompts only work offline"
          },
          {
            "id": "o2",
            "text": "Because assistant messages delete system rules"
          },
          {
            "id": "o3",
            "text": "Because system prompts are never read"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "System text steers behavior but is not a hard sandbox."
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
    "laymanSummary": "Zero-shot means you give only instructions. One-shot and few-shot add example input→output pairs so ChatGPT copies the pattern—handy for format and style without retraining.",
    "analogy": "The teacher solves one homework problem on the board, then asks you to do the next one the same way.",
    "explanation": [
      "Zero-shot: describe the task; give no examples.",
      "One-shot / few-shot: paste correct demos, then ask for a new case.",
      "Good examples teach labels, tone, and output shape quickly.",
      "Too many or conflicting examples waste space and confuse the pattern."
    ],
    "keyTerms": [
      {
        "term": "Zero-shot",
        "definition": "Task with instructions only, no examples"
      },
      {
        "term": "Few-shot",
        "definition": "Several examples shown in the prompt"
      },
      {
        "term": "In-context learning",
        "definition": "Learning the pattern from prompt demos"
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
      "title": "Club email triage labels",
      "story": "Your event club pastes three labeled emails—billing, venue, volunteer—then asks ChatGPT to label a new message. The model mirrors those labels instead of inventing random categories.",
      "takeaway": "A few clean examples teach the taxonomy faster than a long rule essay."
    },
    "chatGptLens": {
      "setting": "You’re sorting internship emails in ChatGPT.",
      "userInput": "Label each email as Interview / Offer / Reject / Other.\nExample: “Please join us Tuesday at 3pm” → Interview\nExample: “We regret to inform you…” → Reject\nNow label: “Congratulations, we’d like to extend an offer.”",
      "insideTheModel": "Few-shot demos show the exact label style. ChatGPT matches that pattern for the new email instead of guessing free-form categories.",
      "modelOutput": "Offer"
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
        "prompt": "What usually happens if your few-shot examples are wrong or conflicting?",
        "options": [
          {
            "id": "o0",
            "text": "The model still invents a perfect taxonomy"
          },
          {
            "id": "o1",
            "text": "The model learns the wrong pattern"
          },
          {
            "id": "o2",
            "text": "Examples are ignored automatically"
          },
          {
            "id": "o3",
            "text": "The chat becomes free forever"
          }
        ],
        "correctOptionId": "o1",
        "explanation": "Demos teach—good or bad."
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
    "laymanSummary": "Chain-of-Thought asks ChatGPT to “show its work” in steps before the final answer. That often helps on multi-step problems, but neat-looking steps can still be wrong—so always check the math.",
    "analogy": "Show your work on a math quiz: the middle lines help catch arithmetic slips.",
    "explanation": [
      "Ask for step-by-step reasoning, then a clear final answer.",
      "Most useful when the task needs several linked steps.",
      "Steps improve odds—they do not guarantee truth.",
      "You can pair CoT with voting or tools for harder tasks."
    ],
    "keyTerms": [
      {
        "term": "Chain of Thought",
        "definition": "Step-by-step reasoning before the answer"
      },
      {
        "term": "Final answer",
        "definition": "The concluded result after the steps"
      },
      {
        "term": "Scratchpad",
        "definition": "Working space where steps are written"
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
      "title": "Physics homework helper",
      "story": "A student asks ChatGPT to convert 72 km/h to m/s. With “think step by step,” it writes the unit factor, multiplies, then boxes 20 m/s. The student can spot a missed factor if a step looks off.",
      "takeaway": "Visible steps make checking easier than a bare number."
    },
    "chatGptLens": {
      "setting": "You’re stuck on a word problem in ChatGPT.",
      "userInput": "A shop sells 12 pens for ₹180. How much for 5 pens? Think step by step, then give the final amount.",
      "insideTheModel": "Chain-of-Thought nudges the model to write intermediate math (unit price, then multiply) instead of jumping straight to a guess.",
      "modelOutput": "Step 1: ₹180 ÷ 12 = ₹15 per pen. Step 2: 5 × ₹15 = ₹75. Final answer: ₹75."
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
        "prompt": "When does Chain-of-Thought help the most?",
        "options": [
          {
            "id": "o0",
            "text": "When the task needs several linked steps"
          },
          {
            "id": "o1",
            "text": "When you only need to copy one word"
          },
          {
            "id": "o2",
            "text": "When you want shorter prompts always"
          },
          {
            "id": "o3",
            "text": "When the answer must stay hidden forever"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Multi-step reasoning benefits most."
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
    "laymanSummary": "Self-consistency means sampling several step-by-step solutions and picking the answer that shows up most often. When one reasoning path is fragile, a majority vote is often safer than trusting a single try.",
    "analogy": "Ask three classmates to solve the same problem alone, then trust the answer they agree on.",
    "explanation": [
      "Run the same question multiple times with varied reasoning.",
      "Collect each run’s final answer.",
      "Choose the majority (or most consistent) answer.",
      "It costs more tokens, but helps when single traces slip."
    ],
    "keyTerms": [
      {
        "term": "Self-consistency",
        "definition": "Vote across several sampled solutions"
      },
      {
        "term": "Diversity",
        "definition": "Different reasoning paths to try"
      },
      {
        "term": "Majority vote",
        "definition": "Pick the most common final answer"
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
      "title": "Contest math double-check",
      "story": "Before a quiz, you ask ChatGPT the same combinatorics problem five times with “think step by step.” Four runs say 120; one says 60. You keep 120—the consensus—and re-check the odd path later.",
      "takeaway": "Extra samples buy reliability when one chain can slip."
    },
    "chatGptLens": {
      "setting": "You’re verifying a tricky arithmetic answer with ChatGPT (or an API that can sample multiple times).",
      "userInput": "A class has 8 students. How many ways to pick a president and vice-president (order matters)? Solve step by step. Final answer as a number.",
      "insideTheModel": "Self-consistency samples several CoT paths (e.g. 8×7 vs mistaken 8×8). Your app (or you) compares final numbers and keeps the majority.",
      "modelOutput": "Runs: 56, 56, 64, 56 → consensus answer: 56"
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
        "prompt": "When is self-consistency most useful?",
        "options": [
          {
            "id": "o0",
            "text": "When a single reasoning path often slips"
          },
          {
            "id": "o1",
            "text": "When you need the cheapest possible reply"
          },
          {
            "id": "o2",
            "text": "When the task is pure copy-paste"
          },
          {
            "id": "o3",
            "text": "When you refuse to read the answer"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Voting helps brittle multi-step reasoning."
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
    "laymanSummary": "Tree of Thoughts tries several partial ideas, scores them, and deepens the promising branches—like search, not one straight chain. It can help hard planning tasks, but it costs more time and tokens.",
    "analogy": "A chess player considers a few move trees, drops weak lines, and thinks deeper on the strong ones.",
    "explanation": [
      "Propose several next “thoughts” (options) at each step.",
      "Score or critique those branches.",
      "Expand the best ones and prune weak paths.",
      "Heavier than plain chain-of-thought—use when planning matters."
    ],
    "keyTerms": [
      {
        "term": "Branch",
        "definition": "One alternative partial solution path"
      },
      {
        "term": "Evaluation",
        "definition": "Scoring how good a partial thought is"
      },
      {
        "term": "Search",
        "definition": "Exploring a tree of options on purpose"
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
      "title": "Weekend trip planner",
      "story": "You ask ChatGPT for a 2-day Goa plan under ₹8,000. Instead of one locked itinerary, you have it propose three Day-1 options, rate cost/fun, then expand only the top two into Day-2. Weak beach-only plans get pruned early.",
      "takeaway": "Branching + scoring beats one linear guess on planning puzzles."
    },
    "chatGptLens": {
      "setting": "You’re planning a weekend with ChatGPT using a tree-style prompt.",
      "userInput": "I have ₹500 and 3 hours in the city. List 3 plan options. Score each 1–5 for fun and cost. Expand the best two into hour-by-hour schedules.",
      "insideTheModel": "Tree of Thoughts keeps multiple partial plans alive, scores them, deepens winners, and drops weak branches—more like search than one chain.",
      "modelOutput": "Options A/B/C with scores → expand A and B into hour schedules; drop C (over budget)."
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
        "prompt": "In Tree of Thoughts, what does pruning mean?",
        "options": [
          {
            "id": "o0",
            "text": "Dropping weak branches so you don’t expand them"
          },
          {
            "id": "o1",
            "text": "Deleting the model weights"
          },
          {
            "id": "o2",
            "text": "Hiding the user’s question"
          },
          {
            "id": "o3",
            "text": "Turning every answer into JSON"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Cut weak lines early."
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
    "laymanSummary": "ReAct prompting mixes thinking with tool use: Thought → Action → Observation, then repeat. ChatGPT plans, calls a tool, reads the result, and only then answers—so facts come from tools, not guesses.",
    "analogy": "A lab notebook: hypothesize, run the experiment, write what you saw, then decide the next step.",
    "explanation": [
      "Thought: decide what info you still need.",
      "Action: call a tool (search, calculator, API).",
      "Observation: read the tool result and continue.",
      "Loop until you can answer from real observations."
    ],
    "keyTerms": [
      {
        "term": "Thought",
        "definition": "Short plan for the next step"
      },
      {
        "term": "Action",
        "definition": "A tool or API call to run"
      },
      {
        "term": "Observation",
        "definition": "The tool’s result fed back in"
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
      "title": "Weather then outfit advice",
      "story": "You ask what to wear for an evening cricket match. Thought: need today’s temperature. Action: weather API. Observation: 34°C and humid. Final advice: light cotton, water bottle—not a random winter outfit from memory.",
      "takeaway": "Tools ground the loop so answers track real data."
    },
    "chatGptLens": {
      "setting": "You’re using ChatGPT with browsing or a calculator tool enabled.",
      "userInput": "What’s 17% of ₹2,450, and is that under my ₹400 snack budget?",
      "insideTheModel": "ReAct style: Thought (need exact math) → Action (calculator) → Observation (416.5) → final yes/no using that number, not a mental guess.",
      "modelOutput": "Thought: compute 0.17×2450. Action: calculator. Observation: 416.5. Answer: ₹416.50 — over a ₹400 budget by ₹16.50."
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
        "prompt": "What should the model do with an Observation?",
        "options": [
          {
            "id": "o0",
            "text": "Use the tool result in the next thought or answer"
          },
          {
            "id": "o1",
            "text": "Ignore it and invent a nicer number"
          },
          {
            "id": "o2",
            "text": "Delete the user’s question"
          },
          {
            "id": "o3",
            "text": "Stop calling tools forever after one thought"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Observations ground the next step."
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
    "laymanSummary": "Prompt chaining splits a big job into stages—extract, draft, check, format—where each ChatGPT reply feeds the next prompt. Smaller steps are easier to test and fix than one mega-prompt.",
    "analogy": "An assembly line: cut, assemble, paint, inspect—not one chaotic “do everything at once” moment.",
    "explanation": [
      "Break the workflow into clear stages with one job each.",
      "Pass a clean intermediate output into the next prompt.",
      "Validate between steps so bad drafts don’t silently continue.",
      "Easier to debug and reuse than one giant prompt."
    ],
    "keyTerms": [
      {
        "term": "Chain",
        "definition": "A sequence of staged prompts"
      },
      {
        "term": "Intermediate artifact",
        "definition": "Output passed to the next step"
      },
      {
        "term": "Validator step",
        "definition": "A check before continuing the chain"
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
      "title": "Lab report from messy notes",
      "story": "Prompt 1 extracts facts from your lab scribbles. Prompt 2 drafts Methods and Results from that list. Prompt 3 checks units and missing steps. Prompt 4 formats the final report. Fixing a bad extract is easier than redoing one huge blob.",
      "takeaway": "Chains mirror real document workflows and fail in smaller pieces."
    },
    "chatGptLens": {
      "setting": "You’re turning lecture notes into a clean summary with ChatGPT in stages.",
      "userInput": "Step 1 only: list 8 key facts from these notes (no essay). [paste notes]",
      "insideTheModel": "Prompt chaining: this first call only extracts. You’ll paste that fact list into a second prompt to draft, then a third to check clarity—each stage has one job.",
      "modelOutput": "1) … 2) … (eight facts). Next you send: “Using only these facts, write a 150-word summary.”"
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
        "prompt": "What should pass between chain steps?",
        "options": [
          {
            "id": "o0",
            "text": "A clear, checked intermediate output"
          },
          {
            "id": "o1",
            "text": "Random unrelated text"
          },
          {
            "id": "o2",
            "text": "Nothing—each step must start from zero"
          },
          {
            "id": "o3",
            "text": "Only emojis with no facts"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Clean contracts between stages."
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
    "laymanSummary": "Structured outputs make ChatGPT reply in JSON or another fixed shape your code can parse. A clear schema plus validation turns chat text into something an app can trust.",
    "analogy": "Fill a labeled form instead of writing a free essay your spreadsheet can’t import.",
    "explanation": [
      "Give an exact schema or template (fields and types).",
      "Ask for schema-only output—no extra chatter.",
      "Validate the reply; retry or repair if it breaks.",
      "Keep schemas small and explicit so compliance stays easy."
    ],
    "keyTerms": [
      {
        "term": "Schema",
        "definition": "The expected fields and types"
      },
      {
        "term": "Constrained decoding",
        "definition": "Forcing tokens to stay schema-valid"
      },
      {
        "term": "Validation",
        "definition": "Checking output against the schema"
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
      "title": "Receipt → expense app",
      "story": "You photograph a café bill and ask ChatGPT for JSON with vendor, date, and total. Your expense sheet imports those fields automatically. A paragraph reply would force messy copy-paste.",
      "takeaway": "Structure is the bridge between LLMs and programs."
    },
    "chatGptLens": {
      "setting": "You’re feeding ChatGPT output into a spreadsheet or small script.",
      "userInput": "From this receipt text, return ONLY JSON: {\"vendor\": string, \"date\": \"YYYY-MM-DD\", \"total\": number}. No markdown.",
      "insideTheModel": "Structured-output instructions pin the reply shape. The model fills schema fields instead of writing a friendly paragraph your parser can’t read.",
      "modelOutput": "{\"vendor\":\"Campus Café\",\"date\":\"2026-03-12\",\"total\":240}"
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
        "prompt": "What should you do if the model returns invalid JSON?",
        "options": [
          {
            "id": "o0",
            "text": "Validate, then retry or repair"
          },
          {
            "id": "o1",
            "text": "Trust it and hope the app works"
          },
          {
            "id": "o2",
            "text": "Delete the schema forever"
          },
          {
            "id": "o3",
            "text": "Ask for longer prose instead"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Validate and recover."
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
    "laymanSummary": "Role prompting sets a persona (tutor, reviewer, coach). Constraints are the hard rules—length, banned topics, must-cite facts. Style is nice; testable constraints keep the answer safe and useful.",
    "analogy": "Costume plus safety rules: the costume sets the vibe; the rules keep the show legal.",
    "explanation": [
      "Persona shapes tone and framing (how it talks).",
      "Constraints state non-negotiables (what it must / must not do).",
      "Write rules you can check: word limits, formats, bans.",
      "If style and safety clash, safety should win."
    ],
    "keyTerms": [
      {
        "term": "Persona",
        "definition": "The role or speaking style to use"
      },
      {
        "term": "Constraint",
        "definition": "A hard must / must-not rule"
      },
      {
        "term": "Priority",
        "definition": "Which rule wins when they conflict"
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
      "title": "Exam-safe tutoring bot",
      "story": "You set ChatGPT as a patient tutor but add: “Never paste full exam answers; give hints and one worked similar example.” When a friend asks for tomorrow’s quiz key, the bot refuses the dump and teaches the method instead.",
      "takeaway": "Constraints protect integrity better than a cute persona alone."
    },
    "chatGptLens": {
      "setting": "You’re configuring ChatGPT as a writing coach with hard limits.",
      "userInput": "You are a concise career coach. Constraints: max 120 words; no fake company names; end with one action item. Critique my internship email: [paste].",
      "insideTheModel": "Persona sets coach tone; constraints cap length and ban invented companies. Those rules steer the reply more than “be helpful” alone.",
      "modelOutput": "Short critique under 120 words, real advice only, one clear next action—no invented “Acme Corp” offers."
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
        "prompt": "If a fun persona conflicts with a safety constraint, what should win?",
        "options": [
          {
            "id": "o0",
            "text": "The safety constraint"
          },
          {
            "id": "o1",
            "text": "The persona, always"
          },
          {
            "id": "o2",
            "text": "Whichever is funnier"
          },
          {
            "id": "o3",
            "text": "Neither—stop answering"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Prioritize safety over style."
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
    "laymanSummary": "Context engineering means carefully choosing what ChatGPT sees: rules, docs, chat history, and tools. The whole window is the product—not just one clever sentence.",
    "analogy": "Packing a backpack for a hike: bring the map and snacks that matter; leave the encyclopedias at home.",
    "explanation": [
      "Pick high-value tokens; drop noise that crowds the window.",
      "Order matters—put critical rules where they’re easy to follow.",
      "Summarize old chat; retrieve only the facts you need now.",
      "Test by removing pieces (ablations) to see what actually helps."
    ],
    "keyTerms": [
      {
        "term": "Context budget",
        "definition": "Limited token space the model can see"
      },
      {
        "term": "Memory",
        "definition": "Saved state kept outside the raw chat"
      },
      {
        "term": "Ablation",
        "definition": "Removing a piece to test its impact"
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
      "title": "Coding help in the IDE",
      "story": "Your coding agent doesn’t paste the whole repo. It packs project rules, the open file, and a few retrieved snippets that match your bug. Extra unrelated folders stay out so the model focuses.",
      "takeaway": "Curating the window beats fancy wording alone."
    },
    "chatGptLens": {
      "setting": "You’re pasting course material into ChatGPT for exam revision.",
      "userInput": "Using ONLY the notes below, quiz me on 5 MCQs. Notes: [2 pages of OS scheduling]. Ignore anything not in the notes.",
      "insideTheModel": "Context engineering: you chose which notes enter the window and told the model to stay inside that budget—so answers track your syllabus, not the whole internet.",
      "modelOutput": "Five MCQs grounded in those notes (e.g. round-robin vs priority)—not random OS trivia from elsewhere."
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
        "prompt": "Why summarize long chat history before a new task?",
        "options": [
          {
            "id": "o0",
            "text": "To compress old detail and free context space"
          },
          {
            "id": "o1",
            "text": "To delete the model permanently"
          },
          {
            "id": "o2",
            "text": "To ban all tools forever"
          },
          {
            "id": "o3",
            "text": "To make every reply longer on purpose"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Summaries free budget for what matters now."
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
    "laymanSummary": "Prompts fail when they’re vague, contradictory, cluttered, or untested. Treat them like code: make success measurable, version them, and re-check after model updates.",
    "analogy": "Vague homework (“make it nice”) that five students interpret five different ways.",
    "explanation": [
      "Ambiguity makes outputs swing wildly between runs.",
      "Conflicting rules create unstable or random-looking behavior.",
      "Without tests, breakage stays invisible until users complain.",
      "A new model version can break prompts that used to work."
    ],
    "keyTerms": [
      {
        "term": "Ambiguity",
        "definition": "Unclear what “good” output means"
      },
      {
        "term": "Instruction conflict",
        "definition": "Two rules that disagree"
      },
      {
        "term": "Prompt regression",
        "definition": "An old prompt fails on a new model"
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
      "title": "Fest promo email generator",
      "story": "“Make it pop” gave wild, unusable drafts. After you specified audience (first-years), length (80 words), and one CTA (“Register by Friday”), quality stabilized across runs.",
      "takeaway": "Measurable constraints beat vague adjectives."
    },
    "chatGptLens": {
      "setting": "You’re drafting a club announcement and the first prompt failed.",
      "userInput": "Bad version: “Write a cool email that pops.” Better: “80 words, audience first-years, one CTA: Register by Friday, friendly tone, no emojis.”",
      "insideTheModel": "Failure modes: vague adjectives invite random style. Clear length, audience, and CTA shrink variance so replies match what you can ship.",
      "modelOutput": "A steady ~80-word email with one Friday registration CTA—not a chaotic hype essay."
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
        "prompt": "Why re-test prompts after a model upgrade?",
        "options": [
          {
            "id": "o0",
            "text": "Old assumptions can break on the new model"
          },
          {
            "id": "o1",
            "text": "Upgrades never change model behavior"
          },
          {
            "id": "o2",
            "text": "JSON becomes illegal after upgrades"
          },
          {
            "id": "o3",
            "text": "Evals are banned on new models"
          }
        ],
        "correctOptionId": "o0",
        "explanation": "Prompt regressions are real."
      }
    ],
    "prevConceptId": "context-engineering"
  }
] as Concept[];
