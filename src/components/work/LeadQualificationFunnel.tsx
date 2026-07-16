'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const CONCERN_OPTIONS = [
  'General checkup & cleaning',
  'Cosmetic dentistry',
  'Dental emergency',
  'Invisalign / braces',
]

const TIMING_OPTIONS = [
  { label: 'This week', urgent: true },
  { label: 'Within a month', urgent: false },
  { label: 'Just researching', urgent: false },
]

const TOTAL_STEPS = 3

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-10" aria-hidden>
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <div key={i} className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-scilla-indigo to-scilla-violet"
            initial={{ width: '0%' }}
            animate={{ width: i < step ? '100%' : '0%' }}
            transition={{ duration: 0.4, ease }}
          />
        </div>
      ))}
    </div>
  )
}

function OptionCard({
  label,
  selected,
  onClick,
  sublabel,
}: {
  label: string
  selected: boolean
  onClick: () => void
  sublabel?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
        selected
          ? 'bg-scilla-indigo/20 border-scilla-indigo/60 text-white'
          : 'bg-white/[0.03] border-white/10 text-white/75 hover:bg-white/[0.06] hover:border-white/20'
      }`}
    >
      <span>
        <span className="font-semibold text-sm">{label}</span>
        {sublabel && <span className="block text-xs text-white/40 mt-0.5">{sublabel}</span>}
      </span>
      <span
        className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-all ${
          selected ? 'border-scilla-indigo bg-scilla-indigo' : 'border-white/20'
        }`}
      >
        {selected && <CheckCircle2 className="w-4 h-4 text-white" />}
      </span>
    </button>
  )
}

export function LeadQualificationFunnel() {
  const [step, setStep] = useState(0)
  const [concern, setConcern] = useState<string | null>(null)
  const [timing, setTiming] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const canAdvance = step === 0 ? !!concern : step === 1 ? !!timing : true

  function next() {
    if (step < TOTAL_STEPS - 1) setStep(step + 1)
    else setStep(TOTAL_STEPS)
  }
  function back() {
    if (step > 0) setStep(step - 1)
  }

  const done = step === TOTAL_STEPS

  return (
    <div className="max-w-lg mx-auto p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
      {!done && <ProgressBar step={step} />}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease }}
          >
            <h2 className="font-display font-bold text-white text-xl mb-1.5">What brings you in today?</h2>
            <p className="text-white/45 text-sm mb-6">Takes 30 seconds — no account needed.</p>
            <div className="space-y-3">
              {CONCERN_OPTIONS.map((opt) => (
                <OptionCard key={opt} label={opt} selected={concern === opt} onClick={() => setConcern(opt)} />
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease }}
          >
            <h2 className="font-display font-bold text-white text-xl mb-1.5">How soon are you looking to book?</h2>
            <p className="text-white/45 text-sm mb-6">We prioritise urgent requests with same-day callbacks.</p>
            <div className="space-y-3">
              {TIMING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.label}
                  label={opt.label}
                  sublabel={opt.urgent ? 'Fast-tracked for a callback within 15 minutes' : undefined}
                  selected={timing === opt.label}
                  onClick={() => setTiming(opt.label)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease }}
          >
            <h2 className="font-display font-bold text-white text-xl mb-1.5">Where should we send confirmation?</h2>
            <p className="text-white/45 text-sm mb-6">We&apos;ll text you the next available slot.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="funnel-name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  id="funnel-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="funnel-phone" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  id="funnel-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-scilla-lav/50 focus:ring-1 focus:ring-scilla-lav/20 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        )}

        {done && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="text-center py-6"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h2 className="font-display font-bold text-white text-xl mb-2">
              You&apos;re pre-qualified{name ? `, ${name.split(' ')[0]}` : ''}!
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto mb-6">
              {timing === 'This week'
                ? "We'll call you within 15 minutes to lock in your appointment."
                : "We'll reach out shortly to confirm a time that works for you."}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/50">
              <Sparkles className="w-3.5 h-3.5 text-scilla-lav" />
              {concern} · {timing}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!done && (
        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white disabled:opacity-0 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet disabled:opacity-40 disabled:cursor-not-allowed hover:from-scilla-violet hover:to-scilla-vlight transition-all duration-300"
          >
            {step === TOTAL_STEPS - 1 ? 'Get My Appointment Time' : 'Continue'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
