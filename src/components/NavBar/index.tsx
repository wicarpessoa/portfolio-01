import { useState, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'

export function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldShowActions, setShouldShowActions] = useState(true)
  const controls = useAnimation()
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollUp = scrollY < lastScrollY

      // If scrolling up, show the navbar, otherwise hide it
      if (scrollUp) {
        setShouldShowActions(true)
      } else {
        setShouldShowActions(false)
      }

      setLastScrollY(scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (shouldShowActions) {
      controls.start({ y: 0, opacity: 1 })
    } else {
      controls.start({ y: -60, opacity: 0 })
    }
  }, [shouldShowActions, controls])
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        background: 'white',
        zIndex: 3,
      }}
    >
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </motion.div>
  )
}
