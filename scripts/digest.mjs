import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/data/generative-ai/concepts';
const out = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.ts')) continue;
  const raw = fs.readFileSync(path.join(dir, f), 'utf8');
  const start = raw.indexOf('= [') + 2;
  const end = raw.lastIndexOf('\n]') + 1;
  const arr = JSON.parse(raw.slice(start, end + 1));
  for (const c of arr) {
    out.push(
      [
        `### ${c.id} | ${c.categoryId} | ${c.title} — ${c.subtitle} | ${c.difficulty}`,
        `SUMMARY: ${c.laymanSummary}`,
        `ANALOGY: ${c.analogy}`,
        `EXPL: ${c.explanation.join(' || ')}`,
        `TERMS: ${c.keyTerms.map((t) => `${t.term}=${t.definition}`).join(' || ')}`,
        `VIZ(${c.visualization.kind}): ${c.visualization.steps.map((s) => s.caption).join(' >> ')}`,
        `MATH: ${c.visualization.mathNote ?? '(none)'}`,
        `INTERACTIVE(${c.interactiveExample.kind}): ${c.interactiveExample.title} :: ${JSON.stringify(c.interactiveExample.fixture)}`,
        `CODE: ${c.codeExample ? c.codeExample.title : '(none)'}`,
        `REAL: ${c.realWorldExample.title} :: ${c.realWorldExample.story} :: ${c.realWorldExample.takeaway}`,
        ...c.quiz.map(
          (q) =>
            `Q: ${q.prompt} | opts: ${q.options.map((o) => `${o.id}:${o.text}`).join(' ; ')} | correct=${q.correctOptionId} | why: ${q.explanation}`,
        ),
      ].join('\n'),
    );
  }
}
fs.writeFileSync('scripts/digest.txt', out.join('\n\n'), 'utf8');
console.log('concepts:', out.length);
