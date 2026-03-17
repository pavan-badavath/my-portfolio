import { motion } from 'framer-motion'
import type { Resume } from '../data/resume'
import SectionWrapper, { itemVariants } from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'

type ProjectsProps = {
  resume: Resume
}

const Projects = ({ resume }: ProjectsProps) => {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-950" staggerChildren>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          A selection of work focused on UI, performance, and polish.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {resume.projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} initial="hidden" animate="visible">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
