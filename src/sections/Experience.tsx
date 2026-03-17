import { motion } from 'framer-motion'
import type { Resume } from '../data/resume'
import SectionWrapper, { itemVariants } from '../components/SectionWrapper'
import TimelineItem from '../components/TimelineItem'

type ExperienceProps = {
  resume: Resume
}

const Experience = ({ resume }: ExperienceProps) => {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-900" staggerChildren>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Past work that sharpened my craft. Focused on measurable outcomes, polished interactions, and scale.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resume.experience.map((item) => (
            <motion.div key={item.company + item.role} variants={itemVariants} initial="hidden" animate="visible">
              <TimelineItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience
