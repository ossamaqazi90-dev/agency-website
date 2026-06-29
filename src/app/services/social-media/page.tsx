import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'Social Media Management — AI-Powered Content & Growth Strategy',
  description:
    'AI-powered social media management that keeps your brand visible, your audience engaged, and your content calendar full — without consuming your team\'s time.',
  alternates: { canonical: 'https://scillasolutions.com/services/social-media' },
}

const socialMediaData = {
  badge: 'Social Media',
  hero: {
    headline: 'A social presence that <span class="gradient-text">works while you sleep</span>',
    subheadline:
      'AI-powered content creation, smart scheduling, and data-driven growth strategy — so your brand stays visible, relevant, and growing across every platform.',
    cta: 'Grow My Social',
  },
  overview:
    'We manage your social media end-to-end, combining creative brand storytelling with AI content systems that keep your calendar full without burning out your team. From strategy and copywriting to design, scheduling, and monthly performance reporting — we handle it all so you can focus on running your business.',
  features: [
    'Social media strategy and platform selection',
    'AI-assisted copywriting for every post and caption',
    'Branded graphic templates for Reels, Stories, and feed posts',
    'Content calendar planning (30 days in advance)',
    'Scheduling and publishing across all platforms',
    'Community management — comments, DMs, and engagement',
    'Hashtag research and reach optimisation',
    'Monthly analytics report with growth insights',
    'Paid social campaign setup and management (optional)',
    'Brand voice guidelines for consistent messaging',
  ],
  process: [
    { step: '01', title: 'Audit & Strategy', description: 'We audit your existing presence, analyse your competitors, and build a platform-specific strategy aligned to your business goals — growth, leads, or brand awareness.' },
    { step: '02', title: 'Brand Voice & Templates', description: 'We define your social brand voice, create a visual content system, and design post templates so every piece of content looks unmistakably yours.' },
    { step: '03', title: 'Content Creation & Scheduling', description: 'Our team produces your monthly content — copy, graphics, and video scripts — then schedules everything for optimal reach on every platform.' },
    { step: '04', title: 'Manage, Report & Optimise', description: 'We monitor performance daily, engage your audience, and deliver a monthly report with clear metrics and recommendations to keep growth compounding.' },
  ],
  outcomes: [
    { metric: '4×', description: 'Average increase in posting consistency within 30 days' },
    { metric: '60%', description: 'More engagement on AI-assisted content vs. unmanaged accounts' },
    { metric: '10h+', description: 'Saved per week for founders who previously managed it themselves' },
    { metric: '30d', description: 'Content planned and scheduled ahead at all times' },
  ],
  faqs: [
    { question: 'Which platforms do you manage?', answer: 'We manage Instagram, LinkedIn, Facebook, X (Twitter), TikTok, and Threads. Most clients start with 2–3 platforms and expand as they grow. We\'ll recommend the right mix based on your audience.' },
    { question: 'Do you create video content too?', answer: 'Yes. We produce short-form video scripts, Reels concepts, and can coordinate with your team for filming. We also create motion graphics and animated posts for clients without video resources.' },
    { question: 'How do you maintain our brand voice?', answer: 'We start every engagement with a brand voice workshop and produce a social voice guide. All content is reviewed against this before posting. You also approve everything before it goes live.' },
    { question: 'Can I approve posts before they go out?', answer: 'Absolutely. We share the content calendar 2 weeks ahead for your review and approval. Nothing is posted without your sign-off in the first 3 months — then we can switch to auto-publish once you trust the process.' },
    { question: 'Do you run paid ads as well?', answer: 'Yes — paid social is an optional add-on. We manage Meta Ads, LinkedIn Ads, and TikTok Ads, including creative production, targeting, and optimisation. Minimum ad spend of £500/month recommended.' },
  ],
  gradient: 'linear-gradient(135deg, #F59E0B 0%, #F43F5E 100%)',
  accentColor: '#F59E0B',
}

export default function SocialMediaPage() {
  return <ServicePage {...socialMediaData} />
}
