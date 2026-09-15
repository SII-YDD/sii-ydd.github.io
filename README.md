# Di Yang — Academic Homepage

A minimal academic website for **Di Yang**, published at [sii-ydd.github.io](https://sii-ydd.github.io/).

Built with Astro. The homepage presents a short profile, personal interests, research news, and a selected publication. It uses a white background, dark text, restrained blue links, and small emoji accents. An award medal and a pale gold label highlight the Distinguished Paper Award. English/Chinese switching, light/dark mode, citation copying, and a downloadable BibTeX file are included. Content is rendered to static HTML and remains readable with JavaScript disabled.

## Local development

Node.js 24 LTS is recommended.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run check
npm run preview
```

## Edit your content

| Content | File |
| --- | --- |
| Affiliations, bilingual biography, advisors, hobbies, publication links and acceptance statistics | `src/data/profile.ts` |
| Selected paper's title, authors, venue and citation | `src/data/publications.bib` |
| Publications held out of the homepage and download | `src/data/archived-publications.bib` |
| Homepage structure and bilingual labels | `src/pages/index.astro` |
| Colors, typography and responsive layout | `src/styles/global.css` |
| Language, theme and citation interactions | `src/scripts/site.ts` |

TOFE and IBCD are preserved in the archive source file for future use. They are not imported into the homepage or included in `/publications.bib`. Add a matching entry in `work` and the selected bibliography when adding a publication, then update the news and build assertions as needed.

## Publishing

This site is configured for the public repository **SII-YDD/sii-ydd.github.io**. GitHub Pages uses **GitHub Actions**. Pushing to `main` builds, checks, and deploys `dist/` with the included workflow. No personal access token is stored in the site.

## Sources and publication status

- Identity and publication profile: [Google Scholar](https://scholar.google.com/citations?user=GpuCXTMAAAAJ&hl=en).
- SII Ph.D. student affiliation, research interests (intelligent software engineering, AI agents, AI safety), hobbies, and the Distinguished Paper Award: supplied by Di Yang on 2026-09-16.
- Affiliations, listed in the requested order: [Shanghai Innovation Institute](https://www.sii.edu.cn/), then [School of Software Engineering, East China Normal University](https://sei.ecnu.edu.cn/).
- Joint supervision: supplied by Di Yang. Advisor homepages: [Chengcheng Wan](https://chengcheng-wan.github.io/), [Geguang Pu](https://ggpu-ecnu.github.io/).
- Conference title, authors, venue, and DOI: [ASE 2026 official program](https://conf.researchr.org/track/ase-2026/ase-2026-not-in-person-presentations), [ACM DOI](https://doi.org/10.1145/3832783.3834403).
- ASE 2026 research-paper acceptance statistics: [University of Waterloo REBELS lab publication record](https://rebels.cs.uwaterloo.ca/venues/ase.html) reports 263 / 1,304, displayed as 20.2% (rounded to one decimal). This is an institutional author record, not a conference-organizer statistics page. The homepage displays the rate as plain text without a source link.
- Orchid benchmark and manuscript: [arXiv:2604.21505](https://arxiv.org/abs/2604.21505), [Hugging Face dataset](https://huggingface.co/datasets/SII-YDD/Orchid).

The homepage and BibTeX use the conference title, **Clarity Is Not Assumed: Understanding LLM-Based Code Generation under Ambiguous Requirements**. The linked arXiv manuscript uses its earlier title, **Assessing the Impact of Requirement Ambiguity on LLM-based Function-Level Code Generation**. The paper overview is omitted from the homepage. No publication page numbers have been inferred.

## Template and license

Adapted from [Scholar Pages](https://github.com/jxpeng98/astro-theme-scholars) by Jiaxin Peng (MIT), revision `1270329`. This version retains the template's BibTeX parsing and citation-formatting engine in `src/lib/bibtex.ts`; the presentation and homepage were rebuilt for this site. The original license is retained in `LICENSE`.

The site uses system fonts. No analytics, third-party tracking or runtime font CDN is required.
