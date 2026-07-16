import type { Metadata } from 'next'
import { Hero }          from '@/components/home/Hero'
import { ServicesGrid }  from '@/components/home/ServicesGrid'
import { WhyScilla }     from '@/components/home/WhyScilla'
import { Process }       from '@/components/home/Process'
import { FeaturedWork }  from '@/components/home/FeaturedWork'
import { Stats }         from '@/components/home/Stats'
import { Testimonials }  from '@/components/home/Testimonials'
import { FinalCTA }      from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Scilla Solutions — Brilliant Brands. Intelligent Automation.',
  description:
    'Scilla Solutions is a creative + AI agency helping businesses look world-class and run smarter. Expert branding, AI automation, chatbots, web design, and AI receptionist services.',
  alternates: { canonical: 'https://scillasolutions.com' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyScilla />
      <Process />
      <FeaturedWork />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
