<script>
  import SubscriptionTiers from '$lib/components/SubscriptionTiers.svelte';
  import VerificationBadge from '$lib/components/VerificationBadge.svelte';
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
  <title>EcoMint for Operators | Become a Verified Waste Collection Operator</title>
  <meta name="description" content="Join EcoMint as a verified operator. Set your own subscription pricing, manage agents, and grow your waste collection business with transparent recurring revenue." />
</svelte:head>

<!-- Hero Section -->
<section class="relative text-white overflow-hidden" style="background: var(--bg-hero);">
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-operators" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-operators)"/>
    </svg>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-3xl">
      <div class="flex items-center gap-3 mb-6">
        <VerificationBadge size="large" variant="prominent" />
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Become a Verified Operator
      </h1>

      <p class="text-xl text-gray-200 mb-8 leading-relaxed">
        Join EcoMint's platform of verified waste collection operators. Set your own subscription pricing, manage agents efficiently, and build predictable recurring revenue.
      </p>

      <!-- Key Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">₦500k+</div>
          <div class="text-sm text-gray-200">Avg. monthly revenue</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">95%</div>
          <div class="text-sm text-gray-200">Payment collection rate</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">3-5 days</div>
          <div class="text-sm text-gray-200">Verification process</div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="#signup"
          class="px-8 py-4 bg-white text-[var(--color-evergreen)] rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-center text-lg"
        >
          Start Verification Process
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

<!-- Verification Process -->
<section id="how-it-works" class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        The Verification Process
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Become a trusted, verified operator in 4 simple steps
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Step 1 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-200">
          <span class="text-2xl font-bold text-blue-600">1</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Submit Application</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Provide business details, licenses, and coverage areas you want to serve
        </p>
      </div>

      <!-- Step 2 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-200">
          <span class="text-2xl font-bold text-emerald-600">2</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Background Check</h3>
        <p class="text-sm text-[var(--color-gray)]">
          We verify your business registration, licenses, and conduct background checks
        </p>
      </div>

      <!-- Step 3 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-purple-200">
          <span class="text-2xl font-bold text-purple-600">3</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Set Your Pricing</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Configure subscription tiers and pricing for your coverage areas
        </p>
      </div>

      <!-- Step 4 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-amber-200">
          <span class="text-2xl font-bold text-amber-600">4</span>
        </div>
        <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Go Live</h3>
        <p class="text-sm text-[var(--color-gray)]">
          Onboard agents, activate coverage, and start receiving subscriptions
        </p>
      </div>
    </div>

    <!-- Verification Requirements -->
    <div class="mt-16 bg-blue-50 rounded-2xl border-2 border-blue-200 p-8">
      <h3 class="text-2xl font-bold text-[var(--color-night)] mb-6 text-center">
        Verification Requirements
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-[var(--color-night)] mb-3">Business Documents</h4>
          <ul class="space-y-2 text-sm text-[var(--color-gray)]">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              CAC registration certificate or business name registration
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Valid waste management permits or licenses
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Tax Identification Number (TIN)
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Proof of business address
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-[var(--color-night)] mb-3">Operational Requirements</h4>
          <ul class="space-y-2 text-sm text-[var(--color-gray)]">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Minimum 2 collection vehicles or partnerships
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Defined service coverage area (minimum 5 LGAs)
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Business banking account for settlements
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Commitment to EcoMint service standards
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Set Your Pricing -->
<section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        You Control Pricing
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Set your own subscription prices for weekly, bi-weekly, and tri-weekly pickups based on your operational costs and market rates
      </p>
    </div>

    <div class="bg-white rounded-2xl border-2 border-emerald-200 p-8 mb-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-emerald-600 mb-2">₦1,500 - ₦5,000</div>
          <div class="text-sm text-[var(--color-gray)] mb-4">Typical weekly pricing range</div>
          <p class="text-xs text-[var(--color-gray)]">Varies by location, service level, and waste volume</p>
        </div>
        <div class="text-center border-x border-gray-200">
          <div class="text-4xl font-bold text-blue-600 mb-2">100%</div>
          <div class="text-sm text-[var(--color-gray)] mb-4">You keep your pricing</div>
          <p class="text-xs text-[var(--color-gray)]">EcoMint takes a small platform fee only</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">Flexible</div>
          <div class="text-sm text-[var(--color-gray)] mb-4">Update anytime</div>
          <p class="text-xs text-[var(--color-gray)]">Adjust pricing based on demand and costs</p>
        </div>
      </div>
    </div>

    <!-- Example Pricing Table -->
    <div class="max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold text-[var(--color-night)] mb-6 text-center">Example Pricing Configuration</h3>
      <div class="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-bold text-[var(--color-night)]">Plan</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-[var(--color-night)]">Frequency</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-[var(--color-night)]">Your Price</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-[var(--color-night)]">Platform Fee</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-[var(--color-night)]">You Keep</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-semibold text-[var(--color-night)]">Weekly</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">4x per month</td>
              <td class="px-6 py-4 text-sm font-bold text-emerald-600">₦3,500</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">₦350 (10%)</td>
              <td class="px-6 py-4 text-sm font-bold text-[var(--color-night)]">₦3,150</td>
            </tr>
            <tr class="bg-blue-50">
              <td class="px-6 py-4 text-sm font-semibold text-[var(--color-night)]">Bi-weekly</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">2x per month</td>
              <td class="px-6 py-4 text-sm font-bold text-blue-600">₦2,200</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">₦220 (10%)</td>
              <td class="px-6 py-4 text-sm font-bold text-[var(--color-night)]">₦1,980</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-semibold text-[var(--color-night)]">Tri-weekly</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">1x per month</td>
              <td class="px-6 py-4 text-sm font-bold text-cyan-600">₦1,500</td>
              <td class="px-6 py-4 text-sm text-[var(--color-gray)]">₦150 (10%)</td>
              <td class="px-6 py-4 text-sm font-bold text-[var(--color-night)]">₦1,350</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-center text-sm text-[var(--color-gray)] mt-4">
        *Example pricing only. You set your own rates based on your market and costs
      </p>
    </div>
  </div>
</section>

<!-- Operator Dashboard & Features -->
<section class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        Powerful Operator Dashboard
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Everything you need to run and scale your waste collection business
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Subscription Management"
        description="View all active subscriptions, track churn, and manage customer lifecycle automatically"
        icon="payment"
      />
      <FeatureCard
        title="Agent Management"
        description="Onboard agents, assign territories, and track performance with real-time metrics"
        icon="route"
      />
      <FeatureCard
        title="Revenue Analytics"
        description="Real-time dashboards showing MRR, churn rate, and revenue by agent and area"
        icon="data"
      />
      <FeatureCard
        title="Coverage Mapping"
        description="Define and visualize your service areas, track demand heatmaps, and plan expansion"
      />
      <FeatureCard
        title="Automated Billing"
        description="Recurring billing handled automatically with failed payment retry logic"
      />
      <FeatureCard
        title="Settlement Reports"
        description="Daily settlements with full transaction history and automated reconciliation"
      />
    </div>
  </div>
</section>

<!-- API & Sandbox -->
<section id="demo" class="py-20 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
      Try the Operator API
    </h2>
    <p class="text-lg text-[var(--color-gray)] mb-8">
      Create a sandbox environment to test integrations before going live
    </p>

    <div class="bg-white rounded-xl border-2 border-gray-200 p-8">
      <button
        on:click={createSandbox}
        disabled={sandboxLoading}
        class="px-8 py-4 bg-[var(--color-emerald)] hover:bg-green-600 disabled:bg-gray-300 text-white font-bold rounded-xl transition-colors text-lg"
      >
        {sandboxLoading ? 'Creating Sandbox...' : 'Create Sandbox Environment'}
      </button>

      {#if sandboxResult}
        <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p class="text-sm font-mono text-green-800">{sandboxResult}</p>
        </div>
      {/if}

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div class="font-bold text-[var(--color-night)] mb-1">Full API Access</div>
          <div class="text-[var(--color-gray)]">Test all endpoints</div>
        </div>
        <div>
          <div class="font-bold text-[var(--color-night)] mb-1">Mock Data</div>
          <div class="text-[var(--color-gray)]">Pre-populated scenarios</div>
        </div>
        <div>
          <div class="font-bold text-[var(--color-night)] mb-1">Documentation</div>
          <div class="text-[var(--color-gray)]">Complete API reference</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Signup Form -->
<section id="signup" class="py-20 bg-white">
  <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        Start Your Verification
      </h2>
      <p class="text-lg text-[var(--color-gray)]">
        Join the EcoMint platform and start building recurring revenue
      </p>
    </div>

    <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-emerald-200 p-8">
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="business-name" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="business-name"
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none"
              placeholder="ABC Waste Solutions Ltd"
            />
          </div>
          <div>
            <label for="contact-name" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
              Contact Name *
            </label>
            <input
              type="text"
              id="contact-name"
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none"
              placeholder="john@abcwaste.com"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none"
              placeholder="+234 800 000 0000"
            />
          </div>
        </div>

        <div>
          <label for="coverage" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
            Intended Coverage Areas *
          </label>
          <input
            type="text"
            id="coverage"
            required
            class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none"
            placeholder="e.g., Ikeja, Lekki, Victoria Island"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
            Tell us about your operations
          </label>
          <textarea
            id="message"
            rows="4"
            class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none resize-none"
            placeholder="Number of vehicles, current service areas, team size, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
        >
          Submit Application
        </button>

        <p class="text-xs text-center text-[var(--color-gray)]">
          We'll review your application and contact you within 24 hours
        </p>
      </form>
    </div>
  </div>
</section>

<CTABanner />
