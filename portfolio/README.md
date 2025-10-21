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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Notes

- Dark mode via `next-themes`
- Icons with `lucide-react`
- Animations ready via `framer-motion`
