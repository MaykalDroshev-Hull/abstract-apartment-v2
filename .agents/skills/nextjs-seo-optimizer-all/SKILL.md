---
name: nextjs-seo-optimizer-all
description: Orchestrates an automated end-to-end technical SEO sweep across every page in the Next.js project. Audits metadata, Open Graph, JSON-LD, heading hierarchy, image alt tags, and LCP image priorities. Triggered by /nextjs-seo-optimizer-all or /seo-all.
---
# /nextjs-seo-optimizer-all – Automated Project-Wide SEO Sweep

Orchestrates a comprehensive technical SEO refactoring sweep across all Next.js App Router routes in the project.

## Execution Protocol

1. **Scan Inventory:**
   ```bash
   npm run seo:scan
   ```
2. **Batch Priority Pipeline:**
   - Routes missing dedicated `metadata` (create `layout.tsx` using `buildPageMetadata`).
   - Routes missing or having multiple `<h1>` tags (enforce single semantic `<h1>`).
   - Routes missing Schema.org JSON-LD (inject `<StructuredData />`).
   - Routes with un-prioritized hero LCP images (add `priority={true}`).
3. **Verification:**
   - `npx tsc --noEmit`
   - `npm run seo:scan` (target: 25/25 clean)
   - `npm run build`
