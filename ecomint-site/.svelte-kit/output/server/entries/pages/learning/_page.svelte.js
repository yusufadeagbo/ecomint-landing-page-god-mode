import { c as create_ssr_component, b as add_attribute, v as validate_component, f as each, e as escape } from "../../../chunks/ssr.js";
import { L as LearningArticle } from "../../../chunks/LearningArticle.js";
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Search for guides, articles, and help..." } = $$props;
  let { onSearch = () => {
  } } = $$props;
  let searchQuery = "";
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.onSearch === void 0 && $$bindings.onSearch && onSearch !== void 0) $$bindings.onSearch(onSearch);
  return `<div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-svelte-h="svelte-dp60mj"><svg class="h-5 w-5 text-[var(--color-gray)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text" class="block w-full pl-10 pr-12 py-3 border border-[var(--color-dust)] rounded-lg focus:ring-2 focus:ring-[var(--color-emerald)] focus:border-transparent outline-none transition-all duration-200"${add_attribute("placeholder", placeholder, 0)} aria-label="Search"${add_attribute("value", searchQuery, 0)}> <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-emerald)] hover:text-[var(--color-evergreen)] transition-colors duration-200" aria-label="Submit search" data-svelte-h="svelte-1aq9976"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredArticles;
  const featuredGuides = [
    {
      title: "Getting Started with Subscriptions",
      summary: "Learn how weekly, bi-weekly, and tri-weekly subscriptions work and how to choose the right plan for your needs.",
      category: "Getting Started",
      readTime: "8 min",
      href: "#",
      icon: "subscription"
    },
    {
      title: "Become a Verified Operator",
      summary: "Complete guide to verification, setting up your coverage area, pricing strategies, and managing subscription customers.",
      category: "For Operators",
      readTime: "12 min",
      href: "#",
      icon: "operator"
    },
    {
      title: "Agent Earnings & Routes",
      summary: "Understand the operator-first model, how routes are assigned, earnings breakdown, and how to maximize your income.",
      category: "For Agents",
      readTime: "10 min",
      href: "#",
      icon: "agent"
    }
  ];
  const articles = [
    {
      title: "Understanding Subscription Tiers",
      summary: "Detailed comparison of weekly, bi-weekly, and tri-weekly subscription plans and their benefits.",
      category: "For Users",
      readTime: "6 min",
      href: "#"
    },
    {
      title: "How to Check Coverage",
      summary: "Step-by-step guide to verifying if EcoMint operates in your area and finding verified operators nearby.",
      category: "For Users",
      readTime: "4 min",
      href: "#"
    },
    {
      title: "Managing Your Subscription",
      summary: "How to pause, modify, or cancel your waste collection subscription through the mobile app.",
      category: "For Users",
      readTime: "5 min",
      href: "#"
    },
    {
      title: "Understanding Eco QR Payments",
      summary: "Learn how our secure payment verification system works and why it protects everyone.",
      category: "Concept",
      readTime: "6 min",
      href: "#"
    },
    {
      title: "Operator Verification Process",
      summary: "Requirements, documentation, and timeline for becoming a verified EcoMint operator.",
      category: "For Operators",
      readTime: "10 min",
      href: "#"
    },
    {
      title: "Setting Up Your Coverage Area",
      summary: "Guide for operators on defining service zones, pricing strategies, and expansion planning.",
      category: "For Operators",
      readTime: "12 min",
      href: "#"
    },
    {
      title: "Managing Subscription Revenue",
      summary: "How to track recurring revenue, settlements, and commissions in your operator dashboard.",
      category: "For Operators",
      readTime: "9 min",
      href: "#"
    },
    {
      title: "Agent Assignment Strategies",
      summary: "Best practices for assigning subscription routes to agents for maximum efficiency and coverage.",
      category: "For Operators",
      readTime: "11 min",
      href: "#"
    },
    {
      title: "Agent Field Best Practices",
      summary: "Tips for agents to maximize earnings, maintain high ratings, and provide excellent service.",
      category: "For Agents",
      readTime: "7 min",
      href: "#"
    },
    {
      title: "Working with Your Operator",
      summary: "Understanding the operator-agent relationship, communication channels, and payment schedules.",
      category: "For Agents",
      readTime: "8 min",
      href: "#"
    },
    {
      title: "Eco QR Scanning Guide",
      summary: "How to use the agent app to scan QR codes, verify pickups, and trigger commission payments.",
      category: "For Agents",
      readTime: "5 min",
      href: "#"
    },
    {
      title: "Safety Guidelines for Agents",
      summary: "Essential safety protocols, PPE requirements, and emergency procedures for field work.",
      category: "For Agents",
      readTime: "11 min",
      href: "#"
    },
    {
      title: "EcoMint ID Explained",
      summary: "Understanding the unique identifier system and how it enables secure, verified transactions.",
      category: "Concept",
      readTime: "5 min",
      href: "#"
    },
    {
      title: "Settlement Flow Deep Dive",
      summary: "Detailed explanation of how payments flow from users through operators to agents.",
      category: "Concept",
      readTime: "10 min",
      href: "#"
    },
    {
      title: "API Integration Guide",
      summary: "Complete guide for developers integrating EcoMint services into existing platforms.",
      category: "Developer",
      readTime: "15 min",
      href: "#"
    },
    {
      title: "Webhook Setup and Testing",
      summary: "Configure webhooks to receive real-time notifications about transactions and events.",
      category: "Developer",
      readTime: "13 min",
      href: "#"
    },
    {
      title: "Troubleshooting Payment Issues",
      summary: "Common payment problems and how to resolve them quickly for users, agents, and operators.",
      category: "Troubleshooting",
      readTime: "8 min",
      href: "#"
    }
  ];
  let searchQuery = "";
  let selectedCategory = "All";
  const categories = [
    "All",
    "Getting Started",
    "For Users",
    "For Operators",
    "For Agents",
    "Developer",
    "Concept",
    "Troubleshooting"
  ];
  function handleSearch(query) {
    searchQuery = query.toLowerCase();
  }
  filteredArticles = articles.filter((article) => {
    const matchesSearch = !searchQuery || article.title.toLowerCase().includes(searchQuery) || article.summary.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategory === "All";
    return matchesSearch && matchesCategory;
  });
  return `${$$result.head += `<!-- HEAD_svelte-4efw8v_START -->${$$result.title = `<title>EcoMint Learning Hub | Guides, Documentation &amp; Support</title>`, ""}<meta name="description" content="Comprehensive guides, tutorials, and documentation for EcoMint users, operators, agents, and developers."><!-- HEAD_svelte-4efw8v_END -->`, ""}  <section class="relative text-white overflow-hidden" style="background: var(--bg-hero);"><div class="absolute inset-0 opacity-5" data-svelte-h="svelte-18hcw0t"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-learning" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="currentColor"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#grid-learning)"></rect></svg></div> <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"><div class="text-center"><div class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-30 mb-6" data-svelte-h="svelte-zcym12"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        Comprehensive Documentation</div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-svelte-h="svelte-w1spv8">Learning Hub</h1> <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed" data-svelte-h="svelte-l4hj9f">Everything you need to know about subscriptions, verified operators, and the EcoMint platform</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10" data-svelte-h="svelte-1ih1222"><div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20"><div class="text-2xl font-bold mb-1">50+</div> <div class="text-sm text-gray-200">Guides &amp; Tutorials</div></div> <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20"><div class="text-2xl font-bold mb-1">24/7</div> <div class="text-sm text-gray-200">Support Available</div></div> <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20"><div class="text-2xl font-bold mb-1">3 Roles</div> <div class="text-sm text-gray-200">User, Operator, Agent</div></div></div> <div class="max-w-2xl mx-auto">${validate_component(SearchBar, "SearchBar").$$render($$result, { onSearch: handleSearch }, {}, {})}</div></div></div></section>  <section class="py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-5bo0pq"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Start Here</h2> <p class="text-lg text-[var(--color-gray)]">Essential guides to get you up and running</p></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">${each(featuredGuides, (guide) => {
    return `<a${add_attribute("href", guide.href, 0)} class="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-emerald-200 p-8 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1"><div class="flex items-start justify-between mb-4">${guide.icon === "subscription" ? `<div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center" data-svelte-h="svelte-5zbje4"><svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg> </div>` : `${guide.icon === "operator" ? `<div class="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center" data-svelte-h="svelte-1rtlrx5"><svg class="w-8 h-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> </div>` : `<div class="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center" data-svelte-h="svelte-pt6bur"><svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div>`}`} <span class="text-xs font-semibold px-3 py-1 bg-white rounded-full text-[var(--color-evergreen)] border border-emerald-200">${escape(guide.readTime)} </span></div> <h3 class="text-2xl font-bold text-[var(--color-night)] mb-3 group-hover:text-[var(--color-emerald)] transition-colors">${escape(guide.title)}</h3> <p class="text-[var(--color-gray)] mb-4">${escape(guide.summary)}</p> <div class="flex items-center text-[var(--color-emerald)] font-semibold" data-svelte-h="svelte-10wynhc">Start reading
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div> </a>`;
  })}</div></div></section>  <section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-rko3gi"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Learning by Role</h2> <p class="text-lg text-[var(--color-gray)]">Find resources tailored to your role in the EcoMint ecosystem</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white rounded-2xl border-2 border-gray-200 p-8"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6" data-svelte-h="svelte-e8olj4"><svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 class="text-2xl font-bold text-[var(--color-night)] mb-4" data-svelte-h="svelte-ol16v7">For Users</h3> <ul class="space-y-3 mb-6" data-svelte-h="svelte-1wfmy1e"><li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Choosing subscription plans</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Checking coverage areas</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Managing subscriptions</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Mobile app features</span></li></ul> <button class="w-full px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all" data-svelte-h="svelte-1wimw83">View User Guides</button></div> <div class="bg-white rounded-2xl border-2 border-emerald-200 p-8"><div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6" data-svelte-h="svelte-f2ct5k"><svg class="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div> <h3 class="text-2xl font-bold text-[var(--color-night)] mb-4" data-svelte-h="svelte-11175i0">For Operators</h3> <ul class="space-y-3 mb-6" data-svelte-h="svelte-1z39xz"><li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Verification process</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Managing agents &amp; routes</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Subscription pricing strategies</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Revenue &amp; settlements</span></li></ul> <button class="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-bold hover:shadow-lg transition-all" data-svelte-h="svelte-15f0fik">View Operator Guides</button></div> <div class="bg-white rounded-2xl border-2 border-gray-200 p-8"><div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6" data-svelte-h="svelte-ciuwvj"><svg class="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-2xl font-bold text-[var(--color-night)] mb-4" data-svelte-h="svelte-19kn0pf">For Agents</h3> <ul class="space-y-3 mb-6" data-svelte-h="svelte-1o8df49"><li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Operator-first model explained</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Route assignments &amp; schedules</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Eco QR scanning &amp; verification</span></li> <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-sm text-[var(--color-gray)]">Earnings &amp; commissions</span></li></ul> <button class="w-full px-6 py-3 bg-[var(--color-evergreen)] text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all" data-svelte-h="svelte-sw5hmv">View Agent Guides</button></div></div></div></section>  <section class="py-20 bg-white" id="all-articles"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12" data-svelte-h="svelte-1pbfvj7"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">All Documentation</h2> <p class="text-lg text-[var(--color-gray)]">Browse our complete library of guides and articles</p></div> <div class="flex flex-wrap gap-2 justify-center mb-8">${each(categories, (category) => {
    return `<button type="button" class="${"px-4 py-2 rounded-lg font-medium transition-all duration-200 " + escape(
      selectedCategory === category ? "bg-[var(--color-emerald)] text-white" : "bg-[var(--color-fog)] text-[var(--color-gray)] hover:bg-[var(--color-dust)]",
      true
    )}">${escape(category)} </button>`;
  })}</div> ${filteredArticles.length === 0 ? `<div class="text-center py-12"><svg class="w-16 h-16 mx-auto text-[var(--color-gray)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-lg text-[var(--color-gray)]" data-svelte-h="svelte-hqsp8t">No articles found matching your search</p> <button type="button" class="mt-4 text-[var(--color-emerald)] hover:underline" data-svelte-h="svelte-oqelie">Clear filters</button></div>` : `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filteredArticles, (article) => {
    return `${validate_component(LearningArticle, "LearningArticle").$$render($$result, Object.assign({}, article), {}, {})}`;
  })}</div>`}</div></section>  <section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50" data-svelte-h="svelte-10jifxh"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Need More Help?</h2> <p class="text-lg text-[var(--color-gray)]">We&#39;re here to support you</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><div class="bg-white rounded-2xl border-2 border-emerald-200 p-8 text-center"><div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Community Forum</h3> <p class="text-[var(--color-gray)] mb-4">Ask questions and get answers from the EcoMint community</p> <a href="#" class="inline-flex items-center text-[var(--color-emerald)] font-medium hover:underline">Visit forum
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="bg-white rounded-2xl border-2 border-emerald-200 p-8 text-center"><div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Contact Support</h3> <p class="text-[var(--color-gray)] mb-4">Get personalized help from our support team</p> <a href="#" class="inline-flex items-center text-[var(--color-emerald)] font-medium hover:underline">Contact us
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section>`;
});
export {
  Page as default
};
