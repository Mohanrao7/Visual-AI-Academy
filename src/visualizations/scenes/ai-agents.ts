import type { SceneMap } from './types';

export const scenes: SceneMap = {
  'ai-agent': {
    title: 'What an AI agent is',
    description: 'An LLM plus tools, state, and a control loop — not a chat box that “feels autonomous.”',
    legend: [
      { tone: 'accent', label: 'model' },
      { tone: 'active', label: 'tools' },
      { tone: 'good', label: 'state / memory' },
    ],
    mathNote:
      'The model still only samples tokens. Agency is an outer loop: observe → decide (often as structured tool calls) → act in the world → write results back into context. Without tools and a halt/budget policy, “agent” is just a longer prompt.',
    steps: [
      {
        id: 'ag-1',
        caption:
          'Chatbot — one request, one completion, no side effects. The world outside the API call is untouched.',
        frame: {
          kind: 'flow',
          heading: 'Plain chat',
          stages: [
            { label: 'User message' },
            { label: 'LLM completion', tone: 'accent' },
            { label: 'Reply text', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'ag-2',
        caption:
          'Agent — the same LLM sits inside a loop that can call tools and update durable state before answering.',
        frame: {
          kind: 'loop',
          heading: 'Minimal agent runtime',
          nodes: [
            { id: 'goal', label: 'Goal' },
            { id: 'plan', label: 'Decide' },
            { id: 'act', label: 'Tool' },
            { id: 'obs', label: 'Observe' },
          ],
          activeId: 'act',
          log: [
            { role: 'Goal', text: 'Book a refund for order 9182', tone: 'accent' },
            { role: 'Action', text: 'orders.get("9182")', tone: 'active' },
            { role: 'Observation', text: '{ status: "delivered", window_days: 30 }', tone: 'good' },
          ],
        },
      },
      {
        id: 'ag-3',
        caption:
          'Three ingredients — policy (LLM), tools (APIs), state (what happened so far). Remove any one and you are back to a chatbot or a script.',
        frame: {
          kind: 'panels',
          heading: 'Required pieces',
          panels: [
            { title: 'Policy', body: 'LLM chooses next action from context.', tone: 'accent' },
            { title: 'Tools', body: 'Typed functions with real side effects.', tone: 'active' },
            { title: 'State', body: 'Scratchpad, memory, and run metadata.', tone: 'good' },
          ],
        },
      },
      {
        id: 'ag-4',
        caption:
          'Hard constraints live outside the model — budgets, allowlists, and human gates. Autonomy without them is an incident.',
        callout: 'Call it an agent only when the runtime can act and can be stopped.',
        frame: {
          kind: 'ranking',
          heading: 'Runtime controls',
          columns: [
            {
              title: 'Must exist',
              items: [
                { label: 'Max steps / max tool calls', tone: 'good' },
                { label: 'Tool allowlist + auth', tone: 'good' },
                { label: 'Halt on Final Answer / failure', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'agentic-vs-chatbot': {
    title: 'Agentic systems vs chatbots',
    description: 'Side effects, multi-step control, and durable state — the practical differences that matter in production.',
    legend: [
      { tone: 'muted', label: 'chatbot' },
      { tone: 'good', label: 'agent' },
    ],
    mathNote:
      'Both call an LLM. The distinction is operational: agents may mutate external systems and continue across multiple model calls with accumulated observations. Product risk scales with those side effects, not with how “smart” the wording sounds.',
    steps: [
      {
        id: 'av-1',
        caption:
          'Chatbot boundary — text in, text out. Advice can be wrong, but it cannot refund money by itself.',
        frame: {
          kind: 'panels',
          heading: 'Chatbot',
          panels: [
            { title: 'I/O', body: 'Messages only.', tone: 'muted' },
            { title: 'Side effects', body: 'None (unless a human copies the answer into another system).', tone: 'muted' },
          ],
        },
      },
      {
        id: 'av-2',
        caption:
          'Agent boundary — tools can charge cards, send email, or delete rows. The blast radius is the tool surface.',
        frame: {
          kind: 'flow',
          heading: 'Agent with side effects',
          stages: [
            { label: 'User goal', tone: 'accent' },
            { label: 'LLM decides', tone: 'accent' },
            { label: 'refund.create()', tone: 'bad' },
            { label: 'Email sent', tone: 'warn' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'av-3',
        caption:
          'Multi-step — agents chain observations across calls; chatbots usually reset or only append chat turns without tool results.',
        frame: {
          kind: 'timeline',
          heading: 'One agent run vs one chat turn',
          events: [
            { label: 'Chat turn', detail: 'single completion', tone: 'muted', marker: 'step' },
            { label: 'Agent step 1', detail: 'lookup order', tone: 'good', marker: 'step' },
            { label: 'Agent step 2', detail: 'check policy', tone: 'good', marker: 'step' },
            { label: 'Agent step 3', detail: 'create refund', tone: 'good', marker: 'done' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'av-4',
        caption:
          'Choose deliberately — if you only need wording help, a chatbot is simpler and safer. Agents earn their complexity when work requires tools.',
        callout: 'Do not ship agent tooling for a FAQ that a RAG chatbot already solves.',
        frame: {
          kind: 'ranking',
          heading: 'Fit check',
          columns: [
            {
              title: 'Use a chatbot',
              items: [
                { label: 'Explain / draft / summarize', tone: 'muted' },
                { label: 'No external writes', tone: 'muted' },
              ],
            },
            {
              title: 'Use an agent',
              items: [
                { label: 'Must call APIs / browsers / DBs', tone: 'good' },
                { label: 'Needs branching over observations', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'plan-act-observe': {
    title: 'Plan → Act → Observe',
    description: 'The basic control cycle: propose what to do, do it, read the result, repeat until done.',
    legend: [
      { tone: 'accent', label: 'plan' },
      { tone: 'active', label: 'act' },
      { tone: 'good', label: 'observe' },
    ],
    mathNote:
      'This is a POMDP-style loop in engineering clothes: the LLM approximates a policy π(action | state), tools implement the transition, and observations update the state. ReAct is one textual encoding of the same cycle.',
    steps: [
      {
        id: 'pa-1',
        caption:
          'Plan — given the goal and current state, choose the next action (often a tool name + arguments).',
        frame: {
          kind: 'panels',
          heading: 'Planning step',
          panels: [
            { title: 'State', body: 'Goal: find CEO of Acme. Scratchpad empty.', tone: 'good' },
            { title: 'Plan', body: 'Call search with query “Acme Inc CEO 2024”.', tone: 'accent' },
          ],
        },
      },
      {
        id: 'pa-2',
        caption:
          'Act — the runtime executes the planned tool. The model does not run the tool; your code does.',
        frame: {
          kind: 'flow',
          heading: 'Action execution',
          stages: [
            { label: 'Parsed action', detail: 'search[...]', tone: 'accent' },
            { label: 'Runtime', detail: 'HTTP / RPC', tone: 'active' },
            { label: 'Tool result', detail: 'raw payload', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'pa-3',
        caption:
          'Observe — append the tool result to state/context so the next plan sees reality, not a guess.',
        frame: {
          kind: 'timeline',
          heading: 'State after observation',
          events: [
            { label: 'Plan', detail: 'search CEO', tone: 'accent', marker: 'step' },
            { label: 'Act', detail: 'search API', tone: 'active', marker: 'step' },
            { label: 'Observe', detail: '"Maya Chen, CEO"', tone: 'good', marker: 'step' },
          ],
          activeIndex: 2,
          state: [
            { key: 'scratchpad', value: 'CEO = Maya Chen', changed: true },
            { key: 'steps used', value: '1' },
          ],
        },
      },
      {
        id: 'pa-4',
        caption:
          'Repeat or halt — either plan another act, or emit a final answer when the goal is met or the budget is exhausted.',
        callout: 'Every cycle costs tokens and wall time. Cap steps explicitly.',
        frame: {
          kind: 'loop',
          heading: 'Cycle',
          nodes: [
            { id: 'plan', label: 'Plan' },
            { id: 'act', label: 'Act' },
            { id: 'obs', label: 'Observe' },
          ],
          activeId: 'plan',
          iteration: 'step 2 → Final Answer',
          log: [
            { role: 'Plan', text: 'Enough evidence — stop tools.', tone: 'accent' },
            { role: 'Final', text: 'Maya Chen is CEO of Acme.', tone: 'good' },
          ],
        },
      },
    ],
  },

  'agent-state': {
    title: 'Agent state',
    description: 'What the runtime remembers between steps — messages, scratchpad, tool results, and control flags.',
    legend: [
      { tone: 'good', label: 'updated this step' },
      { tone: 'muted', label: 'unchanged' },
    ],
    mathNote:
      'State is the only durable memory inside a run unless you add external memory stores. Losing state mid-run (process crash without checkpoint) means replaying or aborting. Keep state structured and small enough to re-inject into the model context.',
    steps: [
      {
        id: 'as-1',
        caption:
          'State schema — a typed object the runtime owns, not free-form “whatever the model said.”',
        frame: {
          kind: 'ranking',
          heading: 'Example state keys',
          columns: [
            {
              title: 'Fields',
              items: [
                { label: 'messages[]', score: 'chat + tool results' },
                { label: 'scratchpad', score: 'working notes' },
                { label: 'tool_calls_used', score: 'budget counter' },
                { label: 'status', score: 'running | waiting_human | done' },
              ],
            },
          ],
        },
      },
      {
        id: 'as-2',
        caption:
          'Step updates — only some fields change. Highlighting diffs makes debugging possible.',
        frame: {
          kind: 'timeline',
          heading: 'After tools.orders.get',
          events: [
            { label: 'tool result', detail: 'order payload', marker: 'step' },
            { label: 'messages', detail: 'append observation', tone: 'good', marker: 'step' },
            { label: 'tool_calls_used', detail: '3 → 4', tone: 'good', marker: 'step' },
          ],
          activeIndex: 2,
          state: [
            { key: 'messages.length', value: '12', changed: true },
            { key: 'tool_calls_used', value: '4', changed: true },
            { key: 'status', value: 'running' },
            { key: 'goal', value: 'process refund' },
          ],
        },
      },
      {
        id: 'as-3',
        caption:
          'Context projection — you rarely dump the entire state into the prompt; you select a view the model needs now.',
        frame: {
          kind: 'budget',
          heading: 'Projected into the model window',
          capacity: 8000,
          segments: [
            { label: 'system + tools schema', tokens: 900, tone: 'accent' },
            { label: 'recent messages', tokens: 2500, tone: 'good' },
            { label: 'scratchpad summary', tokens: 200, tone: 'warn' },
            { label: 'omitted raw logs', tokens: 0, tone: 'muted' },
          ],
          dropped: [{ label: 'full HTTP traces', tokens: 14000 }],
          footer: 'State can be large; the prompt must stay budgeted.',
        },
      },
      {
        id: 'as-4',
        caption:
          'Corruption modes — invented tool results written into state, or status stuck on running forever.',
        callout: 'Validate tool payloads before merging into state.',
        frame: {
          kind: 'panels',
          heading: 'Guard the write path',
          panels: [
            { title: 'Bad', body: 'Model “observes” a fake refund success without a tool call.', tone: 'bad' },
            { title: 'Good', body: 'Only the runtime may append Observation entries from real tools.', tone: 'good' },
          ],
        },
      },
    ],
  },

  planning: {
    title: 'Planning',
    description: 'Deciding a sequence of actions up front versus choosing one step at a time — and when each fails.',
    legend: [
      { tone: 'accent', label: 'plan ahead' },
      { tone: 'active', label: 'step-wise' },
    ],
    mathNote:
      'Open-loop plans list many actions before any observation; closed-loop (reactive) policies pick the next action after each observation. Long open-loop plans rot when the world disagrees with assumptions. Prefer short plans plus re-planning.',
    steps: [
      {
        id: 'pl-1',
        caption:
          'Open-loop plan — list steps 1…n before acting. Fast to read, brittle if step 2’s observation invalidates step 3.',
        frame: {
          kind: 'ranking',
          heading: 'Up-front plan',
          columns: [
            {
              title: 'Plan',
              items: [
                { label: '1. Lookup order', tone: 'accent' },
                { label: '2. Check refund window', tone: 'accent' },
                { label: '3. Create refund', tone: 'accent' },
                { label: '4. Email customer', tone: 'accent' },
              ],
            },
          ],
        },
      },
      {
        id: 'pl-2',
        caption:
          'World disagrees — order is already refunded. Steps 3–4 of the frozen plan are now harmful.',
        frame: {
          kind: 'timeline',
          heading: 'Plan meets observation',
          events: [
            { label: 'Step 1', detail: 'lookup OK', tone: 'good', marker: 'step' },
            { label: 'Observation', detail: 'status=refunded', tone: 'warn', marker: 'pause' },
            { label: 'Blind step 3', detail: 'would double-refund', tone: 'bad', marker: 'error' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'pl-3',
        caption:
          'Closed-loop — re-plan after each observation. Slightly more model calls, far fewer irreversible mistakes.',
        frame: {
          kind: 'loop',
          heading: 'Re-plan each cycle',
          nodes: [
            { id: 'plan', label: 'Next action' },
            { id: 'act', label: 'Act' },
            { id: 'obs', label: 'Observe' },
          ],
          activeId: 'plan',
          log: [
            { role: 'Observation', text: 'Already refunded', tone: 'warn' },
            { role: 'Plan', text: 'Skip create_refund; notify user only', tone: 'accent' },
          ],
        },
      },
      {
        id: 'pl-4',
        caption:
          'Hybrid — sketch a coarse plan for the user, execute step-wise with checkpoints on risky tools.',
        callout: 'Show plans for transparency; execute with observation gates.',
        frame: {
          kind: 'panels',
          heading: 'Practical pattern',
          panels: [
            { title: 'Visible plan', body: '3–5 bullet outline for the operator.', tone: 'accent' },
            { title: 'Execution', body: 'One tool at a time; refresh plan when state changes.', tone: 'good' },
          ],
        },
      },
    ],
  },

  memory: {
    title: 'Agent memory',
    description: 'Working memory in the prompt vs long-term stores — different lifetimes, different failure modes.',
    legend: [
      { tone: 'active', label: 'working (in-context)' },
      { tone: 'good', label: 'long-term store' },
    ],
    mathNote:
      'In-context memory is whatever fits in the window this call. Long-term memory is external (vector DB, SQL, files) retrieved on demand. Confusing the two causes “the agent forgot” bugs that are really truncation or failed retrieval.',
    steps: [
      {
        id: 'mm-1',
        caption:
          'Working memory — recent messages and scratchpad inside the current run’s context.',
        frame: {
          kind: 'budget',
          heading: 'This request’s window',
          capacity: 8000,
          segments: [
            { label: 'system', tokens: 500, tone: 'accent' },
            { label: 'recent turns + tool results', tokens: 4500, tone: 'active' },
            { label: 'scratchpad', tokens: 300, tone: 'active' },
            { label: 'answer space', tokens: 800, tone: 'good' },
          ],
          dropped: [{ label: 'turns 1–20 raw text', tokens: 12000 }],
          footer: 'Dropped history is not “remembered” unless summarised or stored elsewhere.',
        },
      },
      {
        id: 'mm-2',
        caption:
          'Long-term memory — write durable facts to a store; later runs retrieve them explicitly.',
        frame: {
          kind: 'flow',
          heading: 'Write then read across sessions',
          stages: [
            { label: 'Extract fact', detail: 'user prefers email', tone: 'active' },
            { label: 'Upsert store', detail: 'user_id → preference', tone: 'good' },
            { label: 'Later session', detail: 'retrieve preference', tone: 'good' },
            { label: 'Inject into prompt', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'mm-3',
        caption:
          'Types of long-term memory — episodic (what happened), semantic (facts), procedural (how we do X).',
        frame: {
          kind: 'panels',
          heading: 'Memory kinds',
          panels: [
            { title: 'Episodic', body: '“Last ticket #441 was refunded yesterday.”', tone: 'good' },
            { title: 'Semantic', body: '“Acme refund window is 30 days.”', tone: 'good' },
            { title: 'Procedural', body: '“Always verify identity before refund > $100.”', tone: 'accent' },
          ],
        },
      },
      {
        id: 'mm-4',
        caption:
          'Failure modes — writing hallucinations into memory, or retrieving irrelevant memories that steer the agent wrong.',
        callout: 'Gate memory writes; treat retrieved memories as untrusted context.',
        frame: {
          kind: 'ranking',
          heading: 'Memory bugs',
          columns: [
            {
              title: 'Bug',
              items: [
                { label: 'Persist a guessed email as fact', tone: 'bad' },
                { label: 'Retrieve another tenant’s notes', tone: 'bad' },
                { label: 'Never expire stale preferences', tone: 'warn' },
              ],
            },
          ],
        },
      },
    ],
  },

  'tools-tool-calling': {
    title: 'Tools and tool calling',
    description: 'Structured function calls — schemas in, validated arguments out — instead of hoping free text stays parseable.',
    legend: [
      { tone: 'accent', label: 'model proposes' },
      { tone: 'good', label: 'runtime executes' },
      { tone: 'bad', label: 'rejected' },
    ],
    mathNote:
      'Native tool calling returns a structured payload (name + JSON arguments) from the provider API. Your runtime validates against JSON Schema, enforces authz, executes, and returns a tool message. The model never gains network access by itself.',
    steps: [
      {
        id: 'tt-1',
        caption:
          'Declare tools — name, description, and JSON Schema for arguments. The model only sees this catalogue.',
        frame: {
          kind: 'panels',
          heading: 'Tool schema',
          panels: [
            {
              title: 'refund.create',
              body: '{ order_id: string, amount_cents: integer, reason: string }',
              tone: 'accent',
            },
          ],
        },
      },
      {
        id: 'tt-2',
        caption:
          'Model proposes a call — structured args, not prose. Invalid JSON or wrong types fail before execution.',
        frame: {
          kind: 'ranking',
          heading: 'Proposal vs validation',
          columns: [
            {
              title: 'Model output',
              items: [
                { label: 'refund.create', score: 'name', tone: 'accent' },
                { label: '{"order_id":"9182","amount_cents":4200}', score: 'args', tone: 'accent' },
              ],
            },
            {
              title: 'Validator',
              items: [
                { label: 'schema OK', score: 'pass', tone: 'good' },
                { label: 'user authorised for refunds', score: 'pass', tone: 'good' },
              ],
            },
          ],
        },
      },
      {
        id: 'tt-3',
        caption:
          'Execute and return — runtime calls the API, then appends a tool result message for the next model turn.',
        frame: {
          kind: 'timeline',
          heading: 'Tool round-trip',
          events: [
            { label: 'assistant', detail: 'tool_call refund.create', tone: 'accent', marker: 'step' },
            { label: 'runtime', detail: 'POST /refunds', tone: 'good', marker: 'step' },
            { label: 'tool', detail: '{"ok":true,"refund_id":"r_9"}', tone: 'good', marker: 'step' },
            { label: 'assistant', detail: 'narrates success to user', tone: 'accent', marker: 'done' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'tt-4',
        caption:
          'Reject dangerous calls — unknown tools, out-of-policy amounts, or missing confirmation never reach the network.',
        callout: 'Allowlists beat prompt instructions for tool safety.',
        frame: {
          kind: 'bars',
          heading: 'Calls gated in one day (illustrative)',
          bars: [
            { label: 'executed', value: 180, tone: 'good' },
            { label: 'schema reject', value: 24, tone: 'warn' },
            { label: 'policy reject', value: 11, tone: 'bad' },
          ],
          format: 'raw',
          max: 200,
        },
      },
    ],
  },

  'react-agents': {
    title: 'ReAct agents',
    description: 'Thought → Action → Observation as a runtime loop with stop sequences, parsers, and budgets — not just a prompt style.',
    legend: [
      { tone: 'accent', label: 'Thought' },
      { tone: 'active', label: 'Action' },
      { tone: 'good', label: 'Observation' },
    ],
    mathNote:
      'ReAct interleaves reasoning traces with actions. The runtime stops at Action (or a stop token), executes the tool, appends Observation, and continues. Prefer native tool calls when available; keep ReAct text when you need a visible reasoning trace or the provider lacks tools.',
    steps: [
      {
        id: 'ra-1',
        caption:
          'Format — the model emits Thought and Action lines; Observation is reserved for the runtime.',
        frame: {
          kind: 'tokens',
          heading: 'Trace fragment',
          tokens: [
            { text: 'Thought:', tone: 'accent' },
            { text: ' Need order status', tone: 'accent' },
            { text: 'Action:', tone: 'active' },
            { text: ' orders.get[9182]', tone: 'active' },
            { text: 'Observation:', tone: 'good', note: 'runtime fills' },
          ],
        },
      },
      {
        id: 'ra-2',
        caption:
          'Loop — each Action triggers a real tool; each Observation changes the next Thought.',
        frame: {
          kind: 'loop',
          heading: 'ReAct cycle',
          nodes: [
            { id: 'thought', label: 'Thought' },
            { id: 'action', label: 'Action' },
            { id: 'obs', label: 'Observation' },
          ],
          activeId: 'obs',
          iteration: 'cycle 1',
          log: [
            { role: 'Thought', text: 'Look up order 9182', tone: 'accent' },
            { role: 'Action', text: 'orders.get[9182]', tone: 'active' },
            { role: 'Observation', text: 'delivered, day 12 of 30', tone: 'good' },
          ],
        },
      },
      {
        id: 'ra-3',
        caption:
          'Second cycle — policy uses the observation, then may act again or finish with Final Answer.',
        frame: {
          kind: 'loop',
          heading: 'ReAct cycle 2',
          nodes: [
            { id: 'thought', label: 'Thought' },
            { id: 'action', label: 'Action' },
            { id: 'obs', label: 'Observation' },
          ],
          activeId: 'thought',
          iteration: '→ Final Answer',
          log: [
            { role: 'Thought', text: 'Within window — safe to refund', tone: 'accent' },
            { role: 'Action', text: 'refund.create[9182]', tone: 'active' },
            { role: 'Observation', text: 'refund_id r_9', tone: 'good' },
            { role: 'Final Answer', text: 'Refunded ₹4,200 (r_9).', tone: 'good' },
          ],
        },
      },
      {
        id: 'ra-4',
        caption:
          'Runtime responsibilities — parse, validate, budget, and never let the model invent Observation text.',
        callout: 'ReAct prompting taught the format; ReAct agents enforce it in code.',
        frame: {
          kind: 'ranking',
          heading: 'Runtime checklist',
          columns: [
            {
              title: 'Enforce',
              items: [
                { label: 'Stop sequence / tool boundary', tone: 'good' },
                { label: 'Max cycles', tone: 'good' },
                { label: 'Tool allowlist', tone: 'good' },
                { label: 'Observation authenticity', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'multi-agent': {
    title: 'Multi-agent systems',
    description: 'Multiple specialised policies sharing a protocol — useful when roles diverge, costly when they thrash.',
    legend: [
      { tone: 'accent', label: 'agent A' },
      { tone: 'active', label: 'agent B' },
      { tone: 'good', label: 'shared artifact' },
    ],
    mathNote:
      'Multi-agent means multiple LLM calls with distinct prompts/tools and a message-passing or shared-state protocol. It does not magically add capability beyond what those calls could do in one graph — it adds specialisation and parallelism at the cost of coordination failures.',
    steps: [
      {
        id: 'ma-1',
        caption:
          'Split roles — researcher gathers evidence; writer drafts; critic checks claims. Each has different tools.',
        frame: {
          kind: 'panels',
          heading: 'Role split',
          panels: [
            { title: 'Researcher', body: 'Tools: search, docs. Output: evidence notes.', tone: 'accent' },
            { title: 'Writer', body: 'Tools: none. Output: draft answer.', tone: 'active' },
            { title: 'Critic', body: 'Tools: none. Output: blockers / approve.', tone: 'good' },
          ],
        },
      },
      {
        id: 'ma-2',
        caption:
          'Protocol — agents communicate via structured messages or a shared blackboard, not vibes in one mega-context.',
        frame: {
          kind: 'timeline',
          heading: 'Handoff',
          events: [
            { label: 'Researcher', detail: 'posts evidence.json', tone: 'accent', marker: 'step' },
            { label: 'Writer', detail: 'reads evidence → draft.md', tone: 'active', marker: 'step' },
            { label: 'Critic', detail: 'flags missing citation', tone: 'good', marker: 'pause' },
            { label: 'Writer', detail: 'revises draft', tone: 'active', marker: 'done' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'ma-3',
        caption:
          'Failure mode — agents debate forever or overwrite each other’s artifacts without a termination rule.',
        frame: {
          kind: 'bars',
          heading: 'Illustrative cost of ungoverned debate',
          bars: [
            { label: 'single agent', value: 4, tone: 'good', note: 'model calls' },
            { label: '3 agents, 2 rounds', value: 12, tone: 'warn' },
            { label: 'debate until timeout', value: 40, tone: 'bad' },
          ],
          format: 'raw',
          max: 45,
        },
      },
      {
        id: 'ma-4',
        caption:
          'Use when specialisation or parallel work pays for coordination. Otherwise one well-tooled agent is simpler.',
        callout: 'Start with one agent. Split only when evals show a clear win.',
        frame: {
          kind: 'ranking',
          heading: 'When to split',
          columns: [
            {
              title: 'Split',
              items: [
                { label: 'Different tool permissions', tone: 'good' },
                { label: 'Parallelisable subtasks', tone: 'good' },
              ],
            },
            {
              title: 'Do not split',
              items: [
                { label: 'Same tools, same prompt goals', tone: 'bad' },
                { label: 'No handoff schema yet', tone: 'bad' },
              ],
            },
          ],
        },
      },
    ],
  },

  'supervisor-pattern': {
    title: 'Supervisor pattern',
    description: 'A router agent delegates to specialists and aggregates results — central control with clear ownership.',
    legend: [
      { tone: 'accent', label: 'supervisor' },
      { tone: 'active', label: 'worker' },
    ],
    mathNote:
      'The supervisor maintains global state and chooses which worker to invoke (or whether to finish). Workers are narrow policies. This is an explicit orchestration graph, not emergent swarm behaviour.',
    steps: [
      {
        id: 'sp-1',
        caption:
          'Supervisor sees the goal and the catalogue of workers — it does not do all the work itself.',
        frame: {
          kind: 'flow',
          heading: 'Routing',
          stages: [
            { label: 'User goal', tone: 'good' },
            { label: 'Supervisor', detail: 'choose worker', tone: 'accent' },
            { label: 'Billing worker', tone: 'active' },
            { label: 'Result back', tone: 'accent' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'sp-2',
        caption:
          'Delegation — worker runs with a scoped prompt and tools; returns a structured result, not a free chat dump.',
        frame: {
          kind: 'panels',
          heading: 'Scoped call',
          panels: [
            { title: 'Supervisor → billing', body: 'Task: explain invoice INV-22. Tools: billing.read only.', tone: 'accent' },
            { title: 'Worker result', body: '{ summary, line_items, citations[] }', tone: 'active' },
          ],
        },
      },
      {
        id: 'sp-3',
        caption:
          'Aggregate — supervisor may call another worker or answer the user. It owns the final response.',
        frame: {
          kind: 'timeline',
          heading: 'Two-worker run',
          events: [
            { label: 'Supervisor', detail: 'route → billing', tone: 'accent', marker: 'step' },
            { label: 'Billing', detail: 'returns invoice facts', tone: 'active', marker: 'step' },
            { label: 'Supervisor', detail: 'route → policy', tone: 'accent', marker: 'step' },
            { label: 'Policy', detail: 'refund eligibility', tone: 'active', marker: 'step' },
            { label: 'Supervisor', detail: 'final user answer', tone: 'good', marker: 'done' },
          ],
          activeIndex: 4,
        },
      },
      {
        id: 'sp-4',
        caption:
          'Mis-routing — wrong worker selection is the characteristic bug. Log route decisions and test them.',
        callout: 'Supervisors need evals on routing accuracy, not only final answer quality.',
        frame: {
          kind: 'bars',
          heading: 'Route accuracy on a labeled set',
          bars: [
            { label: 'correct worker', value: 0.86, tone: 'good' },
            { label: 'wrong worker', value: 0.09, tone: 'bad' },
            { label: 'answered without worker', value: 0.05, tone: 'warn' },
          ],
          format: 'percent',
          max: 1,
        },
      },
    ],
  },

  guardrails: {
    title: 'Agent guardrails',
    description: 'Deterministic checks around a probabilistic policy — input, tool, and output gates.',
    legend: [
      { tone: 'good', label: 'allowed' },
      { tone: 'bad', label: 'blocked' },
    ],
    mathNote:
      'Guardrails are code. Prompts are soft suggestions. A regex that blocks IBAN exfiltration or a policy engine that denies refund.create above a threshold will fire even when the model “agrees” to break the rule.',
    steps: [
      {
        id: 'gd-1',
        caption:
          'Input gate — refuse or redact dangerous user content before it reaches the model or tools.',
        frame: {
          kind: 'flow',
          heading: 'Ingress',
          stages: [
            { label: 'User text', tone: 'accent' },
            { label: 'Input filters', detail: 'PII / injection heuristics', tone: 'good' },
            { label: 'Model', tone: 'accent' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'gd-2',
        caption:
          'Tool gate — allowlist, argument bounds, and confirmation for irreversible actions.',
        frame: {
          kind: 'ranking',
          heading: 'refund.create checks',
          columns: [
            {
              title: 'Check',
              items: [
                { label: 'tool on allowlist', score: 'pass', tone: 'good' },
                { label: 'amount_cents ≤ 50000', score: 'pass', tone: 'good' },
                { label: 'human approval for > 10000', score: 'required', tone: 'warn' },
              ],
            },
          ],
        },
      },
      {
        id: 'gd-3',
        caption:
          'Output gate — scan the final answer for secrets, disallowed topics, or missing citations before it ships.',
        frame: {
          kind: 'panels',
          heading: 'Egress',
          panels: [
            { title: 'Blocked', body: 'Response contained an API key pattern → redact + retry.', tone: 'bad' },
            { title: 'Allowed', body: 'Clean answer with required citation ids.', tone: 'good' },
          ],
        },
      },
      {
        id: 'gd-4',
        caption:
          'Defence in depth — prompt policy + tool gate + output scanner. Any single layer can fail.',
        callout: 'Log every block with a reason code for security review.',
        frame: {
          kind: 'flow',
          heading: 'Layers',
          stages: [
            { label: 'Prompt policy', tone: 'warn' },
            { label: 'Tool gate', tone: 'good' },
            { label: 'Output scanner', tone: 'good' },
            { label: 'User', tone: 'accent' },
          ],
          activeIndex: 2,
        },
      },
    ],
  },

  'mcp-conceptual': {
    title: 'MCP (conceptual)',
    description: 'Model Context Protocol — a standard way for hosts to expose tools and resources to models.',
    legend: [
      { tone: 'accent', label: 'host / client' },
      { tone: 'good', label: 'MCP server' },
    ],
    mathNote:
      'MCP standardises discovery and invocation of tools/resources over a session, so an IDE or agent runtime can plug in many servers without bespoke adapters per tool. It does not make tools safe by itself — authz and allowlists still sit in the host.',
    steps: [
      {
        id: 'mcp-1',
        caption:
          'Problem — every tool integration reinvented its own schema and transport. Agents drowned in one-off adapters.',
        frame: {
          kind: 'panels',
          heading: 'Before',
          panels: [
            { title: 'Custom glue', body: 'N tools × M runtimes = N×M brittle integrations.', tone: 'bad' },
          ],
        },
      },
      {
        id: 'mcp-2',
        caption:
          'MCP server — advertises tools/resources with schemas; host connects and calls them via the protocol.',
        frame: {
          kind: 'flow',
          heading: 'Roles',
          stages: [
            { label: 'Host', detail: 'IDE / agent runtime', tone: 'accent' },
            { label: 'MCP session', detail: 'discover + call' },
            { label: 'Server', detail: 'filesystem / DB / SaaS', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'mcp-3',
        caption:
          'Discover then call — list tools, show schemas to the model, execute selected tool through the host.',
        frame: {
          kind: 'timeline',
          heading: 'Session sketch',
          events: [
            { label: 'initialize', detail: 'handshake', marker: 'step' },
            { label: 'tools/list', detail: 'catalog', tone: 'good', marker: 'step' },
            { label: 'model picks tool', detail: 'structured call', tone: 'accent', marker: 'step' },
            { label: 'tools/call', detail: 'host → server', tone: 'good', marker: 'done' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'mcp-4',
        caption:
          'Still your threat model — a malicious or over-privileged MCP server is a tool-exfiltration risk.',
        callout: 'Treat MCP servers like installed plugins: least privilege and review.',
        frame: {
          kind: 'ranking',
          heading: 'Host responsibilities',
          columns: [
            {
              title: 'Keep in the host',
              items: [
                { label: 'Which servers are enabled', tone: 'good' },
                { label: 'User consent for sensitive tools', tone: 'good' },
                { label: 'Logging and rate limits', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  hitl: {
    title: 'Human-in-the-loop',
    description: 'Pause the agent for approval on risky steps — resume with an explicit human decision recorded in state.',
    legend: [
      { tone: 'warn', label: 'waiting on human' },
      { tone: 'good', label: 'approved' },
      { tone: 'bad', label: 'rejected' },
    ],
    mathNote:
      'HITL is a state machine transition: running → waiting_human → running/done. The checkpoint must store enough context to resume after hours. Silent auto-continue defeats the control.',
    steps: [
      {
        id: 'ht-1',
        caption:
          'Trigger — policy wants refund.create for $480. Guardrail requires a human because amount > threshold.',
        frame: {
          kind: 'timeline',
          heading: 'Pause point',
          events: [
            { label: 'Agent', detail: 'proposes refund.create $480', marker: 'step' },
            { label: 'Gate', detail: 'amount > $100', tone: 'warn', marker: 'pause' },
            { label: 'State', detail: 'status=waiting_human', tone: 'warn', marker: 'checkpoint' },
          ],
          activeIndex: 2,
          state: [
            { key: 'status', value: 'waiting_human', changed: true },
            { key: 'pending_tool', value: 'refund.create' },
          ],
        },
      },
      {
        id: 'ht-2',
        caption:
          'Human UI — show the proposed call, evidence, and consequences. Approve, edit args, or reject.',
        frame: {
          kind: 'panels',
          heading: 'Approval card',
          panels: [
            { title: 'Proposed', body: 'refund.create({ order: 9182, amount: $480 })', tone: 'warn' },
            { title: 'Evidence', body: 'Within 30-day window; item unused per CS notes.', tone: 'good' },
          ],
        },
      },
      {
        id: 'ht-3',
        caption:
          'Resume — approval writes a signed decision into state; runtime executes; rejection ends or re-plans.',
        frame: {
          kind: 'ranking',
          heading: 'Outcomes',
          columns: [
            {
              title: 'Approve',
              items: [{ label: 'Execute tool → continue', tone: 'good' }],
            },
            {
              title: 'Reject',
              items: [{ label: 'No side effect; agent explains', tone: 'bad' }],
            },
          ],
        },
      },
      {
        id: 'ht-4',
        caption:
          'Design for latency — humans are slow. Persist checkpoints and notify; do not hold an HTTP request open for hours.',
        callout: 'HITL without durable pause is just a blocked thread.',
        frame: {
          kind: 'flow',
          heading: 'Async HITL',
          stages: [
            { label: 'Checkpoint save', tone: 'good' },
            { label: 'Notify reviewer', tone: 'warn' },
            { label: 'Webhook / UI decision', tone: 'accent' },
            { label: 'Resume worker', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
    ],
  },

  checkpointing: {
    title: 'Checkpointing',
    description: 'Persist run state so crashes, deploys, and HITL pauses do not lose the thread.',
    legend: [
      { tone: 'good', label: 'checkpoint' },
      { tone: 'bad', label: 'lost without checkpoint' },
    ],
    mathNote:
      'A checkpoint is a serialised snapshot: state + cursor (which node/step) + idempotency keys for tools already executed. Resume must be idempotent — re-running refund.create without a key double-charges.',
    steps: [
      {
        id: 'cp-1',
        caption:
          'Without checkpoints — process dies after tool 2; restart either skips work or repeats side effects blindly.',
        frame: {
          kind: 'timeline',
          heading: 'Crash',
          events: [
            { label: 'Tool 1', detail: 'orders.get', marker: 'step' },
            { label: 'Tool 2', detail: 'refund.create', tone: 'good', marker: 'step' },
            { label: 'Crash', detail: 'state in RAM gone', tone: 'bad', marker: 'error' },
            { label: 'Restart', detail: 'amnesia or double refund risk', tone: 'bad', marker: 'error' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'cp-2',
        caption:
          'Checkpoint after each durable step — write state + last completed node to storage before the next risk.',
        frame: {
          kind: 'flow',
          heading: 'Write cadence',
          stages: [
            { label: 'Act' },
            { label: 'Observe' },
            { label: 'Checkpoint', detail: 'persist snapshot', tone: 'good' },
            { label: 'Next plan' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'cp-3',
        caption:
          'Resume — load snapshot, skip completed idempotent tools, continue from the cursor.',
        frame: {
          kind: 'timeline',
          heading: 'Recovery',
          events: [
            { label: 'Load ckpt', detail: 'step=2, refund_id=r_9', tone: 'good', marker: 'checkpoint' },
            { label: 'Skip', detail: 'refund.create already done', tone: 'warn', marker: 'step' },
            { label: 'Continue', detail: 'email.notify', tone: 'active', marker: 'done' },
          ],
          activeIndex: 2,
          state: [
            { key: 'cursor', value: 'email.notify', changed: true },
            { key: 'idempotency:refund', value: 'r_9' },
          ],
        },
      },
      {
        id: 'cp-4',
        caption:
          'What to store — enough to rebuild the prompt and avoid duplicate side effects; not necessarily full HTTP traces forever.',
        callout: 'Pair checkpoints with tool idempotency keys from day one.',
        frame: {
          kind: 'ranking',
          heading: 'Snapshot contents',
          columns: [
            {
              title: 'Include',
              items: [
                { label: 'structured state', tone: 'good' },
                { label: 'cursor / graph node', tone: 'good' },
                { label: 'tool idempotency keys', tone: 'good' },
              ],
            },
            {
              title: 'Usually exclude',
              items: [
                { label: 'raw multi-MB blobs', tone: 'muted' },
                { label: 'secrets in plaintext', tone: 'bad' },
              ],
            },
          ],
        },
      },
    ],
  },

  'agent-failure-modes': {
    title: 'Agent failure modes',
    description: 'Loops, tool misuse, hallucinated observations, and goal drift — each needs a different control.',
    legend: [
      { tone: 'bad', label: 'failure' },
      { tone: 'good', label: 'control' },
    ],
    mathNote:
      'Agents fail operationally more often than they fail at “reasoning.” Instrument step counts, repeated tool signatures, and validator rejects. Temperature tweaks rarely fix infinite loops.',
    steps: [
      {
        id: 'af-1',
        caption:
          'Infinite loop — the same Action with the same args repeats until timeout.',
        frame: {
          kind: 'bars',
          heading: 'Repeated tool signature detector',
          bars: [
            { label: 'search["Acme CEO"] × 1', value: 1, tone: 'good' },
            { label: 'search["Acme CEO"] × 8', value: 8, tone: 'bad', note: 'should halt' },
          ],
          format: 'raw',
          max: 10,
        },
      },
      {
        id: 'af-2',
        caption:
          'Tool misuse — wrong tool or args that pass schema but violate business rules.',
        frame: {
          kind: 'panels',
          heading: 'Schema-valid, policy-invalid',
          panels: [
            { title: 'Call', body: 'refund.create amount_cents=5000000', tone: 'bad' },
            { title: 'Control', body: 'Policy cap + HITL, not just JSON Schema.', tone: 'good' },
          ],
        },
      },
      {
        id: 'af-3',
        caption:
          'Hallucinated observation — model writes what it wished the tool returned. Only the runtime may author Observation.',
        frame: {
          kind: 'ranking',
          heading: 'Authenticity',
          columns: [
            {
              title: 'Illegal',
              items: [{ label: 'Assistant invents “Observation: refund ok”', tone: 'bad' }],
            },
            {
              title: 'Legal',
              items: [{ label: 'Runtime appends tool message from HTTP 200 body', tone: 'good' }],
            },
          ],
        },
      },
      {
        id: 'af-4',
        caption:
          'Goal drift — after many steps the agent optimises a side quest. Keep the goal string pinned in state and prompts.',
        callout: 'Budgets, idempotency, authentic observations, and pinned goals cover most production incidents.',
        frame: {
          kind: 'timeline',
          heading: 'Drift example',
          events: [
            { label: 'Goal', detail: 'Refund order 9182', tone: 'good', marker: 'step' },
            { label: 'Step 6', detail: 'Rewrites marketing copy…', tone: 'bad', marker: 'error' },
            { label: 'Fix', detail: 'Pin goal; critic checks alignment', tone: 'good', marker: 'done' },
          ],
          activeIndex: 1,
        },
      },
    ],
  },
};
