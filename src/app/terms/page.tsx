import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Terms of Service — Scilla Solutions',
  description:
    'The terms governing your use of the Scilla Solutions website and our branding, AI automation, chatbot, web design, and AI receptionist services.',
  alternates: { canonical: 'https://scillasolutions.com/terms' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 7, 2026'

export default function TermsPage() {
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
              Terms of Service
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
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of scillasolutions.com (the
              &quot;Site&quot;) and any branding, AI services, chatbot, web design, AI receptionist, or social media
              services provided by Scilla Solutions (&quot;Scilla,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) (collectively, the &quot;Services&quot;). By accessing the Site or engaging us for
              Services, you agree to be bound by these Terms. If you do not agree, please do not use the Site or
              Services.
            </p>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">1. Who We Are</h2>
              <p>
                Scilla Solutions is a creative and AI automation agency offering branding, AI systems and workflow
                automation, chatbot development, web design, AI receptionist, and social media management services
                to business clients.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">2. Use of the Site</h2>
              <p className="mb-3">You agree to use the Site only for lawful purposes and not to:</p>
              <ul className="space-y-2.5 list-disc pl-5">
                <li>Attempt to gain unauthorised access to the Site, our systems, or other users&apos; data</li>
                <li>Interfere with or disrupt the Site&apos;s operation, including via automated scraping or bots</li>
                <li>Submit false, misleading, or fraudulent information through our forms or booking widget</li>
                <li>Use the Site to transmit malicious code or infringing content</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">3. Client Engagements</h2>
              <p>
                Content on this Site — including service descriptions, pricing indications, case study results,
                and timelines — is provided for general informational purposes and does not itself constitute a
                binding offer. Paid engagements for our Services are governed by a separate proposal, statement of
                work, or master services agreement signed by both parties, which will take precedence over these
                Terms in the event of a conflict regarding project-specific scope, deliverables, fees, or payment
                terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">4. Intellectual Property</h2>
              <p className="mb-3">
                Unless otherwise agreed in a signed statement of work, all content on this Site — including text,
                graphics, logos, and design — is owned by Scilla Solutions or its licensors and protected by
                applicable intellectual property laws. You may not reproduce, distribute, or create derivative
                works from Site content without our written permission.
              </p>
              <p>
                Ownership of deliverables created for a client during a paid engagement (brand assets, code,
                automations, chatbot configurations, etc.) transfers to the client upon full payment, except for our
                pre-existing tools, frameworks, and proprietary methodologies, which we retain and may reuse across
                engagements.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">5. AI-Generated Outputs</h2>
              <p>
                Some of our Services involve AI-generated or AI-assisted outputs (e.g., chatbot responses, automated
                workflows, AI receptionist interactions). While we design and test these systems carefully, AI
                outputs can be imperfect, and we do not guarantee that any AI-generated content will be error-free,
                complete, or suitable for every use case. Clients are responsible for reviewing AI-driven outputs
                before relying on them for critical business, legal, medical, or financial decisions.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">6. Third-Party Links &amp; Tools</h2>
              <p>
                The Site may link to or embed third-party tools, such as our scheduling calendar. We are not
                responsible for the content, policies, or practices of third-party websites or services, and your
                use of them is subject to their own terms and privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">7. Results &amp; Case Studies</h2>
              <p>
                Metrics, testimonials, and results referenced on the Site reflect specific client outcomes under
                specific circumstances. They are illustrative and not a guarantee that any future engagement will
                achieve similar results.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">8. Disclaimers</h2>
              <p>
                The Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, express or implied, including warranties of merchantability, fitness for a
                particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted,
                secure, or error-free.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Scilla Solutions shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or
                business opportunity, arising out of or related to your use of the Site or general (non-contracted)
                interactions with us. Our aggregate liability arising from a paid engagement is limited as set out
                in the applicable statement of work or service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold Scilla Solutions harmless from any claims, damages, liabilities, and
                expenses (including reasonable legal fees) arising from your misuse of the Site or violation of
                these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">11. Termination</h2>
              <p>
                We may suspend or restrict access to the Site at our discretion, without notice, for conduct that
                violates these Terms or is otherwise harmful to Scilla or other users. Termination of a paid
                engagement is governed by the relevant service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by applicable law in the jurisdiction in which Scilla Solutions operates,
                without regard to conflict-of-law principles, unless a signed service agreement specifies otherwise.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">13. Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time. The &quot;Last updated&quot; date above reflects the
                most recent revision. Continued use of the Site after changes take effect constitutes acceptance of
                the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-xl mb-3">14. Contact Us</h2>
              <p>
                Questions about these Terms? Email us at{' '}
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
