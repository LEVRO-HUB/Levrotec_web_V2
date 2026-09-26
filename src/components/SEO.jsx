import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_NAME, resolveSeo, safeJson } from '../seo/seo.js'

// Props are resolved by seo.js (shared with the build-time prerender), so the
// runtime head and the static head can never drift apart.
// `personSeo(member)` / `aboutSeo()` from seo.js can be spread straight in.
export default function SEO(props) {
  const s = resolveSeo(props)

  // index.html ships a generic fallback head (marked data-shell) for crawlers
  // that don't run JS. Once a page sets its own tags, drop the fallbacks so
  // there is never a second canonical / og:* pointing at the homepage.
  useEffect(() => {
    document.head.querySelectorAll('[data-shell]').forEach((el) => el.remove())
  }, [])

  return (
    <Helmet>
      <title>{s.title}</title>
      <meta name="description" content={s.description} />
      {s.keywords && <meta name="keywords" content={s.keywords} />}
      {s.robots && <meta name="robots" content={s.robots} />}
      <link rel="canonical" href={s.url} />

      <meta property="og:type" content={s.ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={s.title} />
      <meta property="og:description" content={s.description} />
      <meta property="og:url" content={s.url} />
      <meta property="og:image" content={s.image} />
      {s.imageAlt && <meta property="og:image:alt" content={s.imageAlt} />}
      {s.imageWidth && <meta property="og:image:width" content={String(s.imageWidth)} />}
      {s.imageHeight && <meta property="og:image:height" content={String(s.imageHeight)} />}
      {s.profile?.first_name && <meta property="profile:first_name" content={s.profile.first_name} />}
      {s.profile?.last_name && <meta property="profile:last_name" content={s.profile.last_name} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={s.title} />
      <meta name="twitter:description" content={s.description} />
      <meta name="twitter:image" content={s.image} />
      {s.imageAlt && <meta name="twitter:image:alt" content={s.imageAlt} />}

      {s.jsonLd && <script type="application/ld+json">{safeJson(s.jsonLd)}</script>}
    </Helmet>
  )
}
