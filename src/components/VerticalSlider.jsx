import { useEffect, useRef, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import './VerticalSlider.css'

/**
 * Generic vertical card switcher: up/down arrows cycle through `items`
 * (pre-rendered JSX), with optional autoplay that pauses on hover/focus.
 * Positioning math uses modulo distance so it wraps cleanly in either
 * direction regardless of item count.
 */
export default function VerticalSlider({ items, autoPlayMs, className = '', ariaLabel = 'Card slider' }) {
  const [index, setIndex] = useState(0)
  const count = items.length
  const timerRef = useRef(null)

  const start = () => {
    if (!autoPlayMs) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
  }
  const stop = () => clearInterval(timerRef.current)

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayMs, count])

  const go = (delta) => {
    setIndex((i) => (i + delta + count) % count)
    start()
  }

  return (
    <div className={`vslider ${className}`} onMouseEnter={stop} onMouseLeave={start} role="region" aria-label={ariaLabel}>
      <div className="vslider-stage">
        {items.map((item, i) => {
          const rel = ((i - index) % count + count) % count
          let pos = 'hidden'
          if (rel === 0) pos = 'active'
          else if (rel === 1) pos = 'next'
          else if (rel === count - 1) pos = 'prev'
          return (
            <div className={`vslider-card vslider-${pos}`} key={i} aria-hidden={pos !== 'active'}>
              {item}
            </div>
          )
        })}
      </div>

      <div className="vslider-controls">
        <button type="button" className="vslider-arrow" onClick={() => go(-1)} aria-label="Previous">
          <FiChevronUp />
        </button>
        <div className="vslider-dots">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`vslider-dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { setIndex(i); start() }}
            />
          ))}
        </div>
        <button type="button" className="vslider-arrow" onClick={() => go(1)} aria-label="Next">
          <FiChevronDown />
        </button>
      </div>
    </div>
  )
}
