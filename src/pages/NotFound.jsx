import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO.jsx'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="section not-found">
      <SEO title="Page Not Found" />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container not-found-inner">
        <span className="eyebrow">404</span>
        <h1 className="h1">This path doesn't exist. <span className="text-gradient">Yet.</span></h1>
        <p className="lead">Let's get you back to building momentum.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
