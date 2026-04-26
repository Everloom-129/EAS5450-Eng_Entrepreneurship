import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { posts, postsCN, ALL_TAGS } from './posts'
import { useLang } from './LangContext'
import type { PostMeta } from './types'
import eentLogo from '../image/eas545_logo.png'
import tomTonyImg from '../image/Tom_with_Tony.jpg'

// ── Cover art gradients per category — Penn Engineering palette ───────────────
export const GRADIENTS: Record<string, string> = {
  Innovation: 'linear-gradient(140deg, #011F5B 0%, #0A3272 55%, #1A4E9A 100%)',
  Strategy:   'linear-gradient(140deg, #012A4A 0%, #013A63 60%, #01497C 100%)',
  Product:    'linear-gradient(140deg, #004D40 0%, #00695C 55%, #00897B 100%)',
  Finance:    'linear-gradient(140deg, #7F0000 0%, #990000 55%, #B71C1C 100%)',
  Leadership: 'linear-gradient(140deg, #1A0533 0%, #3D0E7F 55%, #5B21B6 100%)',
  Guest:      'linear-gradient(140deg, #5C0018 0%, #990000 55%, #C62828 100%)',
  Ethics:     'linear-gradient(140deg, #0D1A2D 0%, #1A3A5C 55%, #011F5B 100%)',
  IP:         'linear-gradient(140deg, #011F5B 0%, #003399 55%, #0047AB 100%)',
  Regulation: 'linear-gradient(140deg, #4A0000 0%, #7F0000 55%, #990000 100%)',
}

// ── Tag badge colors — Penn Blue / Penn Red palette ───────────────────────────
export const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Innovation:  { bg: '#E3EAF5', text: '#011F5B' },
  Strategy:    { bg: '#D6E8F7', text: '#013A63' },
  Product:     { bg: '#D1FAE5', text: '#065F46' },
  Finance:     { bg: '#FEE2E2', text: '#7F0000' },
  Leadership:  { bg: '#EDE9FE', text: '#4C1D95' },
  Guest:       { bg: '#FEE2E2', text: '#990000' },
  Ethics:      { bg: '#E8EDF5', text: '#1A3A5C' },
  IP:          { bg: '#DBE9F7', text: '#003399' },
  Regulation:  { bg: '#FEE2E2', text: '#990000' },
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
  const { lang, toggleLang } = useLang()

  const allPosts = lang === 'cn' ? postsCN : posts
  const filtered = activeTag === 'All' ? allPosts : allPosts.filter(p => p.tag === activeTag)

  return (
    <div className="page-home">
      {/* ── Publication header ── */}
      <header className="pub-header">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          <span className="lang-sep">|</span>
          <span className={lang === 'cn' ? 'lang-active' : ''}>中文</span>
        </button>
        <div className="pub-header-inner">
          <img src={eentLogo} alt="EAS 5450 Logo" className="pub-logo" />
          <p className="pub-eyebrow">EAS 5450 &nbsp;·&nbsp; Penn Engineering</p>
          <h1 className="pub-title">Engineering<br />Entrepreneurship</h1>
          <p className="pub-byline">
            A course blog by{' '}
            <a href="https://everloom-129.github.io/" target="_blank" rel="noopener noreferrer">
              <img src={tomTonyImg} alt="Jie Wang" className="pub-avatar" />
              <strong>Jie Wang</strong>
            </a>
            {' '}— case studies and notes on innovation,
            strategy, finance, and leadership from 30 lectures.
          </p>
          <div className="pub-stats">
            <span>{posts.length} issues</span>
            <span className="dot">·</span>
            <span>Spring 2025</span>
            <span className="dot">·</span>
            <a
              href="https://www.linkedin.com/in/jie-wang-8ab93a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-link"
            >
              LinkedIn
            </a>
            <span className="dot">·</span>
            <a
              href="https://eent.seas.upenn.edu/curriculum/eas-545/"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-link"
            >
              Course Page
            </a>
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
        <p className="footer-links">
          <a href="https://everloom-129.github.io/" target="_blank" rel="noopener noreferrer">Jie Wang</a>
          &nbsp;·&nbsp;
          <a href="https://www.linkedin.com/in/jie-wang-8ab93a266/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          &nbsp;·&nbsp;
          <a href="https://eent.seas.upenn.edu/curriculum/eas-545/" target="_blank" rel="noopener noreferrer">EAS 5450</a>
          &nbsp;·&nbsp;
          <a href="https://eent.seas.upenn.edu/" target="_blank" rel="noopener noreferrer">Penn Eng Entrepreneurship</a>
          &nbsp;·&nbsp;
          <a href="https://www.seas.upenn.edu/" target="_blank" rel="noopener noreferrer">Penn Engineering</a>
          &nbsp;·&nbsp;
          <a
            href="https://github.com/Everloom-129/EAS5450-Eng_Entrepreneurship"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="disclaimer">
          <strong>© 2025 Tony (Jie) Wang.</strong> Original writing (lecture notes, blog posts, essays) is licensed under{' '}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>.
          Free to share and adapt for non-commercial, educational purposes with attribution.
          <br /><br />
          <strong>Not affiliated with, endorsed by, or representative of the University of Pennsylvania or any course instructor.</strong>
          {' '}Maintained for personal study and knowledge sharing only.
          <br /><br />
          <strong>Third-party materials</strong> (assignment prompts, Harvard/Stanford cases, reading materials) are the intellectual property of their
          respective copyright holders and are included solely for personal academic reference.
          They may not be redistributed or reproduced without permission from the original publishers.
        </div>
      </footer>
    </div>
  )
}

export { CoverArt }
