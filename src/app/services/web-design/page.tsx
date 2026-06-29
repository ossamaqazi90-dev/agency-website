import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'Web Design — High-Converting Custom Websites',
  description:
    'Beautiful, fast, high-converting custom websites built with Next.js. Designed to impress visitors and engineered to turn them into customers. Deploy-ready for Vercel.',
  alternates: { canonical: 'https://scillasolutions.com/services/web-design' },
}

const webDesignData = {
  badge: 'Web Design',
  hero: {
    headline: 'A website that converts <span class="gradient-text">as beautifully as it looks</span>',
    subheadline:
      'Custom-designed, performance-engineered websites built to impress visitors on arrival and convert them into paying customers before they leave.',
    cta: 'Start My Website',
  },
  overview:
    'We design and build bespoke websites from scratch — no templates, no page builders, no corners cut. Every site is built with Next.js for elite performance, meticulously designed in Figma, and obsessively optimised for Core Web Vitals, SEO, and conversion. Your website should work as hard as your best salesperson.',
  features: [
    'Custom UI/UX design in Figma (mobile-first)',
    'Next.js development with TypeScript',
    'Tailwind CSS with custom design system',
    'Framer Motion animations and micro-interactions',
    'Core Web Vitals optimisation (Lighthouse 95+ target)',
    'On-page SEO — semantic HTML, metadata, schema markup',
    'CMS integration (Sanity, Contentful, or custom)',
    'Analytics integration (GA4, Plausible, PostHog)',
    'Vercel deployment with preview environments',
    'Accessibility audit — WCAG AA compliant',
  ],
  process: [
    { step: '01', title: 'Strategy & Sitemap', description: 'We define the site\'s purpose, user journeys, and content hierarchy. Every page earns its place with a clear conversion goal.' },
    { step: '02', title: 'Design in Figma', description: 'We design the full site in Figma — every breakpoint, every state, every interaction. You see exactly what you\'ll get before a line of code is written.' },
    { step: '03', title: 'Development', description: 'Pixel-perfect implementation in Next.js. Performance, accessibility, and SEO are built in from line one — not bolted on at the end.' },
    { step: '04', title: 'Launch & Optimise', description: 'We deploy to Vercel, run final QA across devices, submit to search engines, and hand over with full documentation. We also offer post-launch optimisation retainers.' },
  ],
  outcomes: [
    { metric: '95+', description: 'Target Lighthouse score across all categories' },
    { metric: '58%', description: 'Average conversion uplift after redesign' },
    { metric: '< 1s', description: 'Time to first contentful paint' },
    { metric: '2–4wk', description: 'Average delivery time' },
  ],
  faqs: [
    { question: 'Do you use WordPress or page builders?', answer: 'No. We build exclusively with Next.js and modern web technologies. This gives you far superior performance, security, and flexibility compared to WordPress or builders like Webflow.' },
    { question: 'Can I edit the content myself after launch?', answer: 'Yes. We integrate a headless CMS (we recommend Sanity or Contentful) so you can edit text, images, and pages without touching code.' },
    { question: 'Will my site rank on Google?', answer: 'We build with SEO as a first-class concern — semantic HTML, proper metadata, schema markup, fast load times, and clean URL structure. We also set up Search Console for you at launch.' },
    { question: 'What\'s included in the design?', answer: 'Full desktop and mobile designs for all pages, including hover states, animations, empty states, and error states. We don\'t skip anything.' },
    { question: 'Do you offer ongoing support?', answer: 'Yes, we offer monthly maintenance and growth retainers covering hosting management, performance monitoring, content updates, and ongoing CRO optimisation.' },
  ],
  gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
  accentColor: '#10B981',
}

export default function WebDesignPage() {
  return <ServicePage {...webDesignData} />
}
