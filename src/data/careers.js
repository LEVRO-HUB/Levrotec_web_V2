// Levrotec hires almost exclusively at the fresher / early-career level
// (0–2 years) — every role below is written for that audience. Grouped
// by department so HR can add/remove roles without touching layout.
export const CAREER_DEPARTMENTS = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Build the products and platforms our clients bet their business on — with senior engineers reviewing your work every step of the way.',
    roles: [
      {
        id: 'junior-frontend-engineer',
        title: 'Junior Frontend Engineer (React)',
        location: 'Remote',
        type: 'Full-time · 0–2 years',
        summary: 'Build and ship real UI features in React alongside our product team, from your very first sprint.',
        criteria: ['Solid fundamentals in React, JavaScript, HTML & CSS', 'A portfolio, coursework project, or internship you can walk us through', 'Eager to learn production practices — code review, testing, Git workflows'],
      },
      {
        id: 'junior-python-django-developer',
        title: 'Junior Python/Django Developer',
        location: 'Remote',
        type: 'Full-time · 0–2 years',
        summary: 'Work on backend features and APIs for platforms like Tabilo — learning production Django patterns from day one.',
        criteria: ['Comfortable with Python fundamentals and basic Django or a similar framework', 'Understands relational databases (PostgreSQL or MySQL)', 'Curious about how backend systems are actually run in production'],
      },
    ],
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Help turn ambiguous problems into interfaces people actually enjoy using.',
    roles: [
      {
        id: 'associate-product-designer',
        title: 'Associate Product Designer',
        location: 'Hybrid',
        type: 'Full-time · 0–2 years',
        summary: 'Design flows and interfaces for our SaaS products under the guidance of our product and engineering leads.',
        criteria: ['A design portfolio (student, freelance, or internship work is welcome)', 'Familiarity with Figma or a similar design tool', 'Genuine interest in how design decisions affect real users'],
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Grow the products we build — content, campaigns, and the data behind both.',
    roles: [
      {
        id: 'digital-marketing-specialist',
        title: 'Digital Marketing Specialist',
        location: 'Remote',
        type: 'Full-time · 0–2 years',
        summary: 'Run SEO, content, and performance campaigns for Levrotec and our client products.',
        criteria: ['Understanding of SEO fundamentals and content strategy', 'Comfortable with analytics tools (GA4, Search Console, or similar)', 'Strong writing skills and an eye for what makes content actually get read'],
      },
    ],
  },
  {
    id: 'operations',
    name: 'Operations',
    description: 'Keep the engine running so delivery never slips on the basics.',
    roles: [
      {
        id: 'client-operations-associate',
        title: 'Client Operations Associate',
        location: 'Remote',
        type: 'Full-time · 0–2 years',
        summary: 'Coordinate delivery timelines, client communication, and internal reporting across active engagements.',
        criteria: ['Highly organized with strong written and verbal communication', 'Comfortable picking up new tools quickly (Notion, Linear, or similar)', 'Prior internship or part-time client-facing experience is a plus, not a requirement'],
      },
    ],
  },
]
