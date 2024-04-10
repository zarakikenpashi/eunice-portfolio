import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Project from './components/Projects/Project'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div className='main'>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
