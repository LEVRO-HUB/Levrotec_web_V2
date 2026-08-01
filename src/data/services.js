import {
  FiLayers, FiZap, FiGitMerge, FiSmartphone, FiCompass, FiLifeBuoy,
} from 'react-icons/fi'

export const SERVICES = [
  {
    id: 'saas-development',
    icon: FiLayers,
    title: 'SaaS Development',
    tagline: 'Multi-tenant products, built to scale from day one.',
    description:
      'We design and build full-stack SaaS platforms — from tenant architecture and billing to role-based access and analytics — engineered to support your first ten customers and your ten-thousandth.',
    capabilities: ['Multi-tenant architecture', 'Subscription & billing systems', 'Role-based access control', 'Usage analytics & dashboards'],
  },
  {
    id: 'mvp-development',
    icon: FiZap,
    title: 'MVP Development',
    tagline: 'From idea to a fundable product in weeks, not quarters.',
    description:
      'We help founders validate fast — scoping a lean, high-signal MVP, shipping it quickly, and instrumenting it so every release teaches you something about your market.',
    capabilities: ['Rapid prototyping', 'Lean product scoping', 'Investor-ready demos', 'Iterative build sprints'],
  },
  {
    id: 'devops-services',
    icon: FiGitMerge,
    title: 'DevOps Services',
    tagline: 'Infrastructure and pipelines that never block a release.',
    description:
      'CI/CD pipelines, container orchestration, and observability stacks designed so your team ships confidently — with automated testing, zero-downtime deploys, and infrastructure as code.',
    capabilities: ['CI/CD pipeline design', 'Kubernetes orchestration', 'Infrastructure as code', 'Monitoring & observability'],
  },
  {
    id: 'web-mobile',
    icon: FiSmartphone,
    title: 'Web Services & Mobile App Development',
    tagline: 'Native-feeling experiences across every screen.',
    description:
      'From marketing sites to cross-platform mobile apps, we build performant, accessible interfaces with design systems that keep your brand consistent everywhere your users are.',
    capabilities: ['Cross-platform mobile (Flutter)', 'Progressive web apps', 'Design systems & UI kits', 'Performance optimization'],
  },
  {
    id: 'it-consulting',
    icon: FiCompass,
    title: 'IT Consulting & Digital Strategy',
    tagline: 'The roadmap before the roadmap.',
    description:
      'We audit your stack, your team, and your goals to build a pragmatic digital strategy — architecture decisions, tooling choices, and technical roadmaps grounded in your actual constraints.',
    capabilities: ['Technical audits', 'Architecture strategy', 'Vendor & tooling selection', 'Digital transformation roadmaps'],
  },
  {
    id: 'product-support',
    icon: FiLifeBuoy,
    title: 'Product Support & Maintenance',
    tagline: "Your product's uptime is our on-call.",
    description:
      'Ongoing maintenance, security patching, performance tuning, and feature iteration — so your product keeps improving long after launch day, without you needing an in-house team.',
    capabilities: ['SLA-backed support', 'Security patching', 'Performance tuning', 'Continuous feature delivery'],
  },
]
