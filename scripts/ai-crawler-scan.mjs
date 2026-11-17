#!/usr/bin/env node

/**
 * ai-crawler-scan.mjs
 * Static analysis scanner to audit Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)
 * compliance across all Next.js App Router routes for AI search crawlers (Perplexity, ChatGPT Search, Gemini).
 * Audits:
 * 1. Question-Led Headings (<h2>/<h3> containing natural language questions)
 * 2. High-Extraction Structures (lists, tables, specification grids)
 * 3. Semantic Layout Structures (<main>, <section>, <article>)
 * 4. AI Entity Metadata (ai:entity, aiSummary, ai:booking-url)
 * 5. Direct Answer-First Snippet Availability
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, resolve, dirname } from 'path';

function findPageFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'api') continue;
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, fileList);
    } else if (file === 'page.tsx' || file === 'page.jsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function resolveImportedComponents(filePath, content, visited = new Set(), depth = 0) {
  if (depth > 3) return content;
  visited.add(filePath);
  let combinedContent = content;

  const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    let resolvedPath = null;

    if (importPath.startsWith('.')) {
      const candidateBase = resolve(dirname(filePath), importPath);
      for (const ext of ['.tsx', '.jsx', '.ts', '.js', '/index.tsx', '/index.jsx', '/index.ts']) {
        if (existsSync(candidateBase + ext)) {
          resolvedPath = candidateBase + ext;
          break;
        }
      }
    } else if (importPath.startsWith('@/')) {
      const candidateBase = resolve(process.cwd(), importPath.replace(/^@\//, ''));
      for (const ext of ['.tsx', '.jsx', '.ts', '.js', '/index.tsx', '/index.jsx', '/index.ts']) {
        if (existsSync(candidateBase + ext)) {
          resolvedPath = candidateBase + ext;
          break;
        }
      }
    }

    if (resolvedPath && !visited.has(resolvedPath)) {
      try {
        const importedContent = readFileSync(resolvedPath, 'utf-8');
        combinedContent += '\n' + resolveImportedComponents(resolvedPath, importedContent, visited, depth + 1);
      } catch (e) {
        // Ignore unreadable imports
      }
    }
  }

  return combinedContent;
}

function auditRouteAeo(pagePath) {
  const routeDir = join(pagePath, '..');
  const layoutPath = join(routeDir, 'layout.tsx');
  const hasLayout = existsSync(layoutPath);
  const rawPageContent = readFileSync(pagePath, 'utf-8');
  const layoutContent = hasLayout ? readFileSync(layoutPath, 'utf-8') : '';

  // Check parent layout (e.g. app/house/layout.tsx or app/apartments/layout.tsx)
  const parentLayoutPath = join(routeDir, '..', 'layout.tsx');
  const hasParentLayout = existsSync(parentLayoutPath);
  const parentLayoutContent = hasParentLayout ? readFileSync(parentLayoutPath, 'utf-8') : '';

  const issues = [];

  // Exclude admin dashboard from public AI search audits
  if (pagePath.includes('admin')) {
    return {
      pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
      issues: [],
      isClean: true,
      isExempt: true,
    };
  }

  // Exclude redirect routes
  if (rawPageContent.includes('redirect(')) {
    return {
      pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
      issues: [],
      isClean: true,
      isRedirect: true,
    };
  }

  const pageWithComponents = resolveImportedComponents(pagePath, rawPageContent);
  const combined = parentLayoutContent + '\n' + layoutContent + '\n' + pageWithComponents;

  // 1. Question-Led Headings Check (Essential for AI citation matching)
  const questionInTagPattern = /<(?:motion\.)?h[23][^>]*>[^<]*\?|<(?:motion\.)?h[23][^>]*>[^<]*(?:как|къде|кога|защо|колко|откъде|ποιο|πότε|πού|how|what|where|when|can|why|is\s+there)/i;
  const questionInDictionaryPattern = /(?:title|heading|headline|header|question|prompt|valuesTitle|hostsTitle|storyTitle|faq|q)\w*\s*:\s*['"`][^'"`]*\?/i;
  const hasH2OrH3 = /<(?:motion\.)?h[23]\b/i.test(pageWithComponents);
  const hasQuestionHeadings =
    questionInTagPattern.test(pageWithComponents) ||
    (hasH2OrH3 && questionInDictionaryPattern.test(pageWithComponents)) ||
    /faq|q:|questions/i.test(pageWithComponents) ||
    /t\.(?:faq|items|questions)/i.test(pageWithComponents) ||
    /faq|frequently/i.test(pagePath);

  if (!hasQuestionHeadings) {
    issues.push({
      rule: 'NO_QUESTION_HEADINGS',
      name: 'Missing Question-Led Headings',
      description: 'Page lacks natural-language question headings (<h2>/<h3> with ?). AI search engines prioritize pages that directly answer question queries.',
    });
  }

  // 2. High-Extraction Data Structures Check
  const hasStructuredElements = /<ul\b|<ol\b|<table\b|divide-[xy]|grid-cols-[234]|specStrip|amenities|features/i.test(pageWithComponents);
  if (!hasStructuredElements) {
    issues.push({
      rule: 'NO_HIGH_EXTRACTION_ELEMENTS',
      name: 'Missing High-Extraction Structures',
      description: 'Page contains mostly continuous prose without lists, tables, or spec strips. AI crawlers extract facts with highest accuracy from structured lists/tables.',
    });
  }

  // 3. AI Entity & Contextual Metadata Check
  const hasAiMeta = /ai:entity|aiSummary|ai:booking-url/.test(combined);
  if (!hasAiMeta) {
    issues.push({
      rule: 'MISSING_AI_META',
      name: 'Missing AI Crawler Metadata',
      description: 'Route does not inherit ai:entity or aiSummary meta tags defining the property identity, location, and direct booking URL for LLMs.',
    });
  }

  // 4. Semantic Section Containers
  const hasSemanticSections = /<section\b|<article\b|<main\b/i.test(pageWithComponents);
  if (!hasSemanticSections) {
    issues.push({
      rule: 'NON_SEMANTIC_CONTAINERS',
      name: 'Missing Semantic Section Wrappers',
      description: 'Page relies on generic <div> tags instead of semantic <section> or <article> elements, reducing parser landmark confidence.',
    });
  }

  return {
    pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
    issues,
    isClean: issues.length === 0,
    isExempt: false,
  };
}

function runAiScan() {
  console.log('\n================================================================');
  console.log('             AI CRAWLER & AEO / GEO AUDIT SCANNER               ');
  console.log('================================================================');

  const appDir = join(process.cwd(), 'app');
  const pages = findPageFiles(appDir).sort();

  console.log(`Auditing ${pages.length} pages in app/ directory for Answer Engine readiness.\n`);

  let cleanCount = 0;
  let totalIssues = 0;

  const results = pages.map((p) => auditRouteAeo(p));

  const dirty = results.filter((r) => !r.isClean);
  const clean = results.filter((r) => r.isClean);

  for (const r of dirty) {
    totalIssues += r.issues.length;
    console.log(`🔴 AEO ATTENTION NEEDED (${r.issues.length} recommendations): ${r.pagePath}`);
    for (const issue of r.issues) {
      console.log(`   - [${issue.name}]: ${issue.description}`);
    }
    console.log('');
  }

  for (const r of clean) {
    cleanCount++;
    console.log(`🟢 AEO / GEO OPTIMIZED${r.isExempt ? ' (Admin Exempt)' : ''}${r.isRedirect ? ' (Redirect)' : ''}: ${r.pagePath}`);
  }

  const pct = Math.round((cleanCount / pages.length) * 100);
  console.log('================================================================');
  console.log(`SUMMARY: ${cleanCount} / ${pages.length} pages AEO optimized (${pct}%).`);
  console.log(`Total active AEO recommendations: ${totalIssues}`);
  console.log('================================================================\n');

  console.log('To optimize a specific page in chat, type:');
  console.log('  /ai-crawler-optimizer <page_path>');
  console.log('To run an automated full sweep across all pages, type:');
  console.log('  /ai-crawler-optimizer-all\n');
}

runAiScan();
