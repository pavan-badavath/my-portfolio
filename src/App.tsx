import React, { Suspense } from 'react'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { resume } from './data/resume'

const About = React.lazy(() => import('./sections/About'))
const Experience = React.lazy(() => import('./sections/Experience'))
const Projects = React.lazy(() => import('./sections/Projects'))
const Skills = React.lazy(() => import('./sections/Skills'))
const Education = React.lazy(() => import('./sections/Education'))
const Contact = React.lazy(() => import('./sections/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar name={resume.name} />
      <main className="relative">
        <Hero resume={resume} />
        <Suspense
          fallback={
            <div className="space-y-10 px-6 py-24">
              <div className="h-72 rounded-xl bg-slate-100/60 dark:bg-slate-900/60" />
              <div className="h-72 rounded-xl bg-slate-100/60 dark:bg-slate-900/60" />
            </div>
          }
        >
          <About resume={resume} />
          <Experience resume={resume} />
          <Projects resume={resume} />
          <Skills resume={resume} />
          <Education resume={resume} />
          <Contact resume={resume} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
