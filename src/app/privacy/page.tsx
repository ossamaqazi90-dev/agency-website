import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Privacy Policy — Scilla Solutions',
  description:
    'How Scilla Solutions collects, uses, and protects your data across our website, AI automation services, and client engagements.',
  alternates: { canonical: 'https://scillasolutions.com/privacy' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 7, 2026'

export default function PrivacyPage() {
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
            <Badge className="mb-6">Legal</Badge>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/45 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-24">
        <Container narrow>
          <div className="space-y-12 text-white/65 text-sm leading-relaxed">
            <p>
              Scilla Solutions (&quot;Scilla,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a creative
              and AI automation agency. This Privacy Policy explains how we collect, use, disclose, and safeguard
              information when you visit scillasolutions.com (the &quot;Site&quot;), submit an enquiry, book a call,
              subscribe to our newsletter, or engage us for branding, AI services, chatbot, web design, AI
              receptionist, or social media work (collectively, the &quot;Services&quot;). By using the Site or
              Services, you agree to the practices described here.
            </p>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">1. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <ul className="space-y-2.5 list-disc pl-5">
                <li>
                  <span className="text-white/85 font-semibold">Information you provide directly</span> — your name,
                  email address, company, phone number, service interest, and project details when you submit our
                  contact form, book a strategy call through our scheduling widget, or subscribe to our newsletter.
                </li>
                <li>
                  <span className="text-white/85 font-semibold">Information collected automatically</span> — IP
                  address, browser type, device information, pages visited, referral source, and general usage
                  patterns, collected via standard web server logs and (where enabled) analytics tools.
                </li>
                <li>
                  <span className="text-white/85 font-semibold">Cookies and similar technologies</span> — small files
                  used to remember preferences, understand site usage, and support embedded third-party tools such as
                  our booking calendar.
                </li>
                <li>
                  <span className="text-white/85 font-semibold">Client project data</span> — when you engage us for
                  AI services, chatbot, or automation work, you may share business data, documents, or system access
                  necessary for us to design, build, and operate the solution under a separate service agreement.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">2. How We Use Your Information</h2>
              <ul className="space-y-2.5 list-disc pl-5">
                <li>Respond to enquiries, schedule calls, and provide quotes or proposals</li>
                <li>Deliver, maintain, and support the Services you&apos;ve engaged us for</li>
                <li>Send project updates, invoices, and — where you&apos;ve opted in — newsletter content</li>
                <li>Improve our Site, offerings, and internal AI-assisted workflows</li>
                <li>Detect, prevent, and address fraud, abuse, or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">3. AI &amp; Automation Tools</h2>
              <p>
                As an AI solutions agency, we build and operate AI-driven systems — including chatbots, AI
                receptionists, and workflow automations — for ourselves and our clients. Where we process personal
                data through AI or automation tools (ours or a third-party provider&apos;s), we take reasonable steps
                to ensure that data is handled securely and used only for the purpose it was collected. We do not
                use client project data to train third-party foundation models unless explicitly agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">4. Third-Party Services</h2>
              <p className="mb-3">We rely on trusted third-party providers to operate the Site and Services, including:</p>
              <ul className="space-y-2.5 list-disc pl-5">
                <li>A scheduling/booking platform to power our &quot;Book a free strategy call&quot; calendar</li>
                <li>Hosting and infrastructure providers to serve the Site</li>
                <li>Email delivery providers to send transactional messages and (opt-in) newsletters</li>
                <li>Analytics providers to understand aggregate Site usage</li>
              </ul>
              <p className="mt-3">
                These providers process data on our behalf under their own privacy and security terms, and only to
                the extent necessary to provide their service to us.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">5. Data Sharing &amp; Disclosure</h2>
              <p>
                We do not sell your personal information. We share information only with the service providers
                described above, professional advisors (legal, accounting) as needed, or when required by law,
                regulation, legal process, or to protect the rights, property, or safety of Scilla, our clients, or
                others.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfil the purposes described in this
                policy — typically for the duration of our relationship plus a reasonable period afterward for
                legal, accounting, or reporting requirements — after which it is deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">7. Data Security</h2>
              <p>
                We use commercially reasonable administrative, technical, and organisational safeguards to protect
                information against unauthorised access, loss, misuse, or alteration. No method of transmission or
                storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">8. Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have the right to access, correct, delete, or export your
                personal information, restrict or object to certain processing, or withdraw consent (such as
                unsubscribing from our newsletter via the link in any email). To exercise these rights, contact us
                using the details below.
              </p>
              <p>
                If you are located in the European Economic Area, United Kingdom, or California, you may have
                additional rights under GDPR, UK GDPR, or the CCPA/CPRA respectively. We will respond to verified
                requests within the timeframes required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">9. International Data Transfers</h2>
              <p>
                We and our service providers may process data in countries other than your own. Where required, we
                rely on appropriate safeguards — such as standard contractual clauses — to protect data transferred
                internationally.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">10. Children&apos;s Privacy</h2>
              <p>
                The Site and Services are intended for businesses and individuals over the age of 18. We do not
                knowingly collect personal information from children. If you believe a child has provided us
                information, please contact us and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our practices or for
                other operational, legal, or regulatory reasons. The &quot;Last updated&quot; date above indicates
                when this policy was last revised. Continued use of the Site after changes take effect constitutes
                acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">12. Contact Us</h2>
              <p>
                Questions about this Privacy Policy or how we handle your data? Email us at{' '}
                <a href="mailto:hello@scillasolutions.com" className="text-scilla-lav hover:text-white transition-colors">
                  hello@scillasolutions.com
                </a>{' '}
                or reach out via our{' '}
                <a href="/contact" className="text-scilla-lav hover:text-white transition-colors">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
