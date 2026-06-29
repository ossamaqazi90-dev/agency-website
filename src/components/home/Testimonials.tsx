'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const testimonials = [
  {
    quote: 'Scilla didn\'t just redesign our brand — they completely transformed how we show up in our market. The new identity alone generated $200K in new business in the first quarter.',
    name: 'Sarah Chen',
    title: 'CEO, NovaTech',
    avatar: 'SC',
    gradient: 'from-scilla-indigo to-scilla-violet',
  },
  {
    quote: 'The AI receptionist they built handles 80% of our inbound inquiries without any human involvement. Our team now focuses on what actually matters. ROI in under 30 days.',
    name: 'Marcus Williams',
    title: 'Operations Director, Apex Dental',
    avatar: 'MW',
    gradient: 'from-scilla-violet to-pink-600',
  },
  {
    quote: 'I\'ve worked with expensive agencies before. Scilla is in a different league. They combine the strategic depth of a McKinsey with the creative fire of a top design studio.',
    name: 'Priya Nair',
    title: 'Founder, BrightMind Consulting',
    avatar: 'PN',
    gradient: 'from-cyan-600 to-scilla-indigo',
  },
  {
    quote: 'Our chatbot went from concept to live in 10 days. It\'s now closing deals at 2am while we sleep. This is the future of business and Scilla got us there first.',
    name: 'James Patel',
    title: 'Head of Growth, PulseWave',
    avatar: 'JP',
    gradient: 'from-emerald-600 to-cyan-600',
  },
  {
    quote: 'The website they built for us isn\'t just beautiful — it\'s a conversion machine. Bounce rate dropped 40%. Average session time tripled. Pipeline doubled in 60 days.',
    name: 'Emma Thornton',
    title: 'Marketing VP, Stellar AI',
    avatar: 'ET',
    gradient: 'from-orange-500 to-rose-600',
  },
  {
    quote: 'Scilla\'s AI services cut our workflow processing time from 4 hours to 8 minutes. That\'s not an exaggeration — we measured it. The ROI is genuinely hard to believe.',
    name: 'Daniel Osei',
    title: 'CTO, CoreFlow Systems',
    avatar: 'DO',
    gradient: 'from-scilla-deep to-scilla-indigo',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-scilla-ink overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(49,46,129,0.15) 0%, transparent 100%)' }}
        aria-hidden
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <Badge className="mb-5">Testimonials</Badge>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What our clients say
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what happens when brilliant design meets intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-scilla-lav text-scilla-lav" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-5">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-scilla-indigo/40" aria-hidden />
                <p className="text-white/70 text-sm leading-relaxed pl-4">&ldquo;{t.quote}&rdquo;</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
