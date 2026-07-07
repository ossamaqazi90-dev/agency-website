import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call — Scilla Solutions',
  description:
    'Pick a time that works for you. 30 minutes, no sales pitch — you\'ll leave with a clear picture of what to build and why.',
  alternates: { canonical: 'https://scillasolutions.com/book' },
}

export default function BookPage() {
  return (
    <div className="bg-scilla-ink min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <Container narrow>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-white/45 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to contact
            </Link>
            <Badge className="mb-6">Book a Call</Badge>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
            >
              Let&apos;s find a time to talk
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg mx-auto">
              30 minutes. No sales pitch. You&apos;ll leave with a clear picture of what to build and why — whether
              you work with us or not.
            </p>
          </div>
        </Container>
      </section>

      {/* Calendar */}
      <section className="pb-24">
        <Container narrow>
          <div className="rounded-2xl overflow-hidden bg-white border border-scilla-indigo/30">
            <iframe
              src="https://link.legacylabs.club/widget/booking/KurRPkzjUEsQ7R3g1RmR"
              style={{ width: '100%', border: 'none', overflow: 'hidden', display: 'block' }}
              scrolling="no"
              id="KurRPkzjUEsQ7R3g1RmR_1783463295466"
              className="min-h-[850px]"
              title="Book a free strategy call"
            />
          </div>
          <Script src="https://link.legacylabs.club/js/form_embed.js" strategy="afterInteractive" />
        </Container>
      </section>
    </div>
  )
}
