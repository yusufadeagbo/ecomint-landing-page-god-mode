<script>
  import CoverageChecker from '$lib/components/CoverageChecker.svelte';
  import SubscriptionTiers from '$lib/components/SubscriptionTiers.svelte';
  import VerificationBadge from '$lib/components/VerificationBadge.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
</script>

<svelte:head>
  <title>EcoMint for Users | Subscribe to Verified Waste Collection</title>
  <meta name="description" content="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators in your area. Simple, reliable, transparent pricing." />
</svelte:head>

<!-- Hero Section -->
<section class="relative text-white overflow-hidden" style="background: var(--bg-hero);">
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-users" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-users)"/>
    </svg>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-30 mb-6">
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Verified Operators in Lagos, Abuja & Port Harcourt
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Never Miss Waste Collection Again
      </h1>

      <p class="text-xl text-gray-200 mb-8 leading-relaxed">
        Subscribe to weekly, bi-weekly, or tri-weekly pickups from verified operators in your area. Set it once, forget about it — we handle the rest.
      </p>

      <!-- Key Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold">Recurring Service</span>
          </div>
          <div class="text-sm text-gray-200">Automatic pickups on your schedule</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold">Fixed Pricing</span>
          </div>
          <div class="text-sm text-gray-200">From ₦1,500/month</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold">Cancel Anytime</span>
          </div>
          <div class="text-sm text-gray-200">7-day notice period</div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="#coverage"
          class="px-8 py-4 bg-white text-[var(--color-evergreen)] rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-center text-lg"
        >
          Check Your Area
        </a>
        <a
          href="#how-it-works"
          class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center"
        >
          See How It Works
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Coverage Checker -->
<section id="coverage" class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <CoverageChecker compact={false} />
  </div>
</section>

<!-- Subscription Tiers -->
<section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SubscriptionTiers showTitle={true} />
  </div>
</section>

<!-- How It Works -->
<section id="how-it-works" class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        How Subscriptions Work
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        From checking coverage to your first pickup — get started in minutes
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
      <!-- Step 1 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-200">
          <span class="text-2xl font-bold text-blue-600">1</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Check Coverage</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Enter your location to see verified operators serving your area
        </p>
      </div>

      <!-- Step 2 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-200">
          <span class="text-2xl font-bold text-emerald-600">2</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Choose Plan</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Select weekly, bi-weekly, or tri-weekly pickups based on your needs
        </p>
      </div>

      <!-- Step 3 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-purple-200">
          <span class="text-2xl font-bold text-purple-600">3</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Subscribe</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Set up automatic payments and receive SMS reminders before each pickup
        </p>
      </div>

      <!-- Step 4 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-amber-200">
          <span class="text-2xl font-bold text-amber-600">4</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Relax</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Verified agents collect on schedule — no more remembering waste days
        </p>
      </div>
    </div>

    <!-- Benefits Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-6">
        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Recurring Pickups</h3>
        <p class="text-[var(--color-gray)]">
          Never forget waste collection day again. We handle it automatically on your chosen schedule.
        </p>
      </div>

      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-emerald-200 p-6">
        <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Verified Operators</h3>
        <p class="text-[var(--color-gray)]">
          All operators are background-checked, licensed, and committed to reliable service.
        </p>
      </div>

      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-6">
        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Secure Payments</h3>
        <p class="text-[var(--color-gray)]">
          Automatic monthly billing with mobile money or card. Cancel anytime with 7 days notice.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Why Subscribe -->
<section class="py-20 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        Why Subscribe vs One-Time Pickups?
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Subscriptions provide consistency, convenience, and cost savings
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FeatureCard
        title="Lower Cost Per Pickup"
        description="Subscription pricing is 30-40% cheaper than one-time pickups. Lock in your rate and save money."
      />
      <FeatureCard
        title="Consistent Service"
        description="Same verified operator, same reliable schedule. Build a relationship with your collector."
      />
      <FeatureCard
        title="Priority Scheduling"
        description="Subscribers get priority over one-time customers. Never worry about availability."
      />
      <FeatureCard
        title="Flexible Plans"
        description="Change frequency or cancel anytime with 7 days notice. No long-term commitments."
      />
      <FeatureCard
        title="Automatic Reminders"
        description="Get SMS notifications 24 hours before each pickup. Never miss collection day."
      />
      <FeatureCard
        title="Environmental Impact Tracking"
        description="See how much waste you've diverted from landfills and your carbon footprint reduction."
      />
    </div>
  </div>
</section>

<!-- Mobile App CTA -->
<section id="download" class="py-20 bg-white">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
      Download the EcoMint App
    </h2>
    <p class="text-lg text-[var(--color-gray)] mb-8">
      Manage your subscription, track pickups, and view your environmental impact
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a href="#" class="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-200 text-lg">
        <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        App Store
      </a>

      <a href="#" class="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-200 text-lg">
        <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.55.68.55 1.19s-.21.92-.55 1.19l-2.29 1.45-2.62-2.62 2.62-2.62 2.29 1.45zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
        </svg>
        Google Play
      </a>
    </div>

    <!-- App Features -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 p-6">
        <svg class="w-10 h-10 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h4 class="font-bold text-[var(--color-night)] mb-1">Manage Subscription</h4>
        <p class="text-sm text-[var(--color-gray)]">Change frequency, pause, or cancel</p>
      </div>

      <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200 p-6">
        <svg class="w-10 h-10 text-emerald-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <h4 class="font-bold text-[var(--color-night)] mb-1">Pickup Reminders</h4>
        <p class="text-sm text-[var(--color-gray)]">SMS 24hrs before collection</p>
      </div>

      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 p-6">
        <svg class="w-10 h-10 text-purple-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h4 class="font-bold text-[var(--color-night)] mb-1">Impact Dashboard</h4>
        <p class="text-sm text-[var(--color-gray)]">Track waste diverted</p>
      </div>

      <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 p-6">
        <svg class="w-10 h-10 text-amber-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <h4 class="font-bold text-[var(--color-night)] mb-1">Payment History</h4>
        <p class="text-sm text-[var(--color-gray)]">View all transactions</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="py-20 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">What Subscribers Say</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl border-2 border-gray-200">
        <div class="flex text-[var(--color-gold)] mb-4">
          {#each Array(5) as _}
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
        </div>
        <p class="text-[var(--color-gray)] mb-4">"Best decision ever! I haven't thought about waste collection in 6 months. The bi-weekly plan is perfect for my household."</p>
        <p class="font-semibold text-[var(--color-night)]">Amaka O.</p>
        <p class="text-sm text-[var(--color-gray)]">Ikeja, Lagos</p>
      </div>

      <div class="bg-white p-6 rounded-xl border-2 border-gray-200">
        <div class="flex text-[var(--color-gold)] mb-4">
          {#each Array(5) as _}
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
        </div>
        <p class="text-[var(--color-gray)] mb-4">"So much cheaper than calling collectors every week. The SMS reminders are super helpful and the agents are always on time."</p>
        <p class="font-semibold text-[var(--color-night)]">Chidi M.</p>
        <p class="text-sm text-[var(--color-gray)]">Wuse, Abuja</p>
      </div>

      <div class="bg-white p-6 rounded-xl border-2 border-gray-200">
        <div class="flex text-[var(--color-gold)] mb-4">
          {#each Array(5) as _}
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
        </div>
        <p class="text-[var(--color-gray)] mb-4">"Love that they're all verified operators. I feel safe knowing the company checks everyone. Weekly pickups keep my compound clean."</p>
        <p class="font-semibold text-[var(--color-night)]">Blessing A.</p>
        <p class="text-sm text-[var(--color-gray)]">GRA, Port Harcourt</p>
      </div>
    </div>
  </div>
</section>

<CTABanner />
