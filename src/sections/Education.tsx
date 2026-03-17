import type { Resume } from '../data/resume'
import SectionWrapper from '../components/SectionWrapper'

type EducationProps = {
  resume: Resume
}

const Education = ({ resume }: EducationProps) => {
  return (
    <SectionWrapper id="education" className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Education
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          My academic background and qualifications.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resume.education.map((edu) => (
            <div
              key={edu.institution + edu.degree}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {edu.start} → {edu.end}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{edu.institution}</p>
                </div>
                {edu.location ? (
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Education
