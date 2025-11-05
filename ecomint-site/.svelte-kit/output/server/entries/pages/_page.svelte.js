import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { H as Hero, F as FeatureCard, C as CTABanner } from "../../chunks/CTABanner.js";
import { L as LearningArticle } from "../../chunks/LearningArticle.js";
const AudienceChooser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-12 bg-[var(--color-fog)]" data-svelte-h="svelte-imqd4s"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-8">Choose Your Path</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><a href="/users" class="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m a User</h3> <p class="text-[var(--color-gray)]">Schedule pickups and earn rewards</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Download App
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a> <a href="/operators" class="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m an Operator</h3> <p class="text-[var(--color-gray)]">Manage routes and grow revenue</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Start Free Trial
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a> <a href="/agents" class="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[var(--color-emerald)] transform hover:-translate-y-1"><div class="flex flex-col items-center text-center space-y-4"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-300"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">I&#39;m an Agent</h3> <p class="text-[var(--color-gray)]">Collect smarter and earn more</p> <span class="inline-flex items-center text-[var(--color-emerald)] font-medium">Get Agent App
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></a></div></div></section>`;
});
const DemoPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-16 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-ma7frh"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">See How It Works</h2> <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">Watch a quick demo of how EcoMint connects users, agents, and operators for seamless waste collection</p></div> <div class="relative max-w-4xl mx-auto"><div class="aspect-video bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] rounded-2xl shadow-2xl overflow-hidden"><div class="w-full h-full flex items-center justify-center relative"><div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"><button type="button" class="w-20 h-20 bg-[var(--color-emerald)] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[var(--color-emerald)] focus:ring-opacity-50"${add_attribute("aria-label", "Play demo", 0)}>${`<svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`}</button></div> <div class="grid grid-cols-3 gap-4 p-8 w-full h-full items-center" data-svelte-h="svelte-1b6w237"><div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <p class="text-sm font-medium">User Books</p></div> <div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <p class="text-sm font-medium">Agent Collects</p></div> <div class="text-center text-white space-y-2 opacity-80"><div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-2"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <p class="text-sm font-medium">QR Payment</p></div></div></div></div> <p class="text-center text-sm text-[var(--color-gray)] mt-4" data-svelte-h="svelte-5djay7">30-second demo showing the complete pickup flow</p></div></div></section>`;
});
const CoverageMapPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[var(--color-fog)] p-8 rounded-xl" data-svelte-h="svelte-1857as9"><div class="text-center mb-6"><h3 class="text-2xl font-bold text-[var(--color-night)] mb-2">Coverage Areas</h3> <p class="text-[var(--color-gray)]">Currently serving major cities across Nigeria</p></div> <div class="aspect-video bg-white rounded-lg shadow-md p-8 flex items-center justify-center"><div class="text-center space-y-6"><svg class="w-24 h-24 mx-auto text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"><div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Lagos</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div> <div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Abuja</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div> <div class="bg-[var(--color-fog)] p-4 rounded-lg"><div class="w-3 h-3 bg-[var(--color-emerald)] rounded-full mx-auto mb-2"></div> <p class="font-semibold text-[var(--color-night)]">Port Harcourt</p> <p class="text-sm text-[var(--color-gray)]">Active</p></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1u8764d_START -->${$$result.title = `<title>EcoMint | Turn waste into value with smart pickups and secure payments</title>`, ""}<meta name="description" content="EcoMint connects residents, collectors, and operators with location-aware pickups, secure Eco QR payments, and real-time tracking. Simple, verified, sustainable."><meta name="keywords" content="waste collection, eco qr, ecomint, recycling, waste management, nigeria, lagos, abuja, pickup service"><meta property="og:title" content="EcoMint | Turn waste into value"><meta property="og:description" content="Simple pickups, precise payments. EcoMint connects residents, collectors, and operators with location-aware waste collection."><meta property="og:type" content="website"><meta property="og:url" content="https://ecomint.example"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="EcoMint | Turn waste into value"><meta name="twitter:description" content="Simple pickups, precise payments. Location-aware waste collection for everyone."><!-- HTML_TAG_START -->${`
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EcoMint",
      "description": "Turn waste into value with location-aware pickups, secure Eco QR payments, and real-time tracking",
      "url": "https://ecomint.example",
      "logo": "https://ecomint.example/favicon.svg",
      "sameAs": [
        "https://twitter.com/ecomint",
        "https://facebook.com/ecomint",
        "https://linkedin.com/company/ecomint"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": ["NG"],
        "availableLanguage": ["en", "yo", "ha", "ig"]
      }
    }
    <\/script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EcoMint",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "iOS, Android, Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "NGN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    }
    <\/script>
  `}<!-- HTML_TAG_END --><!-- HEAD_svelte-1u8764d_END -->`, ""} ${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Turn waste into value — simple pickups, precise payments",
      subtitle: "EcoMint connects residents, collectors, and operators with location-aware pickups, secure Eco QR payments, and real-time tracking."
    },
    {},
    {}
  )} ${validate_component(AudienceChooser, "AudienceChooser").$$render($$result, {}, {}, {})} <section class="py-16 bg-white" data-svelte-h="svelte-16jyr6p"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">The Problem &amp; Opportunity</h2> <p class="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">Waste collection in cities is inefficient, leading to low revenue for collectors and payment leakage for operators.
        EcoMint brings transparency, efficiency, and verified payments to every pickup.</p></div></div></section> <section class="py-16 bg-[var(--color-fog)]" data-svelte-h="svelte-1jg9ngc"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">How EcoMint Solves It</h2> <p class="text-lg text-[var(--color-gray)] max-w-2xl mx-auto mb-12">Three powerful pillars working together to transform waste collection</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Secure Payments</h3> <p class="text-[var(--color-gray)]">Eco QR ensures every transaction is verified, reducing payment leakage and building trust</p> <a href="/learning" class="inline-flex items-center text-[var(--color-emerald)] font-medium">Learn more
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Smart Logistics</h3> <p class="text-[var(--color-gray)]">Intelligent routing and agent management optimizes coverage and reduces response times</p> <a href="/operators" class="inline-flex items-center text-[var(--color-emerald)] font-medium">For Operators
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="text-center space-y-4"><div class="w-20 h-20 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto"><svg class="w-10 h-10 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)]">Data &amp; Rewards</h3> <p class="text-[var(--color-gray)]">Track environmental impact and earn rewards while building sustainable communities</p> <a href="/users" class="inline-flex items-center text-[var(--color-emerald)] font-medium">For Users
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section> ${validate_component(DemoPlayer, "DemoPlayer").$$render($$result, {}, {}, {})} <section class="py-16 bg-[var(--color-fog)]"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1vhfhz4"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Built for Everyone</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1mg5h67">For Users</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "60-Second Booking",
      description: "Schedule a pickup in less than a minute with our simple interface"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Transparent Pricing",
      description: "Know exactly what you'll pay before confirming your pickup"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Earn Rewards",
      description: "Get points for every pickup that can be redeemed for discounts"
    },
    {},
    {}
  )}</div> <div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1lsxlzs">For Operators</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Revenue Management",
      description: "Real-time settlement tracking and transparent revenue reporting",
      icon: "payment"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Agent Assignment",
      description: "Efficiently manage and assign agents across your coverage area",
      icon: "route"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Coverage Control",
      description: "Define and expand your service zones with precision mapping"
    },
    {},
    {}
  )}</div> <div class="space-y-4"><h3 class="text-xl font-semibold text-[var(--color-night)]" data-svelte-h="svelte-1pzv87z">For Agents</h3> ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Better Earnings",
      description: "Verified payments and bonuses for consistent performance"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Smart Routes",
      description: "Optimized pickup routes save time and increase efficiency"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Easy QR Scanning",
      description: "Quick payment verification with secure Eco QR technology"
    },
    {},
    {}
  )}</div></div></div></section> <section class="py-16 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-nr7o8d"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Trusted by Communities</h2> <p class="text-lg text-[var(--color-gray)]">Making an impact across Nigeria</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-svelte-h="svelte-1gvv72f"><div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">10,000+</p> <p class="text-lg text-[var(--color-gray)]">Pickups Completed</p></div> <div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">500+</p> <p class="text-lg text-[var(--color-gray)]">Active Agents</p></div> <div class="text-center"><p class="text-5xl font-bold text-[var(--color-emerald)] mb-2">2,500</p> <p class="text-lg text-[var(--color-gray)]">Tons Recycled</p></div></div> ${validate_component(CoverageMapPlaceholder, "CoverageMapPlaceholder").$$render($$result, {}, {}, {})}</div></section> <section class="py-16 bg-[var(--color-fog)]"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1mjp46q"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Learn How It Works</h2> <p class="text-lg text-[var(--color-gray)]">Explore our guides and documentation</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "Getting Started with EcoMint",
      summary: "A comprehensive guide to understanding how EcoMint works and getting set up.",
      category: "Getting Started",
      readTime: "8 min",
      href: "/learning"
    },
    {},
    {}
  )} ${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "How to Request Your First Pickup",
      summary: "Step-by-step instructions for users to schedule and complete their first waste pickup.",
      category: "For Users",
      readTime: "5 min",
      href: "/learning"
    },
    {},
    {}
  )} ${validate_component(LearningArticle, "LearningArticle").$$render(
    $$result,
    {
      title: "Understanding Eco QR Payments",
      summary: "Learn how our secure payment system works and why it's better than traditional methods.",
      category: "Concept",
      readTime: "6 min",
      href: "/learning"
    },
    {},
    {}
  )}</div> <div class="text-center" data-svelte-h="svelte-1l95fgn"><a href="/learning" class="inline-flex items-center px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">Visit Learning Hub
        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section> <section class="py-16 bg-white" data-svelte-h="svelte-lxwx4a"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Frequently Asked Questions</h2></div> <div class="max-w-3xl mx-auto space-y-4"><details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">How does EcoMint pricing work?</summary> <p class="mt-4 text-[var(--color-gray)]">Pricing is transparent and varies by location and waste type. You&#39;ll see the exact cost before confirming your pickup. No hidden fees.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">Is my area covered?</summary> <p class="mt-4 text-[var(--color-gray)]">We currently serve Lagos, Abuja, and Port Harcourt. Check our coverage map above or download the app to see if we&#39;re in your neighborhood.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">How do I become an operator?</summary> <p class="mt-4 text-[var(--color-gray)]">Visit our Operators page to start your free trial. You&#39;ll need to verify your business and set up your coverage area before activating agents.</p></details> <details class="bg-[var(--color-fog)] p-6 rounded-lg"><summary class="font-semibold text-[var(--color-night)] cursor-pointer">What is Eco QR?</summary> <p class="mt-4 text-[var(--color-gray)]">Eco QR is our secure payment verification system. It ensures every pickup is properly recorded and paid for, protecting both collectors and customers.</p></details></div></div></section> ${validate_component(CTABanner, "CTABanner").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
