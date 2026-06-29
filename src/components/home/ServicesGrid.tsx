'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Palette, Bot, MessageSquare, Monitor, PhoneCall, TrendingUp, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Identity systems, logo suites, brand strategy, and visual guidelines that position you as the undeniable leader in your market.',
    href: '/services/branding',
    color: 'from-rose-500 to-orange-500',
    glow: 'rgba(244,63,94,0.15)',
  },
  {
    icon: Bot,
    title: 'AI Services',
    description: 'Custom AI solutions, intelligent automation, and workflow integrations that eliminate bottlenecks and compound your team\'s output.',
    href: '/services/ai-services',
    color: 'from-scilla-indigo to-scilla-violet',
    glow: 'rgba(79,70,229,0.15)',
  },
  {
    icon: MessageSquare,
    title: 'Chat Bots',
    description: 'Intelligent conversational bots that handle support, qualify leads, and close sales — working tirelessly around the clock.',
    href: '/services/chat-bots',
    color: 'from-cyan-500 to-scilla-indigo',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'High-converting, beautifully crafted custom websites that turn visitors into customers and make competitors jealous.',
    href: '/services/web-design',
    color: 'from-emerald-500 to-cyan-500',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: PhoneCall,
    title: 'AI Receptionist',
    description: '24/7 AI voice and chat receptionist that answers calls, books appointments, and qualifies leads — without missing a beat.',
    href: '/services/ai-receptionist',
    color: 'from-scilla-violet to-pink-500',
    glow: 'rgba(124,58,237,0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Social Media',
    description: 'AI-powered social media management — content creation, scheduling, and growth strategy that keeps your brand visible and your audience engaged.',
    href: '/services/social-media',
    color: 'from-amber-500 to-rose-500',
    glow: 'rgba(245,158,11,0.15)',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-scilla-ink overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <Badge className="mb-5">What We Do</Badge>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Everything you need to{' '}
            <span className="gradient-text">dominate your market</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Six integrated disciplines, one seamless studio. We don&apos;t just build assets — we build momentum.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className=""
            >
              <Link
                href={service.href}
                className="group relative flex flex-col h-full p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                style={{
                  boxShadow: `0 0 0 0 ${service.glow}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 70%)` }}
                  aria-hidden
                />

                {/* Icon */}
                <div className={`mb-5 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-2.5 group-hover:text-scilla-lav transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-scilla-lav text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
