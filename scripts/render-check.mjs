/**
 * Renders the pipeline view for a sample of concepts across every category and asserts
 * the live-machine structure is present: an always-visible rail, an active block with
 * in/does/out, a packet carrying the hand-off value, and folded loop groups.
 * Usage: node scripts/render-check.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const srcRoot = 'src/visualizations';
const tmpRoot = '.tmp-render';
fs.rmSync(tmpRoot, { recursive: true, force: true });

/** Rewrites relative specifiers to the emitted .mjs files, resolving directory imports to index. */
function rewriteImports(code, fileDir) {
  return code.replace(/(from\s+|import\s*\()'(\.[^']+)'/g, (match, prefix, spec) => {
    const abs = path.resolve(fileDir, spec);
    const asFile = ['.ts', '.tsx'].map((e) => `${abs}${e}`).find((p) => fs.existsSync(p));
    if (asFile) return `${prefix}'${spec}.mjs'`;
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) return `${prefix}'${spec}/index.mjs'`;
    return match;
  });
}

function transpileTree(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      transpileTree(full);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    const source = fs.readFileSync(full, 'utf8');
    const js = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    }).outputText;
    const out = path.join(tmpRoot, path.relative('src', full).replace(/\.tsx?$/, '.mjs'));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, rewriteImports(js, path.dirname(full)), 'utf8');
  }
}

transpileTree(srcRoot);

const imp = async (rel) => import(pathToFileURL(path.resolve(tmpRoot, rel)).href);
const { loadScene } = await imp('visualizations/scenes/index.mjs');
const { buildPipeline } = await imp('visualizations/pipeline/build.mjs');
const { PipelineView } = await imp('visualizations/pipeline/PipelineView.mjs');

const samples = [
  ['ai-fundamentals', 'what-is-ai'],
  ['ai-fundamentals', 'diffusion-intro'],
  ['how-llms-work', 'tokenization'],
  ['how-llms-work', 'embeddings'],
  ['how-llms-work', 'self-attention'],
  ['how-llms-work', 'multi-head-attention'],
  ['how-llms-work', 'next-token-prediction'],
  ['how-llms-work', 'temperature-top-k-top-p'],
  ['how-llms-work', 'text-generation-loop'],
  ['how-llms-work', 'autoregressive-decoding'],
  ['how-llms-work', 'layer-normalization'],
  ['how-llms-work', 'residual-connections'],
  ['training-alignment', 'gradient-descent'],
  ['training-alignment', 'backpropagation'],
  ['training-alignment', 'lora-qlora'],
  ['training-alignment', 'dpo'],
  ['prompt-engineering', 'chain-of-thought'],
  ['prompt-engineering', 'self-consistency'],
  ['prompt-engineering', 'zero-one-few-shot'],
  ['rag', 'retrieval-pipeline'],
  ['rag', 'hybrid-search'],
  ['rag', 'agentic-rag-intro'],
  ['ai-agents', 'react-agents'],
  ['ai-agents', 'plan-act-observe'],
  ['ai-agents', 'tools-tool-calling'],
  ['ai-frameworks', 'langchain'],
  ['ai-frameworks', 'langgraph'],
  ['deployment', 'streaming'],
  ['deployment', 'kubernetes-overview'],
  ['production-ai', 'evaluation'],
  ['production-ai', 'hallucination-mitigation'],
];

/** `--dump <category> <conceptId>` prints the visible text of every block, for eyeballing copy. */
const dumpAt = process.argv.indexOf('--dump');
if (dumpAt !== -1) {
  const [category, conceptId] = process.argv.slice(dumpAt + 1);
  const scene = await loadScene(category, conceptId);
  const pipeline = buildPipeline(scene);
  console.log(`# ${scene.title} — ${pipeline.stages.length} blocks carrying ${pipeline.subject ?? '(derived input)'}\n`);
  console.log(`rail: ${pipeline.rail.map((n) => n.name).join(' → ')}\n`);
  for (const stage of pipeline.stages) {
    const loop = stage.loop ? ` [${stage.loop.label ?? stage.loop.group} pass ${stage.loop.iteration}${stage.loop.of ? `/${stage.loop.of}` : ''}]` : '';
    console.log(`${stage.index + 1}. ${stage.name}${loop}${stage.lane ? ` (${stage.lane})` : ''}`);
    console.log(`   IN   ${stage.inValue}`);
    console.log(`   DOES ${stage.op}`);
    console.log(`   OUT  ${stage.outValue}`);
    console.log(`   payload: ${stage.frame.kind}`);
  }
  fs.rmSync(tmpRoot, { recursive: true, force: true });
  process.exit(0);
}

/** `--all` walks every concept in every category instead of the curated sample. */
if (process.argv.includes('--all')) {
  samples.length = 0;
  for (const category of fs.readdirSync('scripts/scene-digest')) {
    const id = category.replace(/\.json$/, '');
    const digest = JSON.parse(fs.readFileSync(path.join('scripts/scene-digest', category), 'utf8'));
    for (const conceptId of Object.keys(digest)) samples.push([id, conceptId]);
  }
}

let failures = 0;
const check = (label, condition, detail = '') => {
  if (!condition) {
    failures += 1;
    console.log(`  FAIL ${label} ${detail}`);
  }
};

for (const [category, conceptId] of samples) {
  const scene = await loadScene(category, conceptId);
  if (!scene) {
    console.log(`${category}/${conceptId}: NO SCENE`);
    failures += 1;
    continue;
  }
  const pipeline = buildPipeline(scene);
  const props = { pipeline, flowId: conceptId, title: scene.title };

  const idle = renderToStaticMarkup(React.createElement(PipelineView, { ...props, stageIndex: -1, arrived: false }));
  const mid = Math.min(1, pipeline.stages.length - 1);
  const travelling = renderToStaticMarkup(React.createElement(PipelineView, { ...props, stageIndex: mid, arrived: false }));
  const settled = renderToStaticMarkup(React.createElement(PipelineView, { ...props, stageIndex: mid, arrived: true }));

  // Idle: the whole machine is drawn, nothing is active.
  check(`${conceptId} idle draws all blocks`, pipeline.rail.every((n) => idle.includes(n.name)));
  check(`${conceptId} idle has no active block`, !idle.includes('pipe-node is-active'));
  check(`${conceptId} idle shows the blueprint`, idle.includes('pipe-blueprint'));

  // Running: exactly one active block, and the packet carries the value in flight.
  const activeCount = (settled.match(/pipe-node is-active/g) ?? []).length;
  check(`${conceptId} exactly one active block`, activeCount === 1, `got ${activeCount}`);
  check(`${conceptId} packet in flight`, travelling.includes('pipe-packet') && !travelling.includes('is-transformed'));
  check(`${conceptId} packet transformed on arrival`, settled.includes('is-transformed'));
  check(`${conceptId} shows In / Does / Out`, ['>In<', '>Does<', '>Out<'].every((s) => settled.includes(s)));
  check(`${conceptId} out pending while travelling`, travelling.includes('computing…'));

  // The hand-off: unless the annotation deliberately re-feeds a source (a lane switch or a
  // fan-out from one shared input), a block's inbound value is the previous block's output.
  const stage = pipeline.stages[mid];
  const previous = pipeline.stages[mid - 1];
  const overridden = scene.pipeline?.stages[stage.id]?.in !== undefined;
  if (previous && !overridden) check(`${conceptId} out becomes next in`, stage.inValue === previous.outValue);

  // Past blocks recede to a compact chip. A loop can fold every earlier stage onto the
  // active node, in which case there is legitimately nothing behind it yet.
  const hasFinishedNode = pipeline.rail.some((n) => n.stageIndexes.every((i) => i < mid));
  if (hasFinishedNode) check(`${conceptId} past block compacted`, settled.includes('pipe-node is-past'));

  const loopStages = pipeline.stages.filter((s) => s.loop);
  const folded = pipeline.stages.length - pipeline.rail.length;
  console.log(
    `${category}/${conceptId}: ${pipeline.stages.length} blocks, ${pipeline.rail.length} rail nodes` +
      `${loopStages.length ? `, ${loopStages.length} looped (${folded} folded back)` : ''}` +
      `${pipeline.authored ? '' : ' [DERIVED]'}`,
  );
  if (loopStages.length) {
    const loopIndex = pipeline.stages.findIndex((s) => s.loop);
    const loopMarkup = renderToStaticMarkup(
      React.createElement(PipelineView, { ...props, stageIndex: loopIndex, arrived: true }),
    );
    check(`${conceptId} loop group bracketed`, loopMarkup.includes('pipe-seg is-loop'));
    check(`${conceptId} loop shows pass counter`, loopMarkup.includes('pass '));
    check(`${conceptId} loop has feed-back arrow`, loopMarkup.includes('pipe-loop-return'));
    // Whenever the scene actually shows more than one pass, the rail must fold them back
    // onto the same block instead of laying them out as separate stages.
    const passes = new Set(loopStages.map((s) => `${s.loop.group}#${s.loop.iteration}`)).size;
    const groups = new Set(loopStages.map((s) => s.loop.group)).size;
    if (passes > groups) check(`${conceptId} loop folds repeats`, folded > 0, `${passes} passes but nothing folded`);
  }
}

fs.rmSync(tmpRoot, { recursive: true, force: true });
console.log(failures ? `\n${failures} assertion(s) failed` : '\nall render assertions passed');
process.exitCode = failures ? 1 : 0;
