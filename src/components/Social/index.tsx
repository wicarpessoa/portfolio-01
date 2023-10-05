import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { SocialContainer } from './styles'

export function Social() {
  return (
    <SocialContainer className="social">
      <ul>
        <li>
          <a
            href="https://github.com/wicarpessoa"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wicar-pessoa-5b359b233/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={24} />
          </a>
        </li>
      </ul>
      <div />
    </SocialContainer>
  )
}
