import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'AI Receptionist — 24/7 AI Voice & Chat Reception',
  description:
    'Never miss a call or enquiry again. Our AI Receptionist answers calls, qualifies leads, books appointments, and handles FAQs around the clock — at a fraction of the cost of a human receptionist.',
  alternates: { canonical: 'https://scillasolutions.com/services/ai-receptionist' },
}

const aiReceptionistData = {
  badge: 'AI Receptionist',
  hero: {
    headline: 'Your front desk,<br /><span class="gradient-text">open 24 hours a day</span>',
    subheadline:
      'An AI-powered receptionist that answers every call, handles every enquiry, books every appointment, and qualifies every lead — while your team focuses on higher-value work.',
    cta: 'Get My AI Receptionist',
  },
  overview:
    'Our AI Receptionist is a fully trained, always-on voice and chat system that handles your inbound communications with the warmth and capability of a skilled human receptionist. It answers calls in real time, understands context, books appointments directly into your calendar, and captures every lead — even at 3am on a bank holiday.',
  features: [
    'Natural-sounding AI voice with customisable persona',
    'Inbound call answering — 24/7, no hold times',
    'Real-time calendar booking and appointment confirmation',
    'Lead qualification and CRM data capture',
    'FAQ and knowledge base answering',
    'Call recording, transcription, and summary emails',
    'Multi-language support (40+ languages)',
    'SMS and email follow-up after each interaction',
    'Escalation to human staff for complex enquiries',
    'Analytics dashboard — call volume, bookings, drop-off',
  ],
  process: [
    { step: '01', title: 'Call Flow Design', description: 'We map every scenario your receptionist handles — new enquiries, existing clients, complaints, bookings, FAQs. We design a call flow that mirrors your best human receptionist.' },
    { step: '02', title: 'Training & Persona', description: 'We train the AI on your business — your services, prices, team, policies, and FAQs. We give it a name and voice that reflects your brand.' },
    { step: '03', title: 'Integration', description: 'We connect to your phone system (VoIP/landline forwarding), calendar, CRM, and email. We test every scenario exhaustively before go-live.' },
    { step: '04', title: 'Go Live & Refine', description: 'We monitor the first two weeks closely, reviewing call recordings and refining responses. Monthly optimisation is included in all plans.' },
  ],
  outcomes: [
    { metric: '100%', description: 'Of calls answered — zero missed opportunities' },
    { metric: '2,400h', description: 'Average annual hours freed per client' },
    { metric: '£0', description: 'Overtime, sick days, or training costs' },
    { metric: '3min', description: 'Average setup to first answered call' },
  ],
  faqs: [
    { question: 'Will callers know they\'re speaking to an AI?', answer: 'Our AI sounds remarkably natural — but we recommend transparency. We can configure the system to introduce itself as a virtual assistant, which most callers appreciate for its efficiency.' },
    { question: 'What happens if someone asks something the AI doesn\'t know?', answer: 'The AI handles unknown questions gracefully, takes a message, and triggers an alert to your team for follow-up. It never guesses or makes up information.' },
    { question: 'Does it work with my existing phone system?', answer: 'Yes. We support call forwarding from any VoIP provider, landline, or mobile number. No hardware changes are required in most cases.' },
    { question: 'Can it book into my specific calendar software?', answer: 'We integrate with Google Calendar, Outlook, Calendly, Acuity, Cliniko, and most major scheduling platforms. If yours isn\'t listed, we can likely still integrate via API.' },
    { question: 'What if I need to update the AI\'s knowledge?', answer: 'Your knowledge base is editable via a simple dashboard. Price changes, new services, holiday hours — you update it once and the AI knows immediately.' },
  ],
  gradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
  accentColor: '#8B5CF6',
}

export default function AIReceptionistPage() {
  return <ServicePage {...aiReceptionistData} />
}
