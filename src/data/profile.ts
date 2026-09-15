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
  bio: 'My research focuses on Intelligent Software Engineering, AI Agents, and AI Safety. I aim to build trustworthy AI systems that understand human intent, assist with complex software engineering tasks, and operate reliably and safely in real-world settings.',
  bioZh: '我的研究方向包括智能化软件工程、AI 智能体和人工智能安全。我希望构建能够理解人类意图、协助完成复杂软件工程任务，并在真实场景中可靠、安全运行的 AI 系统。',
  interests: ['Intelligent Software Engineering', 'AI Agents', 'AI Safety'],
  advisors: [
    { name: 'Chengcheng Wan', url: 'https://chengcheng-wan.github.io/' },
    { name: 'Geguang Pu', url: 'https://ggpu-ecnu.github.io/' },
  ],
  hobbies: [
    { emoji: '🏀', en: 'Basketball', zh: '篮球' },
    { emoji: '🥾', en: 'Hiking', zh: '徒步' },
    { emoji: '🏃', en: 'Long-distance running', zh: '长跑' },
    { emoji: '🏋️', en: 'Fitness', zh: '健身' },
  ],
};

// Selected work only. Other publications are preserved in archived-publications.bib.
export const work = [
  {
    id: 'yang2026ambiguity',
    year: 2026,
    name: 'Orchid',
    venue: 'ASE 2026',
    award: 'SIGSOFT Distinguished Paper Award',
    conference: 'https://conf.researchr.org/track/ase-2026/ase-2026-not-in-person-presentations',
    url: 'https://doi.org/10.1145/3832783.3834403',
    manuscript: 'https://arxiv.org/abs/2604.21505',
    pdf: 'https://arxiv.org/pdf/2604.21505',
    dataset: 'https://huggingface.co/datasets/SII-YDD/Orchid',
    acceptance: {
      accepted: 263,
      submitted: 1304,
      source: 'https://rebels.cs.uwaterloo.ca/venues/ase.html',
    },
  },
];
