# Website Improvement Log

---

## 2026-04-25 — Iteration 1

**Color redesign (Penn Engineering palette)**
- `src/index.css`: replaced Substack indigo accent (#4F46E5) with Penn Blue (#011F5B) and Penn Red (#990000) throughout. Added --penn-light (#82AFD3) for nav link colors on dark backgrounds.
- `src/Home.tsx`: updated all GRADIENTS (card covers) and TAG_COLORS (category badges) to Penn Blue / Penn Red variants per category.
- Publication header, sticky post nav, and site footer all switched to Penn Blue background with white text — matching EENT visual style.
- `CLAUDE.md`: added "Website Design System" section documenting colors, images, and how to extend categories.

**Images added**
- `image/eas545_logo.png` → imported in `src/Home.tsx`, shown in pub-header (CSS-inverted to white).
- `image/Tom_with_Tony.jpg` → shown as circular avatar next to author name in pub-header byline.

**Disclaimer added**
- Footer now includes a `.disclaimer` block with CC BY-NC-SA 4.0 license, non-affiliation notice, and third-party materials notice (sourced from README.md).

**Blog content improvements from Notes/**
Files improved this iteration:

| Blog post | Source note | Insight added |
|---|---|---|
| `lec01-dna-of-innovations.md` | `0121_case study-HP.md` | HP Next Bench Approach, no-me-too rule, MBWA as information system — added to My Take |
| `lec02-winning-strategy.md` | `0123_From Device to Complete Products.md` | Porter barriers-to-entry (IP, distribution, economies of scale, differentiation, switching costs) added to Q1 |
| `lec02-winning-strategy.md` | `0204_Early_Adopter&Majority.md` | Visionary vs Pragmatist psychological profile and why their mutual mistrust creates the Chasm — added to My Take |
| `lec06-customer-discovery.md` | `0206-Benefit&Status Quo.md` | Perceived losses taxonomy (monetary, learning curve, uncertainty, brand loyalty, psychological affinity, network viability) added to Q1 |
| `lec06-customer-discovery.md` | `0206-Benefit&Status Quo.md` | Conjoint analysis methodology note: don't list multiple prices to same respondent; run sensitivity tests — added to My Take |
| `lec06-customer-discovery.md` | `0218_how much could AI compensate user study.md` | AI simulation (SimUser, USimAgent) as customer discovery complement — added to My Take. Personal/Chinese content stripped. |

**Items flagged for review**
See `todo_for_tony.md` — 4 items flagged: SimUser/USimAgent citation accuracy, truncated Vermeer note, "visual bias" heading without content, Early Majority typo in note.

---

## 2026-04-25 — Iteration 2

**Notes surveyed**
- `Notes/0128_IP/` explored: contains only Harvard PDFs (no text notes to extract). All Notes files now exhausted.

**Blog posts reviewed for quality** (17 posts read, all found high quality)
lec03, lec05, lec07, lec08, lec09, lec11, lec14, lec17, lec19, lec22b, lec23, lec24, lec25, lec26, lec27, lec28a

**Improvements made**

| Blog post | Change | Reason |
|---|---|---|
| `lec27-managers-leaders-schumpeter.md` | Q3 rephrased: "Where do you place yourself?" → "How should an engineering entrepreneur self-assess their leadership orientation?" | Personal class-assignment Q&A doesn't serve a public audience |
| `lec25-leveraging-culture-scaling-n12.md` | Added N12 product name "NanoStitch" to Fact 2 | Specific detail makes the case study more concrete |

**Assignment essays reviewed**
- hw3, hw5, hw6, hw7, hw8, hw25, hw27 examined
- hw7 and hw8 identified as AI-generated (NotebookLM output) — flagged in `todo_for_tony.md`, not used as content sources
- Remaining essays (hw9, hw14): unread, saved for next iteration

**Unreviewed blog posts** (for iteration 3): lec10, lec12, lec13, lec15, lec16, lec18, lec20, lec21, lec22

**Items flagged for review**
See `todo_for_tony.md` — 3 new items added: AI-generated essay files (hw7/hw8), empty IP notes folder, lec27 Q3 rephrasing notice.

---

## 2026-04-25 — Iteration 3

**Blog posts reviewed for quality** (10 posts read, all found high quality — no changes needed)

| Post | Verdict |
|---|---|
| `lec00-introduction.md` | Clean introduction, public-ready |
| `lec10-*.md` | High quality, no improvements needed |
| `lec12-*.md` | High quality, no improvements needed |
| `lec13-*.md` | High quality, no improvements needed |
| `lec15-*.md` | High quality, no improvements needed |
| `lec16-*.md` | High quality, no improvements needed |
| `lec18-*.md` | High quality, no improvements needed |
| `lec20-*.md` | High quality, no improvements needed |
| `lec21-*.md` | High quality, no improvements needed |
| `lec22-*.md` | High quality, no improvements needed |

**Blog/index.md audited** — Complete and accurate. All 30 posts listed with correct links and theme groupings. No changes needed.

**Assignment essays reviewed**
- hw9 and hw14 read and identified as AI-generated (NotebookLM-style output) — flagged in `todo_for_tony.md`
- These essays were NOT used as blog content sources

**Loop status: Complete**
- All 30 blog posts reviewed across 3 iterations
- All Notes text files exhausted (used in iteration 1)
- No further content sources remain to process
- Blog quality is consistently high throughout the site

**Items flagged for review**
See `todo_for_tony.md` — 3 new items: hw9 partially AI-generated, hw14 AI-generated, all-clear note on blog quality.

---
