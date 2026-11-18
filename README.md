# RYUKSAIDSO Solutions

Marketing & pricing website for **RYUKSAIDSO Solutions** — the services arm of [ryuksaidso.online](https://ryuksaidso.online). Separate from the main SaaS site, this is where customers explore services and fixed-scope pricing.

**Live:** https://solutions.ryuksaidso.online

## What's here

| Route | Page |
|---|---|
| `/` | Home — services overview, process, why choose, CTA |
| `/services` | All services with plan summaries |
| `/services/websites` | Website Development — ₹15k / ₹30k / ₹45k |
| `/services/mobile-apps` | Mobile App Development — ₹17k / ₹34k / ₹50k |
| `/services/desktop-software` | Desktop Applications — ₹20k / ₹40k / ₹60k |
| `/services/bots-servers` | Bots & Server Solutions — ₹10k / ₹15k / ₹20k |
| `/services/ai-automation` | AI Agents & Automation — ₹20k / ₹40k / ₹70k |
| `/pricing` | All five services' plans in one place |
| `/contact` | Free consultation form (mailto) + direct contact details |

Each service page includes: **3 pricing plans** (Basic / Medium "Most Popular" / Advanced), **Included in All Plans**, **types of projects we build**, **add-ons**, and **Why Choose Ryuksaidso?** — transcribed from the official pricing posters.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — neon violet dark theme (`src/app/globals.css`)
- [lucide-react](https://lucide.dev) icons
- Fully static export-friendly (all routes prerendered), SEO: metadata, `sitemap.xml`, `robots.txt`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint
```

## Content editing

All services, plans, add-ons and copy live in **`src/lib/data.ts`** — edit prices or features there and every page updates.

## Brand

- Logo: `public/logo-r.png` (RYUKSAIDSO "R")
- Theme: dark `#07050d` + neon violet `#a855f7`, matching ryuksaidso.online
- Contact: ryuksaidso@gmail.com · +91 9149522458 · [ryuksaidso.online](https://ryuksaidso.online)

## Deploy

Deployed on Vercel. To redeploy:

```bash
vercel --prod
```

Custom domain `solutions.ryuksaidso.online` is attached in Vercel project settings.
