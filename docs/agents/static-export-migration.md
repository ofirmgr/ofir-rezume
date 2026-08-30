# Static Export Migration

## Current path

The site uses Vinext `output: 'export'`. Vite applies the repository base path supplied through `NEXT_PUBLIC_BASE_PATH`, and `scripts/fix-pages-export.mjs` scopes Vinext's generated font URLs. GitHub Pages serves `dist/client/` through a manual deployment workflow.

## Rollback to the Worker runtime

1. Remove `output: 'export'` from `next.config.ts`.
2. Restore the OpenAI Sites and Cloudflare plugins in `vite.config.ts`.
3. Restore `@cloudflare/vite-plugin`, `@cloudflare/workers-types`, `@openai/sites-vite-plugin`, and `wrangler` in `package.json`.
4. Restore the Wrangler `start` command and `.openai/hosting.json` with null `d1` and `r2` bindings.
5. Remove the Pages workflow and base-path export helper, reinstall dependencies, then run the production build.

No source content or portfolio data changed during the migration.
