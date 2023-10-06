import { motion } from 'framer-motion'
import { Button } from '../../components/Button'
import { HeroContainer } from './styles'
import { useRef } from 'react'
import {
  childAnimation,
  staggeredAnimation,
  useIsOnScreenOnce,
} from '../../hooks/useIsOnScreenOnce'

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreenOnce(ref, 0.3)
  return (
    <HeroContainer
      id="hero"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ duration: 2 }}
    >
      <motion.span variants={childAnimation}>Hi, my name is</motion.span>
      <motion.h1 variants={childAnimation}>Wicar Pessoa.</motion.h1>
      <motion.h2 variants={childAnimation}>Im a Front end developer.</motion.h2>
      <motion.p variants={childAnimation}>
        I’ m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible,
      </motion.p>
      <motion.a
        variants={childAnimation}
        href="./src/assets/resume.pdf"
        download
      >
        <Button title="Download CV" />
      </motion.a>
    </HeroContainer>
  )
}
