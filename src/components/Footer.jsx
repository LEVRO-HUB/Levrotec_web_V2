import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiLinkedin, FiTwitter, FiGithub, FiPhone, FiMessageCircle, FiMail } from 'react-icons/fi'
import LevrotecLogo from './LevrotecLogo.jsx'
import { PHONE_TEL, WHATSAPP_URL, LINKEDIN_URL, buildNotifyMailto } from '../data/contact.js'
import './Footer.css'

const EMAIL_MAILTO = buildNotifyMailto('Enquiry from Website', ['Hi Levrotec team,', '', ''])

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
      { to: '/services/saas-development', label: 'SaaS Development' },
      { to: '/services/mvp-development', label: 'MVP Development' },
      { to: '/services/devops-services', label: 'DevOps Services' },
      { to: '/services/digital-marketing', label: 'Digital Marketing' },
      { to: '/services/it-consulting', label: 'IT Consulting' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/technology', label: 'Technology' },
      { to: '/contact', label: 'Book a Call' },
      { to: '/contact', label: 'Send a Message' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
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
            <LevrotecLogo size={34} className="brand-mark" />
            <span className="brand-name">Levrotec</span>
          </Link>
          <p className="footer-tagline">Turn Possibility Into Progress.</p>
          <div className="footer-contact-buttons">
            <a href={PHONE_TEL} className="footer-contact-btn">
              <FiPhone /> Call Us
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="footer-contact-btn">
              <FiMessageCircle /> Message on WhatsApp
            </a>
            <a href={EMAIL_MAILTO} className="footer-contact-btn">
              <FiMail /> Email Us
            </a>
          </div>
          <div className="footer-social">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
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
          <Link to="/privacy-policy">Privacy Policy</Link>
          <a href="#terms">Terms of Service</a>
        </span>
      </div>
    </footer>
  )
}
