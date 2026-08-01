import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useReveal from '../hooks/useReveal.js'
import { TECH_CATEGORIES } from '../data/techstack.js'
import './Technology.css'

export default function Technology() {
  useDocumentTitle('Technology')
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <section className="section technology-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Our Technology</span>
            <h1 className="h1">The Future, <span className="text-gradient">In Motion.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              A modern, battle-tested stack chosen for reliability at scale —
              not resume-driven trends.
            </p>
          </div>
        </div>
      </section>

      <section className="section tech-matrix-section">
        <div className="container">
          <div className="tech-matrix">
            {TECH_CATEGORIES.map((cat, i) => (
              <div className={`tech-category reveal reveal-delay-${i + 1}`} key={cat.id}>
                <div className="tech-category-head">
                  <span className="tech-category-index">{`0${i + 1}`}</span>
                  <div>
                    <h2 className="h3">{cat.title}</h2>
                    <p>{cat.description}</p>
                  </div>
                </div>
                <div className="tech-category-items">
                  {cat.items.map(({ name, Icon, color }) => (
                    <div className="tech-item" key={name} style={{ '--icon-color': color }}>
                      <div className="tech-item-icon"><Icon /></div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta card reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Creating Tomorrow's Advantage</span>
            <h2 className="h2">Have a stack constraint? We'll work with it.</h2>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '28px' }}>
              <Link to="/contact" className="btn btn-primary">Talk to an engineer <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
