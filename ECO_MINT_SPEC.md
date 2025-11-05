# EcoMint Landing & Learning Page — WikiRostar Specification

> **One-of-a-kind, conversion-first, education-rich landing experience for EcoMint.**

---

## 1. Executive summary

This document is a complete, prioritized specification for the EcoMint landing (marketing) and Learning pages — designed to:  
- explain the product clearly for **end users**, **operators (PSPs)**, **field agents**, and **developers/partners**,  
- convert visitors into **app downloads**, **operator sign-ups**, **agent registrations**, and **API/partner leads**, and  
- educate, onboard, and reduce friction with a learn-first story arc.

It covers information architecture (pages & sections), UX and motion guidelines, copy and storytelling arcs, component and content inventory, analytics and SEO, accessibility, localization, technical recommendations, and a prioritized roadmap (MVP → v1 → v2).

---

## 2. Goals & success metrics

### Primary goals
- **Clarity:** Any visitor should understand what EcoMint is within 6–8 seconds.
- **Conversion:** Drive four conversion types: User app downloads, Operator (PSP) sign-ups, Agent registrations, Developer/API sign-ups.
- **Education:** Provide an approachable Learning area that reduces support tickets and increases trust.
- **Trust & Credibility:** Surface proof (partners, compliance, security, payment settlements) to reduce perceived risk.

### Key metrics (KPIs)
- Bounce rate of landing page (<40% target after 3 months).  
- Time to first CTA click (target <12s).  
- Download conversion rate (downloads / sessions).  
- Operator sign-up conversion rate.  
- Agent registration conversion rate.  
- Email captures for learning/newsletter.  
- Average pages/session on Learning docs.

---

## 3. Audiences & user stories

### Primary audiences
1. **End Users (Residents / Businesses)** — want simple pickup, easy payment, and predictable scheduling.  
2. **PSP Operators (Business owners / managers)** — want onboarding, route control, agent management, revenue settlement visibility.  
3. **Field Agents / Collectors** — need location-based assignments, QR scanning, and quick app access by operator.  
4. **Developers / Partners** — want API docs, integration examples, sandbox, and support.  
5. **Investors / Press** — need metrics, traction, and team credibility.

### Example user stories
- As an **end user**, I want to understand pickup flow and cost so I’ll download the app.  
- As a **PSP**, I want to know how to sign up and assign agents so I can cover my service area quickly.  
- As an **agent**, I want a direct link to download the agent app filtered to my operator.  
- As a **developer**, I want API docs and sandbox keys to integrate Eco QR payment verification.

---

## 4. Information architecture (pages & sub-sections)

**Top-level pages** (visible from the main navigation):
1. Home / Landing
2. How it works (short explainer + animation)
3. For Operators (PSP)
4. For Agents
5. For Users
6. Learning / Docs (deep educational hub)
7. Pricing & Plans (operators / enterprise)
8. API & Developer Portal
9. About / Impact / Sustainability
10. Help & Support / Contact

**Footer links**: Privacy, Terms, Security, Careers, Press kit, API docs, Sitemap, Localized versions.

---

## 5. Landing page (Home): full breakdown

**Purpose:** Rapidly convey value, build trust, and direct each audience to the correct conversion path.

### 5.1 Page layout & block order (scrollytelling)

The landing page uses a "scrollytelling" pattern: short blocks that tell a cohesive story from problem → solution → social proof → product paths → conversion. Blocks prioritized top-to-bottom (MVP priority: top blocks first):

1. **Sticky header / top nav** (compact, always available): logo, nav links (How it works, For Operators, For Agents, Docs, Pricing), primary CTA: "Get the App" + secondary CTA: "For Operators".
2. **Hero (above the fold)** — short headline, supporting line, primary CTA, secondary CTA, visual (interactive device mockup or short Lottie).  
3. **Immediate audience chooser (micro-CTAs)** — three clear buttons: "I'm a User — Download", "I'm an Operator — Start free", "I'm an Agent — Download for my operator" (operator selection dropdown if returning).  
4. **Problem statement + Opportunity** — one-paragraph problem context: waste collection in cities, inefficiency, low revenue for collectors, payment leakage.  
5. **How EcoMint solves it (3 pillars)** — modular cards: Payments (Eco QR), Logistics & Agents, Data & Rewards. Each card includes a one-line benefit, a small animation or micro-illustration, and a micro-CTA to relevant page.  
6. **Live product demo (interactive)** — 20–30s autoplay demo that shows a user booking a pickup, operator assigning an agent, QR payment being verified. Include a clickable "Try demo" overlay.  
7. **Feature highlights / value props** — feature list split for User / Operator / Agent with icons and micro copy.  
8. **Social proof / partners** — logos, short testimonials, numbers (pickups completed, tons recycled, partners onboarded).  
9. **Deep-dive CTAs** — two-column area with short links: For Operators (pricing, onboarding), For Agents (download), For Developers (API docs).  
10. **Learning Preview** — highlight top articles from the Learning page; quick search box to find guides.  
11. **Pricing & Plans (teaser)** — starter pricing for Operators and enterprise CTA.  
12. **Security & compliance badges** — payments provider logos, certifications.  
13. **FAQ (collapsible)** — common questions for the three audiences.  
14. **Footer (comprehensive)** — contact, social, legal, localized links.

### 5.2 Hero details
- **Headline (formula):** Problem + benefit in one line.
  - Example: "Turn waste into value — simple pickups, precise payments."  
- **Subheading:** short sentence explaining how: "EcoMint connects residents, collectors, and operators with location‑aware pickups, secure Eco QR payments, and real-time tracking."  
- **Primary CTA:** "Download the App" (opens modal with platform chooser or deep link).  
- **Secondary CTA:** "For Operators" (opens registration modal or /operators).  
- **Visual:** device mockups cycling between the User app, Agent app, and Operator dashboard. Use subtle parallax, and animate a small flow (user books → agent assigned → QR scan).  
- **Microcopy:** Show current coverage: "Live in Lagos, Abuja, Port Harcourt — check coverage." (dynamic)

### 5.3 Audience chooser
- Three large cards/buttons for immediate routing. If the visitor is returning and operator known (cookie), show operator-branded agent download button.

### 5.4 Micro-interactions & Motion
- Load: hero Lottie fades in with 350ms ease.  
- Scroll reveal: content cards slide up with staggered timing (60–80ms gaps).  
- CTA hover: subtle scale 1.03 and shadow.  
- Product demo: controlled autoplay 20–30s, loop disabled after two loops, with play/pause control.  
- Animated numbers: count up on viewport.

### 5.5 Accessibility & performance
- Hero image must have `alt` attributes; Lottie fallback static PNG for reduced motion.  
- Respect `prefers-reduced-motion` to disable parallax and heavy transitions.  
- Use `loading=lazy` for images below the fold.  
- Page size < 400 KB of initial payload (MVP) and sub-second TTFB by placing critical CSS inline and offloading assets to CDN.

---

## 6. For Operators page (PSP) — detailed

**Purpose:** Convert operators into signups and explain operational features, pricing, and onboarding.  

### Content sections
1. Headline & short pitch: "Run waste collection like a business — route, pay, scale."  
2. Operator benefits: revenue management, agent assignment, location coverage, dispute resolution, settlements.  
3. Product tour: screenshots + short video showing operator dashboard (coverage map, agent management, transaction reconciliation).  
4. Pricing & plans: transparent tiers and enterprise contact.  
5. Onboarding process: 4 steps with timelines (Sign up → Verify business → Set coverage → Activate agents).  
6. Case studies: 2–3 short operator success stories with metrics.  
7. API & integrations: payments, accounting exports, webhooks.  
8. CTAs: "Start Free Trial" (small KYC modal) + "Request Demo" (calendar picker).  

### UX nuances
- Show dynamic coverage map where operator can click states/LGAs to see demand heatmap.  
- Provide an operator sandbox button to instantly provision a demo operator account.

---

## 7. For Agents page — detailed

**Purpose:** Provide a frictionless path for agents to download the correct agent app, view assigned operators, and understand incentives.

### Content sections
1. Headline & pitch: "Collect smarter — faster routes, verified payments, and better earnings."  
2. Quick download: operator-first flow — agent enters operator code or chooses operator from dropdown to get correct APK / Play Store link.  
3. How it works: Basic onboarding flow for agents (verify ID → accept assignment → scan QR → confirm pickup).  
4. Earnings & incentives: explain payout frequency, commissions, and bonuses.  
5. Training & safety: short guides, videos, and a link to the Learning hub for field best practices.  
6. FAQ and support chat.

### Agent download flow (important)
- Provide a short form: phone + operator code  → verify via OTP → deliver deep link to Play/App Store or direct APK for off‑store installs (with security checks).
- If cookie recognizes returning operator, show branded button: "Download Agent App for [Operator Name]".

---

## 8. For Users page — detailed

**Purpose:** Show simple steps for booking a pickup, paying, and earning rewards.

### Content sections
1. Headline & pitch: "Schedule a pickup in 60 seconds."  
2. How it works: 3-step visual (Request → Agent collects & scans Eco QR → Payment & rewards).  
3. Benefits: convenience, transparent pricing, rewards, environmental impact.  
4. Download buttons: Play Store, App Store, Web App button (PWA).  
5. Pricing / fees explanation and service coverage checker.  
6. Testimonials and photos of real collections to build trust.  
7. Community & referral program details.

### Microcopy examples
- CTA: "Schedule a Pickup"  
- Loader microcopy: "Securing your number…" (from earlier product psychological pricing flow — reuse pattern for suspenseful moments like assigning agent).  

---

## 9. Learning & Docs (the learning page you specifically asked for)

**Purpose:** A world-class, deeply educational hub ("Learning") that answers every imaginable question for Users, Operators, Agents, and Developers — built like a hybrid between a knowledge base and an interactive documentation site.

### 9.1 Structure & navigation
- Left-hand persistent nav with categories: Getting Started, For Users, For Operators, For Agents, API & Developer Guides, Integrations & Webhooks, Troubleshooting, Best Practices, Legal & Compliance, Data & Impact Reports.  
- Global search bar with fuzzy search, filters, and suggestions.  
- Breadcrumbs and article-level TOC.

### 9.2 Content types
- **How-to guides** (step-by-step): e.g., "How to request a pickup", "How to onboard as an operator".  
- **Concept articles:** explain Eco QR, EcoMint ID, settlement flow.  
- **Videos & micro-lessons** (1–3 min): quick walkthroughs for agents and operators.  
- **Interactive sandboxes:** API try-it, webhook tester, and a fake operator dashboard simulator.  
- **Case studies & impact reports:** operational numbers, recycling tonnes, economic impact.  
- **FAQs & troubleshooting:** searchable, with suggested next actions.  
- **Glossary:** domain terms (LGA, PSP, Eco QR, EcoMint ID, settlement).  
- **Community forum / comments:** low-friction community Q&A with moderation tools.

### 9.3 Article anatomy (every doc should include)
- Title & short 1-line summary  
- Estimated read time  
- Tags & category  
- Step-by-step body with short paragraphs and screenshots  
- Code snippets (for developer docs) with copy-to-clipboard  
- Related articles and next steps  
- Feedback widget (Was this helpful?)  
- Last updated timestamp and changelog entries  

### 9.4 Learning UX & features
- **Guided learning paths** for each role: e.g., "New Operator in 10 minutes", "Agent onboarding checklist", "User first pickups".  
- **Progress tracking** for operators/agents who are logged in: checklist + completion badges.  
- **Printable quick guides** (PDF export) for field training.  
- **Localization**: content in major local languages, starting with English (Nigeria), Yoruba, Hausa, Igbo — extendable via CMS.  
- **Accessibility-first**: large fonts, high contrast mode, screen-reader friendly.  

### 9.5 Social & community learning
- Integrate micro-courses and certificates for agents and operators with shareable badges for LinkedIn.  
- Community Q&A, moderated and pinned by EcoMint staff.  

### 9.6 Learning page story & tone
- The Learning hub should tell the story of *why* EcoMint exists first — the social and economic impact — then shift to *how* to use it. Tone: optimistic, clear, slightly playful but professional.

---

## 10. API & Developer Portal

**Purpose:** Provide a frictionless developer experience for integrating Eco QR, webhooks, and data exports.

### Must-haves
- API reference (OpenAPI spec) with code samples (curl, JS, Python).  
- SDKs & quickstart snippets.  
- Interactive Try-it console with sandbox keys.  
- Webhook setup guide and sample consumers.  
- Rate-limiting and SLA info.  
- Authentication (OAuth2 or API keys) and best security practices.  
- Changelog & versioning policy.

---

## 11. Visual language & brand / UX tone

### Design principles
- Clean, modern, friendly, and trust-inspiring.  
- Use a green + teal primary palette for sustainability + trust; gold accent for rewards and premium.  
- Use geometric illustrations mixed with real photography for social proof.  
- Rounded components, 8px baseline grid, and ample whitespace.

### Typography
- Heading: modern sans (variable font for weight control).  
- Body: highly legible sans with 16px base.  

### Illustrations & imagery
- Real photos of collectors and community, processed for consistent color grade.  
- Custom icon set for Eco QR, Route, Agent, Settlement, Rewards.  
- Lottie animations for micro-interactions (QR scan success, pickup confirmed, coins earned).

---

## 12. Motion & animation spec (detailed)

**Global rules**
- Respect `prefers-reduced-motion`.  
- Use 60fps where possible for small Lottie loops; keep heavy animation optional.  

**Hero:** device mockup with 3-stage micro-story (user→agent→payment). Parallax depth layers: background (slow), midground (medium), foreground (fast).  

**Feature cards:** hover elevation + 150ms translateY and shadow.  

**Number counters:** eased count-up on scroll into view.  

**Demo flow:** autoplay muted 20–30s demo with pause; allow users to jump to any step.

---

## 13. Copy, messaging & storytelling arc

### Overall narrative arc
1. Hook the visitor with impact & benefit.  
2. Empathize with the problem (waste & inefficient collection).  
3. Present EcoMint as the simple, verified solution.  
4. Show social proof & numbers.  
5. Provide clear next steps for each role.

### Voice & tone
- Clear, confident, friendly.  
- Use action language in CTAs.  
- Avoid jargon for the User-facing copy; use concise technical clarity for Operators and Developers.

### Examples (microcopy)
- Primary CTA: "Download the App"  
- Operator CTA: "Start Free Trial"  
- Agent CTA: "Get the Agent App"  
- Success toast: "Pickup confirmed — ₦500 credited to your account."  
- Error toast: "Payment failed — try again or contact support."

---

## 14. Content inventory & sample templates

**Hero block**
- Headline, subheadline, 2 CTAs, device mockup.

**How it works**
- 3 steps with icons and 1-line explanations, plus a "See full process" link to Learning.

**Operator case study**
- Title, 3 metrics (before/after), testimonial quote, operator logo.

**FAQ**
- Collapsible items by role (User / Agent / Operator).

**Article template for Learning**
- Title | summary | read time | body | images | code blocks | related links | feedback

---

## 15. SEO, analytics & growth

### SEO
- Clear meta title & description for each page.  
- Structured data (Organization, SoftwareApplication, FAQPage) using JSON-LD.  
- Localized SEO: pages for Lagos, Abuja, Port Harcourt coverage, with canonical tags.  

### Analytics & experiments
- Events to track: hero CTA clicks, audience chooser clicks, download button clicks (iOS/Android/web), operator signups, agent registrations, search queries in Learning.  
- Use A/B testing for hero headline, hero visual, and CTA text.  
- Funnel tracking: visit → product demo → CTA → signup / download.  

---

## 16. Performance & hosting recommendations

**MVP**
- Static landing served via CDN (Netlify/Vercel/CloudFront).  
- Inline critical CSS, defer non-critical JS.  
- Lottie hosted and cached aggressively.  

**Security**
- Serve over HTTPS with HSTS.  
- CSP header to mitigate XSS.  

**Scalability**
- Use a headless CMS (Sanity/Contentful/Strapi) for Learning content; cache aggressively at CDN edge.  
- Use serverless functions for demo provisioning and operator sandbox creation.

---

## 17. Accessibility & localization

- WCAG AA minimum.  
- Keyboard navigable components.  
- ARIA attributes for toggles and modals.  
- Localized copy and phone formats.  

---

## 18. Legal, privacy & trust

- Visible links to Privacy Policy and Terms.  
- Payment provider disclosures.  
- Data residency and retention notes for enterprise operators.  

---

## 19. Component & development checklist (MVP → v1 → v2)

### MVP (must-have before public launch)
- Hero + audience chooser + primary CTAs.  
- For Users section + download deep links (Android/iOS/PWA).  
- For Operators page with signup flow (basic).  
- Learning hub skeleton with 20 core articles (Getting started, How it works, Operator onboarding, Agent onboarding).  
- Basic API docs page with OpenAPI link.  
- Analytics & basic SEO.  

### v1 (0–3 months)
- Interactive product demo + operator sandbox.  
- Localized Learning content (3 languages).  
- Case studies & testimonials.  
- Pricing page & enterprise contact form.  
- Enhanced accessibility testing and improvements.  

### v2 (3–9 months)
- Guided learning paths & certificates.  
- Personalized operator dashboards accessible from landing for logged-in operators.  
- Community forum and moderated Q&A.  
- Advanced A/B testing and personalization.

---

## 20. QA checklist & launch playbook

**Pre-launch**
- Cross-device testing (iOS/Android) and major browsers.  
- Accessibility audit.  
- SEO checklist verified.  
- Performance budget met.  
- Analytics event mapping implemented.

**Launch day**
- Monitor errors / logs, watch conversion metrics, have rollback plan.  
- Social & PR: press kit + impact story ready to publish.

---

## 21. Appendix: sample wireframe & component list

(Include links to design files in Notion/Figma — to be added)  

**Core components**
- Header (sticky)  
- Audience chooser cards  
- Hero device carousel  
- Feature cards  
- Interactive demo player  
- Coverage map (heatmap)  
- Learning article layout  
- Footer with legal & locale switcher

---

## 22. Final notes & recommended next steps

1. **Define MVP content for Learning:** pick the top 20 articles that must exist at launch (I can propose these next).  
2. **Create an operator sandbox** for frictionless demos — highest impact for conversion.  
3. **Implement analytics & event taxonomy** before launch so we capture the right signals from day one.  
4. **Prepare visual assets** (device mockups, Lottie animations, photography) and optimize them for web.


---

*End of specification — EcoMint Landing & Learning Page (WikiRostar)*

