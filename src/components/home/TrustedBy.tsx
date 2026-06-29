'use client'

import { useReducedMotion } from 'framer-motion'

const logos = [
  'Acme Corp', 'Stellar AI', 'NovaTech', 'BrightMind', 'Apex Digital',
  'Luminary Co', 'CoreFlow', 'PulseWave', 'SwiftBase', 'Zenith Labs',
]

export function TrustedBy() {
  const reduced = useReducedMotion()

  return (
    <section className="relative py-14 bg-[#07070F] border-y border-white/[0.06] overflow-hidden" aria-label="Trusted by">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070F] to-transparent z-10 pointer-events-none" aria-hidden />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070F] to-transparent z-10 pointer-events-none" aria-hidden />

      <div className="mb-5 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
          Trusted by forward-thinking companies
        </p>
      </div>

      <div
        className="flex gap-12 w-max"
        style={
          reduced
            ? { width: '100%', justifyContent: 'center', flexWrap: 'wrap' }
            : { animation: 'marquee 30s linear infinite' }
        }
        aria-label="Logo marquee"
      >
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center h-10 px-6 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0"
            aria-label={`${name} logo placeholder`}
          >
            <span className="text-sm font-semibold text-white/30 tracking-wide whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
