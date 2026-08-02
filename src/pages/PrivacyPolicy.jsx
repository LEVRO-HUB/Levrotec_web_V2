import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import { NOTIFY_EMAILS, PHONE_DISPLAY, PHONE_TEL } from '../data/contact.js'
import './PrivacyPolicy.css'

const LAST_UPDATED = 'August 2, 2026'

export default function PrivacyPolicy() {
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <SEO
        title="Privacy Policy"
        description="Levrotec's Privacy Policy — how we collect, use, and protect your data, covering GDPR and the Indian Information Technology Act, 2000."
        keywords="Levrotec privacy policy, GDPR compliance India, IT Act 2000 data protection"
        path="/privacy-policy"
      />

      <section className="section privacy-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Legal</span>
            <h1 className="h1">Privacy <span className="text-gradient">Policy.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Last updated: {LAST_UPDATED}. This policy explains what we collect, why,
              and the rights you have over your data — in plain language.
            </p>
          </div>
        </div>
      </section>

      <section className="section privacy-body">
        <div className="container privacy-content">
          <article className="privacy-section reveal">
            <h2 className="h3">1. Who We Are</h2>
            <p>
              Levrotec ("Levrotec", "we", "us", "our") is a Chennai-based, product-driven
              software company. This policy applies to visitors of our website and anyone
              who submits information through our contact tools, including the "Book a
              Call" and "Send a Message" forms.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">2. Information We Collect</h2>
            <p>Depending on how you interact with our site, we may collect:</p>
            <ul className="privacy-list">
              <li><strong>Contact details</strong> you provide voluntarily — full name, email address, and phone number — when using the "Book a Call" or "Send a Message" forms.</li>
              <li><strong>Project information</strong> you share in the "How can we help you?" message field.</li>
              <li><strong>NDA preference</strong> — the Yes/No radio selection indicating whether you require a non-disclosure agreement before discussing your project. This selection is used solely to prepare the correct paperwork before our call and is not used for any other purpose.</li>
              <li><strong>Scheduling details</strong> — your requested date and time when booking a call.</li>
              <li><strong>Basic usage data</strong> such as browser type and general device information, collected automatically by standard web infrastructure.</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">3. How Form Submissions Actually Work</h2>
            <p>
              Our contact widget does not submit your data to a Levrotec-run server or
              database. When you click "Submit" or "Confirm Booking," your browser opens
              a pre-filled email addressed to our founding team's inboxes (listed in
              Section 6) using your own email client. <strong>We do not store, log, or
              retain your form input anywhere on our infrastructure</strong> — the only
              record that exists is the email you choose to send, which then lives in
              your own outbox and our inboxes, governed by your and our respective email
              providers' privacy practices.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">4. How We Use Your Information</h2>
            <p>Information you send us is used only to:</p>
            <ul className="privacy-list">
              <li>Respond to your enquiry, scheduling request, or project brief.</li>
              <li>Prepare an NDA in advance of a call, if you've indicated you need one.</li>
              <li>Follow up about a project, role, or partnership you've expressed interest in.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">5. Data Storage & Security</h2>
            <p>
              Because form submissions route through your own email client rather than a
              Levrotec database, most of the traditional risks of centralized data
              storage (breach of a hosted database, for example) do not apply to this
              flow. Any information you separately email or share with us during a
              project engagement is stored under industry-standard access controls and
              retained only as long as needed for the purpose it was collected, or as
              required by law.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">6. Your Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area, the UK, or another
              jurisdiction with similar protections, you have the right to:
            </p>
            <ul className="privacy-list">
              <li>Request access to personal data we hold about you.</li>
              <li>Request correction or deletion of that data.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at any of the addresses in
              Section 9 — since we don't retain a database of submissions, most requests
              can be resolved simply by us deleting the relevant email thread on request.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">7. Indian Information Technology Act, 2000 Compliance</h2>
            <p>
              As an Indian company, Levrotec handles personal information in accordance
              with the Information Technology Act, 2000 and the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive Personal Data
              or Information) Rules, 2011. We do not collect "sensitive personal data"
              (such as financial information, health records, or biometric data) through
              our website forms. Any sensitive information exchanged during a client
              engagement is handled under a separate, signed agreement with appropriate
              safeguards.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">8. Cookies & Third-Party Services</h2>
            <p>
              Our site loads fonts from Google Fonts and may link out to third-party
              services — WhatsApp, LinkedIn, and email providers — each governed by their
              own privacy policies. We do not currently use tracking or advertising
              cookies. If that changes, this policy will be updated accordingly.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">9. Contact Us About Privacy</h2>
            <p>
              Questions about this policy or your data can be directed to any of our
              founding team's inboxes, or by phone/WhatsApp:
            </p>
            <ul className="privacy-list privacy-contacts">
              {NOTIFY_EMAILS.map((email) => (
                <li key={email}><a href={`mailto:${email}`}>{email}</a></li>
              ))}
            </ul>
            <p>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> — available by phone and WhatsApp.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2 className="h3">10. Changes to This Policy</h2>
            <p>
              We may update this policy as our tools and practices evolve. Material
              changes will update the "Last updated" date at the top of this page.
              Continued use of our site after changes take effect constitutes acceptance
              of the revised policy.
            </p>
          </article>

          <div className="privacy-back reveal">
            <Link to="/contact" className="btn btn-outline btn-sm">Back to Contact</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
