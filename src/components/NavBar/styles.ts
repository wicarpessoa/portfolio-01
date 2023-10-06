import { MotionProps, motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface NavItemProps {
  index: string
}

interface SideBarProps extends MotionProps {
  isOpen: boolean
}

export const NavBarContainer = styled(motion.div)<MotionProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: var(--gray-900);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  > ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    > li {
    }
  }

  align-items: center;
  padding: 0 2rem;
  @media (max-width: 768px) {
    > ul {
      display: none;
    }
  }
`
export const NavItem = styled.li<NavItemProps>`
  > a {
    text-decoration: none;
    color: var(--gray-300);
    font-size: 1rem;
    transition: var(--trasition);
    white-space: nowrap;
    &:hover {
      color: var(--orange-300);
    }
    &::before {
      content: '${(props) => `${props.index}. `}';
      color: var(--orange-300);
    }
  }
`
export const NavBarButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inline;
    background-color: transparent;
    border: none;
    color: var(--gray-300);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--orange-700);
    }
  }
`
const SideBarContainerStyleMobile = `
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--gray-900);
  z-index: 4;
  padding: 2rem;
  display:flex;
`

export const SidebarContainer = styled(motion.aside)<SideBarProps>`
  display: inline;
  flex: 1;
  > ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    > li {
    }
  }
  @media (max-width: 768px) {
    display: none;
    ${(props) =>
      props.isOpen
        ? css`
            ${SideBarContainerStyleMobile}
          `
        : ``}
  }
`
