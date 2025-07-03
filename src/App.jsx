import { About } from './pages/About'
import { Readmore } from './pages/Readmore'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'
import { GetInTouch } from './pages/GetInTouch'
import { Heading } from './components/Heading'
import './App.css'


function App() {
  return (
    <div className='body'>
      <About></About>
      <Readmore id="about-me"></Readmore>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Resume></Resume>
      <GetInTouch></GetInTouch>
      <Heading prop="Akshansh Verma 2025"></Heading>
    </div>
  )
}

export default App
