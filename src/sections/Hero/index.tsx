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
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span variants={childAnimation}>Oi, Meu nome é</motion.span>
      <motion.h1 variants={childAnimation}>Wicar Pessoa.</motion.h1>
      <motion.h2 variants={childAnimation}>Sou um Dev Front-end</motion.h2>
      <motion.p variants={childAnimation}>
        Sou um desenvolvedor Front-end dedicado a criar aplicações que não só
        proporcionam experiências excepcionais para os usuários, mas que também
        são acessíveis e intuitivas para todos.
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
