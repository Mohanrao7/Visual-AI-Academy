import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { FrameView } from '../SceneCanvas';
import type { Pipeline, RailNode, ResolvedStage } from './build';

type Props = {
  pipeline: Pipeline;
  /** -1 means the machine is idle and nothing has entered it yet. */
  stageIndex: number;
  /** False while the packet is still in flight towards `stageIndex`. */
  arrived: boolean;
  flowId: string;
  title: string;
};

type NodeState = 'active' | 'past' | 'future';

/** Consecutive rail nodes belonging to the same loop are drawn inside one bracketed group. */
type RailSegment = { loopGroup?: string; loopLabel?: string; loopOf?: number; nodes: RailNode[]; stageCount: number };

function segmentRail(rail: RailNode[]): RailSegment[] {
  const segments: RailSegment[] = [];
  for (const node of rail) {
    const last = segments[segments.length - 1];
    if (node.loopGroup && last?.loopGroup === node.loopGroup) {
      last.nodes.push(node);
      last.stageCount += node.stageIndexes.length;
      if (!last.loopOf && node.loopOf) last.loopOf = node.loopOf;
      if (!last.loopLabel && node.loopLabel) last.loopLabel = node.loopLabel;
      continue;
    }
    segments.push({
      loopGroup: node.loopGroup,
      loopLabel: node.loopLabel,
      loopOf: node.loopOf,
      nodes: [node],
      stageCount: node.stageIndexes.length,
    });
  }
  return segments;
}

function shorten(text: string, max = 22) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function PipelineView({ pipeline, stageIndex, arrived, flowId, title }: Props) {
  const reduceMotion = useReducedMotion();
  const stage: ResolvedStage | undefined = stageIndex >= 0 ? pipeline.stages[stageIndex] : undefined;
  const segments = useMemo(() => segmentRail(pipeline.rail), [pipeline.rail]);
  const railRef = useRef<HTMLDivElement>(null);
  const activeRailIndex = stage?.railIndex ?? -1;

  // Keep the live block on screen without letting the rail scroll the page underneath it.
  useEffect(() => {
    const container = railRef.current;
    if (!container || activeRailIndex < 0) return;
    const node = container.querySelector<HTMLElement>(`[data-rail-index="${activeRailIndex}"]`);
    if (!node) return;
    const target = node.offsetLeft - container.clientWidth / 2 + node.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, target), behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [activeRailIndex, reduceMotion]);

  const nodeState = (node: RailNode): NodeState => {
    if (stageIndex < 0) return 'future';
    if (node.stageIndexes.includes(stageIndex)) return 'active';
    return node.stageIndexes.some((i) => i < stageIndex) ? 'past' : 'future';
  };

  /** The value a completed node last emitted, so past blocks stay informative while compact. */
  const lastOutput = (node: RailNode) => {
    const done = node.stageIndexes.filter((i) => i < stageIndex);
    const index = done[done.length - 1];
    return index === undefined ? undefined : pipeline.stages[index].outValue;
  };

  return (
    <div className="pipe">
      <div className="pipe-rail-wrap">
        <p className="pipe-rail-title">
          {pipeline.headline ?? title}
          {pipeline.subject ? <span className="pipe-subject">carrying {pipeline.subject}</span> : null}
        </p>
        <div className="pipe-rail-scroll" ref={railRef}>
          <ol className="pipe-rail" aria-label="Pipeline stages">
            {segments.map((segment, si) => (
              <li key={segment.nodes[0].key} className={`pipe-seg${segment.loopGroup ? ' is-loop' : ''}`}>
                {segment.loopGroup ? (
                  <span className="pipe-loop-badge">
                    ↺ {segment.loopLabel ?? 'loop'}
                    {/* A group the scene only shows once still repeats — say how often instead of faking a pass counter. */}
                    {segment.stageCount === 1 && segment.loopOf && segment.loopOf > 1 ? (
                      <b> ×{segment.loopOf.toLocaleString()}</b>
                    ) : stage?.loop?.group === segment.loopGroup ? (
                      <b>
                        {' '}
                        pass {stage.loop.iteration.toLocaleString()}
                        {segment.loopOf ? ` / ${segment.loopOf.toLocaleString()}` : ''}
                      </b>
                    ) : null}
                  </span>
                ) : null}
                <div className="pipe-seg-nodes">
                  {segment.nodes.map((node, ni) => {
                    const state = nodeState(node);
                    const out = lastOutput(node);
                    return (
                      <div key={node.key} className="pipe-node-wrap">
                        {ni > 0 ? <Connector hot={state === 'active' && !arrived} /> : null}
                        <div
                          data-rail-index={node.index}
                          className={`pipe-node is-${state}${state === 'active' && !arrived ? ' is-receiving' : ''}${
                            node.stageIndexes.length > 1 || (segment.stageCount === 1 && (segment.loopOf ?? 0) > 1) ? ' is-repeat' : ''
                          }`}
                          aria-current={state === 'active' ? 'step' : undefined}
                        >
                          <span className="pipe-node-name">{node.name}</span>
                          {state === 'past' && out ? <span className="pipe-node-out">{shorten(out, 26)}</span> : null}
                          {state === 'active' ? (
                            <motion.span
                              layoutId={`packet-${flowId}`}
                              className={`pipe-packet${arrived ? ' is-transformed' : ''}`}
                              transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 26 }}
                            >
                              <span className="pipe-packet-dot" aria-hidden="true" />
                              {shorten(arrived ? pipeline.stages[stageIndex].outValue : pipeline.stages[stageIndex].inValue, 24)}
                            </motion.span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {segment.loopGroup ? (
                  <span className={`pipe-loop-return${stage?.startsIteration && stage.loop?.group === segment.loopGroup ? ' is-firing' : ''}`}>
                    feeds back in
                  </span>
                ) : null}
                {si < segments.length - 1 ? <Connector hot={false} /> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {stage ? (
        <div className="pipe-block">
          <div className="pipe-block-head">
            <span className="pipe-block-count">
              Block {stageIndex + 1} of {pipeline.stages.length}
            </span>
            <h3>{stage.name}</h3>
            {stage.lane ? <span className="pipe-lane">{stage.lane}</span> : null}
            {stage.loop ? (
              <span className="pipe-lane is-loop">
                ↺ {stage.loop.label ?? stage.loop.group} · pass {stage.loop.iteration}
                {stage.loop.of ? ` of ${stage.loop.of}` : ''}
              </span>
            ) : null}
          </div>

          <div className="pipe-io">
            <IoCell kind="in" label="In" value={stage.inValue} filled />
            <span className="pipe-io-arrow" aria-hidden="true">
              →
            </span>
            <IoCell kind="op" label="Does" value={stage.op} filled />
            <span className="pipe-io-arrow" aria-hidden="true">
              →
            </span>
            <IoCell kind="out" label="Out" value={arrived ? stage.outValue : 'computing…'} filled={arrived} />
          </div>

          <motion.div
            className="pipe-payload"
            key={stage.id}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: arrived ? 1 : 0.45, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28 }}
          >
            <FrameView frame={stage.frame} />
          </motion.div>
        </div>
      ) : (
        <div className="pipe-block pipe-idle">
          <div className="pipe-block-head">
            <span className="pipe-block-count">Idle</span>
            <h3>{pipeline.stages.length} blocks wired end to end</h3>
          </div>
          <p className="pipe-idle-note">
            Nothing is moving yet. Press Play to push {pipeline.subject ?? 'the input'} through the machine and watch each block
            transform it.
          </p>
          <ol className="pipe-blueprint">
            {pipeline.stages.map((s, i) => (
              <li key={s.id}>
                <span className="pipe-blueprint-index">{i + 1}</span>
                <span className="pipe-blueprint-name">{s.name}</span>
                <span className="pipe-blueprint-op">{s.op}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function IoCell({ kind, label, value, filled }: { kind: 'in' | 'op' | 'out'; label: string; value: string; filled: boolean }) {
  return (
    <div className={`pipe-io-cell is-${kind}${filled ? '' : ' is-pending'}`}>
      <span className="pipe-io-label">{label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={value}
          className="pipe-io-value"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Connector({ hot }: { hot: boolean }) {
  return <span className={`pipe-connector${hot ? ' is-hot' : ''}`} aria-hidden="true" />;
}
