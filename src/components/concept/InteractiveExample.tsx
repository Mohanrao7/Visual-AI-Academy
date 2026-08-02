import { useMemo, useState } from 'react';
import type { InteractiveExampleSpec } from '../../types/content';
import { cosine, renormalise, softmax, topKMask, topPMask } from '../../visualizations/scenes/math';

type Props = { spec: InteractiveExampleSpec };

export function InteractiveExample({ spec }: Props) {
  return (
    <section className="panel stack" id="try-it">
      <h2>Try it yourself</h2>
      <p className="muted">{spec.description}</p>
      <h3 style={{ fontSize: '1.05rem' }}>{spec.title}</h3>
      <Demo spec={spec} />
    </section>
  );
}

function Demo({ spec }: Props) {
  switch (spec.kind) {
    case 'token-split':
      return <TokenSplit fixture={spec.fixture} />;
    case 'temperature':
      return <TemperatureDemo fixture={spec.fixture} />;
    case 'similarity':
      return <SimilarityDemo fixture={spec.fixture} />;
    case 'prompt-builder':
      return <PromptBuilder fixture={spec.fixture} />;
    case 'rag-query':
      return <RagQuery fixture={spec.fixture} />;
    case 'agent-loop':
      return <AgentLoop fixture={spec.fixture} />;
    case 'decode-sampler':
      return <DecodeSampler fixture={spec.fixture} />;
    case 'generic-toggle':
    default:
      return <GenericToggle fixture={spec.fixture} />;
  }
}

function GenericToggle({ fixture }: { fixture: Record<string, unknown> }) {
  const options = (fixture.options as string[]) ?? [];
  const insights = (fixture.insights as Record<string, string>) ?? {};
  const [selected, setSelected] = useState((fixture.selected as string) ?? options[0] ?? '');
  return (
    <div className="stack">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`btn btn-sm ${selected === opt ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="viz-caption">{insights[selected] ?? 'Explore the options.'}</p>
    </div>
  );
}

function TokenSplit({ fixture }: { fixture: Record<string, unknown> }) {
  const [text, setText] = useState((fixture.text as string) ?? '');
  const tokens = useMemo(() => demoTokenize(text), [text]);
  return (
    <div className="stack">
      <label>
        Sentence
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ display: 'block', width: '100%', marginTop: 6, padding: '0.65rem 0.8rem', borderRadius: 10, border: '1px solid var(--line)' }}
        />
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tokens.map((t, i) => (
          <span key={`${t}-${i}`} className="pill beginner" title={t.startsWith(' ') ? 'Leading space is part of this token' : undefined}>
            {t === ' ' ? '␣' : t.replace(/^ /, '␣')}
          </span>
        ))}
      </div>
      <p className="muted">
        Teaching tokenizer (approximation): whitespace + punctuation splits, long rare-looking words break into halves, leading spaces stay attached.
        Real BPE/SentencePiece tokenizers differ by model.
      </p>
    </div>
  );
}

/** Teaching approximation — not a production BPE merge table. */
function demoTokenize(text: string) {
  const parts = text.match(/ \w+|\w+|[^\s\w]/g) ?? [];
  return parts.flatMap((p) => {
    const core = p.trim();
    const lead = p.startsWith(' ') ? ' ' : '';
    if (core.length > 10 && /^[A-Za-z]+$/.test(core)) {
      const mid = Math.ceil(core.length / 2);
      return [`${lead}${core.slice(0, mid)}`, core.slice(mid)];
    }
    return [p];
  });
}

function TemperatureDemo({ fixture }: { fixture: Record<string, unknown> }) {
  const labels = (fixture.labels as string[]) ?? [];
  const logits = (fixture.logits as number[]) ?? [];
  const [temp, setTemp] = useState(1);
  const [k, setK] = useState(Math.min(3, labels.length || 3));
  const [pNucleus, setPNucleus] = useState(0.9);
  const [mode, setMode] = useState<'temp' | 'topk' | 'topp'>('temp');

  const base = softmax(logits, temp);
  const mask = mode === 'topk' ? topKMask(base, k) : mode === 'topp' ? topPMask(base, pNucleus) : base.map(() => true);
  const probs = mode === 'temp' ? base : renormalise(base, mask);
  const sum = probs.reduce((a, b) => a + b, 0);

  return (
    <div className="stack">
      <label>
        Temperature: {temp.toFixed(2)}
        <input
          type="range"
          min={0.2}
          max={1.8}
          step={0.05}
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          style={{ display: 'block', width: '100%' }}
        />
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {(
          [
            ['temp', 'Temperature only'],
            ['topk', 'Top-k'],
            ['topp', 'Top-p'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`btn btn-sm ${mode === id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMode(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {mode === 'topk' ? (
        <label>
          k = {k}
          <input
            type="range"
            min={1}
            max={Math.max(1, labels.length)}
            step={1}
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
            style={{ display: 'block', width: '100%' }}
          />
        </label>
      ) : null}
      {mode === 'topp' ? (
        <label>
          p = {pNucleus.toFixed(2)}
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={pNucleus}
            onChange={(e) => setPNucleus(Number(e.target.value))}
            style={{ display: 'block', width: '100%' }}
          />
        </label>
      ) : null}
      {labels.map((label, i) => (
        <div key={label}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ opacity: probs[i] === 0 ? 0.45 : 1 }}>{label}</span>
            <span>{(probs[i] * 100).toFixed(1)}%</span>
          </div>
          <div className="progress-bar">
            <span style={{ width: `${probs[i] * 100}%` }} />
          </div>
        </div>
      ))}
      <p className="muted">
        Softmax sum = {sum.toFixed(3)} (should be ~1). Lower T sharpens; higher T flattens. Top-k keeps k largest; top-p keeps the smallest set whose cumulative mass ≥ p, then both renormalise.
      </p>
    </div>
  );
}

function SimilarityDemo({ fixture }: { fixture: Record<string, unknown> }) {
  const phrases = (fixture.phrases as string[]) ?? [];
  const vectors = (fixture.vectors as Record<string, number[]>) ?? {};
  const [a, setA] = useState(phrases[0] ?? '');
  const [b, setB] = useState(phrases[1] ?? '');
  const score = cosine(vectors[a] ?? [0, 0], vectors[b] ?? [0, 0]);
  const anchor = vectors[a];
  const ranked = anchor
    ? phrases
        .filter((p) => p !== a)
        .map((p) => ({ p, s: cosine(anchor, vectors[p] ?? [0, 0]) }))
        .sort((x, y) => y.s - x.s)
    : [];

  return (
    <div className="stack">
      <div className="grid-2">
        <label>
          Phrase A (anchor)
          <select value={a} onChange={(e) => setA(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 6 }}>
            {phrases.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label>
          Phrase B (pair score)
          <select value={b} onChange={(e) => setB(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 6 }}>
            {phrases.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="viz-caption">
        Cosine(A, B) = <strong>{score.toFixed(3)}</strong> (1 = same direction, 0 = orthogonal, −1 = opposite)
      </p>
      {ranked.length ? (
        <div>
          <p className="muted" style={{ marginBottom: 6 }}>
            Nearest to A (excluding itself):
          </p>
          <ol>
            {ranked.map((r) => (
              <li key={r.p}>
                {r.p} — {r.s.toFixed(3)}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

function PromptBuilder({ fixture }: { fixture: Record<string, unknown> }) {
  const [cot, setCot] = useState(false);
  const [fewShot, setFewShot] = useState(false);
  const base = fixture.base as string;
  const withCot = fixture.withCot as string | undefined;
  const fewShotBlock = (fixture.fewShot as string) ?? (fixture.withFewShot as string) ?? '';
  const answers = (fixture.answers as Record<string, string>) ?? {};
  const assembled = [base, fewShot && fewShotBlock ? fewShotBlock : '', cot && withCot ? withCot : '']
    .filter(Boolean)
    .join('\n\n');
  const answerKey = cot && fewShot ? 'both' : cot ? 'withCot' : fewShot ? 'fewShot' : 'base';

  return (
    <div className="stack">
      {withCot ? (
        <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input type="checkbox" checked={cot} onChange={(e) => setCot(e.target.checked)} />
          Add chain-of-thought instruction
        </label>
      ) : null}
      {fewShotBlock ? (
        <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input type="checkbox" checked={fewShot} onChange={(e) => setFewShot(e.target.checked)} />
          Add few-shot examples
        </label>
      ) : null}
      <pre className="code-block">{assembled}</pre>
      <p className="viz-caption">{answers[answerKey] ?? answers.withCot ?? answers.base ?? ''}</p>
    </div>
  );
}

function RagQuery({ fixture }: { fixture: Record<string, unknown> }) {
  const docs = (fixture.docs as { id: string; text: string; vector?: number[] }[]) ?? [];
  const question = String(fixture.question ?? '');
  const queryVec = (fixture.queryVector as number[]) ?? (fixture.query as number[]) ?? null;
  const [ran, setRan] = useState(false);
  const [k, setK] = useState(2);

  let ranked: { id: string; text: string; score: number }[];
  if (!queryVec) {
    const qTokens = new Set(question.toLowerCase().split(/\W+/).filter(Boolean));
    ranked = docs
      .map((d) => {
        const toks = d.text.toLowerCase().split(/\W+/).filter(Boolean);
        const overlap = toks.filter((t) => qTokens.has(t)).length;
        return { id: d.id, text: d.text, score: toks.length ? overlap / Math.sqrt(toks.length) : 0 };
      })
      .sort((a, b) => b.score - a.score);
  } else {
    ranked = docs
      .map((d) => ({ id: d.id, text: d.text, score: cosine(queryVec, d.vector ?? [0, 0]) }))
      .sort((a, b) => b.score - a.score);
  }

  const top = ranked.slice(0, k);

  return (
    <div className="stack">
      <p>
        <strong>Question:</strong> {question}
      </p>
      <label>
        top-k = {k}
        <input
          type="range"
          min={1}
          max={Math.max(1, docs.length)}
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          style={{ display: 'block', width: '100%' }}
        />
      </label>
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => setRan(true)}>
        Run mini retrieval
      </button>
      {ran ? (
        <>
          <ol>
            {top.map((d) => (
              <li key={d.id}>
                <strong>{d.id}</strong> (score {d.score.toFixed(3)}): {d.text}
              </li>
            ))}
          </ol>
          <p className="viz-caption">{String(fixture.answer ?? 'Top-k by similarity (cosine or token overlap).')}</p>
        </>
      ) : (
        <p className="muted">Documents wait in the index until you retrieve.</p>
      )}
    </div>
  );
}

function AgentLoop({ fixture }: { fixture: Record<string, unknown> }) {
  const steps = fixture.steps as { thought: string; action: string; observation: string }[];
  const [i, setI] = useState(0);
  const step = steps[Math.min(i, steps.length - 1)];
  return (
    <div className="stack">
      <p>
        <strong>Goal:</strong> {String(fixture.goal)}
      </p>
      <div className="viz-caption">
        <div>
          <strong>Thought:</strong> {step.thought}
        </div>
        <div>
          <strong>Action:</strong> {step.action}
        </div>
        <div>
          <strong>Observation:</strong> {step.observation}
        </div>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-secondary btn-sm" disabled={i <= 0} onClick={() => setI((v) => v - 1)}>
          Prev
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          disabled={i >= steps.length - 1}
          onClick={() => setI((v) => v + 1)}
        >
          Next step
        </button>
      </div>
    </div>
  );
}

function DecodeSampler({ fixture }: { fixture: Record<string, unknown> }) {
  const candidates = (fixture.candidates as { t: string; p?: number; logit?: number }[]) ?? [];
  const labels = candidates.map((c) => c.t);
  const logits = candidates.map((c) => c.logit ?? Math.log(Math.max(c.p ?? 1e-6, 1e-6)));
  const [temp, setTemp] = useState(1);
  const [k, setK] = useState(Math.min(3, candidates.length || 3));

  const base = softmax(logits, temp);
  const mask = topKMask(base, k);
  const probs = renormalise(base, mask);

  return (
    <div className="stack">
      <p>
        Prefix: <code>{String(fixture.prefix)}</code>
      </p>
      <label>
        Temperature: {temp.toFixed(2)}
        <input
          type="range"
          min={0.2}
          max={1.8}
          step={0.05}
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          style={{ display: 'block', width: '100%' }}
        />
      </label>
      <label>
        Top-k: {k}
        <input
          type="range"
          min={1}
          max={Math.max(1, candidates.length)}
          step={1}
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          style={{ display: 'block', width: '100%' }}
        />
      </label>
      {labels.map((label, i) => (
        <div key={label}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ opacity: probs[i] === 0 ? 0.4 : 1 }}>{label}</span>
            <span>{(probs[i] * 100).toFixed(1)}%</span>
          </div>
          <div className="progress-bar">
            <span style={{ width: `${probs[i] * 100}%` }} />
          </div>
        </div>
      ))}
      <p className="muted">
        Distribution from softmax(logits / T), then top-k truncate + renormalise. The model samples from this — it is not a verified knowledge table.
      </p>
    </div>
  );
}
