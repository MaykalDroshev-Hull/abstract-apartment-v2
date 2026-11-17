---
name: ai-crawler-optimizer-all
description: Orchestrates an automated end-to-end AEO/GEO sweep across every public page in the project for AI answer engines (ChatGPT, Perplexity, Gemini). Converts headings to question prompts, injects answer-first snippets, formats high-extraction tables/lists, and audits AI metadata. Triggered by /ai-crawler-optimizer-all or /ai-all.
---
# /ai-crawler-optimizer-all – Automated Project-Wide AEO / GEO Sweep

Orchestrates an automated Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) sweep across all public routes in the project.

## Execution Protocol

1. **Scan Inventory:**
   ```bash
   npm run ai:scan
   ```
2. **Batch Priority Pipeline:**
   - Routes missing natural-language question headings (`<h2>`/`<h3>` with `?`).
   - Routes missing immediate 40–60 word answer-first snippets.
   - Routes with dense continuous prose lacking high-extraction lists or data tables.
   - Routes missing semantic `<section>`/`<article>` containers or AI metadata (`ai:entity`, `aiSummary`).
3. **Verification:**
   - `npx tsc --noEmit`
   - `npm run ai:scan` (target: 100% clean)
   - `npm run build`
