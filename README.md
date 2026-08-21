# Hearth and Hamlet Guide — Site

Static Next.js (`output: "export"`) guide site for **Hearth and Hamlet**
(Steam app 4315040). Same architecture as `sites/mortal-shell-ii`.

## Status: content-integrated static site

The homepage, eight guide pages, and trust/legal pages contain production copy
grounded in the local research package and attributed public sources:

- Page structure / keywords: `../../page-plan-hearth-and-hamlet.json`
- Verified content: `../../research-hearth-and-hamlet/` (`homepage.json`, `inner/*.md`)
- Page registry (titles, TOC outlines, media, sources, prev/next): `content/pages.ts`

## Routes

| Route | Target keyword | Notes |
|---|---|---|
| `/` | hearth and hamlet | Hero + hearthline stage strip + guide cards |
| `/guide/` | hearth and hamlet guide | P1 |
| `/tips/` | hearth and hamlet tips | P1 |
| `/layout/` | hearth and hamlet layout | P1 |
| `/best-settings/` | hearth and hamlet best settings | P2 |
| `/tech-tree/` | hearth and hamlet tech tree | P2 |
| `/buildings/` | hearth and hamlet buildings | P2, table-heavy |
| `/save-file-location/` | hearth and hamlet save file location | P3 |
| `/codes/` | hearth and hamlet codes | Evidence-led status page; no verified public code system found |
| `/about/`, `/privacy/`, `/terms/` | — | Trust and legal pages |

## Design system

"Banked hearth fire": dark timber room lit by embers (the game opens on a
campfire at dusk). Tokens in `app/globals.css`:

- Palette: `--hearth #17100a` bg, `--timber #251a0e` panels, `--ember #e8833a`
  accent, `--wheat #f2e3c6` text, `--moss #9aa86c` sparing secondary.
- Type: Fraunces (display) / Source Serif 4 (body) / IBM Plex Mono (labels, data).
- Signature: the **hearthline** — Campfire → Village → Town → Kingdom stage
  strip (`components/stage-strip.tsx`), plus rising ember particles in the hero
  (disabled under `prefers-reduced-motion`).
- Media layer: locally optimized official Steam screenshots in the homepage
  hero, every guide card, article headers, and contextual article sections.
  `components/game-media.tsx` owns reusable figure and video patterns.
- Media provenance and screenshot semantics are recorded in
  `../../research-hearth-and-hamlet/media-provenance.json`; use that mapping
  before assigning a numbered screenshot to a new page.
- Video: the official 61.5-second launch trailer is stored locally as a 720p
  MP4 with a compressed poster, so playback does not depend on a third-party
  embed or cross-origin scripts.

## Develop / build

```bash
npm install
npm run dev    # local dev
npm run build  # static export to out/
```

Set `SITE_URL` at build time to override the production origin in
`lib/site.ts` (sitemap, robots, JSON-LD).
