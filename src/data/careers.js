// Grouped by department so HR can add/remove roles without touching layout.
export const CAREER_DEPARTMENTS = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Build the products and platforms our clients bet their business on.',
    roles: [
      {
        id: 'senior-fullstack-engineer',
        title: 'Senior Full-Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        summary: 'Own features end-to-end across our React front ends and Node/Python services, from architecture through deployment.',
        criteria: ['4+ years shipping production React & Node applications', 'Comfortable owning a feature from spec to deploy', 'Experience with PostgreSQL or MongoDB at scale'],
      },
      {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        location: 'Remote',
        type: 'Full-time',
        summary: 'Design CI/CD pipelines and Kubernetes infrastructure that keep client deployments fast and reliable.',
        criteria: ['Hands-on Kubernetes and container orchestration experience', 'Infrastructure-as-code fluency (Terraform or similar)', 'Strong grasp of observability and incident response'],
      },
    ],
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Turn ambiguous problems into products people actually want to use.',
    roles: [
      {
        id: 'product-manager',
        title: 'Product Manager',
        location: 'Hybrid',
        type: 'Full-time',
        summary: 'Partner directly with client stakeholders to scope MVPs and roadmaps grounded in real user signal.',
        criteria: ['2+ years in a product role at a startup or agency', 'Comfortable running discovery with technical and non-technical stakeholders', 'Strong written communication for specs and roadmaps'],
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
        type: 'Full-time',
        summary: 'Coordinate delivery timelines, client communication, and internal reporting across active engagements.',
        criteria: ['Experience in agency, consulting, or client-services operations', 'Highly organized with strong cross-team communication', 'Comfortable with project tooling (Linear, Notion, or similar)'],
      },
    ],
  },
]
