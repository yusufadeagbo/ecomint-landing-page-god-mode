import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Hero } from "../../../chunks/Hero.js";
import { F as FeatureCard, C as CTABanner } from "../../../chunks/CTABanner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ygycx3_START -->${$$result.title = `<title>EcoMint for Users | Schedule pickups in 60 seconds</title>`, ""}<meta name="description" content="Download EcoMint to schedule waste pickups, pay securely, and earn rewards. Simple, transparent, sustainable."><!-- HEAD_svelte-1ygycx3_END -->`, ""} ${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Schedule a pickup in 60 seconds",
      subtitle: "Book waste collection, track your agent in real-time, and earn rewards for every pickup. It's waste management made simple.",
      primaryCTA: "Download the App",
      secondaryCTA: "See How It Works",
      primaryLink: "#download",
      secondaryLink: "#how-it-works"
    },
    {},
    {}
  )} <section id="how-it-works" class="py-16 bg-white" data-svelte-h="svelte-1r0yfd4"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">How It Works</h2> <p class="text-lg text-[var(--color-gray)]">Three simple steps to cleaner, greener living</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Request Pickup</h3> <p class="text-[var(--color-gray)]">Open the app, select your location and waste type, and schedule a convenient pickup time. Get instant pricing.</p></div> <div class="text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Agent Collects</h3> <p class="text-[var(--color-gray)]">Track your assigned agent in real-time. They&#39;ll arrive at your scheduled time and scan the Eco QR code to verify the pickup.</p></div> <div class="text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Pay &amp; Earn Rewards</h3> <p class="text-[var(--color-gray)]">Secure payment is processed via Eco QR. Earn points for every pickup that can be redeemed for discounts on future collections.</p></div></div></div></section> <section class="py-16 bg-[var(--color-fog)]"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-v0x4jm"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Why Choose EcoMint</h2></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Convenience",
      description: "Book pickups anytime, anywhere. Our app makes waste collection as easy as ordering food."
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Transparent Pricing",
      description: "See exact costs upfront. No hidden fees, no surprises. Pay what you see."
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Real-Time Tracking",
      description: "Know exactly when your agent will arrive. Track them on the map in real-time."
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Secure Payments",
      description: "Eco QR technology ensures every transaction is verified and secure."
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Earn Rewards",
      description: "Get points for consistent pickups. Redeem for discounts and special offers."
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Environmental Impact",
      description: "Track how much waste you've diverted from landfills and your carbon savings."
    },
    {},
    {}
  )}</div></div></section> <section id="download" class="py-16 bg-white" data-svelte-h="svelte-nh2poj"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Download EcoMint Today</h2> <p class="text-lg text-[var(--color-gray)] mb-8">Available on iOS, Android, and Web</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"><a href="#" class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg>
          App Store</a> <a href="#" class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.55.68.55 1.19s-.21.92-.55 1.19l-2.29 1.45-2.62-2.62 2.62-2.62 2.29 1.45zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"></path></svg>
          Google Play</a> <a href="#" class="inline-flex items-center px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"><svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          Web App</a></div></div> <div class="bg-[var(--color-fog)] p-8 rounded-xl max-w-2xl mx-auto"><h3 class="text-xl font-semibold text-[var(--color-night)] mb-4">Coverage &amp; Pricing</h3> <p class="text-[var(--color-gray)] mb-4">EcoMint is currently available in Lagos, Abuja, and Port Harcourt. Pricing varies by location and waste type.</p> <div class="space-y-2"><p class="text-[var(--color-gray)]">Residential pickup starts from <span class="font-semibold text-[var(--color-night)]">₦500</span></p> <p class="text-[var(--color-gray)]">Business pickup starts from <span class="font-semibold text-[var(--color-night)]">₦1,500</span></p></div></div></div></section> <section class="py-16 bg-[var(--color-fog)]" data-svelte-h="svelte-k61okg"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">What Users Are Saying</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-6 rounded-xl shadow-md"><div class="flex items-center mb-4"><div class="flex text-[var(--color-gold)]"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div></div> <p class="text-[var(--color-gray)] mb-4">So much easier than calling multiple collectors. The app is simple and the agents are always on time!</p> <p class="font-semibold text-[var(--color-night)]">Amaka O.</p> <p class="text-sm text-[var(--color-gray)]">Lagos</p></div> <div class="bg-white p-6 rounded-xl shadow-md"><div class="flex items-center mb-4"><div class="flex text-[var(--color-gold)]"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div></div> <p class="text-[var(--color-gray)] mb-4">I love the rewards system. Already redeemed enough points for a free pickup!</p> <p class="font-semibold text-[var(--color-night)]">Chidi M.</p> <p class="text-sm text-[var(--color-gray)]">Abuja</p></div> <div class="bg-white p-6 rounded-xl shadow-md"><div class="flex items-center mb-4"><div class="flex text-[var(--color-gold)]"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div></div> <p class="text-[var(--color-gray)] mb-4">Transparent pricing and reliable service. No more haggling with collectors!</p> <p class="font-semibold text-[var(--color-night)]">Fatima A.</p> <p class="text-sm text-[var(--color-gray)]">Port Harcourt</p></div></div></div></section> ${validate_component(CTABanner, "CTABanner").$$render(
    $$result,
    {
      title: "Ready to simplify waste collection?",
      description: "Join thousands of users who've made the switch to EcoMint.",
      primaryText: "Download Now",
      primaryLink: "#download"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
