import { useMemo, useState } from 'react'

type NavItem = { label: string; href: string }

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const renderLinks = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          onClick={handleLinkClick}
        >
          {item.label}
        </a>
      )),
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          {name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">{renderLinks}</nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200/80 bg-white/70 p-2 text-slate-700 shadow-sm transition hover:bg-white dark:border-slate-700/80 dark:bg-slate-900/40 dark:text-slate-200 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-200/60 bg-white/90 px-6 py-6 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-950/70 md:hidden">
          <div className="flex flex-col gap-4">{renderLinks}</div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
