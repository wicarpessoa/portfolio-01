import './App.css'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
export function App() {
  return (
    <div className="container">
      <Hero />
      <About />
    </div>
  )
}

export default App
