Elegant portfolio built with Next.js 15, Tailwind CSS 4, and TypeScript. Content is sourced from `src/data/siteData.ts` so you can edit your information without touching components.

## Getting Started

Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build & start

```bash
npm run build
npm start
```

Update your details in:

- `src/data/siteData.ts` – name, summary, experience, projects, skills, education, certifications
- `src/components/*` – UI sections (optional tweaks)
- `src/app/layout.tsx` – metadata/SEO

### Deploy to Vercel

1) Create a Vercel project and link this folder.
2) Set Environment Variables:
   - `RESEND_API_KEY`: your Resend API key
   - `CONTACT_TO_EMAIL`: where contact form emails are delivered
   - `CONTACT_FROM_EMAIL`: verified sender (e.g., `portfolio@your-domain.com`)
3) Push to the connected branch; Vercel builds automatically.

Analytics are enabled via `@vercel/analytics` and `@vercel/speed-insights`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Notes

- Dark mode via `next-themes`
- Icons with `lucide-react`
- Animations ready via `framer-motion`
