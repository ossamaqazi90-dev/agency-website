import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'Branding Services — Identity Systems & Brand Strategy',
  description:
    'Build a brand that commands attention and earns trust. Scilla Solutions creates complete identity systems, logo suites, and brand strategies that position you as the market leader.',
  alternates: { canonical: 'https://scillasolutions.com/services/branding' },
}

const brandingData = {
  badge: 'Branding',
  hero: {
    headline: 'A brand that <span class="gradient-text">commands the room</span>',
    subheadline:
      'Your brand is the first thing people judge — and the last thing they forget. We build complete identity systems that make you impossible to ignore and easy to trust.',
    cta: 'Build My Brand',
  },
  overview:
    'We create comprehensive brand identity systems from the ground up — from strategy and positioning to visual identity, logo systems, typography, colour palettes, and brand guidelines your team can execute flawlessly. Every decision is strategic, every element intentional.',
  features: [
    'Brand strategy and market positioning workshop',
    'Logo design (primary, secondary, icon variants)',
    'Custom colour palette with accessibility validation',
    'Typography system with licensed or Google font selection',
    'Brand voice, tone, and messaging framework',
    'Business card, letterhead, and email signature design',
    'Social media brand kit (profile, cover, post templates)',
    'Comprehensive brand guidelines PDF (30–60 pages)',
    'Brand asset library delivered in all required formats',
  ],
  process: [
    { step: '01', title: 'Discovery & Strategy', description: 'Deep-dive into your business, audience, competitors, and aspirations. We map your positioning and define the strategic foundation before a single pixel is designed.' },
    { step: '02', title: 'Concept Development', description: 'We develop 3 distinct brand directions — each with a clear rationale, mood board, and initial logo concepts. You choose the direction that resonates most.' },
    { step: '03', title: 'Refinement', description: 'Your chosen direction is refined across two rounds of revisions until it\'s exactly right. We finalise every element of the visual identity.' },
    { step: '04', title: 'Delivery & Handoff', description: 'You receive the complete brand system — all files, the guidelines document, and a handoff call to walk your team through everything.' },
  ],
  outcomes: [
    { metric: '3×', description: 'Average increase in perceived value after a rebrand' },
    { metric: '68%', description: 'Of consumers say consistent branding increases trust' },
    { metric: '23%', description: 'Revenue uplift linked to strong brand consistency' },
    { metric: '2 wks', description: 'Average delivery time for a full brand identity' },
  ],
  faqs: [
    { question: 'How long does a full branding project take?', answer: 'Most brand identity projects are completed in 2–4 weeks. Complex projects with extensive strategy phases may run 5–6 weeks. We\'ll give you a clear timeline after our discovery call.' },
    { question: 'Do you offer logo-only packages?', answer: 'We do, though we recommend the full identity system for the best results. A logo without a supporting system often creates inconsistency. We\'ll help you decide what\'s right for your stage.' },
    { question: 'What files will I receive?', answer: 'You\'ll receive all logo variants in SVG, PNG (transparent), PDF, and JPEG formats — plus brand guidelines as a PDF and an editable Figma file for your team.' },
    { question: 'Can you rebrand an existing business?', answer: 'Absolutely — rebrands are our specialty. We handle the full transition strategy, including phased rollout recommendations to minimise disruption while maximising impact.' },
    { question: 'What makes your branding different from a cheaper freelancer?', answer: 'Strategy. Most designers design. We start with positioning, audience psychology, and competitive landscape — then build visuals that are a direct expression of your strategic advantage.' },
  ],
  gradient: 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
  accentColor: '#F97316',
}

export default function BrandingPage() {
  return <ServicePage {...brandingData} />
}
