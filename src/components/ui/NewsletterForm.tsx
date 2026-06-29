'use client'

import { ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email address for newsletter"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
      />
      <button
        type="submit"
        className="px-3 py-2 rounded-lg bg-scilla-indigo hover:bg-scilla-violet text-white transition-colors duration-200"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  )
}
