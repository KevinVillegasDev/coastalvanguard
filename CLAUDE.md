# Coastal Vanguard Landing Site

## Project Overview
Marketing & automation solutions landing page for Coastal Vanguard.

**Live Site:** https://coastalvanguard.com
**Repository:** https://github.com/KevinVillegasDev/coastalvanguard.git

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Plain global CSS with custom properties (`src/app/globals.css`) — no Tailwind utilities in markup
- **Animations:** CSS transitions driven by a small IntersectionObserver client component (`ScrollFx`)
- **Forms:** Native React form with Zod validation on the API route
- **Email:** Resend (optional, via `RESEND_API_KEY`)
- **Fonts:** Bricolage Grotesque (display) + Inter (body) + JetBrains Mono (micro-labels), loaded via `next/font`

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, `js` class bootstrap
│   ├── page.tsx            # Main landing page (assembles sections)
│   ├── globals.css         # Full design system (plain CSS, oklch custom properties)
│   ├── icon.svg            # Favicon (shield mark)
│   └── api/contact/route.ts  # Audit form endpoint (site + email → Resend)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Fixed nav, scroll blur, mobile burger menu
│   │   └── Footer.tsx      # Dark slate footer
│   ├── sections/
│   │   ├── Hero.tsx        # Mountain-photo hero, line-reveal headline
│   │   ├── Positioning.tsx # Statement + 4-stat row (count-up)
│   │   ├── Services.tsx    # 6-row accordion list
│   │   ├── Process.tsx     # 4-step timeline
│   │   ├── Quote.tsx       # Dark band pull-quote
│   │   ├── Results.tsx     # Big numbers grid (count-up)
│   │   └── AuditCta.tsx    # Free-audit form card (POSTs to /api/contact)
│   ├── ui/
│   │   └── BrandMark.tsx   # Inline SVG shield logo
│   └── effects/
│       └── ScrollFx.tsx    # IntersectionObserver: .reveal/.stepd + [data-count]
```

## Design System ("Summit" — cool, clean, professional)

### Colors (oklch custom properties in globals.css :root)
- `--bg` cool paper white · `--bg-2` slightly deeper · `--surface` pure white
- `--ink` slate ink text · `--ink-soft` / `--ink-faint` muted tiers
- `--accent` azure (AA-safe on white) · `--accent-bright` for dark surfaces
- `--slate` dark cool band (Quote section + footer)
- `--line` / `--line-2` hairline borders

### Key Visual Elements
- Full-bleed mountain photo hero (`public/hero-peak.jpg`) with cool-grade tint
  overlay + white veils for headline legibility
- Line-mask headline reveal on load (`.hero.lit`), gated behind `html.js`
- `.reveal` elements fade/slide in on scroll; `[data-count]` numbers count up
- Services are an expandable accordion (`aria-expanded` drives CSS grid rows)
- One dark band (Quote) + dark footer; everything else stays light
- Animations no-op cleanly without JS and under `prefers-reduced-motion`

### Conventions
- `ScrollFx` mutates classes/text outside React — elements it targets must keep
  a constant `className`/`textContent` across re-renders
- Micro-labels/kickers use JetBrains Mono, uppercase, letter-spaced
- Section headings use Bricolage Grotesque via `--font-display`

## Deployment
- **Platform:** Vercel
- **Auto-deploy:** Pushes to `main` branch trigger automatic deployment
- **Domain:** coastalvanguard.com (managed via Squarespace DNS)

## Commands
```bash
npm run dev      # Start dev server (usually localhost:3000; .claude/launch.json uses 3002)
npm run build    # Production build
npm run start    # Start production server
```

## Important Notes
- The audit form posts `{ site, email }` to `/api/contact`; without
  `RESEND_API_KEY` set, submissions are logged to the server console
- Legacy logo file at `public/logo.png` (white transparent PNG) — current
  design uses the inline `BrandMark` SVG instead
- `package.json` still lists deps from the previous design (framer-motion,
  tsparticles, lucide, react-hook-form) that are no longer imported
