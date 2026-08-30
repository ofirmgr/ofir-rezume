import { readFile, writeFile } from 'node:fs/promises';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

if (basePath && !/^\/[A-Za-z0-9._/-]+$/.test(basePath)) {
  throw new Error(`Invalid NEXT_PUBLIC_BASE_PATH: ${basePath}`);
}

if (basePath) {
  const exportPages = ['dist/client/index.html', 'dist/client/404.html'];
  const unscopedFontPath =
    /(?<![A-Za-z0-9._/-])\/_next\/static\/_vinext_fonts\//g;
  const scopedFontPath = `${basePath}/_next/static/_vinext_fonts/`;

  for (const exportPage of exportPages) {
    try {
      const source = await readFile(exportPage, 'utf8');
      const updated = source.replaceAll(unscopedFontPath, scopedFontPath);

      if (updated !== source) {
        await writeFile(exportPage, updated);
      }
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
}
