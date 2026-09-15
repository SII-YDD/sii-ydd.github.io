import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const html = readFileSync('dist/index.html', 'utf8');
const bib = readFileSync('dist/publications.bib', 'utf8');
for (const id of ['home', 'about', 'research', 'publications', 'connect', 'citation-dialog']) {
  assert.ok(html.includes(`id="${id}"`), `Missing section ${id}`);
}
assert.equal((html.match(/data-category=/g) || []).length, 3, 'Expected three verified papers');
assert.equal((bib.match(/^@/gm) || []).length, 3, 'BibTeX export must include all three papers');
for (const id of ['2604.21505', '2405.18071', '10448145']) assert.ok(html.includes(id), `Missing paper ${id}`);
assert.ok(!/Mira Latticewell|Northstar Commons|example\.com|Lorem ipsum|Fictional demo/i.test(html), 'Template content remains');
for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
  const path = match[1];
  if (path.startsWith('//')) continue;
  assert.ok(existsSync(`dist${path}`), `Missing local asset ${path}`);
}
assert.ok(html.includes('https://sii-ydd.github.io/'), 'Production URL is missing');
assert.ok(html.includes('rel="noopener noreferrer"'), 'External link isolation is missing');
console.log('Build verified: sections, 3 papers, BibTeX, local assets, production URL, and demo-content removal.');
