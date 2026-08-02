// Slots for the About page's auto-scrolling photo wall.
// Drop workspace/team/culture photos in here once they're ready — import
// the image at the top of this file and set it as `photo` on the
// matching slot. Slots left as `photo: null` render a neutral gradient
// placeholder instead of a broken image.
import team1a from '../assets/gallery/team-1a.jpg'
import team1b from '../assets/gallery/team-1b.jpg'
import team2a from '../assets/gallery/team-2a.jpg'
import team2b from '../assets/gallery/team-2b.jpg'
import team3a from '../assets/gallery/team-3a.jpg'
import team3b from '../assets/gallery/team-3b.jpg'

export const GALLERY_IMAGES = [
  { id: 'g1', photo: team1a, alt: 'Levrotec team' },
  { id: 'g2', photo: team1b, alt: 'Levrotec team' },
  { id: 'g3', photo: team2a, alt: 'Levrotec team celebrating a milestone' },
  { id: 'g4', photo: team2b, alt: 'Levrotec team celebrating a milestone' },
  { id: 'g5', photo: team3a, alt: 'Levrotec team together' },
  { id: 'g6', photo: team3b, alt: 'Levrotec team together' },
]
