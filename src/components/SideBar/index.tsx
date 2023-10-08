import { List, X } from '@phosphor-icons/react'
import { SidebarContainer, NavBarButton, Overlay } from './styles'
import { sections } from '../../utils/data'
import { NavItem } from '../NavBar/styles'

interface SideBarProps {
  onClick: () => void
  isOpen: boolean
}

const sidebarVariants = {
  open: {
    height: '100vh',
    width: '50%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  closed: {
    height: '4rem',
    width: '4rem',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}

// Define animation variants for the overlay
const overlayVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
}

export function SideBar({ onClick, isOpen }: SideBarProps) {
  return (
    <>
      <SidebarContainer
        isOpen={isOpen}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        {isOpen ? (
          <>
            <NavBarButton
              aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
              onClick={onClick}
            >
              <X size={24} />
            </NavBarButton>
            <ul>
              {sections.map((section, index) => {
                const IndexWithTwoDigits = (index + 1)
                  .toString()
                  .padStart(2, '0')
                return (
                  <NavItem key={section} index={IndexWithTwoDigits}>
                    <a href={`#${section}`} onClick={onClick}>
                      {section}
                    </a>
                  </NavItem>
                )
              })}
            </ul>
          </>
        ) : (
          <NavBarButton
            aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
            onClick={onClick}
          >
            <List size={24} />
          </NavBarButton>
        )}
      </SidebarContainer>
      {isOpen && (
        <Overlay
          onClick={onClick}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={overlayVariants}
        />
      )}
    </>
  )
}
