'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#07070F] overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)' }}
        aria-hidden
      />

      <Container narrow>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(49,46,129,0.6) 0%, rgba(79,70,229,0.3) 40%, rgba(124,58,237,0.4) 100%)',
              borderImage: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(79,70,229,0.3)) 1',
            }}
          />
          <div className="absolute inset-0 border border-scilla-indigo/30 rounded-3xl" aria-hidden />

          {/* Noise */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-8"
            >
              <Sparkles className="w-3 h-3 text-scilla-lav" />
              Limited spots available
            </motion.div>

            <h2
              className="font-display font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              Ready to build something{' '}
              <span className="gradient-text-warm">brilliant?</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Let&apos;s talk about your goals. We&apos;ll map out a strategy in 30 minutes — and you&apos;ll leave with
              clarity on exactly what to build, in what order, and why.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Explore our services
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
