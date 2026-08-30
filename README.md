# OFIR.EXE - Fullstack Quest

Interactive portfolio for Ofir Meguri, presented as a playable fullstack career quest.

## Local development

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

The GitHub Pages-ready export is written to `dist/client/`.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` supports both project sites such as `ofirmgr.github.io/resume-site` and account sites such as `ofirmgr.github.io`. It calculates the correct asset base path during the build.

Deployment is intentionally manual. After creating and pushing the repository:

1. Open the repository's **Settings > Pages** and select **GitHub Actions** as the source.
2. Open **Actions > Deploy static site to GitHub Pages**.
3. Choose **Run workflow** when ready to publish.
