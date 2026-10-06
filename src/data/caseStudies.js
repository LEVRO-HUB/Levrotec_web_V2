// Case studies are structured as a flat, ordered array so future entries
// can simply be appended — the CaseStudies page and Home showcase both
// render whatever is here.
export const CASE_STUDIES = [
  {
    id: 'zaptude',
    slug: 'zaptude',
    name: 'Zaptude',
    mark: 'Z',
    client: 'Zaptude / EIPS',
    tagline: 'Mapping real workplace readiness — not just test scores.',
    category: 'B2B SaaS · EdTech Intelligence',
    year: '2025',
    featured: true,
    summary:
      'A next-generation Employability Intelligence Platform (EIPS) built exclusively for college placement cells — replacing static assessment scores with 20+ continuous behavioral metrics that measure how candidates actually make decisions under pressure.',
    problem:
      'Placement cells relied on one-off aptitude scores that told them almost nothing about how a candidate would actually perform under pressure in a real job. Scores were static, gameable, and disconnected from workplace behavior.',
    solution:
      'Levrotec designed and built EIPS to track continuous behavioral event streams throughout a candidate\'s assessment journey — capturing timing, hesitation, recovery, and decision patterns, then translating them into diagnostic readiness metrics placement officers could actually act on.',
    metrics: [
      { label: 'Time Pressure Stability Index (TPSI)', description: 'Measures composure and consistency of decision quality as time constraints tighten.' },
      { label: 'Cognitive Efficiency Ratio (CER)', description: 'Tracks accuracy achieved per unit of cognitive effort across task types.' },
      { label: 'Exam Temperament Index (ETI)', description: 'Quantifies emotional regulation and recovery patterns after high-stakes mistakes.' },
      { label: 'Pattern Recognition Score (PRS)', description: 'Scores how quickly a candidate identifies and adapts to recurring structures in a problem.' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Event Tracking SDK', 'AI Analytics Engine'],
    results: [
      { value: '20+', label: 'continuous behavioral metrics tracked per candidate' },
      { value: 'Continuous', label: 'event-stream tracking, not single-point scoring' },
      { value: 'B2B', label: 'platform built exclusively for placement cell workflows' },
    ],
    quote: {
      text: 'Levrotec didn\'t just build us a scoring tool — they built a lens into how candidates actually think under pressure.',
      author: 'Placement Cell Partner',
    },
  },
  {
    id: 'tabilo',
    slug: 'tabilo',
    name: 'Tabilo',
    mark: 'T',
    client: 'Tabilo',
    tagline: 'Timetable optimization that actually respects how schools run.',
    category: 'Micro-SaaS · Education Infrastructure',
    year: '2025',
    featured: true,
    summary:
      'A unified, cloud-native schedule optimization engine built for TN State Board schools and Anna University-affiliated colleges — solving Day-Order rotation, lab block locking, faculty load caps, and substitution logic as one constraint-satisfaction problem.',
    problem:
      'Manually built timetables couldn\'t keep up with rotating Day-Order cycles, contiguous lab block requirements, and faculty workload caps — every schedule change meant hours of manual rework and frequent compliance violations.',
    solution:
      'Levrotec modeled the entire scheduling problem as a constraint-satisfaction system solved with Google OR-Tools\' CP-SAT solver — handling Day 1 to 6 rotation cycles, 3-period contiguous lab locks, 24-hour faculty caps, and automatic proxy/substitution suggestions, all recomputed in seconds.',
    metrics: [
      { label: 'Day-Order Rotation Engine', description: 'Automatically cycles Day 1 through Day 6 schedules while preserving every constraint.' },
      { label: 'Lab Block Locking', description: 'Guarantees contiguous 3-period blocks for lab sessions with zero manual adjustment.' },
      { label: 'Faculty Load Compliance', description: 'Enforces 24-hour weekly faculty caps automatically across every generated schedule.' },
      { label: 'Smart Substitution Logic', description: 'Suggests compliant proxy faculty the moment a conflict or absence is flagged.' },
    ],
    stack: ['Python', 'Django', 'PostgreSQL 16', 'Google OR-Tools (CP-SAT)', 'Celery + Redis', 'AWS RDS'],
    results: [
      { value: 'Day 1–6', label: 'rotation cycles solved automatically, every term' },
      { value: 'Zero', label: 'manual conflict resolution needed for lab block locks' },
      { value: 'Seconds', label: 'to regenerate a fully compliant schedule after any change' },
    ],
    quote: {
      text: 'What used to take our admin team a full week of spreadsheet wrangling now happens before their coffee gets cold.',
      author: 'Academic Operations Lead',
    },
  },
  {
    id: 'hireflow',
    slug: 'hireflow',
    name: 'HireFlow',
    mark: 'H',
    client: 'HireFlow',
    tagline: 'A recruitment exam engine that grades itself while you sleep.',
    category: 'B2B SaaS · Recruitment & Assessment',
    year: '2025',
    featured: true,
    summary:
      'An end-to-end recruitment assessment and candidate screening platform — from OTP-based sign-in and server-side individually generated papers to automatic grading, cutoff eligibility checks, and UPI receipt verification.',
    problem:
      'Recruitment teams needed a tamper-resistant way to run high-volume screening exams — unique papers per candidate, instant grading against role-specific cutoffs, and payment verification — without a manual review bottleneck at every step.',
    solution:
      'Levrotec built HireFlow around server-side paper generation, drawing each candidate a unique set of questions from department question banks at a fixed easy/medium/hard ratio, then automating grading, eligibility, and payment verification end-to-end.',
    metrics: [
      { label: 'OTP-Verified Sign-In', description: 'Candidates authenticate by mobile OTP before any exam session can start.' },
      { label: 'Server-Side Paper Generation', description: 'Each candidate receives a unique paper drawn from department question banks at a fixed difficulty ratio.' },
      { label: 'Automatic Grading & Cutoffs', description: 'Scores and role-specific eligibility are computed the instant a candidate submits.' },
      { label: 'UPI Receipt Verification', description: 'Application payments are verified automatically before a candidate is confirmed.' },
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL 14+', 'React', 'Sequelize', 'Docker'],
    results: [
      { value: 'Unique', label: 'question paper generated per candidate, every time' },
      { value: 'Instant', label: 'grading and cutoff eligibility on submission' },
      { value: 'Automated', label: 'UPI payment verification with no manual review' },
    ],
    quote: {
      text: 'HireFlow turned a two-week screening bottleneck into something our recruiters barely have to think about.',
      author: 'Recruitment Operations Manager',
    },
  },
  {
    // Levrotec's own product initiative — not a client engagement. It is still
    // being built, so `results` describes status and direction (no outcome
    // figures) and `quote` carries our product vision rather than a testimonial.
    id: 'hospitality-channel-manager',
    slug: 'hospitality-channel-manager',
    name: 'Hospitality Channel Manager',
    mark: 'C',
    client: 'Levrotec (in-house product)',
    tagline: 'Building a smarter, centralized distribution platform for modern hospitality businesses.',
    category: 'Levrotec Product · Hospitality Tech',
    status: 'In Development',
    year: '2026',
    featured: true,
    summary:
      'Our own hospitality technology product, currently in development: a customized channel manager that connects a property\'s central booking and inventory system with the OTAs and channels it sells on — so every channel works from the same availability.',
    problem:
      'Hotels sell the same rooms across several channels at once. When each channel holds its own copy of availability, a booking on one is not reflected on the others quickly enough — and the last room can be sold twice. Teams end up updating extranets by hand, reconciling reservations across systems, and absorbing the cost of every double booking.',
    solution:
      'We are building a central inventory and reservation core with an integration layer around it. Every booking — direct or from an OTA — lands in one place, room-type availability is recalculated there, and the change is pushed out to every other connected channel. Internal room types are mapped to each channel\'s listings, and hospitality workflows are customized per property rather than forced into a generic template.',
    metricsTitle: 'Core Capabilities',
    metrics: [
      { label: 'Centralized Inventory', description: 'One room-type based availability record for the property, shared by every channel instead of copied into each.' },
      { label: 'Central Master Calendar', description: 'A single calendar view of availability and reservations across room types and dates.' },
      { label: 'Reservation Management', description: 'Direct and channel bookings handled in one centralized booking flow.' },
      { label: 'Two-Way Channel Sync', description: 'Inbound OTA bookings are captured centrally; availability changes are synchronized outbound to connected channels.' },
      { label: 'Room-Type Mapping', description: 'Internal room types and listings mapped to their counterparts on each OTA.' },
      { label: 'OTA Integration Layer', description: 'Designed for Booking.com, Agoda, Expedia and Airbnb, plus a SiteMinder / channel-manager integration layer.' },
    ],
    flowTitle: 'How It Works',
    flow: [
      { label: '01 · A booking arrives', description: 'A hotel has 4 Deluxe rooms listed on Booking.com and Airbnb. The last available one is booked through Airbnb.' },
      { label: '02 · Central inventory updates', description: 'The channel manager records the reservation and Deluxe availability in the central inventory becomes 0.' },
      { label: '03 · Other channels sync', description: 'The new availability is pushed to Booking.com, so the room can no longer be sold there.' },
    ],
    stack: ['Central Inventory Core', 'OTA Adapter Layer', 'Inbound Booking Handling', 'Outbound Sync', 'Mock / Simulation Mode'],
    results: [
      { value: 'In Development', label: 'a Levrotec product initiative — not yet a released product' },
      { value: 'Simulation First', label: 'channel flows run in mock mode today; real OTA integrations are planned as the product evolves' },
      { value: 'Multi-Property', label: 'support for multiple properties, listings and channel connections is on the roadmap' },
    ],
    quote: {
      text: 'One booking, one source of truth — every connected channel updated before the same room can be sold twice.',
      author: 'Levrotec — product vision',
    },
  },
]

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
