<script>
  export let title;
  export let subtitle;
  export let showCoveragePreview = false;
</script>

<section class="relative text-white overflow-hidden" style="background: var(--bg-hero);">
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <!-- Trust badges -->
        <div class="flex items-center gap-4 flex-wrap">
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-30">
            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Verified Operators Only
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-30">
            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            Flexible Subscriptions
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>

        <p class="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
          {subtitle}
        </p>

        <!-- Key value props -->
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[var(--color-emerald)] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-white text-lg">Check coverage in your area instantly</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[var(--color-emerald)] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-white text-lg">Subscribe to verified operators only</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[var(--color-emerald)] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-white text-lg">Choose weekly, bi-weekly, or tri-weekly pickups</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#coverage"
            class="px-8 py-4 bg-white text-[var(--color-evergreen)] rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-center border-2 border-transparent hover:border-[var(--color-emerald)] text-lg"
          >
            Check Your Area Coverage
          </a>
          <a
            href="/operators"
            class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center"
          >
            Become an Operator
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="relative z-10">
          <!-- Custom SVG illustration showing subscription concept -->
          <svg viewBox="0 0 400 500" class="w-full max-w-md mx-auto">
            <!-- Phone mockup -->
            <rect x="50" y="40" width="300" height="450" rx="30" fill="white" stroke="#10b981" stroke-width="4"/>
            <rect x="70" y="80" width="260" height="380" rx="10" fill="#f0fdf4"/>

            <!-- Coverage map icon -->
            <circle cx="200" cy="160" r="60" fill="#dcfce7" stroke="#10b981" stroke-width="3"/>
            <path d="M 170 150 L 190 170 L 230 130" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Subscription tiers -->
            <rect x="90" y="240" width="220" height="50" rx="8" fill="white" stroke="#10b981" stroke-width="2"/>
            <text x="200" y="270" text-anchor="middle" font-size="16" font-weight="bold" fill="#0d3d2e">Weekly ₦3,500</text>

            <rect x="90" y="305" width="220" height="50" rx="8" fill="white" stroke="#3b82f6" stroke-width="2"/>
            <text x="200" y="335" text-anchor="middle" font-size="16" font-weight="bold" fill="#0d3d2e">Bi-weekly ₦2,200</text>

            <rect x="90" y="370" width="220" height="50" rx="8" fill="white" stroke="#06b6d4" stroke-width="2"/>
            <text x="200" y="400" text-anchor="middle" font-size="16" font-weight="bold" fill="#0d3d2e">Tri-weekly ₦1,500</text>

            <!-- Verification badge -->
            <circle cx="280" cy="100" r="25" fill="#10b981"/>
            <path d="M 270 100 L 277 107 L 290 94" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>
