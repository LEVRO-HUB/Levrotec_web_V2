import {
  FaReact, FaNodeJs, FaAws, FaPython,
} from 'react-icons/fa'
import {
  SiExpress, SiPostgresql, SiMongodb, SiJavascript,
  SiCloudflare, SiKubernetes, SiFastapi, SiRedis, SiFlutter,
} from 'react-icons/si'
import './TechOrbit.css'

const RINGS = [
  {
    id: 'ring-1',
    direction: 1,
    icons: [
      { Icon: FaReact, name: 'React', color: '#61dafb' },
      { Icon: SiJavascript, name: 'JavaScript', color: '#f7df1e' },
      { Icon: FaNodeJs, name: 'Node.js', color: '#8cc84b' },
    ],
  },
  {
    id: 'ring-2',
    direction: -1,
    icons: [
      { Icon: SiExpress, name: 'Express.js', color: '#ffffff' },
      { Icon: FaPython, name: 'Python', color: '#ffd43b' },
      { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4a90d9' },
      { Icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
      { Icon: SiRedis, name: 'Redis', color: '#ff4438' },
    ],
  },
  {
    id: 'ring-3',
    direction: 1,
    icons: [
      { Icon: FaAws, name: 'AWS', color: '#ff9900' },
      { Icon: SiCloudflare, name: 'Cloudflare', color: '#f6821f' },
      { Icon: SiKubernetes, name: 'Kubernetes', color: '#326ce5' },
      { Icon: SiFastapi, name: 'FastAPI', color: '#05998b' },
      { Icon: SiFlutter, name: 'Flutter', color: '#54c5f8' },
    ],
  },
]

function OrbitRing({ ring, index }) {
  const count = ring.icons.length
  const durations = [26, 34, 44]
  const duration = durations[index] ?? 30
  const dirClass = ring.direction === 1 ? 'cw' : 'ccw'

  return (
    <div className={`orbit-ring ${ring.id}`}>
      <div className="orbit-dashes" />
      <div
        className={`orbit-rotator ${dirClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {ring.icons.map(({ Icon, name, color }, i) => {
          const angle = (360 / count) * i
          return (
            <div
              key={name}
              className="orbit-anchor"
              style={{ transform: `rotate(${angle}deg) translateX(var(--radius))` }}
            >
              <div
                className={`orbit-icon-holder ${dirClass === 'cw' ? 'ccw' : 'cw'}`}
                style={{ animationDuration: `${duration}s` }}
              >
                <div className="orbit-icon" title={name} style={{ '--icon-color': color }}>
                  <Icon aria-hidden="true" />
                  <span className="visually-hidden">{name}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function TechOrbit() {
  return (
    <div className="orbit-system" role="img" aria-label="Levrotec technology stack orbiting our core platform">
      <div className="orbit-glow" />
      {RINGS.map((ring, i) => (
        <OrbitRing ring={ring} index={i} key={ring.id} />
      ))}
      <div className="orbit-center">
        <span className="orbit-center-letter">V</span>
        <div className="orbit-center-ping" />
      </div>
    </div>
  )
}
