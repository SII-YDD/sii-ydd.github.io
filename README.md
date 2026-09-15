# Di Yang — Academic Homepage

A colorful, responsive academic website for **Di Yang**, published at **https://sii-ydd.github.io/**.

Built with Astro. The design uses electric blue, coral, and lilac; includes an animated mathematical sculpture, English/Chinese content, a dark-mode toggle, research cards, publication filters, citation copying, and a downloadable BibTeX bibliography. Content is rendered to static HTML and remains readable with JavaScript disabled.

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
| Name, affiliation, profile links, bilingual biography, research summaries, Scholar snapshot | `src/data/profile.ts` |
| Paper titles, full author lists, venues, dates and citations | `src/data/publications.bib` |
| Homepage structure and bilingual labels | `src/pages/index.astro` |
| Color palette, typography, responsive layout | `src/styles/global.css` |
| 3D point-cloud animation | `src/scripts/scene.ts` |

The Scholar snapshot is **manual, as of 2026-09-16**, not a live feed. After adding a paper, add a matching record in both the bibliography and `work`, then update the displayed counts in `index.astro` and the expected totals in `scripts/check-build.mjs`. No email, degree, current job title, portrait, or CV was added because these were not supplied or verified.

## Publishing

This site is configured for the public repository **SII-YDD/sii-ydd.github.io**. In **Settings → Pages**, select **GitHub Actions** as the source. Pushing to `main` builds, checks, and deploys `dist/` with the included workflow. No personal access token is stored in the site.

## Sources and publication status

- Identity, affiliation, interests and metric snapshot: [Google Scholar](https://scholar.google.com/citations?user=GpuCXTMAAAAJ&hl=en), retrieved 2026-09-16.
- Orchid title, authors, benchmark size and preprint status: [arXiv:2604.21505](https://arxiv.org/abs/2604.21505).
- TOFE title, authors, method and preprint status: [arXiv:2405.18071](https://arxiv.org/abs/2405.18071).
- IBCD conference publication: [ICASSP 2024 program](https://cmsworkshops.com/ICASSP2024/view_paper.php?PaperNum=4006), [DOI](https://doi.org/10.1109/ICASSP48485.2024.10448145); open manuscript: [arXiv:2305.10929](https://arxiv.org/abs/2305.10929).

Paper summaries and bilingual copy are editorial paraphrases. Research artwork is conceptual illustration, not a reproduction of experimental results. The two arXiv-only entries are explicitly marked **Preprint**.

## Template and licenses

Adapted from [Scholar Pages](https://github.com/jxpeng98/astro-theme-scholars) by Jiaxin Peng (MIT), revision `1270329`. This version retains and uses the template's BibTeX parsing and citation-formatting engine in `src/lib/bibtex.ts`; the presentation, interactions and homepage were rebuilt for this site. The original license is retained in `LICENSE`.

Space Grotesk is self-hosted through Fontsource under the SIL Open Font License; see `public/fonts/OFL.txt`. Pretext provides progressive text measurement. No analytics, third-party tracking or runtime font CDN is required.
