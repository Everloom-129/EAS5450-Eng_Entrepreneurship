import type { PostMeta } from './types'

// Auto-discover all lecture markdown files at build time.
// Add a new lec*.md to /Blog/ and it appears here automatically.
const rawModules = import.meta.glob('../Blog/lec*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const rawModulesCN = import.meta.glob('../Blog_CN/lec*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// ── Tag mapping ───────────────────────────────────────────────────────────────
const TAG_MAP: Record<string, string> = {
  lec00: 'Innovation', lec01: 'Innovation',
  lec02: 'Strategy',
  lec03: 'IP',
  lec04: 'Product', lec05: 'Product', lec06: 'Product', lec07: 'Product',
  lec08: 'Strategy',
  lec09: 'Finance', lec10: 'Strategy',
  lec11: 'Finance', lec12: 'Finance', lec13: 'Finance', lec14: 'Finance',
  lec15: 'Innovation',
  lec16: 'Guest', lec17: 'Innovation', lec18: 'Guest',
  lec19: 'Finance', lec20: 'Guest', lec21: 'Regulation',
  lec22: 'Guest', lec22b: 'Guest',
  lec23: 'Leadership', lec24: 'Leadership', lec25: 'Leadership',
  lec26: 'Ethics', lec27: 'Leadership', lec28a: 'Finance',
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function sortKey(slug: string): number {
  const m = slug.match(/^lec(\d+)([a-z]?)/)
  if (!m) return 9999
  return parseInt(m[1]) * 100 + (m[2] ? m[2].charCodeAt(0) - 96 : 0)
}

function extractNum(slug: string): string {
  return slug.match(/^lec(\d+[a-z]*)/)?.[1] ?? '?'
}

function parse(path: string, content: string): PostMeta {
  const slug = path.split('/').pop()!.replace('.md', '')
  const num = extractNum(slug)

  // Title: strip "Lec N:" (EN) or "第N讲：" (CN) prefix for clean card display
  const rawTitle = content.match(/^#\s+(.+)$/m)?.[1] ?? slug
  const title = rawTitle
    .replace(/^Lec\s+[\w]+[:\s–—]+\s*/i, '')
    .replace(/^第\d+\w*讲[：:]\s*/, '')
    .trim()

  // Date (first standalone *..* line)
  const date = content.match(/^\*([^*\n]+)\*\s*$/m)?.[1]?.trim() ?? ''

  // Opening blockquote
  const quote = content.match(/^>\s*(.+)$/m)?.[1]?.trim() ?? ''

  // Excerpt: first substantive paragraph under "The Big Picture" (EN) or "全局视角" (CN)
  let excerpt = ''
  const bpSection = content.split(/##\s+(?:The Big Picture|全局视角)/i)[1] ?? ''
  for (const line of bpSection.split('\n')) {
    const clean = line.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').trim()
    if (clean.length > 60 && !clean.startsWith('#') && !clean.startsWith('>') && !clean.startsWith('-')) {
      excerpt = clean.slice(0, 190)
      break
    }
  }
  if (!excerpt) excerpt = quote

  // Reading time (avg 220 wpm)
  const readingTime = Math.max(1, Math.round(content.split(/\s+/).length / 220))

  // Tag
  const prefix = slug.match(/^lec\d+[a-z]*/)?.[0] ?? ''
  const tag = TAG_MAP[prefix] ?? 'Innovation'

  return { slug, num, title, date, tag, readingTime, excerpt, quote, content }
}

// ── Exported data ─────────────────────────────────────────────────────────────
export const posts: PostMeta[] = Object.entries(rawModules)
  .map(([path, content]) => parse(path, content))
  .sort((a, b) => sortKey(a.slug) - sortKey(b.slug))

export const postsBySlug: Record<string, PostMeta> = Object.fromEntries(
  posts.map(p => [p.slug, p])
)

export const postsCN: PostMeta[] = Object.entries(rawModulesCN)
  .map(([path, content]) => parse(path, content))
  .sort((a, b) => sortKey(a.slug) - sortKey(b.slug))

export const postsBySluugCN: Record<string, PostMeta> = Object.fromEntries(
  postsCN.map(p => [p.slug, p])
)

export const ALL_TAGS = ['All', ...Array.from(new Set(posts.map(p => p.tag))).sort()]
