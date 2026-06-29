'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business, audience, and goals. Strategy isn\'t a meeting — it\'s the foundation everything is built on.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design',
    description: 'From brand identity to UX architecture, we craft experiences that are both beautiful and strategically engineered to convert.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description: 'Pixel-perfect execution. Production-grade development. We build things that work flawlessly on every screen and every device.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Automate',
    description: 'We layer in AI and automation to make your business run smarter — 24/7 systems that work harder than any team of humans.',
  },
]

export function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-scilla-ink overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-scilla-indigo/20 to-transparent pointer-events-none hidden lg:block" aria-hidden />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <Badge className="mb-5">Our Process</Badge>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            How we turn ideas into{' '}
            <span className="gradient-text">outcomes</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            A proven four-phase system that delivers exceptional results — on time, every time.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, #4F46E5, #7C3AED, transparent)' }}
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step node */}
              <div className="relative mb-6 z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-scilla-indigo to-scilla-violet flex items-center justify-center shadow-xl shadow-scilla-indigo/25">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-scilla-ink border-2 border-scilla-lav/50 flex items-center justify-center">
                  <span className="text-[10px] font-display font-bold text-scilla-lav">{step.number}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-2.5">{step.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
