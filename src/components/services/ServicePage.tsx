'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

export interface ServicePageProps {
  badge: string
  hero: {
    headline: string
    subheadline: string
    cta?: string
  }
  overview: string
  features: string[]
  process: { step: string; title: string; description: string }[]
  outcomes: { metric: string; description: string }[]
  faqs: { question: string; answer: string }[]
  gradient: string
  accentColor: string
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.08] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-white text-base group-hover:text-scilla-lav transition-colors">
          {question}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-scilla-lav shrink-0" />
          : <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-scilla-lav shrink-0 transition-colors" />
        }
      </button>
      {open && (
        <div className="pb-5 text-white/55 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export function ServicePage({
  badge, hero, overview, features, process, outcomes, faqs, gradient, accentColor,
}: ServicePageProps) {
  return (
    <div className="bg-scilla-ink min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative min-h-[70vh] flex items-center pt-24 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${accentColor}18 0%, transparent 100%)` }}
      >
        {/* Background orb */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
          aria-hidden
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl"
          >
            <Badge className="mb-6">{badge}</Badge>
            <h1
              className="font-display font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              dangerouslySetInnerHTML={{ __html: hero.headline }}
            />
            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet hover:from-scilla-violet hover:to-scilla-vlight transition-all duration-300 shadow-lg shadow-scilla-indigo/25 w-fit"
              >
                {hero.cta ?? 'Get Started'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#overview"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-scilla-lav border border-scilla-lav/20 hover:border-scilla-lav/40 hover:text-white transition-all duration-300 w-fit"
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Overview + Features ── */}
      <section id="overview" className="py-20 lg:py-24 bg-[#07070F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2
                className="font-display font-bold text-white mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                What&apos;s included
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">{overview}</p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: accentColor }}
                    />
                    <span className="text-white/70 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {outcomes.map((o, i) => (
                <motion.div
                  key={o.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <div
                    className="font-display font-bold text-3xl mb-1"
                    style={{ color: accentColor }}
                  >
                    {o.metric}
                  </div>
                  <div className="text-white/50 text-sm leading-relaxed">{o.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="py-20 lg:py-24 bg-scilla-ink">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-14"
          >
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              How it works
            </h2>
          </motion.div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm text-white"
                  style={{ background: gradient }}
                >
                  {p.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1.5">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-24 bg-[#07070F]">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2
              className="font-display font-bold text-white mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Frequently asked questions
            </h2>
          </motion.div>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] px-6 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-scilla-ink">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center p-12 rounded-3xl border border-scilla-indigo/25"
            style={{
              background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(79,70,229,0.08) 100%)`,
            }}
          >
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Ready to get started?
            </h2>
            <p className="text-white/55 mb-8 leading-relaxed max-w-md mx-auto">
              Book a free 30-minute strategy call and let&apos;s map out exactly what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet hover:from-scilla-violet hover:to-scilla-vlight transition-all duration-300 shadow-lg shadow-scilla-indigo/25"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
