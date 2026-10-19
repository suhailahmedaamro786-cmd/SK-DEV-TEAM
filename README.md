# SK DEV TEAM — Public Website

Premium, responsive software agency website built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.

## Included
- Home, About, Services, Portfolio, project detail pages, Pricing, Contact, FAQ, Privacy Policy, and Terms.
- Responsive navigation, project demo labels, and contact via WhatsApp.
- SEO metadata, Open Graph defaults, generated sitemap and robots rules.
- Accessible focus styles, skip link, reduced-motion support, and responsive layouts.
- Contact form prepares a WhatsApp message; it does not store submissions or send data to a backend.

## Run locally
Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

## Checks
```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel
Import this repository into Vercel with the Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the final canonical production URL before launch. The default canonical URL is `https://sk-dev-team.vercel.app`; set `NEXT_PUBLIC_SITE_URL` if deploying to a different domain.

## Before launch
- Confirm the canonical domain and review all external project links.
- Review privacy/terms language for the actual business and jurisdiction.
- Manually test mobile layouts and WhatsApp handoff.
- Domain renewals, paid services, and ongoing maintenance should be agreed separately.
