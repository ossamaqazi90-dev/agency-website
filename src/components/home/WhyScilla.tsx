'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Layers, Shield } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const props = [
  {
    icon: Zap,
    title: 'Speed without sacrifice',
    description: 'We move fast — but never at the cost of quality. Our systems are built for rapid delivery with agency-level craft at every touchpoint.',
  },
  {
    icon: Target,
    title: 'Strategy-first thinking',
    description: 'Every pixel and every prompt is grounded in business goals. We don\'t just make things look good — we make them perform.',
  },
  {
    icon: Layers,
    title: 'Integrated by design',
    description: 'Branding, AI, web, and automation under one roof means your systems talk to each other from day one. No silos, no handoff waste.',
  },
  {
    icon: Shield,
    title: 'Outcomes, not deliverables',
    description: 'We measure success by your growth — more leads, more time saved, more revenue. We\'re invested in what happens after we ship.',
  },
]

export function WhyScilla() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#07070F] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse, #312E81 0%, transparent 70%)' }}
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="mb-5">Why Scilla</Badge>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Where creative vision meets{' '}
              <span className="gradient-text">machine intelligence</span>
            </h2>
            <p className="text-white/55 leading-relaxed text-lg mb-8">
              Most agencies do design. Most tech shops do automation. We do both — and we make them work
              together to compound your results in ways neither could achieve alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet hover:from-scilla-violet hover:to-scilla-vlight transition-all duration-300 shadow-lg shadow-scilla-indigo/25"
              >
                Start a project
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-scilla-lav border border-scilla-lav/20 hover:border-scilla-lav/40 hover:text-white transition-all duration-300"
              >
                Meet the team
              </a>
            </div>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {props.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-scilla-lav/20 transition-all duration-300 group"
              >
                <div className="mb-3 w-10 h-10 rounded-lg bg-scilla-indigo/20 border border-scilla-indigo/30 flex items-center justify-center group-hover:bg-scilla-indigo/30 transition-colors">
                  <prop.icon className="w-5 h-5 text-scilla-lav" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1.5">{prop.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
