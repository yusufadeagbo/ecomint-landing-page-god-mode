<script>
  import Hero from '$lib/components/Hero.svelte';
  import CoverageChecker from '$lib/components/CoverageChecker.svelte';
  import SubscriptionTiers from '$lib/components/SubscriptionTiers.svelte';
  import VerificationBadge from '$lib/components/VerificationBadge.svelte';
  import AudienceChooser from '$lib/components/AudienceChooser.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import DemoPlayer from '$lib/components/DemoPlayer.svelte';
  import CoverageMapPlaceholder from '$lib/components/CoverageMapPlaceholder.svelte';
  import LearningArticle from '$lib/components/LearningArticle.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
</script>

<svelte:head>
  <title>EcoMint | Verified Operators. Flexible Waste Collection Subscriptions.</title>
  <meta name="description" content="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators in Lagos, Abuja, and Port Harcourt. Check your area coverage instantly." />
  <meta name="keywords" content="waste collection subscription, verified operators, weekly pickup, waste management, nigeria, lagos, abuja, port harcourt, recurring waste service" />
  <meta property="og:title" content="EcoMint | Verified Operators. Flexible Subscriptions." />
  <meta property="og:description" content="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators. Transparent pricing, reliable service." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ecomint.example" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="EcoMint | Turn waste into value" />
  <meta name="twitter:description" content="Simple pickups, precise payments. Location-aware waste collection for everyone." />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EcoMint",
      "description": "Turn waste into value with location-aware pickups, secure Eco QR payments, and real-time tracking",
      "url": "https://ecomint.example",
      "logo": "https://ecomint.example/favicon.svg",
      "sameAs": [
        "https://twitter.com/ecomint",
        "https://facebook.com/ecomint",
        "https://linkedin.com/company/ecomint"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": ["NG"],
        "availableLanguage": ["en", "yo", "ha", "ig"]
      }
    }
    <\/script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EcoMint",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "iOS, Android, Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "NGN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    }
    <\/script>
  `}
</svelte:head>

<Hero
  title="Verified Operators. Flexible Subscriptions."
  subtitle="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators in your area. Transparent pricing, reliable service."
/>

<!-- Coverage Checker Section -->
<section id="coverage" class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <CoverageChecker />
  </div>
</section>

<!-- Subscription Tiers Section -->
<section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SubscriptionTiers />
  </div>
</section>

<AudienceChooser />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">The Problem & Opportunity</h2>
      <p class="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
        Waste collection in cities is inefficient, leading to low revenue for collectors and payment leakage for operators.
        EcoMint brings transparency, efficiency, and verified payments to every pickup.
      </p>
    </div>
  </div>
</section>

<section class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">How EcoMint Solves It</h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto mb-12">
        Three powerful pillars working together to transform waste collection
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center space-y-4">
        <div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Secure Payments</h3>
        <p class="text-[var(--color-gray)]">Eco QR ensures every transaction is verified, reducing payment leakage and building trust</p>
        <a href="/learning" class="inline-flex items-center text-[var(--color-emerald)] font-medium">
          Learn more
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="text-center space-y-4">
        <div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Smart Logistics</h3>
        <p class="text-[var(--color-gray)]">Intelligent routing and agent management optimizes coverage and reduces response times</p>
        <a href="/operators" class="inline-flex items-center text-[var(--color-emerald)] font-medium">
          For Operators
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="text-center space-y-4">
        <div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Data & Rewards</h3>
        <p class="text-[var(--color-gray)]">Track environmental impact and earn rewards while building sustainable communities</p>
        <a href="/users" class="inline-flex items-center text-[var(--color-emerald)] font-medium">
          For Users
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<DemoPlayer />

<section class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Built for Everyone</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[var(--color-night)]">For Users</h3>
        <FeatureCard
          title="60-Second Booking"
          description="Schedule a pickup in less than a minute with our simple interface"
        />
        <FeatureCard
          title="Transparent Pricing"
          description="Know exactly what you'll pay before confirming your pickup"
        />
        <FeatureCard
          title="Earn Rewards"
          description="Get points for every pickup that can be redeemed for discounts"
        />
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[var(--color-night)]">For Operators</h3>
        <FeatureCard
          title="Revenue Management"
          description="Real-time settlement tracking and transparent revenue reporting"
          icon="payment"
        />
        <FeatureCard
          title="Agent Assignment"
          description="Efficiently manage and assign agents across your coverage area"
          icon="route"
        />
        <FeatureCard
          title="Coverage Control"
          description="Define and expand your service zones with precision mapping"
        />
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[var(--color-night)]">For Agents</h3>
        <FeatureCard
          title="Better Earnings"
          description="Verified payments and bonuses for consistent performance"
        />
        <FeatureCard
          title="Smart Routes"
          description="Optimized pickup routes save time and increase efficiency"
        />
        <FeatureCard
          title="Easy QR Scanning"
          description="Quick payment verification with secure Eco QR technology"
        />
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Trusted by Communities</h2>
      <p class="text-lg text-[var(--color-gray)]">Making an impact across Nigeria</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="text-center">
        <p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">10,000+</p>
        <p class="text-lg text-[var(--color-gray)]">Pickups Completed</p>
      </div>
      <div class="text-center">
        <p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">500+</p>
        <p class="text-lg text-[var(--color-gray)]">Active Agents</p>
      </div>
      <div class="text-center">
        <p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">2,500</p>
        <p class="text-lg text-[var(--color-gray)]">Tons Recycled</p>
      </div>
    </div>

    <CoverageMapPlaceholder />
  </div>
</section>

<section class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Learn How It Works</h2>
      <p class="text-lg text-[var(--color-gray)]">Explore our guides and documentation</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <LearningArticle
        title="Getting Started with EcoMint"
        summary="A comprehensive guide to understanding how EcoMint works and getting set up."
        category="Getting Started"
        readTime="8 min"
        href="/learning"
      />
      <LearningArticle
        title="How to Request Your First Pickup"
        summary="Step-by-step instructions for users to schedule and complete their first waste pickup."
        category="For Users"
        readTime="5 min"
        href="/learning"
      />
      <LearningArticle
        title="Understanding Eco QR Payments"
        summary="Learn how our secure payment system works and why it's better than traditional methods."
        category="Concept"
        readTime="6 min"
        href="/learning"
      />
    </div>

    <div class="text-center">
      <a href="/learning" class="inline-flex items-center px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
        Visit Learning Hub
        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Frequently Asked Questions</h2>
    </div>

    <div class="max-w-3xl mx-auto space-y-4">
      <details class="bg-[var(--color-fog)] p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">How does EcoMint pricing work?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Pricing is transparent and varies by location and waste type. You'll see the exact cost before confirming your pickup. No hidden fees.</p>
      </details>

      <details class="bg-[var(--color-fog)] p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">Is my area covered?</summary>
        <p class="mt-4 text-[var(--color-gray)]">We currently serve Lagos, Abuja, and Port Harcourt. Check our coverage map above or download the app to see if we're in your neighborhood.</p>
      </details>

      <details class="bg-[var(--color-fog)] p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">How do I become an operator?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Visit our Operators page to start your free trial. You'll need to verify your business and set up your coverage area before activating agents.</p>
      </details>

      <details class="bg-[var(--color-fog)] p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">What is Eco QR?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Eco QR is our secure payment verification system. It ensures every pickup is properly recorded and paid for, protecting both collectors and customers.</p>
      </details>
    </div>
  </div>
</section>

<CTABanner />
