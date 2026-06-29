import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { organizationSchema, webSiteSchema } from '@/lib/seo'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://scillasolutions.com'),
  title: {
    default: 'Scilla Solutions — Brilliant Brands. Intelligent Automation.',
    template: '%s | Scilla Solutions',
  },
  description:
    'Scilla Solutions is a creative + AI agency helping businesses look world-class and run smarter. Expert branding, AI automation, chatbots, web design, and AI receptionist services.',
  keywords: [
    'AI agency', 'branding agency', 'web design', 'AI automation',
    'chatbot development', 'AI receptionist', 'digital marketing', 'Scilla Solutions',
  ],
  authors: [{ name: 'Scilla Solutions' }],
  creator: 'Scilla Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scillasolutions.com',
    siteName: 'Scilla Solutions',
    title: 'Scilla Solutions — Brilliant Brands. Intelligent Automation.',
    description:
      'A modern agency blending creative branding with practical AI automation — helping businesses look world-class and run smarter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scilla Solutions — Creative + AI Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scilla Solutions — Brilliant Brands. Intelligent Automation.',
    description:
      'A modern agency blending creative branding with practical AI automation.',
    images: ['/og-image.png'],
    creator: '@scillasolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}
    >
      <body className="bg-scilla-ink text-scilla-cloud antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, webSiteSchema]) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
