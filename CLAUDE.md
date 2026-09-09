# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing site for the band 5 Non Blondes (5nonblondes.com), built with Next.js App Router, React 19, and TypeScript. Content is largely static/informational (about, events, contact, tour dates, photo gallery) with no backend/database — data lives in a JSON file checked into the repo.

## Commands

- `npm run dev` — start the dev server (Next.js)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint over the whole project

There is no test suite/framework configured in this repo (no test script, no test files).

## Architecture

### Routing (`src/app`)
Standard Next.js App Router structure: `page.tsx` (home), `about/page.tsx`, `events/page.tsx`, `contact/page.tsx`, plus `layout.tsx` (shared `Header`/`Footer` chrome, fonts, and global `<head>` metadata/JSON-LD), `sitemap.ts`, and `robots.ts`. Pages are thin — they mostly compose components from `src/components`.

### Components (`src/components`)
All components are re-exported through a single barrel file, [src/components/index.ts](src/components/index.ts). Always import components via `@/components` (e.g. `import { Header, TourDates } from '@/components'`), not by deep-importing a component's folder directly — this matches the existing convention throughout the codebase. Each component lives in its own folder as `ComponentName/index.tsx`.

Notable components:
- `Container` — a thin wrapper (`container mx-auto px-2.5` + `classnames`-merged custom classes) used to wrap section content consistently. Reuse it instead of duplicating its classes.
- `TourDates` / `Shows` — render **upcoming** gigs (filters `tourdates.json` for dates in the future) inside the animated "Incoming Shows" section on the events page.
- `PhotoGallery` and the gallery section inside `src/app/events/page.tsx` — both render **past** gigs (filters `tourdates.json` for dates in the past) with a `yet-another-react-lightbox` gallery. These two are near-duplicate implementations; when changing past-shows gallery behavior, check both.
- Animation pattern: several sections (`Shows`, `PhotoGallery`, the events gallery, `TourDates`' empty state) use `framer-motion`'s `useInView` on a ref plus inline `style={{ opacity, transform, transition }}` to fade/slide content in on scroll, and a Tailwind `animate-slideUp` keyframe (defined in [tailwind.config.ts](tailwind.config.ts)) for headings. Follow this same reveal pattern for new scroll-triggered sections rather than introducing a new animation approach.

### Tour/event data
`src/tourdates.json` is the single source of truth for gigs, typed by `Event`/`EventList` in [types/custom.d.ts](types/custom.d.ts). Each entry has `id`, `venue`, `city`, `date` (MM/DD/YYYY string, parsed with `moment`/`Date`), optional `src` (thumbnail image path under `public/img/...`), and optional `slides` (array of `{ src }` for the lightbox gallery of that show).

- [src/app/util/sortDate.ts](src/app/util/sortDate.ts) sorts an `EventList` by date (`asc`/`desc`, defaults to `desc`).
- Components consistently sort ascending then filter by comparing `date` against `new Date()`: `< new Date()` = upcoming, `> new Date()` = past. When adding new gig-related UI, follow this same sort-then-filter pattern rather than re-deriving it differently.
- Images referenced by `src`/`slides` are expected to already exist under `public/img/<event-folder>/`; there's no image pipeline beyond Next's `<Image>` component.

### Styling
Tailwind CSS (v3, config in [tailwind.config.ts](tailwind.config.ts)) with a small custom theme: brand colors (`purple-primary`, `amethyst-primary`, `charcoal-primary`, `medium-gray`), a `bg-incoming-shows` background image utility, and a `slideUp` keyframe/animation. `classnames` is used throughout for conditional class composition (not `clsx`). Global styles live in [src/app/globals.css](src/app/globals.css); a couple of components (e.g. `Intro`) have a co-located `styles.css`.

### Lint conventions
ESLint config ([eslint.config.mjs](eslint.config.mjs)) extends `eslint-config-next` (core-web-vitals + typescript) and additionally enforces **single quotes** and **2-space indentation** — match this in any code you write or edit.

### Path aliases
`@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)). The `types/custom.d.ts` file lives outside `src`, so it's imported via relative paths (e.g. `'../../../types/custom'`) rather than `@/`.
