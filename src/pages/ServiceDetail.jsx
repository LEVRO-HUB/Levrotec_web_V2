import { Link, useParams, Navigate } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import { getServiceBySlug } from '../data/services.js'
import { getCaseStudyBySlug } from '../data/caseStudies.js'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const scopeRef = useReveal([slug])

  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon
  const tiedCase = service.caseStudySlug ? getCaseStudyBySlug(service.caseStudySlug) : null

  return (
    <div ref={scopeRef} key={slug}>
      <SEO
        title={service.title}
        description={service.description}
        keywords={`${service.title}, ${service.techStack.join(', ')}, Levrotec, Chennai`}
        path={`/services/${service.slug}`}
      />
      <section className="section service-detail-hero">
        <div className="container service-detail-hero-inner">
          <div className="reveal">
            <span className="eyebrow">Service</span>
            <h1 className="h1">{service.title}</h1>
            <p className="lead service-detail-tagline">{service.tagline}</p>
            <p className="service-detail-description">{service.description}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a call <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-outline">
                All services
              </Link>
            </div>
          </div>
          <div className="service-detail-icon reveal reveal-delay-1" aria-hidden="true">
            <Icon />
          </div>
        </div>
      </section>

      <section className="section service-detail-body">
        <div className="container service-detail-grid">
          <div className="reveal">
            <h2 className="h3">Key Benefits</h2>
            <ul className="service-detail-benefits">
              {service.benefits.map((b) => (
                <li key={b}><FiCheck /> {b}</li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 className="h3">Technology Stack</h2>
            <div className="service-detail-stack">
              {service.techStack.map((tech) => <span className="pill yellow" key={tech}>{tech}</span>)}
            </div>

            {tiedCase && (
              <div className="service-detail-case-tie">
                <span className="eyebrow">Proof It Works</span>
                <h3>{tiedCase.name}</h3>
                <p>{tiedCase.tagline}</p>
                <Link to={`/case-studies#${tiedCase.slug}`} className="btn-text">
                  Read the case study <FiArrowUpRight className="arrow" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card glass reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Powering the Next Move</span>
            <h2 className="h2">Ready to talk {service.title.toLowerCase()}?</h2>
            <p className="lead">Book a call and we'll scope it out together — no obligation.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '10px' }}>
              <Link to="/contact" className="btn btn-primary">Book a Call <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
