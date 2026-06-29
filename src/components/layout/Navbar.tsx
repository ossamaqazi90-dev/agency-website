'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Branding',         href: '/services/branding' },
  { label: 'AI Services',      href: '/services/ai-services' },
  { label: 'Chat Bots',        href: '/services/chat-bots' },
  { label: 'Web Design',       href: '/services/web-design' },
  { label: 'AI Receptionist',  href: '/services/ai-receptionist' },
  { label: 'Social Media',     href: '/services/social-media' },
]

const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dropOpen, setDropOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-scilla-ink/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Scilla Solutions home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-scilla-indigo to-scilla-violet flex items-center justify-center shadow-lg shadow-scilla-indigo/30 group-hover:shadow-scilla-violet/40 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-scilla-lav transition-colors duration-300">
              Scilla<span className="text-scilla-lav">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropOpen(!dropOpen)}
                    onBlur={() => setTimeout(() => setDropOpen(false), 150)}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      dropOpen ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                    aria-expanded={dropOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('w-3.5 h-3.5 transition-transform duration-200', dropOpen && 'rotate-180')}
                    />
                  </button>

                  {dropOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 py-2 rounded-xl glass-strong shadow-2xl shadow-black/40 border border-white/10">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-white bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden',
                'bg-gradient-to-r from-scilla-indigo to-scilla-violet',
                'shadow-lg shadow-scilla-indigo/25',
                'transition-all duration-300',
                'hover:shadow-xl hover:shadow-scilla-violet/30 hover:scale-[1.02]',
              )}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book a Call
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-white/[0.06]">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] my-2" />
            <Link href="/about"   className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">About</Link>
            <Link href="/contact" className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Contact</Link>
            <div className="pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-scilla-indigo to-scilla-violet"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Book a Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
