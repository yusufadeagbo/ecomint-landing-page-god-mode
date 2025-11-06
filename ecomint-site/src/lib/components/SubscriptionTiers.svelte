<script>
  export let showTitle = true;
  export let layout = 'grid'; // 'grid' or 'comparison'

  const tiers = [
    {
      id: 'weekly',
      name: 'Weekly',
      frequency: 'Every week',
      pickups: 4,
      priceRange: '₦3,000 - ₦3,800',
      color: 'emerald',
      popular: true,
      description: 'Perfect for busy households and commercial spaces',
      features: [
        '4 pickups per month',
        'Priority scheduling',
        'Same-day emergency pickup',
        'Flexible bag sizes'
      ],
      calendarPattern: [1, 1, 1, 1] // 4 weeks, all active
    },
    {
      id: 'biweekly',
      name: 'Bi-weekly',
      frequency: 'Every 2 weeks',
      pickups: 2,
      priceRange: '₦1,900 - ₦2,400',
      color: 'blue',
      popular: false,
      description: 'Ideal for small families and moderate waste generation',
      features: [
        '2 pickups per month',
        'Standard scheduling',
        'SMS reminders',
        'Medium bag sizes'
      ],
      calendarPattern: [1, 0, 1, 0] // 4 weeks, alternating
    },
    {
      id: 'triweekly',
      name: 'Tri-weekly',
      frequency: 'Every 3 weeks',
      pickups: 1,
      priceRange: '₦1,500 - ₦1,800',
      color: 'cyan',
      popular: false,
      description: 'Budget-friendly for minimal waste or seasonal use',
      features: [
        '1-2 pickups per month',
        'Flexible dates',
        'Email notifications',
        'Standard bag sizes'
      ],
      calendarPattern: [1, 0, 0, 0] // 4 weeks, once per cycle
    }
  ];

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      borderHover: 'hover:border-emerald-400',
      accent: 'bg-emerald-600',
      text: 'text-emerald-900',
      badge: 'bg-emerald-600 text-white'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      borderHover: 'hover:border-blue-400',
      accent: 'bg-blue-600',
      text: 'text-blue-900',
      badge: 'bg-blue-600 text-white'
    },
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      borderHover: 'hover:border-cyan-400',
      accent: 'bg-cyan-600',
      text: 'text-cyan-900',
      badge: 'bg-cyan-600 text-white'
    }
  };
</script>

<div class="subscription-tiers">
  {#if showTitle}
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-3">
        Choose Your Pickup Frequency
      </h2>
      <p class="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
        Flexible subscription plans tailored to your waste generation. All plans include verified operators, secure payments, and transparent tracking.
      </p>
    </div>
  {/if}

  <div class="tiers-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {#each tiers as tier}
      {@const colors = colorClasses[tier.color]}
      <div
        class="tier-card {colors.bg} border-2 {colors.border} {colors.borderHover} rounded-2xl p-6 transition-all relative"
        class:popular={tier.popular}
      >
        {#if tier.popular}
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-bold rounded-full shadow-md">
              Most Popular
            </span>
          </div>
        {/if}

        <div class="tier-header mb-6">
          <h3 class="text-2xl font-bold {colors.text} mb-1">{tier.name}</h3>
          <p class="text-sm text-[var(--color-gray)] mb-4">{tier.frequency}</p>

          <!-- Calendar Visualization -->
          <div class="calendar-visual mb-4">
            <div class="text-xs font-semibold text-[var(--color-gray)] mb-2">Monthly Schedule</div>
            <div class="flex gap-2">
              {#each tier.calendarPattern as active, index}
                <div class="flex-1 flex flex-col items-center">
                  <div
                    class="w-full h-12 rounded-lg border-2 transition-all"
                    class:bg-gradient={active}
                    class:border-active={active}
                    class:bg-gray-100={!active}
                    class:border-gray-300={!active}
                    style={active ? `background: linear-gradient(135deg, var(--tier-color-light), var(--tier-color-dark)); border-color: var(--tier-color-dark);` : ''}
                  >
                    {#if active}
                      <div class="w-full h-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    {/if}
                  </div>
                  <span class="text-xs text-[var(--color-gray)] mt-1">Week {index + 1}</span>
                </div>
              {/each}
            </div>
          </div>

          <div class="price-display text-center py-4 border-y border-current/10">
            <div class="text-3xl font-bold {colors.text}">{tier.priceRange}</div>
            <div class="text-sm text-[var(--color-gray)] mt-1">per month</div>
          </div>
        </div>

        <p class="text-sm text-[var(--color-gray)] mb-4">{tier.description}</p>

        <ul class="features-list space-y-3 mb-6">
          {#each tier.features as feature}
            <li class="flex items-start gap-2 text-sm">
              <svg class="w-5 h-5 {colors.text} flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-[var(--color-night)]">{feature}</span>
            </li>
          {/each}
        </ul>

        <button
          class="w-full py-3 rounded-xl font-semibold transition-all {tier.popular ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg' : 'bg-white border-2 ' + colors.border + ' ' + colors.text + ' hover:' + colors.bg}"
        >
          {tier.popular ? 'Get Started' : 'Choose Plan'}
        </button>
      </div>
    {/each}
  </div>

  <!-- Info Banner -->
  <div class="info-banner mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
    <div class="flex items-start gap-4">
      <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="2"/>
        <path d="M12 16v-4M12 8h.01" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <div class="flex-1">
        <h4 class="font-bold text-[var(--color-night)] mb-2">How Subscription Works</h4>
        <ul class="text-sm text-[var(--color-gray)] space-y-1">
          <li>• Prices vary by operator and location – check coverage to see exact rates</li>
          <li>• Cancel or change frequency anytime with 7 days notice</li>
          <li>• Automatic recurring payments via mobile money or card</li>
          <li>• Track your pickups in real-time via the EcoMint app</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .subscription-tiers {
    width: 100%;
  }

  .tier-card {
    position: relative;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .tier-card:hover {
    transform: translateY(-4px);
  }

  .tier-card.popular {
    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.15);
  }

  .features-list li {
    animation: fadeIn 300ms ease forwards;
    opacity: 0;
  }

  .features-list li:nth-child(1) { animation-delay: 50ms; }
  .features-list li:nth-child(2) { animation-delay: 100ms; }
  .features-list li:nth-child(3) { animation-delay: 150ms; }
  .features-list li:nth-child(4) { animation-delay: 200ms; }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .features-list li {
      animation: none;
      opacity: 1;
    }

    .tier-card:hover {
      transform: none;
    }
  }
</style>
