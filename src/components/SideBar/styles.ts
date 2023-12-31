import { MotionProps, motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface SideBarProps extends MotionProps {
  isOpen: boolean
}

const SideBarContainerStyleMobileOpen = `
  
  background-color: var(--gray-900);
  z-index: 4;
  flex-direction:column;
  align-items:center;
`
const SideBarContainerStyleMobileClosed = `
  
  z-index: 4;
  align-items: center;
  justify-content: center;
`

export const SidebarContainer = styled(motion.aside)<SideBarProps>`
  display: none;
  flex: 1;
  top: 0;
  right: 0;
  > ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin-top: 5rem;
    flex-direction: column;
    > li {
      a {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    align-items: center;
    ${(props) =>
      props.isOpen
        ? css`
            ${SideBarContainerStyleMobileOpen}
          `
        : css`
            ${SideBarContainerStyleMobileClosed}
          `}
  }
`
export const NavBarButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    right: 16px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
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
export const Overlay = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`
