<script>
  export let showTitle = true;
</script>

<section class="how-it-works bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {#if showTitle}
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">
          How EcoMint Works
        </h2>
        <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
          From coverage check to recurring pickups — transparent, verified, and hassle-free
        </p>
      </div>
    {/if}

    <!-- Step-by-step flow -->
    <div class="relative">
      <!-- Mobile: Vertical layout -->
      <div class="flex flex-col space-y-8 md:hidden">
        <!-- Step 1 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-blue-200">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Check Coverage</h3>
              <p class="text-[var(--color-gray)] mb-4">
                Enter your area to see verified operators offering service in your location
              </p>
              <!-- SVG illustration -->
              <svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto">
                <!-- Search bar -->
                <rect x="20" y="30" width="160" height="35" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
                <circle cx="40" cy="47.5" r="8" fill="#3b82f6"/>
                <line x1="45" y1="52" x2="50" y2="57" stroke="#3b82f6" stroke-width="2"/>

                <!-- Map pins -->
                <g transform="translate(50, 80)">
                  <circle cx="0" cy="0" r="15" fill="#10b981" opacity="0.3"/>
                  <path d="M 0 -12 L -4 2 L 4 2 Z" fill="#10b981"/>
                  <circle cx="0" cy="-5" r="3" fill="white"/>
                </g>
                <g transform="translate(100, 85)">
                  <circle cx="0" cy="0" r="15" fill="#10b981" opacity="0.3"/>
                  <path d="M 0 -12 L -4 2 L 4 2 Z" fill="#10b981"/>
                  <circle cx="0" cy="-5" r="3" fill="white"/>
                </g>
                <g transform="translate(150, 80)">
                  <circle cx="0" cy="0" r="15" fill="#10b981" opacity="0.3"/>
                  <path d="M 0 -12 L -4 2 L 4 2 Z" fill="#10b981"/>
                  <circle cx="0" cy="-5" r="3" fill="white"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-emerald-200">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Choose Plan</h3>
              <p class="text-[var(--color-gray)] mb-4">
                Select weekly, bi-weekly, or tri-weekly pickups based on your waste generation
              </p>
              <!-- SVG illustration -->
              <svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto">
                <!-- Three tier cards -->
                <g transform="translate(20, 20)">
                  <rect width="45" height="70" rx="6" fill="#dcfce7" stroke="#10b981" stroke-width="2"/>
                  <text x="22.5" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Weekly</text>
                  <text x="22.5" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d3d2e">₦3.5k</text>
                  <!-- Checkmarks -->
                  <circle cx="15" cy="58" r="3" fill="#10b981"/>
                  <circle cx="15" cy="68" r="3" fill="#10b981"/>
                  <circle cx="15" cy="78" r="3" fill="#10b981"/>
                </g>
                <g transform="translate(77, 20)">
                  <rect width="45" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
                  <text x="22.5" y="25" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Bi-weekly</text>
                  <text x="22.5" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d3d2e">₦2.2k</text>
                  <circle cx="15" cy="58" r="3" fill="#3b82f6"/>
                  <circle cx="15" cy="68" r="3" fill="#3b82f6"/>
                </g>
                <g transform="translate(135, 20)">
                  <rect width="45" height="70" rx="6" fill="#cffafe" stroke="#06b6d4" stroke-width="2"/>
                  <text x="22.5" y="25" text-anchor="middle" font-size="9" font-weight="bold" fill="#155e75">Tri-weekly</text>
                  <text x="22.5" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d3d2e">₦1.5k</text>
                  <circle cx="15" cy="58" r="3" fill="#06b6d4"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-purple-200">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Subscribe & Track</h3>
              <p class="text-[var(--color-gray)] mb-4">
                Automatic recurring payments and real-time pickup tracking via mobile app
              </p>
              <!-- SVG illustration -->
              <svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto">
                <!-- Phone -->
                <rect x="60" y="10" width="80" height="100" rx="8" fill="white" stroke="#9333ea" stroke-width="2"/>
                <rect x="70" y="25" width="60" height="70" rx="4" fill="#faf5ff"/>

                <!-- Calendar icon -->
                <rect x="80" y="35" width="40" height="30" rx="3" fill="#e9d5ff" stroke="#9333ea" stroke-width="1"/>
                <rect x="80" y="35" width="40" height="8" rx="3" fill="#9333ea"/>
                <circle cx="90" cy="50" r="2" fill="#9333ea"/>
                <circle cx="100" cy="50" r="2" fill="#9333ea"/>
                <circle cx="110" cy="50" r="2" fill="#9333ea"/>
                <circle cx="90" cy="57" r="2" fill="#9333ea"/>

                <!-- Checkmark -->
                <circle cx="100" cy="80" r="12" fill="#10b981"/>
                <path d="M 95 80 L 98 83 L 105 76" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-amber-200">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[var(--color-night)] mb-2">Verified Collection</h3>
              <p class="text-[var(--color-gray)] mb-4">
                Verified agents collect your waste on schedule — payment confirmed via Eco QR
              </p>
              <!-- SVG illustration -->
              <svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto">
                <!-- Agent with QR scanner -->
                <g transform="translate(70, 30)">
                  <circle cx="0" cy="0" r="18" fill="#f59e0b"/>
                  <circle cx="0" cy="0" r="15" fill="#fef3c7"/>
                  <circle cx="-4" cy="-2" r="2" fill="#78350f"/>
                  <circle cx="4" cy="-2" r="2" fill="#78350f"/>
                  <path d="M -5 3 Q 0 6 5 3" stroke="#78350f" stroke-width="1.5" fill="none"/>
                </g>

                <!-- QR Code -->
                <rect x="110" y="25" width="50" height="50" rx="4" fill="white" stroke="#f59e0b" stroke-width="2"/>
                <rect x="118" y="33" width="12" height="12" fill="#0d3d2e"/>
                <rect x="133" y="33" width="12" height="12" fill="#0d3d2e"/>
                <rect x="118" y="48" width="12" height="12" fill="#0d3d2e"/>
                <rect x="133" y="48" width="12" height="12" fill="#0d3d2e"/>
                <rect x="125" y="40" width="8" height="8" fill="#10b981"/>

                <!-- Success indicator -->
                <circle cx="135" cy="90" r="10" fill="#10b981"/>
                <path d="M 130 90 L 133 93 L 140 86" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Horizontal layout with connecting lines -->
      <div class="hidden md:grid md:grid-cols-4 gap-6 relative">
        <!-- Connecting line -->
        <div class="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-emerald-300 via-purple-300 to-amber-300" style="top: 48px;"></div>

        <!-- Step 1 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-blue-200 relative z-10">
          <div class="text-center">
            <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
              1
            </div>
            <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Check Coverage</h3>
            <p class="text-sm text-[var(--color-gray)] mb-4">
              Enter your area to see verified operators
            </p>
            <svg viewBox="0 0 200 120" class="w-full">
              <rect x="20" y="30" width="160" height="35" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
              <circle cx="40" cy="47.5" r="8" fill="#3b82f6"/>
              <line x1="45" y1="52" x2="50" y2="57" stroke="#3b82f6" stroke-width="2"/>
              <g transform="translate(50, 80)">
                <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.3"/>
                <path d="M 0 -10 L -3 2 L 3 2 Z" fill="#10b981"/>
                <circle cx="0" cy="-4" r="2" fill="white"/>
              </g>
              <g transform="translate(100, 85)">
                <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.3"/>
                <path d="M 0 -10 L -3 2 L 3 2 Z" fill="#10b981"/>
                <circle cx="0" cy="-4" r="2" fill="white"/>
              </g>
              <g transform="translate(150, 80)">
                <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.3"/>
                <path d="M 0 -10 L -3 2 L 3 2 Z" fill="#10b981"/>
                <circle cx="0" cy="-4" r="2" fill="white"/>
              </g>
            </svg>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-emerald-200 relative z-10">
          <div class="text-center">
            <div class="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
              2
            </div>
            <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Choose Plan</h3>
            <p class="text-sm text-[var(--color-gray)] mb-4">
              Select your pickup frequency
            </p>
            <svg viewBox="0 0 200 120" class="w-full">
              <g transform="translate(25, 20)">
                <rect width="40" height="60" rx="6" fill="#dcfce7" stroke="#10b981" stroke-width="2"/>
                <text x="20" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">Weekly</text>
                <text x="20" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d3d2e">₦3.5k</text>
                <circle cx="12" cy="50" r="2.5" fill="#10b981"/>
                <circle cx="12" cy="58" r="2.5" fill="#10b981"/>
              </g>
              <g transform="translate(80, 20)">
                <rect width="40" height="60" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
                <text x="20" y="22" text-anchor="middle" font-size="8" font-weight="bold" fill="#1e40af">Bi-week</text>
                <text x="20" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d3d2e">₦2.2k</text>
                <circle cx="12" cy="50" r="2.5" fill="#3b82f6"/>
                <circle cx="12" cy="58" r="2.5" fill="#3b82f6"/>
              </g>
              <g transform="translate(135, 20)">
                <rect width="40" height="60" rx="6" fill="#cffafe" stroke="#06b6d4" stroke-width="2"/>
                <text x="20" y="22" text-anchor="middle" font-size="8" font-weight="bold" fill="#155e75">Tri-week</text>
                <text x="20" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d3d2e">₦1.5k</text>
                <circle cx="12" cy="50" r="2.5" fill="#06b6d4"/>
              </g>
            </svg>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-purple-200 relative z-10">
          <div class="text-center">
            <div class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
              3
            </div>
            <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Subscribe</h3>
            <p class="text-sm text-[var(--color-gray)] mb-4">
              Auto-pay and track pickups
            </p>
            <svg viewBox="0 0 200 120" class="w-full">
              <rect x="60" y="15" width="80" height="90" rx="8" fill="white" stroke="#9333ea" stroke-width="2"/>
              <rect x="70" y="28" width="60" height="64" rx="4" fill="#faf5ff"/>
              <rect x="80" y="38" width="40" height="25" rx="3" fill="#e9d5ff" stroke="#9333ea" stroke-width="1"/>
              <rect x="80" y="38" width="40" height="7" rx="3" fill="#9333ea"/>
              <circle cx="90" cy="50" r="1.5" fill="#9333ea"/>
              <circle cx="100" cy="50" r="1.5" fill="#9333ea"/>
              <circle cx="110" cy="50" r="1.5" fill="#9333ea"/>
              <circle cx="90" cy="56" r="1.5" fill="#9333ea"/>
              <circle cx="100" cy="74" r="10" fill="#10b981"/>
              <path d="M 95 74 L 98 77 L 105 70" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="step-card bg-white rounded-2xl p-6 border-2 border-amber-200 relative z-10">
          <div class="text-center">
            <div class="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
              4
            </div>
            <h3 class="text-lg font-bold text-[var(--color-night)] mb-2">Collection</h3>
            <p class="text-sm text-[var(--color-gray)] mb-4">
              Verified agents collect
            </p>
            <svg viewBox="0 0 200 120" class="w-full">
              <g transform="translate(70, 35)">
                <circle cx="0" cy="0" r="16" fill="#f59e0b"/>
                <circle cx="0" cy="0" r="13" fill="#fef3c7"/>
                <circle cx="-3" cy="-2" r="1.5" fill="#78350f"/>
                <circle cx="3" cy="-2" r="1.5" fill="#78350f"/>
                <path d="M -4 2 Q 0 5 4 2" stroke="#78350f" stroke-width="1.2" fill="none"/>
              </g>
              <rect x="110" y="25" width="45" height="45" rx="4" fill="white" stroke="#f59e0b" stroke-width="2"/>
              <rect x="117" y="32" width="10" height="10" fill="#0d3d2e"/>
              <rect x="130" y="32" width="10" height="10" fill="#0d3d2e"/>
              <rect x="117" y="45" width="10" height="10" fill="#0d3d2e"/>
              <rect x="130" y="45" width="10" height="10" fill="#0d3d2e"/>
              <rect x="123" y="38" width="7" height="7" fill="#10b981"/>
              <circle cx="132" y="85" r="9" fill="#10b981"/>
              <path d="M 127 85 L 130 88 L 137 81" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust indicators -->
    <div class="mt-16 bg-white rounded-2xl border-2 border-blue-200 p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--color-night)] mb-2">100% Verified</h4>
          <p class="text-sm text-[var(--color-gray)]">All operators background-checked and licensed</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--color-night)] mb-2">Secure Payments</h4>
          <p class="text-sm text-[var(--color-gray)]">Encrypted transactions with Eco QR verification</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--color-night)] mb-2">Cancel Anytime</h4>
          <p class="text-sm text-[var(--color-gray)]">Flexible subscriptions with 7-day notice period</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .step-card {
    transition: transform 200ms ease, border-color 200ms ease;
  }

  .step-card:hover {
    transform: translateY(-2px);
  }
</style>
