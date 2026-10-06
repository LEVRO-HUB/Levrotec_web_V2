import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { TEAM } from './src/data/teamData.js'
import { SERVICES } from './src/data/services.js'
import { PAGE_SEO, serviceSeo, aboutSeo, personSeo, personPath, renderHeadTags, sitemapEntries, absUrl } from './src/seo/seo.js'

// Build-time SEO: for every profile page (and /about) write a copy of
// index.html whose <head> already carries the final title, description,
// canonical, Open Graph tags and JSON-LD, so crawlers that don't execute JS
// still see them. Also emits sitemap.xml. Everything comes from src/seo/seo.js
// and src/data/teamData.js — adding a person to the data updates all of it.
function seoPrerender() {
  let outDir
  return {
    name: 'levrotec-seo-prerender',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shell = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8')

      const write = (routePath, seoInput) => {
        const { title, tags } = renderHeadTags(seoInput)
        const html = shell
          .split('\n')
          .filter((line) => !line.includes('data-shell'))
          .join('\n')
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`)
          .replace('</head>', `    ${tags}\n  </head>`)
        const dir = path.join(outDir, routePath)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }

      write('about', aboutSeo())
      TEAM.forEach((m) => write(personPath(m).slice(1), personSeo(m)))

      // Every other public route gets its own static head too, so crawlers see
      // the right title / description / canonical before JavaScript runs. The
      // homepage ('/') is the shell itself and already carries its own head.
      Object.values(PAGE_SEO)
        .filter((seo) => seo.path !== '/')
        .forEach((seo) => write(seo.path.slice(1), seo))
      SERVICES.forEach((service) => { const seo = serviceSeo(service); write(seo.path.slice(1), seo) })

      // Service slugs are parsed from the data file (it imports React icons, so
      // it can't be loaded in plain Node).
      const servicesSrc = fs.readFileSync(path.resolve('src/data/services.js'), 'utf-8')
      const serviceSlugs = [...servicesSrc.matchAll(/slug:\s*'([^']+)'/g)].map((x) => x[1])
      const staticPaths = [
        '/', '/services', ...serviceSlugs.map((s) => `/services/${s}`),
        '/case-studies', '/about', '/technology', '/blog', '/careers', '/contact', '/privacy-policy',
      ]
      const urls = sitemapEntries(staticPaths)
        .map((e) => {
          const img = e.image
            ? `\n    <image:image><image:loc>${e.image.url}</image:loc><image:title>${e.image.title.replace(/&/g, '&amp;')}</image:title></image:image>`
            : ''
          return `  <url>\n    <loc>${absUrl(e.path)}</loc>${img}\n  </url>`
        })
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPrerender()],
})
