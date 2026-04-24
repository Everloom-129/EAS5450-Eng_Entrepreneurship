import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts, postsBySlug } from './posts'
import { CoverArt, GRADIENTS, TAG_COLORS } from './Home'

// Strip the h1 title and date line — both shown in the hero
function prepareContent(raw: string): string {
  return raw
    .replace(/^#\s+.+\n?/m, '')
    .replace(/^\*[^*\n]+\*\s*\n?/m, '')
    .trimStart()
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = postsBySlug[slug ?? '']

  if (!post) {
    return (
      <div className="not-found">
        <p>Post not found.</p>
        <button onClick={() => navigate('/')}>← Back</button>
      </div>
    )
  }

  const idx = posts.findIndex(p => p.slug === slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  const gradient = GRADIENTS[post.tag] ?? GRADIENTS.Innovation
  const tagColors = TAG_COLORS[post.tag] ?? TAG_COLORS.Innovation
  const content = prepareContent(post.content)

  return (
    <div className="page-post">
      {/* ── Top nav ── */}
      <nav className="post-nav">
        <button className="nav-back" onClick={() => navigate('/')}>
          &#8592; Engineering Entrepreneurship
        </button>
        <span className="nav-lec">Lec {post.num}</span>
      </nav>

      {/* ── Hero banner ── */}
      <div className="post-hero" style={{ background: gradient }}>
        <div className="hero-dots" />
        <div className="post-hero-inner">
          <span
            className="hero-tag"
            style={{ background: tagColors.bg, color: tagColors.text }}
          >
            {post.tag}
          </span>
          <h1 className="hero-title">{post.title}</h1>
          {post.quote && <p className="hero-quote">"{post.quote}"</p>}
          <div className="hero-meta">
            <span>Jie Wang</span>
            {post.date && <><span className="dot">·</span><span>{post.date}</span></>}
            <span className="dot">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <span className="hero-num" aria-hidden="true">{post.num}</span>
      </div>

      {/* ── Article content ── */}
      <div className="post-content-wrapper">
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>

        {/* ── Prev / Next navigation ── */}
        <nav className="post-pagination">
          {prev ? (
            <button className="pag-btn pag-prev" onClick={() => navigate(`/post/${prev.slug}`)}>
              <span className="pag-dir">← Previous</span>
              <span className="pag-title">{prev.title}</span>
            </button>
          ) : <div />}
          {next ? (
            <button className="pag-btn pag-next" onClick={() => navigate(`/post/${next.slug}`)}>
              <span className="pag-dir">Next →</span>
              <span className="pag-title">{next.title}</span>
            </button>
          ) : <div />}
        </nav>
      </div>
    </div>
  )
}
