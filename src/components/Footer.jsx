import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/blog', label: 'Blog' },
      { to: '/careers', label: 'Careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'SaaS Development' },
      { to: '/services', label: 'MVP Development' },
      { to: '/services', label: 'DevOps Services' },
      { to: '/services', label: 'IT Consulting' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/technology', label: 'Technology' },
      { to: '/contact', label: 'Book a Call' },
      { to: '/contact', label: 'Send a Message' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">V</span>
            <span className="brand-name">Levrotec</span>
          </Link>
          <p className="footer-tagline">Turn Possibility Into Progress.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X"><FiTwitter /></a>
            <a href="https://github.com/LEVRO-HUB" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          </div>
        </div>

        <div className="footer-columns">
          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-cta">
          <h4>Have a project in mind?</h4>
          <p>Let's build something that moves the needle.</p>
          <Link to="/contact" className="btn btn-outline btn-sm">
            Start a conversation <FiArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="divider" />

      <div className="container footer-bottom">
        <span>© {year} Levrotec. All rights reserved.</span>
        <span className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </span>
      </div>
    </footer>
  )
}
