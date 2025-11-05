<script>
  import Hero from '$lib/components/Hero.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';

  let operatorCode = '';
  let downloadLink = '';

  function handleDownload() {
    if (operatorCode) {
      downloadLink = `Generated download link for operator: ${operatorCode}`;
    }
  }
</script>

<svelte:head>
  <title>EcoMint for Agents | Collect smarter, earn more</title>
  <meta name="description" content="Download the EcoMint Agent app for faster routes, verified payments, and better earnings. Join thousands of agents nationwide." />
</svelte:head>

<Hero
  title="Collect smarter — faster routes, verified payments, better earnings"
  subtitle="Join the EcoMint network as an agent. Get optimized routes, instant payment verification with Eco QR, and earn more with performance bonuses."
  primaryCTA="Download Agent App"
  secondaryCTA="Learn More"
  primaryLink="#download"
  secondaryLink="#how-it-works"
/>

<section id="download" class="py-16 bg-white">
  <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Get the Agent App</h2>
      <p class="text-lg text-[var(--color-gray)]">Enter your operator code to download the correct version</p>
    </div>

    <div class="bg-[var(--color-fog)] p-8 rounded-xl">
      <form on:submit|preventDefault={handleDownload} class="space-y-4">
        <div>
          <label for="operator-code" class="block text-sm font-medium text-[var(--color-night)] mb-2">
            Operator Code
          </label>
          <input
            type="text"
            id="operator-code"
            bind:value={operatorCode}
            placeholder="Enter your operator's code"
            class="w-full px-4 py-3 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none"
            required
          />
          <p class="mt-2 text-sm text-[var(--color-gray)]">
            Don't have an operator code? Contact your operator or <a href="/learning" class="text-[var(--color-emerald)] hover:underline">learn more</a>
          </p>
        </div>

        <button
          type="submit"
          class="w-full px-6 py-3 bg-[var(--color-emerald)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
        >
          Get Download Link
        </button>

        {#if downloadLink}
          <div class="bg-white p-4 rounded-lg border border-[var(--color-emerald)]">
            <p class="text-sm font-medium text-[var(--color-night)] mb-2">Download Ready!</p>
            <p class="text-sm text-[var(--color-gray)] mb-3">{downloadLink}</p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="#" class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-200">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                iOS App
              </a>
              <a href="#" class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-200">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.55.68.55 1.19s-.21.92-.55 1.19l-2.29 1.45-2.62-2.62 2.62-2.62 2.29 1.45zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/></svg>
                Android App
              </a>
            </div>
          </div>
        {/if}
      </form>
    </div>
  </div>
</section>

<section id="how-it-works" class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">How It Works for Agents</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Verify ID</h3>
        <p class="text-[var(--color-gray)]">Submit your identification for quick verification by your operator</p>
      </div>

      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Accept Assignment</h3>
        <p class="text-[var(--color-gray)]">Receive pickup requests in your coverage area with optimized routing</p>
      </div>

      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Scan QR</h3>
        <p class="text-[var(--color-gray)]">Use the app to scan Eco QR codes for instant payment verification</p>
      </div>

      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">4</div>
        <h3 class="text-xl font-semibold text-[var(--color-night)]">Confirm Pickup</h3>
        <p class="text-[var(--color-gray)]">Complete the pickup and receive your payment with commission</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Why Agents Choose EcoMint</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Better Earnings"
        description="Verified payments mean no more disputes. Earn bonuses for consistent performance and high ratings."
      />
      <FeatureCard
        title="Smart Routes"
        description="AI-optimized routing saves you time and fuel. Complete more pickups per day."
        icon="route"
      />
      <FeatureCard
        title="Quick QR Scanning"
        description="Eco QR technology makes payment verification instant and hassle-free."
        icon="payment"
      />
      <FeatureCard
        title="Transparent Payouts"
        description="Know your earnings in real-time. Get paid on schedule with full transaction history."
      />
      <FeatureCard
        title="Training & Support"
        description="Access field guides, video tutorials, and support when you need it."
      />
      <FeatureCard
        title="Performance Tracking"
        description="See your stats, ratings, and leaderboard position. Unlock achievement badges."
        icon="data"
      />
    </div>
  </div>
</section>

<section class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Earnings & Incentives</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-3">Base Commission</h3>
        <p class="text-3xl font-bold text-[var(--color-emerald)] mb-2">15-25%</p>
        <p class="text-[var(--color-gray)]">of each pickup value, depending on waste type and location</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-3">Performance Bonuses</h3>
        <p class="text-3xl font-bold text-[var(--color-emerald)] mb-2">Up to ₦10k</p>
        <p class="text-[var(--color-gray)]">monthly bonuses for top performers and consistent ratings</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-3">Payout Frequency</h3>
        <p class="text-3xl font-bold text-[var(--color-emerald)] mb-2">Daily</p>
        <p class="text-[var(--color-gray)]">Automatic settlements every 24 hours to your bank account</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-3">Referral Rewards</h3>
        <p class="text-3xl font-bold text-[var(--color-emerald)] mb-2">₦5,000</p>
        <p class="text-[var(--color-gray)]">for every new agent you refer who completes 10 pickups</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Training & Safety</h2>
      <p class="text-lg text-[var(--color-gray)]">We're committed to your success and safety</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[var(--color-fog)] p-6 rounded-xl">
        <div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">Field Training</h3>
        <p class="text-[var(--color-gray)]">Comprehensive guides and videos on best practices, customer service, and safety protocols</p>
        <a href="/learning" class="inline-flex items-center text-[var(--color-emerald)] text-sm font-medium mt-3">
          Access training materials
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="bg-[var(--color-fog)] p-6 rounded-xl">
        <div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">Safety Equipment</h3>
        <p class="text-[var(--color-gray)]">Guidelines for PPE, safe handling of waste materials, and emergency procedures</p>
        <a href="/learning" class="inline-flex items-center text-[var(--color-emerald)] text-sm font-medium mt-3">
          View safety guidelines
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="bg-[var(--color-fog)] p-6 rounded-xl">
        <div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">24/7 Support</h3>
        <p class="text-[var(--color-gray)]">Get help when you need it through in-app chat, phone, or our support portal</p>
        <a href="#" class="inline-flex items-center text-[var(--color-emerald)] text-sm font-medium mt-3">
          Contact support
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Frequently Asked Questions</h2>
    </div>

    <div class="max-w-3xl mx-auto space-y-4">
      <details class="bg-white p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">Do I need to own a vehicle?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Not necessarily. Many agents use bicycles, motorcycles, or even work on foot for smaller coverage areas. Check with your operator for specific requirements.</p>
      </details>

      <details class="bg-white p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">How do I get paid?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Payments are settled daily to your registered bank account. You'll earn a commission on every pickup plus potential bonuses for performance.</p>
      </details>

      <details class="bg-white p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">What if I don't have an operator code?</summary>
        <p class="mt-4 text-[var(--color-gray)]">You need to be registered with an operator to work as an agent. Visit our operators page to find operators in your area, or contact us for help connecting with one.</p>
      </details>

      <details class="bg-white p-6 rounded-lg">
        <summary class="font-semibold text-[var(--color-night)] cursor-pointer">Can I work part-time?</summary>
        <p class="mt-4 text-[var(--color-gray)]">Yes! Many agents work flexible schedules. You can accept or decline pickup requests based on your availability.</p>
      </details>
    </div>
  </div>
</section>

<CTABanner
  title="Ready to join as an agent?"
  description="Download the app and start earning with verified payments and smart routes."
  primaryText="Get Agent App"
  secondaryText="View Training"
  primaryLink="#download"
  secondaryLink="/learning"
/>
