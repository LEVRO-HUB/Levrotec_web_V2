import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to any descendant with the `.reveal` class once it
 * enters the viewport. Scoped to the mounting component via a ref so
 * multiple pages can use it independently without global listeners.
 */
export default function useReveal(deps = []) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const targets = scope.querySelectorAll('.reveal')
    if (!targets.length) return

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}
