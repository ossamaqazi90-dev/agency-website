# Scilla Solutions — Agency Website

Production-grade marketing website for Scilla Solutions, built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config in `globals.css`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (display) + Plus Jakarta Sans (body) via `next/font/google`

## Scripts

| Command         | Description                    |
|----------------|-------------------------------|
| `npm run dev`   | Start dev server (Turbopack)   |
| `npm run build` | Production build               |
| `npm start`     | Serve production build         |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, Navbar, Footer, JSON-LD
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── branding/page.tsx
│   │   ├── ai-services/page.tsx
│   │   ├── chat-bots/page.tsx
│   │   ├── web-design/page.tsx
│   │   └── ai-receptionist/page.tsx
│   ├── api/contact/route.ts    # Contact form API route
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/           # Button, Card, Section, Container, Badge, NewsletterForm
│   ├── layout/       # Navbar, Footer
│   ├── home/         # Hero, TrustedBy, ServicesGrid, WhyScilla, Process, ...
│   ├── services/     # ServicePage (shared template for all 5 services)
│   └── contact/      # ContactForm
└── lib/
    ├── utils.ts      # cn() className helper
    └── seo.ts        # JSON-LD schema generators (Organization, Service, FAQ, Breadcrumb)
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repo at vercel.com for automatic deploys on push.

---

## Placeholders to Replace

### Images & Assets

| File | Replace with |
|------|-------------|
| `public/og-image.png` | 1200x630 Open Graph image |
| `public/favicon.ico` | Your favicon |
| `public/favicon-16x16.png` | 16x16 favicon PNG |
| `public/favicon-32x32.png` | 32x32 favicon PNG |
| `public/apple-touch-icon.png` | 180x180 Apple touch icon |
| `public/android-chrome-192x192.png` | 192x192 Android icon |
| `public/android-chrome-512x512.png` | 512x512 Android icon |
| `public/logo.png` | Logo for JSON-LD schema |

### Content

| Location | Replace with |
|----------|-------------|
| `Footer.tsx` social `href="#"` | Real social profile URLs |
| `Footer.tsx` phone/email | Your actual contact details |
| `contact/page.tsx` Calendly link | Your Calendly booking URL |
| `src/lib/seo.ts` sameAs URLs | Your real social profiles |
| Service page copy | Personalise metrics and claims |
| About page team section | Real names, roles, photos |
| FeaturedWork.tsx projects | Real case studies + screenshots |
| Testimonials.tsx quotes | Real client quotes (with permission) |
| TrustedBy.tsx logo names | Real client/partner logos |

### Configuration

| Setting | File |
|---------|------|
| Production domain | `src/app/layout.tsx` (metadataBase) |
| Production domain | `src/lib/seo.ts` (BASE_URL) |
| Production domain | `src/app/sitemap.ts` (BASE_URL) |
| Production domain | `src/app/robots.ts` (sitemap URL) |

### Contact Form (`src/app/api/contact/route.ts`)

Wire up your email provider. Recommended: Resend

```bash
npm install resend
# Add RESEND_API_KEY to .env.local and Vercel env vars
```

### Analytics

Add to `layout.tsx` after going live:
- **Google Analytics 4**: use `@next/third-parties/google`
- **Plausible** or **PostHog** for privacy-friendly alternatives

---

## Colour System

All tokens in `src/app/globals.css` under `@theme`:

| Token | Hex | Use |
|-------|-----|-----|
| `scilla-deep` | `#312E81` | Deep brand base |
| `scilla-indigo` | `#4F46E5` | Primary actions, buttons |
| `scilla-violet` | `#7C3AED` | Accent, gradients |
| `scilla-vlight` | `#8B5CF6` | Gradient midpoint |
| `scilla-lav` | `#C4B5FD` | Highlights, borders |
| `scilla-mist` | `#EDE9FE` | Subtle backgrounds |
| `scilla-ink` | `#0B0B14` | Main dark background |
| `scilla-cloud` | `#FAFAFF` | Off-white text/backgrounds |

Usage: `bg-scilla-indigo`, `text-scilla-lav`, `border-scilla-violet/30`, etc.
