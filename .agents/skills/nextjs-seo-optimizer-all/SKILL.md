---
name: nextjs-seo-optimizer-all
description: Orchestrates an automated end-to-end technical SEO sweep across every page in the Next.js project. Audits metadata, Open Graph, JSON-LD, heading hierarchy, image alt tags, and LCP image priorities. Triggered by /nextjs-seo-optimizer-all or /seo-all.
---
# /nextjs-seo-optimizer-all – Automated Project-Wide SEO Sweep

Orchestrates a comprehensive technical SEO refactoring sweep across all Next.js App Router routes in the project.

## Execution Protocol

1. **Scan Inventory:**
   - If `scripts/seo-scan.mjs` exists in the workspace: `npm run seo:scan` (or `node scripts/seo-scan.mjs`).
   - Otherwise, run the bundled global scanner directly: `node ~/.gemini/config/skills/nextjs-seo-optimizer-all/scripts/seo-scan.mjs` (or copy it into `scripts/seo-scan.mjs`).
2. **Batch Priority Pipeline:**
   - Routes missing dedicated `metadata` (create `layout.tsx` or export `metadata` from Server Components).
   - Routes missing or having multiple `<h1>` tags (enforce a single semantic `<h1>` per view).
   - Routes missing Schema.org JSON-LD (inject `<script type="application/ld+json">`).
   - Routes with un-prioritized hero LCP images (add `priority={true}`).
3. **Verification:**
   - `npx tsc --noEmit`
   - `npm run seo:scan` (or bundled scanner, target: 100% clean)
   - `npm run build`
