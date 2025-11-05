# EcoMint Landing & Learning Hub

Production-ready SvelteKit website for EcoMint - a waste collection platform connecting users, operators, and agents.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
ecomint-site/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Main layout with header/footer
│   │   ├── +page.svelte            # Landing page
│   │   ├── users/+page.svelte      # For Users page
│   │   ├── operators/+page.svelte  # For Operators page
│   │   ├── agents/+page.svelte     # For Agents page
│   │   ├── learning/+page.svelte   # Learning hub
│   │   └── api/sandbox/+server.ts  # Sandbox API endpoint
│   ├── lib/
│   │   └── components/             # Reusable Svelte components
│   ├── app.html                    # HTML template
│   └── app.css                     # Global styles with CSS variables
├── static/                         # Static assets
└── package.json
```

## Key Features

- **Landing Page**: Hero, audience chooser, features, demo player, social proof, learning preview, FAQ, CTA
- **User Page**: Download links, how-it-works, benefits, testimonials
- **Operator Page**: Dashboard demo, pricing tiers, onboarding steps, signup form, sandbox button
- **Agent Page**: Operator-first download flow, earnings info, training links
- **Learning Hub**: Search functionality, category filters, 15 example articles, learning paths
- **API Route**: `/api/sandbox` for demo provisioning

## Design System

All design tokens are defined as CSS variables in `src/app.css`:

### Colors
- `--color-evergreen`: Primary dark green (#0d3d2e)
- `--color-emerald`: Bright green accent (#10b981)
- `--color-night`: Dark text (#111827)
- `--color-fog/mist/dust`: Light grays for backgrounds
- `--color-gold`: Rewards accent (#fbbf24)

### Typography
- Base font: Inter with system fallbacks
- Base size: 16px
- Tailwind utilities for sizing

### Spacing
- CSS custom properties: `--spacing-xs` through `--spacing-4xl`
- Tailwind utilities for margin/padding

### Modifying Design Tokens

Edit `src/app.css` to change colors, fonts, spacing, or shadows. All components use these CSS variables via Tailwind classes like `bg-[var(--color-emerald)]`.

## Components

### Header.svelte
Sticky navigation with mobile drawer. Links to all main pages.

### Footer.svelte
Multi-column footer with links and social media icons.

### Hero.svelte
Gradient hero section with title, subtitle, dual CTAs, and mockup visual.

### AudienceChooser.svelte
Three-card selector for Users, Operators, and Agents.

### FeatureCard.svelte
Reusable card with icon, title, and description. Accepts `icon` prop for different SVG icons.

### DemoPlayer.svelte
Interactive demo section with play/pause button and 3-step flow visualization.

### SearchBar.svelte
Search input with callback. Used on learning page for client-side filtering.

### LearningArticle.svelte
Article card with category badge, title, summary, read time.

### CoverageMapPlaceholder.svelte
Visual representation of coverage areas (Lagos, Abuja, Port Harcourt).

### CTABanner.svelte
Full-width call-to-action section with customizable text and links.

## SEO & Meta

Landing page includes:
- Complete meta tags (title, description, keywords)
- OpenGraph tags for social sharing
- Twitter card tags
- JSON-LD structured data (Organization + SoftwareApplication types)

## Accessibility

- Semantic HTML5 elements throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on all icons and graphics
- Color contrast meets WCAG AA standards
- `prefers-reduced-motion` support in CSS

## Performance

- Static export compatible (using `@sveltejs/adapter-static`)
- CSS variables instead of Tailwind config for minimal bundle size
- No external icon libraries (custom SVG icons)
- Lazy loading ready (add `loading="lazy"` to images as needed)

## Customization

### Changing Colors
Edit CSS variables in `src/app.css`, lines 6-14.

### Adding Pages
Create new files in `src/routes/`. SvelteKit uses file-based routing.

### Modifying Navigation
Edit `src/lib/components/Header.svelte` and `Footer.svelte`.

### Adding Learning Articles
Edit the `articles` array in `src/routes/learning/+page.svelte`.

## Deployment

This project uses `@sveltejs/adapter-static` for static site generation. Deploy the `build/` folder to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static host

No server required. API route (`/api/sandbox`) works via prerendering.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 12+
- Android Chrome 80+

## License

Copyright © 2025 EcoMint. All rights reserved.
