import type { SceneMap } from './types';

export const scenes: SceneMap = {
  langchain: {
    title: 'LangChain (mental model)',
    description: 'Chains, tools, and runnable composition — glue for LLM apps, not a model provider.',
    legend: [
      { tone: 'accent', label: 'runnable / chain' },
      { tone: 'active', label: 'tool / retriever' },
      { tone: 'good', label: 'model I/O' },
    ],
    mathNote:
      'LangChain is an orchestration library: it standardises prompt templates, model wrappers, retrievers, and tool calling so you compose them as Runnables. It does not replace evaluation, guardrails, or understanding of the underlying APIs.',
    steps: [
      {
        id: 'lc-1',
        caption:
          'Runnable pipeline — input flows through prompt → model → output parser as composable steps.',
        frame: {
          kind: 'flow',
          heading: 'LCEL-style chain',
          stages: [
            { label: 'Input', detail: '{question}' },
            { label: 'PromptTemplate', tone: 'accent' },
            { label: 'ChatModel', tone: 'good' },
            { label: 'Parser', detail: 'str / JSON', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'lc-2',
        caption:
          'Retrieval chain — retriever augments the prompt before the model call (classic RAG wiring).',
        frame: {
          kind: 'flow',
          heading: 'retrieve | prompt | model',
          stages: [
            { label: 'Retriever', detail: 'top-k docs', tone: 'active' },
            { label: 'Stuff docs → prompt', tone: 'accent' },
            { label: 'Model', tone: 'good' },
          ],
          activeIndex: 0,
        },
      },
      {
        id: 'lc-3',
        caption:
          'Agents in LangChain — tool catalogue + agent executor loop. Same Plan/Act/Observe idea with library helpers.',
        frame: {
          kind: 'loop',
          heading: 'Agent executor',
          nodes: [
            { id: 'llm', label: 'LLM' },
            { id: 'tool', label: 'Tool' },
            { id: 'obs', label: 'Observe' },
          ],
          activeId: 'tool',
          log: [
            { role: 'LLM', text: 'tool_call search', tone: 'accent' },
            { role: 'Tool', text: 'returns hits', tone: 'active' },
          ],
        },
      },
      {
        id: 'lc-4',
        caption:
          'Use it for speed of composition; still own prompts, evals, and production concerns yourself.',
        callout: 'Framework convenience ≠ production readiness.',
        frame: {
          kind: 'panels',
          heading: 'What LangChain is / is not',
          panels: [
            { title: 'Is', body: 'Adapters and composition utilities around LLM APIs.', tone: 'good' },
            { title: 'Is not', body: 'A hosted model, a vector DB, or an automatic safety layer.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  langgraph: {
    title: 'LangGraph',
    description: 'Explicit graphs of nodes and edges with durable state — cycles, branches, and checkpoints.',
    legend: [
      { tone: 'accent', label: 'node' },
      { tone: 'good', label: 'checkpointed state' },
    ],
    mathNote:
      'LangGraph models an agent as a state machine: nodes update a shared state object; conditional edges choose the next node. Checkpointers persist state between steps for HITL and crash recovery.',
    steps: [
      {
        id: 'lg-1',
        caption:
          'Graph — nodes are functions on state; edges declare control flow including loops.',
        frame: {
          kind: 'flow',
          heading: 'Simple graph',
          stages: [
            { label: 'retrieve', tone: 'accent' },
            { label: 'generate', tone: 'accent' },
            { label: 'grade', detail: 'conditional', tone: 'warn' },
            { label: 'rewrite | end', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'lg-2',
        caption:
          'Shared state — each node reads/writes typed fields instead of burying everything in chat messages.',
        frame: {
          kind: 'timeline',
          heading: 'State transitions',
          events: [
            { label: 'retrieve', detail: 'docs=[] → docs=[...]', marker: 'step' },
            { label: 'generate', detail: 'answer filled', tone: 'good', marker: 'step' },
            { label: 'grade', detail: 'score=0.4 → rewrite', tone: 'warn', marker: 'step' },
          ],
          activeIndex: 2,
          state: [
            { key: 'docs', value: '2 passages', changed: true },
            { key: 'answer', value: 'draft', changed: true },
            { key: 'next', value: 'rewrite', changed: true },
          ],
        },
      },
      {
        id: 'lg-3',
        caption:
          'Checkpoint — after each node, persist state so you can pause for a human or resume after failure.',
        frame: {
          kind: 'flow',
          heading: 'Durable execution',
          stages: [
            { label: 'Node runs' },
            { label: 'Checkpoint', tone: 'good' },
            { label: 'HITL / crash' },
            { label: 'Resume from ckpt', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'lg-4',
        caption:
          'Why not a linear chain — when you need cycles, branching, and durable pause, a graph is the honest model.',
        callout: 'If your flow is strictly A→B→C once, a chain is enough.',
        frame: {
          kind: 'panels',
          heading: 'Fit',
          panels: [
            { title: 'LangGraph shines', body: 'ReAct loops, graders, multi-actor handoffs, HITL.', tone: 'good' },
            { title: 'Overkill', body: 'Single prompt → single completion.', tone: 'muted' },
          ],
        },
      },
    ],
  },

  llamaindex: {
    title: 'LlamaIndex',
    description: 'Data framework centred on indexes, retrievers, and query engines over your documents.',
    legend: [
      { tone: 'warn', label: 'index build' },
      { tone: 'active', label: 'query' },
    ],
    mathNote:
      'LlamaIndex emphasises document loaders → node parsing → indexing → query engines. Agents exist, but the core abstraction is “ask questions over my data,” not general tool autonomy.',
    steps: [
      {
        id: 'li-1',
        caption:
          'Ingest — load files, parse into nodes (chunks), attach metadata.',
        frame: {
          kind: 'flow',
          heading: 'Index build',
          lane: 'offline',
          stages: [
            { label: 'Loaders', tone: 'warn' },
            { label: 'Node parse / chunk', tone: 'warn' },
            { label: 'Embed + index', tone: 'warn' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'li-2',
        caption:
          'Query engine — retrieves nodes and synthesises an answer with a chosen response mode.',
        frame: {
          kind: 'flow',
          heading: 'Online query',
          stages: [
            { label: 'Query', tone: 'active' },
            { label: 'Retriever', tone: 'active' },
            { label: 'Synthesizer', detail: 'LLM', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'li-3',
        caption:
          'Index types — vector, keyword, knowledge graph, etc. Choose based on query patterns.',
        frame: {
          kind: 'ranking',
          heading: 'Index choice (simplified)',
          columns: [
            {
              title: 'Type',
              items: [
                { label: 'VectorStoreIndex', score: 'semantic Q&A', tone: 'good' },
                { label: 'Keyword table', score: 'exact terms', tone: 'active' },
                { label: 'KG index', score: 'entity relations', tone: 'accent' },
              ],
            },
          ],
        },
      },
      {
        id: 'li-4',
        caption:
          'Positioning — strongest when your product is document Q&A / RAG; pair with other libs for complex multi-agent ops.',
        callout: 'Pick frameworks by primary abstraction, not hype.',
        frame: {
          kind: 'panels',
          heading: 'Sweet spot',
          panels: [
            { title: 'Great fit', body: 'Corp knowledge assistants, doc copilots.', tone: 'good' },
            { title: 'Look elsewhere too', body: 'Heavy multi-agent ops with many side-effecting tools.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  crewai: {
    title: 'CrewAI',
    description: 'Role-playing crews — agents with jobs, tools, and a process that coordinates tasks.',
    legend: [
      { tone: 'accent', label: 'agent role' },
      { tone: 'good', label: 'task output' },
    ],
    mathNote:
      'CrewAI structures multi-agent work as Agents (role/goal/tools) + Tasks + a Process (sequential/hierarchical). It is an opinionated orchestration layer on top of LLM calls.',
    steps: [
      {
        id: 'cr-1',
        caption:
          'Define agents — each has a role, goal, backstory, and optional tools.',
        frame: {
          kind: 'panels',
          heading: 'Crew members',
          panels: [
            { title: 'Analyst', body: 'Goal: extract metrics. Tools: code interpreter.', tone: 'accent' },
            { title: 'Writer', body: 'Goal: draft report. Tools: none.', tone: 'accent' },
          ],
        },
      },
      {
        id: 'cr-2',
        caption:
          'Tasks — describe expected output; assign to an agent; chain via context from prior tasks.',
        frame: {
          kind: 'flow',
          heading: 'Sequential process',
          stages: [
            { label: 'Task A', detail: 'Analyst → metrics.json', tone: 'accent' },
            { label: 'Task B', detail: 'Writer uses A', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'cr-3',
        caption:
          'Hierarchical process — a manager agent delegates and reviews, similar to a supervisor pattern.',
        frame: {
          kind: 'flow',
          heading: 'Hierarchical',
          stages: [
            { label: 'Manager', tone: 'accent' },
            { label: 'Delegate', tone: 'active' },
            { label: 'Worker result', tone: 'good' },
            { label: 'Manager final', tone: 'accent' },
          ],
          activeIndex: 0,
        },
      },
      {
        id: 'cr-4',
        caption:
          'Watch coordination cost — crews multiply calls. Measure quality vs a single agent baseline.',
        callout: 'Roles help humans reason; they are not free compute.',
        frame: {
          kind: 'bars',
          heading: 'Illustrative call counts',
          bars: [
            { label: '1 agent', value: 3, tone: 'good' },
            { label: '3-agent crew', value: 11, tone: 'warn' },
          ],
          format: 'raw',
          max: 12,
        },
      },
    ],
  },

  autogen: {
    title: 'AutoGen',
    description: 'Conversational multi-agent patterns — agents messaging each other under group-chat rules.',
    legend: [
      { tone: 'accent', label: 'speaker' },
      { tone: 'active', label: 'group chat' },
    ],
    mathNote:
      'AutoGen popularised multi-agent chat: AssistantAgent, UserProxyAgent (can execute code), and GroupChat with speaker selection. Control comes from termination conditions and human proxies.',
    steps: [
      {
        id: 'au-1',
        caption:
          'Two-agent chat — assistant proposes; user proxy may execute code or tools and return results.',
        frame: {
          kind: 'timeline',
          heading: 'Assistant ↔ UserProxy',
          events: [
            { label: 'Assistant', detail: 'write plot script', tone: 'accent', marker: 'step' },
            { label: 'UserProxy', detail: 'execute code', tone: 'active', marker: 'step' },
            { label: 'UserProxy', detail: 'return stdout/plot', tone: 'good', marker: 'step' },
            { label: 'Assistant', detail: 'interpret results', tone: 'accent', marker: 'done' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'au-2',
        caption:
          'Group chat — a manager selects the next speaker based on messages and roles.',
        frame: {
          kind: 'flow',
          heading: 'Speaker selection',
          stages: [
            { label: 'Message bus', tone: 'active' },
            { label: 'Selector', detail: 'who speaks?', tone: 'warn' },
            { label: 'Chosen agent', tone: 'accent' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'au-3',
        caption:
          'Termination — max rounds, explicit TERMINATE, or human stop. Without this, chats thrash.',
        frame: {
          kind: 'bars',
          heading: 'Without vs with max_rounds',
          bars: [
            { label: 'unbounded chat', value: 50, tone: 'bad', note: 'messages' },
            { label: 'max_rounds=8', value: 8, tone: 'good' },
          ],
          format: 'raw',
          max: 55,
        },
      },
      {
        id: 'au-4',
        caption:
          'Fit — excellent for research-style collaborative chats; production systems often move to explicit graphs later.',
        callout: 'Conversational multi-agent is flexible and easy to derail — add hard stops.',
        frame: {
          kind: 'panels',
          heading: 'Takeaway',
          panels: [
            { title: 'Strength', body: 'Fast experimentation with code-executing proxies.', tone: 'good' },
            { title: 'Risk', body: 'Unbounded dialogue and unclear ownership of side effects.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  'google-adk': {
    title: 'Google ADK (conceptual)',
    description: 'Agent Development Kit patterns — structured agents, tools, and runners aimed at Google’s ecosystem.',
    legend: [
      { tone: 'accent', label: 'agent' },
      { tone: 'good', label: 'runner / tool' },
    ],
    mathNote:
      'ADK provides building blocks for agents (instructions, tools, sub-agents) and runners that execute them, integrating with Google model/tooling ecosystems. Treat vendor kits like any framework: own evals and guardrails.',
    steps: [
      {
        id: 'adk-1',
        caption:
          'Agent definition — instructions + tools + optional sub-agents as a declarative unit.',
        frame: {
          kind: 'panels',
          heading: 'Agent spec',
          panels: [
            { title: 'Instructions', body: 'Role and policy text.', tone: 'accent' },
            { title: 'Tools', body: 'Functions / API connectors.', tone: 'good' },
            { title: 'Sub-agents', body: 'Delegates for specialised work.', tone: 'active' },
          ],
        },
      },
      {
        id: 'adk-2',
        caption:
          'Runner — executes the agent loop, manages session state, and applies callbacks/hooks.',
        frame: {
          kind: 'flow',
          heading: 'Execution',
          stages: [
            { label: 'Session', tone: 'accent' },
            { label: 'Runner', tone: 'good' },
            { label: 'Tool calls', tone: 'active' },
            { label: 'Response', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'adk-3',
        caption:
          'Delegation — parent agent routes to a sub-agent with a narrower tool set (supervisor-like).',
        frame: {
          kind: 'flow',
          heading: 'Sub-agent call',
          stages: [
            { label: 'Root agent', tone: 'accent' },
            { label: 'Route', tone: 'warn' },
            { label: 'Sub-agent', tone: 'active' },
            { label: 'Result up', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'adk-4',
        caption:
          'Portability — kits speed integration with a cloud; keep business logic and policies cloud-agnostic where you can.',
        callout: 'Vendor ADKs change quickly — wrap at the edges.',
        frame: {
          kind: 'ranking',
          heading: 'Practical advice',
          columns: [
            {
              title: 'Do',
              items: [
                { label: 'Own prompts + eval sets', tone: 'good' },
                { label: 'Isolate tool authz', tone: 'good' },
              ],
            },
            {
              title: 'Avoid',
              items: [
                { label: 'Business rules only in vendor UI', tone: 'bad' },
              ],
            },
          ],
        },
      },
    ],
  },

  litellm: {
    title: 'LiteLLM',
    description: 'One OpenAI-compatible interface over many providers — routing, fallbacks, and spend tracking.',
    legend: [
      { tone: 'accent', label: 'app' },
      { tone: 'good', label: 'LiteLLM proxy' },
      { tone: 'active', label: 'providers' },
    ],
    mathNote:
      'LiteLLM translates a common completion/chat schema to provider-specific APIs. Useful for multi-provider routing, retries, and budget caps — it does not improve model quality by itself.',
    steps: [
      {
        id: 'll-1',
        caption:
          'Without a router — every provider SDK is a separate code path and failure mode.',
        frame: {
          kind: 'panels',
          heading: 'N SDKs',
          panels: [
            { title: 'App', body: 'if openai: … elif anthropic: … elif …', tone: 'bad' },
          ],
        },
      },
      {
        id: 'll-2',
        caption:
          'With LiteLLM — one client shape; model string selects the backend.',
        frame: {
          kind: 'flow',
          heading: 'Unified call',
          stages: [
            { label: 'App', detail: 'chat.completions', tone: 'accent' },
            { label: 'LiteLLM', tone: 'good' },
            { label: 'Provider API', tone: 'active' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'll-3',
        caption:
          'Fallbacks — if primary 429s/5xx, try the next model in the list. Latency rises; availability rises.',
        frame: {
          kind: 'timeline',
          heading: 'Fallback chain',
          events: [
            { label: 'gpt-primary', detail: '429', tone: 'bad', marker: 'error' },
            { label: 'fallback-1', detail: 'success', tone: 'good', marker: 'done' },
          ],
          activeIndex: 1,
          state: [
            { key: 'attempts', value: '2', changed: true },
            { key: 'model_used', value: 'fallback-1', changed: true },
          ],
        },
      },
      {
        id: 'll-4',
        caption:
          'Ops features — budgets, logging callbacks, virtual keys. Still verify provider-specific limits yourself.',
        callout: 'A proxy is infrastructure — monitor it like any dependency.',
        frame: {
          kind: 'ranking',
          heading: 'Common knobs',
          columns: [
            {
              title: 'Controls',
              items: [
                { label: 'max budget / rpm', tone: 'good' },
                { label: 'retry + fallback lists', tone: 'good' },
                { label: 'spend logs', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'framework-comparison': {
    title: 'Framework comparison',
    description: 'Choose by primary abstraction: chains, graphs, indexes, crews, or provider routers.',
    legend: [
      { tone: 'good', label: 'strong fit' },
      { tone: 'warn', label: 'possible' },
      { tone: 'muted', label: 'not the point' },
    ],
    mathNote:
      'There is no globally best framework. Match the abstraction to the problem: document Q&A → index-centric; durable workflows → graph; multi-role collaboration → crew/chat; multi-cloud models → router. Always keep evals outside the framework fashion cycle.',
    steps: [
      {
        id: 'fc-1',
        caption:
          'Map problems to abstractions — start from the job, not the GitHub stars.',
        frame: {
          kind: 'ranking',
          heading: 'Job → abstraction',
          columns: [
            {
              title: 'Job',
              items: [
                { label: 'Doc Q&A / RAG', tone: 'good' },
                { label: 'Stateful tool loops', tone: 'good' },
                { label: 'Role crews', tone: 'good' },
                { label: 'Multi-provider models', tone: 'good' },
              ],
            },
            {
              title: 'Lean toward',
              items: [
                { label: 'LlamaIndex (+ any LLM)', tone: 'good' },
                { label: 'LangGraph / ADK-style', tone: 'good' },
                { label: 'CrewAI / AutoGen', tone: 'good' },
                { label: 'LiteLLM', tone: 'good' },
              ],
            },
          ],
        },
      },
      {
        id: 'fc-2',
        caption:
          'Overlap is real — LangChain can do RAG; LlamaIndex can do agents. Prefer the library whose defaults match your center of gravity.',
        frame: {
          kind: 'panels',
          heading: 'Center of gravity',
          panels: [
            { title: 'LangChain', body: 'General composition + ecosystem breadth.', tone: 'accent' },
            { title: 'LangGraph', body: 'Explicit durable control flow.', tone: 'accent' },
            { title: 'LlamaIndex', body: 'Indexes and query engines first.', tone: 'accent' },
          ],
        },
      },
      {
        id: 'fc-3',
        caption:
          'Cost of switching — prompts and evals should be portable; deep framework lock-in should not hold your policies.',
        frame: {
          kind: 'bars',
          heading: 'Portability effort (illustrative)',
          bars: [
            { label: 'prompts + eval sets', value: 0.2, tone: 'good', note: 'low' },
            { label: 'tool schemas', value: 0.4, tone: 'warn' },
            { label: 'framework-specific graphs', value: 0.85, tone: 'bad', note: 'high' },
          ],
          format: 'decimal2',
          max: 1,
        },
      },
      {
        id: 'fc-4',
        caption:
          'Decision rule — prototype in the friendliest fit, productionise with clear state, guardrails, and evals regardless of brand.',
        callout: 'Frameworks are accelerators. Architecture and measurement remain yours.',
        frame: {
          kind: 'flow',
          heading: 'Sane path',
          stages: [
            { label: 'Define evals', tone: 'good' },
            { label: 'Pick abstraction', tone: 'accent' },
            { label: 'Thin wrappers', tone: 'warn' },
            { label: 'Ship + measure', tone: 'good' },
          ],
          activeIndex: 0,
        },
      },
    ],
  },
};
