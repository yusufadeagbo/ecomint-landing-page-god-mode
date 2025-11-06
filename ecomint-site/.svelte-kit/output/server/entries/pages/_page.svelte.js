import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
import { H as Hero, F as FeatureCard, C as CTABanner } from "../../chunks/CTABanner.js";
import { L as LearningArticle } from "../../chunks/LearningArticle.js";
const css$1 = {
  code: ".coverage-checker.svelte-1876l0f{width:100%}.compact.svelte-1876l0f{max-width:600px}.search-container.svelte-1876l0f{position:relative;box-shadow:0 1px 3px rgba(0, 0, 0, 0.05)}.operator-card.svelte-1876l0f{box-shadow:0 1px 3px rgba(0, 0, 0, 0.05)}.plan-card.svelte-1876l0f{background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)}",
  map: `{"version":3,"file":"CoverageChecker.svelte","sources":["CoverageChecker.svelte"],"sourcesContent":["<script>\\n  export let compact = false;\\n\\n  let locationQuery = '';\\n  let searchResults = null;\\n  let isSearching = false;\\n\\n  // Mock coverage data - would come from API in production\\n  const coverageData = {\\n    'lagos': {\\n      covered: true,\\n      operators: [\\n        {\\n          id: 1,\\n          name: 'GreenWaste Lagos',\\n          verified: true,\\n          areas: ['Ikeja', 'Victoria Island', 'Lekki'],\\n          plans: [\\n            { frequency: 'Weekly', price: '₦3,500', pickups: 4 },\\n            { frequency: 'Bi-weekly', price: '₦2,200', pickups: 2 },\\n            { frequency: 'Tri-weekly', price: '₦1,500', pickups: 1 }\\n          ]\\n        },\\n        {\\n          id: 2,\\n          name: 'EcoCollect Services',\\n          verified: true,\\n          areas: ['Surulere', 'Yaba', 'Ikeja'],\\n          plans: [\\n            { frequency: 'Weekly', price: '₦3,200', pickups: 4 },\\n            { frequency: 'Bi-weekly', price: '₦2,000', pickups: 2 }\\n          ]\\n        }\\n      ]\\n    },\\n    'abuja': {\\n      covered: true,\\n      operators: [\\n        {\\n          id: 3,\\n          name: 'Capital Waste Solutions',\\n          verified: true,\\n          areas: ['Wuse', 'Garki', 'Asokoro'],\\n          plans: [\\n            { frequency: 'Weekly', price: '₦3,800', pickups: 4 },\\n            { frequency: 'Bi-weekly', price: '₦2,400', pickups: 2 }\\n          ]\\n        }\\n      ]\\n    },\\n    'port harcourt': {\\n      covered: true,\\n      operators: [\\n        {\\n          id: 4,\\n          name: 'Rivers Clean Initiative',\\n          verified: true,\\n          areas: ['GRA', 'Trans Amadi', 'D-Line'],\\n          plans: [\\n            { frequency: 'Weekly', price: '₦3,000', pickups: 4 },\\n            { frequency: 'Bi-weekly', price: '₦1,900', pickups: 2 }\\n          ]\\n        }\\n      ]\\n    }\\n  };\\n\\n  function checkCoverage() {\\n    if (!locationQuery.trim()) return;\\n\\n    isSearching = true;\\n\\n    // Simulate API call\\n    setTimeout(() => {\\n      const normalizedQuery = locationQuery.toLowerCase().trim();\\n      let result = { covered: false, operators: [] };\\n\\n      // Check if query matches any covered area\\n      for (const [city, data] of Object.entries(coverageData)) {\\n        if (normalizedQuery.includes(city) ||\\n            data.operators.some(op =>\\n              op.areas.some(area => normalizedQuery.includes(area.toLowerCase()))\\n            )) {\\n          result = data;\\n          break;\\n        }\\n      }\\n\\n      searchResults = result;\\n      isSearching = false;\\n    }, 600);\\n  }\\n\\n  function handleKeyPress(event) {\\n    if (event.key === 'Enter') {\\n      checkCoverage();\\n    }\\n  }\\n<\/script>\\n\\n<div class=\\"coverage-checker {compact ? 'compact' : 'expanded'}\\">\\n  {#if !compact}\\n    <div class=\\"mb-8 text-center\\">\\n      <h2 class=\\"text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3\\">\\n        Check Your Area Coverage\\n      </h2>\\n      <p class=\\"text-lg text-[var(--color-gray)] max-w-2xl mx-auto\\">\\n        Enter your local government area or neighborhood to see verified operators offering subscription-based waste collection in your location\\n      </p>\\n    </div>\\n  {/if}\\n\\n  <!-- Search Input Section -->\\n  <div class=\\"search-container bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8\\">\\n    <div class=\\"max-w-2xl mx-auto\\">\\n      <label for=\\"location-search\\" class=\\"block text-sm font-semibold text-[var(--color-night)] mb-3\\">\\n        Your Location\\n      </label>\\n      <div class=\\"flex gap-3\\">\\n        <input\\n          id=\\"location-search\\"\\n          type=\\"text\\"\\n          bind:value={locationQuery}\\n          on:keypress={handleKeyPress}\\n          placeholder=\\"e.g., Ikeja, Lagos or Wuse, Abuja\\"\\n          class=\\"flex-1 px-5 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none text-lg transition-colors\\"\\n        />\\n        <button\\n          on:click={checkCoverage}\\n          disabled={isSearching || !locationQuery.trim()}\\n          class=\\"px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\\"\\n        >\\n          {isSearching ? 'Checking...' : 'Check Coverage'}\\n        </button>\\n      </div>\\n    </div>\\n\\n    <!-- Coverage Map SVG -->\\n    <div class=\\"mt-8 flex justify-center\\">\\n      <svg viewBox=\\"0 0 400 300\\" class=\\"w-full max-w-md opacity-90\\">\\n        <!-- Nigeria map simplified outline -->\\n        <path\\n          d=\\"M 50 80 L 100 60 L 150 50 L 200 45 L 250 50 L 300 70 L 330 100 L 350 140 L 350 180 L 330 220 L 300 240 L 250 250 L 200 245 L 150 240 L 100 220 L 70 190 L 50 150 L 45 110 Z\\"\\n          fill=\\"url(#mapGradient)\\"\\n          stroke=\\"#3b82f6\\"\\n          stroke-width=\\"2\\"\\n          class=\\"drop-shadow-sm\\"\\n        />\\n\\n        <!-- Coverage points -->\\n        <circle cx=\\"120\\" cy=\\"140\\" r=\\"8\\" fill=\\"#10b981\\" opacity=\\"0.9\\">\\n          <animate attributeName=\\"r\\" values=\\"8;12;8\\" dur=\\"2s\\" repeatCount=\\"indefinite\\" />\\n        </circle>\\n        <circle cx=\\"200\\" cy=\\"100\\" r=\\"8\\" fill=\\"#10b981\\" opacity=\\"0.9\\">\\n          <animate attributeName=\\"r\\" values=\\"8;12;8\\" dur=\\"2s\\" begin=\\"0.7s\\" repeatCount=\\"indefinite\\" />\\n        </circle>\\n        <circle cx=\\"180\\" cy=\\"200\\" r=\\"8\\" fill=\\"#10b981\\" opacity=\\"0.9\\">\\n          <animate attributeName=\\"r\\" values=\\"8;12;8\\" dur=\\"2s\\" begin=\\"1.4s\\" repeatCount=\\"indefinite\\" />\\n        </circle>\\n\\n        <!-- Labels -->\\n        <text x=\\"120\\" y=\\"165\\" text-anchor=\\"middle\\" class=\\"text-xs font-medium\\" fill=\\"#0d3d2e\\">Lagos</text>\\n        <text x=\\"200\\" y=\\"90\\" text-anchor=\\"middle\\" class=\\"text-xs font-medium\\" fill=\\"#0d3d2e\\">Abuja</text>\\n        <text x=\\"180\\" y=\\"225\\" text-anchor=\\"middle\\" class=\\"text-xs font-medium\\" fill=\\"#0d3d2e\\">Port Harcourt</text>\\n\\n        <!-- Gradient definition -->\\n        <defs>\\n          <linearGradient id=\\"mapGradient\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"100%\\">\\n            <stop offset=\\"0%\\" style=\\"stop-color:#dbeafe;stop-opacity:1\\" />\\n            <stop offset=\\"100%\\" style=\\"stop-color:#bfdbfe;stop-opacity:1\\" />\\n          </linearGradient>\\n        </defs>\\n      </svg>\\n    </div>\\n  </div>\\n\\n  <!-- Search Results -->\\n  {#if searchResults !== null}\\n    <div class=\\"results-container\\">\\n      {#if searchResults.covered}\\n        <div class=\\"success-message bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6\\">\\n          <div class=\\"flex items-start gap-4\\">\\n            <svg class=\\"w-8 h-8 text-green-600 flex-shrink-0\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\">\\n              <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" stroke-width=\\"2\\"/>\\n              <path d=\\"M8 12l3 3 5-5\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/>\\n            </svg>\\n            <div>\\n              <h3 class=\\"text-xl font-bold text-green-900 mb-1\\">Great news! We cover your area</h3>\\n              <p class=\\"text-green-700\\">\\n                {searchResults.operators.length} verified {searchResults.operators.length === 1 ? 'operator' : 'operators'} available in your location\\n              </p>\\n            </div>\\n          </div>\\n        </div>\\n\\n        <!-- Verified Operators -->\\n        <div class=\\"operators-grid space-y-4\\">\\n          {#each searchResults.operators as operator}\\n            <div class=\\"operator-card bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 transition-colors\\">\\n              <div class=\\"flex items-start justify-between mb-4\\">\\n                <div>\\n                  <h4 class=\\"text-xl font-bold text-[var(--color-night)] mb-2\\">{operator.name}</h4>\\n                  <div class=\\"flex items-center gap-2 mb-3\\">\\n                    <!-- Verification Badge -->\\n                    <span class=\\"inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold\\">\\n                      <svg class=\\"w-4 h-4\\" viewBox=\\"0 0 20 20\\" fill=\\"currentColor\\">\\n                        <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"/>\\n                      </svg>\\n                      Verified Operator\\n                    </span>\\n                  </div>\\n                  <p class=\\"text-sm text-[var(--color-gray)]\\">\\n                    Serving: {operator.areas.join(', ')}\\n                  </p>\\n                </div>\\n              </div>\\n\\n              <!-- Subscription Plans -->\\n              <div class=\\"plans-grid grid grid-cols-1 md:grid-cols-3 gap-3 mt-4\\">\\n                {#each operator.plans as plan}\\n                  <div class=\\"plan-card border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors\\">\\n                    <div class=\\"text-center\\">\\n                      <div class=\\"text-sm font-semibold text-[var(--color-gray)] mb-1\\">{plan.frequency}</div>\\n                      <div class=\\"text-2xl font-bold text-[var(--color-night)] mb-1\\">{plan.price}</div>\\n                      <div class=\\"text-xs text-[var(--color-gray)]\\">{plan.pickups} pickups/month</div>\\n                    </div>\\n                  </div>\\n                {/each}\\n              </div>\\n\\n              <button class=\\"mt-4 w-full py-3 bg-[var(--color-emerald)] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors\\">\\n                Subscribe Now\\n              </button>\\n            </div>\\n          {/each}\\n        </div>\\n      {:else}\\n        <div class=\\"not-covered-message bg-amber-50 border-2 border-amber-200 rounded-xl p-6\\">\\n          <div class=\\"flex items-start gap-4\\">\\n            <svg class=\\"w-8 h-8 text-amber-600 flex-shrink-0\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\">\\n              <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" stroke-width=\\"2\\"/>\\n              <path d=\\"M12 8v4M12 16h.01\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/>\\n            </svg>\\n            <div>\\n              <h3 class=\\"text-xl font-bold text-amber-900 mb-2\\">We're not in your area yet</h3>\\n              <p class=\\"text-amber-700 mb-4\\">\\n                We're constantly expanding! Leave your email and we'll notify you when verified operators start serving your location.\\n              </p>\\n              <div class=\\"flex gap-3\\">\\n                <input\\n                  type=\\"email\\"\\n                  placeholder=\\"your@email.com\\"\\n                  class=\\"flex-1 px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:outline-none\\"\\n                />\\n                <button class=\\"px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors\\">\\n                  Notify Me\\n                </button>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      {/if}\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .coverage-checker {\\n    width: 100%;\\n  }\\n\\n  .compact {\\n    max-width: 600px;\\n  }\\n\\n  .search-container {\\n    position: relative;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\\n  }\\n\\n  .operator-card {\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\\n  }\\n\\n  .plan-card {\\n    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2QE,gCAAkB,CAChB,KAAK,CAAE,IACT,CAEA,uBAAS,CACP,SAAS,CAAE,KACb,CAEA,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAC1C,CAEA,6BAAe,CACb,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAC1C,CAEA,yBAAW,CACT,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAC9D"}`
};
const CoverageChecker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compact = false } = $$props;
  let locationQuery = "";
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0) $$bindings.compact(compact);
  $$result.css.add(css$1);
  return `<div class="${"coverage-checker " + escape(compact ? "compact" : "expanded", true) + " svelte-1876l0f"}">${!compact ? `<div class="mb-8 text-center" data-svelte-h="svelte-284okg"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3">Check Your Area Coverage</h2> <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">Enter your local government area or neighborhood to see verified operators offering subscription-based waste collection in your location</p></div>` : ``}  <div class="search-container bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 svelte-1876l0f"><div class="max-w-2xl mx-auto"><label for="location-search" class="block text-sm font-semibold text-[var(--color-night)] mb-3" data-svelte-h="svelte-1n92kgy">Your Location</label> <div class="flex gap-3"><input id="location-search" type="text" placeholder="e.g., Ikeja, Lagos or Wuse, Abuja" class="flex-1 px-5 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none text-lg transition-colors"${add_attribute("value", locationQuery, 0)}> <button ${!locationQuery.trim() ? "disabled" : ""} class="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">${escape("Check Coverage")}</button></div></div>  <div class="mt-8 flex justify-center" data-svelte-h="svelte-128q44s"><svg viewBox="0 0 400 300" class="w-full max-w-md opacity-90"><path d="M 50 80 L 100 60 L 150 50 L 200 45 L 250 50 L 300 70 L 330 100 L 350 140 L 350 180 L 330 220 L 300 240 L 250 250 L 200 245 L 150 240 L 100 220 L 70 190 L 50 150 L 45 110 Z" fill="url(#mapGradient)" stroke="#3b82f6" stroke-width="2" class="drop-shadow-sm"></path><circle cx="120" cy="140" r="8" fill="#10b981" opacity="0.9"><animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"></animate></circle><circle cx="200" cy="100" r="8" fill="#10b981" opacity="0.9"><animate attributeName="r" values="8;12;8" dur="2s" begin="0.7s" repeatCount="indefinite"></animate></circle><circle cx="180" cy="200" r="8" fill="#10b981" opacity="0.9"><animate attributeName="r" values="8;12;8" dur="2s" begin="1.4s" repeatCount="indefinite"></animate></circle><text x="120" y="165" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Lagos</text><text x="200" y="90" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Abuja</text><text x="180" y="225" text-anchor="middle" class="text-xs font-medium" fill="#0d3d2e">Port Harcourt</text><defs><linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#dbeafe;stop-opacity:1"></stop><stop offset="100%" style="stop-color:#bfdbfe;stop-opacity:1"></stop></linearGradient></defs></svg></div></div>  ${``} </div>`;
});
const css = {
  code: ".subscription-tiers.svelte-18yotmu.svelte-18yotmu{width:100%}.tier-card.svelte-18yotmu.svelte-18yotmu{position:relative;transition:transform 200ms ease, box-shadow 200ms ease}.tier-card.svelte-18yotmu.svelte-18yotmu:hover{transform:translateY(-4px)}.tier-card.popular.svelte-18yotmu.svelte-18yotmu{box-shadow:0 4px 16px rgba(16, 185, 129, 0.15)}.features-list.svelte-18yotmu li.svelte-18yotmu{animation:svelte-18yotmu-fadeIn 300ms ease forwards;opacity:0}.features-list.svelte-18yotmu li.svelte-18yotmu:nth-child(1){animation-delay:50ms}.features-list.svelte-18yotmu li.svelte-18yotmu:nth-child(2){animation-delay:100ms}.features-list.svelte-18yotmu li.svelte-18yotmu:nth-child(3){animation-delay:150ms}.features-list.svelte-18yotmu li.svelte-18yotmu:nth-child(4){animation-delay:200ms}@keyframes svelte-18yotmu-fadeIn{to{opacity:1}}@media(prefers-reduced-motion: reduce){.features-list.svelte-18yotmu li.svelte-18yotmu{animation:none;opacity:1}.tier-card.svelte-18yotmu.svelte-18yotmu:hover{transform:none}}",
  map: `{"version":3,"file":"SubscriptionTiers.svelte","sources":["SubscriptionTiers.svelte"],"sourcesContent":["<script>\\n  export let showTitle = true;\\n  export let layout = 'grid'; // 'grid' or 'comparison'\\n\\n  const tiers = [\\n    {\\n      id: 'weekly',\\n      name: 'Weekly',\\n      frequency: 'Every week',\\n      pickups: 4,\\n      priceRange: '₦3,000 - ₦3,800',\\n      color: 'emerald',\\n      popular: true,\\n      description: 'Perfect for busy households and commercial spaces',\\n      features: [\\n        '4 pickups per month',\\n        'Priority scheduling',\\n        'Same-day emergency pickup',\\n        'Flexible bag sizes'\\n      ],\\n      calendarPattern: [1, 1, 1, 1] // 4 weeks, all active\\n    },\\n    {\\n      id: 'biweekly',\\n      name: 'Bi-weekly',\\n      frequency: 'Every 2 weeks',\\n      pickups: 2,\\n      priceRange: '₦1,900 - ₦2,400',\\n      color: 'blue',\\n      popular: false,\\n      description: 'Ideal for small families and moderate waste generation',\\n      features: [\\n        '2 pickups per month',\\n        'Standard scheduling',\\n        'SMS reminders',\\n        'Medium bag sizes'\\n      ],\\n      calendarPattern: [1, 0, 1, 0] // 4 weeks, alternating\\n    },\\n    {\\n      id: 'triweekly',\\n      name: 'Tri-weekly',\\n      frequency: 'Every 3 weeks',\\n      pickups: 1,\\n      priceRange: '₦1,500 - ₦1,800',\\n      color: 'cyan',\\n      popular: false,\\n      description: 'Budget-friendly for minimal waste or seasonal use',\\n      features: [\\n        '1-2 pickups per month',\\n        'Flexible dates',\\n        'Email notifications',\\n        'Standard bag sizes'\\n      ],\\n      calendarPattern: [1, 0, 0, 0] // 4 weeks, once per cycle\\n    }\\n  ];\\n\\n  const colorClasses = {\\n    emerald: {\\n      bg: 'bg-emerald-50',\\n      border: 'border-emerald-200',\\n      borderHover: 'hover:border-emerald-400',\\n      accent: 'bg-emerald-600',\\n      text: 'text-emerald-900',\\n      badge: 'bg-emerald-600 text-white'\\n    },\\n    blue: {\\n      bg: 'bg-blue-50',\\n      border: 'border-blue-200',\\n      borderHover: 'hover:border-blue-400',\\n      accent: 'bg-blue-600',\\n      text: 'text-blue-900',\\n      badge: 'bg-blue-600 text-white'\\n    },\\n    cyan: {\\n      bg: 'bg-cyan-50',\\n      border: 'border-cyan-200',\\n      borderHover: 'hover:border-cyan-400',\\n      accent: 'bg-cyan-600',\\n      text: 'text-cyan-900',\\n      badge: 'bg-cyan-600 text-white'\\n    }\\n  };\\n<\/script>\\n\\n<div class=\\"subscription-tiers\\">\\n  {#if showTitle}\\n    <div class=\\"text-center mb-10\\">\\n      <h2 class=\\"text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3\\">\\n        Choose Your Pickup Frequency\\n      </h2>\\n      <p class=\\"text-lg text-[var(--color-gray)] max-w-3xl mx-auto\\">\\n        Flexible subscription plans tailored to your waste generation. All plans include verified operators, secure payments, and transparent tracking.\\n      </p>\\n    </div>\\n  {/if}\\n\\n  <div class=\\"tiers-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto\\">\\n    {#each tiers as tier}\\n      {@const colors = colorClasses[tier.color]}\\n      <div\\n        class=\\"tier-card {colors.bg} border-2 {colors.border} {colors.borderHover} rounded-2xl p-6 transition-all relative\\"\\n        class:popular={tier.popular}\\n      >\\n        {#if tier.popular}\\n          <div class=\\"absolute -top-3 left-1/2 -translate-x-1/2\\">\\n            <span class=\\"px-4 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-bold rounded-full shadow-md\\">\\n              Most Popular\\n            </span>\\n          </div>\\n        {/if}\\n\\n        <div class=\\"tier-header mb-6\\">\\n          <h3 class=\\"text-2xl font-bold {colors.text} mb-1\\">{tier.name}</h3>\\n          <p class=\\"text-sm text-[var(--color-gray)] mb-4\\">{tier.frequency}</p>\\n\\n          <!-- Calendar Visualization -->\\n          <div class=\\"calendar-visual mb-4\\">\\n            <div class=\\"text-xs font-semibold text-[var(--color-gray)] mb-2\\">Monthly Schedule</div>\\n            <div class=\\"flex gap-2\\">\\n              {#each tier.calendarPattern as active, index}\\n                <div class=\\"flex-1 flex flex-col items-center\\">\\n                  <div\\n                    class=\\"w-full h-12 rounded-lg border-2 transition-all\\"\\n                    class:bg-gradient={active}\\n                    class:border-active={active}\\n                    class:bg-gray-100={!active}\\n                    class:border-gray-300={!active}\\n                    style={active ? \`background: linear-gradient(135deg, var(--tier-color-light), var(--tier-color-dark)); border-color: var(--tier-color-dark);\` : ''}\\n                  >\\n                    {#if active}\\n                      <div class=\\"w-full h-full flex items-center justify-center\\">\\n                        <svg class=\\"w-6 h-6 text-white\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\">\\n                          <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\" />\\n                        </svg>\\n                      </div>\\n                    {/if}\\n                  </div>\\n                  <span class=\\"text-xs text-[var(--color-gray)] mt-1\\">Week {index + 1}</span>\\n                </div>\\n              {/each}\\n            </div>\\n          </div>\\n\\n          <div class=\\"price-display text-center py-4 border-y border-current/10\\">\\n            <div class=\\"text-3xl font-bold {colors.text}\\">{tier.priceRange}</div>\\n            <div class=\\"text-sm text-[var(--color-gray)] mt-1\\">per month</div>\\n          </div>\\n        </div>\\n\\n        <p class=\\"text-sm text-[var(--color-gray)] mb-4\\">{tier.description}</p>\\n\\n        <ul class=\\"features-list space-y-3 mb-6\\">\\n          {#each tier.features as feature}\\n            <li class=\\"flex items-start gap-2 text-sm\\">\\n              <svg class=\\"w-5 h-5 {colors.text} flex-shrink-0 mt-0.5\\" viewBox=\\"0 0 20 20\\" fill=\\"currentColor\\">\\n                <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\" />\\n              </svg>\\n              <span class=\\"text-[var(--color-night)]\\">{feature}</span>\\n            </li>\\n          {/each}\\n        </ul>\\n\\n        <button\\n          class=\\"w-full py-3 rounded-xl font-semibold transition-all {tier.popular ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg' : 'bg-white border-2 ' + colors.border + ' ' + colors.text + ' hover:' + colors.bg}\\"\\n        >\\n          {tier.popular ? 'Get Started' : 'Choose Plan'}\\n        </button>\\n      </div>\\n    {/each}\\n  </div>\\n\\n  <!-- Info Banner -->\\n  <div class=\\"info-banner mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 max-w-4xl mx-auto\\">\\n    <div class=\\"flex items-start gap-4\\">\\n      <svg class=\\"w-6 h-6 text-blue-600 flex-shrink-0 mt-1\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\">\\n        <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" stroke-width=\\"2\\"/>\\n        <path d=\\"M12 16v-4M12 8h.01\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/>\\n      </svg>\\n      <div class=\\"flex-1\\">\\n        <h4 class=\\"font-bold text-[var(--color-night)] mb-2\\">How Subscription Works</h4>\\n        <ul class=\\"text-sm text-[var(--color-gray)] space-y-1\\">\\n          <li>• Prices vary by operator and location – check coverage to see exact rates</li>\\n          <li>• Cancel or change frequency anytime with 7 days notice</li>\\n          <li>• Automatic recurring payments via mobile money or card</li>\\n          <li>• Track your pickups in real-time via the EcoMint app</li>\\n        </ul>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .subscription-tiers {\\n    width: 100%;\\n  }\\n\\n  .tier-card {\\n    position: relative;\\n    transition: transform 200ms ease, box-shadow 200ms ease;\\n  }\\n\\n  .tier-card:hover {\\n    transform: translateY(-4px);\\n  }\\n\\n  .tier-card.popular {\\n    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.15);\\n  }\\n\\n  .features-list li {\\n    animation: fadeIn 300ms ease forwards;\\n    opacity: 0;\\n  }\\n\\n  .features-list li:nth-child(1) { animation-delay: 50ms; }\\n  .features-list li:nth-child(2) { animation-delay: 100ms; }\\n  .features-list li:nth-child(3) { animation-delay: 150ms; }\\n  .features-list li:nth-child(4) { animation-delay: 200ms; }\\n\\n  @keyframes fadeIn {\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n\\n  @media (prefers-reduced-motion: reduce) {\\n    .features-list li {\\n      animation: none;\\n      opacity: 1;\\n    }\\n\\n    .tier-card:hover {\\n      transform: none;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkME,iDAAoB,CAClB,KAAK,CAAE,IACT,CAEA,wCAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,KAAK,CAAC,IACrD,CAEA,wCAAU,MAAO,CACf,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,UAAU,sCAAS,CACjB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAChD,CAEA,6BAAc,CAAC,iBAAG,CAChB,SAAS,CAAE,qBAAM,CAAC,KAAK,CAAC,IAAI,CAAC,QAAQ,CACrC,OAAO,CAAE,CACX,CAEA,6BAAc,CAAC,iBAAE,WAAW,CAAC,CAAE,CAAE,eAAe,CAAE,IAAM,CACxD,6BAAc,CAAC,iBAAE,WAAW,CAAC,CAAE,CAAE,eAAe,CAAE,KAAO,CACzD,6BAAc,CAAC,iBAAE,WAAW,CAAC,CAAE,CAAE,eAAe,CAAE,KAAO,CACzD,6BAAc,CAAC,iBAAE,WAAW,CAAC,CAAE,CAAE,eAAe,CAAE,KAAO,CAEzD,WAAW,qBAAO,CAChB,EAAG,CACD,OAAO,CAAE,CACX,CACF,CAEA,MAAO,yBAAyB,MAAM,CAAE,CACtC,6BAAc,CAAC,iBAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,CACX,CAEA,wCAAU,MAAO,CACf,SAAS,CAAE,IACb,CACF"}`
};
const SubscriptionTiers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showTitle = true } = $$props;
  let { layout = "grid" } = $$props;
  const tiers = [
    {
      id: "weekly",
      name: "Weekly",
      frequency: "Every week",
      pickups: 4,
      priceRange: "₦3,000 - ₦3,800",
      color: "emerald",
      popular: true,
      description: "Perfect for busy households and commercial spaces",
      features: [
        "4 pickups per month",
        "Priority scheduling",
        "Same-day emergency pickup",
        "Flexible bag sizes"
      ],
      calendarPattern: [1, 1, 1, 1]
      // 4 weeks, all active
    },
    {
      id: "biweekly",
      name: "Bi-weekly",
      frequency: "Every 2 weeks",
      pickups: 2,
      priceRange: "₦1,900 - ₦2,400",
      color: "blue",
      popular: false,
      description: "Ideal for small families and moderate waste generation",
      features: [
        "2 pickups per month",
        "Standard scheduling",
        "SMS reminders",
        "Medium bag sizes"
      ],
      calendarPattern: [1, 0, 1, 0]
      // 4 weeks, alternating
    },
    {
      id: "triweekly",
      name: "Tri-weekly",
      frequency: "Every 3 weeks",
      pickups: 1,
      priceRange: "₦1,500 - ₦1,800",
      color: "cyan",
      popular: false,
      description: "Budget-friendly for minimal waste or seasonal use",
      features: [
        "1-2 pickups per month",
        "Flexible dates",
        "Email notifications",
        "Standard bag sizes"
      ],
      calendarPattern: [1, 0, 0, 0]
      // 4 weeks, once per cycle
    }
  ];
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      borderHover: "hover:border-emerald-400",
      accent: "bg-emerald-600",
      text: "text-emerald-900",
      badge: "bg-emerald-600 text-white"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      borderHover: "hover:border-blue-400",
      accent: "bg-blue-600",
      text: "text-blue-900",
      badge: "bg-blue-600 text-white"
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      borderHover: "hover:border-cyan-400",
      accent: "bg-cyan-600",
      text: "text-cyan-900",
      badge: "bg-cyan-600 text-white"
    }
  };
  if ($$props.showTitle === void 0 && $$bindings.showTitle && showTitle !== void 0) $$bindings.showTitle(showTitle);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
  $$result.css.add(css);
  return `<div class="subscription-tiers svelte-18yotmu">${showTitle ? `<div class="text-center mb-10" data-svelte-h="svelte-68vty"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3">Choose Your Pickup Frequency</h2> <p class="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">Flexible subscription plans tailored to your waste generation. All plans include verified operators, secure payments, and transparent tracking.</p></div>` : ``} <div class="tiers-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">${each(tiers, (tier) => {
    let colors = colorClasses[tier.color];
    return ` <div class="${[
      "tier-card " + escape(colors.bg, true) + " border-2 " + escape(colors.border, true) + " " + escape(colors.borderHover, true) + " rounded-2xl p-6 transition-all relative svelte-18yotmu",
      tier.popular ? "popular" : ""
    ].join(" ").trim()}">${tier.popular ? `<div class="absolute -top-3 left-1/2 -translate-x-1/2" data-svelte-h="svelte-kdlfcf"><span class="px-4 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-bold rounded-full shadow-md">Most Popular</span> </div>` : ``} <div class="tier-header mb-6"><h3 class="${"text-2xl font-bold " + escape(colors.text, true) + " mb-1 svelte-18yotmu"}">${escape(tier.name)}</h3> <p class="text-sm text-[var(--color-gray)] mb-4">${escape(tier.frequency)}</p>  <div class="calendar-visual mb-4"><div class="text-xs font-semibold text-[var(--color-gray)] mb-2" data-svelte-h="svelte-4fol1g">Monthly Schedule</div> <div class="flex gap-2">${each(tier.calendarPattern, (active, index) => {
      return `<div class="flex-1 flex flex-col items-center"><div class="${[
        "w-full h-12 rounded-lg border-2 transition-all",
        (active ? "bg-gradient" : "") + " " + (active ? "border-active" : "") + " " + (!active ? "bg-gray-100" : "") + " " + (!active ? "border-gray-300" : "")
      ].join(" ").trim()}"${add_attribute(
        "style",
        active ? `background: linear-gradient(135deg, var(--tier-color-light), var(--tier-color-dark)); border-color: var(--tier-color-dark);` : "",
        0
      )}>${active ? `<div class="w-full h-full flex items-center justify-center" data-svelte-h="svelte-16wpd1j"><svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </div>` : ``}</div> <span class="text-xs text-[var(--color-gray)] mt-1">Week ${escape(index + 1)}</span> </div>`;
    })} </div></div> <div class="price-display text-center py-4 border-y border-current/10"><div class="${"text-3xl font-bold " + escape(colors.text, true) + " svelte-18yotmu"}">${escape(tier.priceRange)}</div> <div class="text-sm text-[var(--color-gray)] mt-1" data-svelte-h="svelte-13n29y4">per month</div> </div></div> <p class="text-sm text-[var(--color-gray)] mb-4">${escape(tier.description)}</p> <ul class="features-list space-y-3 mb-6 svelte-18yotmu">${each(tier.features, (feature) => {
      return `<li class="flex items-start gap-2 text-sm svelte-18yotmu"><svg class="${"w-5 h-5 " + escape(colors.text, true) + " flex-shrink-0 mt-0.5 svelte-18yotmu"}" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-[var(--color-night)]">${escape(feature)}</span> </li>`;
    })}</ul> <button class="${"w-full py-3 rounded-xl font-semibold transition-all " + escape(
      tier.popular ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg" : "bg-white border-2 " + colors.border + " " + colors.text + " hover:" + colors.bg,
      true
    ) + " svelte-18yotmu"}">${escape(tier.popular ? "Get Started" : "Choose Plan")}</button> </div>`;
  })}</div>  <div class="info-banner mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 max-w-4xl mx-auto" data-svelte-h="svelte-1nvwzpt"><div class="flex items-start gap-4"><svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"></circle><path d="M12 16v-4M12 8h.01" stroke-width="2" stroke-linecap="round"></path></svg> <div class="flex-1"><h4 class="font-bold text-[var(--color-night)] mb-2">How Subscription Works</h4> <ul class="text-sm text-[var(--color-gray)] space-y-1"><li>• Prices vary by operator and location – check coverage to see exact rates</li> <li>• Cancel or change frequency anytime with 7 days notice</li> <li>• Automatic recurring payments via mobile money or card</li> <li>• Track your pickups in real-time via the EcoMint app</li></ul></div></div></div> </div>`;
});
const AudienceChooser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-12 bg-[var(--color-fog)]" data-svelte-h="svelte-1lr2dhv"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-8">Choose Your Path</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><a href="/users" class="group bg-white p-8 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m a User</h3> <p class="text-[var(--color-gray)]">Schedule pickups and earn rewards</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Download App
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a> <a href="/operators" class="group bg-white p-8 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m an Operator</h3> <p class="text-[var(--color-gray)]">Manage routes and grow revenue</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Start Free Trial
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a> <a href="/agents" class="group bg-white p-8 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m an Agent</h3> <p class="text-[var(--color-gray)]">Collect smarter and earn more</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Get Agent App
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a></div></div></section>`;
});
const DemoPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-16 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-ma7frh"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">See How It Works</h2> <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">Watch a quick demo of how EcoMint connects users, agents, and operators for seamless waste collection</p></div> <div class="relative max-w-4xl mx-auto"><div class="aspect-video bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] rounded-2xl border-4 border-[var(--color-emerald)] overflow-hidden"><div class="w-full h-full flex items-center justify-center relative"><div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"><button type="button" class="w-20 h-20 bg-[var(--color-emerald)] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[var(--color-emerald)] focus:ring-opacity-50"${add_attribute("aria-label", "Play demo", 0)}>${`<svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`}</button></div> <div class="grid grid-cols-3 gap-4 p-8 w-full h-full items-center" data-svelte-h="svelte-1b6w237"><div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <p class="text-sm font-medium">User Books</p></div> <div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <p class="text-sm font-medium">Agent Collects</p></div> <div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <p class="text-sm font-medium">QR Payment</p></div></div></div></div> <p class="text-center text-sm text-[var(--color-gray)] mt-4" data-svelte-h="svelte-5djay7">30-second demo showing the complete pickup flow</p></div></div></section>`;
});
const CoverageMapPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[var(--color-fog)] p-8 rounded-xl" data-svelte-h="svelte-1eltkat"><div class="text-center mb-6"><h3 class="text-2xl font-bold text-[var(--color-night)] mb-2">Coverage Areas</h3> <p class="text-[var(--color-gray)]">Currently serving major cities across Nigeria</p></div> <div class="aspect-video bg-white rounded-lg border-2 border-gray-200 p-8 flex items-center justify-center"><div class="text-center space-y-6"><svg class="w-24 h-24 mx-auto text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"><div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Lagos</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div> <div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Abuja</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div> <div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Port Harcourt</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1u4onxi_START -->${$$result.title = `<title>EcoMint | Verified Operators. Flexible Waste Collection Subscriptions.</title>`, ""}<meta name="description" content="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators in Lagos, Abuja, and Port Harcourt. Check your area coverage instantly."><meta name="keywords" content="waste collection subscription, verified operators, weekly pickup, waste management, nigeria, lagos, abuja, port harcourt, recurring waste service"><meta property="og:title" content="EcoMint | Verified Operators. Flexible Subscriptions."><meta property="og:description" content="Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators. Transparent pricing, reliable service."><meta property="og:type" content="website"><meta property="og:url" content="https://ecomint.example"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="EcoMint | Turn waste into value"><meta name="twitter:description" content="Simple pickups, precise payments. Location-aware waste collection for everyone."><!-- HTML_TAG_START -->${`
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
  `}<!-- HTML_TAG_END --><!-- HEAD_svelte-1u4onxi_END -->`, ""} ${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Verified Operators. Flexible Subscriptions.",
      subtitle: "Subscribe to weekly, bi-weekly, or tri-weekly waste collection from verified operators in your area. Transparent pricing, reliable service."
    },
    {},
    {}
  )}  <section id="coverage" class="py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${validate_component(CoverageChecker, "CoverageChecker").$$render($$result, {}, {}, {})}</div></section>  <section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${validate_component(SubscriptionTiers, "SubscriptionTiers").$$render($$result, {}, {}, {})}</div></section> ${validate_component(AudienceChooser, "AudienceChooser").$$render($$result, {}, {}, {})} <section class="py-16 bg-white" data-svelte-h="svelte-16jyr6p"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">The Problem &amp; Opportunity</h2> <p class="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">Waste collection in cities is inefficient, leading to low revenue for collectors and payment leakage for operators.
        EcoMint brings transparency, efficiency, and verified payments to every pickup.</p></div></div></section> <section class="py-16 bg-[var(--color-fog)]" data-svelte-h="svelte-1jg9ngc"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">How EcoMint Solves It</h2> <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto mb-12">Three powerful pillars working together to transform waste collection</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Secure Payments</h3> <p class="text-[var(--color-gray)]">Eco QR ensures every transaction is verified, reducing payment leakage and building trust</p> <a href="/learning" class="inline-flex items-center text-[var(--color-emerald)] font-medium">Learn more
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Smart Logistics</h3> <p class="text-[var(--color-gray)]">Intelligent routing and agent management optimizes coverage and reduces response times</p> <a href="/operators" class="inline-flex items-center text-[var(--color-emerald)] font-medium">For Operators
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Data &amp; Rewards</h3> <p class="text-[var(--color-gray)]">Track environmental impact and earn rewards while building sustainable communities</p> <a href="/users" class="inline-flex items-center text-[var(--color-emerald)] font-medium">For Users
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section> ${validate_component(DemoPlayer, "DemoPlayer").$$render($$result, {}, {}, {})} <section class="py-16 bg-[var(--color-fog)]"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1vhfhz4"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Built for Everyone</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1mg5h67">For Users</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "60-Second Booking",
      description: "Schedule a pickup in less than a minute with our simple interface"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Transparent Pricing",
      description: "Know exactly what you'll pay before confirming your pickup"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Earn Rewards",
      description: "Get points for every pickup that can be redeemed for discounts"
    },
    {},
    {}
  )}</div> <div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1lsxlzs">For Operators</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Revenue Management",
      description: "Real-time settlement tracking and transparent revenue reporting",
      icon: "payment"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Agent Assignment",
      description: "Efficiently manage and assign agents across your coverage area",
      icon: "route"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Coverage Control",
      description: "Define and expand your service zones with precision mapping"
    },
    {},
    {}
  )}</div> <div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1pzv87z">For Agents</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Better Earnings",
      description: "Verified payments and bonuses for consistent performance"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Smart Routes",
      description: "Optimized pickup routes save time and increase efficiency"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Easy QR Scanning",
      description: "Quick payment verification with secure Eco QR technology"
    },
    {},
    {}
  )}</div></div></div></section> <section class="py-16 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-nr7o8d"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Trusted by Communities</h2> <p class="text-lg text-[var(--color-gray)]">Making an impact across Nigeria</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-svelte-h="svelte-1gvv72f"><div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">10,000+</p> <p class="text-lg text-[var(--color-gray)]">Pickups Completed</p></div> <div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">500+</p> <p class="text-lg text-[var(--color-gray)]">Active Agents</p></div> <div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">2,500</p> <p class="text-lg text-[var(--color-gray)]">Tons Recycled</p></div></div> ${validate_component(CoverageMapPlaceholder, "CoverageMapPlaceholder").$$render($$result, {}, {}, {})}</div></section> <section class="py-16 bg-[var(--color-fog)]"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1mjp46q"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Learn How It Works</h2> <p class="text-lg text-[var(--color-gray)]">Explore our guides and documentation</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "Getting Started with EcoMint",
      summary: "A comprehensive guide to understanding how EcoMint works and getting set up.",
      category: "Getting Started",
      readTime: "8 min",
      href: "/learning"
    },
    {},
    {}
  )} ${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "How to Request Your First Pickup",
      summary: "Step-by-step instructions for users to schedule and complete their first waste pickup.",
      category: "For Users",
      readTime: "5 min",
      href: "/learning"
    },
    {},
    {}
  )} ${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "Understanding Eco QR Payments",
      summary: "Learn how our secure payment system works and why it's better than traditional methods.",
      category: "Concept",
      readTime: "6 min",
      href: "/learning"
    },
    {},
    {}
  )}</div> <div class="text-center" data-svelte-h="svelte-1l95fgn"><a href="/learning" class="inline-flex items-center px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">Visit Learning Hub
        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section> <section class="py-16 bg-white" data-svelte-h="svelte-lxwx4a"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Frequently Asked Questions</h2></div> <div class="max-w-3xl mx-auto space-y-4"><details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">How does EcoMint pricing work?</summary> <p class="mt-4 text-[var(--color-gray)]">Pricing is transparent and varies by location and waste type. You&#39;ll see the exact cost before confirming your pickup. No hidden fees.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">Is my area covered?</summary> <p class="mt-4 text-[var(--color-gray)]">We currently serve Lagos, Abuja, and Port Harcourt. Check our coverage map above or download the app to see if we&#39;re in your neighborhood.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">How do I become an operator?</summary> <p class="mt-4 text-[var(--color-gray)]">Visit our Operators page to start your free trial. You&#39;ll need to verify your business and set up your coverage area before activating agents.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">What is Eco QR?</summary> <p class="mt-4 text-[var(--color-gray)]">Eco QR is our secure payment verification system. It ensures every pickup is properly recorded and paid for, protecting both collectors and customers.</p></details></div></div></section> ${validate_component(CTABanner, "CTABanner").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
