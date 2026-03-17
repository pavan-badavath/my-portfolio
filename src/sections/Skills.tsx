import { motion } from 'framer-motion'
import type { Resume } from '../data/resume'
import SectionWrapper, { itemVariants } from '../components/SectionWrapper'
import SkillPill from '../components/SkillPill'

type SkillsProps = {
  resume: Resume
}

const Skills = ({ resume }: SkillsProps) => {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-900" staggerChildren>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          A high-level view of what I use day-to-day.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resume.skills.frontend.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Backend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resume.skills.backend.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Tooling</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resume.skills.tooling.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
