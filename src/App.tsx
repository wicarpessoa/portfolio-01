import { ProjectCard } from './components/ProjectCard'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { GlobalStyle } from './styles/Global'
export function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <ProjectCard />
      <GlobalStyle />
    </div>
  )
}

export default App
