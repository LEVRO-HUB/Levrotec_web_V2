import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import { PAGE_SEO } from '../seo/seo.js'
import useReveal from '../hooks/useReveal.js'
import { CAREER_DEPARTMENTS } from '../data/careers.js'
import './Careers.css'

export default function Careers() {
  const scopeRef = useReveal()
  const openRoleCount = CAREER_DEPARTMENTS.reduce((sum, dept) => sum + dept.roles.length, 0)

  return (
    <div ref={scopeRef}>
      <SEO {...PAGE_SEO.careers} />
      <section className="section careers-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Careers at Levrotec</span>
            <h1 className="h1">Help Us Move <span className="text-gradient">Beyond Possible.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Built for freshers and early-career professionals (0–2 years) who want real
              ownership from day one. Currently hiring across {CAREER_DEPARTMENTS.length} departments
              — {openRoleCount} open roles.
            </p>
          </div>
        </div>
      </section>

      <section className="section careers-list-section">
        <div className="container">
          {CAREER_DEPARTMENTS.map((dept, deptIndex) => (
            <div className={`career-department reveal reveal-delay-${(deptIndex % 3) + 1}`} key={dept.id}>
              <div className="career-department-head">
                <h2 className="h3">{dept.name}</h2>
                <p>{dept.description}</p>
              </div>

              <div className="career-roles">
                {dept.roles.map((role) => (
                  <div className="career-role-card" key={role.id}>
                    <div className="career-role-top">
                      <h3>{role.title}</h3>
                      <div className="career-role-meta">
                        <span><FiMapPin /> {role.location}</span>
                        <span><FiClock /> {role.type}</span>
                      </div>
                    </div>
                    <p className="career-role-summary">{role.summary}</p>
                    <ul className="career-role-criteria">
                      {role.criteria.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                    <Link to={`/contact?topic=job&role=${encodeURIComponent(role.title)}`} className="btn btn-outline btn-sm">
                      Apply now <FiArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card glass reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Don't See Your Role?</span>
            <h2 className="h2">We're always looking for exceptional people.</h2>
            <p className="lead">Send us your background — we'll reach out when the right seat opens up.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '10px' }}>
              <Link to="/contact?topic=job" className="btn btn-primary">Get in touch <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
