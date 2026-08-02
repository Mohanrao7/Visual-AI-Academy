/**
 * Dumps every scene's steps (id, caption, frame kind, heading) so pipeline stage
 * annotations can be authored against the real data instead of guessed.
 * Usage: node scripts/scene-digest.mjs [categoryId ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const srcDir = 'src/visualizations/scenes';
const tmpDir = '.tmp-scene-digest';
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

function compile(name) {
  const source = fs.readFileSync(path.join(srcDir, `${name}.ts`), 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText.replace(/from '\.\/math'/g, "from './math.mjs'");
  const out = path.join(tmpDir, `${name}.mjs`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, js, 'utf8');
  return out;
}

compile('math');

const wanted = process.argv.slice(2);
const targets = wanted.length ? categories.filter((c) => wanted.includes(c)) : categories;
const digest = {};

for (const category of targets) {
  const file = compile(category);
  const mod = await import(pathToFileURL(path.resolve(file)).href);
  const entry = {};
  for (const [conceptId, scene] of Object.entries(mod.scenes)) {
    entry[conceptId] = {
      title: scene.title,
      description: scene.description,
      steps: scene.steps.map((s) => ({
        id: s.id,
        kind: s.frame.kind,
        heading: s.frame.heading ?? null,
        caption: s.caption,
      })),
    };
  }
  digest[category] = entry;
  const outPath = path.join('scripts', 'scene-digest', `${category}.json`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(entry, null, 2), 'utf8');
  console.log(category, Object.keys(entry).length, 'concepts,', Object.values(entry).reduce((a, c) => a + c.steps.length, 0), 'steps');
}

fs.rmSync(tmpDir, { recursive: true, force: true });
console.log('total concepts:', Object.values(digest).reduce((a, c) => a + Object.keys(c).length, 0));
