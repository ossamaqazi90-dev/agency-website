'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  }
}

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-scilla-ink pt-20"
      aria-label="Hero"
    >
      {/* ── Animated background orbs ── */}
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Primary orb — indigo */}
          <div
            className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'float-orb 12s ease-in-out infinite',
            }}
          />
          {/* Secondary orb — violet */}
          <div
            className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'float-orb-2 15s ease-in-out infinite',
            }}
          />
          {/* Accent orb — lavender centre */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #C4B5FD 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
      )}

      {/* ── Noise grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
        aria-hidden
      />

      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,181,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <motion.div
          {...fadeUp(0)}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-scilla-indigo/15 border border-scilla-indigo/30 text-scilla-lav text-xs font-semibold tracking-[0.15em] uppercase"
        >
          <Sparkles className="w-3 h-3" />
          Creative Agency × AI Automation
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-bold leading-[1.05] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
        >
          Brilliant brands.{' '}
          <span
            className="block gradient-text"
            style={{ lineHeight: '1.15' }}
          >
            Intelligent automation.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-10 font-body"
        >
          We blend award-winning creative design with powerful AI systems — so your business looks
          world-class and runs smarter, all at once.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="relative group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white overflow-hidden bg-gradient-to-r from-scilla-indigo to-scilla-violet shadow-xl shadow-scilla-indigo/30 hover:shadow-2xl hover:shadow-scilla-violet/35 hover:scale-[1.03] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-scilla-violet to-scilla-vlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="relative w-4 h-4" />
            <span className="relative">Book a Call</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-scilla-lav border border-scilla-lav/20 bg-white/[0.03] hover:bg-white/[0.06] hover:border-scilla-lav/40 hover:text-white transition-all duration-300"
          >
            View Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Social proof numbers */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: '35+', label: 'Projects Delivered' },
            { value: '20K+', label: 'Hours Automated' },
            { value: '95%',  label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0B0B14)',
        }}
        aria-hidden
      />

      {/* ── Floating particles ── */}
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-scilla-lav/40"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float-orb ${6 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
