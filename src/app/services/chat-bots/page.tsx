import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'Chat Bots — Intelligent Conversational AI for Sales & Support',
  description:
    'Custom AI chatbots that handle support, qualify leads, and close sales 24/7. Deploy on your website, WhatsApp, or any platform — and never miss another conversation.',
  alternates: { canonical: 'https://scillasolutions.com/services/chat-bots' },
}

const chatBotsData = {
  badge: 'Chat Bots',
  hero: {
    headline: 'Your best salesperson <span class="gradient-text">never sleeps</span>',
    subheadline:
      'Intelligent AI chatbots that engage visitors, answer questions, qualify prospects, and book calls — automatically, at 2am on a Sunday, without breaking a sweat.',
    cta: 'Build My Bot',
  },
  overview:
    'We design and deploy custom conversational AI bots built on the latest LLMs, trained on your business knowledge, and integrated directly into your CRM and booking systems. Your bot won\'t just answer FAQs — it will qualify leads, book appointments, handle objections, and escalate to humans at exactly the right moment.',
  features: [
    'Custom conversational flow design and scripting',
    'Training on your products, services, and FAQs',
    'Lead qualification with scoring and CRM push',
    'Calendar integration for automated booking',
    'Handoff to human agents with full conversation context',
    'Multi-platform deployment (website, WhatsApp, Instagram, SMS)',
    'Natural language understanding with intent detection',
    'Analytics dashboard — conversations, conversions, drop-off',
    'Ongoing training and continuous improvement',
  ],
  process: [
    { step: '01', title: 'Conversation Mapping', description: 'We map every conversation your business has — support, sales, onboarding. We identify the 20% of questions that generate 80% of volume and design flows around them.' },
    { step: '02', title: 'Training & Persona Design', description: 'We give your bot a personality, train it on your knowledge base, and define escalation rules. It should feel like your best team member, not a generic bot.' },
    { step: '03', title: 'Integration & Testing', description: 'We integrate with your CRM, calendar, and communications stack — then test exhaustively across every scenario including edge cases and adversarial inputs.' },
    { step: '04', title: 'Launch & Optimisation', description: 'We go live, monitor conversation quality, and optimise weekly based on real user interactions. Continuous improvement is built into the engagement.' },
  ],
  outcomes: [
    { metric: '80%', description: 'Of queries handled without human involvement' },
    { metric: '3×', description: 'More leads captured from existing traffic' },
    { metric: '24/7', description: 'Always-on coverage with zero overtime cost' },
    { metric: '< 1s', description: 'Average response time to customer queries' },
  ],
  faqs: [
    { question: 'Will the bot understand complex questions?', answer: 'Yes. We use state-of-the-art LLMs with custom retrieval systems so your bot genuinely understands context and nuance — not just keyword matching.' },
    { question: 'Can the bot book appointments?', answer: 'Absolutely. We integrate with Calendly, Google Calendar, Acuity, and most major booking platforms so the bot can check availability and confirm bookings in real time.' },
    { question: 'What happens when the bot can\'t answer something?', answer: 'We design intelligent escalation flows that hand off to human agents with full context — so customers never feel they\'ve hit a dead end.' },
    { question: 'Which platforms can the bot be deployed on?', answer: 'We deploy across website widget, WhatsApp Business, Instagram DMs, Facebook Messenger, SMS, and custom platforms via API.' },
    { question: 'How do you prevent the bot from saying wrong things?', answer: 'We use grounding, fact-checking layers, and strict knowledge base boundaries so the bot only answers what it knows — and escalates when it doesn\'t.' },
  ],
  gradient: 'linear-gradient(135deg, #06B6D4 0%, #4F46E5 100%)',
  accentColor: '#06B6D4',
}

export default function ChatBotsPage() {
  return <ServicePage {...chatBotsData} />
}
