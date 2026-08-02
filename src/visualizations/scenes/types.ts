export type Tone = 'neutral' | 'active' | 'muted' | 'good' | 'warn' | 'bad' | 'accent' | 'frozen';

export type LegendItem = { tone: Tone; label: string };

/** A horizontal bar chart. Values are absolute; `max` fixes the axis so shape changes are comparable across steps. */
export type BarsFrame = {
  kind: 'bars';
  heading?: string;
  bars: { label: string; value: number; tone?: Tone; note?: string; ghost?: number }[];
  /** How to print the numeric value next to each bar. */
  format?: 'percent' | 'decimal2' | 'decimal1' | 'raw';
  max?: number;
  /** Draws a "kept above this line" divider after the given bar index. */
  cutAfter?: { index: number; label: string };
  footer?: string;
};

/** Rows of numeric feature cells — for embeddings, positional signals, normalization, residual adds. */
export type VectorsFrame = {
  kind: 'vectors';
  heading?: string;
  columns?: string[];
  rows: { label: string; values: number[]; tone?: Tone; note?: string }[];
  /** Symmetric colour scale bound, e.g. 2 means −2…+2 maps to full colour. */
  scale?: number;
  footer?: string;
};

/** A score/weight matrix with optional masked (blocked) cells — attention, causal masks. */
export type MatrixFrame = {
  kind: 'matrix';
  heading?: string;
  rowLabels: string[];
  colLabels: string[];
  /** Values in 0..1 for colour intensity. */
  values: number[][];
  /** [row, col] pairs rendered as blocked/unavailable. */
  masked?: [number, number][];
  highlightRow?: number;
  rowAxisLabel?: string;
  colAxisLabel?: string;
  /** Set false for dense grids (e.g. pixel fields) where printed numbers would be noise. */
  showValues?: boolean;
  footer?: string;
};

/** A named pipeline. Each stage carries its own real payload text, so stages are never interchangeable. */
export type FlowFrame = {
  kind: 'flow';
  heading?: string;
  stages: { label: string; detail?: string; tone?: Tone }[];
  activeIndex?: number;
  /** Optional second row, e.g. an offline indexing path above an online query path. */
  lane?: string;
  footer?: string;
};

/** 2D projected vector space with clusters and similarity links. */
export type ScatterFrame = {
  kind: 'scatter';
  heading?: string;
  points: { id: string; label: string; x: number; y: number; tone?: Tone }[];
  clusters?: { label: string; x: number; y: number; r: number }[];
  links?: { from: string; to: string; label?: string; tone?: Tone }[];
  axisNote?: string;
  footer?: string;
};

/** Side-by-side ranked lists — hybrid fusion, re-ranking, preference pairs, voting. */
export type RankingFrame = {
  kind: 'ranking';
  heading?: string;
  columns: {
    title: string;
    subtitle?: string;
    items: { label: string; score?: string; tone?: Tone }[];
  }[];
  footer?: string;
};

/** Line chart — loss curves, learning-rate schedules, train/validation gaps, latency. */
export type ChartFrame = {
  kind: 'chart';
  heading?: string;
  series: { label: string; tone: Tone; points: number[]; dashed?: boolean }[];
  xLabel: string;
  yLabel: string;
  yMax?: number;
  markers?: { atIndex: number; label: string }[];
  footer?: string;
};

/** Parameter blocks sized by count — frozen base weights vs trainable adapters. */
export type BlocksFrame = {
  kind: 'blocks';
  heading?: string;
  groups: { label: string; note?: string; blocks: { label: string; weight: number; tone: Tone }[] }[];
  footer?: string;
};

/** A cyclic loop with a running trace log. */
export type LoopFrame = {
  kind: 'loop';
  heading?: string;
  nodes: { id: string; label: string }[];
  activeId?: string;
  iteration?: string;
  log?: { role: string; text: string; tone?: Tone }[];
  footer?: string;
};

/** Layered network with an explicit forward or backward direction. */
export type NetworkFrame = {
  kind: 'network';
  heading?: string;
  layers: { label: string; units: number; note?: string }[];
  direction: 'forward' | 'backward' | 'idle';
  activeLayer?: number;
  edgeLabel?: string;
  footer?: string;
};

/** A strip of tokens, optionally with IDs and merge annotations. */
export type TokensFrame = {
  kind: 'tokens';
  heading?: string;
  source?: string;
  tokens: { text: string; id?: number; tone?: Tone; note?: string }[];
  footer?: string;
};

/** A fixed-capacity token budget being filled, with an overflow area. */
export type BudgetFrame = {
  kind: 'budget';
  heading?: string;
  capacity: number;
  segments: { label: string; tokens: number; tone: Tone }[];
  dropped?: { label: string; tokens: number }[];
  footer?: string;
};

/** Titled cards revealed progressively — comparisons and conceptual maps. */
export type PanelsFrame = {
  kind: 'panels';
  heading?: string;
  panels: { title: string; body: string; tone?: Tone }[];
  activeIndex?: number;
  footer?: string;
};

/** A run timeline plus a structured state table, so state changes are visible per step. */
export type TimelineFrame = {
  kind: 'timeline';
  heading?: string;
  events: { label: string; detail?: string; tone?: Tone; marker?: 'step' | 'checkpoint' | 'pause' | 'error' | 'done' }[];
  activeIndex?: number;
  state?: { key: string; value: string; changed?: boolean }[];
  footer?: string;
};

export type SceneFrame =
  | BarsFrame
  | VectorsFrame
  | MatrixFrame
  | FlowFrame
  | ScatterFrame
  | RankingFrame
  | ChartFrame
  | BlocksFrame
  | LoopFrame
  | NetworkFrame
  | TokensFrame
  | BudgetFrame
  | PanelsFrame
  | TimelineFrame;

export type SceneStep = {
  id: string;
  /** Plain description of what just happened, naming the technical term and its everyday meaning. */
  caption: string;
  callout?: string;
  frame: SceneFrame;
};

/**
 * Describes one block of the pipeline: what it is called, what it does to whatever
 * arrives, and the concrete value it hands to the next block. The player uses these
 * to draw a live machine rather than a slideshow, so `out` must be the real value for
 * this run — short enough to fit in a chip.
 */
export type StageAnnotation = {
  /** Block name shown on the rail. Keep under ~22 characters. */
  name: string;
  /** What the block does to its input, imperative and specific. Under ~70 characters. */
  op: string;
  /** The value leaving this block, e.g. `5 tokens` or `p("river")=0.62`. Under ~44 characters. */
  out: string;
  /** Overrides the inbound value. Only needed on the first stage, or after a lane switch. */
  in?: string;
  /** Marks the stage as one turn of a cycle so the rail folds it back on itself. */
  loop?: { group: string; iteration: number; of?: number; label?: string };
  /** Off-main-line work such as offline indexing or a background evaluation job. */
  lane?: string;
};

/** Per-concept pipeline metadata, keyed by scene step id so step reordering cannot desync it. */
export type ConceptPipeline = {
  /** What is travelling through the machine on this run, e.g. 'the sentence "The bank by the river"'. */
  subject?: string;
  /** Optional override for the idle diagram heading. */
  headline?: string;
  stages: Record<string, StageAnnotation>;
};

export type PipelineAnnotationMap = Record<string, ConceptPipeline>;

export type SceneSpec = {
  title: string;
  description: string;
  legend?: LegendItem[];
  mathNote?: string;
  steps: SceneStep[];
  /** Attached at load time from the category's annotation module; absent means "derive it". */
  pipeline?: ConceptPipeline;
};

export type SceneMap = Record<string, SceneSpec>;
