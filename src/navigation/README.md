# Manual navigation

Each numbered JSON file registers a topic in the Starlight sidebar. The supported sections are `start`, `use`, `learn`, `help`, and `advanced`; their values are Starlight sidebar item arrays. Put detailed recovery, custom settings and protocol references in `advanced`. Keep first-use instructions in `start` and ordinary task guides in `use`.

`replaces` lists existing sidebar slugs supplied by the topic so they are not also shown in the legacy fallback. Every listed page must ship with that topic or already exist on `master`. Keep links within the same topic until their targets have merged. Preserve published routes and existing heading anchors when replacing a page.

Pages use `doc_id`, `lang`, `verified_release`, and `reader_level` metadata. Keep `doc_id` stable across translations and verify behavior and English UI labels against a released application tag. English pages keep their existing unprefixed routes. Translations mirror their paths under a locale directory such as `src/content/docs/de/`, with a matching dictionary in `src/locales/de.json`. The dictionary and homepage enable the locale; translate every page and preserve links and heading anchors before publishing. Disable automatic previous/next links with `prev: false` and `next: false` unless an intentional sequence stays at the same reading level.

The manual explains user tasks. Source review notes and development plans belong outside the published page collection. Avoid screenshots of the application and put optional advanced explanations on separate pages.

Prepare translations in a separate directory with the same English page paths and a `locale.json` containing the language label, site title, header, sidebar and search copy. Keep English application control names and code examples unchanged. Run `node scripts/import-translation.mjs de /path/to/translation` to add the localized pages and dictionary. The importer prefixes documentation links and adds aliases for English heading anchors; shared asset URLs and external URLs stay unchanged. Use lowercase locale directory names, including `pt-br` with `lang: pt-BR` in its dictionary and pages.

Run `node scripts/check-translations.mjs`, `npm run check`, `npm run build`, `python scripts/check-doc-links.py` and `npm run test:search` before publishing a translation. The browser checks cover language switching, mobile homepage controls and language-specific search results. Translation checks preserve structure and references; review wording against the English source separately when updating a guide.
