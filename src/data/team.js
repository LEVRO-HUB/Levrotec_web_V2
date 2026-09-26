// Team records live in teamData.js (asset-free, so the build-time SEO plugin
// can read them too). Photos are served from /public/images/team.
import { TEAM } from './teamData.js'

export { TEAM, COMPANY, getMemberBySlug } from './teamData.js'
export const CALL_HOST = TEAM[0]
