---
name: unslop-all
description: Orchestrates an automated end-to-end "Unslop" refactoring sweep across every page in the project. Scans all Next.js routes, audits AI slop indicators, executes the 9-pass anti-slop protocol page-by-page, verifies with TypeScript and production builds, and reports progress. Triggered by /unslop-all.
---

# /unslop-all – Automated Project-Wide UI/UX Unslopping Sweep

This skill systematically audits and refactors every Next.js page in the project to eliminate AI-generated "slop" (sterile white boxes, pill badge salad, arbitrary sparkle tropes, bento box-in-a-box slop, unaligned numbers, and low-contrast text) based on the **Anti-Slop 20 Optimization Rules** and the **9-Pass Protocol**.

---

## Execution Protocol

### Step 1: Scan & Inventory
Run the automated project scanner:
- If `scripts/unslop-scan.mjs` exists in the workspace: `node scripts/unslop-scan.mjs`
- Otherwise, run the bundled global scanner directly: `node ~/.gemini/config/skills/unslop-all/scripts/unslop-scan.mjs` (or copy it into `scripts/unslop-scan.mjs` in the project).
This generates the real-time inventory of all routes in `app/`, identifying which routes are already clean and which have active slop flags.

### Step 2: Route Priority Queue
Group and process pages in order of slop severity:
1. **High Priority (Heavy Slop):** Pages with multiple pill badges, sterile white containers, and nested bento boxes.
2. **Medium Priority (Targeted Polish):** Pages with missing tabular numerals, trailing punctuation, or harsh borders.
3. **Low Priority / Verification:** Pages with minor typography / `text-balance` flags.

---

### Step 3: Per-Page 9-Pass Refactoring Loop
For each route in the queue, execute the unslop protocol:

1. **Audit:** Identify specific slop signs (pill badges, white box containers, arbitrary icons, missing tabular numbers).
2. **5-Line Direction:**
   - **Product:** Specific purpose and audience.
   - **Character:** 2–3 authentic descriptive words (e.g., `tactile, grounded, calm`).
   - **World:** Material palette (e.g., Bulgarian Revival timber, stone, wool *cherga*, `#5B7A3A`, `#F5F2ED`).
   - **Moments:** One or two rich elements carrying the visual weight.
   - **Signature:** Mathematical radius ($R_{inner} = R_{outer} - P$) and tabular metrics.
3. **Execute the 9 Passes in Order:**
   - *1. Spacing:* 4px rhythm, clean grouping, eliminate arbitrary offsets.
   - *2. Color:* Ditch stark `#FFFFFF` containers; blend warm `bg-white/70 backdrop-blur-xs` with `#F5F2ED` canvas.
   - *3. Icons:* Replace decorative `<Sparkles>` with purposeful semantic icons.
   - *4. Copy:* Remove trailing periods from titles/labels; preserve multi-language support where applicable.
   - *5. Type:* Apply `text-balance` to headlines, `text-pretty` to body text, and `tabular-nums` to numbers/metrics.
   - *6. Layout:* Eliminate "box-in-a-box" card nesting; compose full-bleed calm heroes.
   - *7. Details:* Mathematical radius nesting ($R_{inner} = R_{outer} - P$).
   - *8. Visuals:* Authentic high-resolution property photography with calm gradient scrims.
   - *9. Motion:* Calm transitions (`scale-[1.02]`), eliminate looping/bouncy animations.

---

### Step 4: Verification Gate
After each page edit:
1. Run `npx tsc --noEmit` to confirm zero TypeScript errors.
2. Run production build (`npm run build`) to confirm all static routes generate cleanly.
3. Re-run scanner (`node scripts/unslop-scan.mjs` or bundled global scanner) to verify all routes reach `🟢 CLEAN`.

