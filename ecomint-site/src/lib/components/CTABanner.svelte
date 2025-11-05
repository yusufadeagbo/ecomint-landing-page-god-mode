<script>
  export let title = "Ready to Get Started?";
  export let description = "Join thousands making waste collection simple and sustainable.";
  export let primaryText = "Download the App";
  export let secondaryText = "For Operators";
  export let primaryLink = "/users";
  export let secondaryLink = "/operators";
</script>

<section class="bg-gradient-to-r from-[var(--color-evergreen)] to-[var(--color-emerald)] text-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold">{title}</h2>
      <p class="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
        {description}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={primaryLink}
          class="px-8 py-3 bg-white text-[var(--color-evergreen)] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center hover:scale-105 transform"
        >
          {primaryText}
        </a>
        <a
          href={secondaryLink}
          class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center"
        >
          {secondaryText}
        </a>
      </div>
    </div>
  </div>
</section>
