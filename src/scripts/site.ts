let lang: 'en' | 'zh' = 'en';
const root = document.documentElement;
const languageButton = document.querySelector<HTMLButtonElement>('#language-toggle')!;
const themeButton = document.querySelector<HTMLButtonElement>('#theme-toggle')!;
const darkMedia = matchMedia('(prefers-color-scheme: dark)');

function isDark() {
  return root.dataset.theme ? root.dataset.theme === 'dark' : darkMedia.matches;
}

function themeLabel() {
  themeButton.setAttribute('aria-label', lang === 'zh'
    ? (isDark() ? '切换到浅色模式' : '切换到深色模式')
    : (isDark() ? 'Switch to light mode' : 'Switch to dark mode'));
  themeButton.setAttribute('aria-pressed', String(isDark()));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark() ? '#17191c' : '#ffffff');
}

function setLanguage(next: 'en' | 'zh') {
  lang = next;
  root.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll<HTMLElement>('[data-en][data-zh]').forEach(el => {
    el.textContent = el.dataset[next]!;
  });
  languageButton.textContent = next === 'en' ? '中文' : 'EN';
  languageButton.setAttribute('aria-label', next === 'en' ? 'Switch to Chinese' : 'Switch to English');
  document.querySelector('nav')?.setAttribute('aria-label', next === 'zh' ? '主导航' : 'Main navigation');
  document.querySelector('.dialog-close')?.setAttribute('aria-label', next === 'zh' ? '关闭引用' : 'Close citation');
  document.querySelector('.citation-styles')?.setAttribute('aria-label', next === 'zh' ? '引用格式' : 'Citation format');
  themeLabel();
  try { localStorage.setItem('di-language', next); } catch {}
}
try { if (localStorage.getItem('di-language') === 'zh') setLanguage('zh'); } catch {}
languageButton.addEventListener('click', () => setLanguage(lang === 'en' ? 'zh' : 'en'));
themeLabel();
darkMedia.addEventListener('change', themeLabel);
themeButton.addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('di-theme', root.dataset.theme); } catch {}
  themeLabel();
});

const dialog = document.querySelector<HTMLDialogElement>('#citation-dialog')!;
const output = document.querySelector('#citation-output')!;
const status = document.querySelector('#copy-status')!;
const title = document.querySelector('#citation-paper-title')!;
let citations: Record<string, string> = {};
let lastTrigger: HTMLElement | null = null;
let citationRevision = 0;

function selectStyle(style: string) {
  citationRevision++;
  output.textContent = citations[style] || '';
  status.textContent = '';
  document.querySelectorAll<HTMLButtonElement>('[data-style]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.style === style));
  });
}

document.querySelectorAll<HTMLButtonElement>('[data-cite]').forEach(button => button.addEventListener('click', () => {
  citations = JSON.parse(button.dataset.cite!);
  lastTrigger = button;
  title.textContent = button.dataset.title!;
  selectStyle('bibtex');
  dialog.showModal();
}));
document.querySelectorAll<HTMLButtonElement>('[data-style]').forEach(button => {
  button.addEventListener('click', () => selectStyle(button.dataset.style!));
});
document.querySelector('#copy-citation')!.addEventListener('click', async () => {
  const revision = citationRevision;
  try {
    await navigator.clipboard.writeText(output.textContent || '');
    if (revision === citationRevision) status.textContent = lang === 'zh' ? '已复制到剪贴板。' : 'Copied to clipboard.';
  } catch {
    if (revision === citationRevision) {
      status.textContent = lang === 'zh' ? '请选中上方引用文本并复制。' : 'Select and copy the citation text above.';
      (output.parentElement as HTMLElement).focus();
    }
  }
});
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  citationRevision++;
  status.textContent = '';
  lastTrigger?.focus();
});
