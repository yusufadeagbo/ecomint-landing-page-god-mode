<script>
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 bg-[var(--color-evergreen)] text-white">
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-2">
          <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="var(--color-emerald)" />
            <path d="M16 8L12 20H20L16 8Z" fill="white" />
          </svg>
          <span class="text-xl font-bold">EcoMint</span>
        </a>
      </div>

      <div class="hidden md:block">
        <div class="ml-10 flex items-center space-x-6">
          <a href="/users" class="hover:text-[var(--color-emerald)] transition-colors duration-200">For Users</a>
          <a href="/operators" class="hover:text-[var(--color-emerald)] transition-colors duration-200">For Operators</a>
          <a href="/agents" class="hover:text-[var(--color-emerald)] transition-colors duration-200">For Agents</a>
          <a href="/learning" class="hover:text-[var(--color-emerald)] transition-colors duration-200">Learning</a>
          <a href="/operators" class="px-4 py-2 bg-[var(--color-emerald)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">Get Started</a>
        </div>
      </div>

      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md hover:bg-[var(--color-emerald)] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
          aria-expanded={mobileMenuOpen}
          on:click={toggleMobileMenu}
        >
          <span class="sr-only">Open main menu</span>
          {#if !mobileMenuOpen}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {:else}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </nav>

  {#if mobileMenuOpen}
    <div class="md:hidden border-t border-[var(--color-emerald)] border-opacity-30">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/users" class="block px-3 py-2 rounded-md hover:bg-[var(--color-emerald)] hover:bg-opacity-20 transition-colors duration-200">For Users</a>
        <a href="/operators" class="block px-3 py-2 rounded-md hover:bg-[var(--color-emerald)] hover:bg-opacity-20 transition-colors duration-200">For Operators</a>
        <a href="/agents" class="block px-3 py-2 rounded-md hover:bg-[var(--color-emerald)] hover:bg-opacity-20 transition-colors duration-200">For Agents</a>
        <a href="/learning" class="block px-3 py-2 rounded-md hover:bg-[var(--color-emerald)] hover:bg-opacity-20 transition-colors duration-200">Learning</a>
        <a href="/operators" class="block mx-3 my-2 px-4 py-2 bg-[var(--color-emerald)] text-white rounded-lg font-medium text-center hover:bg-opacity-90 transition-all duration-200">Get Started</a>
      </div>
    </div>
  {/if}
</header>
