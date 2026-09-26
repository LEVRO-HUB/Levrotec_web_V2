// Pure data (no asset imports) so the same records can drive the React UI,
// the SEO helpers in src/seo/seo.js, and the build-time sitemap/prerender
// plugin in vite.config.js. Add a person here and they get a profile page at
// /team/<slug>, an About-page card, JSON-LD, sitemap entry and image alt text.
//
// role        – display string used across the existing UI (unchanged)
// roleTitle   – the exact formal designation (used for schema jobTitle/H1/title)
// roleAbbr    – short form people search for ("CEO", "CFO"…)
// alsoLeads   – secondary responsibility shown in the bio, not in jobTitle
// photo       – site-relative URL under /public (stable, unhashed) or null
// sameAs      – ONLY personal public profiles (LinkedIn, GitHub…). Empty until
//               individual URLs exist; the company people page is not a
//               personal profile and must not be listed here.
import { LINKEDIN_URL } from './contact.js'

export const COMPANY = {
  name: 'Levrotec',
  descriptor: 'a Chennai-based product-driven software company',
}

export const TEAM = [
  {
    id: 'ceo',
    slug: 'tharun-devakumar',
    initials: 'TD',
    name: 'Tharun Devakumar',
    role: 'Chief Executive Officer (CEO)',
    roleTitle: 'Chief Executive Officer',
    roleAbbr: 'CEO',
    alsoLeads: null,
    bio: 'Sets the vision and direction for Levrotec — from the first conversation with a client to the roadmap that gets us there. Focused on turning operational complexity into products people actually want to use.',
    focus: ['Vision & Strategy', 'Client Partnerships'],
    photo: '/images/team/tharun-devakumar-ceo-levrotec.jpg',
    photoWidth: 640,
    photoHeight: 640,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cmd',
    slug: 'mathivanan',
    initials: 'M',
    name: 'Mathivanan',
    role: 'Chairman & Managing Director (CMD) / Data Systems Lead',
    roleTitle: 'Chairman & Managing Director',
    roleAbbr: 'CMD',
    alsoLeads: 'Data Systems Lead',
    bio: 'Steers company direction while staying hands-on with the data systems powering our platforms — from schema design to the pipelines that keep behavioral intelligence products like Zaptude reliable at scale.',
    focus: ['Company Direction', 'Data Systems'],
    photo: '/images/team/mathivanan-cmd-levrotec.jpg',
    photoWidth: 640,
    photoHeight: 640,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cto',
    slug: 'seepal-dharshan',
    initials: 'SD',
    name: 'Seepal Dharshan',
    role: 'Chief Technology Officer (CTO) / Cloud Infrastructure Lead',
    roleTitle: 'Chief Technology Officer',
    roleAbbr: 'CTO',
    alsoLeads: 'Cloud Infrastructure Lead',
    bio: 'Owns the technical architecture across every Levrotec build — and the cloud infrastructure underneath it. Believes the best systems are the ones nobody has to think about because they just work.',
    focus: ['System Architecture', 'Cloud Infrastructure'],
    photo: null,
    photoWidth: null,
    photoHeight: null,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'coo',
    slug: 'prem-rajeevan',
    initials: 'PR',
    name: 'Prem Rajeevan',
    role: 'Chief Operating Officer (COO)',
    roleTitle: 'Chief Operating Officer',
    roleAbbr: 'COO',
    alsoLeads: null,
    bio: 'Runs the engine room — delivery timelines, team coordination, and the operational discipline that keeps every engagement shipping on schedule without cutting corners.',
    focus: ['Operations', 'Delivery Excellence'],
    photo: '/images/team/prem-rajeevan-coo-levrotec.jpg',
    photoWidth: 640,
    photoHeight: 640,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cpo',
    slug: 'boobalan',
    initials: 'B',
    name: 'Boobalan',
    role: 'Chief Product Officer (CPO)',
    roleTitle: 'Chief Product Officer',
    roleAbbr: 'CPO',
    alsoLeads: null,
    bio: 'Shapes product direction from first discovery call to shipped feature — translating messy real-world problems, like exam intelligence and timetable chaos, into products that are genuinely usable.',
    focus: ['Product Strategy', 'UX Discovery'],
    photo: '/images/team/boobalan-cpo-levrotec.jpg',
    photoWidth: 540,
    photoHeight: 1200,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cfo',
    slug: 'hariharan',
    initials: 'H',
    name: 'Hariharan',
    role: 'Chief Financial Officer (CFO) / Finance Lead',
    roleTitle: 'Chief Financial Officer',
    roleAbbr: 'CFO',
    alsoLeads: 'Finance Lead',
    bio: 'Keeps Levrotec\'s finances sound and sustainable, so the engineering team can focus on building rather than worrying about runway — the quiet discipline behind every ambitious build.',
    focus: ['Finance & Planning', 'Business Sustainability'],
    photo: '/images/team/hariharan-cfo-levrotec.jpg',
    photoWidth: 640,
    photoHeight: 640,
    sameAs: [],
    linkedin: LINKEDIN_URL,
  },
]

export const getMemberBySlug = (slug) => TEAM.find((m) => m.slug === slug)
