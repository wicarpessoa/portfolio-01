import { Button } from '../../components/Button'
import { HeroContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer id="hero">
      <span>Hi, my name is</span>
      <h1>Wicar Pessoa.</h1>
      <h2>Im a Front end developer.</h2>
      <p>
        I’ m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible,
      </p>
      <a href="./src/assets/resume.pdf" download>
        <Button title="Resume" />
      </a>
    </HeroContainer>
  )
}
