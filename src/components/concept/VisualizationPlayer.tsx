import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import type { VisualizationSpec } from '../../types/content';
import { buildPipeline } from '../../visualizations/pipeline/build';
import { PipelineView } from '../../visualizations/pipeline/PipelineView';
import { SceneLegend } from '../../visualizations/SceneCanvas';
import type { SceneSpec } from '../../visualizations/scenes/types';

type Props = {
  spec: VisualizationSpec;
  conceptId: string;
  scene?: SceneSpec | null;
  /** Hero placement gives the lab a larger stage and stronger framing at the top of a page. */
  hero?: boolean;
};

/** How long the packet spends in flight, and how long a block holds the stage, at 1× speed. */
const TRAVEL_MS = 620;
const DWELL_MS = 2200;

/**
 * Last-resort scene for a concept whose purpose-built scene has not loaded yet or is
 * missing, so the lab always renders a real pipeline instead of an empty stage.
 */
function fallbackScene(spec: VisualizationSpec): SceneSpec {
  return {
    title: spec.title,
    description: spec.description,
    mathNote: spec.mathNote,
    steps: spec.steps.map((step, i) => ({
      id: step.id,
      caption: step.caption,
      callout: step.callout,
      frame: {
        kind: 'panels' as const,
        heading: `Step ${i + 1}`,
        panels: [{ title: `Step ${i + 1}`, body: step.caption }],
        activeIndex: 0,
      },
    })),
  };
}

export function VisualizationPlayer({ spec, conceptId, scene, hero = false }: Props) {
  const labelId = useId();
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  /** -1 keeps the machine idle: the whole diagram is drawn but nothing has entered it. */
  const [stageIndex, setStageIndex] = useState(-1);
  const [arrived, setArrived] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showMath, setShowMath] = useState(false);
  const timer = useRef<number | null>(null);

  const fallback = useMemo(() => fallbackScene(spec), [spec]);
  const effectiveScene = scene ?? fallback;
  const pipeline = useMemo(() => buildPipeline(effectiveScene), [effectiveScene]);
  const total = pipeline.stages.length;
  const stage = stageIndex >= 0 ? pipeline.stages[Math.min(stageIndex, total - 1)] : undefined;
  const title = effectiveScene.title;
  const description = effectiveScene.description;
  const mathNote = effectiveScene.mathNote;

  useEffect(() => {
    setStageIndex(-1);
    setArrived(false);
    setPlaying(false);
    setStarted(false);
  }, [conceptId]);

  // One timer drives both halves of a beat: the packet flies, then the block holds the
  // stage before the next hand-off. Pausing snaps the packet home so nothing is left half-lit.
  useEffect(() => {
    if (!started || stageIndex < 0) return;
    const clear = () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    if (!arrived) {
      timer.current = window.setTimeout(() => setArrived(true), TRAVEL_MS / speed);
      return clear;
    }
    if (!playing) return;
    if (stageIndex >= total - 1) {
      setPlaying(false);
      return;
    }
    timer.current = window.setTimeout(() => {
      setStageIndex((i) => i + 1);
      setArrived(false);
    }, DWELL_MS / speed);
    return clear;
  }, [started, stageIndex, arrived, playing, speed, total]);

  const advance = useCallback(() => {
    setStageIndex((i) => {
      if (i < 0) return 0;
      if (i >= total - 1) return i;
      return i + 1;
    });
    setArrived(false);
  }, [total]);

  const stepForward = useCallback(() => {
    setPlaying(false);
    if (stageIndex < 0) {
      setStageIndex(0);
      setArrived(false);
      return;
    }
    if (!arrived) {
      setArrived(true);
      return;
    }
    if (stageIndex < total - 1) advance();
  }, [advance, arrived, stageIndex, total]);

  const stepBack = useCallback(() => {
    setPlaying(false);
    setArrived(true);
    // Stepping back past the first block stays on it rather than dropping to the idle diagram.
    setStageIndex((i) => (i < 0 ? -1 : Math.max(0, i - 1)));
  }, []);

  const togglePlay = useCallback(() => {
    setPlaying((p) => {
      if (p) {
        // Freezing mid-flight would leave a block half-lit, so settle it first.
        setArrived(true);
        return false;
      }
      if (stageIndex < 0) {
        setStageIndex(0);
        setArrived(false);
      } else if (stageIndex >= total - 1 && arrived) {
        setStageIndex(0);
        setArrived(false);
      }
      return true;
    });
  }, [arrived, stageIndex, total]);

  const reset = useCallback(() => {
    setPlaying(false);
    setStageIndex(-1);
    setArrived(false);
  }, []);

  // Shortcuts stay scoped to the lab so they cannot hijack Space or the arrow keys elsewhere.
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!started) return;
    const target = e.target as HTMLElement;
    const isFormControl = ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName);
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepForward();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepBack();
    } else if ((e.key === 'k' || e.key === 'K') && !isFormControl) {
      e.preventDefault();
      togglePlay();
    }
  };

  const statusLabel = stage
    ? arrived
      ? `${stage.name}: ${stage.caption}`
      : `Sending ${stage.inValue} into ${stage.name}`
    : `${total}-block pipeline, idle`;

  return (
    <section
      className={`panel viz-shell${hero ? ' viz-hero' : ''}`}
      id="visualization"
      aria-labelledby={labelId}
      onKeyDown={onKeyDown}
    >
      <div className="viz-header">
        <span className="viz-eyebrow">Visualization lab</span>
        <h2 id={labelId}>{title}</h2>
        <p className="muted">{description}</p>
      </div>

      {!started ? (
        <div className="viz-stage viz-idle">
          <div>
            <p className="viz-idle-title">
              A live {total}-block pipeline{pipeline.subject ? <> carrying {pipeline.subject}</> : null}
            </p>
            <p className="muted">
              Run it, then press Play to watch the data move through every block and get transformed on the way. Step and the
              ← / → keys move one block at a time.
            </p>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => setStarted(true)}>
              Run Visualization
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="viz-stage viz-stage-flow" role="img" aria-label={`${title}. ${statusLabel}`}>
            <PipelineView pipeline={pipeline} stageIndex={stageIndex} arrived={arrived} flowId={conceptId} title={title} />
          </div>

          {effectiveScene.legend?.length ? <SceneLegend scene={effectiveScene} /> : null}

          <div className="viz-controls" role="toolbar" aria-label="Visualization controls">
            <button type="button" className="btn btn-secondary btn-sm" onClick={togglePlay} aria-pressed={playing}>
              {playing ? 'Pause' : stageIndex >= total - 1 && arrived ? 'Replay' : 'Play'}
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={stepForward} disabled={stageIndex >= total - 1 && arrived}>
              Step
            </button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={reset} disabled={stageIndex < 0}>
              Reset
            </button>
            <label className="pill" style={{ gap: '0.5rem' }}>
              Speed
              <select
                aria-label="Flow speed"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                style={{ border: 'none', background: 'transparent' }}
              >
                <option value={0.5}>0.5×</option>
                <option value={0.75}>0.75×</option>
                <option value={1}>1×</option>
                <option value={1.5}>1.5×</option>
                <option value={2}>2×</option>
              </select>
            </label>
            <span className="muted" style={{ fontSize: '0.9rem' }}>
              {stageIndex < 0 ? `Idle · ${total} blocks` : `Block ${stageIndex + 1} / ${total}`}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={stage ? `${stage.id}-${arrived}` : 'idle'}
              className={`viz-caption${stage && !arrived ? ' is-transit' : ''}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              aria-live="polite"
            >
              {stage ? (
                arrived ? (
                  <>
                    <strong>{stage.name}:</strong> {stage.caption}
                    {stage.callout ? <div style={{ marginTop: '0.4rem' }}>{stage.callout}</div> : null}
                  </>
                ) : (
                  <>
                    <strong>In transit:</strong> {stage.inValue} → {stage.name}, which will {stage.op.charAt(0).toLowerCase()}
                    {stage.op.slice(1)}.
                  </>
                )
              ) : (
                <>
                  <strong>Idle:</strong> the whole machine is drawn above. Press Play to send {pipeline.subject ?? 'the input'}{' '}
                  through it and watch each block transform what it receives.
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {mathNote ? (
        <div>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setShowMath((v) => !v)} aria-expanded={showMath}>
            {showMath ? 'Hide the math' : 'Show the math'}
          </button>
          {showMath ? <p className="viz-math">{mathNote}</p> : null}
        </div>
      ) : null}
    </section>
  );
}
