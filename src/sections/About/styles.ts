import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const AboutContainer = styled(motion.section)<MotionProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  gap: 3rem;
  padding: 8rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const AboutTextContainer = styled(motion.div)<MotionProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h2::before {
    content: '01. ';
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
  > p {
    font-size: 1rem;
    color: var(--gray-400);
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  ul > li {
    list-style: none;
    font-size: 1rem;
  }
`
export const AboutImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: var(--trasition);
  img {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
    border-radius: 4px;
  }
  > div {
    position: absolute;
    display: block;
    width: 17rem;
    height: 17rem;
    top: 0;
    left: 0;
    border-radius: 4px;

    background-color: var(--orange-300);
    opacity: 0.3;
    transition: var(--trasition);
    &:hover {
      opacity: 0;
    }
  }
  &:hover {
    transform: translate(-5px, -5px);
  }
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid var(--orange-300);
    z-index: -1;
    top: 1rem;
    left: 1rem;
    border-radius: 4px;
    transition: var(--trasition);
  }
  &:hover::after {
    transform: translate(10px, 10px);
  }
`
