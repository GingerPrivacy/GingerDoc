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
| `npm run test:search` | Test search filters, keyboard/mobile controls and local resources against the production build |

Search is generated at build time, so it only works against `npm run preview`,
never against `npm run dev`.

Run `npx playwright install chromium` once before running the browser tests locally.
Build the site before `npm run test:search`; the tests start a local preview server.

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

Nav order and grouping come from the per-topic JSON files in
[`src/navigation/`](src/navigation/), read by
[`src/manual-sidebar.mjs`](src/manual-sidebar.mjs). Register new pages in the
appropriate topic and reading level; follow the [navigation guide](src/navigation/README.md).

Search starts with beginner and everyday guides. Readers can select advanced
guides or all guides in the search dialog. Set `reader_level` to `beginner`,
`everyday`, or `advanced` in page frontmatter; this drives both the search filter
and the result's reading-level label. Existing unclassified pages default to
beginner. New search UI strings live in `src/search-labels.ts` for future locales.

## Theme

Colours, fonts and heading styles are in
[`src/styles/custom.css`](src/styles/custom.css). The logo is
[`src/assets/logo.svg`](src/assets/logo.svg) and the favicon is
[`public/favicon.svg`](public/favicon.svg).

Poppins is bundled from the pinned `@fontsource/poppins` package (OFL-1.1).
Visitors load the font files from this site; no Google Fonts request is needed.
The font's copyright and license ship in [`public/fonts/OFL-Poppins.txt`](public/fonts/OFL-Poppins.txt).

## Hosting privacy

The generated site uses local fonts and local Pagefind search. Cloudflare can
inject its Web Analytics beacon into responses after deployment, independently
of this repository. A GitHub merge cannot switch off that account setting.

For the account serving `docs.gingerwallet.io`, open **Web Analytics**, select
**Manage site**, and disable automatic analytics for this hostname. If the
analytics site covers the whole `gingerwallet.io` zone, use **Advanced options**
to add an exclusion rule for hostname `docs.gingerwallet.io` and all paths.
Keep analytics settings for other hostnames unchanged. See Cloudflare's
[setup](https://developers.cloudflare.com/web-analytics/get-started/) and
[hostname rules](https://developers.cloudflare.com/web-analytics/configuration-options/rules/).

After saving, check the live HTML for `static.cloudflareinsights.com` and
confirm that the browser makes no beacon request. Checking only `dist/` does
not verify the Cloudflare setting.
