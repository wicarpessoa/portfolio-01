import { StackTag } from '../../components/StackTag'
import { AboutContainer, AboutImgContainer, AboutTextContainer } from './styles'
import { Atom } from '@phosphor-icons/react'
export function About() {
  return (
    <AboutContainer>
      <AboutTextContainer>
        <h2>About Me</h2>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul>
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
        </ul>
      </AboutTextContainer>
      <AboutImgContainer>
        <img src="./src/assets/profile.jpg" alt="" />
        <div />
      </AboutImgContainer>
    </AboutContainer>
  )
}
