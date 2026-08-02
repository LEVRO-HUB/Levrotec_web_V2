import logoSrc from '../assets/logo.jpg'
import './LevrotecLogo.css'

/**
 * Wraps the real Levrotec mark (sky-blue/silver "V" on a near-black tile)
 * so every usage — navbar, footer, hero orbit center — stays a single
 * drop-in swap point if the source art ever changes.
 */
export default function LevrotecLogo({ size = 40, className = '', title = 'Levrotec' }) {
  return (
    <img
      src={logoSrc}
      alt={title}
      className={`levrotec-logo ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
