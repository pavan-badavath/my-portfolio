import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
}

const ProjectCard = ({ title, description, tech, link, repo }: ProjectCardProps) => {
  return (
    <motion.article
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/40"
      whileHover={{ y: -2 }}
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-700 dark:hover:text-slate-200"
              >
                Live
              </a>
            ) : null}
            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-700 dark:hover:text-slate-200"
              >
                Code
              </a>
            ) : null}
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default ProjectCard
