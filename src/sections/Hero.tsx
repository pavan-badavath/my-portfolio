import { motion } from 'framer-motion'
import type { Resume } from '../data/resume'
import profilePlaceholder from '../assets/profile.svg'
import { TypewriterEffect } from '../components/TypewriterEffect'

type HeroProps = {
  resume: Resume
}

const Hero = ({ resume }: HeroProps) => {
  const photoSrc = resume.photo ?? profilePlaceholder

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Hi, I’m {resume.name}
          </p>
          <TypewriterEffect
            titles={["Frontend Developer", "React Developer"]}
            displayElement="h1"
            className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {resume.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Let’s talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              View work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto w-52 overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg shadow-slate-900/10 dark:border-slate-800/60 dark:bg-slate-950/40 lg:ml-auto">
            <img
              src={photoSrc}
              alt={`${resume.name} portrait`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
