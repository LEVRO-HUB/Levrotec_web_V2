import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import { CASE_STUDIES } from '../data/caseStudies.js'
import './CaseStudies.css'

function FeaturedCaseStudy({ study }) {
  return (
    <article className="featured-case reveal" id={study.slug}>
      <div className="featured-case-header">
        <div className="featured-case-mark" aria-hidden="true">{study.mark ?? study.name.charAt(0)}</div>
        <div>
          <span className="pill">{study.category}</span>
          <h2 className="h2">{study.name}</h2>
          <p className="featured-case-tagline">{study.tagline}</p>
        </div>
      </div>

      <p className="lead featured-case-summary">{study.summary}</p>

      <div className="featured-case-narrative">
        <div>
          <h3 className="h3">The Problem</h3>
          <p>{study.problem}</p>
        </div>
        <div>
          <h3 className="h3">The Solution</h3>
          <p>{study.solution}</p>
        </div>
      </div>

      <div className="featured-case-metrics">
        <h3 className="h3">Diagnostic Intelligence Metrics</h3>
        <div className="metrics-grid">
          {study.metrics.map((m) => (
            <div className="metric-card" key={m.label}>
              <span className="metric-label">{m.label}</span>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-case-results">
        {study.results.map((r) => (
          <div className="result-block" key={r.label}>
            <span className="result-value text-gradient">{r.value}</span>
            <p>{r.label}</p>
          </div>
        ))}
      </div>

      <div className="featured-case-footer">
        <div className="featured-case-stack">
          {study.stack.map((s) => <span className="pill yellow" key={s}>{s}</span>)}
        </div>
        <blockquote className="featured-case-quote">
          “{study.quote.text}”
          <cite>— {study.quote.author}</cite>
        </blockquote>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  const scopeRef = useReveal()
  const featured = CASE_STUDIES.filter((s) => s.featured)
  const others = CASE_STUDIES.filter((s) => !s.featured)

  return (
    <div ref={scopeRef}>
      <SEO
        title="Case Studies"
        description="See how Levrotec built Zaptude (Employability Intelligence Platform), Tabilo (Anna University timetable automation software), and HireFlow (recruitment assessment platform)."
        keywords="Educational Assessment Software India, Timetable Automation Software Anna University, Zaptude, Tabilo, HireFlow, Levrotec case studies"
        path="/case-studies"
      />
      <section className="section case-studies-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Case Studies</span>
            <h1 className="h1">Where Ideas <span className="text-gradient">Gain Momentum.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Three flagship products, built end-to-end with our clients. Here's a look at the work.
            </p>
          </div>

          <div className="case-jump-nav reveal">
            {featured.map((study) => (
              <a href={`#${study.slug}`} key={study.slug} className="case-jump-chip">
                <span className="case-jump-mark">{study.mark}</span>
                {study.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="featured-case-stream">
            {featured.map((study) => <FeaturedCaseStudy study={study} key={study.id} />)}
          </div>

          <div className="section-head reveal" style={{ marginTop: '80px' }}>
            <span className="eyebrow">More Stories</span>
            <h2 className="h2">Growing our portfolio, one launch at a time.</h2>
          </div>

          <div className="grid case-grid">
            {others.map((study) => (
              <div className="card case-card reveal" key={study.id}>
                <span className="pill">{study.category}</span>
                <h3>{study.name}</h3>
                <p>{study.tagline}</p>
              </div>
            ))}
            <div className="case-card-placeholder reveal">
              <span className="pill yellow">Coming Soon</span>
              <p>The next case study lands here — built with the same rigor as Zaptude, Tabilo, and HireFlow.</p>
              <Link to="/contact" className="btn btn-text">
                Become our next story <FiArrowRight className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
