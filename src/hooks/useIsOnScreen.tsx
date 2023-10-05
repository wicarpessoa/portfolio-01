import { useState, useEffect, RefObject } from 'react'

export function useIsOnScreen<T extends Element>(
  ref: RefObject<T>,
  threshold = 0.5,
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold])

  return isIntersecting
}
