import { FiArrowUpRight } from 'react-icons/fi'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useReveal from '../hooks/useReveal.js'
import { BLOG_POSTS } from '../data/blog.js'
import './Blog.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Blog() {
  useDocumentTitle('Blog')
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <section className="section blog-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Thinking Out Loud</span>
            <h1 className="h1">Progress Starts <span className="text-gradient">Here.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Notes from the field — how we ship, scale, and think about building
              modern software.
            </p>
          </div>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          <div className="grid blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <article className={`card blog-card reveal reveal-delay-${i + 1}`} key={post.id}>
                <div className="blog-card-top">
                  <span className="pill">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div>
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{formatDate(post.date)}</span>
                  </div>
                  <button type="button" className="btn-text" aria-label={`Read ${post.title}`}>
                    <FiArrowUpRight className="arrow" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
