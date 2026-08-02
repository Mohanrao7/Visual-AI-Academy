import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  langchain: {
    subject: 'one question "What is our refund window?"',
    stages: {
      'lc-1': {
        name: 'Runnable chain',
        op: 'pipe the question through prompt, chat model and output parser',
        out: 'parsed answer · str | JSON',
        in: '{question} from your app code',
      },
      'lc-2': {
        name: 'Retriever',
        op: 're-run the chain with top-k docs stuffed into the prompt first',
        out: 'top-k docs stuffed into {context}',
      },
      'lc-3': {
        name: 'Agent executor',
        op: 'pick a tool, call it, feed the observation back to the model',
        out: 'tool_call search → hits observed',
        loop: { group: 'agent', iteration: 1, label: 'agent turn' },
      },
      'lc-4': {
        name: 'Ownership check',
        op: 'mark which production concerns the library does not cover for you',
        out: 'is: adapters · is not: safety layer',
      },
    },
  },

  langgraph: {
    subject: 'one question through a retrieve-grade graph',
    stages: {
      'lg-1': {
        name: 'Graph runner',
        op: 'run each node as a function on shared state and follow the edges',
        out: 'grade edge routes to rewrite, not end',
        in: 'the question "What is our refund window?"',
        loop: { group: 'graph', iteration: 1, label: 'graph cycle' },
      },
      'lg-2': {
        name: 'State channel',
        op: 'let each node read and write typed fields on one shared state object',
        out: 'docs=2 · answer=draft · next=rewrite',
        loop: { group: 'graph', iteration: 1, label: 'graph cycle' },
      },
      'lg-3': {
        name: 'Checkpointer',
        op: 'persist the state after each node so a pause or crash can resume',
        out: 'checkpoint saved · resumable at grade',
        loop: { group: 'graph', iteration: 1, label: 'graph cycle' },
      },
      'lg-4': {
        name: 'Fit check',
        op: 'check whether the flow really needs cycles, branching and pauses',
        out: 'graph if it loops; chain if A→B→C once',
      },
    },
  },

  llamaindex: {
    subject: 'a folder of policy PDFs and one question about them',
    stages: {
      'li-1': {
        name: 'Ingestion pipeline',
        op: 'load the files, parse them into nodes and embed every node',
        out: 'VectorStoreIndex of embedded nodes',
        in: 'a folder of policy PDFs from disk',
        lane: 'offline',
      },
      'li-2': {
        name: 'Query engine',
        op: 'retrieve the matching nodes and synthesise one answer over them',
        out: 'answer + the source nodes it used',
        in: 'the question "What is our refund window?"',
      },
      'li-3': {
        name: 'Index selector',
        op: 'pick the index type whose lookup matches how users actually ask',
        out: 'VectorStoreIndex · semantic Q&A',
      },
      'li-4': {
        name: 'Positioning check',
        op: "match the product shape against the framework's core abstraction",
        out: 'fit: doc copilots · not: agent ops',
      },
    },
  },

  crewai: {
    subject: 'one brief "turn Q3 data into a report"',
    stages: {
      'cr-1': {
        name: 'Crew roster',
        op: 'bind each agent to a role, a goal and the tools it may call',
        out: 'Analyst (+code tool), Writer (no tools)',
        in: 'the brief "turn Q3 data into a report"',
      },
      'cr-2': {
        name: 'Sequential process',
        op: 'run the tasks in order and feed each output into the next as context',
        out: 'Task A metrics.json → Task B draft',
      },
      'cr-3': {
        name: 'Manager agent',
        op: 'delegate the task to a worker, then review and finalise the result',
        out: 'worker result → manager final report',
      },
      'cr-4': {
        name: 'Call counter',
        op: 'count the calls a crew run costs against a single-agent baseline',
        out: '3 calls solo vs 11 for the 3-agent crew',
      },
    },
  },

  autogen: {
    subject: 'one task "plot Q3 revenue"',
    stages: {
      'au-1': {
        name: 'UserProxyAgent',
        op: "execute the assistant's proposed code and return stdout to it",
        out: 'stdout + plot, then interpreted',
        in: 'the task "plot Q3 revenue"',
        loop: { group: 'chat', iteration: 1, label: 'chat round' },
      },
      'au-2': {
        name: 'GroupChat manager',
        op: 'read the message history and choose which agent speaks next',
        out: 'next speaker: UserProxy',
        loop: { group: 'chat', iteration: 1, label: 'chat round' },
      },
      'au-3': {
        name: 'Termination guard',
        op: 'stop the chat on max_rounds, a TERMINATE token or a human halt',
        out: '50 messages capped to 8 rounds',
      },
      'au-4': {
        name: 'Risk review',
        op: 'weigh open-ended dialogue against unowned code side effects',
        out: 'fast to explore, easy to derail',
      },
    },
  },

  'google-adk': {
    subject: 'one user turn through a declared agent',
    stages: {
      'adk-1': {
        name: 'Agent spec',
        op: 'declare the instructions, tool list and sub-agents as one unit',
        out: 'instructions + tools + sub-agents',
        in: 'a user turn arriving at the app',
      },
      'adk-2': {
        name: 'Runner',
        op: 'drive the agent loop, carry session state and fire the callbacks',
        out: 'session state + tool calls issued',
        loop: { group: 'turn', iteration: 1, label: 'runner turn' },
      },
      'adk-3': {
        name: 'Sub-agent route',
        op: 'hand the turn to a sub-agent holding a narrower tool set',
        out: 'sub-agent result passed back up',
        loop: { group: 'turn', iteration: 1, label: 'runner turn' },
      },
      'adk-4': {
        name: 'Portability guard',
        op: 'keep prompts, eval sets and tool authz outside the vendor kit',
        out: 'own prompts + evals · isolate authz',
      },
    },
  },

  litellm: {
    subject: 'one chat.completions call for a summary',
    stages: {
      'll-1': {
        name: 'Per-SDK branch',
        op: 'branch on the provider and call each vendor SDK on its own path',
        out: '3 SDK code paths · 3 failure modes',
        in: 'one chat.completions call',
        lane: 'no router',
      },
      'll-2': {
        name: 'LiteLLM router',
        op: "translate the OpenAI-shaped call into the primary provider's API",
        out: 'request sent to gpt-primary',
        in: 'one chat.completions call',
        loop: { group: 'attempt', iteration: 1, of: 2, label: 'fallback attempt' },
      },
      'll-3': {
        name: 'LiteLLM router',
        op: 'catch the 429 and retry the call against the next model in the list',
        out: 'attempts=2 · model_used=fallback-1',
        loop: { group: 'attempt', iteration: 2, of: 2, label: 'fallback attempt' },
      },
      'll-4': {
        name: 'Proxy controls',
        op: 'apply budget caps, virtual keys and spend logging to every call',
        out: 'max budget/rpm · retries · spend logs',
      },
    },
  },

  'framework-comparison': {
    subject: 'one project brief "build a doc Q&A assistant"',
    stages: {
      'fc-1': {
        name: 'Job router',
        op: 'map the job to the abstraction whose defaults already fit it',
        out: 'Doc Q&A → LlamaIndex (+ any LLM)',
        in: 'the brief "build a doc Q&A assistant"',
      },
      'fc-2': {
        name: 'Gravity check',
        op: 'compare the shortlisted libraries by what their defaults optimise for',
        out: 'LlamaIndex: indexes and query engines',
      },
      'fc-3': {
        name: 'Lock-in meter',
        op: 'score how much of the build must be rewritten to switch framework',
        out: 'prompts 0.2 · tools 0.4 · graphs 0.85',
      },
      'fc-4': {
        name: 'Build path',
        op: 'write evals first, pick the abstraction, then wrap it thinly and ship',
        out: 'evals → abstraction → wrapper → shipped',
      },
    },
  },
};
