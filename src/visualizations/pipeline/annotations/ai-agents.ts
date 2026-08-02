import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  'ai-agent': {
    subject: 'the goal "Book a refund for order 9182"',
    stages: {
      'ag-1': {
        name: 'Chatbot call',
        op: 'answer the message in one completion that touches nothing outside',
        out: 'reply text, zero side effects',
        in: 'the user message asking for a refund',
      },
      'ag-2': {
        name: 'Agent runtime',
        op: 'wrap the same model in a loop that can call tools and write state',
        out: 'orders.get("9182") → delivered, 30d',
      },
      'ag-3': {
        name: 'Required pieces',
        op: 'name the three parts that loop needs: policy, tools, state',
        out: 'policy · tools · state',
      },
      'ag-4': {
        name: 'Runtime controls',
        op: 'bound the loop from outside the model with budgets and allowlists',
        out: 'max steps, allowlist, halt rule',
      },
    },
  },

  'agentic-vs-chatbot': {
    subject: 'the request "Refund my order 9182"',
    stages: {
      'av-1': {
        name: 'Chatbot boundary',
        op: 'take text in and return text out with no reach into other systems',
        out: 'advice text, side effects: none',
        in: 'the request "Refund my order 9182"',
      },
      'av-2': {
        name: 'Agent boundary',
        op: 'let the model pick tools that write to real systems',
        out: 'refund.create() ran, email sent',
      },
      'av-3': {
        name: 'Run length',
        op: 'compare one completion against a chain of tool observations',
        out: '1 chat turn vs 3 agent steps',
      },
      'av-4': {
        name: 'Fit check',
        op: 'pick the simpler system unless the work requires external writes',
        out: 'needs API writes → use an agent',
      },
    },
  },

  'plan-act-observe': {
    subject: 'the goal "Find the CEO of Acme"',
    stages: {
      'pa-1': {
        name: 'Plan',
        op: 'choose the next action from the goal and the current state',
        out: 'search["Acme Inc CEO 2024"]',
        in: 'the goal "Find the CEO of Acme"',
        loop: { group: 'cycle', iteration: 1, of: 2, label: 'control cycle' },
      },
      'pa-2': {
        name: 'Act',
        op: 'execute the parsed tool over HTTP; the model never runs it itself',
        out: 'search hit: "Maya Chen, CEO"',
        loop: { group: 'cycle', iteration: 1, of: 2, label: 'control cycle' },
      },
      'pa-3': {
        name: 'Observe',
        op: 'append the tool result to state so the next plan sees reality',
        out: 'scratchpad: CEO = Maya Chen, 1 step',
        loop: { group: 'cycle', iteration: 1, of: 2, label: 'control cycle' },
      },
      'pa-4': {
        name: 'Plan',
        op: 'decide whether the goal is met or another action is still needed',
        out: 'Final: Maya Chen is CEO of Acme',
        loop: { group: 'cycle', iteration: 2, of: 2, label: 'control cycle' },
      },
    },
  },

  'agent-state': {
    subject: 'the run state for the goal "process refund"',
    stages: {
      'as-1': {
        name: 'State schema',
        op: 'declare the typed fields the runtime owns between steps',
        out: 'messages, scratchpad, budget, status',
        in: 'a fresh run for the goal "process refund"',
      },
      'as-2': {
        name: 'State update',
        op: 'merge the tool result and bump only the fields it touches',
        out: 'messages 12, tool_calls_used 3 → 4',
      },
      'as-3': {
        name: 'Context projection',
        op: 'select the slice of state worth spending prompt tokens on',
        out: '3,600 of 8,000 tok, traces dropped',
      },
      'as-4': {
        name: 'Write guard',
        op: 'reject observations the runtime never received from a real tool',
        out: 'only runtime may append Observation',
      },
    },
  },

  planning: {
    subject: 'the goal "Refund order 9182 and email the customer"',
    stages: {
      'pl-1': {
        name: 'Open-loop planner',
        op: 'list every step up front, before any observation exists',
        out: 'plan · 4 steps, lookup → email',
        in: 'the goal "refund order 9182, then email"',
      },
      'pl-2': {
        name: 'Frozen plan check',
        op: 'run the frozen list against what the world actually returns',
        out: 'status=refunded, step 3 double-refunds',
      },
      'pl-3': {
        name: 'Closed-loop planner',
        op: 're-plan from the newest observation instead of the stale list',
        out: 'skip create_refund, notify user only',
      },
      'pl-4': {
        name: 'Hybrid pattern',
        op: 'show a coarse plan but execute one gated step at a time',
        out: '3–5 bullet plan, step-wise exec',
      },
    },
  },

  memory: {
    subject: 'the fact "this user prefers email"',
    stages: {
      'mm-1': {
        name: 'Working memory',
        op: 'hold recent turns and the scratchpad inside this run’s window',
        out: '6,100 of 8,000 tok, 12k dropped',
        in: 'this run’s messages and scratchpad',
      },
      'mm-2': {
        name: 'Long-term store',
        op: 'upsert the extracted fact, then retrieve it in a later session',
        out: 'user_id → prefers email, re-injected',
      },
      'mm-3': {
        name: 'Memory kinds',
        op: 'sort durable memories into episodic, semantic, and procedural',
        out: 'episodic · semantic · procedural',
      },
      'mm-4': {
        name: 'Memory bugs',
        op: 'name what breaks when writes and reads go unchecked',
        out: 'guessed fact, cross-tenant, stale',
      },
    },
  },

  'tools-tool-calling': {
    subject: 'the tool call refund.create for order 9182',
    stages: {
      'tt-1': {
        name: 'Tool catalogue',
        op: 'expose each tool as a name plus a JSON Schema for its arguments',
        out: 'refund.create(order_id, amount, reason)',
        in: 'the tools your runtime is willing to run',
      },
      'tt-2': {
        name: 'Call validator',
        op: 'check the model’s proposed args against schema and caller authz',
        out: '{"order_id":"9182","amount_cents":4200}',
      },
      'tt-3': {
        name: 'Tool runtime',
        op: 'call the real API and append a tool result message for the model',
        out: '{"ok":true,"refund_id":"r_9"}',
      },
      'tt-4': {
        name: 'Policy gate',
        op: 'count what the gates stopped before anything reached the network',
        out: '180 ran, 24 schema, 11 policy reject',
      },
    },
  },

  'react-agents': {
    subject: 'the task "Refund order 9182 if it is eligible"',
    stages: {
      'ra-1': {
        name: 'Trace format',
        op: 'reserve Thought/Action for the model, Observation for the runtime',
        out: 'Action: orders.get[9182]',
        in: 'the task "Refund order 9182 if eligible"',
      },
      'ra-2': {
        name: 'ReAct cycle',
        op: 'run the parsed action as a real tool, then append the observation',
        out: 'delivered, day 12 of 30',
        loop: { group: 'react', iteration: 1, of: 2, label: 'ReAct turn' },
      },
      'ra-3': {
        name: 'ReAct cycle',
        op: 'think from the observation, act again, or stop with a final answer',
        out: 'refund_id r_9 · Refunded ₹4,200',
        loop: { group: 'react', iteration: 2, of: 2, label: 'ReAct turn' },
      },
      'ra-4': {
        name: 'Runtime guard',
        op: 'enforce stop sequence, cycle cap, allowlist, and authenticity',
        out: 'stop seq, max cycles, allowlist',
      },
    },
  },

  'multi-agent': {
    subject: 'the request "Write a sourced answer on refunds"',
    stages: {
      'ma-1': {
        name: 'Role split',
        op: 'give each policy its own prompt, tools, and output contract',
        out: 'researcher · writer · critic',
        in: 'the request "write a sourced answer"',
      },
      'ma-2': {
        name: 'Handoff protocol',
        op: 'pass structured artifacts between agents, not one shared context',
        out: 'evidence.json → draft.md → revised',
      },
      'ma-3': {
        name: 'Debate cost',
        op: 'count model calls when no termination rule stops the exchange',
        out: '4 → 12 → 40 calls at timeout',
      },
      'ma-4': {
        name: 'Split decision',
        op: 'split only when permissions differ or subtasks run in parallel',
        out: 'split: different tool permissions',
      },
    },
  },

  'supervisor-pattern': {
    subject: 'the goal "Explain invoice INV-22"',
    stages: {
      'sp-1': {
        name: 'Supervisor',
        op: 'read the goal and pick which worker owns the next piece',
        out: 'route → billing worker',
        in: 'the goal "Explain invoice INV-22"',
        loop: { group: 'route', iteration: 1, of: 2, label: 'routing pass' },
      },
      'sp-2': {
        name: 'Worker',
        op: 'run a scoped prompt with that worker’s tools and return JSON',
        out: '{ summary, line_items, citations[] }',
        loop: { group: 'route', iteration: 1, of: 2, label: 'routing pass' },
      },
      'sp-3': {
        name: 'Supervisor',
        op: 'aggregate the worker result, route again, or answer the user',
        out: 'route → policy, then final answer',
        loop: { group: 'route', iteration: 2, of: 2, label: 'routing pass' },
      },
      'sp-4': {
        name: 'Route eval',
        op: 'score routing decisions against a labeled set of goals',
        out: '86% correct, 9% wrong worker',
      },
    },
  },

  guardrails: {
    subject: 'the request "Refund $480 to order 9182"',
    stages: {
      'gd-1': {
        name: 'Input gate',
        op: 'redact PII and refuse injection patterns before the model reads',
        out: 'clean user text, injection stripped',
        in: 'raw user text, possibly hostile',
      },
      'gd-2': {
        name: 'Tool gate',
        op: 'check the tool against the allowlist and bound its arguments',
        out: 'allowlist ok, ≤50000c, human > 10000',
      },
      'gd-3': {
        name: 'Output gate',
        op: 'scan the drafted answer for secrets and required citations',
        out: 'blocked: API key pattern → redact',
      },
      'gd-4': {
        name: 'Defence layers',
        op: 'stack independent gates so one failure alone cannot reach the user',
        out: 'prompt policy + tool gate + scanner',
      },
    },
  },

  'mcp-conceptual': {
    subject: 'a filesystem tool exposed to an IDE agent',
    stages: {
      'mcp-1': {
        name: 'Custom glue',
        op: 'wire each tool to each runtime with its own schema and transport',
        out: 'N×M brittle integrations',
        in: 'N tools and M agent runtimes',
      },
      'mcp-2': {
        name: 'MCP session',
        op: 'connect the host to a server that advertises tools and resources',
        out: 'host ↔ server session open',
      },
      'mcp-3': {
        name: 'Discover + call',
        op: 'list the server’s tools, show schemas, then invoke the chosen one',
        out: 'tools/list → tools/call',
      },
      'mcp-4': {
        name: 'Host policy',
        op: 'keep consent, enabling, and rate limits in the host, not the server',
        out: 'enabled servers, consent, limits',
      },
    },
  },

  hitl: {
    subject: 'the proposed refund of $480 on order 9182',
    stages: {
      'ht-1': {
        name: 'Approval gate',
        op: 'pause the run when the proposed amount crosses the threshold',
        out: 'status=waiting_human, refund.create',
        in: 'refund.create $480 proposed by the policy',
      },
      'ht-2': {
        name: 'Reviewer UI',
        op: 'show the proposed call, its evidence, and its consequences',
        out: 'card: $480, within 30-day window',
        in: 'the paused run and its pending call',
        lane: 'human',
      },
      'ht-3': {
        name: 'Decision',
        op: 'record approve, edit, or reject as a signed entry in state',
        out: 'approved → execute refund.create',
        lane: 'human',
      },
      'ht-4': {
        name: 'Resume path',
        op: 'checkpoint and notify, then resume on the webhook instead of waiting',
        out: 'worker resumes from checkpoint',
        in: 'the signed decision: approved',
      },
    },
  },

  checkpointing: {
    subject: 'a refund run that crashes after tool 2',
    stages: {
      'cp-1': {
        name: 'Volatile run',
        op: 'keep state in RAM only, so a crash erases what already happened',
        out: 'crash after refund.create, state lost',
        in: 'a run doing orders.get then refund.create',
      },
      'cp-2': {
        name: 'Checkpoint write',
        op: 'persist state and the last completed node before the next risk',
        out: 'snapshot saved, cursor=observe',
      },
      'cp-3': {
        name: 'Resume',
        op: 'load the snapshot and skip tools already recorded as done',
        out: 'cursor=email.notify, refund r_9 kept',
      },
      'cp-4': {
        name: 'Snapshot policy',
        op: 'store enough to rebuild the prompt without re-firing side effects',
        out: 'state, cursor, idempotency keys',
      },
    },
  },

  'agent-failure-modes': {
    subject: 'a run for the goal "Refund order 9182"',
    stages: {
      'af-1': {
        name: 'Loop detector',
        op: 'hash each tool signature and count identical repeats',
        out: 'search["Acme CEO"] ×8, should halt',
        in: 'the agent’s stream of tool calls',
      },
      'af-2': {
        name: 'Policy cap',
        op: 'reject arguments that pass schema but break business limits',
        out: 'refund.create 5,000,000c blocked',
      },
      'af-3': {
        name: 'Observation source',
        op: 'accept Observation text only from a real tool response',
        out: 'runtime-authored tool message',
      },
      'af-4': {
        name: 'Goal pin',
        op: 'compare each step against the goal string pinned in state',
        out: 'step 6 off-goal → goal re-pinned',
      },
    },
  },
};
