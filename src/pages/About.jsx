import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useReveal from '../hooks/useReveal.js'
import { TEAM } from '../data/team.js'
import './About.css'

const VALUES = [
  { title: 'Ownership over output', desc: 'We treat every engagement like our own product — accountable for outcomes, not just deliverables.' },
  { title: 'Momentum over perfection', desc: 'We ship, learn, and iterate — progress compounds faster than a perfect plan sitting on a shelf.' },
  { title: 'Craft at every layer', desc: 'From architecture to animation, the details are the product — we sweat them so you don\'t have to.' },
]

export default function About() {
  useDocumentTitle('About Us')
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <section className="section about-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>About Levrotec</span>
            <h1 className="h1">Six operators. <span className="text-gradient">One mission.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Levrotec was founded by six people who got tired of watching great ideas
              stall in translation between vision and execution. So we built the studio
              that closes that gap.
            </p>
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

      <section className="section team-section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The Founding Team</span>
            <h2 className="h2">Built to Move the World Forward.</h2>
          </div>

          <div className="grid team-grid">
            {TEAM.map((member, i) => (
              <div className={`team-card reveal reveal-delay-${(i % 3) + 1}`} key={member.id}>
                <div className="team-photo">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
                <div className="team-focus">
                  {member.focus.map((f) => <span className="pill" key={f}>{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card reveal">
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
