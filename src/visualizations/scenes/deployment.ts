import type { SceneMap } from './types';

export const scenes: SceneMap = {
  'llm-app-serving': {
    title: 'Serving an LLM app',
    description: 'Client → API → inference → post-process — where latency and failure land.',
    legend: [
      { tone: 'accent', label: 'your API' },
      { tone: 'active', label: 'model inference' },
      { tone: 'good', label: 'response path' },
    ],
    mathNote:
      'End-to-end latency ≈ network + queue + prefill + decode×tokens + post-process. Throughput is limited by GPU/CPU memory and batching. Timeouts must exceed worst-case decode for your max tokens.',
    steps: [
      {
        id: 'sv-1',
        caption:
          'Request path — the browser never talks to the model vendor with your secret keys; your backend does.',
        frame: {
          kind: 'flow',
          heading: 'Typical serve path',
          stages: [
            { label: 'Client', tone: 'accent' },
            { label: 'Your API', tone: 'accent' },
            { label: 'Auth + validate', tone: 'good' },
            { label: 'Inference', tone: 'active' },
            { label: 'Filter + return', tone: 'good' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'sv-2',
        caption:
          'Sync vs async — short completions can block an HTTP request; long jobs need queues and webhooks.',
        frame: {
          kind: 'ranking',
          heading: 'Pattern choice',
          columns: [
            {
              title: 'Sync HTTP',
              items: [
                { label: 'Simple', tone: 'good' },
                { label: 'Fails on long decode / load spikes', tone: 'bad' },
              ],
            },
            {
              title: 'Queue + worker',
              items: [
                { label: 'Survives slow jobs', tone: 'good' },
                { label: 'Needs job status UX', tone: 'warn' },
              ],
            },
          ],
        },
      },
      {
        id: 'sv-3',
        caption:
          'Backpressure — when inference saturates, queue or shed load; do not unbounded-accept until OOM.',
        frame: {
          kind: 'bars',
          heading: 'Queue depth under spike',
          bars: [
            { label: 'accepted without limit', value: 500, tone: 'bad' },
            { label: 'shed at 50 in-flight', value: 50, tone: 'good' },
          ],
          format: 'raw',
          max: 520,
        },
      },
      {
        id: 'sv-4',
        caption:
          'Checklist — auth, timeouts, token caps, logging of prompt hashes / ids, and graceful vendor errors.',
        callout: 'Serving is product reliability, not just “call the SDK.”',
        frame: {
          kind: 'ranking',
          heading: 'Minimum production gates',
          columns: [
            {
              title: 'Gate',
              items: [
                { label: 'API auth + rate limit', tone: 'good' },
                { label: 'max_tokens hard cap', tone: 'good' },
                { label: 'timeouts + retries with jitter', tone: 'good' },
                { label: 'structured error codes to clients', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'fastapi-role': {
    title: 'FastAPI’s role',
    description: 'A Python API layer for validation, auth, and orchestration — not the model itself.',
    legend: [
      { tone: 'accent', label: 'FastAPI route' },
      { tone: 'active', label: 'downstream model' },
    ],
    mathNote:
      'FastAPI gives typed request/response models (Pydantic), dependency injection for auth, and async handlers suitable for I/O-bound calls to model APIs. GPU inference often still lives in a separate worker.',
    steps: [
      {
        id: 'fa-1',
        caption:
          'Route — validate body, authenticate, then call a service that talks to the model.',
        frame: {
          kind: 'flow',
          heading: 'POST /v1/chat',
          stages: [
            { label: 'Pydantic validate', tone: 'accent' },
            { label: 'Auth dependency', tone: 'good' },
            { label: 'Service.generate()', tone: 'active' },
            { label: 'Response model', tone: 'accent' },
          ],
          activeIndex: 0,
        },
      },
      {
        id: 'fa-2',
        caption:
          'Keep routes thin — business rules and prompts live in services/modules you can unit test without HTTP.',
        frame: {
          kind: 'panels',
          heading: 'Layering',
          panels: [
            { title: 'API', body: 'HTTP + auth + status codes.', tone: 'accent' },
            { title: 'Domain', body: 'RAG, agents, policies.', tone: 'good' },
            { title: 'Providers', body: 'OpenAI/Bedrock/etc. clients.', tone: 'active' },
          ],
        },
      },
      {
        id: 'fa-3',
        caption:
          'Streaming — yield SSE/chunks from an async generator so clients see tokens early.',
        frame: {
          kind: 'timeline',
          heading: 'SSE stream',
          events: [
            { label: 'headers', detail: 'text/event-stream', marker: 'step' },
            { label: 'token…', detail: 'chunk', tone: 'active', marker: 'step' },
            { label: 'token…', detail: 'chunk', tone: 'active', marker: 'step' },
            { label: '[DONE]', detail: 'close', tone: 'good', marker: 'done' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'fa-4',
        caption:
          'FastAPI is one good option among many — the pattern (typed API gateway) matters more than the brand.',
        callout: 'Do not run heavy local GPU batches inside request handlers.',
        frame: {
          kind: 'ranking',
          heading: 'Do / don’t',
          columns: [
            {
              title: 'Do in FastAPI',
              items: [
                { label: 'Validate + auth', tone: 'good' },
                { label: 'Orchestrate I/O calls', tone: 'good' },
              ],
            },
            {
              title: 'Don’t',
              items: [
                { label: 'Block event loop on huge CPU work', tone: 'bad' },
                { label: 'Embed long agent runs without jobs', tone: 'bad' },
              ],
            },
          ],
        },
      },
    ],
  },

  docker: {
    title: 'Docker for LLM apps',
    description: 'Package API + workers with locked dependencies — same artifact from laptop to server.',
    legend: [
      { tone: 'good', label: 'image layers' },
      { tone: 'accent', label: 'runtime container' },
    ],
    mathNote:
      'Images pin OS packages, Python deps, and sometimes model weights. Separate CPU API images from GPU worker images. Never bake secrets into layers — inject at runtime.',
    steps: [
      {
        id: 'dk-1',
        caption:
          'Image — build a reproducible filesystem with your app and dependencies.',
        frame: {
          kind: 'flow',
          heading: 'Build',
          stages: [
            { label: 'Dockerfile', tone: 'accent' },
            { label: 'docker build', tone: 'active' },
            { label: 'Image digest', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'dk-2',
        caption:
          'Run — container gets CPU/memory limits, env for API keys, and mounts for caches if needed.',
        frame: {
          kind: 'panels',
          heading: 'Runtime config',
          panels: [
            { title: 'Env', body: 'MODEL_API_KEY from secret store — not FROM Dockerfile.', tone: 'good' },
            { title: 'Limits', body: 'cpus/memory to protect neighbours.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'dk-3',
        caption:
          'Multi-service — API, worker, and maybe a local redis compose together for dev parity.',
        frame: {
          kind: 'ranking',
          heading: 'Compose services',
          columns: [
            {
              title: 'Service',
              items: [
                { label: 'api', score: 'FastAPI', tone: 'accent' },
                { label: 'worker', score: 'agent jobs', tone: 'active' },
                { label: 'redis', score: 'queue/broker', tone: 'good' },
              ],
            },
          ],
        },
      },
      {
        id: 'dk-4',
        caption:
          'Models in images — shipping multi-GB weights bloats deploys; prefer pull-at-start or remote inference.',
        callout: 'Docker solves packaging, not model hosting strategy.',
        frame: {
          kind: 'bars',
          heading: 'Image size (illustrative)',
          bars: [
            { label: 'API only', value: 0.4, tone: 'good', note: 'GB' },
            { label: 'API + 7B weights', value: 14, tone: 'bad', note: 'GB' },
          ],
          format: 'decimal1',
          max: 15,
        },
      },
    ],
  },

  'kubernetes-overview': {
    title: 'Kubernetes overview for LLM apps',
    description: 'Pods, services, and autoscaling — orchestration when one VM is no longer enough.',
    legend: [
      { tone: 'accent', label: 'Deployment' },
      { tone: 'good', label: 'Service / ingress' },
      { tone: 'warn', label: 'GPU node pool' },
    ],
    mathNote:
      'K8s schedules containers onto nodes. LLM workers often need GPU node selectors and careful autoscaling (cold starts are expensive). Health probes must understand long-lived generate requests.',
    steps: [
      {
        id: 'k8-1',
        caption:
          'Workload split — stateless API Deployment vs GPU worker Deployment on a separate node pool.',
        frame: {
          kind: 'panels',
          heading: 'Pools',
          panels: [
            { title: 'CPU pool', body: 'api pods, autoscaled on RPS.', tone: 'accent' },
            { title: 'GPU pool', body: 'inference workers, autoscaled on queue depth.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'k8-2',
        caption:
          'Service discovery — ClusterIP/Ingress fronts the API; workers pull from a queue rather than taking public traffic.',
        frame: {
          kind: 'flow',
          heading: 'Traffic',
          stages: [
            { label: 'Ingress', tone: 'good' },
            { label: 'api Service', tone: 'accent' },
            { label: 'Queue', tone: 'active' },
            { label: 'gpu workers', tone: 'warn' },
          ],
          activeIndex: 0,
        },
      },
      {
        id: 'k8-3',
        caption:
          'Probes — liveness ≠ “can finish a 60s generation.” Use startup probes and separate readiness from long jobs.',
        frame: {
          kind: 'ranking',
          heading: 'Probe pitfalls',
          columns: [
            {
              title: 'Bad',
              items: [{ label: 'liveness hits /generate with 2s timeout', tone: 'bad' }],
            },
            {
              title: 'Better',
              items: [{ label: 'cheap /healthz; jobs async', tone: 'good' }],
            },
          ],
        },
      },
      {
        id: 'k8-4',
        caption:
          'Autoscaling signal — RPS for APIs; queue lag or GPU util for workers. Wrong signal → thrash or starvation.',
        callout: 'K8s amplifies good and bad architecture equally.',
        frame: {
          kind: 'chart',
          heading: 'Workers vs queue lag',
          series: [
            { label: 'queue depth', tone: 'warn', points: [10, 40, 80, 60, 30, 15] },
            { label: 'replicas', tone: 'good', points: [1, 1, 3, 4, 3, 2], dashed: true },
          ],
          xLabel: 'time',
          yLabel: 'relative scale',
          yMax: 90,
        },
      },
    ],
  },

  bedrock: {
    title: 'Amazon Bedrock (conceptual)',
    description: 'Managed foundation models via AWS APIs — IAM, regions, and serverless invocation.',
    legend: [
      { tone: 'accent', label: 'your app on AWS' },
      { tone: 'good', label: 'Bedrock API' },
    ],
    mathNote:
      'Bedrock exposes multiple model providers behind AWS auth and networking controls. You still design prompts, RAG, and guardrails; AWS handles model hosting/scaling trade-offs within service limits.',
    steps: [
      {
        id: 'bd-1',
        caption:
          'Invoke — your service calls Bedrock with IAM credentials; model id selects the backend foundation model.',
        frame: {
          kind: 'flow',
          heading: 'InvokeModel / Converse',
          stages: [
            { label: 'App', tone: 'accent' },
            { label: 'IAM auth', tone: 'good' },
            { label: 'Bedrock', tone: 'good' },
            { label: 'Foundation model', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'bd-2',
        caption:
          'Controls — VPC endpoints, SCPs, and CloudTrail matter as much as prompt quality in enterprises.',
        frame: {
          kind: 'ranking',
          heading: 'Enterprise levers',
          columns: [
            {
              title: 'Lever',
              items: [
                { label: 'IAM least privilege', tone: 'good' },
                { label: 'Region residency', tone: 'good' },
                { label: 'Model access enablement', tone: 'warn' },
              ],
            },
          ],
        },
      },
      {
        id: 'bd-3',
        caption:
          'RAG on AWS — often pair Bedrock with a vector store (OpenSearch, etc.) you operate or buy.',
        frame: {
          kind: 'flow',
          heading: 'Common pattern',
          stages: [
            { label: 'Retrieve', tone: 'active' },
            { label: 'Assemble', tone: 'accent' },
            { label: 'Bedrock generate', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'bd-4',
        caption:
          'Portability — keep prompts/tools behind an interface so Bedrock is a provider, not your architecture.',
        callout: 'Managed models still need your eval harness.',
        frame: {
          kind: 'panels',
          heading: 'Abstraction',
          panels: [
            { title: 'Interface', body: 'complete(messages, tools) → result', tone: 'good' },
            { title: 'Adapter', body: 'Bedrock Converse mapping', tone: 'accent' },
          ],
        },
      },
    ],
  },

  'vertex-ai': {
    title: 'Vertex AI (conceptual)',
    description: 'Google Cloud’s managed ML/LLM platform — endpoints, Model Garden, and Gemini APIs.',
    legend: [
      { tone: 'accent', label: 'GCP project' },
      { tone: 'good', label: 'Vertex endpoint' },
    ],
    mathNote:
      'Vertex covers prediction endpoints, pipelines, and generative APIs. Networking (VPC-SC), IAM, and quotas dominate production issues once prompts work in a notebook.',
    steps: [
      {
        id: 'vx-1',
        caption:
          'Call path — app in GCP (or elsewhere) invokes a Vertex generative / prediction API with Google auth.',
        frame: {
          kind: 'flow',
          heading: 'GenerateContent-style path',
          stages: [
            { label: 'App', tone: 'accent' },
            { label: 'ADC / SA auth', tone: 'good' },
            { label: 'Vertex API', tone: 'good' },
            { label: 'Model', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'vx-2',
        caption:
          'Deployed endpoints — for custom/self-hosted models on Vertex, you manage machine type and autoscaling.',
        frame: {
          kind: 'panels',
          heading: 'Managed vs deployed',
          panels: [
            { title: 'API models', body: 'Pay-per-call generative models.', tone: 'good' },
            { title: 'Endpoints', body: 'You size GPUs; more ops ownership.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'vx-3',
        caption:
          'Data grounding — Vertex offers grounding/search integrations; still verify citations in your app layer.',
        frame: {
          kind: 'flow',
          heading: 'Grounded answer path',
          stages: [
            { label: 'Query', tone: 'accent' },
            { label: 'Grounding/retrieve', tone: 'active' },
            { label: 'Generate', tone: 'good' },
            { label: 'Your citation check', tone: 'good' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'vx-4',
        caption:
          'Same lesson as other clouds — wrap the SDK; own evals, budgets, and PII handling.',
        callout: 'Cloud consoles are not your source of truth for prompt versions.',
        frame: {
          kind: 'ranking',
          heading: 'Own these',
          columns: [
            {
              title: 'Artifacts',
              items: [
                { label: 'Prompt + tool version control', tone: 'good' },
                { label: 'Offline eval reports', tone: 'good' },
                { label: 'Quota alarms', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },

  'azure-ai': {
    title: 'Azure AI (conceptual)',
    description: 'Azure OpenAI / AI Studio patterns — resource deployment, keys/RBAC, and content filters.',
    legend: [
      { tone: 'accent', label: 'Azure resource' },
      { tone: 'good', label: 'deployment name' },
    ],
    mathNote:
      'Azure OpenAI uses deployments (capacity + model version) behind Azure auth. Content filters and abuse monitoring are platform features — application-level policy still required.',
    steps: [
      {
        id: 'az-1',
        caption:
          'Deployment model — you call a deployment name in a resource/region, not a raw open model slug alone.',
        frame: {
          kind: 'flow',
          heading: 'Chat completions',
          stages: [
            { label: 'App', tone: 'accent' },
            { label: 'Azure auth', tone: 'good' },
            { label: 'Resource + deployment', tone: 'good' },
            { label: 'Model', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'az-2',
        caption:
          'Capacity — TPM/RPM quotas are per deployment. Spikes need either higher quota or queueing.',
        frame: {
          kind: 'bars',
          heading: 'Hitting TPM',
          bars: [
            { label: 'quota', value: 100, tone: 'good' },
            { label: 'spike demand', value: 160, tone: 'bad' },
          ],
          format: 'raw',
          max: 180,
          footer: 'Units illustrative (tokens/min normalised).',
        },
      },
      {
        id: 'az-3',
        caption:
          'Content filtering — platform may block or modify outputs; log filter results separately from model errors.',
        frame: {
          kind: 'ranking',
          heading: 'Error classes',
          columns: [
            {
              title: 'Class',
              items: [
                { label: '429 rate limit', tone: 'warn' },
                { label: 'content filter block', tone: 'bad' },
                { label: '5xx service', tone: 'bad' },
              ],
            },
          ],
        },
      },
      {
        id: 'az-4',
        caption:
          'Enterprise networking — private endpoints and Managed Identity beat shipping keys in env files.',
        callout: 'Prefer RBAC + MI over long-lived keys when you can.',
        frame: {
          kind: 'panels',
          heading: 'Auth posture',
          panels: [
            { title: 'Better', body: 'Managed Identity → Azure OpenAI.', tone: 'good' },
            { title: 'Weaker', body: 'Static key in a .env committed “temporarily.”', tone: 'bad' },
          ],
        },
      },
    ],
  },

  streaming: {
    title: 'Streaming tokens',
    description: 'Send partial tokens as they decode — better UX, harder cancellation and billing accounting.',
    legend: [
      { tone: 'active', label: 'token chunk' },
      { tone: 'good', label: 'finalise' },
    ],
    mathNote:
      'Streaming reduces time-to-first-token (TTFT) perception. Total tokens (and cost) are similar; you must still enforce max tokens and handle client disconnects (cancel upstream generation when possible).',
    steps: [
      {
        id: 'st-1',
        caption:
          'Buffered vs streamed — waiting for the full completion feels slower even when total time is equal.',
        frame: {
          kind: 'chart',
          heading: 'Perceived progress',
          series: [
            { label: 'buffered (all at end)', tone: 'bad', points: [0, 0, 0, 0, 1] },
            { label: 'streamed', tone: 'good', points: [0.15, 0.35, 0.55, 0.75, 1] },
          ],
          xLabel: 'wall time →',
          yLabel: 'fraction shown',
          yMax: 1.05,
        },
      },
      {
        id: 'st-2',
        caption:
          'Protocol — often SSE or WebSocket; each event carries a delta string.',
        frame: {
          kind: 'tokens',
          heading: 'SSE deltas',
          tokens: [
            { text: 'The', tone: 'active' },
            { text: ' refund', tone: 'active' },
            { text: ' window', tone: 'active' },
            { text: ' is', tone: 'active' },
            { text: ' 30', tone: 'active' },
            { text: ' days', tone: 'good' },
          ],
        },
      },
      {
        id: 'st-3',
        caption:
          'Cancel — if the user navigates away, abort the provider stream to stop burning tokens.',
        frame: {
          kind: 'timeline',
          heading: 'Disconnect handling',
          events: [
            { label: 'Client gone', detail: 'TCP close', tone: 'warn', marker: 'pause' },
            { label: 'API aborts', detail: 'cancel upstream', tone: 'good', marker: 'step' },
            { label: 'Without abort', detail: 'provider still bills', tone: 'bad', marker: 'error' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'st-4',
        caption:
          'Post-filters — some safety checks need the full text; others can scan incrementally. Design explicitly.',
        callout: 'Streaming is UX + systems design, not a free feature flag.',
        frame: {
          kind: 'panels',
          heading: 'Filter timing',
          panels: [
            { title: 'Incremental', body: 'Redact secrets as chunks arrive.', tone: 'good' },
            { title: 'End-of-stream', body: 'JSON schema validate before marking success.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  'monitoring-basics': {
    title: 'Monitoring basics for LLM apps',
    description: 'RED/USE plus LLM-specific signals — latency, tokens, error classes, and quality samples.',
    legend: [
      { tone: 'good', label: 'healthy' },
      { tone: 'bad', label: 'page' },
    ],
    mathNote:
      'Track request rate, error rate, and duration (RED). Add tokens in/out, cache hit rate, retrieval hit rate, and tool failure rate. Quality needs sampled human/LLM-judge evals — metrics alone miss polite wrong answers.',
    steps: [
      {
        id: 'mb-1',
        caption:
          'Classic API metrics still apply — if p95 latency explodes, users leave before “quality” matters.',
        frame: {
          kind: 'chart',
          heading: 'p95 latency',
          series: [{ label: 'p95 ms', tone: 'warn', points: [800, 900, 1100, 2400, 1800, 1200] }],
          xLabel: 'time',
          yLabel: 'ms',
          yMax: 2600,
          markers: [{ atIndex: 3, label: 'incident' }],
        },
      },
      {
        id: 'mb-2',
        caption:
          'Token economics — input vs output tokens drive cost; alert on spend anomalies per tenant.',
        frame: {
          kind: 'bars',
          heading: 'Daily tokens by type',
          bars: [
            { label: 'input', value: 12.4, tone: 'accent', note: 'M tokens' },
            { label: 'output', value: 3.1, tone: 'good', note: 'M tokens' },
          ],
          format: 'decimal1',
          max: 14,
        },
      },
      {
        id: 'mb-3',
        caption:
          'Error taxonomy — separate rate limits, timeouts, content filters, tool failures, and 5xx.',
        frame: {
          kind: 'ranking',
          heading: 'Error budget burn',
          columns: [
            {
              title: 'Class',
              items: [
                { label: '429 provider', score: '35%', tone: 'warn' },
                { label: 'tool 5xx', score: '20%', tone: 'bad' },
                { label: 'timeouts', score: '18%', tone: 'bad' },
                { label: 'filter blocks', score: '12%', tone: 'muted' },
              ],
            },
          ],
        },
      },
      {
        id: 'mb-4',
        caption:
          'Quality sampling — log traces (prompt id, retrieval ids) and score a sample daily.',
        callout: 'If you cannot reconstruct why an answer happened, you cannot operate it.',
        frame: {
          kind: 'flow',
          heading: 'Feedback loop',
          stages: [
            { label: 'Trace log', tone: 'accent' },
            { label: 'Sample N/day', tone: 'active' },
            { label: 'Score', tone: 'good' },
            { label: 'Fix prompts/index', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
    ],
  },
};
