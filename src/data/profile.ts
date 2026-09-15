export const profile = {
  name: 'Di Yang',
  institution: 'East China Normal University',
  institutionZh: '华东师范大学',
  jointInstitution: 'Shanghai Innovation Institute',
  jointInstitutionZh: '上海创智学院',
  scholar: 'https://scholar.google.com/citations?user=GpuCXTMAAAAJ&hl=en',
  github: 'https://github.com/SII-YDD',
  url: 'https://sii-ydd.github.io',
  updated: '2026-09-16',
  bio: 'My research focuses on code generation, AI for software engineering, and agents. I am interested in how AI systems understand software requirements and generate reliable code.',
  bioZh: '我的研究方向包括代码生成、面向软件工程的人工智能和智能体，关注 AI 系统如何理解软件需求，并生成可靠的代码。',
  interests: ['Code Generation', 'AI for Software Engineering', 'Agents'],
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
