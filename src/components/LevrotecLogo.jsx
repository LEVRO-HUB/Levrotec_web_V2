let uid = 0

/**
 * Sharp-angled "V" wordmark: a single bold glyph with a vertical gradient
 * that reads as a cyan/sky-blue upper wing melting into a metallic-silver
 * lower tip, plus a small facet overlay for a metallic sheen at the point.
 * Used identically in the navbar, footer, and hero orbit center so the
 * mark stays visually consistent everywhere it appears.
 */
export default function LevrotecLogo({ size = 40, className = '', title = 'Levrotec' }) {
  uid += 1
  const gradId = `levrotec-v-grad-${uid}`

  return (
    <svg
      className={`levrotec-logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8fe0ff" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="72%" stopColor="#9fb2c9" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      <path
        d="M12 12 L34 12 L50 58 L66 12 L88 12 L54 92 Z"
        fill={`url(#${gradId})`}
      />
      <path d="M45 68 L54 92 L65 66 Z" fill="#f8fafc" opacity="0.45" />
    </svg>
  )
}
