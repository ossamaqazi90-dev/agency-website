import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { LeadQualificationFunnel } from '@/components/work/LeadQualificationFunnel'

export const metadata: Metadata = {
  title: 'Lead Qualification Framework — Case Study Preview | Scilla Solutions',
  description:
    'A sample high-converting, multi-step lead qualification funnel built for a dental practice — one question per screen, urgency-based routing, instant confirmation.',
  alternates: { canonical: 'https://scillasolutions.com/work/lead-qualification-framework' },
  robots: { index: false, follow: true },
}

const principles = [
  'One question per screen — lower friction, higher completion',
  'Urgency-based routing flags same-week requests for a fast callback',
  'Progress bar sets expectations and reduces drop-off',
  'Instant, personalised confirmation reinforces the booking',
]

export default function LeadQualificationFrameworkPage() {
  return (
    <div className="bg-scilla-ink min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <Container narrow>
          <div className="text-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-white/45 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to featured work
            </Link>
            <Badge className="mb-6">Case Study Preview</Badge>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
            >
              Lead Qualification Framework
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg mx-auto">
              Built for Apex Dental Group — a multi-step funnel designed to qualify and route leads by urgency
              before they ever reach a human. This is a live, interactive preview; nothing here is editable or
              connected to a real inbox.
            </p>
          </div>
        </Container>
      </section>

      {/* Funnel */}
      <section className="pb-16">
        <Container>
          <LeadQualificationFunnel />
        </Container>
      </section>

      {/* Why it converts */}
      <section className="pb-24">
        <Container narrow>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
            <h2 className="font-display font-bold text-white text-lg mb-5">Why this framework converts</h2>
            <ul className="space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-scilla-lav" />
                  <span className="text-white/65 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  )
}
