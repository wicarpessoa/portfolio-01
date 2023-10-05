import { Social } from './components/Social'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { GlobalStyle } from './styles/Global'
export function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Social />
      <GlobalStyle />
    </div>
  )
}

export default App
