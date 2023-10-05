import { useRef } from 'react'
import { StackTag } from '../../components/StackTag'
import { useIsOnScreen } from '../../hooks/useIsOnScreen'
import { AboutContainer, AboutImgContainer, AboutTextContainer } from './styles'
import { Atom } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const staggeredAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This is the delay between each child
    },
  },
}

const childAnimation = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0.2 },
}

export function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreen(ref, 0.3)
  console.log(onScreen)
  return (
    <AboutContainer
      id="sobre"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ duration: 2 }}
    >
      <AboutTextContainer variants={staggeredAnimation}>
        <motion.h2 variants={childAnimation}>About Me</motion.h2>
        <motion.p variants={childAnimation}>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </motion.p>
        <motion.p variants={childAnimation}>
          Here are a few technologies I’ve been working with recently:
        </motion.p>
        <motion.ul variants={childAnimation}>
          <li>
            <StackTag title="React">
              <Atom size={20} />
            </StackTag>
          </li>
          <li>
            <StackTag title="TypeScript">
              <Atom size={20} />
            </StackTag>
          </li>
          <li>
            <StackTag title="Next.js">
              <Atom size={20} />
            </StackTag>
          </li>
          <li>
            <StackTag title="Tailwind.css">
              <Atom size={20} />
            </StackTag>
          </li>
          <li>
            <StackTag title="Node.jkss">
              <Atom size={20} />
            </StackTag>
          </li>
          <li>
            <StackTag title="Styled-Components">
              <Atom size={20} />
            </StackTag>
          </li>
        </motion.ul>
      </AboutTextContainer>
      <AboutImgContainer>
        <img src="./src/assets/profile.jpg" alt="" />
        <div />
      </AboutImgContainer>
    </AboutContainer>
  )
}
