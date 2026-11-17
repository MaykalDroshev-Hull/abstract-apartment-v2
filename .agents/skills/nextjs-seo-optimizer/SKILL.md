---
name: nextjs-seo-optimizer
description: Audits and optimizes Next.js App Router pages for technical SEO, metadata generation, Open Graph, JSON-LD structured data, and semantic HTML. Supports single-page optimization (/nextjs-seo-optimizer <path>) and whole-project sweeps (/nextjs-seo-optimizer-all or -all).
---
# Next.js SEO Optimizer (Single-Page & Project-Wide)

## Summary
Audits and rewrites React components and App Router route configurations (`layout.tsx` and `page.tsx`) to achieve 100% technical SEO compliance across modern search engines. Supports both targeted single-page optimization and whole-project automated sweeps.

## When to Use
- **Single Page:** When the user asks to "optimize for SEO", "fix meta tags", or "add structured data" for a specific route (e.g. `/nextjs-seo-optimizer house/rates`).
- **Whole Project (-all):** When the user asks to "optimize the whole project for SEO", "run seo optimizer -all", or invokes `/nextjs-seo-optimizer-all` / `/seo-all`.

---

## Modes of Execution

### Mode A: Project-Wide Sweep (`-all`)
Triggered by: `/nextjs-seo-optimizer-all`, `/seo-all`, or `"optimize for SEO -all"`.

1. **Scan Inventory:** Run `npm run seo:scan` (or `node scripts/seo-scan.mjs`).
2. **Prioritize Routes:** Order by missing metadata, missing JSON-LD, missing primary `<h1>`, or image `alt`/LCP priority issues.
3. **Batch Refactor:**
   - For Client Components (`'use client'`), create or update the adjacent `layout.tsx` to export metadata using `buildPageMetadata` from `@/app/lib/seo`.
   - Ensure a single semantic `<h1>` exists on every page.
   - Inject Schema.org JSON-LD via `@/app/components/StructuredData`.
   - Add `priority={true}` to above-the-fold hero images.
4. **Verification Gate:**
   - Run `npx tsc --noEmit`
   - Run `npm run seo:scan` to verify all routes reach `🟢 SEO OPTIMIZED` (100%).
   - Run `npm run build` to verify all static routes generate cleanly.

### Mode B: Single Page Optimization
Triggered by: `/nextjs-seo-optimizer <page_path>` or `"optimize <page_path> for SEO"`.

1. **Audit Semantic HTML:**
   - Ensure exactly one primary `<h1>` is rendered.
   - Verify heading hierarchy (`<h2>` -> `<h3>`).
   - Ensure all `Image` components have descriptive `alt` text.
   - Use semantic wrappers (`<main>`, `<article>`, `<section>`, `<nav>`).

2. **Generate Next.js Metadata Export:**
   - Update or create the `metadata` export in `layout.tsx` or `page.tsx` using `buildPageMetadata`:
     - `title` (50–60 characters, distinct per page).
     - `description` (150–160 characters).
     - Open Graph (`ogImage`, `ogAlt`, `siteName`).
     - Multi-lingual alternates (`bg`, `el`, `en`).
     - Geo coordinates (`geo.region`, `geo.position`).

3. **Implement Structured Data (JSON-LD):**
   - Inject Schema.org JSON-LD using `<StructuredData data={[...]} />`.
   - Map data to `LodgingBusiness`, `FAQPage`, `BreadcrumbList`, or `Article`.

4. **Performance & Core Web Vitals:**
   - Set `priority={true}` for above-the-fold hero images (LCP).
   - Lazy load below-the-fold images and scripts.

---

## Gotchas
- Do not mix Next.js App Router `metadata` exports with raw `<head>` tags in JSX.
- In Next.js App Router, `'use client'` files cannot export `metadata`. Place `metadata` in the adjacent `layout.tsx` or wrap the client view in a Server Component.
- Ensure canonical URLs are absolute (e.g., `https://abstractapartment.com/...`), not relative.
