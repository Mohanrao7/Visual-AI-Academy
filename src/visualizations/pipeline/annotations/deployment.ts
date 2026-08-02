import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  'llm-app-serving': {
    subject: 'one chat request at 09:04:12 during a traffic spike',
    stages: {
      'sv-1': {
        name: 'Backend API',
        op: 'hold the vendor key server-side and forward the call to inference',
        out: 'inference call · key never leaves API',
        in: 'browser POST /chat · 1.2 kB',
      },
      'sv-2': {
        name: 'Sync/async router',
        op: 'choose a blocking reply or a queued job by expected decode time',
        out: 'sync HTTP chosen · decode under 8 s',
      },
      'sv-3': {
        name: 'Admission control',
        op: 'shed load past 50 in-flight instead of accepting all 500',
        out: '50 in flight · 450 shed with 429',
      },
      'sv-4': {
        name: 'Production gates',
        op: 'check auth, the max_tokens cap, timeouts with jitter and error codes',
        out: '4 gates pass · 200 OK to the client',
      },
    },
  },

  'fastapi-role': {
    subject: 'one POST /v1/chat body arriving at the Python API',
    stages: {
      'fa-1': {
        name: 'FastAPI route',
        op: 'validate the body, resolve the auth dependency, call the service',
        out: 'ChatRequest(model, messages) · authed',
        in: 'raw JSON body + bearer token',
      },
      'fa-2': {
        name: 'Domain service',
        op: 'run prompts and policy in a module you can test without HTTP',
        out: 'prompt built · provider client called',
      },
      'fa-3': {
        name: 'SSE generator',
        op: 'yield each provider chunk as an SSE event from an async generator',
        out: 'text/event-stream · 2 chunks · [DONE]',
      },
      'fa-4': {
        name: 'Event loop guard',
        op: 'keep heavy CPU work and long agent runs out of the request handler',
        out: 'I/O awaited · long runs to job queue',
      },
    },
  },

  docker: {
    subject: 'one release artifact from Dockerfile to running container',
    stages: {
      'dk-1': {
        name: 'docker build',
        op: 'assemble the app and pinned dependencies into layered image',
        out: 'image sha256:8f3c… · 0.4 GB',
        in: 'Dockerfile + pinned requirements.txt',
      },
      'dk-2': {
        name: 'Container runtime',
        op: 'run the image with cpu/memory limits and inject the key at start',
        out: 'api up · 2 cpus, 4 GiB, key from secret',
      },
      'dk-3': {
        name: 'Compose stack',
        op: 'start api, worker and redis together so dev matches production',
        out: '3 services: api, worker, redis',
      },
      'dk-4': {
        name: 'Image size check',
        op: 'weigh the image and decide whether model weights ship inside it',
        out: '0.4 GB API vs 14 GB with 7B weights',
      },
    },
  },

  'kubernetes-overview': {
    subject: 'a burst of chat requests hitting the cluster edge',
    stages: {
      'k8-1': {
        name: 'Node pools',
        op: 'split stateless api pods from GPU workers onto separate pools',
        out: 'CPU pool: api · GPU pool: workers',
        in: 'a burst of chat requests at the edge',
      },
      'k8-2': {
        name: 'Ingress',
        op: 'route public traffic to the api Service and hand jobs to the queue',
        out: 'job queued · workers pull, no public IP',
      },
      'k8-3': {
        name: 'Health probes',
        op: 'poll cheap /healthz instead of /generate with a 2 s timeout',
        out: 'pod stays ready through 60 s decode',
      },
      'k8-4': {
        name: 'Worker autoscaler',
        op: 'scale worker replicas on queue lag, not on api request rate',
        out: 'depth 80 → 4 replicas → drains to 15',
      },
    },
  },

  bedrock: {
    subject: 'one Converse call from a service inside the AWS account',
    stages: {
      'bd-1': {
        name: 'Bedrock endpoint',
        op: 'sign the call with IAM creds and route the model id to its backend',
        out: 'model id resolved · completion returned',
        in: 'a Converse request with SigV4 creds',
      },
      'bd-2': {
        name: 'Account guardrails',
        op: 'force the call through a VPC endpoint and log it to CloudTrail',
        out: 'least-privilege IAM · in-region · audited',
      },
      'bd-3': {
        name: 'Vector store',
        op: 'retrieve passages from OpenSearch and assemble them into the prompt',
        out: 'grounded prompt → Bedrock generate',
      },
      'bd-4': {
        name: 'Provider adapter',
        op: 'map complete(messages, tools) onto the Bedrock Converse shape',
        out: 'one interface · Bedrock swappable',
      },
    },
  },

  'vertex-ai': {
    subject: 'one GenerateContent call from a GCP service',
    stages: {
      'vx-1': {
        name: 'Vertex API',
        op: 'authenticate with ADC or a service account, then call the model',
        out: 'candidate text · usage 1,240 tokens',
        in: 'a GenerateContent request with ADC',
      },
      'vx-2': {
        name: 'Deployed endpoint',
        op: 'pick a pay-per-call API model or a GPU endpoint you size yourself',
        out: 'API model · no machine type to own',
      },
      'vx-3': {
        name: 'Grounding service',
        op: 'attach search results to the query, then verify citations in your app',
        out: 'answer + 3 citations · 1 unverified',
      },
      'vx-4': {
        name: 'Your SDK wrapper',
        op: 'version prompts and tools, then alarm on quota before users notice',
        out: 'prompt v7 pinned · quota alarm armed',
      },
    },
  },

  'azure-ai': {
    subject: 'one chat completion during a token-per-minute spike',
    stages: {
      'az-1': {
        name: 'Azure deployment',
        op: 'route to a deployment name in one resource and region, not a slug',
        out: 'chat deployment in eastus · bound',
        in: 'a chat completion request from the app',
      },
      'az-2': {
        name: 'TPM quota meter',
        op: 'meter tokens per minute against the quota for this deployment',
        out: 'demand 160 of quota 100 · 60 throttled',
      },
      'az-3': {
        name: 'Content filter',
        op: 'classify the completion and separate blocks from 429s and 5xx',
        out: 'filter block logged apart from 5xx',
      },
      'az-4': {
        name: 'Managed identity',
        op: 'swap the static .env key for RBAC over a private endpoint',
        out: 'MI token · no key in the repo',
      },
    },
  },

  streaming: {
    subject: 'one 6-token answer streamed to an open browser tab',
    stages: {
      'st-1': {
        name: 'Transport mode',
        op: 'compare holding the whole completion against sending it as it decodes',
        out: '15% shown at t1 vs 0% buffered',
        in: 'a decode that takes the same total time',
      },
      'st-2': {
        name: 'SSE delta stream',
        op: 'push each decoded token as its own event instead of one final body',
        out: '"The refund window is 30 days" · 6 deltas',
        loop: { group: 'stream', iteration: 6, of: 6, label: 'token delta' },
      },
      'st-3': {
        name: 'Cancel handler',
        op: 'abort the upstream generation when the client TCP connection closes',
        out: 'stream aborted · 0 extra tokens billed',
        lane: 'cancel path',
      },
      'st-4': {
        name: 'Output filters',
        op: 'redact secrets per chunk, then validate the schema at end of stream',
        out: 'chunks redacted · JSON valid at [DONE]',
        in: 'the 6 delta chunks on the happy path',
      },
    },
  },

  'monitoring-basics': {
    subject: 'one day of production traffic flowing into telemetry',
    stages: {
      'mb-1': {
        name: 'Latency monitor',
        op: 'aggregate request durations into a p95 series and flag the spike',
        out: 'p95 800 → 2,400 ms · incident marked',
        in: 'request traces from the API and workers',
      },
      'mb-2': {
        name: 'Token accounting',
        op: 'sum input and output tokens per tenant and price the day',
        out: '12.4M in + 3.1M out tokens today',
      },
      'mb-3': {
        name: 'Error taxonomy',
        op: 'split failures by class so one budget burn names its own cause',
        out: '429 35% · tool 5xx 20% · timeouts 18%',
      },
      'mb-4': {
        name: 'Quality sampler',
        op: 'score a daily sample of traces, then fix the prompt or the index',
        out: 'N/day scored · prompt + index patched',
        loop: { group: 'review', iteration: 1, label: 'daily review' },
      },
    },
  },
};
