/**
 * Reads contacts.txt from repo root (save contacts in the editor if empty on disk)
 * and writes app/guide/contactsData.ts
 * Run: node scripts/emit-contacts.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'contacts.txt');
const html = fs.readFileSync(htmlPath, 'utf8');
if (!html.trim()) {
  console.error('contacts.txt is empty on disk. Save the file in your editor, then run again.');
  process.exit(1);
}

const blocks = html.split('<div class="card">').slice(1);
const entries = [];
let idx = 0;

function decodeHtmlEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

for (const block of blocks) {
  const placeM = block.match(/<div class="place">([\s\S]*?)<\/div>/);
  if (!placeM) continue;
  const label = decodeHtmlEntities(placeM[1].trim());
  const telMatches = [...block.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]);
  const mapM = block.match(/href="(https:\/\/www\.google\.com\/maps\/search\/[^"]+)"/);
  let mapsUrl = mapM ? mapM[1].replace(/&amp;/g, '&') : null;
  if (mapsUrl) {
    try {
      const u = new URL(mapsUrl);
      const q = u.searchParams.get('query');
      if (q === '' || q === null) mapsUrl = null;
    } catch {
      mapsUrl = null;
    }
  }
  if (telMatches.length === 0) continue;
  const id = `c${++idx}`;
  entries.push({ id, label, telHrefs: telMatches, mapsUrl });
}

const out = `// Auto-generated from contacts.txt — run: node scripts/emit-contacts.mjs

export type GuideContactEntry = {
  id: string;
  label: string;
  telHrefs: string[];
  mapsUrl: string | null;
};

export const guideContactsData: GuideContactEntry[] = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(path.join(root, 'app', 'guide', 'contactsData.ts'), out, 'utf8');
console.log('Wrote', entries.length, 'contacts to app/guide/contactsData.ts');
