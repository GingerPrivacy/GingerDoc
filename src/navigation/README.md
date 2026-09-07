# Manual navigation

Each numbered JSON file registers a topic in the Starlight sidebar. The supported sections are `start`, `use`, `learn`, `help`, and `advanced`; their values are Starlight sidebar item arrays. Put detailed recovery, custom settings and protocol references in `advanced`. Keep first-use instructions in `start` and ordinary task guides in `use`.

`replaces` lists existing sidebar slugs supplied by the topic so they are not also shown in the legacy fallback. Every listed page must ship with that topic or already exist on `master`. Keep links within the same topic until their targets have merged. Preserve published routes and existing heading anchors when replacing a page.

Pages use `doc_id`, `lang`, `verified_release`, and `reader_level` metadata. Keep `doc_id` stable for future translations and verify behavior and English UI labels against a released application tag. English is the only published locale for now. Disable automatic previous/next links with `prev: false` and `next: false` unless an intentional sequence stays at the same reading level.

The manual explains user tasks. Source review notes and development plans belong outside the published page collection. Avoid screenshots of the application and put optional advanced explanations on separate pages.
