import { Variants } from 'framer-motion'
import { useState, useEffect, RefObject } from 'react'

function useIsOnScreenOnce<T extends Element>(
  ref: RefObject<T>,
  threshold = 0.5,
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationPlayed) {
          setIntersecting(true)
          setAnimationPlayed(true)
        }
      },
      { threshold },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold, animationPlayed])

  return isIntersecting
}

const staggeredAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const childAnimation: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}
const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    opacity: 0.8,
  },
}
export {
  useIsOnScreenOnce,
  staggeredAnimation,
  childAnimation,
  sidebarVariants,
}
