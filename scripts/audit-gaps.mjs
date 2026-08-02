import fs from 'node:fs';
import path from 'node:path';

const conceptDir = 'src/data/generative-ai/concepts';
const sceneDir = 'src/visualizations/scenes';

const conceptsByCat = {};
for (const f of fs.readdirSync(conceptDir).filter((x) => x.endsWith('.ts'))) {
  const raw = fs.readFileSync(path.join(conceptDir, f), 'utf8');
  const pairs = [...raw.matchAll(/"id": "([^"]+)",\s*\n\s*"categoryId": "([^"]+)"/g)];
  for (const [, id, cat] of pairs) {
    (conceptsByCat[cat] ??= []).push(id);
  }
}

const missing = {};
const covered = {};
for (const [cat, ids] of Object.entries(conceptsByCat)) {
  const scenePath = path.join(sceneDir, `${cat}.ts`);
  let sceneIds = [];
  if (fs.existsSync(scenePath)) {
    const raw = fs.readFileSync(scenePath, 'utf8');
    sceneIds = [...raw.matchAll(/^\s{2}'([^']+)':\s*\{/gm)].map((m) => m[1]);
  }
  const set = new Set(sceneIds);
  covered[cat] = sceneIds;
  missing[cat] = ids.filter((id) => !set.has(id));
}

console.log(JSON.stringify({ covered, missing, totals: Object.fromEntries(Object.entries(conceptsByCat).map(([k, v]) => [k, v.length])) }, null, 2));

// Short quiz options
const short = [];
for (const f of fs.readdirSync(conceptDir).filter((x) => x.endsWith('.ts'))) {
  const raw = fs.readFileSync(path.join(conceptDir, f), 'utf8');
  for (const m of raw.matchAll(/"text": "([^"]*)"/g)) {
    if (m[1].length > 0 && m[1].length < 12) short.push(`${f}: ${JSON.stringify(m[1])}`);
  }
}
console.log('\nSHORT_OPTIONS:');
console.log(short.slice(0, 40).join('\n'));
