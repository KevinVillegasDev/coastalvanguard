# Coastal Vanguard Landing Site

## Project Overview
Marketing & automation solutions landing page for Coastal Vanguard.

**Live Site:** https://coastalvanguard.com
**Repository:** https://github.com/KevinVillegasDev/coastalvanguard.git

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (uses `@theme` for CSS variables)
- **Animations:** Framer Motion
- **Particles:** @tsparticles/react + @tsparticles/slim
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Outfit (body) + Syne (display)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Tailwind + custom theme
│   └── api/contact/route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Fixed nav with logo
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with particle background + rings
│   │   ├── Services.tsx    # 6 service cards grid
│   │   ├── About.tsx       # Company info + values
│   │   └── Contact.tsx     # Contact form
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── effects/
│       └── ParticleCanvas.tsx  # tsParticles with geometric lines
├── lib/
│   ├── particles-config.ts
│   └── utils.ts            # cn() helper
└── hooks/
    └── useContactForm.ts
```

## Design System

### Colors (defined in globals.css @theme)
- `abyss` - #050a12 (darkest background)
- `deep` - #0a1628 (secondary background)
- `navy` - #0f2744
- `slate` - #1a3a5c
- `storm` - #2d5a87
- `amber` - #f5a623 (warm accent)
- `teal` - #00c2b8 (cool accent)
- `fog` - rgba(255,255,255,0.7)
- `mist` - rgba(255,255,255,0.4)

### Key Visual Elements
- White/light color scheme on dark backgrounds
- Particle network with geometric connecting lines in Hero
- Concentric rings around stats box in Hero
- Glass-morphism cards with `glass` utility class
- Glow effects on hover with `glow-border` class

## Deployment
- **Platform:** Vercel
- **Auto-deploy:** Pushes to `main` branch trigger automatic deployment
- **Domain:** coastalvanguard.com (managed via Squarespace DNS)

## Commands
```bash
npm run dev      # Start dev server (usually localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

## Important Notes
- Logo is at `public/logo.png` (white transparent PNG)
- Particle effects use z-index 0, content uses z-10
- Header becomes semi-transparent with blur on scroll
- All sections use smooth scroll navigation
