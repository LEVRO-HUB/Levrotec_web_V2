import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiTarget, FiTrendingUp, FiCpu, FiUsers } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import TechOrbit from '../components/TechOrbit.jsx'
import VerticalSlider from '../components/VerticalSlider.jsx'
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

const ADVANTAGE_CARDS = [
  { value: '6', label: 'Founding Operators', desc: 'Every engagement is backed by direct oversight from our founding team — not a rotating account manager.' },
  { value: '19+', label: 'Core Technologies', desc: 'A fluent, modern stack spanning frontend, backend, data, cloud, and AI — chosen for reliability, not resume trends.' },
  { value: '3', label: 'Flagship Products', desc: 'Zaptude, Tabilo, and HireFlow — real platforms shipped end-to-end, not just prototypes.' },
  { value: '100%', label: 'Founder-Led Delivery', desc: 'Every project is paired with a senior technical lead who stays accountable from kickoff to launch.' },
  { value: '0 → 1', label: 'Idea to Production', desc: 'We specialize in taking ambiguous problems and shipping a working product fast, then scaling what works.' },
]

const WHY_LEVROTEC = [
  {
    icon: FiTarget,
    title: 'Product-Engineered Precision',
    desc: 'Custom software architecture designed around your real operational workflows — not generic templates.',
  },
  {
    icon: FiTrendingUp,
    title: 'Rapid MVP to Enterprise Scaling',
    desc: 'Agile delivery cycles backed by modern, cloud-native tech stacks that grow with you from day one to scale.',
  },
  {
    icon: FiCpu,
    title: 'Data & AI-First Strategy',
    desc: 'Intelligent automation and actionable analytics integrated into your core workflows, not bolted on after.',
  },
  {
    icon: FiUsers,
    title: 'Dedicated Founder-Led Support',
    desc: 'Direct oversight from senior technology leaders and co-founders on every single engagement.',
  },
]

export default function Home() {
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <SEO
        description="Levrotec is a Chennai-based SaaS development company building custom software, MVPs, and educational assessment platforms for businesses across Tamil Nadu, India, and globally."
        keywords="Levrotec, SaaS Development Company Chennai, Custom Software Development Tamil Nadu, Educational Assessment Software India, Timetable Automation Software Anna University, MVP Development"
        path="/"
      />
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

      {/* ---------------- What We Do: sticky stacked scroll ---------------- */}
      <section className="section whatwedo-section">
        <div className="container whatwedo-grid">
          <div className="whatwedo-sticky reveal">
            <span className="eyebrow">What We Do</span>
            <h2 className="h2">Built to Move the World Forward — <span className="text-gradient">one product at a time.</span></h2>
            <p className="lead">
              Seven focused capabilities, one accountable team. Scroll to see how we cover
              the full lifecycle, from first prototype to the infrastructure that keeps you
              running at scale.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore all services <FiArrowRight />
            </Link>
          </div>

          <div className="whatwedo-stack">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Link to={`/services/${service.slug}`} className="whatwedo-card reveal" key={service.slug}>
                  <span className="whatwedo-card-index">{`0${i + 1}`}</span>
                  <div className="whatwedo-card-icon"><Icon /></div>
                  <div className="whatwedo-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.tagline}</p>
                  </div>
                  <FiArrowRight className="whatwedo-card-arrow" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Why Levrotec ---------------- */}
      <section className="section why-section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Why Levrotec</span>
            <h2 className="h2">Why Choose <span className="text-gradient">Levrotec.</span></h2>
          </div>
          <div className="grid why-grid">
            {WHY_LEVROTEC.map((item, i) => {
              const Icon = item.icon
              return (
                <div className={`why-card reveal reveal-delay-${i + 1}`} key={item.title}>
                  <div className="why-card-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Flagship case studies ---------------- */}
      <section className="section case-teaser-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Flagship Products</span>
            <h2 className="h2">Where Ideas Gain Momentum.</h2>
          </div>

          <div className="grid case-showcase-grid">
            {CASE_STUDIES.map((study, i) => (
              <Link
                to={`/case-studies#${study.slug}`}
                className={`case-showcase-card reveal reveal-delay-${i + 1}`}
                key={study.slug}
              >
                <div className="case-showcase-visual" aria-hidden="true">
                  <div className="case-teaser-orb orb-sky" />
                  <div className="case-teaser-orb orb-yellow" />
                  <span className="case-showcase-mark">{study.mark}</span>
                </div>
                <span className="pill">{study.category}</span>
                <h3>{study.name}</h3>
                <p>{study.tagline}</p>
                <span className="btn-text case-showcase-link">
                  Read the case study <FiArrowUpRight className="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Creating Tomorrow's Advantage: vertical carousel ---------------- */}
      <section className="section advantage-section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Creating Tomorrow's Advantage</span>
            <h2 className="h2">A studio built like a co-founder, not a vendor.</h2>
          </div>
          <div className="advantage-slider-wrap reveal">
            <VerticalSlider
              ariaLabel="Creating Tomorrow's Advantage metrics"
              autoPlayMs={5000}
              items={ADVANTAGE_CARDS.map((card) => (
                <div className="advantage-card" key={card.label}>
                  <span className="advantage-value text-gradient">{card.value}</span>
                  <h3>{card.label}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            />
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
          <div className="final-cta card glass reveal">
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
