#!/usr/bin/env node

/**
 * unslop-scan.mjs
 * Static analysis scanner to detect AI Design Slop indicators across all Next.js pages.
 * Based on the Anti-Slop 20 optimization rules.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const SLOP_RULES = [
  {
    id: 'PILL_BADGE',
    name: 'Arbitrary Pill / Tag Salad',
    pattern: /rounded-full.*?(bg-.*?\/(?:10|15|20)|border-amber|border-zinc|px-3 py-1|text-xs font-semibold)/g,
    description: 'Decorative rounded-full pills or badge clusters in headers or cards',
  },
  {
    id: 'WHITE_BOX',
    name: 'Generic White Box Container',
    pattern: /bg-white\s+rounded-3xl\s+border\s+border-zinc-200/g,
    description: 'Sterile, flat white box container (bg-white rounded-3xl border border-zinc-200)',
  },
  {
    id: 'SPARKLES_ICON',
    name: 'AI Sparkle / Magic Trope Icon',
    pattern: /<Sparkles\b|<Wand2\b/g,
    description: 'Arbitrary sparkle or magic wand icon instead of semantic action icon',
  },
  {
    id: 'BOX_IN_A_BOX',
    name: 'Nested Box / Bento Slop',
    pattern: /rounded-xl\s+bg-\[#F9F7F7\]\s+border\s+border-zinc-100/g,
    description: 'Nested outlined gray boxes inside an already boxed container',
  },
  {
    id: 'BOUNCY_SCALE',
    name: 'Excessive / Bouncy Hover Motion',
    pattern: /group-hover:scale-105|group-hover:scale-110|hover:scale-105|hover:scale-110/g,
    description: 'Excessive 5-10% zoom scale on cards or images instead of subtle <=2% ease',
  },
  {
    id: 'MISSING_TEXT_BALANCE',
    name: 'Un-balanced Headline',
    pattern: /<h[123][^>]*className="(?:(?!text-balance)[^"])*"/g,
    description: 'Headings without text-balance causing awkward line breaks and orphans',
  },
  {
    id: 'LOW_CONTRAST_TEXT',
    name: 'Low Contrast Muted Text',
    pattern: /text-zinc-500|text-zinc-400/g,
    description: 'Low-contrast text on light canvas violating WCAG AA compliance',
  },
  {
    id: 'MISSING_TABULAR_NUMS',
    name: 'Unaligned Numerical Metrics',
    pattern: /<p[^>]*className="(?:(?!tabular-nums)[^"])*font-bold[^"]*"[^>]*>\s*\{(?:room|item|h|stat|photo)\.[a-zA-Z]*(?:Val|stat|count|price|guests|beds)/g,
    description: 'Numbers or metrics displayed without tabular-nums causing misalignment',
  },
];

function findPageFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const pages = findPageFiles('app');
console.log('\n================================================================');
console.log('                 UNSLOP PROJECT AUDIT SCANNER                   ');
console.log('================================================================');
console.log(`Found ${pages.length} pages in app/ directory.\n`);

let totalSlopCount = 0;
let cleanPagesCount = 0;
const results = [];

for (const pagePath of pages) {
  const relPath = relative(process.cwd(), pagePath).replace(/\\/g, '/');
  const content = readFileSync(pagePath, 'utf8');
  const issues = [];

  for (const rule of SLOP_RULES) {
    const matches = content.match(rule.pattern);
    if (matches && matches.length > 0) {
      issues.push({
        rule: rule.name,
        id: rule.id,
        count: matches.length,
        description: rule.description,
      });
      totalSlopCount += matches.length;
    }
  }

  if (issues.length === 0) {
    cleanPagesCount++;
  }

  results.push({
    path: relPath,
    issues,
    clean: issues.length === 0,
  });
}

// Print results sorted: slop pages first, then clean pages
results.sort((a, b) => b.issues.length - a.issues.length);

for (const res of results) {
  if (res.clean) {
    console.log(`🟢 CLEAN: ${res.path}`);
  } else {
    console.log(`🔴 SLOP DETECTED (${res.issues.length} issue types): ${res.path}`);
    for (const issue of res.issues) {
      console.log(`   - [${issue.rule}] (${issue.count}x): ${issue.description}`);
    }
    console.log('');
  }
}

const cleanPercent = Math.round((cleanPagesCount / pages.length) * 100);

console.log('================================================================');
console.log(`SUMMARY: ${cleanPagesCount} / ${pages.length} pages clean (${cleanPercent}% un-slopped).`);
console.log(`Total active slop flags: ${totalSlopCount}`);
console.log('================================================================\n');
console.log('To unslop a specific page in chat, type:');
console.log('  /unslop <page_path>');
console.log('To run an automated full sweep across all pages, type:');
console.log('  /unslop-all\n');

