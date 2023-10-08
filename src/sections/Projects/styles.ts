import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectsContainer = styled(motion.section)<MotionProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 8rem 0;
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h2::before {
    content: '03. ';
    font-family: 'Roboto', sans-serif;
    color: var(--orange-300);
    font-size: 1.2rem;
    text-align: left;
    margin-top: auto;
  }
  > h2::after {
    content: '';
    background-color: var(--gray-700);
    height: 1px;
    flex: 1;
    margin: auto 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`
