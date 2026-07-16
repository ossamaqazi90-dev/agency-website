'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const stats = [
  { value: 35,   suffix: '+', label: 'Projects Delivered',   description: 'Across branding, AI, web, and automation' },
  { value: 20,   suffix: 'K+', label: 'Hours Automated',     description: 'Given back to our clients every year' },
  { value: 95,   suffix: '%', label: 'Client Satisfaction',  description: 'Measured after every engagement' },
  { value: 24,   suffix: '/7', label: 'AI Systems Running',  description: 'So your business never sleeps' },
]

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()
    const endValue = value

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * endValue))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 bg-scilla-ink overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(49,46,129,0.15) 0%, transparent 50%, rgba(124,58,237,0.10) 100%)' }}
        aria-hidden
      />
      <div className="absolute inset-0 border-y border-scilla-indigo/10 pointer-events-none" aria-hidden />

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div
                className="font-display font-bold text-white mb-1"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-scilla-lav text-sm mb-1 tracking-wide">{stat.label}</div>
              <div className="text-white/35 text-xs leading-snug">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
