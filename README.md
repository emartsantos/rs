# Raymart Santos — Portfolio

Next.js 16 static-export portfolio with a distinctive editorial design system. Deployed to Vercel.

## Stack

- **Framework**: Next.js 16 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4 + CSS Modules, CSS custom properties
- **Fonts**: Archivo (variable) + IBM Plex Mono (self-hosted via `next/font`)
- **Icons**: Lucide React
- **Forms**: Formspree-compatible endpoint (optional)
- **Deploy**: Vercel (static export to `./out`)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — hero, selected work, services, pricing, why, process, tech, FAQ, CTA |
| `/work` | Project browser with category filters |
| `/work/[slug]` | Case study pages (10 projects) |
| `/services` | 10 services with deliverables |
| `/pricing` | 8 packages in 3 categories + comparison table |
| `/about` | Bio, interests, engineering capabilities |
| `/contact` | Validated inquiry form (Formspree or mailto fallback) |

## Local Development

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev

# Production build (static export to ./out)
npm run build

# Preview static build locally
npx serve out
```

Open `http://localhost:3000`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | No | Formspree (or compatible) form endpoint for contact submissions. If unset, form falls back to `mailto:` with pre-filled data. |

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Vercel Deployment

1. Import the repository at [vercel.com/new](https://vercel.com/new), or run `vercel` from the CLI.
2. Vercel builds with `npm run build` and serves the static export from `./out`.
3. Pushing to `main` triggers a production deployment via Vercel's Git integration.

## Project Structure

```
src/
├── app/
│   ├── (portfolio)/          # Portfolio route group
│   │   ├── page.tsx          # Home
│   │   ├── layout.tsx        # Header + Footer shell
│   │   ├── services/         # Services page
│   │   ├── pricing/          # Pricing page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact form
│   │   └── work/
│   │       ├── page.tsx      # Work browser
│   │       └── [slug]/       # Case study pages
│   ├── globals.css           # Design tokens, base styles, utilities
│   └── layout.tsx            # Root layout, fonts, metadata
├── components/
│   ├── portfolio/            # Header, Footer, WorkBrowser, FeaturedProjectRow
│   └── ui/                   # CTA, SectionHeading, Accordion, Reveal
├── data/
│   ├── projects.ts           # 5 concept + 5 independent projects
│   ├── services.ts           # 10 services
│   ├── packages.ts           # 8 pricing packages + comparison data
│   ├── process.ts            # 5 process steps
│   └── faq.ts                # 8 FAQs
└── lib/
    └── site.ts               # Site config, portfolioHref helper
```

## Design System

**Colors** (CSS custom properties in `globals.css`):
- `--paper` / `--paper-raised` — backgrounds
- `--ink` / `--ink-soft` / `--graphite` — text hierarchy
- `--hairline` / `--hairline-strong` — borders, dividers
- `--signal` / `--signal-deep` — accent (CTAs, links, focus)

**Typography**:
- Display: Archivo variable (wdth axis), tightened tracking
- UI/Mono: IBM Plex Mono, uppercase, letter-spaced labels
- Utilities: `.font-display`, `.font-display-md`, `.mono-label`, `.annotation`

**Utilities**:
- `.container-portfolio` — max-width 1400px, responsive padding
- `.hairline-t` / `.hairline-b` — top/bottom rules
- `.link-ink` — accessible underlined links
- `.reveal` / `.reveal.is-visible` — scroll-reveal (respects `prefers-reduced-motion`)

## Scripts

```bash
npm run dev       # Turbopack dev server
npm run build     # Static export (output: "export")
npm run lint      # ESLint (Next.js core-web-vitals + TS config)
npm run typecheck # tsc --noEmit
```

## License

MIT — feel free to reference the architecture and patterns for your own portfolio.