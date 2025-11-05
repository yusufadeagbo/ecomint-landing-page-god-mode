# Design Notes: EcoMint SvelteKit Site

## Design System Extraction from REFERENCE_SITE

### Analysis Process

1. **Inspected HTML structure** of reference site (Tandym/Webflow site)
2. **Extracted CSS** from minified stylesheet
3. **Identified color patterns** via grep on CSS background-color and color properties
4. **Documented typography** from font-family declarations
5. **Mapped spacing patterns** by analyzing common margin/padding values
6. **Created CSS variable system** to replicate visual style without Tailwind config

## Complete Design Token Mapping

### Colors

| Token | Value | Source | Usage |
|-------|-------|--------|-------|
| `--color-evergreen` | `#0d3d2e` | Reference site primary dark green | Primary backgrounds, headers |
| `--color-emerald` | `#10b981` | Tailwind emerald-500 (matches ref accent) | CTAs, links, accents |
| `--color-night` | `#111827` | Tailwind gray-900 | Body text, headings |
| `--color-white` | `#ffffff` | Standard | Backgrounds, reverse text |
| `--color-fog` | `#f9fafb` | Tailwind gray-50 | Light backgrounds |
| `--color-mist` | `#f3f4f6` | Tailwind gray-100 | Cards, sections |
| `--color-dust` | `#e5e7eb` | Tailwind gray-200 | Borders, dividers |
| `--color-gray` | `#6b7280` | Tailwind gray-500 | Secondary text |
| `--color-gray-dark` | `#9ca3af` | Tailwind gray-400 | Tertiary text, disabled |
| `--color-gold` | `#fbbf24` | Tailwind amber-400 | Rewards, stars, highlights |

**Rationale for Color Choices:**
- **Evergreen vs. Reference Green**: Reference site used a dark green (`var(--evergreen)`) as primary. Matched this closely with `#0d3d2e` which has same depth and sustainability connotation.
- **Emerald Accent**: Reference site had a brighter green accent. Used Tailwind's emerald-500 for consistency and accessibility (better contrast than pure lime).
- **Gray Scale**: Reference used Untitled Sans with muted grays. Adopted Tailwind's gray scale for precision and proven contrast ratios.
- **Gold for Rewards**: Added gold accent (not in reference) specifically for rewards, stars, and premium features to differentiate from primary green.

### Typography

| Token | Value | Source | Usage |
|-------|-------|--------|-------|
| `--font-sans` | `'Inter', system-ui, -apple-system, ...` | Modern alternative to Montserrat | Body text, UI |
| `--font-heading` | `'Inter', system-ui, -apple-system, ...` | Same as body for consistency | Headings |

**Rationale for Font Choice:**
- **Reference Site**: Used Montserrat (Google Fonts)
- **Our Choice**: Inter
- **Why**: Inter has better screen readability at small sizes, wider language support, and is a modern standard for web apps. Maintains same "modern sans-serif" aesthetic as Montserrat but with superior metrics for UI text. No need to load Google Fonts (performance win).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | `0.5rem` (8px) | Tight spacing, inline gaps |
| `--spacing-sm` | `0.75rem` (12px) | Small component padding |
| `--spacing-md` | `1rem` (16px) | Base spacing unit |
| `--spacing-lg` | `1.5rem` (24px) | Section padding |
| `--spacing-xl` | `2rem` (32px) | Large gaps |
| `--spacing-2xl` | `3rem` (48px) | Section spacing |
| `--spacing-3xl` | `4rem` (64px) | Major section breaks |
| `--spacing-4xl` | `6rem` (96px) | Hero sections, page dividers |

**Derived from**: Reference site's consistent use of 8px baseline grid. All values are multiples of 8 or 12.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.375rem` (6px) | Small elements, badges |
| `--radius-md` | `0.5rem` (8px) | Buttons, inputs |
| `--radius-lg` | `0.75rem` (12px) | Cards, modals |
| `--radius-xl` | `1rem` (16px) | Large containers |

**Source**: Reference site used rounded corners throughout. Extracted common values and mapped to scale.

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle depth |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), ...` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), ...` | Modals, elevated cards |
| `--shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), ...` | Hero elements, prominent features |

**Source**: Tailwind's proven shadow scale. Reference site used similar shadow depths.

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms cubic-bezier(0.4, 0, 0.2, 1)` | Hovers, small UI changes |
| `--transition-base` | `250ms cubic-bezier(0.4, 0, 0.2, 1)` | Default transitions |
| `--transition-slow` | `350ms cubic-bezier(0.4, 0, 0.2, 1)` | Page transitions, large animations |

**Rationale**: Reference site used Webflow's default easing. We adopted Tailwind's `ease-out` curve which feels snappier for modern web apps.

## CSS Variable Usage Guide

### How to Use in Components

Instead of Tailwind config, all tokens are accessed via `var()` in Tailwind classes:

```svelte
<div class="bg-[var(--color-evergreen)] text-white">
```

### Why This Approach?

**Requirement**: No `tailwind.config.js` file
**Solution**: CSS custom properties give same power with added benefits:
- Runtime theme switching (future feature)
- Easier to override per-component
- Simpler mental model for non-Tailwind developers
- No build-time config needed

### Accessing Tokens in JavaScript

```svelte
<script>
  // Can read CSS variables if needed
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-emerald');
</script>
```

## Improvements Over Reference Site

### 1. Contrast Improvements

**Issue**: Reference site had some low-contrast text on colored backgrounds
**Fix**: All text-on-background combinations tested with WebAIM contrast checker
**Examples**:
- Gray text on white: Changed from `#999` to `#6b7280` for AA compliance
- White text on green: Ensured green is dark enough (`#0d3d2e`) for 4.5:1 ratio

### 2. Responsive Breakpoints

**Reference**: Webflow's default breakpoints (768px, 992px, 1280px)
**Our Approach**: Tailwind's standard breakpoints via class names
- `sm:` 640px (phones landscape)
- `md:` 768px (tablets)
- `lg:` 1024px (laptops)

**Rationale**: Tailwind's breakpoints are better tested and mobile-first by default.

### 3. Focus States

**Issue**: Reference site had minimal keyboard focus indicators
**Fix**: Added visible focus rings to all interactive elements:
```css
focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]
```

### 4. Reduced Motion Support

**Addition**: Reference site didn't respect `prefers-reduced-motion`
**Fix**: Global CSS rule disables animations for users who need it:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5. Mobile Menu UX

**Reference**: Used Webflow's default slide-in menu
**Our Version**: Enhanced with:
- Smooth transitions
- Backdrop click to close
- Better close button positioning
- Visible focus states

## Component-Specific Design Decisions

### Hero Component

**Visual Approach**: Gradient background with floating cards/badges
- **Reference**: Used isometric device mockups with animation
- **Our Choice**: Simple gradient + placeholder for device
- **Rationale**: Actual mockups require design assets; gradient maintains visual interest until real screenshots available

### Audience Chooser Cards

**Reference**: Used 2-column grid for merchants/shoppers
**Our Version**: 3-column for Users/Operators/Agents
**Improvement**: Hover states with border color change and subtle lift (translateY)

### Feature Cards

**Layout**: Icon + Title + Description in horizontal layout
**Reference**: Similar pattern but vertical on mobile
**Our Version**: Stays horizontal on mobile (icon is small enough)

### Demo Player

**Reference**: Had embedded video with custom controls
**Our Version**: Placeholder with play/pause toggle
**Rationale**: Real demo video not available; shows intended UX pattern

### Learning Articles

**Design**: Card-based with category badge, title, summary, read time
**Inspiration**: Medium/Dev.to article cards
**Enhancement**: Hover state changes border color + title color for clear feedback

## Future Token Management Suggestions

### 1. Consider a Theme Switcher

With CSS variables, adding dark mode is straightforward:

```css
[data-theme="dark"] {
  --color-evergreen: #1a5c44;
  --color-fog: #1f2937;
  /* ... */
}
```

### 2. Localized Color Preferences

Different regions may prefer different accent colors. CSS variables make A/B testing easy:

```css
[data-region="lagos"] {
  --color-emerald: #10b981; /* green */
}
[data-region="abuja"] {
  --color-emerald: #3b82f6; /* blue */
}
```

### 3. Operator Branding

For white-label operator dashboards, allow operators to override primary colors:

```svelte
<div style="--color-evergreen: {operator.brandColor}">
  <!-- Entire app inherits operator's brand -->
</div>
```

### 4. Gradual Migration to Tailwind Config

If team prefers Tailwind config in the future, can auto-generate from CSS variables:

```js
// Future tailwind.config.js
const getCSSVar = (name) => /* read from CSS */;

module.exports = {
  theme: {
    extend: {
      colors: {
        evergreen: getCSSVar('--color-evergreen'),
        // ...
      }
    }
  }
}
```

But for now, CSS variables provide maximum flexibility with zero build config.

## Reference Site Screenshots Analysis

**Analyzed sections**:
1. Hero with payment card mockup
2. Value proposition cards (3 columns)
3. Animated feature showcases
4. Integration logos scrolling animation
5. Footer layout

**Adopted patterns**:
- Dark green primary color scheme
- White-on-green hero sections
- Card-based feature highlights
- Rounded corners on all containers
- Subtle shadows for depth
- Clean, spacious layouts

**Improved patterns**:
- Better mobile responsiveness
- Clearer focus states
- Higher contrast ratios
- More consistent spacing
- Simplified animations

## Design Philosophy

**Three pillars**:

1. **Clarity**: Every section has clear purpose; no decorative clutter
2. **Trust**: Professional polish builds credibility for financial platform
3. **Speed**: Minimal assets, fast load times, immediate interactions

**Color psychology**:
- Green: Sustainability, growth, go/positive action
- White: Clean, simple, trustworthy
- Gold: Rewards, premium, achievement

**Typography hierarchy**:
- H1 (4xl-6xl): Hero headlines only
- H2 (3xl-4xl): Section titles
- H3 (xl-2xl): Card titles, subsections
- Body (base): 16px for readability
- Small (sm): 14px for metadata

---

**Last Updated**: 2025-11-05
**Maintained By**: Design System Team
**Questions?**: Contact design@ecomint.example
