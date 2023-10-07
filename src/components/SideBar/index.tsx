import { List, X } from '@phosphor-icons/react'
import { SidebarContainer, NavBarButton, Overlay } from './styles'
import { sections } from '../../utils/data'
import { NavItem } from '../NavBar/styles'

interface SideBarProps {
  onClick: () => void
  isOpen: boolean
}

export function SideBar({ onClick, isOpen }: SideBarProps) {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        {isOpen ? (
          <>
            <NavBarButton onClick={onClick}>
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
          <NavBarButton onClick={onClick}>
            <List size={24} />
          </NavBarButton>
        )}
      </SidebarContainer>
      {isOpen && <Overlay onClick={onClick} />}
    </>
  )
}
