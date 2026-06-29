import Link from 'next/link'
import { Sparkles, Globe, Share2, Camera, Code2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

const services = [
  { label: 'Branding',        href: '/services/branding' },
  { label: 'AI Services',     href: '/services/ai-services' },
  { label: 'Chat Bots',       href: '/services/chat-bots' },
  { label: 'Web Design',      href: '/services/web-design' },
  { label: 'AI Receptionist', href: '/services/ai-receptionist' },
  { label: 'Social Media',    href: '/services/social-media' },
]

const company = [
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy',     href: '/privacy' },
  { label: 'Terms of Service',   href: '/terms' },
]

const socials = [
  { label: 'X / Twitter', href: '#', icon: Globe },
  { label: 'LinkedIn',    href: '#', icon: Share2 },
  { label: 'Instagram',   href: '#', icon: Camera },
  { label: 'GitHub',      href: '#', icon: Code2 },
]

export function Footer() {
  return (
    <footer className="relative bg-[#07070F] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-scilla-deep/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-scilla-indigo to-scilla-violet flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Scilla<span className="text-scilla-lav">.</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Brilliant brands. Intelligent automation. We help businesses look world-class and run smarter.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-scilla-lav" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-scilla-lav" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Stay in the loop</h3>
            <p className="text-sm text-white/50 mb-4">Get insights on AI, branding, and automation — no spam, ever.</p>
            <div className="mb-6">
              <NewsletterForm />
            </div>
            <div className="space-y-2.5">
              <a
                href="mailto:hello@scillasolutions.com"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-scilla-lav" />
                hello@scillasolutions.com
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-scilla-lav" />
                +1 (000) 000-0000
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0 text-scilla-lav" />
                Remote — Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Scilla Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with care — design that dazzles, AI that works.
          </p>
        </div>
      </div>
    </footer>
  )
}
