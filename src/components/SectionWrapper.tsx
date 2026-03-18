import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionWrapperProps = {
  id?: string
  className?: string
  children: ReactNode
  staggerChildren?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const SectionWrapper = ({ id, className = '', children, staggerChildren = false }: SectionWrapperProps) => {
  const content = staggerChildren ? (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      {children}
    </motion.div>
  ) : (
    children
  )

  return (
    <motion.section
      id={id}
      className={`w-full scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">{content}</div>
    </motion.section>
  )
}

export default SectionWrapper
export { itemVariants }
