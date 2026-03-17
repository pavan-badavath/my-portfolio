import { motion } from 'framer-motion'

type TimelineItemProps = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  bullets: string[]
}

const TimelineItem = ({ company, role, start, end, location, bullets }: TimelineItemProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950/40"
      whileHover={{ y: -2 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {start} → {end}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{role}</h3>
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{company}</p>
        </div>
        {location ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">{location}</p>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default TimelineItem
