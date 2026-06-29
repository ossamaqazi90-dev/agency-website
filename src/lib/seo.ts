const BASE_URL = 'https://scillasolutions.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Scilla Solutions',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'A modern creative + AI agency helping businesses look world-class and run smarter.',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-000-000-0000',
    contactType: 'customer service',
    email: 'hello@scillasolutions.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://twitter.com/scillasolutions',
    'https://linkedin.com/company/scillasolutions',
    'https://instagram.com/scillasolutions',
  ],
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Scilla Solutions',
  url: BASE_URL,
  description: 'Creative + AI agency — branding, AI automation, chatbots, web design, and AI receptionist.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Scilla Solutions',
      url: BASE_URL,
    },
    url,
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/contact`,
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  }
}

export function JsonLd({ schema }: { schema: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    // eslint-disable-next-line react/no-danger
    { __html: JSON.stringify(Array.isArray(schema) ? schema : schema) }
  )
}
