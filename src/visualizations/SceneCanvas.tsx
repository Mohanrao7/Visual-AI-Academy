import { motion } from 'framer-motion';
import type {
  BarsFrame,
  BlocksFrame,
  BudgetFrame,
  ChartFrame,
  FlowFrame,
  LoopFrame,
  MatrixFrame,
  NetworkFrame,
  PanelsFrame,
  RankingFrame,
  ScatterFrame,
  SceneFrame,
  SceneSpec,
  TimelineFrame,
  TokensFrame,
  Tone,
  VectorsFrame,
} from './scenes/types';

const TONE: Record<Tone, { bg: string; fg: string; line: string }> = {
  neutral: { bg: '#e3ece8', fg: '#13232c', line: '#b9cbc3' },
  active: { bg: '#0f8a6a', fg: '#ffffff', line: '#0f8a6a' },
  muted: { bg: '#f1f5f3', fg: '#7a8c94', line: '#dbe4e0' },
  good: { bg: '#1f8a4c', fg: '#ffffff', line: '#1f8a4c' },
  warn: { bg: '#f6e3b8', fg: '#6b4a00', line: '#e8a317' },
  bad: { bg: '#f4d5d5', fg: '#8c2020', line: '#c23b3b' },
  accent: { bg: '#1d6fbf', fg: '#ffffff', line: '#1d6fbf' },
  frozen: { bg: '#dfe6ea', fg: '#5a6b74', line: '#a9b8c0' },
};

function tone(t: Tone | undefined) {
  return TONE[t ?? 'neutral'];
}

export function SceneLegend({ scene }: { scene: SceneSpec }) {
  if (!scene.legend?.length) return null;
  return (
    <ul className="scene-legend" aria-label="Legend">
      {scene.legend.map((item) => (
        <li key={item.label}>
          <span className="scene-legend-swatch" style={{ background: tone(item.tone).bg, borderColor: tone(item.tone).line }} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function FrameView({ frame }: { frame: SceneFrame }) {
  switch (frame.kind) {
    case 'bars':
      return <BarsView frame={frame} />;
    case 'vectors':
      return <VectorsView frame={frame} />;
    case 'matrix':
      return <MatrixView frame={frame} />;
    case 'flow':
      return <FlowView frame={frame} />;
    case 'scatter':
      return <ScatterView frame={frame} />;
    case 'ranking':
      return <RankingView frame={frame} />;
    case 'chart':
      return <ChartView frame={frame} />;
    case 'blocks':
      return <BlocksView frame={frame} />;
    case 'loop':
      return <LoopView frame={frame} />;
    case 'network':
      return <NetworkView frame={frame} />;
    case 'tokens':
      return <TokensView frame={frame} />;
    case 'budget':
      return <BudgetView frame={frame} />;
    case 'panels':
      return <PanelsView frame={frame} />;
    case 'timeline':
      return <TimelineView frame={frame} />;
    default:
      return null;
  }
}

function Heading({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="scene-heading">{text}</p>;
}

function Footer({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="scene-footer">{text}</p>;
}

function formatValue(value: number, format: BarsFrame['format']) {
  switch (format) {
    case 'percent':
      return `${(value * 100).toFixed(1)}%`;
    case 'decimal1':
      return value.toFixed(1);
    case 'decimal2':
      return value.toFixed(2);
    default:
      return String(value);
  }
}

function BarsView({ frame }: { frame: BarsFrame }) {
  const format = frame.format ?? 'percent';
  // Bar length is magnitude; the printed value keeps its sign so negatives stay readable.
  const max = frame.max ?? Math.max(0.0001, ...frame.bars.map((b) => Math.max(Math.abs(b.value), Math.abs(b.ghost ?? 0))));
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-bars">
        {frame.bars.map((bar, i) => (
          <div key={bar.label}>
            {frame.cutAfter && frame.cutAfter.index === i - 1 ? (
              <div className="scene-cutline">
                <span>{frame.cutAfter.label}</span>
              </div>
            ) : null}
            <div className="scene-bar-row">
              <span className="scene-bar-label">{bar.label}</span>
              <span className="scene-bar-track">
                {bar.ghost !== undefined ? (
                  <span className="scene-bar-ghost" style={{ width: `${Math.min(100, (Math.abs(bar.ghost) / max) * 100)}%` }} />
                ) : null}
                <motion.span
                  className="scene-bar-fill"
                  initial={false}
                  animate={{ width: `${Math.min(100, (Math.abs(bar.value) / max) * 100)}%` }}
                  transition={{ duration: 0.35 }}
                  style={{
                    background: tone(bar.tone).line,
                    backgroundImage: bar.value < 0 ? 'repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 3px, transparent 3px 6px)' : undefined,
                  }}
                />
              </span>
              <span className="scene-bar-value">{formatValue(bar.value, format)}</span>
            </div>
            {bar.note ? <p className="scene-note">{bar.note}</p> : null}
          </div>
        ))}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function cellColour(value: number, scaleBound: number) {
  const clamped = Math.max(-1, Math.min(1, value / scaleBound));
  if (clamped >= 0) return `rgba(15,138,106,${0.12 + clamped * 0.66})`;
  return `rgba(29,111,191,${0.12 + Math.abs(clamped) * 0.66})`;
}

function VectorsView({ frame }: { frame: VectorsFrame }) {
  const scaleBound = frame.scale ?? Math.max(0.5, ...frame.rows.flatMap((r) => r.values.map((v) => Math.abs(v))));
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-vectors">
        {frame.columns ? (
          <div className="scene-vector-row scene-vector-head">
            <span className="scene-vector-label" />
            <span className="scene-vector-cells">
              {frame.columns.map((c) => (
                <span key={c} className="scene-vector-colhead">
                  {c}
                </span>
              ))}
            </span>
          </div>
        ) : null}
        {frame.rows.map((row) => (
          <div key={row.label} className="scene-vector-row" style={{ opacity: row.tone === 'muted' ? 0.5 : 1 }}>
            <span className="scene-vector-label" style={{ color: tone(row.tone).line }}>
              {row.label}
            </span>
            <span className="scene-vector-cells">
              {row.values.map((v, i) => (
                <motion.span
                  key={i}
                  className="scene-vector-cell"
                  initial={false}
                  animate={{ background: cellColour(v, scaleBound) }}
                  transition={{ duration: 0.3 }}
                >
                  {v.toFixed(2)}
                </motion.span>
              ))}
            </span>
            {row.note ? <span className="scene-vector-note">{row.note}</span> : null}
          </div>
        ))}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function MatrixView({ frame }: { frame: MatrixFrame }) {
  const maskedSet = new Set((frame.masked ?? []).map(([r, c]) => `${r}-${c}`));
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-matrix-wrap">
        <div
          className={`scene-matrix${frame.showValues === false ? ' is-dense' : ''}`}
          style={{
            gridTemplateColumns: `minmax(${frame.showValues === false ? 12 : 56}px, auto) repeat(${frame.colLabels.length}, minmax(${
              frame.showValues === false ? 14 : 38
            }px, 1fr))`,
          }}
        >
          <span className="scene-matrix-corner">{frame.rowAxisLabel ?? ''}</span>
          {frame.colLabels.map((c, ci) => (
            <span key={`col-${ci}`} className="scene-matrix-colhead">
              {c}
            </span>
          ))}
          {frame.rowLabels.map((r, ri) => (
            <Row
              key={`row-${ri}`}
              label={r}
              rowIndex={ri}
              values={frame.values[ri] ?? []}
              masked={maskedSet}
              highlight={frame.highlightRow === ri}
              showValues={frame.showValues !== false}
            />
          ))}
        </div>
        {frame.colAxisLabel ? <p className="scene-axis-note">{frame.colAxisLabel}</p> : null}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function Row({
  label,
  rowIndex,
  values,
  masked,
  highlight,
  showValues,
}: {
  label: string;
  rowIndex: number;
  values: number[];
  masked: Set<string>;
  highlight: boolean;
  showValues: boolean;
}) {
  return (
    <>
      <span className={`scene-matrix-rowhead${highlight ? ' is-active' : ''}`}>{label}</span>
      {values.map((v, ci) => {
        const isMasked = masked.has(`${rowIndex}-${ci}`);
        return (
          <motion.span
            key={ci}
            className={`scene-matrix-cell${isMasked ? ' is-masked' : ''}`}
            initial={false}
            animate={{
              background: isMasked
                ? 'repeating-linear-gradient(45deg,#e9eef1,#e9eef1 4px,#dbe3e7 4px,#dbe3e7 8px)'
                : `rgba(15,138,106,${0.08 + Math.max(0, Math.min(1, v)) * 0.72})`,
            }}
            transition={{ duration: 0.3 }}
          >
            {showValues ? (isMasked ? '—' : v.toFixed(2)) : ''}
          </motion.span>
        );
      })}
    </>
  );
}

function FlowView({ frame }: { frame: FlowFrame }) {
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      {frame.lane ? <p className="scene-lane">{frame.lane}</p> : null}
      <ol className="scene-flow">
        {frame.stages.map((stage, i) => {
          const isActive = frame.activeIndex === i;
          const isPast = frame.activeIndex !== undefined && i < frame.activeIndex;
          const t = stage.tone ?? (isActive ? 'active' : isPast ? 'neutral' : 'muted');
          return (
            <motion.li
              key={stage.label}
              className={`scene-flow-stage${isActive ? ' is-active' : ''}`}
              initial={false}
              animate={{ opacity: t === 'muted' ? 0.5 : 1 }}
              transition={{ duration: 0.25 }}
              style={{ borderColor: tone(t).line, background: isActive ? tone(t).bg : '#ffffff', color: isActive ? tone(t).fg : '#13232c' }}
            >
              <span className="scene-flow-index">{i + 1}</span>
              <span className="scene-flow-label">{stage.label}</span>
              {stage.detail ? (
                <span className="scene-flow-detail" style={{ color: isActive ? 'rgba(255,255,255,0.88)' : 'var(--muted)' }}>
                  {stage.detail}
                </span>
              ) : null}
            </motion.li>
          );
        })}
      </ol>
      <Footer text={frame.footer} />
    </div>
  );
}

function ScatterView({ frame }: { frame: ScatterFrame }) {
  const byId = new Map(frame.points.map((p) => [p.id, p]));
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <svg viewBox="0 0 100 62" className="scene-svg" role="presentation">
        <line x1="8" y1="54" x2="96" y2="54" stroke="#c5d2cb" strokeWidth="0.35" />
        <line x1="8" y1="54" x2="8" y2="6" stroke="#c5d2cb" strokeWidth="0.35" />
        {(frame.clusters ?? []).map((c) => (
          <g key={c.label}>
            <circle cx={c.x} cy={c.y} r={c.r} fill="rgba(15,138,106,0.09)" stroke="rgba(15,138,106,0.3)" strokeWidth="0.25" strokeDasharray="1.5 1" />
            <text x={c.x} y={c.y - c.r - 1.2} fontSize="2.6" textAnchor="middle" fill="#5a7581">
              {c.label}
            </text>
          </g>
        ))}
        {(frame.links ?? []).map((l) => {
          const a = byId.get(l.from);
          const b = byId.get(l.to);
          if (!a || !b) return null;
          return (
            <g key={`${l.from}-${l.to}`}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={tone(l.tone).line} strokeWidth="0.4" strokeDasharray="1.5 1" />
              {l.label ? (
                <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 1} fontSize="2.5" textAnchor="middle" fill={tone(l.tone).line}>
                  {l.label}
                </text>
              ) : null}
            </g>
          );
        })}
        {frame.points.map((p) => (
          <motion.g key={p.id} initial={{ opacity: 0 }} animate={{ opacity: p.tone === 'muted' ? 0.4 : 1 }} transition={{ duration: 0.3 }}>
            <circle cx={p.x} cy={p.y} r="1.6" fill={tone(p.tone).line} />
            <text x={p.x} y={p.y - 2.6} fontSize="2.7" textAnchor="middle" fill="#13232c">
              {p.label}
            </text>
          </motion.g>
        ))}
      </svg>
      {frame.axisNote ? <p className="scene-axis-note">{frame.axisNote}</p> : null}
      <Footer text={frame.footer} />
    </div>
  );
}

function RankingView({ frame }: { frame: RankingFrame }) {
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-ranking" style={{ gridTemplateColumns: `repeat(${frame.columns.length}, minmax(0, 1fr))` }}>
        {frame.columns.map((col) => (
          <div key={col.title} className="scene-ranking-col">
            <p className="scene-ranking-title">{col.title}</p>
            {col.subtitle ? <p className="scene-ranking-sub">{col.subtitle}</p> : null}
            <ol>
              {col.items.map((item, i) => (
                <motion.li
                  key={`${item.label}-${i}`}
                  layout
                  initial={false}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderColor: tone(item.tone).line,
                    background: item.tone === 'muted' ? '#f7faf8' : tone(item.tone).bg,
                    color: item.tone === 'active' || item.tone === 'good' || item.tone === 'accent' ? '#fff' : '#13232c',
                    opacity: item.tone === 'muted' ? 0.55 : 1,
                  }}
                >
                  <span>{item.label}</span>
                  {item.score ? <b>{item.score}</b> : null}
                </motion.li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function ChartView({ frame }: { frame: ChartFrame }) {
  const allPoints = frame.series.flatMap((s) => s.points);
  const yMax = frame.yMax ?? Math.max(1, ...allPoints) * 1.1;
  const count = Math.max(...frame.series.map((s) => s.points.length), 2);
  const x = (i: number) => 12 + (i / (count - 1)) * 82;
  const y = (v: number) => 52 - (v / yMax) * 42;
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <svg viewBox="0 0 100 62" className="scene-svg" role="presentation">
        <line x1="12" y1="52" x2="94" y2="52" stroke="#c5d2cb" strokeWidth="0.35" />
        <line x1="12" y1="52" x2="12" y2="8" stroke="#c5d2cb" strokeWidth="0.35" />
        <text x="12" y="59" fontSize="2.7" fill="#5a7581">
          {frame.xLabel}
        </text>
        <text x="2" y="10" fontSize="2.7" fill="#5a7581">
          {frame.yLabel}
        </text>
        {(frame.markers ?? []).map((m) => (
          <g key={m.label}>
            <line x1={x(m.atIndex)} y1="10" x2={x(m.atIndex)} y2="52" stroke="#c23b3b" strokeWidth="0.3" strokeDasharray="1.2 1" />
            <text x={x(m.atIndex)} y="8" fontSize="2.5" textAnchor="middle" fill="#c23b3b">
              {m.label}
            </text>
          </g>
        ))}
        {frame.series.map((s) => (
          <motion.polyline
            key={s.label}
            initial={false}
            animate={{ opacity: 1 }}
            points={s.points.map((p, i) => `${x(i)},${y(p)}`).join(' ')}
            fill="none"
            stroke={tone(s.tone).line}
            strokeWidth="0.8"
            strokeDasharray={s.dashed ? '2 1.2' : undefined}
            strokeLinecap="round"
          />
        ))}
      </svg>
      <ul className="scene-legend">
        {frame.series.map((s) => (
          <li key={s.label}>
            <span className="scene-legend-swatch" style={{ background: tone(s.tone).line, borderColor: tone(s.tone).line }} />
            {s.label}
          </li>
        ))}
      </ul>
      <Footer text={frame.footer} />
    </div>
  );
}

function BlocksView({ frame }: { frame: BlocksFrame }) {
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-blocks">
        {frame.groups.map((group) => {
          const total = group.blocks.reduce((a, b) => a + b.weight, 0) || 1;
          return (
            <div key={group.label} className="scene-blocks-group">
              <p className="scene-blocks-label">{group.label}</p>
              <div className="scene-blocks-bar">
                {group.blocks.map((b) => (
                  <motion.span
                    key={b.label}
                    initial={false}
                    animate={{ flexGrow: b.weight }}
                    transition={{ duration: 0.35 }}
                    style={{
                      background: tone(b.tone).bg,
                      color: tone(b.tone).fg,
                      borderColor: tone(b.tone).line,
                      flexBasis: `${(b.weight / total) * 100}%`,
                    }}
                  >
                    {b.label}
                  </motion.span>
                ))}
              </div>
              {group.note ? <p className="scene-note">{group.note}</p> : null}
            </div>
          );
        })}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function LoopView({ frame }: { frame: LoopFrame }) {
  const n = frame.nodes.length;
  const cx = 26;
  const cy = 30;
  const r = 19;
  return (
    <div className="scene-block scene-loop">
      <div>
        <Heading text={frame.heading} />
        <svg viewBox="0 0 54 62" className="scene-svg scene-svg-loop" role="presentation">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c5d2cb" strokeWidth="0.4" strokeDasharray="2 1.4" />
          {frame.nodes.map((node, i) => {
            const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
            const px = cx + Math.cos(angle) * r;
            const py = cy + Math.sin(angle) * r;
            const isActive = frame.activeId === node.id;
            return (
              <motion.g key={node.id} initial={false} animate={{ opacity: isActive ? 1 : 0.55 }} transition={{ duration: 0.25 }}>
                <circle cx={px} cy={py} r="7.6" fill={isActive ? TONE.active.bg : '#ffffff'} stroke={isActive ? TONE.active.line : '#c5d2cb'} strokeWidth="0.5" />
                <text x={px} y={py + 1} fontSize="2.9" textAnchor="middle" fill={isActive ? '#fff' : '#13232c'}>
                  {node.label}
                </text>
              </motion.g>
            );
          })}
          {frame.iteration ? (
            <text x={cx} y={cy + 1} fontSize="3.2" textAnchor="middle" fill="#5a7581">
              {frame.iteration}
            </text>
          ) : null}
        </svg>
      </div>
      <div className="scene-loop-log">
        {(frame.log ?? []).map((entry, i) => (
          <motion.div
            key={`${entry.role}-${i}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            style={{ borderLeftColor: tone(entry.tone).line }}
          >
            <strong>{entry.role}</strong>
            <span>{entry.text}</span>
          </motion.div>
        ))}
        <Footer text={frame.footer} />
      </div>
    </div>
  );
}

function NetworkView({ frame }: { frame: NetworkFrame }) {
  const cols = frame.layers.length;
  const colX = (i: number) => 12 + (i / Math.max(cols - 1, 1)) * 76;
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <svg viewBox="0 0 100 62" className="scene-svg" role="presentation">
        <defs>
          <marker id="scene-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={frame.direction === 'backward' ? '#c23b3b' : '#1d6fbf'} />
          </marker>
        </defs>
        {frame.layers.slice(0, -1).map((_, i) => {
          const from = frame.direction === 'backward' ? colX(i + 1) : colX(i);
          const to = frame.direction === 'backward' ? colX(i) : colX(i + 1);
          if (frame.direction === 'idle') return null;
          return (
            <motion.line
              key={`edge-${i}`}
              initial={false}
              x1={from + (frame.direction === 'backward' ? -6 : 6)}
              y1="46"
              x2={to + (frame.direction === 'backward' ? 6 : -6)}
              y2="46"
              stroke={frame.direction === 'backward' ? '#c23b3b' : '#1d6fbf'}
              strokeWidth="0.5"
              markerEnd="url(#scene-arrow)"
            />
          );
        })}
        {frame.layers.map((layer, li) => {
          const x = colX(li);
          const isActive = frame.activeLayer === li;
          return (
            <g key={layer.label}>
              {Array.from({ length: layer.units }).map((_, ui) => {
                const spread = (layer.units - 1) * 6;
                const y = 24 - spread / 2 + ui * 6;
                return (
                  <motion.circle
                    key={ui}
                    cx={x}
                    cy={y}
                    r="2.2"
                    initial={false}
                    animate={{ fill: isActive ? TONE.active.line : '#cfdcd6' }}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}
              <text x={x} y="40" fontSize="2.8" textAnchor="middle" fill={isActive ? '#0f8a6a' : '#5a7581'}>
                {layer.label}
              </text>
              {layer.note ? (
                <text x={x} y="55" fontSize="2.4" textAnchor="middle" fill="#7a8c94">
                  {layer.note}
                </text>
              ) : null}
            </g>
          );
        })}
        {frame.edgeLabel ? (
          <text x="50" y="61" fontSize="2.7" textAnchor="middle" fill={frame.direction === 'backward' ? '#c23b3b' : '#1d6fbf'}>
            {frame.edgeLabel}
          </text>
        ) : null}
      </svg>
      <Footer text={frame.footer} />
    </div>
  );
}

function TokensView({ frame }: { frame: TokensFrame }) {
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      {frame.source ? <p className="scene-source">{frame.source}</p> : null}
      <div className="scene-tokens">
        {frame.tokens.map((t, i) => (
          <motion.span
            key={`${t.text}-${i}`}
            layout
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: i * 0.03 }}
            className="scene-token"
            style={{ background: tone(t.tone).bg, color: tone(t.tone).fg, borderColor: tone(t.tone).line }}
          >
            <span className="scene-token-text">{t.text.replace(/ /g, '␣')}</span>
            {t.id !== undefined ? <span className="scene-token-id">#{t.id}</span> : null}
            {t.note ? <span className="scene-token-note">{t.note}</span> : null}
          </motion.span>
        ))}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

function BudgetView({ frame }: { frame: BudgetFrame }) {
  const used = frame.segments.reduce((a, s) => a + s.tokens, 0);
  const overflow = Math.max(0, used - frame.capacity);
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-budget-meta">
        <span>
          Window capacity <b>{frame.capacity.toLocaleString()}</b> tokens
        </span>
        <span style={{ color: overflow > 0 ? '#c23b3b' : '#0b6b52' }}>
          Packed <b>{used.toLocaleString()}</b>
          {overflow > 0 ? ` · ${overflow.toLocaleString()} over` : ''}
        </span>
      </div>
      <div className="scene-budget-bar">
        {frame.segments.map((s) => (
          <motion.span
            key={s.label}
            initial={false}
            animate={{ flexBasis: `${Math.min(100, (s.tokens / frame.capacity) * 100)}%` }}
            transition={{ duration: 0.35 }}
            style={{ background: tone(s.tone).bg, color: tone(s.tone).fg, borderColor: tone(s.tone).line }}
            title={`${s.label}: ${s.tokens} tokens`}
          >
            {s.label}
          </motion.span>
        ))}
      </div>
      <ul className="scene-budget-list">
        {frame.segments.map((s) => (
          <li key={s.label}>
            <span className="scene-legend-swatch" style={{ background: tone(s.tone).bg, borderColor: tone(s.tone).line }} />
            {s.label} · {s.tokens.toLocaleString()} tokens
          </li>
        ))}
      </ul>
      {frame.dropped?.length ? (
        <div className="scene-dropped">
          <strong>Dropped / not sent:</strong>
          {frame.dropped.map((d) => (
            <span key={d.label}>
              {d.label} ({d.tokens.toLocaleString()})
            </span>
          ))}
        </div>
      ) : null}
      <Footer text={frame.footer} />
    </div>
  );
}

function PanelsView({ frame }: { frame: PanelsFrame }) {
  return (
    <div className="scene-block">
      <Heading text={frame.heading} />
      <div className="scene-panels" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${frame.panels.length > 2 ? 180 : 220}px, 1fr))` }}>
        {frame.panels.map((p, i) => {
          const isActive = frame.activeIndex === undefined || frame.activeIndex === i;
          const t = p.tone ?? (isActive ? 'active' : 'muted');
          return (
            <motion.div
              key={p.title}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0.45 }}
              transition={{ duration: 0.25 }}
              className="scene-panel"
              style={{ borderColor: tone(t).line, boxShadow: isActive ? `inset 4px 0 0 ${tone(t).line}` : 'none' }}
            >
              <p className="scene-panel-title" style={{ color: tone(t).line }}>
                {p.title}
              </p>
              <p className="scene-panel-body">{p.body}</p>
            </motion.div>
          );
        })}
      </div>
      <Footer text={frame.footer} />
    </div>
  );
}

const MARKER: Record<NonNullable<TimelineFrame['events'][number]['marker']>, string> = {
  step: '•',
  checkpoint: '⛳',
  pause: '⏸',
  error: '✕',
  done: '✓',
};

function TimelineView({ frame }: { frame: TimelineFrame }) {
  return (
    <div className="scene-block scene-timeline-wrap">
      <div>
        <Heading text={frame.heading} />
        <ol className="scene-timeline">
          {frame.events.map((e, i) => {
            const isActive = frame.activeIndex === i;
            const isPast = frame.activeIndex !== undefined && i < frame.activeIndex;
            const t = e.tone ?? (isActive ? 'active' : isPast ? 'neutral' : 'muted');
            return (
              <motion.li
                key={e.label}
                initial={false}
                animate={{ opacity: t === 'muted' ? 0.45 : 1 }}
                transition={{ duration: 0.25 }}
                style={{ borderLeftColor: tone(t).line }}
              >
                <span className="scene-timeline-marker" style={{ background: tone(t).bg, color: tone(t).fg, borderColor: tone(t).line }}>
                  {MARKER[e.marker ?? 'step']}
                </span>
                <span>
                  <b>{e.label}</b>
                  {e.detail ? <em>{e.detail}</em> : null}
                </span>
              </motion.li>
            );
          })}
        </ol>
      </div>
      {frame.state?.length ? (
        <div className="scene-state">
          <p className="scene-state-title">state</p>
          <dl>
            {frame.state.map((s) => (
              <div key={s.key} className={s.changed ? 'is-changed' : undefined}>
                <dt>{s.key}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      <Footer text={frame.footer} />
    </div>
  );
}
