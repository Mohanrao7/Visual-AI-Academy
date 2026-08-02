/**
 * Verifies that every scene step has pipeline stage metadata, that no annotation
 * references a step that does not exist, and that the authored strings stay inside
 * the sizes the rail and hand-off chips can render.
 * Usage: node scripts/check-pipelines.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const tmpDir = '.tmp-pipeline-check';
fs.rmSync(tmpDir, { recursive: true, force: true });
fs.mkdirSync(tmpDir, { recursive: true });

const categories = [
  'ai-fundamentals',
  'how-llms-work',
  'training-alignment',
  'prompt-engineering',
  'rag',
  'ai-agents',
  'ai-frameworks',
  'deployment',
  'production-ai',
];

const LIMITS = { name: 24, op: 78, out: 48, in: 48 };

async function loadAnnotations(category) {
  const file = `src/visualizations/pipeline/annotations/${category}.ts`;
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const out = path.join(tmpDir, `${category}.mjs`);
  fs.writeFileSync(out, js, 'utf8');
  return (await import(pathToFileURL(path.resolve(out)).href)).pipelines;
}

let missingConcepts = 0;
let missingSteps = 0;
let straySteps = 0;
let overLimit = 0;
let totalSteps = 0;
let annotatedSteps = 0;
const loops = [];

for (const category of categories) {
  const digest = JSON.parse(fs.readFileSync(`scripts/scene-digest/${category}.json`, 'utf8'));
  const pipelines = await loadAnnotations(category);
  const problems = [];

  for (const [conceptId, scene] of Object.entries(digest)) {
    const pipeline = pipelines[conceptId];
    totalSteps += scene.steps.length;
    if (!pipeline) {
      missingConcepts += 1;
      problems.push(`  MISSING CONCEPT  ${conceptId} (${scene.steps.length} steps)`);
      continue;
    }
    const ids = new Set(scene.steps.map((s) => s.id));
    for (const step of scene.steps) {
      const stage = pipeline.stages[step.id];
      if (!stage) {
        missingSteps += 1;
        problems.push(`  MISSING STEP     ${conceptId} / ${step.id}`);
        continue;
      }
      annotatedSteps += 1;
      for (const [field, limit] of Object.entries(LIMITS)) {
        const value = stage[field];
        if (typeof value === 'string' && value.length > limit) {
          overLimit += 1;
          problems.push(`  TOO LONG (${field} ${value.length}>${limit}) ${conceptId} / ${step.id}: ${value}`);
        }
      }
      if (!stage.name || !stage.op || !stage.out) {
        problems.push(`  EMPTY FIELD      ${conceptId} / ${step.id}`);
      }
      if (stage.loop) loops.push(`${category}/${conceptId}`);
    }
    for (const id of Object.keys(pipeline.stages)) {
      if (!ids.has(id)) {
        straySteps += 1;
        problems.push(`  STRAY STEP ID    ${conceptId} / ${id}`);
      }
    }
    if (!pipeline.subject) problems.push(`  NO SUBJECT       ${conceptId}`);
  }

  const conceptCount = Object.keys(digest).length;
  const annotatedConcepts = Object.keys(digest).filter((id) => pipelines[id]).length;
  console.log(`${category}: ${annotatedConcepts}/${conceptCount} concepts`);
  if (problems.length) console.log(problems.join('\n'));
}

fs.rmSync(tmpDir, { recursive: true, force: true });
const loopConcepts = [...new Set(loops)];
console.log('\n--- summary ---');
console.log(`steps annotated: ${annotatedSteps}/${totalSteps}`);
console.log(`concepts with loop metadata: ${loopConcepts.length}`);
console.log(`missing concepts: ${missingConcepts}, missing steps: ${missingSteps}, stray ids: ${straySteps}, over-limit strings: ${overLimit}`);
process.exitCode = missingConcepts || missingSteps || straySteps ? 1 : 0;
