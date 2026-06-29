import type { MetadataRoute } from 'next'

const BASE_URL = 'https://scillasolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { path: '',                        priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about',                  priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact',                priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/branding',      priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/ai-services',   priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/chat-bots',     priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/web-design',    priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/ai-receptionist', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/social-media',   priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
