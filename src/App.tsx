import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { resume } from './data/resume'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar name={resume.name} />
      <main className="relative">
        <Hero resume={resume} />
        <About resume={resume} />
        <Experience resume={resume} />
        <Projects resume={resume} />
        <Skills resume={resume} />
        <Education resume={resume} />
        <Contact resume={resume} />
      </main>
      <Footer />
    </div>
  )
}

export default App
