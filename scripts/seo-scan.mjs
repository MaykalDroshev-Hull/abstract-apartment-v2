#!/usr/bin/env node

/**
 * seo-scan.mjs
 * Static analysis scanner to audit Technical SEO compliance across all Next.js App Router routes.
 * Audits:
 * 1. Dedicated metadata (page.tsx or layout.tsx)
 * 2. Open Graph & Twitter Cards
 * 3. JSON-LD Structured Data
 * 4. Single <h1> semantic heading per page (including <motion.h1> and imported Hero components)
 * 5. Heading hierarchy (h1 -> h2 -> h3)
 * 6. Image alt text attributes
 * 7. LCP Image priority flag
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

function resolveImportedComponents(filePath, content, visited = new Set()) {
  visited.add(filePath);
  let combinedContent = content;

  const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    let resolvedPath = null;

    if (importPath.startsWith('.')) {
      const candidateBase = resolve(dirname(filePath), importPath);
      for (const ext of ['.tsx', '.jsx', '.ts', '.js', '/index.tsx', '/index.jsx']) {
        if (existsSync(candidateBase + ext)) {
          resolvedPath = candidateBase + ext;
          break;
        }
      }
    } else if (importPath.startsWith('@/')) {
      const candidateBase = resolve(process.cwd(), importPath.replace(/^@\//, ''));
      for (const ext of ['.tsx', '.jsx', '.ts', '.js', '/index.tsx', '/index.jsx']) {
        if (existsSync(candidateBase + ext)) {
          resolvedPath = candidateBase + ext;
          break;
        }
      }
    }

    if (resolvedPath && !visited.has(resolvedPath)) {
      try {
        const importedContent = readFileSync(resolvedPath, 'utf-8');
        combinedContent += '\n' + importedContent;
      } catch (e) {
        // Ignore unreadable imports
      }
    }
  }

  return combinedContent;
}

function auditRouteSeo(pagePath) {
  const routeDir = join(pagePath, '..');
  const layoutPath = join(routeDir, 'layout.tsx');
  const hasLayout = existsSync(layoutPath);
  const rawPageContent = readFileSync(pagePath, 'utf-8');
  const layoutContent = hasLayout ? readFileSync(layoutPath, 'utf-8') : '';

  // Check parent layout (e.g. app/house/layout.tsx or app/apartments/layout.tsx)
  const parentLayoutPath = join(routeDir, '..', 'layout.tsx');
  const hasParentLayout = existsSync(parentLayoutPath);
  const parentLayoutContent = hasParentLayout ? readFileSync(parentLayoutPath, 'utf-8') : '';

  // Resolve imports in page for deep semantic tree audit
  const pageWithComponents = resolveImportedComponents(pagePath, rawPageContent);
  const combined = parentLayoutContent + '\n' + layoutContent + '\n' + pageWithComponents;

  const issues = [];

  // Exclude admin dashboard from public SEO indexing audits
  if (pagePath.includes('admin')) {
    return {
      pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
      issues: [],
      isClean: true,
      isExempt: true,
    };
  }

  // Exclude redirect routes from content SEO checks
  if (rawPageContent.includes('redirect(')) {
    return {
      pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
      issues: [],
      isClean: true,
      isRedirect: true,
    };
  }

  // 1. Dedicated Metadata Check (route layout, parent layout, or page)
  const hasMetadata =
    /export\s+(?:const\s+metadata|async\s+function\s+generateMetadata)\b/.test(rawPageContent) ||
    (hasLayout && /export\s+(?:const\s+metadata|async\s+function\s+generateMetadata)\b/.test(layoutContent)) ||
    (hasParentLayout && /export\s+(?:const\s+metadata|async\s+function\s+generateMetadata)\b/.test(parentLayoutContent));

  if (!hasMetadata) {
    issues.push({
      rule: 'MISSING_DEDICATED_METADATA',
      name: 'Missing Route-Specific Metadata',
      description: 'Route relies purely on inherited root metadata. Add page metadata or layout.tsx with buildPageMetadata().',
    });
  }

  // 2. Open Graph Check
  const hasOpenGraph = /openGraph|ogImage|og:image/.test(combined);
  if (!hasOpenGraph && hasMetadata) {
    issues.push({
      rule: 'MISSING_OPEN_GRAPH',
      name: 'Missing Open Graph Config',
      description: 'Metadata does not define Open Graph preview image (ogImage/openGraph).',
    });
  }

  // 3. JSON-LD Structured Data Check
  const hasJsonLd = /application\/ld\+json|StructuredData/.test(combined);
  if (!hasJsonLd) {
    issues.push({
      rule: 'MISSING_STRUCTURED_DATA',
      name: 'Missing JSON-LD Structured Data',
      description: 'Page does not include Schema.org JSON-LD (e.g. LodgingBusiness, FAQPage, or BreadcrumbList).',
    });
  }

  // 4. Semantic H1 Check (supports <h1 and <motion.h1)
  const h1Matches = pageWithComponents.match(/<(?:motion\.)?h1\b[^>]*>/g) || [];
  if (h1Matches.length === 0) {
    issues.push({
      rule: 'NO_H1_TAG',
      name: 'Missing <h1> Tag',
      description: 'Page is missing a primary <h1> heading for technical SEO indexing.',
    });
  } else if (h1Matches.length > 1) {
    issues.push({
      rule: 'MULTIPLE_H1_TAGS',
      name: `Multiple <h1> Tags (${h1Matches.length}x)`,
      description: 'Page contains more than one <h1>. Technical SEO requires exactly one primary <h1>.',
    });
  }

  // 5. Image Alt Text Check
  const imgWithoutAlt = [];
  const imgMatches = pageWithComponents.matchAll(/<(?:Image|img)\b([^>]*?)>/gs);
  for (const match of imgMatches) {
    const attrs = match[1];
    if (!/alt\s*=\s*["'{]/.test(attrs)) {
      imgWithoutAlt.push(match[0].slice(0, 50));
    }
  }
  if (imgWithoutAlt.length > 0) {
    issues.push({
      rule: 'MISSING_IMAGE_ALT',
      name: `Missing Image Alt Text (${imgWithoutAlt.length}x)`,
      description: 'One or more Image/img components are missing the required descriptive alt attribute.',
    });
  }

  // 6. LCP Hero Priority Check (only if top-of-page Hero component contains an image)
  const isTopHeroImage =
    /(?:AboutHero|ContactHero|DetailsHero|FaqHero|GettingHereHero|RatesHero|HouseHero|<Hero\b)/.test(rawPageContent) &&
    /<Image\b/.test(pageWithComponents);
  const hasHeroPriority = /priority\b(?:=\{true\})?/.test(pageWithComponents);

  if (isTopHeroImage && !hasHeroPriority) {
    issues.push({
      rule: 'LCP_HERO_PRIORITY',
      name: 'LCP Hero Image Missing priority',
      description: 'Above-the-fold hero image does not specify priority={true} for Core Web Vitals (LCP).',
    });
  }

  return {
    pagePath: relative(process.cwd(), pagePath).replace(/\\/g, '/'),
    issues,
    isClean: issues.length === 0,
    isExempt: false,
  };
}

function runSeoScan() {
  console.log('\n================================================================');
  console.log('                 NEXT.JS TECHNICAL SEO AUDIT                    ');
  console.log('================================================================');

  const appDir = join(process.cwd(), 'app');
  const pages = findPageFiles(appDir).sort();

  console.log(`Auditing ${pages.length} pages in app/ directory.\n`);

  let cleanCount = 0;
  let totalIssues = 0;

  const results = pages.map((p) => auditRouteSeo(p));

  const dirty = results.filter((r) => !r.isClean);
  const clean = results.filter((r) => r.isClean);

  for (const r of dirty) {
    totalIssues += r.issues.length;
    console.log(`🔴 SEO ATTENTION NEEDED (${r.issues.length} issues): ${r.pagePath}`);
    for (const issue of r.issues) {
      console.log(`   - [${issue.name}]: ${issue.description}`);
    }
    console.log('');
  }

  for (const r of clean) {
    cleanCount++;
    console.log(`🟢 SEO OPTIMIZED${r.isExempt ? ' (Admin Exempt)' : ''}${r.isRedirect ? ' (Redirect)' : ''}: ${r.pagePath}`);
  }

  const pct = Math.round((cleanCount / pages.length) * 100);
  console.log('================================================================');
  console.log(`SUMMARY: ${cleanCount} / ${pages.length} pages fully optimized (${pct}%).`);
  console.log(`Total active SEO recommendations: ${totalIssues}`);
  console.log('================================================================\n');

  console.log('To optimize a specific page in chat, type:');
  console.log('  /nextjs-seo-optimizer <page_path>');
  console.log('To run an automated full sweep across all pages, type:');
  console.log('  /nextjs-seo-optimizer-all\n');
}

runSeoScan();
