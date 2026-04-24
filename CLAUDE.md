# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a course documentation repository for **EAS5450 Engineering Entrepreneurship** at the University of Pennsylvania (Spring 2025), maintained by Tony (Jie) Wang. It contains personal notes, homework essays, and a blog series covering all 30 course lectures. The published site is at `https://everloom-129.github.io/EAS5450-Eng_Entrepreneurship/`.

There is no build system, no test suite, and no executable code. All work is markdown authoring and file organization.

## Content Structure

```
Assignments/hw{N}-{Topic}/   ← One folder per homework (hw1–hw27)
  #NN Topic.pdf              ← Assignment prompt from professor
  Harvard-*.pdf              ← Required reading materials
  essay.md / hw{N}.md        ← Tony's written responses
Blog/                        ← 30 blog posts (lec00–lec28a) + index.md
Notes/                       ← Raw lecture notes (dated MMDD_topic.md)
PPTs/                        ← Lecture slide decks (01–28B, read-only)
Reading/reading list.md      ← Course reading timeline
Exam/                        ← Final exam prep materials
index.md                     ← Site landing page
```

## Writing Style & Voice

All content is written in **Tony Wang's first-person voice**. Key characteristics:
- Engineering analogies for business concepts (RL, gradient descent, circuit design, systems architecture)
- Personal references: UPenn MSROBO, GRASP Lab, ZJU/PhiloCoffee Club, drone racing projects
- Bold key terms inline; bullet points for lists; direct, punchy sentences
- Occasional Chinese/academic references (ZJU motto, Schumpeter, Agassiz)
- Tone is confident and analytical, not hedged or corporate

## Blog Post Format (Unified)

Every post in `Blog/` follows this exact structure:

```markdown
# Lec N: Title — Subtitle

*Date*

> Hook quote (one sentence, italicized in blockquote)

## The Big Picture
[2–3 paragraphs framing why this lecture matters]

## 3 Facts That Hit Different
[3 specific, cited facts/data from the readings — not generic]

## Q&A
**Q: ...**
[Direct answer paragraph]

**Q: ...**
[Direct answer paragraph]

**Q: ...**
[Direct answer paragraph]

## My Take
[Personal reflection with engineering analogy and/or UPenn/lab reference]
```

`Blog/index.md` is the master table of contents — update it whenever a new post is added.

## Homework → Blog Numbering Mapping

The homework numbering (hw1–hw27) is offset from the PPT/blog numbering:

| PPT | Blog | Homework |
|-----|------|----------|
| 01 Introduction | lec00 | — |
| 02 Fish/DNA/Drucker/HP | lec01 | hw1 |
| 03 WinStrat/Vermeer | lec02 | hw2 |
| ... | ... | ... |
| 15 IPO/Facebook | lec14 | hw14 |
| 16 OpenInnov/PalmFin | lec15 | hw15 |
| 28A Personal Finance | lec28a | — |
| 28B MgrsLdrs | lec27 | hw27 |

Guest speaker lectures (PPTs 17, 19, 21, 23) map to hw16, hw18, hw20, hw22 respectively.

## Key Files to Know

- `index.md` — Site landing page; lists all assignments with HTML links (`.html` extension, not `.md`)
- `Blog/index.md` — Blog table of contents organized by theme
- `Reading/reading list.md` — Timeline of required readings by date
- `Assignments/Case Method Overview.pdf` — The essay format guideline applied to all case essays

## Content Conventions

- Essay files are named `essay.md` or `hw{N}.md` inside each assignment folder
- Assignment prompts are PDFs named `#{N} Topic.pdf` — don't modify these
- Harvard/Stanford case PDFs are copyrighted reading materials — never reproduce verbatim
- Images for a note go in a sibling `.assets/` folder (e.g., `hw1.assets/`)
- The site renders `.md` as `.html` — internal links in `index.md` use `.html` extensions
