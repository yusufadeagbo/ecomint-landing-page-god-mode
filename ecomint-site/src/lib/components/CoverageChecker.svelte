<script>
  export let compact = false;

  let locationQuery = '';
  let searchResults = null;
  let isSearching = false;

  // Mock coverage data - would come from API in production
  const coverageData = {
    'lagos': {
      covered: true,
      operators: [
        {
          id: 1,
          name: 'GreenWaste Lagos',
          verified: true,
          areas: ['Ikeja', 'Victoria Island', 'Lekki'],
          plans: [
            { frequency: 'Weekly', price: '₦3,500', pickups: 4 },
            { frequency: 'Bi-weekly', price: '₦2,200', pickups: 2 },
            { frequency: 'Tri-weekly', price: '₦1,500', pickups: 1 }
          ]
        },
        {
          id: 2,
          name: 'EcoCollect Services',
          verified: true,
          areas: ['Surulere', 'Yaba', 'Ikeja'],
          plans: [
            { frequency: 'Weekly', price: '₦3,200', pickups: 4 },
            { frequency: 'Bi-weekly', price: '₦2,000', pickups: 2 }
          ]
        }
      ]
    },
    'abuja': {
      covered: true,
      operators: [
        {
          id: 3,
          name: 'Capital Waste Solutions',
          verified: true,
          areas: ['Wuse', 'Garki', 'Asokoro'],
          plans: [
            { frequency: 'Weekly', price: '₦3,800', pickups: 4 },
            { frequency: 'Bi-weekly', price: '₦2,400', pickups: 2 }
          ]
        }
      ]
    },
    'port harcourt': {
      covered: true,
      operators: [
        {
          id: 4,
          name: 'Rivers Clean Initiative',
          verified: true,
          areas: ['GRA', 'Trans Amadi', 'D-Line'],
          plans: [
            { frequency: 'Weekly', price: '₦3,000', pickups: 4 },
            { frequency: 'Bi-weekly', price: '₦1,900', pickups: 2 }
          ]
        }
      ]
    }
  };

  function checkCoverage() {
    if (!locationQuery.trim()) return;

    isSearching = true;

    // Simulate API call
    setTimeout(() => {
      const normalizedQuery = locationQuery.toLowerCase().trim();
      let result = { covered: false, operators: [] };

      // Check if query matches any covered area
      for (const [city, data] of Object.entries(coverageData)) {
        if (normalizedQuery.includes(city) ||
            data.operators.some(op =>
              op.areas.some(area => normalizedQuery.includes(area.toLowerCase()))
            )) {
          result = data;
          break;
        }
      }

      searchResults = result;
      isSearching = false;
    }, 600);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      checkCoverage();
    }
  }
</script>

<div class="coverage-checker {compact ? 'compact' : 'expanded'}">
  {#if !compact}
    <div class="mb-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3">
        Check Your Area Coverage
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Enter your local government area or neighborhood to see verified operators offering subscription-based waste collection in your location
      </p>
    </div>
  {/if}

  <!-- Search Input Section -->
  <div class="search-container bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
    <div class="max-w-2xl mx-auto">
      <label for="location-search" class="block text-sm font-semibold text-[var(--color-night)] mb-3">
        Your Location
      </label>
      <div class="flex gap-3">
        <input
          id="location-search"
          type="text"
          bind:value={locationQuery}
          on:keypress={handleKeyPress}
          placeholder="e.g., Ikeja, Lagos or Wuse, Abuja"
          class="flex-1 px-5 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none text-lg transition-colors"
        />
        <button
          on:click={checkCoverage}
          disabled={isSearching || !locationQuery.trim()}
          class="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSearching ? 'Checking...' : 'Check Coverage'}
        </button>
      </div>
    </div>

    <!-- Coverage Map SVG -->
    <div class="mt-8 flex justify-center">
      <svg viewBox="0 0 400 300" class="w-full max-w-md opacity-90">
        <!-- Nigeria map simplified outline -->
        <path
          d="M 50 80 L 100 60 L 150 50 L 200 45 L 250 50 L 300 70 L 330 100 L 350 140 L 350 180 L 330 220 L 300 240 L 250 250 L 200 245 L 150 240 L 100 220 L 70 190 L 50 150 L 45 110 Z"
          fill="url(#mapGradient)"
          stroke="#3b82f6"
          stroke-width="2"
          class="drop-shadow-sm"
        />

        <!-- Coverage points -->
        <circle cx="120" cy="140" r="8" fill="#10b981" opacity="0.9">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="100" r="8" fill="#10b981" opacity="0.9">
          <animate attributeName="r" values="8;12;8" dur="2s" begin="0.7s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="200" r="8" fill="#10b981" opacity="0.9">
          <animate attributeName="r" values="8;12;8" dur="2s" begin="1.4s" repeatCount="indefinite" />
        </circle>

        <!-- Labels -->
        <text x="120" y="165" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Lagos</text>
        <text x="200" y="90" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Abuja</text>
        <text x="180" y="225" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Port Harcourt</text>

        <!-- Gradient definition -->
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#dbeafe;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#bfdbfe;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>

  <!-- Search Results -->
  {#if searchResults !== null}
    <div class="results-container">
      {#if searchResults.covered}
        <div class="success-message bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2"/>
              <path d="M8 12l3 3 5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
              <h3 class="text-xl font-bold text-green-900 mb-1">Great news! We cover your area</h3>
              <p class="text-green-700">
                {searchResults.operators.length} verified {searchResults.operators.length === 1 ? 'operator' : 'operators'} available in your location
              </p>
            </div>
          </div>
        </div>

        <!-- Verified Operators -->
        <div class="operators-grid space-y-4">
          {#each searchResults.operators as operator}
            <div class="operator-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 transition-colors">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h4 class="text-xl font-bold text-[var(--color-night)] mb-2">{operator.name}</h4>
                  <div class="flex items-center gap-2 mb-3">
                    <!-- Verification Badge -->
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Verified Operator
                    </span>
                  </div>
                  <p class="text-sm text-[var(--color-gray)]">
                    Serving: {operator.areas.join(', ')}
                  </p>
                </div>
              </div>

              <!-- Subscription Plans -->
              <div class="plans-grid grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                {#each operator.plans as plan}
                  <div class="plan-card border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
                    <div class="text-center">
                      <div class="text-sm font-semibold text-[var(--color-gray)] mb-1">{plan.frequency}</div>
                      <div class="text-2xl font-bold text-[var(--color-night)] mb-1">{plan.price}</div>
                      <div class="text-xs text-[var(--color-gray)]">{plan.pickups} pickups/month</div>
                    </div>
                  </div>
                {/each}
              </div>

              <button class="mt-4 w-full py-3 bg-[var(--color-emerald)] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                Subscribe Now
              </button>
            </div>
          {/each}
        </div>
      {:else}
        <div class="not-covered-message bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div>
              <h3 class="text-xl font-bold text-amber-900 mb-2">We're not in your area yet</h3>
              <p class="text-amber-700 mb-4">
                We're constantly expanding! Leave your email and we'll notify you when verified operators start serving your location.
              </p>
              <div class="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  class="flex-1 px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:outline-none"
                />
                <button class="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .coverage-checker {
    width: 100%;
  }

  .compact {
    max-width: 600px;
  }

  .search-container {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .operator-card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .plan-card {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  }
</style>
