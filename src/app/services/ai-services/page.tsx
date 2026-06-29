import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'

export const metadata: Metadata = {
  title: 'AI Services — Custom AI Solutions & Intelligent Automation',
  description:
    'Custom AI solutions, automation pipelines, and workflow integrations that eliminate bottlenecks and multiply your team\'s output. Built for real business problems, not demos.',
  alternates: { canonical: 'https://scillasolutions.com/services/ai-services' },
}

const aiServicesData = {
  badge: 'AI Services',
  hero: {
    headline: 'AI that actually <span class="gradient-text">works for your business</span>',
    subheadline:
      'Not demos, not experiments — production AI systems that eliminate your most costly bottlenecks and compound your team\'s output every single day.',
    cta: 'See What\'s Possible',
  },
  overview:
    'We design, build, and deploy custom AI solutions tailored to your specific workflows. From intelligent document processing and automated reporting to multi-agent pipelines and API integrations — we turn your most time-consuming manual processes into automated systems that run 24/7.',
  features: [
    'Custom AI workflow design and architecture',
    'LLM integration (OpenAI, Anthropic, Google, open-source)',
    'Document processing, extraction, and classification',
    'Automated reporting and data synthesis',
    'CRM, ERP, and third-party API integrations',
    'Multi-step agentic pipelines with human-in-the-loop checkpoints',
    'AI-powered email drafting and response systems',
    'Internal knowledge base and Q&A systems (RAG)',
    'Monitoring, alerting, and continuous optimisation',
  ],
  process: [
    { step: '01', title: 'Process Audit', description: 'We map your current workflows and identify the highest-value automation opportunities — the ones that will save the most time and generate the most ROI.' },
    { step: '02', title: 'Solution Design', description: 'We design the AI architecture: which models, which tools, what triggers, what outputs. You review and approve before any code is written.' },
    { step: '03', title: 'Build & Test', description: 'We build the system with rigorous testing at every stage. Edge cases are handled. Outputs are validated. Nothing ships until it\'s production-ready.' },
    { step: '04', title: 'Deploy & Optimise', description: 'We deploy to your environment, train your team, set up monitoring, and optimise based on real-world performance data.' },
  ],
  outcomes: [
    { metric: '85%', description: 'Average reduction in time spent on automated tasks' },
    { metric: '40K+', description: 'Hours saved for our clients annually' },
    { metric: '10×', description: 'Output capacity without adding headcount' },
    { metric: '< 30d', description: 'Average time to measurable ROI' },
  ],
  faqs: [
    { question: 'Do I need a technical team to use your AI systems?', answer: 'No. We build systems designed for non-technical users with intuitive interfaces and clear documentation. We also train your team and provide ongoing support.' },
    { question: 'Which AI models do you use?', answer: 'We\'re model-agnostic and choose the best tool for each use case. We work with OpenAI, Anthropic, Google, and open-source models — and we explain our choices transparently.' },
    { question: 'Is my business data safe?', answer: 'Data security is non-negotiable. We use enterprise-grade encryption, comply with GDPR/CCPA requirements, and can deploy to your own infrastructure if needed.' },
    { question: 'What\'s the typical cost of a custom AI project?', answer: 'Projects range from £5K for focused automations to £50K+ for complex enterprise systems. After our discovery call we provide a fixed-price proposal with no hidden costs.' },
    { question: 'Do you provide ongoing maintenance?', answer: 'Yes. We offer monthly retainer packages that include monitoring, optimisation, model updates, and priority support as your needs evolve.' },
  ],
  gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
  accentColor: '#7C3AED',
}

export default function AIServicesPage() {
  return <ServicePage {...aiServicesData} />
}
