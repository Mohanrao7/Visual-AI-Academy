import type { SceneFrame, SceneSpec, SceneStep, StageAnnotation } from '../scenes/types';

/** One block of the machine, fully resolved: what arrives, what it does, what leaves. */
export type ResolvedStage = {
  id: string;
  index: number;
  name: string;
  op: string;
  /** The value handed in by the previous block (or the run's starting material). */
  inValue: string;
  /** The value this block hands on. */
  outValue: string;
  caption: string;
  callout?: string;
  frame: SceneFrame;
  lane?: string;
  loop?: StageAnnotation['loop'];
  /** Index into `rail` — several stages share one rail node when they are turns of a loop. */
  railIndex: number;
  /** True when this stage begins a fresh turn of its loop. */
  startsIteration: boolean;
  /** Set when the annotation was authored rather than inferred from the caption. */
  authored: boolean;
};

/** A box drawn on the always-visible architecture rail. */
export type RailNode = {
  key: string;
  index: number;
  name: string;
  stageIndexes: number[];
  loopGroup?: string;
  loopLabel?: string;
  loopOf?: number;
  lane?: string;
};

export type Pipeline = {
  subject?: string;
  headline?: string;
  stages: ResolvedStage[];
  rail: RailNode[];
  /** True when every stage came from an authored annotation. */
  authored: boolean;
};

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

function firstSentence(text: string): string {
  const match = text.match(/^[^.;]+[.;]?/);
  return (match ? match[0] : text).replace(/[.;]$/, '');
}

/** Captions in this project are written as "Name — what happens", which makes a good default block name. */
function splitCaption(caption: string): { head?: string; rest: string } {
  const index = caption.indexOf('—');
  if (index === -1) return { rest: caption };
  const head = caption.slice(0, index).trim();
  const rest = caption.slice(index + 1).trim();
  if (!head || head.length > 34 || !rest) return { rest: caption };
  return { head, rest };
}

function topBar(frame: Extract<SceneFrame, { kind: 'bars' }>) {
  return frame.bars.reduce((best, bar) => (Math.abs(bar.value) > Math.abs(best.value) ? bar : best), frame.bars[0]);
}

function formatBar(value: number, format: Extract<SceneFrame, { kind: 'bars' }>['format']) {
  switch (format) {
    case 'decimal1':
      return value.toFixed(1);
    case 'decimal2':
      return value.toFixed(2);
    case 'raw':
      return String(value);
    default:
      return `${(value * 100).toFixed(0)}%`;
  }
}

/**
 * A one-line description of the payload a frame is carrying. This is the fallback for
 * `out` when a concept has no authored annotation, so it must read as a real value and
 * never as a generic label.
 */
export function summarizeFrame(frame: SceneFrame): string {
  switch (frame.kind) {
    case 'tokens': {
      const shown = frame.tokens.slice(0, 3).map((t) => t.text.trim() || '␣');
      return truncate(`${frame.tokens.length} tokens · ${shown.join(' | ')}${frame.tokens.length > 3 ? ' …' : ''}`, 44);
    }
    case 'bars': {
      const top = topBar(frame);
      return top ? truncate(`${top.label} ${formatBar(top.value, frame.format)}`, 44) : 'distribution';
    }
    case 'vectors': {
      const dims = frame.rows[0]?.values.length ?? 0;
      const label = frame.rows[frame.rows.length - 1]?.label ?? 'vector';
      return truncate(`${label} · ${frame.rows.length}×${dims} numbers`, 44);
    }
    case 'matrix':
      return truncate(`${frame.rowLabels.length}×${frame.colLabels.length} weight grid`, 44);
    case 'flow': {
      const active = frame.activeIndex !== undefined ? frame.stages[frame.activeIndex] : undefined;
      return truncate(active ? `at "${active.label}"` : `${frame.stages.length}-step path`, 44);
    }
    case 'scatter':
      return truncate(`${frame.points.length} points in vector space`, 44);
    case 'ranking': {
      const col = frame.columns[frame.columns.length - 1];
      const top = col?.items[0];
      return truncate(top ? `top: ${top.label}${top.score ? ` (${top.score})` : ''}` : `${frame.columns.length} lists`, 44);
    }
    case 'chart': {
      const series = frame.series[0];
      const last = series?.points[series.points.length - 1];
      return truncate(last === undefined ? frame.yLabel : `${series.label} = ${last.toFixed(2)}`, 44);
    }
    case 'blocks': {
      const count = frame.groups.reduce((sum, g) => sum + g.blocks.length, 0);
      return truncate(`${count} parameter blocks`, 44);
    }
    case 'loop': {
      const active = frame.nodes.find((n) => n.id === frame.activeId);
      return truncate([frame.iteration, active?.label].filter(Boolean).join(' · ') || 'loop state', 44);
    }
    case 'network':
      return truncate(`${frame.layers.length} layers · ${frame.direction}`, 44);
    case 'budget': {
      const used = frame.segments.reduce((a, s) => a + s.tokens, 0);
      return truncate(`${used.toLocaleString()} / ${frame.capacity.toLocaleString()} tokens`, 44);
    }
    case 'panels': {
      const active = frame.activeIndex !== undefined ? frame.panels[frame.activeIndex] : frame.panels[0];
      return truncate(active?.title ?? `${frame.panels.length} cards`, 44);
    }
    case 'timeline': {
      const active = frame.activeIndex !== undefined ? frame.events[frame.activeIndex] : frame.events[0];
      return truncate(active?.label ?? `${frame.events.length} events`, 44);
    }
    default:
      return 'payload';
  }
}

function deriveStage(step: SceneStep, index: number): Pick<StageAnnotation, 'name' | 'op' | 'out'> {
  const { head, rest } = splitCaption(step.caption);
  const heading = 'heading' in step.frame ? step.frame.heading : undefined;
  const name = head ?? (heading && heading.length <= 30 ? heading : `Stage ${index + 1}`);
  return {
    name,
    op: truncate(firstSentence(rest), 96),
    out: summarizeFrame(step.frame),
  };
}

/**
 * Resolves a scene into a runnable pipeline. Authored annotations win; anything missing is
 * inferred from the caption and the frame payload so every concept runs on the same engine.
 */
export function buildPipeline(scene: SceneSpec): Pipeline {
  const annotation = scene.pipeline;
  let authoredCount = 0;

  const partial = scene.steps.map((step, index) => {
    const authored = annotation?.stages[step.id];
    if (authored) authoredCount += 1;
    const derived = deriveStage(step, index);
    return {
      step,
      index,
      authored: Boolean(authored),
      name: authored?.name ?? derived.name,
      op: authored?.op ?? derived.op,
      outValue: authored?.out ?? derived.out,
      inOverride: authored?.in,
      loop: authored?.loop,
      lane: authored?.lane,
    };
  });

  const rail: RailNode[] = [];
  const railKeyToIndex = new Map<string, number>();

  const stages: ResolvedStage[] = partial.map((entry, index) => {
    const previous = partial[index - 1];
    const key = entry.loop ? `loop:${entry.loop.group}:${entry.name}` : `stage:${index}`;
    let railIndex = railKeyToIndex.get(key);
    if (railIndex === undefined) {
      railIndex = rail.length;
      railKeyToIndex.set(key, railIndex);
      rail.push({
        key,
        index: railIndex,
        name: entry.name,
        stageIndexes: [],
        loopGroup: entry.loop?.group,
        loopLabel: entry.loop?.label,
        loopOf: entry.loop?.of,
        lane: entry.lane,
      });
    }
    rail[railIndex].stageIndexes.push(index);
    if (entry.loop?.of && !rail[railIndex].loopOf) rail[railIndex].loopOf = entry.loop.of;

    const inValue =
      entry.inOverride ??
      (previous ? previous.outValue : annotation?.subject ?? `input for ${scene.title.toLowerCase()}`);

    return {
      id: entry.step.id,
      index,
      name: entry.name,
      op: entry.op,
      inValue,
      outValue: entry.outValue,
      caption: entry.step.caption,
      callout: entry.step.callout,
      frame: entry.step.frame,
      lane: entry.lane,
      loop: entry.loop,
      railIndex,
      startsIteration: Boolean(
        entry.loop && (!previous?.loop || previous.loop.group !== entry.loop.group || previous.loop.iteration !== entry.loop.iteration),
      ),
      authored: entry.authored,
    };
  });

  return {
    subject: annotation?.subject,
    headline: annotation?.headline,
    stages,
    rail,
    authored: authoredCount === scene.steps.length && scene.steps.length > 0,
  };
}
