import type { Metadata } from 'next'
import Script from 'next/script'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Scilla Solutions — Book a Free Strategy Call',
  description:
    'Get in touch with Scilla Solutions. Book a free 30-minute strategy call, send us a message, or just say hello. We respond within one business day.',
  alternates: { canonical: 'https://scillasolutions.com/contact' },
}

const contactDetails = [
  { icon: Mail,    label: 'Email',    value: 'hello@scillasolutions.com', href: 'mailto:hello@scillasolutions.com' },
  { icon: Phone,   label: 'Phone',    value: '+1 (000) 000-0000',         href: 'tel:+10000000000' },
  { icon: MapPin,  label: 'Location', value: 'Remote — Worldwide',        href: undefined },
  { icon: Calendar,label: 'Availability', value: 'Mon–Fri, 9am–6pm GMT', href: undefined },
]

export default function ContactPage() {
  return (
    <div className="bg-scilla-ink min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <Container narrow>
          <div className="text-center">
            <Badge className="mb-6">Contact</Badge>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              Let&apos;s build something{' '}
              <span className="gradient-text">brilliant together</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg mx-auto">
              Book a free 30-minute strategy call or send us a message. We&apos;ll get back to you within one
              business day — usually much sooner.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Book a call */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-scilla-deep/60 to-scilla-violet/20 border border-scilla-indigo/30">
                <h2 className="font-display font-bold text-white text-lg mb-2">Book a free strategy call</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  30 minutes. No sales pitch. You&apos;ll leave with a clear picture of what to build and why — whether you work with us or not.
                </p>
                <div className="rounded-xl overflow-hidden bg-white">
                  <iframe
                    src="https://link.legacylabs.club/widget/booking/KurRPkzjUEsQ7R3g1RmR"
                    style={{ width: '100%', border: 'none', overflow: 'hidden', display: 'block' }}
                    scrolling="no"
                    id="KurRPkzjUEsQ7R3g1RmR_1783463295466"
                    className="min-h-[700px]"
                    title="Book a free strategy call"
                  />
                </div>
                <Script src="https://link.legacylabs.club/js/form_embed.js" strategy="afterInteractive" />
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="w-9 h-9 rounded-lg bg-scilla-indigo/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-scilla-lav" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-scilla-lav transition-colors">{value}</a>
                      ) : (
                        <span className="text-white text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                <h2 className="font-display font-bold text-white text-xl mb-6">Send a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
