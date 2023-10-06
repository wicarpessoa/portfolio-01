import { NavBar } from './components/NavBar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { GlobalStyle } from './styles/Global'
export function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </div>
  )
}

export default App
