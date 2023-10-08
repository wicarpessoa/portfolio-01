import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const ExperienceContainer = styled(motion.section)<MotionProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 8rem 0;

  > div {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    > ul {
      list-style: none;
      border-left: 2px solid var(--gray-700);
      > li {
        font-size: 1rem;
      }
    }
  }
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h2::before {
    content: '02. ';
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
    width: 100%;
    margin: auto 0;
  }
  @media (max-width: 768px) {
    > div {
      flex-direction: column;
      gap: 1rem;
      > ul {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid var(--gray-700);
        border-left: none;
      }
    }
  }
`
export const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 12px;

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 1;

    > h3 {
      font-size: 1.2rem;

      color: var(--gray-100);
    }
    > span {
      font-size: 1rem;
      color: var(--orange-100);
    }
    p {
      color: var(--gray-400);
      &::before {
        content: '- ';
      }
    }
  }
`
