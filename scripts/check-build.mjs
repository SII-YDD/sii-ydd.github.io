import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('dist/index.html', 'utf8');
const bib = readFileSync('dist/publications.bib', 'utf8');
for (const id of ['home', 'about', 'news', 'publications', 'orchid', 'citation-dialog']) {
  assert.ok(html.includes(`id="${id}"`), `Missing section ${id}`);
}
assert.equal((html.match(/data-publication=/g) || []).length, 1, 'Expected only the selected Orchid paper');
assert.equal((bib.match(/^@/gm) || []).length, 1, 'BibTeX download must match the selected publication');
assert.match(bib, /@inproceedings\{yang2026ambiguity/);
for (const content of ['Clarity Is Not Assumed', '10.1145/3832783.3834403', 'ASE 2026', 'Distinguished Paper Award']) {
  assert.ok(html.includes(content), `Missing publication information: ${content}`);
  assert.ok(bib.includes(content), `Missing citation information: ${content}`);
}
for (const content of ['Shanghai Innovation Institute', '上海创智学院', 'Ph.D. Student', 'https://huggingface.co/datasets/SII-YDD/Orchid', 'https://arxiv.org/pdf/2604.21505']) {
  assert.ok(html.includes(content), `Missing profile or resource: ${content}`);
}
for (const excluded of ['yang2024tofe', 'yang2024ibcd', '2405.18071', '10448145', 'DeepFake', 'Adversarial Patches']) {
  assert.ok(!html.includes(excluded) && !bib.includes(excluded), `Unselected publication is still public: ${excluded}`);
}
assert.ok(!/research-canvas|work-card|scholar-snapshot|Mira Latticewell|Northstar Commons|example\.com|Lorem ipsum/i.test(html), 'Old design or template content remains');
for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
  if (match[1].startsWith('//')) continue;
  assert.ok(existsSync(`dist${match[1]}`), `Missing local asset ${match[1]}`);
}
assert.ok(html.includes('https://sii-ydd.github.io/'), 'Production URL is missing');
assert.ok(html.includes('rel="noopener noreferrer"'), 'External link isolation is missing');
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.deepEqual(schema.mainEntity.affiliation.map(item => item.name), ['Shanghai Innovation Institute', 'School of Software Engineering, East China Normal University'], 'Affiliations must list SII first, followed by ECNU Software Engineering');
console.log('Build verified: selected paper, ASE award and citation, SII affiliation, Hugging Face, archived-paper exclusion, and local assets.');
