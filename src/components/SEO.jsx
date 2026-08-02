import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Levrotec'
const SITE_URL = 'https://www.levrotec.com'
const DEFAULT_DESCRIPTION = 'Levrotec is a Chennai-based product-driven software company engineering SaaS platforms, MVPs, and digital solutions for real business and educational challenges across Tamil Nadu, India, and globally.'
const DEFAULT_KEYWORDS = 'Levrotec, SaaS Development Company Chennai, Custom Software Development Tamil Nadu, Educational Assessment Software India, Timetable Automation Software Anna University'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`

export default function SEO({ title, description, keywords, path = '/', image }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Turn Possibility Into Progress`
  const desc = description || DEFAULT_DESCRIPTION
  const kw = keywords || DEFAULT_KEYWORDS
  const url = `${SITE_URL}${path}`
  const img = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
