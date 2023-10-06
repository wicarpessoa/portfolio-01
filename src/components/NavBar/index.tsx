import { useState, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import {
  NavBarButton,
  NavBarContainer,
  NavItem,
  SidebarContainer,
} from './styles'
import { List, X } from '@phosphor-icons/react'
import { sidebarVariants } from '../../hooks/useIsOnScreenOnce'

export function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldShowActions, setShouldShowActions] = useState(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const controls = useAnimation()

  const sections = ['sobre', 'projetos', 'experiencia', 'contato']

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY])

  useEffect(() => {
    if (shouldShowActions) {
      controls.start({ y: 0, opacity: 1 })
    } else {
      controls.start({ y: -60, opacity: 0 })
    }
  }, [shouldShowActions, controls])
  return (
    <NavBarContainer
      initial={{ y: -60, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <img src="" alt="" />
      {isOpen ? (
        <SidebarContainer
          isOpen={isOpen}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
        >
          <NavBarButton onClick={() => setIsOpen(false)}>
            <X size={24} />
          </NavBarButton>

          <ul>
            {sections.map((section, index) => {
              const IndexWithTwoDigits = (index + 1).toString().padStart(2, '0')
              return (
                <NavItem key={section} index={IndexWithTwoDigits}>
                  <a href={`#${section}`}>{section}</a>
                </NavItem>
              )
            })}
          </ul>
        </SidebarContainer>
      ) : (
        <ul>
          {sections.map((section, index) => {
            const IndexWithTwoDigits = (index + 1).toString().padStart(2, '0')
            return (
              <NavItem key={section} index={IndexWithTwoDigits}>
                <a href={`#${section}`}>{section}</a>
              </NavItem>
            )
          })}
        </ul>
      )}
      <NavBarButton onClick={() => setIsOpen(true)}>
        <List size={24} />
      </NavBarButton>
    </NavBarContainer>
  )
}
