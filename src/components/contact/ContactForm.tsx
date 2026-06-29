'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const services = [
  'Branding',
  'AI Services',
  'Chat Bots',
  'Web Design',
  'AI Receptionist',
  'Multiple services',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      // TODO: replace with real endpoint (e.g. /api/contact, Resend, Formspree)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // Form endpoint not yet wired up — show success anyway for demo
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
        <h3 className="font-display font-bold text-white text-xl mb-2">Message received!</h3>
        <p className="text-white/55 text-sm max-w-xs">
          We&apos;ll be in touch within one business day. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
            Full Name <span aria-hidden>*</span>
          </label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
            Email <span aria-hidden>*</span>
          </label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
          Company
        </label>
        <input
          id="company" name="company" type="text" autoComplete="organization"
          placeholder="Acme Inc."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
          I&apos;m interested in <span aria-hidden>*</span>
        </label>
        <select
          id="service" name="service" required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors appearance-none cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled className="bg-scilla-ink">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-scilla-ink">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id="message" name="message" rows={5} required
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet hover:from-scilla-violet hover:to-scilla-vlight disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-scilla-indigo/25"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <p className="text-center text-xs text-white/30">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  )
}
