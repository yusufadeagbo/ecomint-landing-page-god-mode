<script>
  import Hero from '$lib/components/Hero.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';

  let sandboxLoading = false;
  let sandboxResult = '';

  async function createSandbox() {
    sandboxLoading = true;
    try {
      const response = await fetch('/api/sandbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'operator' })
      });
      const data = await response.json();
      sandboxResult = `Sandbox created! ID: ${data.sandboxId}`;
    } catch (error) {
      sandboxResult = 'Error creating sandbox';
    } finally {
      sandboxLoading = false;
    }
  }
</script>

<svelte:head>
  <title>EcoMint for Operators | Run waste collection like a business</title>
  <meta name="description" content="Manage routes, assign agents, and grow revenue with EcoMint's operator platform. Start your free trial today." />
</svelte:head>

<Hero
  title="Run waste collection like a business"
  subtitle="Route, pay, and scale with precision. EcoMint gives you the tools to manage agents, track revenue, and expand your coverage area."
  primaryCTA="Start Free Trial"
  secondaryCTA="Watch Demo"
  primaryLink="#signup"
  secondaryLink="#demo"
/>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Operator Benefits</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Revenue Management"
        description="Real-time settlement tracking, transparent reporting, and automated reconciliation"
        icon="payment"
      />
      <FeatureCard
        title="Agent Assignment"
        description="Efficiently assign and manage agents across your service area with smart routing"
        icon="route"
      />
      <FeatureCard
        title="Coverage Control"
        description="Define service zones, set pricing, and expand your reach strategically"
      />
      <FeatureCard
        title="Dispute Resolution"
        description="Built-in tools to handle customer disputes and payment issues quickly"
      />
      <FeatureCard
        title="Settlements"
        description="Automated daily settlements with full transaction history and audit trails"
      />
      <FeatureCard
        title="API & Integrations"
        description="Connect to accounting systems, payment providers, and webhooks"
        icon="data"
      />
    </div>
  </div>
</section>

<section id="demo" class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-6">Operator Dashboard</h2>
        <p class="text-lg text-[var(--color-gray)] mb-6">
          Get a complete view of your operations with real-time metrics, agent performance tracking, and revenue analytics.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg class="w-6 h-6 text-[var(--color-emerald)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-[var(--color-gray)]">Coverage heatmap showing demand by area</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-[var(--color-emerald)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-[var(--color-gray)]">Agent performance metrics and leaderboards</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-[var(--color-emerald)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-[var(--color-gray)]">Transaction reconciliation and exports</span>
          </li>
        </ul>
        <button
          type="button"
          on:click={createSandbox}
          disabled={sandboxLoading}
          class="px-6 py-3 bg-[var(--color-emerald)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50"
        >
          {sandboxLoading ? 'Creating...' : 'Try Demo Sandbox'}
        </button>
        {#if sandboxResult}
          <p class="mt-4 text-sm text-[var(--color-emerald)]">{sandboxResult}</p>
        {/if}
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg">
        <div class="aspect-video bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] rounded-lg flex items-center justify-center">
          <p class="text-white text-center px-4">Interactive dashboard demo preview</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pricing" class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Transparent Pricing</h2>
      <p class="text-lg text-[var(--color-gray)]">Choose the plan that fits your operation</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white border-2 border-[var(--color-dust)] rounded-xl p-8">
        <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Starter</h3>
        <p class="text-[var(--color-gray)] mb-6">Perfect for new operators</p>
        <p class="text-4xl font-bold text-[var(--color-night)] mb-6">Free</p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Up to 5 agents</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Basic coverage mapping</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Standard reporting</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Email support</span>
          </li>
        </ul>
        <a href="#signup" class="block w-full px-6 py-3 bg-[var(--color-fog)] text-[var(--color-night)] text-center rounded-lg font-semibold hover:bg-[var(--color-dust)] transition-all duration-200">
          Get Started
        </a>
      </div>

      <div class="bg-[var(--color-evergreen)] text-white rounded-xl p-8 transform scale-105 shadow-xl">
        <div class="inline-block px-3 py-1 bg-[var(--color-emerald)] rounded-full text-xs font-semibold mb-4">Most Popular</div>
        <h3 class="text-xl font-semibold mb-2">Professional</h3>
        <p class="text-gray-200 mb-6">For growing operations</p>
        <p class="text-4xl font-bold mb-1">₦50,000</p>
        <p class="text-sm text-gray-200 mb-6">per month</p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Up to 25 agents</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Advanced heatmap & analytics</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">API access & webhooks</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Priority support</span>
          </li>
        </ul>
        <a href="#signup" class="block w-full px-6 py-3 bg-white text-[var(--color-evergreen)] text-center rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
          Start Free Trial
        </a>
      </div>

      <div class="bg-white border-2 border-[var(--color-dust)] rounded-xl p-8">
        <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Enterprise</h3>
        <p class="text-[var(--color-gray)] mb-6">For large-scale operations</p>
        <p class="text-4xl font-bold text-[var(--color-night)] mb-6">Custom</p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Unlimited agents</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Custom integrations</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">Dedicated account manager</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[var(--color-emerald)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">24/7 phone support</span>
          </li>
        </ul>
        <a href="#signup" class="block w-full px-6 py-3 bg-[var(--color-fog)] text-[var(--color-night)] text-center rounded-lg font-semibold hover:bg-[var(--color-dust)] transition-all duration-200">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>

<section id="onboarding" class="py-16 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Simple Onboarding Process</h2>
      <p class="text-lg text-[var(--color-gray)]">Get started in 4 easy steps</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
        <h3 class="font-semibold text-[var(--color-night)] mb-2">Sign Up</h3>
        <p class="text-sm text-[var(--color-gray)]">Create your operator account in minutes</p>
        <p class="text-xs text-[var(--color-emerald)] mt-1">~5 minutes</p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
        <h3 class="font-semibold text-[var(--color-night)] mb-2">Verify Business</h3>
        <p class="text-sm text-[var(--color-gray)]">Submit business documents for KYC verification</p>
        <p class="text-xs text-[var(--color-emerald)] mt-1">1-2 business days</p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
        <h3 class="font-semibold text-[var(--color-night)] mb-2">Set Coverage</h3>
        <p class="text-sm text-[var(--color-gray)]">Define your service areas and pricing</p>
        <p class="text-xs text-[var(--color-emerald)] mt-1">~30 minutes</p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
        <h3 class="font-semibold text-[var(--color-night)] mb-2">Activate Agents</h3>
        <p class="text-sm text-[var(--color-gray)]">Onboard your agents and start accepting pickups</p>
        <p class="text-xs text-[var(--color-emerald)] mt-1">Same day</p>
      </div>
    </div>
  </div>
</section>

<section id="signup" class="py-16 bg-white">
  <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Ready to Get Started?</h2>
      <p class="text-lg text-[var(--color-gray)]">Start your free trial today. No credit card required.</p>
    </div>

    <div class="bg-[var(--color-fog)] p-8 rounded-xl">
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-sm font-medium text-[var(--color-night)] mb-1">Full Name</label>
            <input type="text" id="name" class="w-full px-4 py-2 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-[var(--color-night)] mb-1">Email Address</label>
            <input type="email" id="email" class="w-full px-4 py-2 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label for="business" class="block text-sm font-medium text-[var(--color-night)] mb-1">Business Name</label>
          <input type="text" id="business" class="w-full px-4 py-2 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none" />
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-[var(--color-night)] mb-1">Phone Number</label>
          <input type="tel" id="phone" class="w-full px-4 py-2 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none" />
        </div>

        <button type="submit" class="w-full px-6 py-3 bg-[var(--color-emerald)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
          Start Free Trial
        </button>

        <p class="text-xs text-[var(--color-gray)] text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>
    </div>
  </div>
</section>

<CTABanner
  title="Questions about becoming an operator?"
  description="Our team is here to help you get started. Contact us for a personalized demo."
  primaryText="Contact Sales"
  secondaryText="View Documentation"
  primaryLink="#signup"
  secondaryLink="/learning"
/>
