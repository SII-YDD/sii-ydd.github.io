import { prepare, layout } from '@chenglou/pretext';

let lang: 'en' | 'zh' = 'en';
const root = document.documentElement;
const languageButton = document.querySelector<HTMLButtonElement>('#language-toggle')!;
const resultCount = document.querySelector('#result-count')!;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
let selectedFilter = 'all';
function updateCount() {
  const count = [...document.querySelectorAll<HTMLElement>('[data-category]')].filter(el => !el.hidden).length;
  resultCount.textContent = lang === 'zh' ? `${count} 篇论文` : `${count} ${count === 1 ? 'paper' : 'papers'}`;
}
function setLanguage(next: 'en' | 'zh') {
  lang = next; root.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll<HTMLElement>('[data-en][data-zh]').forEach(el => { el.textContent = el.dataset[next]!; });
  languageButton.textContent = next === 'en' ? '中' : 'EN';
  languageButton.setAttribute('aria-label', next === 'en' ? 'Switch to Chinese' : 'Switch to English');
  updateCount();
  try { localStorage.setItem('di-language', next); } catch {}
}
try { if (localStorage.getItem('di-language') === 'zh') setLanguage('zh'); } catch {}
languageButton.addEventListener('click', () => setLanguage(lang === 'en' ? 'zh' : 'en'));
const themeButton = document.querySelector<HTMLButtonElement>('#theme-toggle')!;
const darkMedia = matchMedia('(prefers-color-scheme: dark)');
function isDark() { return root.dataset.theme ? root.dataset.theme === 'dark' : darkMedia.matches; }
function themeLabel() { themeButton.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode'); themeButton.setAttribute('aria-pressed', String(isDark())); }
themeLabel(); darkMedia.addEventListener('change', themeLabel);
themeButton.addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('di-theme', root.dataset.theme); } catch {}
  themeLabel();
});
filterButtons.forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter!;
  filterButtons.forEach(b => { const selected = b === button; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll<HTMLElement>('[data-category]').forEach(el => { el.hidden = selectedFilter !== 'all' && el.dataset.category !== selectedFilter; });
  updateCount();
}));

const dialog = document.querySelector<HTMLDialogElement>('#citation-dialog')!;
const output = document.querySelector('#citation-output')!;
const status = document.querySelector('#copy-status')!;
const title = document.querySelector('#citation-paper-title')!;
let citations: Record<string, string> = {};
let lastTrigger: HTMLElement | null = null;
let citationRevision = 0;
function selectStyle(style: string) {
  citationRevision++; output.textContent = citations[style] || ''; status.textContent = '';
  document.querySelectorAll<HTMLButtonElement>('[data-style]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.style === style)));
}
document.querySelectorAll<HTMLButtonElement>('[data-cite]').forEach(button => button.addEventListener('click', () => {
  citations = JSON.parse(button.dataset.cite!); lastTrigger = button;
  title.textContent = button.dataset.title!; selectStyle('bibtex'); dialog.showModal();
}));
document.querySelectorAll<HTMLButtonElement>('[data-style]').forEach(b => b.addEventListener('click', () => selectStyle(b.dataset.style!)));
document.querySelector('#copy-citation')!.addEventListener('click', async () => {
  const revision = citationRevision;
  try {
    await navigator.clipboard.writeText(output.textContent || '');
    if (revision === citationRevision) status.textContent = lang === 'zh' ? '已复制到剪贴板。' : 'Copied to clipboard.';
  } catch {
    if (revision === citationRevision) { status.textContent = lang === 'zh' ? '请选中上方引用文本并复制。' : 'Select and copy the citation text above.'; (output.parentElement as HTMLElement).focus(); }
  }
});
dialog.addEventListener('click', e => { const rect = dialog.getBoundingClientRect(); if (e.target === dialog && (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom)) dialog.close(); });
dialog.addEventListener('close', () => { citationRevision++; status.textContent = ''; lastTrigger?.focus(); });

// Measure prose after fonts load. Natural height remains the accessibility fallback.
document.fonts.ready.then(() => {
  const elements = [...document.querySelectorAll<HTMLElement>('[data-pretext]')];
  const relayout = () => elements.forEach(el => {
    const style = getComputedStyle(el);
    const prepared = prepare(el.textContent || '', `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`);
    const result = layout(prepared, el.clientWidth, parseFloat(style.lineHeight));
    el.style.minHeight = `${Math.ceil(result.height)}px`;
  });
  new ResizeObserver(relayout).observe(document.querySelector('.hero-copy')!);
  elements.forEach(el => new MutationObserver(relayout).observe(el, { childList: true, characterData: true, subtree: true }));
  relayout();
}).catch(() => {});
