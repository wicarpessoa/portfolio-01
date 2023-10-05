import { Variants } from 'framer-motion'
import { useState, useEffect, RefObject } from 'react'

function useIsOnScreen<T extends Element>(
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

const staggeredAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This is the delay between each child
    },
  },
}

const childAnimation: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0.2 },
}

export { useIsOnScreen, staggeredAnimation, childAnimation }
