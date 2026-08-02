import {
  FiLayers, FiZap, FiGitMerge, FiSmartphone, FiCompass, FiLifeBuoy, FiTrendingUp,
} from 'react-icons/fi'

// Each entry powers both the /services index cards and its own
// /services/<slug> detail page — add a new object here and it appears
// in the nav dropdown, the index grid, and gets a routed detail page.
export const SERVICES = [
  {
    slug: 'saas-development',
    icon: FiLayers,
    title: 'SaaS Development',
    tagline: 'Multi-tenant products, built to scale from day one.',
    description:
      'We design and build full-stack SaaS platforms — from tenant architecture and billing to role-based access and analytics — engineered to support your first ten customers and your ten-thousandth.',
    benefits: ['Multi-tenant architecture', 'Subscription & billing systems', 'Role-based access control', 'Usage analytics & dashboards'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    caseStudySlug: 'zaptude',
  },
  {
    slug: 'mvp-development',
    icon: FiZap,
    title: 'MVP Development',
    tagline: 'From idea to a fundable product in weeks, not quarters.',
    description:
      'We help founders validate fast — scoping a lean, high-signal MVP, shipping it quickly, and instrumenting it so every release teaches you something about your market.',
    benefits: ['Rapid prototyping', 'Lean product scoping', 'Investor-ready demos', 'Iterative build sprints'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    caseStudySlug: 'hireflow',
  },
  {
    slug: 'devops-services',
    icon: FiGitMerge,
    title: 'DevOps Services',
    tagline: 'Infrastructure and pipelines that never block a release.',
    description:
      'CI/CD pipelines, container orchestration, and observability stacks designed so your team ships confidently — with automated testing, zero-downtime deploys, and infrastructure as code.',
    benefits: ['CI/CD pipeline design', 'Kubernetes orchestration', 'Infrastructure as code', 'Monitoring & observability'],
    techStack: ['Kubernetes', 'AWS', 'Cloudflare', 'Celery', 'Redis'],
    caseStudySlug: 'tabilo',
  },
  {
    slug: 'it-consulting',
    icon: FiCompass,
    title: 'IT Consulting & Digital Strategy',
    tagline: 'The roadmap before the roadmap.',
    description:
      'We audit your stack, your team, and your goals to build a pragmatic digital strategy — architecture decisions, tooling choices, and technical roadmaps grounded in your actual constraints.',
    benefits: ['Technical audits', 'Architecture strategy', 'Vendor & tooling selection', 'Digital transformation roadmaps'],
    techStack: ['AWS', 'PostgreSQL', 'Claude AI', 'Kubernetes'],
    caseStudySlug: 'zaptude',
  },
  {
    slug: 'digital-marketing',
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    tagline: 'Growth engineering for products that deserve to be found.',
    description:
      'SEO-first content, performance campaigns, and analytics instrumentation built by the same team that ships your product — so marketing and product speak the same data language.',
    benefits: ['Technical & local SEO', 'Performance ad campaigns', 'Analytics & attribution setup', 'Content & positioning strategy'],
    techStack: ['SEO Tooling', 'Analytics', 'AI Engine', 'CRM Integrations'],
    caseStudySlug: null,
  },
  {
    slug: 'web-mobile-development',
    icon: FiSmartphone,
    title: 'Web Services & Mobile App Development',
    tagline: 'Native-feeling experiences across every screen.',
    description:
      'From marketing sites to cross-platform mobile apps, we build performant, accessible interfaces with design systems that keep your brand consistent everywhere your users are.',
    benefits: ['Cross-platform mobile (Flutter)', 'Progressive web apps', 'Design systems & UI kits', 'Performance optimization'],
    techStack: ['React', 'Flutter', 'JavaScript', 'HTML', 'CSS'],
    caseStudySlug: 'hireflow',
  },
  {
    slug: 'support-maintenance',
    icon: FiLifeBuoy,
    title: 'Product Support & Maintenance',
    tagline: "Your product's uptime is our on-call.",
    description:
      'Ongoing maintenance, security patching, performance tuning, and feature iteration — so your product keeps improving long after launch day, without you needing an in-house team.',
    benefits: ['SLA-backed support', 'Security patching', 'Performance tuning', 'Continuous feature delivery'],
    techStack: ['Django', 'PostgreSQL', 'Celery', 'AWS'],
    caseStudySlug: 'tabilo',
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}
