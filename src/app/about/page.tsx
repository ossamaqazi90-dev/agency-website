import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { FinalCTA } from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'About Scilla Solutions — Creative + AI Agency',
  description:
    'We\'re a studio of designers, engineers, and AI specialists obsessed with helping businesses look world-class and run smarter. Meet the team behind Scilla Solutions.',
  alternates: { canonical: 'https://scillasolutions.com/about' },
}

const values = [
  { title: 'Craft over speed', description: 'We\'d rather take an extra day and deliver something extraordinary than rush and deliver something average.' },
  { title: 'Transparency always', description: 'No black boxes, no jargon, no surprises. You know exactly what we\'re building, why, and how it\'s performing.' },
  { title: 'Outcomes over outputs', description: 'We measure our success by the growth you achieve — not by the number of deliverables we hand over.' },
  { title: 'Continuous improvement', description: 'We never stop learning. Every project makes us better — and those learnings compound into better results for you.' },
]

const team = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', initials: 'AR', gradient: 'from-scilla-indigo to-scilla-violet' },
  { name: 'Jamie Chen', role: 'Head of AI Engineering', initials: 'JC', gradient: 'from-scilla-violet to-pink-600' },
  { name: 'Sam Okafor', role: 'Lead Web Developer', initials: 'SO', gradient: 'from-cyan-600 to-scilla-indigo' },
  { name: 'Maya Patel', role: 'Brand Strategist', initials: 'MP', gradient: 'from-emerald-600 to-cyan-600' },
]

export default function AboutPage() {
  return (
    <div className="bg-scilla-ink min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,70,229,0.2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <Container narrow>
          <div className="text-center">
            <Badge className="mb-6">About Us</Badge>
            <h1
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              We exist to make{' '}
              <span className="gradient-text">brilliant possible</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
              Scilla Solutions is a creative + AI studio built on one belief: that the best businesses don&apos;t
              choose between looking great and running smart. We make both happen, together, faster than you think.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#07070F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-scilla-deep to-scilla-violet relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-white/10 text-[12rem] select-none leading-none">S</span>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="font-display font-bold text-5xl text-white mb-2">2020</div>
                  <div className="text-white/60 text-sm">Founded with one mission:</div>
                  <div className="text-white font-semibold mt-1">Build what others only promise</div>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div className="order-1 lg:order-2">
              <h2
                className="font-display font-bold text-white mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Built by people who were frustrated with the status quo
              </h2>
              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  Scilla Solutions was born out of a simple frustration: the best design studios didn&apos;t understand
                  AI, and the best AI shops couldn&apos;t design their way out of a paper bag. The result was clients
                  who had to choose — or worse, hire both and manage the coordination.
                </p>
                <p>
                  We changed that. Since 2020, we&apos;ve been building the agency we always wished existed — one where
                  world-class creative craft and serious technical depth live under the same roof, powered by the same
                  strategic vision.
                </p>
                <p>
                  Today we work with startups scaling fast, established businesses reinventing themselves, and
                  ambitious founders who refuse to settle for average. We are selective with our clients because
                  we are invested in their outcomes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-scilla-ink">
        <Container>
          <div className="text-center mb-14">
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-scilla-indigo/30 transition-all duration-300">
                <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#07070F]">
        <Container>
          <div className="text-center mb-14">
            <Badge className="mb-4">The Team</Badge>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              The people behind the work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="group text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <span className="font-display font-bold text-white text-lg">{member.initials}</span>
                </div>
                <div className="font-display font-bold text-white mb-0.5">{member.name}</div>
                <div className="text-scilla-lav text-xs">{member.role}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-sm mt-8">
            + a growing network of specialist collaborators across design, copy, and engineering.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </div>
  )
}
