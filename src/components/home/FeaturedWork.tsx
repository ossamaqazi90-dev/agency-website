'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

const MotionLink = motion(Link)

const projects = [
  {
    title: 'Ballers Paradise',
    category: 'Branding',
    result: 'Full brand identity for a youth basketball summer camp',
    bg: 'from-scilla-deep to-scilla-violet',
    accent: '#8B5CF6',
    logoUrl: '/work/ballers-paradise-logo.jpg',
  },
  {
    title: 'National Home Improvement Services',
    category: 'Web Design + Chat Bot',
    result: 'Full site rebuild + AI lead-chat concierge',
    bg: 'from-slate-800 to-scilla-deep',
    accent: '#4F46E5',
    previewUrl: 'https://gold-raven-556392.hostingersite.com/',
  },
  {
    title: 'Lead Qualification Framework',
    category: 'AI Receptionist + Branding',
    result: 'Built for Apex Dental Group — click to preview',
    bg: 'from-scilla-violet to-rose-900',
    accent: '#C4B5FD',
    mockup: 'funnel' as const,
    internalLink: '/work/lead-qualification-framework',
  },
]

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 lg:py-32 bg-[#07070F] overflow-hidden">
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
          {projects.map((project, i) => {
            const Wrapper = project.internalLink ? MotionLink : motion.div
            const wrapperProps = project.internalLink ? { href: project.internalLink } : {}

            return (
            <Wrapper
              key={project.title}
              {...wrapperProps}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl overflow-hidden block ${project.internalLink ? 'cursor-pointer' : ''}`}
            >
              {project.previewUrl ? (
                /* Browser-window mockup with a live, non-interactive preview */
                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A0A12] flex flex-col">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white/[0.05] border-b border-white/[0.08] shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-2 flex-1 truncate px-2.5 py-1 rounded-md bg-white/[0.06] text-[10px] text-white/40 font-mono">
                      {new URL(project.previewUrl).hostname}
                    </span>
                  </div>
                  <div className="relative flex-1 overflow-hidden">
                    <iframe
                      src={project.previewUrl}
                      title={`${project.title} — live preview`}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden
                      style={{
                        width: '400%',
                        height: '400%',
                        transform: 'scale(0.25)',
                        transformOrigin: 'top left',
                        pointerEvents: 'none',
                        border: 'none',
                      }}
                    />
                    {/* Blocks all interaction with the framed site — preview only, not a link */}
                    <div className="absolute inset-0" />
                  </div>
                  <div className="absolute top-11 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-semibold text-white/70 tracking-wide uppercase">
                    Live Preview
                  </div>
                </div>
              ) : project.logoUrl ? (
                /* Brand board mockup — logo, palette, typography */
                <div className="aspect-[4/3] relative overflow-hidden bg-[#FAFAF8] p-4 flex flex-col">
                  <div className="text-[9px] font-mono text-black/35 uppercase tracking-wider mb-3">
                    Brand Board
                  </div>

                  <div className="flex-1 grid grid-cols-5 gap-2.5">
                    {/* Logo, in its own corner tile */}
                    <div className="col-span-2 rounded-lg bg-white border border-black/[0.06] shadow-sm p-3 flex items-center justify-center">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={project.logoUrl}
                          alt={`${project.title} logo`}
                          fill
                          sizes="(max-width: 768px) 40vw, 15vw"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Typography sample */}
                    <div className="col-span-3 rounded-lg bg-white border border-black/[0.06] shadow-sm p-3 flex flex-col items-center justify-center gap-0.5">
                      <div className="font-display font-bold text-black text-4xl leading-none tracking-tight">Aa</div>
                      <div className="text-[8px] text-black/35 uppercase tracking-[0.15em]">Display Typeface</div>
                    </div>
                  </div>

                  {/* Colour palette strip */}
                  <div className="mt-2.5">
                    <div className="flex h-9 rounded-lg overflow-hidden border border-black/[0.06] shadow-sm">
                      {['#1FA355', '#F5A623', '#FBBF24', '#1E3A5F', '#111111'].map((c) => (
                        <span key={c} className="flex-1" style={{ background: c }} />
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/5 text-[9px] font-mono text-black/40 tracking-wide">
                    Brand Asset
                  </div>
                </div>
              ) : project.mockup === 'funnel' ? (
                /* Question-window mockup — a preview of the actual funnel UI, clickable through to the live demo */
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.bg} relative overflow-hidden flex items-center justify-center p-5`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 font-display font-bold text-6xl select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="relative z-10 w-full rounded-xl bg-[#0A0A12]/90 backdrop-blur-sm border border-white/15 p-4 shadow-xl">
                    {/* Step progress */}
                    <div className="flex gap-1.5 mb-3.5">
                      <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-scilla-indigo to-scilla-violet" />
                      <div className="flex-1 h-1 rounded-full bg-white/10" />
                      <div className="flex-1 h-1 rounded-full bg-white/10" />
                    </div>
                    <div className="text-white text-[11px] font-display font-bold mb-3 leading-snug">
                      What brings you in today?
                    </div>
                    <div className="space-y-1.5">
                      <div className="px-2.5 py-1.5 rounded-lg bg-scilla-indigo/25 border border-scilla-indigo/60 text-[9px] text-white font-semibold flex items-center justify-between">
                        General checkup &amp; cleaning
                        <span className="w-2.5 h-2.5 rounded-full bg-scilla-indigo shrink-0" />
                      </div>
                      <div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] text-white/45">
                        Cosmetic dentistry
                      </div>
                      <div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] text-white/45">
                        Dental emergency
                      </div>
                    </div>
                  </div>
                  {/* Hover overlay — this card is a real link */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <ArrowRight className="w-4 h-4" />
                      Click to Preview
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white/70 tracking-wide uppercase">
                    Preview
                  </div>
                </div>
              ) : (
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.bg} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 font-display font-bold text-6xl select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
              )}

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
            </Wrapper>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
