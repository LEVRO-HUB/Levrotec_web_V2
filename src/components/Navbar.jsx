import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiChevronDown, FiPhone, FiMessageCircle, FiLinkedin } from 'react-icons/fi'
import LevrotecLogo from './LevrotecLogo.jsx'
import { SERVICES } from '../data/services.js'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, LINKEDIN_URL } from '../data/contact.js'
import './Navbar.css'

const LINKS = [
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className={`navbar-root ${open ? 'is-open' : ''}`}>
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <div className="utility-bar-contact">
            <a href={PHONE_TEL}><FiPhone /> {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FiMessageCircle /> WhatsApp</a>
          </div>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="Levrotec on LinkedIn" className="utility-bar-linkedin">
            <FiLinkedin />
          </a>
        </div>
      </div>

      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <LevrotecLogo size={34} className="brand-mark" />
          <span className="brand-name">Levrotec</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <div className="nav-dropdown" ref={dropdownRef}>
            <NavLink
              to="/services"
              className={({ isActive }) => `nav-link nav-dropdown-trigger ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                if (servicesOpen) return
                e.preventDefault()
                setServicesOpen(true)
              }}
            >
              Services <FiChevronDown className={`chevron ${servicesOpen ? 'is-open' : ''}`} />
            </NavLink>
            <div className={`nav-dropdown-panel ${servicesOpen ? 'is-open' : ''}`}>
              {SERVICES.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="nav-dropdown-item"
                  onClick={() => setServicesOpen(false)}
                >
                  {service.title}
                </NavLink>
              ))}
              <NavLink to="/services" className="nav-dropdown-item nav-dropdown-all" onClick={() => setServicesOpen(false)}>
                View all services
              </NavLink>
            </div>
          </div>

          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">Let's Talk</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>

      <div className="nav-mobile">
        <nav className="nav-mobile-links" aria-label="Mobile">
          <button
            type="button"
            className={`nav-mobile-link nav-mobile-accordion ${mobileServicesOpen ? 'is-open' : ''}`}
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services <FiChevronDown className={`chevron ${mobileServicesOpen ? 'is-open' : ''}`} />
          </button>
          <div className={`nav-mobile-submenu ${mobileServicesOpen ? 'is-open' : ''}`}>
            {SERVICES.map((service) => (
              <NavLink
                key={service.slug}
                to={`/services/${service.slug}`}
                className="nav-mobile-sublink"
                onClick={() => setOpen(false)}
              >
                {service.title}
              </NavLink>
            ))}
          </div>

          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="nav-mobile-contact">
            <a href={PHONE_TEL}><FiPhone /> {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FiMessageCircle /> WhatsApp Us</a>
          </div>

          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let's Talk
          </Link>
        </nav>
      </div>
    </div>
  )
}
