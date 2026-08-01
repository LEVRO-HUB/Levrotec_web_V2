// Case studies are structured as a flat, ordered array so future entries
// can simply be appended — the CaseStudies page renders whatever is here.
export const CASE_STUDIES = [
  {
    id: 'zaptude',
    slug: 'zaptude',
    name: 'Zaptude',
    client: 'Zaptude / EIPS',
    tagline: 'Mapping real workplace readiness — not just test scores.',
    category: 'B2B SaaS · EdTech Intelligence',
    year: '2025',
    featured: true,
    summary:
      'A next-generation Employability Intelligence Platform (EIPS) built exclusively for college placement cells — replacing static assessment scores with continuous behavioral intelligence.',
    problem:
      'Placement cells relied on one-off aptitude scores that told them almost nothing about how a candidate would actually perform under pressure in a real job. Scores were static, gameable, and disconnected from workplace behavior.',
    solution:
      'Levrotec designed and built EIPS to track continuous behavioral event streams throughout a candidate\'s assessment journey — capturing timing, hesitation, recovery, and decision patterns, then translating them into diagnostic readiness metrics placement officers could actually act on.',
    metrics: [
      { label: 'Time Pressure Stability Index', description: 'Measures composure and consistency of decision quality as time constraints tighten.' },
      { label: 'Cognitive Efficiency Ratio', description: 'Tracks accuracy achieved per unit of cognitive effort across task types.' },
      { label: 'Exam Temperament Index', description: 'Quantifies emotional regulation and recovery patterns after high-stakes mistakes.' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Python'],
    results: [
      { value: 'Continuous', label: 'behavioral event tracking, not single-point scoring' },
      { value: '3 core', label: 'diagnostic readiness metrics delivered per candidate' },
      { value: 'B2B', label: 'platform built exclusively for placement cell workflows' },
    ],
    quote: {
      text: 'Levrotec didn\'t just build us a scoring tool — they built a lens into how candidates actually think under pressure.',
      author: 'Placement Cell Partner',
    },
  },
]
