import {
  FaReact, FaNodeJs, FaAws, FaPython, FaJs,
} from 'react-icons/fa'
import {
  SiExpress, SiPostgresql, SiMongodb, SiCloudflare,
  SiKubernetes, SiFastapi, SiRedis, SiFlutter,
  SiHtml5, SiCss, SiDjango, SiCelery, SiAnthropic,
} from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

export const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Web',
    description: 'Interfaces that feel fast, native, and consistent across every device.',
    items: [
      { name: 'React', Icon: FaReact, color: '#61dafb' },
      { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8' },
      { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
      { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', Icon: SiCss, color: '#663399' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Reliable services and APIs that scale with your user base, not against it.',
    items: [
      { name: 'Node.js', Icon: FaNodeJs, color: '#8cc84b' },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
      { name: 'Python', Icon: FaPython, color: '#ffd43b' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#05998b' },
      { name: 'Django', Icon: SiDjango, color: '#44b78b' },
      { name: 'Celery', Icon: SiCelery, color: '#37814a' },
    ],
  },
  {
    id: 'data',
    title: 'Databases & Cache',
    description: 'Data layers tuned for durability, speed, and the queries you actually run.',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4a90d9' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'Redis', Icon: SiRedis, color: '#ff4438' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud, DevOps & Infra',
    description: 'Infrastructure automated end-to-end — from commit to production.',
    items: [
      { name: 'AWS', Icon: FaAws, color: '#ff9900' },
      { name: 'Cloudflare', Icon: SiCloudflare, color: '#f6821f' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'AI-assisted engineering and automation woven into how we build and ship.',
    items: [
      { name: 'Claude AI', Icon: SiAnthropic, color: '#d97757' },
      { name: 'AI Engine', Icon: TbBrain, color: '#00d2ff' },
    ],
  },
]
