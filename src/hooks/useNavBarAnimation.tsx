import { useState, useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export function useNavBarAnimation(isSidebarOpen: boolean) {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldShowActions, setShouldShowActions] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      if (isSidebarOpen) return

      const scrollY = window.scrollY
      const scrollUp = scrollY < lastScrollY

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
  }, [lastScrollY, isSidebarOpen])

  useEffect(() => {
    if (shouldShowActions) {
      controls.start({ y: 0, opacity: 1 })
    } else {
      controls.start({ y: -60, opacity: 0 })
    }
  }, [shouldShowActions, controls])

  return controls
}
