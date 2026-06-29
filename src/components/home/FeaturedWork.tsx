'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const projects = [
  {
    title: 'NovaTech AI Platform',
    category: 'Branding + AI Services',
    result: '340% increase in qualified leads',
    bg: 'from-scilla-deep to-scilla-violet',
    accent: '#8B5CF6',
  },
  {
    title: 'PulseWave E-commerce',
    category: 'Web Design + Chat Bot',
    result: '58% uplift in conversion rate',
    bg: 'from-slate-800 to-scilla-deep',
    accent: '#4F46E5',
  },
  {
    title: 'Apex Dental Group',
    category: 'AI Receptionist + Branding',
    result: '2,400 hrs/yr of staff time freed',
    bg: 'from-scilla-violet to-rose-900',
    accent: '#C4B5FD',
  },
]

export function FeaturedWork() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#07070F] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <Badge className="mb-4">Featured Work</Badge>
            <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Results that speak{' '}
              <span className="gradient-text">for themselves</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-scilla-lav text-sm font-semibold hover:text-white transition-colors shrink-0"
          >
            See all work <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.bg} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 font-display font-bold text-6xl select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-white/[0.03] border border-t-0 border-white/[0.07] rounded-b-2xl">
                <p className="text-xs font-semibold text-scilla-lav uppercase tracking-widest mb-1.5">{project.category}</p>
                <h3 className="font-display font-bold text-white text-lg mb-2">{project.title}</h3>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}25` }}
                >
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
