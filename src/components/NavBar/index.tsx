import { NavBarContainer, NavItem } from './styles'

import { sections } from '../../utils/data'
import { useNavBarAnimation } from '../../hooks/useNavBarAnimation'
import { useState } from 'react'
import { SideBar } from '../SideBar'

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const controls = useNavBarAnimation(isOpen)

  const handleSidebarToggle = () => {
    console.log('Toggling Sidebar')
    setIsOpen((prevState) => !prevState)
  }

  return (
    <NavBarContainer
      initial={{ y: -60, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <img src="" alt="" />

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
      <SideBar onClick={handleSidebarToggle} isOpen={isOpen} />
    </NavBarContainer>
  )
}
