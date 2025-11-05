<script>
  export let title;
  export let subtitle;
  export let primaryCTA = "Download the App";
  export let secondaryCTA = "For Operators";
  export let primaryLink = "#download";
  export let secondaryLink = "/operators";
</script>

<section class="relative bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] text-white overflow-hidden">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-20 left-10 w-72 h-72 bg-[var(--color-emerald)] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-[var(--color-emerald)] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-xl">
          {subtitle}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href={primaryLink}
            class="px-6 py-3 bg-[var(--color-emerald)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-center hover:scale-105 transform"
          >
            {primaryCTA}
          </a>
          <a
            href={secondaryLink}
            class="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center"
          >
            {secondaryCTA}
          </a>
        </div>
        <p class="text-sm text-gray-300">
          Live in Lagos, Abuja, Port Harcourt
          <a href="#coverage" class="text-[var(--color-emerald)] hover:underline ml-1">Check coverage</a>
        </p>
      </div>

      <div class="relative">
        <div class="relative z-10 flex items-center justify-center">
          <div class="w-72 h-96 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div class="w-full h-full bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-evergreen)] rounded-xl flex items-center justify-center">
              <div class="text-center space-y-4">
                <svg class="h-20 w-20 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-white font-semibold">Mobile App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
