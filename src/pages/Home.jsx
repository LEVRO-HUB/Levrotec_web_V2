import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useReveal from '../hooks/useReveal.js'
import TechOrbit from '../components/TechOrbit.jsx'
import { SERVICES } from '../data/services.js'
import { TECH_CATEGORIES } from '../data/techstack.js'
import { CASE_STUDIES } from '../data/caseStudies.js'
import './Home.css'

const TICKER_TAGLINES = [
  'Built for What\'s Possible.',
  'Powering the Next Move.',
  'Where Ideas Gain Momentum.',
  'Creating Tomorrow\'s Advantage.',
  'Beyond Innovation. Into Impact.',
  'Move Beyond Possible.',
  'The Future, In Motion.',
  'Built to Move the World Forward.',
]

const STATS = [
  { value: '6', label: 'Founding operators building alongside every client' },
  { value: '13+', label: 'Core technologies fluent across our stack' },
  { value: '100%', label: 'Engagements paired with a dedicated technical lead' },
]

export default function Home() {
  useDocumentTitle('Home')
  const scopeRef = useReveal()
  const flagshipCase = CASE_STUDIES[0]

  return (
    <div ref={scopeRef}>
      {/* ---------------- Hero ---------------- */}
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Software Engineering Studio</span>
            <h1 className="h1">
              Turn Possibility<br />Into <span className="text-gradient">Progress.</span>
            </h1>
            <p className="lead hero-lead">
              Levrotec partners with founders and product teams to design, build, and scale
              SaaS platforms, MVPs, and digital products — engineered for what's next.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a project <FiArrowRight />
              </Link>
              <Link to="/case-studies" className="btn btn-outline">
                View our work
              </Link>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <TechOrbit />
          </div>
        </div>
      </section>

      {/* ---------------- Tagline ticker ---------------- */}
      <section className="ticker-band">
        <div className="ticker-track">
          {[...TICKER_TAGLINES, ...TICKER_TAGLINES].map((line, i) => (
            <span className="ticker-item" key={i}>
              {line} <span className="ticker-dot">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- Services teaser ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2 className="h2">Built to Move the World Forward — <span className="text-gradient">one product at a time.</span></h2>
          </div>

          <div className="grid services-teaser-grid">
            {SERVICES.slice(0, 6).map((service, i) => {
              const Icon = service.icon
              return (
                <div className={`card service-teaser-card reveal reveal-delay-${(i % 3) + 1}`} key={service.id}>
                  <div className="service-teaser-icon"><Icon /></div>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                </div>
              )
            })}
          </div>

          <div className="section-cta reveal">
            <Link to="/services" className="btn btn-text">
              Explore all services <FiArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Flagship case study ---------------- */}
      <section className="section case-teaser-section">
        <div className="container">
          <div className="case-teaser card reveal">
            <div className="case-teaser-copy">
              <span className="eyebrow">Flagship Product</span>
              <h2 className="h2">Where Ideas Gain Momentum.</h2>
              <p className="lead">
                Meet <strong>{flagshipCase.name}</strong> — an Employability Intelligence Platform
                that maps real workplace readiness instead of static test scores.
              </p>
              <ul className="case-teaser-metrics">
                {flagshipCase.metrics.map((m) => (
                  <li key={m.label}><span className="pill">{m.label}</span></li>
                ))}
              </ul>
              <Link to="/case-studies" className="btn btn-primary">
                Read the case study <FiArrowUpRight />
              </Link>
            </div>
            <div className="case-teaser-visual" aria-hidden="true">
              <div className="case-teaser-orb orb-sky" />
              <div className="case-teaser-orb orb-yellow" />
              <span className="case-teaser-mark">Z</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats / momentum ---------------- */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Creating Tomorrow's Advantage</span>
            <h2 className="h2">A studio built like a co-founder, not a vendor.</h2>
          </div>
          <div className="grid stats-grid">
            {STATS.map((stat, i) => (
              <div className={`stat-card reveal reveal-delay-${i + 1}`} key={stat.label}>
                <span className="stat-value text-gradient">{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Tech strip ---------------- */}
      <section className="section tech-strip-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Stack</span>
            <h2 className="h2">The Future, In Motion.</h2>
          </div>
          <div className="tech-strip reveal reveal-delay-1">
            {TECH_CATEGORIES.flatMap((cat) => cat.items).map(({ name, Icon, color }) => (
              <div className="tech-strip-item" key={name} style={{ '--icon-color': color }}>
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link to="/technology" className="btn btn-text">
              See the full technology matrix <FiArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta card reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Progress Starts Here</span>
            <h2 className="h2">Beyond Innovation. <span className="text-gradient">Into Impact.</span></h2>
            <p className="lead">Tell us what you're building — we'll tell you how fast we can help you ship it.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Book a call</Link>
              <Link to="/contact" className="btn btn-outline">Send a message</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
