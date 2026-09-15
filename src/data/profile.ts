export const profile = {
  name: 'Di Yang',
  institution: 'Shanghai Innovation Institute',
  institutionZh: '上海创智学院',
  secondaryInstitution: 'School of Software Engineering, East China Normal University',
  secondaryInstitutionZh: '华东师范大学软件工程学院',
  scholar: 'https://scholar.google.com/citations?user=GpuCXTMAAAAJ&hl=en',
  github: 'https://github.com/SII-YDD',
  url: 'https://sii-ydd.github.io',
  updated: '2026-09-16',
  bio: 'My research focuses on intelligent software engineering, AI agents, and AI safety.',
  bioZh: '我的研究方向包括智能化软件工程、Agent（智能体）和人工智能安全。',
  interests: ['Intelligent Software Engineering', 'AI Agents', 'AI Safety'],
  hobbies: [
    { emoji: '🏀', en: 'Basketball', zh: '篮球' },
    { emoji: '🥾', en: 'Hiking', zh: '徒步' },
    { emoji: '🏃', en: 'Long-distance running', zh: '长跑' },
  ],
};

// Selected work only. Other publications are preserved in archived-publications.bib.
export const work = [
  {
    id: 'yang2026ambiguity',
    year: 2026,
    name: 'Orchid',
    venue: 'ASE 2026',
    award: 'Distinguished Paper Award',
    conference: 'https://conf.researchr.org/track/ase-2026/ase-2026-not-in-person-presentations',
    url: 'https://doi.org/10.1145/3832783.3834403',
    manuscript: 'https://arxiv.org/abs/2604.21505',
    pdf: 'https://arxiv.org/pdf/2604.21505',
    dataset: 'https://huggingface.co/datasets/SII-YDD/Orchid',
    summary: 'We introduce Orchid, a benchmark of 1,304 tasks, to study how lexical, syntactic, semantic, and vagueness ambiguities in requirements affect LLM-based code generation.',
    summaryZh: '我们提出包含 1,304 个任务的 Orchid 基准，研究需求中的词汇歧义、句法歧义、语义歧义和模糊性如何影响大语言模型的代码生成。',
  },
];
