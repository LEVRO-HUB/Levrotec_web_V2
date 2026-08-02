import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiLinkedin } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import VerticalSlider from '../components/VerticalSlider.jsx'
import { TEAM, GALLERY_PHOTOS } from '../data/team.js'
import './About.css'

const VALUES = [
  { title: 'Ownership over output', desc: 'We treat every engagement like our own product — accountable for outcomes, not just deliverables.' },
  { title: 'Momentum over perfection', desc: 'We ship, learn, and iterate — progress compounds faster than a perfect plan sitting on a shelf.' },
  { title: 'Craft at every layer', desc: 'From architecture to animation, the details are the product — we sweat them so you don\'t have to.' },
]

const STORY_VISION_MISSION = [
  {
    label: 'The Levrotec Story',
    heading: 'Where it started',
    body: 'Levrotec is a Chennai-based, product-driven software company built by six people who got tired of watching great ideas stall in translation between vision and execution. We set out to solve real business and educational challenges — not run another generic dev shop.',
  },
  {
    label: 'Our Vision',
    heading: "Where we're going",
    body: 'Transforming complex operational workflows into progress — building intelligent, accessible software that makes high-tech genuinely usable for the businesses and institutions that need it most.',
  },
  {
    label: 'Our Mission',
    heading: "What we're building",
    body: 'Building high-impact SaaS products — like Zaptude and Tabilo — that deliver measurable performance gains, not just features. Every product we ship is judged by the operational complexity it removes.',
  },
]

export default function About() {
  const scopeRef = useReveal()
  const [flipped, setFlipped] = useState(() => new Set())

  const toggleFlip = (id) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div ref={scopeRef}>
      <SEO
        title="About Us"
        description="Levrotec is a Chennai-based product-driven software company founded by six operators building smart, scalable digital solutions for real business and educational challenges."
        keywords="Levrotec founders, Chennai software company, Tamil Nadu tech startup, product-driven software company"
        path="/about"
      />
      <section className="section about-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>About Levrotec</span>
            <h1 className="h1">Six operators. <span className="text-gradient">One mission.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Chennai-based, product-driven, and built by six people who got tired of
              watching great ideas stall in translation between vision and execution.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Curved photo frame gallery ---------------- */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-row">
            {GALLERY_PHOTOS.map((g, i) => (
              <div className={`gallery-frame ${i % 2 === 1 ? 'alt' : ''} reveal reveal-delay-${(i % 5) + 1}`} key={g.id}>
                <img src={g.photo} alt={g.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Story / Vision / Mission slider ---------------- */}
      <section className="section svm-section">
        <div className="container">
          <div className="svm-slider-wrap reveal">
            <VerticalSlider
              ariaLabel="The Levrotec Story, Vision, and Mission"
              autoPlayMs={6000}
              items={STORY_VISION_MISSION.map((s) => (
                <div className="svm-card" key={s.label}>
                  <span className="pill">{s.label}</span>
                  <h3>{s.heading}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            />
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="grid values-grid">
            {VALUES.map((v, i) => (
              <div className={`value-card reveal reveal-delay-${i + 1}`} key={v.title}>
                <span className="value-index">{`0${i + 1}`}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Co-founder flip cards ---------------- */}
      <section className="section team-section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The Founding Team</span>
            <h2 className="h2">Built to Move the World Forward.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Tap or hover a card to meet the person behind the title.</p>
          </div>

          <div className="grid team-grid">
            {TEAM.map((member, i) => {
              const isFlipped = flipped.has(member.id)
              return (
                <div
                  className={`flip-card reveal reveal-delay-${(i % 3) + 1} ${isFlipped ? 'is-flipped' : ''}`}
                  key={member.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${member.name}, ${member.role}. Activate to flip for bio.`}
                  onClick={() => toggleFlip(member.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleFlip(member.id)
                    }
                  }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="team-photo">
                        {member.photo ? <img src={member.photo} alt={member.name} /> : <span>{member.initials}</span>}
                      </div>
                      <h3>{member.name}</h3>
                      <span className="team-role">{member.role}</span>
                      <div className="flip-card-accent" />
                    </div>
                    <div className="flip-card-back">
                      <h3>{member.name}</h3>
                      <p className="flip-back-bio">{member.bio}</p>
                      <div className="team-focus">
                        {member.focus.map((f) => <span className="pill" key={f}>{f}</span>)}
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-sm flip-linkedin-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiLinkedin /> LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card glass reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Progress Starts Here</span>
            <h2 className="h2">Want to build with us?</h2>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '28px' }}>
              <Link to="/contact" className="btn btn-primary">Get in touch <FiArrowRight /></Link>
              <Link to="/careers" className="btn btn-outline">View open roles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
