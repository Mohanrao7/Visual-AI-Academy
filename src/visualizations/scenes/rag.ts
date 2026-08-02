import { cosine, round, rrf } from './math';
import type { SceneMap } from './types';

/* ---------- similarity search demo vectors (teaching projection) ---------- */
const QUERY = [0.82, 0.31, -0.12];
const DOCS: { id: string; label: string; v: number[] }[] = [
  { id: 'd1', label: 'Refund policy · 30 days', v: [0.79, 0.28, -0.08] },
  { id: 'd2', label: 'Shipping times by region', v: [0.12, 0.71, 0.44] },
  { id: 'd3', label: 'How to request a refund', v: [0.74, 0.35, -0.05] },
  { id: 'd4', label: 'Password reset steps', v: [-0.4, 0.22, 0.81] },
  { id: 'd5', label: 'Warranty exclusions', v: [0.55, 0.18, 0.12] },
];
const DOC_SCORES = DOCS.map((d) => ({ ...d, score: round(cosine(QUERY, d.v), 3) })).sort(
  (a, b) => b.score - a.score,
);

/* ---------- hybrid search ranks (1-based) ---------- */
const BM25_RANK: Record<string, number> = { d1: 2, d3: 1, d5: 3, d2: 4 };
const VEC_RANK: Record<string, number> = { d1: 1, d3: 2, d5: 4, d2: 3 };
const HYBRID = ['d1', 'd3', 'd5', 'd2']
  .map((id) => ({
    id,
    label: DOCS.find((d) => d.id === id)!.label,
    bm25: BM25_RANK[id],
    vec: VEC_RANK[id],
    score: round(rrf([BM25_RANK[id], VEC_RANK[id]]), 4),
  }))
  .sort((a, b) => b.score - a.score);

export const scenes: SceneMap = {
  'why-rag': {
    title: 'Why RAG exists',
    description: 'Parametric memory vs retrieved evidence — what RAG adds and what it does not magically fix.',
    legend: [
      { tone: 'warn', label: 'weights only' },
      { tone: 'good', label: 'retrieved evidence' },
    ],
    mathNote:
      'A frozen LLM answers from p(token | prompt) shaped by training weights. RAG does not retrain those weights — it inserts external text into the prompt so the next-token distribution is conditioned on fresh evidence. Hallucinations can still occur if retrieval misses, the model ignores the context, or the prompt asks it to invent.',
    steps: [
      {
        id: 'wr-1',
        caption:
          'Without RAG — the model answers from weights alone. Private or post-cutoff facts are simply not in those weights.',
        frame: {
          kind: 'panels',
          heading: 'Question: “What is our refund window?”',
          panels: [
            {
              title: 'Weights-only answer',
              body: '“Most retailers offer 14–30 days…” — plausible, generic, and wrong for your company.',
              tone: 'warn',
            },
          ],
        },
      },
      {
        id: 'wr-2',
        caption:
          'Retrieve — look up company documents by similarity to the question, then put the passages into the prompt.',
        frame: {
          kind: 'flow',
          heading: 'The RAG loop (high level)',
          stages: [
            { label: 'Question', detail: 'refund window?' },
            { label: 'Retrieve', detail: 'top-k handbook chunks', tone: 'active' },
            { label: 'Augment prompt', detail: 'instructions + passages' },
            { label: 'Generate', detail: 'answer conditioned on evidence', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'wr-3',
        caption:
          'With evidence — the same model can cite the handbook because the text is now in the context window.',
        frame: {
          kind: 'panels',
          heading: 'Prompt now includes retrieved text',
          panels: [
            {
              title: 'Retrieved chunk',
              body: 'Customer Handbook §4.2: “Full refunds within 30 days of delivery if unused.”',
              tone: 'good',
            },
            {
              title: 'Grounded answer',
              body: '“Per §4.2, you have 30 days from delivery for an unused-item refund.”',
              tone: 'good',
            },
          ],
        },
      },
      {
        id: 'wr-4',
        caption:
          'What RAG does not fix — bad chunking, wrong top-k, ignored context, and overconfident synthesis still produce wrong answers.',
        callout: 'RAG is retrieval + prompting, not a truth oracle. Evaluate retrieval and generation separately.',
        frame: {
          kind: 'ranking',
          heading: 'Failure classes RAG still allows',
          columns: [
            {
              title: 'Still broken',
              items: [
                { label: 'Missed the right doc → invents from priors', tone: 'bad' },
                { label: 'Retrieved but model ignores it', tone: 'bad' },
                { label: 'Stale index after policy change', tone: 'warn' },
              ],
            },
          ],
        },
      },
    ],
  },

  chunking: {
    title: 'Chunking',
    description: 'How you slice documents decides what retrieval can find — size, overlap, and boundary choice are the levers.',
    legend: [
      { tone: 'good', label: 'kept chunk' },
      { tone: 'warn', label: 'overlap' },
      { tone: 'bad', label: 'split mid-idea' },
    ],
    mathNote:
      'Chunking is a retrieval design choice, not a model law. Too-small chunks lose surrounding constraints; too-large chunks dilute similarity and waste context budget. Overlap (e.g. 10–20%) reduces the chance that a key sentence sits exactly on a cut. Prefer semantic boundaries (headings, paragraphs) over blind character counts when you can.',
    steps: [
      {
        id: 'ch-1',
        caption:
          'Raw document — one long policy page. Retrieval needs smaller units so a query can match a local passage.',
        frame: {
          kind: 'tokens',
          heading: 'Source: refund policy (≈1,200 tokens)',
          source: 'Customer Handbook §4',
          tokens: [
            { text: '§4.1 Eligibility…', tone: 'neutral' },
            { text: '§4.2 Window: 30 days…', tone: 'neutral' },
            { text: '§4.3 Exceptions…', tone: 'neutral' },
            { text: '§4.4 How to file…', tone: 'neutral' },
          ],
        },
      },
      {
        id: 'ch-2',
        caption:
          'Bad cut — splitting mid-paragraph separates the 30-day rule from the “unused” condition that qualifies it.',
        frame: {
          kind: 'panels',
          heading: 'Fixed 200-token cuts ignoring structure',
          panels: [
            { title: 'Chunk A', body: '“…Full refunds within 30 days of delivery if”', tone: 'bad' },
            { title: 'Chunk B', body: '“unused. Opened software is final sale…”', tone: 'bad' },
          ],
          footer: 'Neither chunk alone answers “can I return opened software after 20 days?” correctly.',
        },
      },
      {
        id: 'ch-3',
        caption:
          'Better cut — section-aware chunks keep a rule with its conditions. Add overlap so edge sentences are not orphans.',
        frame: {
          kind: 'ranking',
          heading: 'Section-aware chunks with 40-token overlap',
          columns: [
            {
              title: 'Chunks',
              items: [
                { label: '§4.2 Window + unused condition', score: '180 tok', tone: 'good' },
                { label: 'overlap → leads into §4.3', score: '40 tok', tone: 'warn' },
                { label: '§4.3 Exceptions (software, gift cards)', score: '210 tok', tone: 'good' },
              ],
            },
          ],
        },
      },
      {
        id: 'ch-4',
        caption:
          'Trade-off — more chunks improve recall of tiny facts but raise index cost and duplicate near-matches at query time.',
        callout: 'Chunk for the questions you actually ask. Measure recall@k on a labeled query set, not vibes.',
        frame: {
          kind: 'bars',
          heading: 'Illustrative recall@5 vs median chunk size',
          bars: [
            { label: '80 tokens', value: 0.61, tone: 'warn', note: 'fragmented context' },
            { label: '200 tokens', value: 0.78, tone: 'good' },
            { label: '500 tokens', value: 0.72, tone: 'warn', note: 'diluted similarity' },
            { label: '1,200 (whole page)', value: 0.49, tone: 'bad' },
          ],
          format: 'percent',
          max: 1,
        },
      },
    ],
  },

  'embeddings-for-retrieval': {
    title: 'Embeddings for retrieval',
    description: 'Queries and chunks become vectors in the same space so “near” means “likely relevant” — labeled as a 2D teaching projection.',
    legend: [
      { tone: 'accent', label: 'query' },
      { tone: 'good', label: 'relevant chunk' },
      { tone: 'muted', label: 'irrelevant chunk' },
    ],
    mathNote:
      'An embedding model maps text → ℝᵈ. Retrieval ranks by cosine similarity cos(q, d) = (q·d)/(‖q‖‖d‖) or by inner product after normalisation. The 2D plot below is a teaching projection of high-dimensional space — distances are illustrative, not a claim that meaning is literally two-dimensional.',
    steps: [
      {
        id: 'er-1',
        caption:
          'Embed the query and every chunk with the same model so they live in one comparable vector space.',
        frame: {
          kind: 'flow',
          heading: 'Offline + online embedding',
          stages: [
            { label: 'Chunk text', detail: 'index-time' },
            { label: 'Embed chunks', detail: 'store vectors', tone: 'good' },
            { label: 'Embed query', detail: 'request-time', tone: 'active' },
            { label: 'Compare', detail: 'cosine / IP' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'er-2',
        caption:
          'Projected space — refund-related chunks cluster near the query; password reset sits far away. Simplification: 2D projection of higher-d vectors.',
        frame: {
          kind: 'scatter',
          heading: 'Teaching projection (not the real d-dimensional space)',
          points: [
            { id: 'q', label: 'query', x: 0.78, y: 0.42, tone: 'accent' },
            { id: 'd1', label: 'refund 30d', x: 0.74, y: 0.38, tone: 'good' },
            { id: 'd3', label: 'how to refund', x: 0.7, y: 0.48, tone: 'good' },
            { id: 'd5', label: 'warranty', x: 0.55, y: 0.35, tone: 'warn' },
            { id: 'd2', label: 'shipping', x: 0.25, y: 0.72, tone: 'muted' },
            { id: 'd4', label: 'password', x: 0.18, y: 0.2, tone: 'muted' },
          ],
          links: [
            { from: 'q', to: 'd1', label: 'high cos', tone: 'good' },
            { from: 'q', to: 'd3', label: 'high cos', tone: 'good' },
          ],
          axisNote: 'Axes are a 2D projection for teaching — real embeddings are typically 384–3072 dimensions.',
        },
      },
      {
        id: 'er-3',
        caption:
          'Rank by cosine — same numbers the index would use. Higher cosine ⇒ closer angle ⇒ preferred retrieval.',
        frame: {
          kind: 'bars',
          heading: 'cos(query, chunk) on the demo vectors',
          bars: DOC_SCORES.map((d, i) => ({
            label: d.label,
            value: d.score,
            tone: i < 2 ? 'good' : i < 3 ? 'warn' : 'muted',
          })),
          format: 'decimal2',
          max: 1,
          footer: 'Computed with the shared cosine helper — not hand-typed ranks.',
        },
      },
      {
        id: 'er-4',
        caption:
          'Domain mismatch — a general embedder may rank “window” as glass, not refund window. Choose or fine-tune for your corpus.',
        callout: 'Embedding quality is upstream of every RAG metric. Swap models and re-measure recall@k.',
        frame: {
          kind: 'panels',
          heading: 'Same query, wrong semantic neighborhood',
          panels: [
            { title: 'Ambiguous term', body: '“window” near UI/chrome docs instead of refund policy.', tone: 'bad' },
            { title: 'Mitigation', body: 'Hybrid search (keywords) + domain embedder + query rewriting.', tone: 'good' },
          ],
        },
      },
    ],
  },

  'vector-db-concept': {
    title: 'Vector database (concept)',
    description: 'An index specialised for nearest-neighbour lookup over embeddings — not a replacement for your source of truth.',
    legend: [
      { tone: 'good', label: 'indexed vector' },
      { tone: 'accent', label: 'query' },
    ],
    mathNote:
      'Exact k-NN scans all vectors (O(n)). Approximate nearest neighbour (ANN) structures (HNSW, IVF, etc.) trade a small recall loss for sublinear latency. Metadata filters run alongside vector search so you can restrict by tenant, language, or doc type.',
    steps: [
      {
        id: 'vd-1',
        caption:
          'What is stored — each row is an id, the embedding, and metadata. The original text usually lives in object storage or a doc store, referenced by id.',
        frame: {
          kind: 'ranking',
          heading: 'Index row (simplified)',
          columns: [
            {
              title: 'Fields',
              items: [
                { label: 'id = handbook::4.2', tone: 'neutral' },
                { label: 'vector = float[768]', tone: 'good' },
                { label: 'metadata = {tenant, section, updated_at}', tone: 'accent' },
              ],
            },
          ],
        },
      },
      {
        id: 'vd-2',
        caption:
          'Query path — embed the question, ANN search for top-k neighbours, optionally filter metadata, return ids for text fetch.',
        frame: {
          kind: 'flow',
          heading: 'Online retrieval',
          stages: [
            { label: 'Embed query', tone: 'active' },
            { label: 'ANN search', detail: '≈k neighbours' },
            { label: 'Metadata filter', detail: 'tenant=acme' },
            { label: 'Fetch text', detail: 'by id', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'vd-3',
        caption:
          'ANN vs exact — approximate indexes are why million-scale search is fast; evaluate recall against a brute-force baseline on a sample.',
        frame: {
          kind: 'bars',
          heading: 'Illustrative latency vs recall@10',
          bars: [
            { label: 'Exact scan 1M', value: 420, tone: 'bad', note: 'ms' },
            { label: 'HNSW (high recall)', value: 12, tone: 'good', note: 'ms, recall≈0.97' },
            { label: 'Aggressive ANN', value: 4, tone: 'warn', note: 'ms, recall≈0.88' },
          ],
          format: 'raw',
          max: 450,
          footer: 'Numbers are teaching-scale illustrations of the speed/recall trade-off.',
        },
      },
      {
        id: 'vd-4',
        caption:
          'Not the source of truth — if the handbook changes, you must re-embed and upsert. Stale vectors are a silent RAG failure mode.',
        callout: 'Pair the vector index with an ingestion pipeline and freshness checks.',
        frame: {
          kind: 'timeline',
          heading: 'Policy update without re-index',
          events: [
            { label: 'Day 0', detail: 'Indexed: 30-day refund', marker: 'step' },
            { label: 'Day 12', detail: 'Handbook → 14 days', tone: 'warn', marker: 'step' },
            { label: 'Day 12', detail: 'Index still says 30 days', tone: 'bad', marker: 'error' },
            { label: 'Fix', detail: 'Re-chunk, re-embed, upsert', tone: 'good', marker: 'done' },
          ],
          activeIndex: 2,
          state: [
            { key: 'source of truth', value: 'handbook CMS' },
            { key: 'vector index', value: 'stale until upsert', changed: true },
          ],
        },
      },
    ],
  },

  'similarity-search': {
    title: 'Similarity search',
    description: 'Rank chunks by vector distance to the query, take top-k — the core mechanic behind dense retrieval.',
    legend: [
      { tone: 'good', label: 'kept in top-k' },
      { tone: 'muted', label: 'dropped' },
    ],
    mathNote:
      'Given query embedding q and document embeddings dᵢ, score sᵢ = cos(q, dᵢ) (or negative L2). Top-k keeps the k largest scores. Thresholding by absolute score is optional and domain-specific — cosine 0.3 may be strong in one corpus and noise in another.',
    steps: [
      {
        id: 'ss-1',
        caption:
          'Score every candidate — here cosine similarity between the refund query and five chunk vectors.',
        frame: {
          kind: 'bars',
          heading: 'All candidates scored',
          bars: DOC_SCORES.map((d) => ({ label: d.label, value: d.score, tone: 'neutral' })),
          format: 'decimal2',
          max: 1,
        },
      },
      {
        id: 'ss-2',
        caption:
          'Top-k = 2 — keep only the two highest scores. Everything else is discarded before the prompt is built.',
        frame: {
          kind: 'bars',
          heading: 'After top-k truncation (k=2)',
          bars: DOC_SCORES.map((d, i) => ({
            label: d.label,
            value: i < 2 ? d.score : 0,
            ghost: d.score,
            tone: i < 2 ? 'good' : 'muted',
            note: i < 2 ? 'kept' : 'dropped',
          })),
          format: 'decimal2',
          max: 1,
          cutAfter: { index: 1, label: 'top-k boundary' },
        },
      },
      {
        id: 'ss-3',
        caption:
          'k is a product knob — larger k raises recall and token cost; smaller k is cheaper but misses supporting passages.',
        frame: {
          kind: 'chart',
          heading: 'Recall vs tokens in context as k grows',
          series: [
            { label: 'recall@k (illustrative)', tone: 'good', points: [0.45, 0.62, 0.74, 0.81, 0.85, 0.87] },
            { label: 'context tokens / 2k', tone: 'warn', points: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2], dashed: true },
          ],
          xLabel: 'k (1 → 6)',
          yLabel: 'rate / scaled tokens',
          yMax: 1.3,
        },
      },
      {
        id: 'ss-4',
        caption:
          'Dense search alone misses exact identifiers — order numbers, SKUs, and rare proper nouns often need lexical match too.',
        callout: 'That gap is why hybrid search exists (next concept).',
        frame: {
          kind: 'panels',
          heading: 'When cosine fails',
          panels: [
            { title: 'Query', body: 'Status of order ORD-918273?', tone: 'accent' },
            { title: 'Dense retrieval', body: 'Returns generic “how to track an order” docs — weak ID match.', tone: 'bad' },
            { title: 'Need', body: 'Keyword / BM25 hit on ORD-918273 plus metadata filters.', tone: 'good' },
          ],
        },
      },
    ],
  },

  'hybrid-search': {
    title: 'Hybrid search',
    description: 'Fuse BM25 (keywords) with vector ranks — usually via Reciprocal Rank Fusion — so exact terms and semantics both vote.',
    legend: [
      { tone: 'active', label: 'BM25 rank' },
      { tone: 'accent', label: 'vector rank' },
      { tone: 'good', label: 'fused' },
    ],
    mathNote:
      'Reciprocal Rank Fusion: RRF(d) = Σ 1/(k + rankᵢ(d)) over ranked lists (common k=60). Ranks are 1-based; missing lists contribute 0. RRF needs no score calibration between BM25 and cosine.',
    steps: [
      {
        id: 'hs-1',
        caption:
          'Two ranked lists for the same query — BM25 loves exact tokens; vectors love paraphrase.',
        frame: {
          kind: 'ranking',
          heading: 'Separate retrieval channels',
          columns: [
            {
              title: 'BM25',
              subtitle: 'lexical',
              items: [
                { label: 'How to request a refund', score: 'rank 1', tone: 'active' },
                { label: 'Refund policy · 30 days', score: 'rank 2', tone: 'active' },
                { label: 'Warranty exclusions', score: 'rank 3', tone: 'active' },
              ],
            },
            {
              title: 'Vector',
              subtitle: 'semantic',
              items: [
                { label: 'Refund policy · 30 days', score: 'rank 1', tone: 'accent' },
                { label: 'How to request a refund', score: 'rank 2', tone: 'accent' },
                { label: 'Shipping times', score: 'rank 3', tone: 'accent' },
              ],
            },
          ],
        },
      },
      {
        id: 'hs-2',
        caption:
          'RRF score — each list contributes 1/(60 + rank). Docs that place well on both lists rise.',
        frame: {
          kind: 'bars',
          heading: 'RRF(d) with k=60 (computed)',
          bars: HYBRID.map((h, i) => ({
            label: h.label,
            value: h.score,
            tone: i === 0 ? 'good' : 'neutral',
            note: `BM25 #${h.bm25} · vec #${h.vec}`,
          })),
          format: 'decimal2',
          max: 0.04,
          footer: 'Example: d1 → 1/(60+2)+1/(60+1) = RRF shown above.',
        },
      },
      {
        id: 'hs-3',
        caption:
          'Fused ranking — often better than either list alone on mixed keyword + paraphrase queries.',
        frame: {
          kind: 'ranking',
          heading: 'After fusion (top of list)',
          columns: [
            {
              title: 'Hybrid order',
              items: HYBRID.map((h, i) => ({
                label: h.label,
                score: `RRF ${h.score}`,
                tone: i < 2 ? 'good' : 'muted',
              })),
            },
          ],
        },
      },
      {
        id: 'hs-4',
        caption:
          'Still not perfect — fusion cannot fix missing documents or a bad embedder. It only merges evidence from two imperfect lists.',
        callout: 'Tune k and which lists you fuse using labeled queries — do not cargo-cult weights.',
        frame: {
          kind: 'panels',
          heading: 'When hybrid still fails',
          panels: [
            { title: 'Doc never ingested', body: 'Neither list can surface it.', tone: 'bad' },
            { title: 'Wrong tenant filter', body: 'Correct doc excluded before fusion.', tone: 'warn' },
          ],
        },
      },
    ],
  },

  're-ranking': {
    title: 'Re-ranking',
    description: 'A second model scores (query, passage) pairs on the shortlist — more accurate than bi-encoder cosine alone, more expensive.',
    legend: [
      { tone: 'muted', label: 'first-stage order' },
      { tone: 'good', label: 'after cross-encoder' },
    ],
    mathNote:
      'Bi-encoders embed query and doc separately (fast, indexable). A cross-encoder consumes [query; passage] jointly and outputs a relevance score — too slow for millions of docs, fine for re-ranking top 20–100. The first stage maximises recall; the reranker maximises precision on that shortlist.',
    steps: [
      {
        id: 'rr-1',
        caption:
          'First stage — cheap retrieval returns a noisy top-20. Several near-misses sit above the best answer.',
        frame: {
          kind: 'ranking',
          heading: 'Bi-encoder top-5 (simplified)',
          columns: [
            {
              title: 'Order before rerank',
              items: [
                { label: 'Warranty exclusions', score: '0.71', tone: 'muted' },
                { label: 'How to request a refund', score: '0.69', tone: 'muted' },
                { label: 'Refund policy · 30 days', score: '0.68', tone: 'warn' },
                { label: 'Returns packaging tips', score: '0.64', tone: 'muted' },
                { label: 'Shipping times', score: '0.51', tone: 'muted' },
              ],
            },
          ],
        },
      },
      {
        id: 'rr-2',
        caption:
          'Cross-encode — each shortlisted passage is scored together with the query. Relevance can leapfrog cosine order.',
        frame: {
          kind: 'bars',
          heading: 'Cross-encoder relevance scores',
          bars: [
            { label: 'Refund policy · 30 days', value: 0.92, tone: 'good' },
            { label: 'How to request a refund', value: 0.81, tone: 'good' },
            { label: 'Warranty exclusions', value: 0.44, tone: 'muted' },
            { label: 'Returns packaging tips', value: 0.31, tone: 'muted' },
            { label: 'Shipping times', value: 0.12, tone: 'muted' },
          ],
          format: 'decimal2',
          max: 1,
        },
      },
      {
        id: 'rr-3',
        caption:
          'New order — the true policy chunk rises to #1. You typically keep only the top 3–5 for the prompt.',
        frame: {
          kind: 'ranking',
          heading: 'Order after rerank',
          columns: [
            {
              title: 'Kept for context',
              items: [
                { label: 'Refund policy · 30 days', score: '1', tone: 'good' },
                { label: 'How to request a refund', score: '2', tone: 'good' },
                { label: 'Warranty exclusions', score: '3', tone: 'warn' },
              ],
            },
            {
              title: 'Dropped',
              items: [
                { label: 'Returns packaging tips', tone: 'muted' },
                { label: 'Shipping times', tone: 'muted' },
              ],
            },
          ],
        },
      },
      {
        id: 'rr-4',
        caption:
          'Cost — N cross-encoder forwards per query. Use it when first-stage noise hurts answer quality more than latency budget allows.',
        callout: 'Reranking ≠ generation. It only reorders evidence; the LLM still has to use it.',
        frame: {
          kind: 'flow',
          heading: 'Where rerank sits',
          stages: [
            { label: 'Retrieve top-50', detail: 'bi-encoder / hybrid' },
            { label: 'Rerank', detail: 'cross-encoder', tone: 'active' },
            { label: 'Take top-5', detail: 'into budget', tone: 'good' },
            { label: 'Generate', detail: 'LLM' },
          ],
          activeIndex: 1,
        },
      },
    ],
  },

  'context-budget': {
    title: 'Context budget',
    description: 'The prompt window is finite — packing retrieved chunks is a packing problem with a hard token ceiling.',
    legend: [
      { tone: 'accent', label: 'instructions' },
      { tone: 'good', label: 'evidence kept' },
      { tone: 'bad', label: 'dropped for budget' },
    ],
    mathNote:
      'If the model context limit is C tokens and you reserve R for the completion, the retrieval budget is B = C − system − history − query − R. Chunks must fit in B; overflow is truncated, summarised, or never inserted. Counting must use the same tokenizer as the model.',
    steps: [
      {
        id: 'cb-1',
        caption:
          'Inventory — everything that wants a seat in the window, with token costs.',
        frame: {
          kind: 'ranking',
          heading: 'Candidates for an 8k-context model',
          columns: [
            {
              title: 'Piece',
              items: [
                { label: 'System + tools', score: '600 tok', tone: 'accent' },
                { label: 'Chat history', score: '1,200 tok', tone: 'warn' },
                { label: 'User question', score: '40 tok', tone: 'neutral' },
                { label: '5 retrieved chunks', score: '2,800 tok', tone: 'good' },
                { label: 'Reserved for answer', score: '1,000 tok', tone: 'good' },
              ],
            },
          ],
          footer: 'Total demand 5,640 — fits. Add two more chunks and something must go.',
        },
      },
      {
        id: 'cb-2',
        caption:
          'Over budget — packing top-8 evidence exceeds B. Lowest-ranked or least novel chunks are dropped.',
        frame: {
          kind: 'budget',
          heading: 'Packed window (capacity 4,000 for RAG portion)',
          capacity: 4000,
          segments: [
            { label: 'instructions', tokens: 400, tone: 'accent' },
            { label: 'chunk #1 policy', tokens: 900, tone: 'good' },
            { label: 'chunk #2 how-to', tokens: 850, tone: 'good' },
            { label: 'chunk #3 exceptions', tokens: 700, tone: 'good' },
            { label: 'question', tokens: 40, tone: 'active' },
            { label: 'answer reserve', tokens: 800, tone: 'warn' },
          ],
          dropped: [
            { label: 'chunk #4 packaging tips', tokens: 620 },
            { label: 'chunk #5 shipping FAQ', tokens: 540 },
          ],
        },
      },
      {
        id: 'cb-3',
        caption:
          'Priority order matters — put the strongest evidence where the model attends reliably (often edges), and never starve the answer reserve.',
        frame: {
          kind: 'flow',
          heading: 'Typical packing order',
          stages: [
            { label: 'System rules', tone: 'accent' },
            { label: 'Best evidence first/last', tone: 'good' },
            { label: 'Secondary chunks', tone: 'warn' },
            { label: 'Question', tone: 'active' },
            { label: 'Generation space', tone: 'good' },
          ],
          activeIndex: 1,
        },
      },
      {
        id: 'cb-4',
        caption:
          'Bigger windows help but do not remove budgeting — lost-in-the-middle and cost still punish stuffing.',
        callout: 'Measure answer quality vs tokens inserted. More context is not automatically more truth.',
        frame: {
          kind: 'chart',
          heading: 'Illustrative quality vs tokens of retrieved text',
          series: [
            { label: 'answer accuracy', tone: 'good', points: [0.4, 0.62, 0.74, 0.78, 0.76, 0.73] },
          ],
          xLabel: 'retrieved tokens packed (low → high)',
          yLabel: 'accuracy',
          yMax: 1,
          footer: 'Past a point, extra chunks add noise and dilution more than signal.',
        },
      },
    ],
  },

  'retrieval-pipeline': {
    title: 'End-to-end retrieval pipeline',
    description: 'Ingest → chunk → embed → index → retrieve → rerank → assemble → generate — each stage has a distinct job.',
    legend: [
      { tone: 'warn', label: 'offline indexing' },
      { tone: 'active', label: 'online query path' },
      { tone: 'good', label: 'generation' },
    ],
    mathNote:
      'Offline builds the ANN index; online never re-embeds the corpus per request (only the query). Skipping stages (e.g. no rerank) is a deliberate latency/quality trade. Agentic RAG may loop retrieve→generate→retrieve, but the atomic stages stay the same.',
    steps: [
      {
        id: 'rp-1',
        caption:
          'Offline — ingest documents, chunk them, embed chunks, write vectors + metadata into the index.',
        frame: {
          kind: 'flow',
          heading: 'Indexing path',
          lane: 'offline',
          stages: [
            { label: 'Ingest', detail: 'CMS / PDFs', tone: 'warn' },
            { label: 'Chunk', detail: 'section-aware', tone: 'warn' },
            { label: 'Embed', detail: 'chunk → vector', tone: 'warn' },
            { label: 'Index', detail: 'ANN + metadata', tone: 'warn' },
          ],
          activeIndex: 3,
        },
      },
      {
        id: 'rp-2',
        caption:
          'Online retrieve — embed the question, hybrid or dense search for top-k ids, fetch text.',
        frame: {
          kind: 'flow',
          heading: 'Query path (retrieve)',
          lane: 'online',
          stages: [
            { label: 'Query', detail: 'user question', tone: 'active' },
            { label: 'Embed query', tone: 'active' },
            { label: 'Search top-k', detail: 'hybrid / dense', tone: 'active' },
            { label: 'Fetch passages', tone: 'active' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'rp-3',
        caption:
          'Rerank + assemble — reorder the shortlist, pack under the context budget with instructions and citations.',
        frame: {
          kind: 'flow',
          heading: 'Query path (prepare prompt)',
          stages: [
            { label: 'Rerank', detail: 'cross-encoder', tone: 'active' },
            { label: 'Budget pack', detail: 'drop overflow', tone: 'active' },
            { label: 'Assemble prompt', detail: 'rules + evidence + question', tone: 'good' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'rp-4',
        caption:
          'Generate — the LLM produces an answer conditioned on the assembled context; ideally with citations to chunk ids.',
        callout: 'If any earlier stage is wrong, generation cannot recover the missing fact.',
        frame: {
          kind: 'panels',
          heading: 'Final stage',
          panels: [
            {
              title: 'Prompt contents',
              body: 'System rules + §4.2 refund chunk + how-to chunk + user question.',
              tone: 'good',
            },
            {
              title: 'Model output',
              body: '“30 days from delivery if unused (Handbook §4.2).”',
              tone: 'good',
            },
          ],
        },
      },
      {
        id: 'rp-5',
        caption:
          'Whole pipeline at a glance — offline and online are different schedules sharing one index.',
        frame: {
          kind: 'timeline',
          heading: 'One production request',
          events: [
            { label: 'Index (earlier)', detail: 'ingest→chunk→embed→index', tone: 'warn', marker: 'checkpoint' },
            { label: 'Retrieve', detail: 'top-k', tone: 'active', marker: 'step' },
            { label: 'Rerank', detail: 'shortlist', tone: 'active', marker: 'step' },
            { label: 'Assemble', detail: 'budget', tone: 'active', marker: 'step' },
            { label: 'Generate', detail: 'answer + cite', tone: 'good', marker: 'done' },
          ],
          activeIndex: 4,
        },
      },
    ],
  },

  'agentic-rag-intro': {
    title: 'Agentic RAG (intro)',
    description: 'The model may decide to retrieve again, rewrite the query, or stop — retrieval becomes a tool in a loop.',
    legend: [
      { tone: 'accent', label: 'thought / decision' },
      { tone: 'active', label: 'retrieval tool' },
      { tone: 'good', label: 'final answer' },
    ],
    mathNote:
      'Classic RAG retrieves once. Agentic RAG treats search as an action: the policy (LLM) chooses when to call it, with what query, and whether evidence is sufficient. Cost and latency scale with the number of tool calls; without budgets the agent can loop forever.',
    steps: [
      {
        id: 'ar-1',
        caption:
          'Single-shot RAG — one retrieve, then answer. Fails when the first query is underspecified.',
        frame: {
          kind: 'flow',
          heading: 'Classic path',
          stages: [
            { label: 'Question', detail: '“refund for opened software?”' },
            { label: 'Retrieve once', tone: 'active' },
            { label: 'Answer', tone: 'good' },
          ],
          activeIndex: 1,
          footer: 'May retrieve only the general 30-day rule and miss the software exception.',
        },
      },
      {
        id: 'ar-2',
        caption:
          'Agent decides evidence is incomplete — rewrites the query toward exceptions and calls retrieve again.',
        frame: {
          kind: 'loop',
          heading: 'Retrieve-as-a-tool loop',
          nodes: [
            { id: 'think', label: 'Think' },
            { id: 'act', label: 'Retrieve' },
            { id: 'obs', label: 'Read passages' },
            { id: 'ans', label: 'Answer' },
          ],
          activeId: 'act',
          iteration: 'round 2',
          log: [
            { role: 'Thought', text: 'General policy retrieved; need software exception.', tone: 'accent' },
            { role: 'Action', text: 'search["opened software refund exception"]', tone: 'active' },
            { role: 'Observation', text: '§4.3: opened software final sale.', tone: 'good' },
          ],
        },
      },
      {
        id: 'ar-3',
        caption:
          'Stop when sufficient — final answer uses both rounds of evidence. Budgets cap iterations and tool calls.',
        frame: {
          kind: 'timeline',
          heading: 'Controlled agentic run',
          events: [
            { label: 'Retrieve #1', detail: '§4.2 window', marker: 'step' },
            { label: 'Retrieve #2', detail: '§4.3 exceptions', marker: 'step' },
            { label: 'Budget check', detail: '2/3 retrievals used', tone: 'warn', marker: 'checkpoint' },
            { label: 'Final Answer', detail: 'opened software not refundable', tone: 'good', marker: 'done' },
          ],
          activeIndex: 3,
          state: [
            { key: 'retrievals used', value: '2', changed: true },
            { key: 'max retrievals', value: '3' },
          ],
        },
      },
      {
        id: 'ar-4',
        caption:
          'New failure modes — query rewrite drift, redundant searches, and infinite “one more lookup” without a halt policy.',
        callout: 'Agentic RAG needs the same guardrails as any tool-using agent: budgets, allowlists, and evals.',
        frame: {
          kind: 'ranking',
          heading: 'Extra risks vs single-shot RAG',
          columns: [
            {
              title: 'Risk',
              items: [
                { label: 'Looping retrieves until timeout', tone: 'bad' },
                { label: 'Rewritten query drifts off topic', tone: 'bad' },
                { label: 'Cost multiplies with each hop', tone: 'warn' },
              ],
            },
          ],
        },
      },
    ],
  },

  'rag-failure-modes': {
    title: 'RAG failure modes',
    description: 'Separate retrieval failures from generation failures — they need different fixes.',
    legend: [
      { tone: 'bad', label: 'retrieval fault' },
      { tone: 'warn', label: 'generation fault' },
      { tone: 'good', label: 'mitigation' },
    ],
    mathNote:
      'If the gold passage is absent from top-k, no prompt tweak will recover it — fix indexing/chunking/query. If the gold passage is present and the model still errs, fix prompting, citations, or abstention. Confounding the two wastes weeks.',
    steps: [
      {
        id: 'rf-1',
        caption:
          'Miss — the right chunk never enters top-k. Symptom: answer invents or stays generic.',
        frame: {
          kind: 'panels',
          heading: 'Retrieval miss',
          panels: [
            { title: 'Gold doc', body: '§4.3 software exception — not in top-5.', tone: 'bad' },
            { title: 'Model', body: 'Applies the general 30-day rule anyway.', tone: 'warn' },
          ],
        },
      },
      {
        id: 'rf-2',
        caption:
          'Ignore — gold chunk is in the prompt but the model contradicts it. Symptom: citation-looking answers that disagree with context.',
        frame: {
          kind: 'ranking',
          heading: 'Context present, behaviour wrong',
          columns: [
            {
              title: 'In prompt',
              items: [{ label: '“Opened software is final sale.”', tone: 'good' }],
            },
            {
              title: 'Model said',
              items: [{ label: '“You can return it within 30 days.”', tone: 'bad' }],
            },
          ],
        },
      },
      {
        id: 'rf-3',
        caption:
          'Stale index — retrieval “succeeds” on outdated text. Symptom: confident answers that match old policy.',
        frame: {
          kind: 'timeline',
          heading: 'Freshness failure',
          events: [
            { label: 'CMS', detail: '14-day window live', tone: 'good', marker: 'step' },
            { label: 'Index', detail: 'still embeds 30-day text', tone: 'bad', marker: 'error' },
            { label: 'Answer', detail: 'cites 30 days from stale chunk', tone: 'bad', marker: 'error' },
          ],
          activeIndex: 2,
        },
      },
      {
        id: 'rf-4',
        caption:
          'Mitigations map to the fault — do not “add temperature” to fix a miss, and do not “rebuild the index” to fix ignore.',
        callout: 'Log retrieved ids + scores beside every answer. Debugging without that trace is guessing.',
        frame: {
          kind: 'ranking',
          heading: 'Fault → fix',
          columns: [
            {
              title: 'Fault',
              items: [
                { label: 'Miss', tone: 'bad' },
                { label: 'Ignore', tone: 'warn' },
                { label: 'Stale', tone: 'bad' },
              ],
            },
            {
              title: 'Fix',
              items: [
                { label: 'Chunking, hybrid, rewrite, ↑k', tone: 'good' },
                { label: 'Cite-or-abstain, rerank, tighter prompt', tone: 'good' },
                { label: 'Re-ingest, version metadata, freshness SLO', tone: 'good' },
              ],
            },
          ],
        },
      },
    ],
  },
};
