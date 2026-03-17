import type { ReactNode } from 'react'

const Footer = ({ children }: { children?: ReactNode }) => (
  <footer className="border-t border-slate-200/60 bg-white/70 py-10 text-center text-sm text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-400">
    <div className="mx-auto max-w-6xl px-6">
      <p>{children ?? 'Built with React, Tailwind, and a focus on simplicity.'}</p>
    </div>
  </footer>
)

export default Footer
