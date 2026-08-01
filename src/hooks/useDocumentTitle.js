import { useEffect } from 'react'

export default function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} — Levrotec` : 'Levrotec — Turn Possibility Into Progress'
    return () => {
      document.title = prev
    }
  }, [title])
}
