# EcoMint Premium Design System
## World-Class Landing Page Redesign

---

## 🎯 Design Philosophy

**Goal:** Create a landing page that looks like it was designed by Apple, Stripe, or Linear's design teams.

**Principles:**
1. **Purposeful** - Every color, spacing, and element serves a clear purpose
2. **Cohesive** - All elements work together in harmony
3. **Premium** - Feels expensive, trustworthy, and professional
4. **Clear** - Information hierarchy is obvious and scannable
5. **Sophisticated** - Refined, not flashy

---

## 🎨 Color Strategy

### Current Problems:
❌ Random color mixing (emerald + blue + cyan + gold)
❌ No clear color purpose or hierarchy
❌ Bright, unsophisticated greens
❌ Inconsistent accent usage
❌ Cold, sterile feeling

### New Premium Palette:

#### **Primary (Brand Identity)**
```css
--forest-950: #0A1F1A;     /* Deep forest - headings, heavy emphasis */
--forest-900: #0D2920;     /* Dark forest - primary text */
--forest-800: #134035;     /* Forest - navigation, UI elements */
--forest-700: #1A5545;     /* Rich forest - hover states */
```
**Purpose:** Sophisticated sustainability, not "eco-green cliche"

#### **Accent (Premium & Warmth)**
```css
--amber-600: #D97706;      /* Warm amber - primary CTA */
--amber-500: #F59E0B;      /* Rich gold - rewards, highlights */
--amber-100: #FEF3C7;      /* Soft amber - backgrounds */
```
**Purpose:** Premium feel, warmth, rewards/value indication

#### **Trust & Verification**
```css
--blue-600: #2563EB;       /* Trust blue - verification badges */
--blue-100: #DBEAFE;       /* Soft blue - trust backgrounds */
```
**Purpose:** Security, verification, trust signals

#### **Neutrals (Warm & Rich)**
```css
--stone-950: #0C0A09;      /* Rich black - premium text */
--stone-800: #292524;      /* Charcoal - secondary text */
--stone-600: #57534E;      /* Medium gray - tertiary text */
--stone-400: #A8A29E;      /* Light gray - disabled states */
--stone-100: #F5F5F4;      /* Warm off-white - backgrounds */
--stone-50: #FAFAF9;       /* Soft white - cards, surfaces */
```
**Purpose:** Warm, inviting neutrals (not cold grays)

#### **Semantic Colors**
```css
--success: #059669;        /* Emerald green - success states */
--warning: #EA580C;        /* Orange - warnings */
--error: #DC2626;          /* Red - errors */
```

---

## ✍️ Typography System

### Current Problems:
❌ Generic Inter font usage
❌ Poor hierarchy
❌ Inconsistent sizing
❌ Not enough contrast between levels

### New Premium Typography:

#### **Font Family**
```css
--font-display: 'Cal Sans', 'Inter', sans-serif;   /* Hero, large headings */
--font-body: 'Inter', -apple-system, sans-serif;    /* Body text */
--font-mono: 'JetBrains Mono', monospace;          /* Code */
```

#### **Type Scale (Fluid, Responsive)**
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem);
--text-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3rem);
--text-5xl: clamp(3rem, 2.25rem + 3.75vw, 3.75rem);
--text-6xl: clamp(3.75rem, 2.75rem + 5vw, 4.5rem);
```

#### **Font Weights**
```css
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

#### **Line Heights**
```css
--leading-tight: 1.1;      /* Large headings */
--leading-snug: 1.375;     /* Medium headings */
--leading-normal: 1.5;     /* Body text */
--leading-relaxed: 1.625;  /* Long-form content */
```

---

## 📐 Spacing System

### Current Problems:
❌ Inconsistent spacing
❌ Not enough breathing room
❌ Poor vertical rhythm

### New Spacing Scale (8px baseline)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Spacing:**
- Mobile: `--space-16` to `--space-20`
- Desktop: `--space-24` to `--space-32`

---

## 🎭 Shadows & Depth

### Current Problems:
❌ Either no shadows or too harsh
❌ No depth hierarchy

### New Shadow System
```css
/* Subtle elevation */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

/* Focus states */
--shadow-focus: 0 0 0 3px rgb(217 119 6 / 0.3);  /* Amber */
```

---

## 🔘 Border & Radius

### New Border System
```css
--border-width: 1px;
--border-width-thick: 2px;

--border-subtle: 1px solid rgb(168 162 158 / 0.2);
--border-medium: 1px solid rgb(168 162 158 / 0.4);
--border-strong: 2px solid rgb(168 162 158 / 0.6);
```

### Radius Scale
```css
--radius-sm: 0.375rem;   /* 6px - small elements */
--radius-md: 0.5rem;     /* 8px - buttons */
--radius-lg: 0.75rem;    /* 12px - cards */
--radius-xl: 1rem;       /* 16px - large cards */
--radius-2xl: 1.5rem;    /* 24px - sections */
--radius-full: 9999px;   /* Pills, badges */
```

---

## 🎬 Animation & Motion

### Timing Functions
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

### Duration
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

### Principles
- Respect `prefers-reduced-motion`
- Subtle, purposeful animations
- No animation for animation's sake
- Enhance understanding, don't distract

---

## 🎪 Component Patterns

### Buttons
```css
/* Primary CTA - Amber gradient */
background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
padding: 1rem 2rem;
border-radius: var(--radius-lg);
font-weight: 600;
box-shadow: 0 4px 14px 0 rgb(217 119 6 / 0.4);
transition: all 200ms ease;

/* Hover: Lift + intensify */
transform: translateY(-2px);
box-shadow: 0 6px 20px 0 rgb(217 119 6 / 0.5);

/* Secondary - Ghost with border */
background: transparent;
border: 2px solid var(--forest-700);
color: var(--forest-900);
```

### Cards
```css
background: var(--stone-50);
border: 1px solid rgb(168 162 158 / 0.2);
border-radius: var(--radius-xl);
padding: var(--space-8);
transition: all 250ms var(--ease-smooth);

/* Hover: Subtle lift */
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
border-color: rgb(168 162 158 / 0.3);
```

### Badges (Verification, Trust)
```css
background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
color: #1E40AF;
padding: 0.375rem 1rem;
border-radius: var(--radius-full);
font-size: 0.875rem;
font-weight: 600;
display: inline-flex;
align-items: center;
gap: 0.5rem;
```

---

## 🏗️ Layout Patterns

### Hero Section
- **Height:** 90vh (mobile), 80vh (desktop)
- **Max-width:** 1280px
- **Padding:** Large (space-20 to space-32)
- **Background:** Subtle gradient, not flat
- **Typography:** Large, bold, with clear hierarchy

### Content Sections
- **Max-width:** 1120px for text, 1280px for visuals
- **Vertical spacing:** space-24 to space-32
- **Grid:** 12-column, responsive
- **Breathing room:** Generous whitespace between elements

---

## 📸 Visual Language

### Photography
- Professional, real photos
- Warm color grade
- Consistent lighting
- Show real people and impact

### Illustrations
- Geometric, minimal style
- Consistent line weight
- Use brand colors only
- SVG format, optimized

### Icons
- 24px base size
- 2px stroke weight
- Rounded caps
- Heroicons or custom set

---

## ♿ Accessibility

- **WCAG AAA** contrast ratios
- Focus states always visible
- Keyboard navigation
- Screen reader friendly
- Semantic HTML

---

## 📱 Responsive Breakpoints

```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
--ultra: 1536px;
```

---

## 🎯 Implementation Priority

### Phase 1: Foundation (Day 1)
1. ✅ Update color system in `app.css`
2. ✅ Implement typography scale
3. ✅ Add spacing system
4. ✅ Update shadow/border system

### Phase 2: Components (Day 1-2)
1. ✅ Redesign button system
2. ✅ Redesign card components
3. ✅ Update navigation
4. ✅ Create badge system

### Phase 3: Pages (Day 2-3)
1. ✅ Landing page hero
2. ✅ All landing sections
3. ✅ Operators page
4. ✅ Agents page
5. ✅ Users page
6. ✅ Learning page

### Phase 4: Polish (Day 3)
1. ✅ Add micro-interactions
2. ✅ Optimize animations
3. ✅ Final QA
4. ✅ Performance audit

---

**This is the roadmap to a billion-dollar landing page.**
