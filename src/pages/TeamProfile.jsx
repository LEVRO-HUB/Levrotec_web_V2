import { Link, useParams } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import NotFound from './NotFound.jsx'
import { TEAM, COMPANY, getMemberBySlug } from '../data/team.js'
import { personSeo, personH1, personStatement, personImageAlt, personPath, personBreadcrumbs } from '../seo/seo.js'
import './TeamProfile.css'

export default function TeamProfile() {
  const { slug } = useParams()
  const member = getMemberBySlug(slug)
  const scopeRef = useReveal([slug])

  if (!member) return <NotFound />

  const crumbs = personBreadcrumbs(member)
  const others = TEAM.filter((m) => m.id !== member.id)

  return (
    <div ref={scopeRef} key={slug}>
      <SEO {...personSeo(member)} />

      <section className="section profile-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.path}>
                  {i < crumbs.length - 1 ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="profile-grid reveal">
            <div className="profile-photo">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={personImageAlt(member)}
                  width={member.photoWidth}
                  height={member.photoHeight}
                  style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                  fetchpriority="high"
                  decoding="async"
                />
              ) : (
                <span aria-hidden="true">{member.initials}</span>
              )}
            </div>
            <div>
              <span className="eyebrow">{member.roleAbbr} · {COMPANY.name}</span>
              <h1 className="h1">{personH1(member)}</h1>
              <p className="lead">
                {personStatement(member)} {COMPANY.name} is {COMPANY.descriptor}, and {member.name.split(' ')[0]} is
                part of the <Link to="/about#team" className="inline-link">{COMPANY.name} leadership team</Link>.
              </p>
              <div className="profile-focus">
                {member.focus.map((f) => <span className="pill" key={f}>{f}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section profile-body">
        <div className="container profile-narrow">
          <div className="reveal">
            <h2 className="h3">About {member.name}</h2>
            <p>{member.bio}</p>
            {member.alsoLeads && (
              <p>
                Alongside the {member.roleAbbr} role, {member.name.split(' ')[0]} serves as {member.alsoLeads} at {COMPANY.name}.
              </p>
            )}
          </div>

          <div className="reveal">
            <h2 className="h3">Meet the rest of the team</h2>
            <ul className="profile-links">
              {others.map((m) => (
                <li key={m.id}>
                  <Link to={personPath(m)}>{m.name}, {m.roleAbbr}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="profile-cta reveal">
            <Link to="/contact" className="btn btn-primary">Talk to {COMPANY.name} <FiArrowRight /></Link>
            <Link to="/services" className="btn btn-outline">Explore our services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
