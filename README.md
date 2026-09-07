# GingerDoc

Documentation for [GingerWallet](https://gingerwallet.io), built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and
searched with [Pagefind](https://pagefind.app).

Published to <https://docs.gingerwallet.io> from the `gh-pages` branch by
[`.github/workflows/docs.yml`](.github/workflows/docs.yml) on every push to `master`.

## Run on localhost

```sh
npm install
npm run dev
```

The dev server prints a local URL (`http://localhost:4321` by default) and reloads
on save — including changes to `src/styles/custom.css`, so no rebuild is needed
while working on styles.

## Commands

| Command           | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the dev server                                     |
| `npm run build`   | Build the production site into `dist/` and run Pagefind  |
| `npm run preview` | Serve `dist/` locally — the only way to test search      |
| `npm run check`   | Type-check the config and validate page frontmatter      |

Search is generated at build time, so it only works against `npm run preview`,
never against `npm run dev`.

## Writing content

Pages live in [`src/content/docs/`](src/content/docs/) as `.md` / `.mdx`. The file
path is the URL: `src/content/docs/using-ginger/fee.md` → `/using-ginger/fee/`.

Every page needs a `title` in its frontmatter:

```md
---
title: Fees
---

Body text starts here — do not repeat the title as an `# h1`.
```

Optional frontmatter worth knowing:

```md
---
title: Bitcoin Purchase via Ginger Wallet
description: Shown in search results and social previews.
sidebar:
  label: Buy Bitcoin   # shorter label for the nav
  order: 3             # manual ordering within a group
---
```

Nav order and grouping are set explicitly in
[`astro.config.mjs`](astro.config.mjs) — add new pages to the `sidebar` array
there, or they will be reachable by URL but not linked.

## Theme

Colours, fonts and heading styles are in
[`src/styles/custom.css`](src/styles/custom.css). The logo is
[`src/assets/logo.svg`](src/assets/logo.svg) and the favicon is
[`public/favicon.svg`](public/favicon.svg).
