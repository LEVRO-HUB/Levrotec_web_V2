import { LINKEDIN_URL } from './contact.js'
import tharunPhoto from '../assets/team/tharun.jpg'
import mathiPhoto from '../assets/team/mathi.png'
import premPhoto from '../assets/team/prem.jpg'
import boobalanPhoto from '../assets/team/boobalan.jpg'
import hariPhoto from '../assets/team/hari.jpg'

// Individual LinkedIn profile URLs aren't available yet, so every member
// links to the company people page — swap in personal profile URLs here
// once they're shared.
export const TEAM = [
  {
    id: 'ceo',
    initials: 'TD',
    role: 'Chief Executive Officer (CEO)',
    name: 'Tharun Devakumar',
    bio: 'Sets the vision and direction for Levrotec — from the first conversation with a client to the roadmap that gets us there. Focused on turning operational complexity into products people actually want to use.',
    focus: ['Vision & Strategy', 'Client Partnerships'],
    photo: tharunPhoto,
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cmd',
    initials: 'M',
    role: 'Chairman & Managing Director (CMD) / Data Systems Lead',
    name: 'Mathivanan',
    bio: 'Steers company direction while staying hands-on with the data systems powering our platforms — from schema design to the pipelines that keep behavioral intelligence products like Zaptude reliable at scale.',
    focus: ['Company Direction', 'Data Systems'],
    photo: mathiPhoto,
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cto',
    initials: 'SD',
    role: 'Chief Technology Officer (CTO) / Cloud Infrastructure Lead',
    name: 'Seepal Dharshan',
    bio: 'Owns the technical architecture across every Levrotec build — and the cloud infrastructure underneath it. Believes the best systems are the ones nobody has to think about because they just work.',
    focus: ['System Architecture', 'Cloud Infrastructure'],
    photo: null,
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'coo',
    initials: 'PR',
    role: 'Chief Operating Officer (COO)',
    name: 'Prem Rajeevan',
    bio: 'Runs the engine room — delivery timelines, team coordination, and the operational discipline that keeps every engagement shipping on schedule without cutting corners.',
    focus: ['Operations', 'Delivery Excellence'],
    photo: premPhoto,
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cpo',
    initials: 'B',
    role: 'Chief Product Officer (CPO)',
    name: 'Boobalan',
    bio: 'Shapes product direction from first discovery call to shipped feature — translating messy real-world problems, like exam intelligence and timetable chaos, into products that are genuinely usable.',
    focus: ['Product Strategy', 'UX Discovery'],
    photo: boobalanPhoto,
    linkedin: LINKEDIN_URL,
  },
  {
    id: 'cfo',
    initials: 'H',
    role: 'Chief Financial Officer (CFO) / Finance Lead',
    name: 'Hariharan',
    bio: 'Keeps Levrotec\'s finances sound and sustainable, so the engineering team can focus on building rather than worrying about runway — the quiet discipline behind every ambitious build.',
    focus: ['Finance & Planning', 'Business Sustainability'],
    photo: hariPhoto,
    linkedin: LINKEDIN_URL,
  },
]

export const CALL_HOST = TEAM[0]

// Photo subset used in the About page's curved hero gallery — team
// members without a photo yet are naturally excluded.
export const GALLERY_PHOTOS = TEAM.filter((m) => m.photo).map((m) => ({
  id: m.id,
  photo: m.photo,
  name: m.name,
}))
