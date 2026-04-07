# Royal Brunei Furniture — Next.js 15 Website

Production-grade marketing website for **Royal Brunei Furniture**, Porur, Chennai. Built with Next.js 15 (App Router, RSC-first), TypeScript strict, Tailwind CSS v4, and Framer Motion 11.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5 strict (zero `any`)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond + DM Sans via `next/font/google`
- **Forms**: React Hook Form + Zod
- **Package manager**: pnpm

## Getting started

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm start     # serve production build
```

## Project structure

```
royal-brunei/
├── app/                 # App Router entry (layout, page, sitemap, robots, globals.css)
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, MarqueeStrip, Categories, FeaturedProducts, WhyUs, Brands, Testimonials, Contact
│   ├── ui/              # AnimatedSection, CustomCursor, WhatsAppFloat, MarqueeInner, EnquiryForm
│   └── icons/           # SVG furniture icon set
├── lib/                 # constants, schema, metadata helpers
├── types/               # shared TypeScript interfaces
└── public/              # static assets
```

## Customising business data

All site copy — products, pillars, testimonials, address, GSTIN, hours — lives in `lib/constants.ts`. Edit it in one place and the whole site updates.

## Filling in contact details

Replace placeholder fields in `lib/constants.ts`:

- `phone` — currently `+91 XXXXX XXXXX`
- `whatsappNumber` — currently `91XXXXXXXXXX`
- `email` — currently `enquiry@royalbruneifurniture.in`

## Deployment

The project is ready for Vercel. Push to a git repository and import it into Vercel — no configuration needed.
