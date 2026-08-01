import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import './NotFound.css'

export default function NotFound() {
  useDocumentTitle('Page Not Found')

  return (
    <section className="section not-found">
      <div className="container not-found-inner">
        <span className="eyebrow">404</span>
        <h1 className="h1">This path doesn't exist. <span className="text-gradient">Yet.</span></h1>
        <p className="lead">Let's get you back to building momentum.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
