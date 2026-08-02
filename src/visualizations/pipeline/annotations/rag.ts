import type { PipelineAnnotationMap } from '../../scenes/types';

export const pipelines: PipelineAnnotationMap = {
  'why-rag': {
    subject: 'the question "What is our refund window?"',
    stages: {
      'wr-1': {
        name: 'Weights-only LLM',
        op: 'answer from training weights alone, with no document lookup',
        in: 'the question, no documents attached',
        out: '"14–30 days" · generic, not yours',
      },
      'wr-2': {
        name: 'Retriever',
        op: 'look up handbook chunks by similarity and add them to the prompt',
        out: 'top-k chunks · §4.2 refund window',
      },
      'wr-3': {
        name: 'Grounded generator',
        op: 'answer from the retrieved passage instead of parametric memory',
        out: '"30 days if unused" · cites §4.2',
      },
      'wr-4': {
        name: 'Failure audit',
        op: 'list what still breaks once the evidence is in the prompt',
        out: '3 faults · miss, ignore, stale',
      },
    },
  },

  chunking: {
    subject: 'the refund policy page, ≈1,200 tokens',
    stages: {
      'ch-1': {
        name: 'Source document',
        op: 'hold the whole policy page as one unit no query can match locally',
        in: 'Customer Handbook §4, one long page',
        out: '4 sections · ≈1,200 tokens',
        lane: 'offline',
      },
      'ch-2': {
        name: 'Fixed-size cutter',
        op: 'cut every 200 tokens, ignoring headings and paragraph boundaries',
        out: 'chunk A ends "if" · B starts "unused"',
        lane: 'offline',
      },
      'ch-3': {
        name: 'Section-aware cutter',
        op: 'cut on section headings and carry 40 tokens of overlap across cuts',
        out: '§4.2 180 tok · +40 overlap · §4.3 210',
        lane: 'offline',
      },
      'ch-4': {
        name: 'Chunk-size sweep',
        op: 'measure recall@5 for each median chunk size on labeled queries',
        out: '200 tok wins · recall@5 78%',
        lane: 'offline eval',
      },
    },
  },

  'embeddings-for-retrieval': {
    subject: 'the refund query and five candidate chunks',
    stages: {
      'er-1': {
        name: 'Shared embedder',
        op: 'embed chunks offline and the query online with the same model',
        in: 'chunk text offline, the question online',
        out: 'query vector + 5 chunk vectors',
      },
      'er-2': {
        name: 'Vector space',
        op: 'place every vector by direction so near means likely relevant',
        out: '6 points · refund cluster hugs query',
      },
      'er-3': {
        name: 'Cosine scorer',
        op: 'score each chunk by cosine similarity to the query and rank them',
        out: 'cos 0.999, 0.994, 0.942 · refund #1',
      },
      'er-4': {
        name: 'Domain check',
        op: 'test whether a general embedder puts "window" near refunds',
        out: '"window" lands near UI docs',
      },
    },
  },

  'vector-db-concept': {
    subject: 'one handbook chunk stored, then one refund query served',
    stages: {
      'vd-1': {
        name: 'Index row',
        op: 'store id, the 768-float vector and metadata, text kept elsewhere',
        in: 'chunk §4.2 with its 768-d embedding',
        out: 'handbook::4.2 · float[768] · 3 fields',
        lane: 'offline',
      },
      'vd-2': {
        name: 'ANN query path',
        op: 'embed the question, search neighbours, filter tenant, fetch text',
        in: 'the question "What is our refund window?"',
        out: 'top-k ids · tenant=acme · text fetched',
      },
      'vd-3': {
        name: 'Index tuning',
        op: 'trade a little recall for latency by searching approximately',
        out: 'HNSW 12 ms · recall≈0.97 vs 420 ms',
      },
      'vd-4': {
        name: 'Freshness check',
        op: 're-chunk, re-embed and upsert when the source document changes',
        in: 'a handbook edit on day 12',
        out: 'stale: index 30 days, CMS 14 days',
        lane: 'offline',
      },
    },
  },

  'similarity-search': {
    subject: 'the refund query against five chunk vectors',
    stages: {
      'ss-1': {
        name: 'Cosine scorer',
        op: 'score all five candidate chunks by cosine similarity to the query',
        in: 'query vector + 5 chunk vectors',
        out: '5 scored · 0.999 high, −0.434 low',
      },
      'ss-2': {
        name: 'Top-k cut',
        op: 'keep the k=2 highest scores and discard every other candidate',
        out: 'top-2 · 0.999, 0.994 · 3 dropped',
      },
      'ss-3': {
        name: 'k sweep',
        op: 'raise k and watch recall and context tokens climb together',
        out: 'k=6 · recall 0.87 · 2.4k tokens',
      },
      'ss-4': {
        name: 'ID query probe',
        op: 'try an exact order id and see dense retrieval return generic docs',
        out: 'ORD-918273 missed · needs BM25',
      },
    },
  },

  'hybrid-search': {
    subject: 'one refund query sent down two retrieval channels',
    stages: {
      'hs-1': {
        name: 'BM25 + vector',
        op: 'run lexical and dense retrieval separately over the same query',
        in: 'the question "What is our refund window?"',
        out: '2 lists · BM25 #1 how-to, vec #1 policy',
      },
      'hs-2': {
        name: 'RRF fusion',
        op: 'add 1/(60 + rank) from each list so docs strong on both rise',
        out: 'RRF 0.0325 policy · 0.0325 how-to',
      },
      'hs-3': {
        name: 'Fused ranking',
        op: 'sort by fused score and keep the top two for the prompt',
        out: 'top-2 · policy, how-to at RRF 0.0325',
      },
      'hs-4': {
        name: 'Coverage check',
        op: 'ask what fusion cannot repair when a doc reached neither list',
        out: '2 gaps · un-ingested, filtered out',
      },
    },
  },

  're-ranking': {
    subject: 'a noisy top-5 shortlist for the refund question',
    stages: {
      'rr-1': {
        name: 'Bi-encoder stage',
        op: 'return a cheap shortlist ranked by embedding similarity alone',
        in: 'the question "What is our refund window?"',
        out: 'top-5 · warranty 0.71 over policy 0.68',
      },
      'rr-2': {
        name: 'Cross-encoder',
        op: 'score query and passage together, one forward pass per candidate',
        out: 'policy 0.92 · how-to 0.81 · warranty 0.44',
      },
      'rr-3': {
        name: 'Shortlist cut',
        op: 'reorder by the new scores and keep the top three for the prompt',
        out: '3 kept · policy #1 · 2 dropped',
      },
      'rr-4': {
        name: 'Cost check',
        op: 'weigh one cross-encoder pass per candidate against the latency budget',
        out: 'rerank 50 · 5 into the prompt',
      },
    },
  },

  'context-budget': {
    subject: 'five retrieved chunks competing for an 8k window',
    stages: {
      'cb-1': {
        name: 'Budget inventory',
        op: 'count tokens for every piece that wants a seat in the window',
        in: 'system, history, question, 5 chunks',
        out: '5,640 tok demanded of 8,000',
      },
      'cb-2': {
        name: 'Packer',
        op: 'fill the 4,000-token RAG slot by rank and drop whatever overflows',
        out: '3,690/4,000 packed · 2 chunks dropped',
      },
      'cb-3': {
        name: 'Placement order',
        op: 'put the strongest evidence at the edges and protect the reserve',
        out: '5 slots · rules, evidence, question',
      },
      'cb-4': {
        name: 'Stuffing test',
        op: 'keep adding retrieved tokens and watch accuracy peak then decline',
        out: 'accuracy peaks 0.78, falls to 0.73',
      },
    },
  },

  'retrieval-pipeline': {
    subject: 'the handbook corpus offline, one refund question online',
    stages: {
      'rp-1': {
        name: 'Indexing path',
        op: 'ingest, chunk, embed, then write vectors and metadata to the index',
        in: 'handbook pages from the CMS',
        out: 'ANN index · chunk vectors + metadata',
        lane: 'offline',
      },
      'rp-2': {
        name: 'Retriever',
        op: 'embed the question, search top-k against that index, fetch text',
        in: 'the question "What is our refund window?"',
        out: 'top-k passages · §4.2 and how-to',
      },
      'rp-3': {
        name: 'Prompt builder',
        op: 'rerank the shortlist, pack under budget, assemble the prompt',
        out: 'prompt · rules + 2 chunks + question',
      },
      'rp-4': {
        name: 'Generator',
        op: 'answer from the assembled context and cite the chunk ids used',
        out: '"30 days if unused" · cites §4.2',
      },
      'rp-5': {
        name: 'Run trace',
        op: 'lay the offline checkpoint and four online steps on one timeline',
        out: '1 offline + 4 online stages logged',
      },
    },
  },

  'agentic-rag-intro': {
    subject: 'the question "Can I refund opened software?"',
    stages: {
      'ar-1': {
        name: 'Retrieval round',
        op: 'retrieve once for the question exactly as the user asked it',
        in: 'the question "Can I refund opened software?"',
        out: 'round 1 · §4.2 window, exception missed',
        loop: { group: 'retrieve', iteration: 1, of: 2, label: 'retrieval round' },
      },
      'ar-2': {
        name: 'Retrieval round',
        op: 'judge the evidence, rewrite the query toward exceptions, search again',
        out: 'round 2 · §4.3 opened software final sale',
        loop: { group: 'retrieve', iteration: 2, of: 2, label: 'retrieval round' },
      },
      'ar-3': {
        name: 'Halt check',
        op: 'stop once evidence is sufficient or the retrieval budget is spent',
        out: '2 of 3 retrievals used · answer sent',
      },
      'ar-4': {
        name: 'Risk register',
        op: 'name the failure modes a retrieval loop adds over single-shot RAG',
        out: '3 risks · looping, drift, cost per hop',
      },
    },
  },

  'rag-failure-modes': {
    subject: 'one wrong answer about refunding opened software',
    stages: {
      'rf-1': {
        name: 'Miss detector',
        op: 'check whether the gold chunk ever entered the top-k shortlist',
        in: 'a wrong answer plus its retrieval trace',
        out: '§4.3 absent from top-5 · retrieval fault',
      },
      'rf-2': {
        name: 'Ignore detector',
        op: 'compare the answer against the evidence that sat in the prompt',
        out: 'prompt: final sale · answer: 30 days',
      },
      'rf-3': {
        name: 'Freshness detector',
        op: 'compare the indexed text against the current source of truth',
        out: 'index 30 days · CMS 14 days',
      },
      'rf-4': {
        name: 'Fix router',
        op: 'send each fault to the fix that addresses it and no other',
        out: 'miss→chunk, ignore→cite, stale→re-index',
      },
    },
  },
};
