<script>
  export let title;
  export let summary;
  export let readTime = '5 min';
  export let category = 'Guide';
  export let href = '#';
</script>

<a
  {href}
  class="group block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[var(--color-emerald)]"
>
  <div class="flex items-start justify-between mb-3">
    <span class="inline-block px-3 py-1 text-xs font-semibold text-[var(--color-emerald)] bg-[var(--color-emerald)] bg-opacity-10 rounded-full">
      {category}
    </span>
    <span class="text-sm text-[var(--color-gray)]">{readTime} read</span>
  </div>
  <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2 group-hover:text-[var(--color-emerald)] transition-colors duration-200">
    {title}
  </h3>
  <p class="text-[var(--color-gray)] text-sm">
    {summary}
  </p>
  <div class="mt-4 flex items-center text-[var(--color-emerald)] text-sm font-medium">
    Read article
    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</a>
