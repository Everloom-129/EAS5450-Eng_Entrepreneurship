import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { posts, ALL_TAGS } from './posts'
import type { PostMeta } from './types'

// ── Cover art gradients per category ─────────────────────────────────────────
export const GRADIENTS: Record<string, string> = {
  Innovation: 'linear-gradient(140deg, #0f0c29 0%, #302b63 55%, #24243e 100%)',
  Strategy:   'linear-gradient(140deg, #0d2137 0%, #1b4f72 60%, #1a6fa0 100%)',
  Product:    'linear-gradient(140deg, #004d40 0%, #00695c 55%, #00897b 100%)',
  Finance:    'linear-gradient(140deg, #4a2c00 0%, #7f5200 55%, #a06800 100%)',
  Leadership: 'linear-gradient(140deg, #1a0533 0%, #4a0e8f 55%, #6d28d9 100%)',
  Guest:      'linear-gradient(140deg, #3d0000 0%, #8b0000 55%, #c0392b 100%)',
  Ethics:     'linear-gradient(140deg, #1c1c2e 0%, #2d3561 55%, #364f6b 100%)',
  IP:         'linear-gradient(140deg, #003366 0%, #004e98 55%, #006994 100%)',
  Regulation: 'linear-gradient(140deg, #5c0000 0%, #8b0000 55%, #a93226 100%)',
}

// ── Tag badge colors ──────────────────────────────────────────────────────────
export const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Innovation:  { bg: '#dbeafe', text: '#1d4ed8' },
  Strategy:    { bg: '#ede9fe', text: '#6d28d9' },
  Product:     { bg: '#d1fae5', text: '#065f46' },
  Finance:     { bg: '#fef3c7', text: '#92400e' },
  Leadership:  { bg: '#f3e8ff', text: '#7e22ce' },
  Guest:       { bg: '#ffe4e6', text: '#be123c' },
  Ethics:      { bg: '#f1f5f9', text: '#475569' },
  IP:          { bg: '#ccfbf1', text: '#0f766e' },
  Regulation:  { bg: '#ffedd5', text: '#9a3412' },
}

// ── Cover art component ───────────────────────────────────────────────────────
function CoverArt({ tag, num, size = 'card' }: { tag: string; num: string; size?: 'card' | 'hero' }) {
  const gradient = GRADIENTS[tag] ?? GRADIENTS.Innovation
  const colors = TAG_COLORS[tag] ?? TAG_COLORS.Innovation
  return (
    <div
      className={`cover cover-${size}`}
      style={{ background: gradient }}
    >
      <span
        className="cover-category"
        style={{ background: colors.bg, color: colors.text }}
      >
        {tag}
      </span>
      <span className="cover-num">{num}</span>
    </div>
  )
}

// ── Post card ─────────────────────────────────────────────────────────────────
function PostCard({ post }: { post: PostMeta }) {
  const navigate = useNavigate()
  return (
    <article className="card" onClick={() => navigate(`/post/${post.slug}`)}>
      <CoverArt tag={post.tag} num={post.num} />
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        {post.excerpt && <p className="card-excerpt">{post.excerpt}</p>}
        <div className="card-meta">
          {post.date && <span>{post.date}</span>}
          {post.date && <span className="dot">·</span>}
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </article>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag)

  return (
    <div className="page-home">
      {/* ── Publication header ── */}
      <header className="pub-header">
        <div className="pub-header-inner">
          <p className="pub-eyebrow">EAS 5450 &nbsp;·&nbsp; Penn Engineering</p>
          <h1 className="pub-title">Engineering<br />Entrepreneurship</h1>
          <p className="pub-byline">
            A course blog by <strong>Jie Wang</strong> — case studies and notes on innovation,
            strategy, finance, and leadership from 30 lectures.
          </p>
          <div className="pub-stats">
            <span>{posts.length} issues</span>
            <span className="dot">·</span>
            <span>Spring 2025</span>
          </div>
        </div>
      </header>

      {/* ── Post grid ── */}
      <main className="home-main">
        <div className="container">
          {/* Filter bar */}
          <div className="filter-bar">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                className={`filter-btn${activeTag === tag ? ' active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="results-count">
            {filtered.length} post{filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="post-grid">
            {filtered.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <p>
          EAS 5450 · Engineering Entrepreneurship · University of Pennsylvania
          &nbsp;·&nbsp;
          <a
            href="https://github.com/Everloom-129/EAS5450-Eng_Entrepreneurship"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export { CoverArt }
