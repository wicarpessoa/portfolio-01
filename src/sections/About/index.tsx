import { AboutContainer, AboutImgContainer, AboutTextContainer } from './styles'

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
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Taildwind.css</li>
        </ul>
      </AboutTextContainer>
      <AboutImgContainer>
        <img src="./src/assets/profile.jpg" alt="" />
        <div />
      </AboutImgContainer>
    </AboutContainer>
  )
}
