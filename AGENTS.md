# Resume Site

## Purpose

- Interactive portfolio for Ofir Meguri. Do not deploy or publish unless explicitly requested.
- Game concept: `OFIR.EXE - Fullstack Quest`; Ofir is the playable protagonist.

## Sources

- Resume source: private local resume PDF outside this repository; never commit or expose its filesystem path.
- Public code source: `https://github.com/ofirmgr`
- Never copy credentials, private repository data, or hidden profile data into the site.

## Architecture

- Static Vinext/React 19 export targeting GitHub Pages, with shadcn components.
- Main experience: `app/page.tsx`; shared theme: `app/globals.css`; metadata: `app/layout.tsx`.
- Generated branded art and social preview: `public/og.png`.
- Local development: `npm run dev`; production validation: `npm run build`.
- Static output: `dist/client/`. GitHub Pages base path is injected by the deployment workflow.
- GitHub Pages deployment is manual-only (`workflow_dispatch`) to prevent accidental publication.
- Migration and Worker-runtime rollback notes: `docs/agents/static-export-migration.md`.
