import SEO from '../components/SEO.jsx'
import useReveal from '../hooks/useReveal.js'
import ContactModule from '../components/ContactModule.jsx'
import './Contact.css'

export default function Contact() {
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <SEO
        title="Contact Us"
        description="Book a call or send a message to Levrotec — a Chennai-based SaaS development company. Reach us by phone, WhatsApp, or our contact form."
        keywords="contact Levrotec, book a call, SaaS development enquiry Chennai"
        path="/contact"
      />
      <section className="section contact-hero">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's Talk</span>
            <h1 className="h1">Powering the Next Move <span className="text-gradient">starts with a conversation.</span></h1>
            <p className="lead" style={{ margin: '18px auto 0' }}>
              Whether you want to hop on a call or write out your idea first, we're ready when you are.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <ContactModule />
          </div>
        </div>
      </section>
    </div>
  )
}
