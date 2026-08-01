import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useReveal from '../hooks/useReveal.js'
import { SERVICES } from '../data/services.js'
import './Services.css'

export default function Services() {
  useDocumentTitle('Services')
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <section className="section services-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What We Do</span>
            <h1 className="h1">Built for What's Possible.</h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Six focused capabilities, one accountable team — from first prototype to
              the infrastructure that keeps you running at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container services-list">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1
            return (
              <article className={`service-row ${reversed ? 'reversed' : ''} reveal`} key={service.id}>
                <div className="service-row-visual">
                  <div className="service-row-icon"><Icon /></div>
                </div>
                <div className="service-row-copy">
                  <span className="pill">{`0${i + 1}`}</span>
                  <h2 className="h3">{service.title}</h2>
                  <p className="service-row-tagline">{service.tagline}</p>
                  <p className="service-row-desc">{service.description}</p>
                  <ul className="service-capabilities">
                    {service.capabilities.map((cap) => (
                      <li key={cap}><FiCheck /> {cap}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Powering the Next Move</span>
            <h2 className="h2">Not sure which service fits? <span className="text-gradient">Let's figure it out together.</span></h2>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '28px' }}>
              <Link to="/contact" className="btn btn-primary">Talk to our team <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
