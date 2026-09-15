export const profile = {
  name: 'Di Yang',
  institution: 'East China Normal University',
  institutionZh: '华东师范大学',
  scholar: 'https://scholar.google.com/citations?user=GpuCXTMAAAAJ&hl=en',
  github: 'https://github.com/SII-YDD',
  url: 'https://sii-ydd.github.io',
  updated: '2026-09-16',
  bio: 'I study how to make AI systems more reliable — from understanding ambiguous software requirements to detecting synthetic images and defending against adversarial patches.',
  bioZh: '我关注如何让人工智能系统更可靠：从理解含糊的软件需求，到识别合成图像，再到防御对抗补丁。',
  interests: ['Code Generation', 'AI for Software Engineering', 'Agents'],
  metrics: { citations: 15, hIndex: 2 },
};

// Editorial summaries of the linked papers, not verbatim abstracts.
export const work = [
  {
    id: 'yang2026ambiguity', slug: 'orchid', year: 2026,
    title: 'Orchid', subtitle: 'When requirements leave room for interpretation.',
    subtitleZh: '当软件需求不止一种理解。',
    summary: 'A benchmark of 1,304 tasks exploring how ambiguous requirements affect LLM-based code generation.',
    summaryZh: '通过 1,304 个任务，研究需求歧义如何影响大语言模型的代码生成。',
    category: 'code', label: 'CODE GENERATION', venue: 'arXiv · 2026',
    url: 'https://arxiv.org/abs/2604.21505', pdf: 'https://arxiv.org/pdf/2604.21505',
    detail: 'Orchid studies four kinds of ambiguity: lexical, syntactic, semantic, and vagueness. The study examines how unclear requirements affect correctness and lead models to produce functionally different implementations.',
    detailZh: 'Orchid 涵盖词汇、句法、语义和模糊性四类歧义，分析不明确的需求如何影响代码正确性，以及为何模型会生成具有不同功能的实现。',
  },
  {
    id: 'yang2024tofe', slug: 'tofe', year: 2024,
    title: 'TOFE', subtitle: 'Looking beyond the pixels.', subtitleZh: '不止于像素表面。',
    summary: 'Text-oriented image representations for detecting diffusion-generated deepfakes.',
    summaryZh: '借助面向文本模态的图像表示，检测扩散模型生成的伪造图像。',
    category: 'vision', label: 'DEEPFAKE DETECTION', venue: 'arXiv · 2024',
    url: 'https://arxiv.org/abs/2405.18071', pdf: 'https://arxiv.org/pdf/2405.18071',
    detail: 'TOFE represents an image through a text embedding that can guide a text-to-image model to reproduce it. The approach brings together low-level and high-level information, and is evaluated across ten diffusion types.',
    detailZh: 'TOFE 使用能够引导文生图模型重建目标图像的文本嵌入，融合低层与高层信息，并在十类扩散生成方式上进行评估。',
  },
  {
    id: 'yang2024ibcd', slug: 'ibcd', year: 2024,
    title: 'IBCD', subtitle: 'Robustness, without assumptions.', subtitleZh: '在未知攻击条件下，守护模型。',
    summary: 'Certified defense against adversarial patches with unknown size and position.',
    summaryZh: '针对尺寸与位置未知的对抗补丁，提供可认证防御。',
    category: 'vision', label: 'TRUSTWORTHY AI', venue: 'ICASSP · 2024',
    url: 'https://doi.org/10.1109/ICASSP48485.2024.10448145', pdf: 'https://arxiv.org/pdf/2305.10929',
    detail: 'IBCD first estimates the size of an adversarial patch through a search using pixel masks, then applies certified defenses with that estimate. It is designed to work across model architectures without knowing the attack patch in advance.',
    detailZh: 'IBCD 首先通过像素掩码搜索估计对抗补丁的尺寸，再将估计结果用于可认证防御；适用于不同模型架构，无需预先知道攻击补丁。',
  },
];
