import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

interface NavItemProps {
  index: string
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
