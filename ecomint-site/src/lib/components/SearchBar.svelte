<script>
  export let placeholder = 'Search for guides, articles, and help...';
  export let onSearch = () => {};

  let searchQuery = '';

  function handleSearch() {
    onSearch(searchQuery);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
</script>

<div class="relative">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg class="h-5 w-5 text-[var(--color-gray)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="text"
    bind:value={searchQuery}
    on:keypress={handleKeyPress}
    class="block w-full pl-10 pr-12 py-3 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none transition-all duration-200"
    placeholder={placeholder}
    aria-label="Search"
  />
  <button
    type="button"
    on:click={handleSearch}
    class="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-emerald)] hover:text-[var(--color-evergreen)] transition-colors duration-200"
    aria-label="Submit search"
  >
    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
