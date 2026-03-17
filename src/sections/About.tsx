import type { Resume } from '../data/resume'
import SectionWrapper from '../components/SectionWrapper'

type AboutProps = {
  resume: Resume
}

const About = ({ resume }: AboutProps) => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {resume.summary}
        </p>
      </div>
    </SectionWrapper>
  )
}

export default About
