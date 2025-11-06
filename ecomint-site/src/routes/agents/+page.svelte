<script>
  import VerificationBadge from '$lib/components/VerificationBadge.svelte';
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
  <title>EcoMint for Agents | Join Verified Operators</title>
  <meta name="description" content="Work with verified waste collection operators. Get assigned routes, verified payments via Eco QR, and consistent earnings. Download the EcoMint Agent app." />
</svelte:head>

<!-- Hero Section -->
<section class="relative text-white overflow-hidden" style="background: var(--bg-hero);">
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-agents" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-agents)"/>
    </svg>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-30 mb-6">
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Work with Verified Operators Only
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Earn More with Verified Operators
      </h1>

      <p class="text-xl text-gray-200 mb-8 leading-relaxed">
        Join verified waste collection operators as an agent. Get assigned subscription routes, verified payments via Eco QR, and consistent weekly earnings.
      </p>

      <!-- Key Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">₦40k - ₦120k</div>
          <div class="text-sm text-gray-200">Weekly earnings potential</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">100%</div>
          <div class="text-sm text-gray-200">Payment via Eco QR</div>
        </div>
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
          <div class="text-2xl font-bold mb-1">Recurring</div>
          <div class="text-sm text-gray-200">Subscription routes</div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="#download"
          class="px-8 py-4 bg-white text-[var(--color-evergreen)] rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-center text-lg"
        >
          Download Agent App
        </a>
        <a
          href="#how-it-works"
          class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center"
        >
          How It Works
        </a>
      </div>

      <p class="text-sm text-gray-300 mt-6">
        <strong>Important:</strong> You must have an operator code from a verified operator to download the app
      </p>
    </div>
  </div>
</section>

<!-- Operator-First Model -->
<section class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        How the Agent Model Works
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Agents work under verified operators who manage subscription customers, routes, and payments
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h3 class="text-2xl font-bold text-[var(--color-night)] mb-6">You Work FOR an Operator</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold">1</span>
            </div>
            <div>
              <h4 class="font-bold text-[var(--color-night)] mb-1">Operator Assigns You Routes</h4>
              <p class="text-sm text-[var(--color-gray)]">Your operator gives you subscription customers in specific areas. These are recurring pickups, not one-time jobs.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-emerald-600 font-bold">2</span>
            </div>
            <div>
              <h4 class="font-bold text-[var(--color-night)] mb-1">You Collect on Schedule</h4>
              <p class="text-sm text-[var(--color-gray)]">Follow your weekly/bi-weekly routes. Same customers, same schedule. Predictable work.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <div>
              <h4 class="font-bold text-[var(--color-night)] mb-1">Scan Eco QR for Payment Proof</h4>
              <p class="text-sm text-[var(--color-gray)]">Use the app to scan QR codes. This verifies the pickup and triggers your commission payment.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-amber-600 font-bold">4</span>
            </div>
            <div>
              <h4 class="font-bold text-[var(--color-night)] mb-1">Operator Pays You Weekly</h4>
              <p class="text-sm text-[var(--color-gray)]">Your operator handles customer billing and pays you based on completed pickups plus bonuses.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8">
        <h3 class="text-xl font-bold text-[var(--color-night)] mb-6">Why Work with Verified Operators?</h3>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <div class="font-semibold text-[var(--color-night)] mb-1">Guaranteed Payment</div>
              <div class="text-sm text-[var(--color-gray)]">Operators are verified and bonded. Your earnings are protected.</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <div class="font-semibold text-[var(--color-night)] mb-1">Recurring Routes</div>
              <div class="text-sm text-[var(--color-gray)]">Subscription customers mean consistent weekly income, not searching for jobs daily.</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <div class="font-semibold text-[var(--color-night)] mb-1">Professional Support</div>
              <div class="text-sm text-[var(--color-gray)]">Operators provide vehicles, tools, and handle customer issues.</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <div class="font-semibold text-[var(--color-night)] mb-1">Growth Opportunities</div>
              <div class="text-sm text-[var(--color-gray)]">Top performers can become team leaders or start their own operator business.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Visual Flow Diagram -->
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-emerald-200 p-8">
      <h3 class="text-2xl font-bold text-[var(--color-night)] mb-8 text-center">The EcoMint Agent Ecosystem</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- User -->
        <div>
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 class="font-bold text-[var(--color-night)] mb-2">User</h4>
          <p class="text-sm text-[var(--color-gray)]">Subscribes to verified operator for weekly/bi-weekly waste collection</p>
        </div>

        <!-- Operator (CENTER) -->
        <div>
          <div class="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-300">
            <svg class="w-10 h-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <VerificationBadge size="medium" variant="prominent" />
          <h4 class="font-bold text-[var(--color-night)] mb-2 mt-2">Verified Operator</h4>
          <p class="text-sm text-[var(--color-gray)]">Manages subscriptions, assigns routes to agents, handles billing</p>
        </div>

        <!-- Agent (YOU) -->
        <div>
          <div class="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="font-bold text-[var(--color-night)] mb-2">You (Agent)</h4>
          <p class="text-sm text-[var(--color-gray)]">Collects waste on assigned routes, scans QR codes, earns commission</p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-sm text-[var(--color-gray)] max-w-2xl mx-auto">
          <strong class="text-[var(--color-night)]">Key Point:</strong> Operators are the middlemen between users and agents. You don't find customers yourself — the operator assigns you subscription routes based on their customer base.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Download App Section -->
<section id="download" class="py-20 bg-[var(--color-fog)]">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Download the Agent App</h2>
      <p class="text-lg text-[var(--color-gray)]">
        Enter your operator code to get the customized app for your operator
      </p>
    </div>

    <div class="bg-white rounded-2xl border-2 border-gray-200 p-8">
      <form on:submit|preventDefault={handleDownload} class="space-y-6">
        <div>
          <label for="operator-code" class="block text-sm font-semibold text-[var(--color-night)] mb-2">
            Operator Code *
          </label>
          <input
            type="text"
            id="operator-code"
            bind:value={operatorCode}
            placeholder="e.g., OPR-LAG-001"
            class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none text-lg"
            required
          />
          <p class="mt-2 text-sm text-[var(--color-gray)]">
            Your operator will provide this code when they hire you
          </p>
        </div>

        <button
          type="submit"
          class="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
        >
          Get Download Link
        </button>

        {#if downloadLink}
          <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p class="font-bold text-green-900 mb-2">Download Ready!</p>
            <p class="text-sm text-green-700 mb-4">{downloadLink}</p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="#" class="flex-1 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iOS App
              </a>
              <a href="#" class="flex-1 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.55.68.55 1.19s-.21.92-.55 1.19l-2.29 1.45-2.62-2.62 2.62-2.62 2.29 1.45zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
                </svg>
                Android App
              </a>
            </div>
          </div>
        {/if}

        <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="text-sm text-amber-800">
              <strong>Don't have an operator yet?</strong> Contact verified operators in your area or ask them to add you to their team.
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- Agent Benefits -->
<section id="how-it-works" class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        What You Get as an Agent
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Work smarter with technology, verified payments, and professional support
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Optimized Routes"
        description="The app shows you the most efficient route for your assigned pickups. Save time and fuel."
      />
      <FeatureCard
        title="Eco QR Verification"
        description="Scan QR codes to instantly verify pickups and trigger commission payments. No cash handling."
        icon="payment"
      />
      <FeatureCard
        title="Recurring Income"
        description="Subscription customers mean predictable weekly earnings. Same routes, consistent pay."
      />
      <FeatureCard
        title="Performance Bonuses"
        description="Operators reward top performers with bonuses for consistent service and customer satisfaction."
      />
      <FeatureCard
        title="In-App Support"
        description="Chat with your operator for customer issues, route changes, or technical help."
      />
      <FeatureCard
        title="Earnings Dashboard"
        description="Track your daily pickups, weekly earnings, and commission history in real-time."
        icon="data"
      />
    </div>
  </div>
</section>

<!-- Earnings Breakdown -->
<section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
        Typical Agent Earnings
      </h2>
      <p class="text-lg text-[var(--color-gray)]">
        Your earnings depend on your operator's rates and the number of pickups
      </p>
    </div>

    <div class="bg-white rounded-2xl border-2 border-emerald-200 overflow-hidden">
      <div class="p-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <h3 class="text-xl font-bold">Example Weekly Earnings</h3>
        <p class="text-emerald-100">Based on 50 subscription pickups per week</p>
      </div>

      <div class="p-8">
        <table class="w-full">
          <thead class="border-b-2 border-gray-200">
            <tr>
              <th class="text-left py-3 text-sm font-bold text-[var(--color-night)]">Subscription Type</th>
              <th class="text-right py-3 text-sm font-bold text-[var(--color-night)]">Pickups/Week</th>
              <th class="text-right py-3 text-sm font-bold text-[var(--color-night)]">Commission Each</th>
              <th class="text-right py-3 text-sm font-bold text-[var(--color-night)]">Weekly Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="py-4 text-sm">Weekly subscriptions</td>
              <td class="py-4 text-sm text-right">30</td>
              <td class="py-4 text-sm text-right text-emerald-600 font-semibold">₦700</td>
              <td class="py-4 text-sm text-right font-bold">₦21,000</td>
            </tr>
            <tr>
              <td class="py-4 text-sm">Bi-weekly subscriptions</td>
              <td class="py-4 text-sm text-right">15</td>
              <td class="py-4 text-sm text-right text-emerald-600 font-semibold">₦500</td>
              <td class="py-4 text-sm text-right font-bold">₦7,500</td>
            </tr>
            <tr>
              <td class="py-4 text-sm">Tri-weekly subscriptions</td>
              <td class="py-4 text-sm text-right">5</td>
              <td class="py-4 text-sm text-right text-emerald-600 font-semibold">₦350</td>
              <td class="py-4 text-sm text-right font-bold">₦1,750</td>
            </tr>
            <tr class="bg-emerald-50">
              <td class="py-4 text-sm font-bold" colspan="3">Subtotal</td>
              <td class="py-4 text-sm text-right font-bold text-emerald-600">₦30,250</td>
            </tr>
            <tr>
              <td class="py-4 text-sm">Performance bonus (10%)</td>
              <td class="py-4 text-sm text-right" colspan="2">For on-time service</td>
              <td class="py-4 text-sm text-right font-bold">₦3,025</td>
            </tr>
            <tr class="bg-green-50 font-bold">
              <td class="py-4 text-lg" colspan="3">Total Weekly Earnings</td>
              <td class="py-4 text-lg text-right text-green-600">₦33,275</td>
            </tr>
          </tbody>
        </table>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p class="text-sm text-blue-800">
            <strong>Note:</strong> Earnings vary by operator and location. Some operators pay higher commissions, others provide vehicles and tools. Discuss rates with your operator before joining.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<CTABanner />
