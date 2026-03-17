import { motion } from 'framer-motion'

const SkillPill = ({ label }: { label: string }) => (
  <motion.span
    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    {label}
  </motion.span>
)

export default SkillPill
