# jinningliang.com

Personal website of Jinning Liang, built with Jekyll and deployed to GitHub Pages by the workflow in `.github/workflows/jekyll-gh-pages.yml` on every push to `main`.

## Where things live

| What | File |
| --- | --- |
| Name, role, affiliation, navigation, profile links | `_config.yml` |
| Publications (first author and co-authored) | `_data/publications.yml` |
| Research projects shown on the home and Research pages | `_data/research.yml` |
| Code repositories | `_data/code.yml` |
| About text | `about/index.html` |
| One page per research project | `research/project-*/index.html` |
| CV | `assets/files/CV.pdf` (also reachable at `/cv/`) |
| Colours and fonts | `assets/css/tokens.css` |
| Page styles | `assets/css/site.css` (with `base.css`) |

## Adding a paper

Copy a block in `_data/publications.yml` and edit it. `Jinning Liang` is set in bold automatically. The first four first-author papers also appear on the home page.

## Adding a research project

1. Create `research/project-<name>/index.html` with front matter `layout: project` and a `title`.
2. Add an entry to `_data/research.yml` with its `url`, a thumbnail `image`, `venue` and `year`.

Figures inside a project page are plain `<figure>` blocks. Add `class="fig-65"` (or `fig-55`, `fig-60`, `fig-80`, `fig-90`) to an `<img>` to show it narrower than full width. Maths uses MathJax: `\( ... \)` inline and `\[ ... \]` for display.
