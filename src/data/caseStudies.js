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
]

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
