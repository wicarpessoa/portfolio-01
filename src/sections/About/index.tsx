import { useRef } from 'react'
import { StackTag } from '../../components/StackTag'
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from '../../hooks/useIsOnScreenOnce'
import { AboutContainer, AboutImgContainer, AboutTextContainer } from './styles'
const experienceTags = [
  {
    title: 'React.js',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Next.js',
  },
  {
    title: 'Tailwind.css',
  },
  {
    title: 'Node.js',
  },
  {
    title: 'Styled-Components',
  },
]
export function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreenOnce(ref, 0.7)
  console.log(onScreen)
  return (
    <AboutContainer
      id="sobre"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <AboutTextContainer>
        <h2>Sobre mim</h2>

        <p>
          Olá! Meu nome é Wicar Pessoa e sou apaixonado por dar vida a ideias na
          internet. Meu mergulho no mundo do desenvolvimento web iniciou em
          2022, e desde então, tenho dedicado cada dia para aprimorar meus
          conhecimentos e habilidades.
        </p>
        <p>
          Ao longo deste último ano como desenvolvedor, adotei o aprendizado
          contínuo como meu mantra. Estou constantemente buscando novos
          conhecimentos e técnicas para criar aplicações mais eficientes, com
          funcionalidades práticas que podem facilitar e melhorar a experiência
          dos usuários.
        </p>
        <p>
          Trabalhar com tecnologia não é apenas uma profissão para mim, mas uma
          paixão que combina desafios e inovação. E a cada projeto, busco não
          apenas codificar, mas também incorporar o que aprendi, garantindo
          assim resultados de alta qualidade.
        </p>
        <p>Aqui alguma tecnologias que eu venho usando Recentemente:</p>
        <ul>
          {experienceTags.map((experienceTag) => {
            return (
              <li key={experienceTag.title}>
                <StackTag title={experienceTag.title} />
              </li>
            )
          })}
        </ul>
      </AboutTextContainer>
      <AboutImgContainer>
        <img src="https://i.imgur.com/NRcMCyj.jpg" alt="" />
        <div />
      </AboutImgContainer>
    </AboutContainer>
  )
}
