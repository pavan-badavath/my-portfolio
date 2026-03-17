import { useState, type FormEvent } from 'react'
import type { Resume } from '../data/resume'
import SectionWrapper from '../components/SectionWrapper'

type ContactProps = {
  resume: Resume
}

const Contact = ({ resume }: ContactProps) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!email || !message) return
    const subject = encodeURIComponent('Hello from your portfolio')
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${resume.contact.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Want to collaborate or have a question? Reach out via email or connect on GitHub/LinkedIn.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Reach out</h3>
            <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-200">Email</dt>
                <dd>
                  <a
                    href={`mailto:${resume.contact.email}`}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    {resume.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-200">Location</dt>
                <dd className="text-slate-600 dark:text-slate-300">{resume.contact.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-200">LinkedIn</dt>
                <dd>
                  <a
                    href={resume.contact.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    {resume.contact.linkedIn.replace('https://', '')}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-200">GitHub</dt>
                <dd>
                  <a
                    href={resume.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    {resume.contact.github.replace('https://', '')}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Send a message</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              I’ll get back to you via email as soon as I can.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Your email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-800"
                  placeholder="Hi there — I’d love to connect about..."
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Send message
              </button>

              {status === 'sent' ? (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Your mail client should open shortly.</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
