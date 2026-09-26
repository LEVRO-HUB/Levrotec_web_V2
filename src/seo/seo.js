// Single source of truth for SEO. Pure JS (no React, no asset imports) so it is
// used by the <SEO /> component at runtime AND by the build-time plugin in
// vite.config.js that prerenders <head> tags, sitemap.xml and robots.txt.
import { TEAM, COMPANY } from '../data/teamData.js'

export const SITE_NAME = 'Levrotec'
export const SITE_URL = 'https://www.levrotec.com'
export const DEFAULT_DESCRIPTION = 'Levrotec is a Chennai-based product-driven software company engineering SaaS platforms, MVPs, and digital solutions for real business and educational challenges across Tamil Nadu, India, and globally.'
export const DEFAULT_KEYWORDS = 'Levrotec, SaaS Development Company Chennai, Custom Software Development Tamil Nadu, Educational Assessment Software India, Timetable Automation Software Anna University'
export const DEFAULT_IMAGE = `${SITE_URL}/favicon.jpg`
export const ORG_ID = `${SITE_URL}/#organization`

export const absUrl = (path = '/') => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`)

const clip = (text, max = 160) => {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '')}…`
}

/* ------------------------------------------------------------------ */
/* Person helpers — everything derives from one team record.          */
/* ------------------------------------------------------------------ */

export const personPath = (m) => `/team/${m.slug}`
export const personUrl = (m) => absUrl(personPath(m))
const personId = (m) => `${personUrl(m)}#person`

/** "John Doe, Chief Financial Officer of Levrotec" — describes the photo and names the role. */
export const personImageAlt = (m) => `${m.name}, ${m.roleTitle} of ${COMPANY.name}`

/** "John Doe is the Chief Financial Officer (CFO) of Levrotec." */
export const personStatement = (m) =>
  `${m.name} is the ${m.roleTitle} (${m.roleAbbr}) of ${COMPANY.name}${m.alsoLeads ? ` and leads ${m.alsoLeads.replace(/ Lead$/, '').toLowerCase()}` : ''}.`

export const personTitle = (m) => `${m.name} – ${m.roleTitle} (${m.roleAbbr}) of ${COMPANY.name}`
export const personH1 = (m) => `${m.name} – ${m.roleTitle} (${m.roleAbbr})`

const personDescription = (m) =>
  clip(`${m.name} is the ${m.roleTitle} (${m.roleAbbr}) of ${COMPANY.name}, a Chennai-based software company. Focus: ${m.focus.join(' and ')}.`)

const breadcrumbNode = (url, trail) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: absUrl(t.path),
  })),
})

export const personBreadcrumbs = (m) => [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: m.name, path: personPath(m) },
]

export function personSeo(m) {
  const url = personUrl(m)
  const image = m.photo ? absUrl(m.photo) : null
  const person = {
    '@type': 'Person',
    '@id': personId(m),
    name: m.name,
    jobTitle: m.roleTitle,
    description: m.bio,
    url,
    worksFor: { '@type': 'Organization', '@id': ORG_ID, name: COMPANY.name, url: SITE_URL },
    knowsAbout: m.focus,
    mainEntityOfPage: { '@id': `${url}#profilepage` },
  }
  if (image) person.image = image
  if (m.sameAs?.length) person.sameAs = m.sameAs

  return {
    rawTitle: personTitle(m),
    description: personDescription(m),
    path: personPath(m),
    image,
    imageAlt: image ? personImageAlt(m) : null,
    imageWidth: m.photoWidth,
    imageHeight: m.photoHeight,
    ogType: 'profile',
    keywords: null,
    profile: { first_name: m.name.split(' ')[0], last_name: m.name.split(' ').slice(1).join(' ') || null },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': `${url}#profilepage`,
          url,
          name: personTitle(m),
          inLanguage: 'en',
          mainEntity: { '@id': personId(m) },
          breadcrumb: { '@id': `${url}#breadcrumb` },
        },
        person,
        breadcrumbNode(url, personBreadcrumbs(m)),
      ],
    },
  }
}

/** About / leadership page: ties the Organization to its people by @id. */
export function aboutSeo() {
  return {
    title: 'About Us',
    description: 'Levrotec is a Chennai-based product-driven software company founded by six operators building smart, scalable digital solutions for real business and educational challenges.',
    keywords: 'Levrotec founders, Chennai software company, Tamil Nadu tech startup, product-driven software company',
    path: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${absUrl('/about')}#aboutpage`,
          url: absUrl('/about'),
          name: `About ${COMPANY.name}`,
          about: { '@id': ORG_ID },
        },
        {
          '@type': 'Organization',
          '@id': ORG_ID,
          name: COMPANY.name,
          url: SITE_URL,
          founder: TEAM.map((m) => ({
            '@type': 'Person',
            '@id': personId(m),
            name: m.name,
            jobTitle: m.roleTitle,
            url: personUrl(m),
          })),
        },
      ],
    },
  }
}

/* ------------------------------------------------------------------ */
/* Resolution + head rendering (shared by React and the build plugin) */
/* ------------------------------------------------------------------ */

export function resolveSeo({ title, rawTitle, description, keywords, path = '/', image, imageAlt, imageWidth, imageHeight, ogType = 'website', robots, jsonLd, profile }) {
  return {
    title: rawTitle || (title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Turn Possibility Into Progress`),
    description: description || DEFAULT_DESCRIPTION,
    keywords: keywords === null ? null : keywords || DEFAULT_KEYWORDS,
    url: absUrl(path),
    image: image || DEFAULT_IMAGE,
    imageAlt: image ? imageAlt || null : `${SITE_NAME} logo`,
    imageWidth: image ? imageWidth || null : null,
    imageHeight: image ? imageHeight || null : null,
    ogType,
    robots: robots || null,
    jsonLd: jsonLd || null,
    profile: profile || null,
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
export const safeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')

/** Static <head> markup for prerendered pages (mirrors what <SEO /> renders). */
export function renderHeadTags(input) {
  const s = resolveSeo(input)
  const t = []
  t.push(`<meta name="description" content="${esc(s.description)}" />`)
  if (s.keywords) t.push(`<meta name="keywords" content="${esc(s.keywords)}" />`)
  if (s.robots) t.push(`<meta name="robots" content="${esc(s.robots)}" />`)
  t.push(`<link rel="canonical" href="${esc(s.url)}" />`)
  t.push(`<meta property="og:type" content="${s.ogType}" />`)
  t.push(`<meta property="og:site_name" content="${SITE_NAME}" />`)
  t.push(`<meta property="og:locale" content="en_IN" />`)
  t.push(`<meta property="og:title" content="${esc(s.title)}" />`)
  t.push(`<meta property="og:description" content="${esc(s.description)}" />`)
  t.push(`<meta property="og:url" content="${esc(s.url)}" />`)
  t.push(`<meta property="og:image" content="${esc(s.image)}" />`)
  if (s.imageAlt) t.push(`<meta property="og:image:alt" content="${esc(s.imageAlt)}" />`)
  if (s.imageWidth) t.push(`<meta property="og:image:width" content="${s.imageWidth}" />`)
  if (s.imageHeight) t.push(`<meta property="og:image:height" content="${s.imageHeight}" />`)
  if (s.profile?.first_name) t.push(`<meta property="profile:first_name" content="${esc(s.profile.first_name)}" />`)
  if (s.profile?.last_name) t.push(`<meta property="profile:last_name" content="${esc(s.profile.last_name)}" />`)
  t.push(`<meta name="twitter:card" content="summary_large_image" />`)
  t.push(`<meta name="twitter:title" content="${esc(s.title)}" />`)
  t.push(`<meta name="twitter:description" content="${esc(s.description)}" />`)
  t.push(`<meta name="twitter:image" content="${esc(s.image)}" />`)
  if (s.imageAlt) t.push(`<meta name="twitter:image:alt" content="${esc(s.imageAlt)}" />`)
  if (s.jsonLd) t.push(`<script type="application/ld+json">${safeJson(s.jsonLd)}</script>`)
  // data-shell: the runtime <SEO /> removes these once React mounts, so the
  // live DOM only ever holds one (Helmet-managed) copy of each tag.
  const tags = t.join('\n    ').replace(/<(meta|link|script) /g, '<$1 data-shell="1" ')
  return { title: s.title, tags }
}

/** Every indexable URL, for sitemap.xml. `extra` lets the build add routes from data files. */
export function sitemapEntries(staticPaths) {
  return [
    ...staticPaths.map((path) => ({ path })),
    ...TEAM.map((m) => ({ path: personPath(m), image: m.photo ? { url: absUrl(m.photo), title: personImageAlt(m) } : null })),
  ]
}
