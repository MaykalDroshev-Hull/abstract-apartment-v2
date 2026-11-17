---
name: ai-crawler-optimizer
description: Optimizes content and Next.js components for AI search engines (ChatGPT, Perplexity, Gemini) via AEO/GEO best practices. Supports single-page optimization (/ai-crawler-optimizer <path>) and whole-project sweeps (/ai-crawler-optimizer-all or -all).
---
# AI Crawler Optimizer (Single-Page & Project-Wide AEO / GEO)

## Summary
Audits and rewrites components to maximize visibility, extraction accuracy, and citation likelihood in AI answer engines (like ChatGPT, Perplexity, and Gemini). Supports both targeted single-page optimization and whole-project automated sweeps.

## When to Use
- **Single Page:** When the user asks to "optimize for AI search", "improve Perplexity visibility", "optimize for ChatGPT", or mentions AEO/GEO for a specific page.
- **Whole Project (-all):** When the user asks to "optimize the whole project for AI search", "run ai crawler optimizer -all", or invokes `/ai-crawler-optimizer-all` / `/ai-all`.

---

## Modes of Execution

### Mode A: Project-Wide Sweep (`-all`)
Triggered by: `/ai-crawler-optimizer-all`, `/ai-all`, or `"optimize for AI search -all"`.

1. **Scan Inventory:** Run `npm run ai:scan` (or `node scripts/ai-crawler-scan.mjs`).
2. **Prioritize Routes:** Order by missing question headings, unstructured continuous prose, or missing semantic `<section>`/`<article>` tags.
3. **Batch Refactor:**
   - Convert primary section headings into natural-language user questions (`<h2>`/`<h3>` with `?`).
   - Format immediate answer-first snippets (40–60 words) under question headings.
   - Convert dense paragraphs into high-extraction tables, lists (`<ul>`, `<ol>`), or spec strips.
   - Wrap views in semantic `<section>` / `<article>` landmark containers.
4. **Verification Gate:**
   - Run `npx tsc --noEmit`
   - Run `npm run ai:scan` to verify all public routes reach `🟢 AEO / GEO OPTIMIZED` (100%).
   - Run `npm run build` to verify all static routes generate cleanly.

### Mode B: Single Page Optimization
Triggered by: `/ai-crawler-optimizer <page_path>` or `"optimize <page_path> for AI crawlers"`.

1. **Question-Led Headings:**
   - Rewrite `<h2>` and `<h3>` tags to be direct, natural language questions that users actually ask.
   - AI engines use these as prompts to match against conversational user queries.

2. **Answer-First Formatting:**
   - Immediately following a question-heading, provide a concise, direct answer in the first 40 to 60 words.
   - Lead with the core claim, acting as a highly citable snippet.

3. **High-Extraction Structures:**
   - Break dense paragraphs into `<ul>`, `<ol>`, or `<table>` formats.
   - Lists and tables deliver significantly higher extraction accuracy for AI agents compared to continuous prose.

4. **Clean Server-Side HTML:**
   - Verify the page uses clean semantic HTML (`<main>`, `<section>`, `<article>`).
   - Ensure critical content is not gated by client-side clicks or hidden state.

5. **AI Entity Metadata:**
   - Ensure the route inherits `ai:entity`, `ai:booking-url`, and `aiSummary` metadata tags.

---

## Gotchas
- Do not sacrifice human readability for AI formatting.
- Avoid keyword stuffing; AI models prioritize semantic clarity and direct answers over repetitive phrasing.
- Public routes benefit from AEO; exclude authenticated admin dashboards from AI crawler indexing.
