// Fails when a file in src/assets is never bundled, i.e. nothing imports it.
// Runs after `vite build`: the bundler's output is the source of truth.
// Limitation: Vite inlines assets under 4 KB, so those would be reported too.
import { readdir } from 'node:fs/promises';
import { parse } from 'node:path';

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const sources = await readdir('src/assets', {
  recursive: true,
  withFileTypes: true,
});
const bundled = await readdir('dist/assets');

// Vite names bundled assets `<name>-<8-char hash><ext>`
const isBundled = ({ name, ext }) => {
  const pattern = new RegExp(
    `^${escapeRegExp(name)}-[\\w-]{8}${escapeRegExp(ext)}$`,
  );
  return bundled.some((file) => pattern.test(file));
};

const unused = sources
  .filter((entry) => entry.isFile())
  .map((entry) => parse(entry.name))
  .filter((file) => !isBundled(file));

if (unused.length > 0) {
  console.error('Unused files in src/assets (nothing imports them):');
  for (const { base } of unused) console.error(`  ${base}`);
  process.exit(1);
}
console.log('All files in src/assets are used.');
