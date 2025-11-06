<script>
  let isPlaying = false;

  function togglePlay() {
    isPlaying = !isPlaying;
  }
</script>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">See How It Works</h2>
      <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
        Watch a quick demo of how EcoMint connects users, agents, and operators for seamless waste collection
      </p>
    </div>

    <div class="relative max-w-4xl mx-auto">
      <div class="aspect-video bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] rounded-2xl border-4 border-[var(--color-emerald)] overflow-hidden">
        <div class="w-full h-full flex items-center justify-center relative">
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button
              type="button"
              on:click={togglePlay}
              class="w-20 h-20 bg-[var(--color-emerald)] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[var(--color-emerald)] focus:ring-opacity-50"
              aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
            >
              {#if !isPlaying}
                <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              {:else}
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              {/if}
            </button>
          </div>

          <div class="grid grid-cols-3 gap-4 p-8 w-full h-full items-center">
            <div class="text-center text-white space-y-2 opacity-80">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p class="text-sm font-medium">User Books</p>
            </div>
            <div class="text-center text-white space-y-2 opacity-80">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm font-medium">Agent Collects</p>
            </div>
            <div class="text-center text-white space-y-2 opacity-80">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm font-medium">QR Payment</p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-sm text-[var(--color-gray)] mt-4">
        30-second demo showing the complete pickup flow
      </p>
    </div>
  </div>
</section>
