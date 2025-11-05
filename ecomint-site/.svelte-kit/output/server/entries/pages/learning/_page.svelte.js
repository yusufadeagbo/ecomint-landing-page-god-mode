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
  const articles = [
    {
      title: "Getting Started with EcoMint",
      summary: "A comprehensive introduction to understanding how EcoMint works and what makes it unique.",
      category: "Getting Started",
      readTime: "8 min",
      href: "#"
    },
    {
      title: "How to Request Your First Pickup",
      summary: "Step-by-step guide for users to schedule and complete their first waste pickup successfully.",
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
      title: "Operator Onboarding Checklist",
      summary: "Everything you need to know to set up your operator account and start managing agents.",
      category: "For Operators",
      readTime: "10 min",
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
      title: "Setting Up Your Coverage Area",
      summary: "Guide for operators on defining service zones, pricing strategies, and expansion planning.",
      category: "For Operators",
      readTime: "12 min",
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
      title: "Troubleshooting Payment Issues",
      summary: "Common payment problems and how to resolve them quickly for users, agents, and operators.",
      category: "Troubleshooting",
      readTime: "8 min",
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
      title: "Settlement Flow Deep Dive",
      summary: "Detailed explanation of how payments flow from users through agents to operators.",
      category: "Concept",
      readTime: "10 min",
      href: "#"
    },
    {
      title: "Managing Agent Performance",
      summary: "Tools and strategies for operators to track, motivate, and improve agent performance.",
      category: "For Operators",
      readTime: "9 min",
      href: "#"
    },
    {
      title: "Rewards Program Guide",
      summary: "How users can earn, track, and redeem points for discounts and special offers.",
      category: "For Users",
      readTime: "6 min",
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
      title: "Webhook Setup and Testing",
      summary: "Configure webhooks to receive real-time notifications about transactions and events.",
      category: "Developer",
      readTime: "13 min",
      href: "#"
    },
    {
      title: "Understanding Data & Impact Reports",
      summary: "How to access and interpret environmental impact data and recycling metrics.",
      category: "Concept",
      readTime: "7 min",
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
  return `${$$result.head += `<!-- HEAD_svelte-4efw8v_START -->${$$result.title = `<title>EcoMint Learning Hub | Guides, Documentation &amp; Support</title>`, ""}<meta name="description" content="Comprehensive guides, tutorials, and documentation for EcoMint users, operators, agents, and developers."><!-- HEAD_svelte-4efw8v_END -->`, ""} <section class="bg-gradient-to-br from-[var(--color-evergreen)] to-[#0a2a20] text-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-4" data-svelte-h="svelte-iiyjb7">Learning Hub</h1> <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8" data-svelte-h="svelte-597k6c">Everything you need to know about EcoMint — from getting started to advanced features</p> <div class="max-w-2xl mx-auto">${validate_component(SearchBar, "SearchBar").$$render($$result, { onSearch: handleSearch }, {}, {})}</div></div></div></section> <section class="py-12 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-wrap gap-2 justify-center mb-8">${each(categories, (category) => {
    return `<button type="button" class="${"px-4 py-2 rounded-lg font-medium transition-all duration-200 " + escape(
      selectedCategory === category ? "bg-[var(--color-emerald)] text-white" : "bg-[var(--color-fog)] text-[var(--color-gray)] hover:bg-[var(--color-dust)]",
      true
    )}">${escape(category)} </button>`;
  })}</div> ${filteredArticles.length === 0 ? `<div class="text-center py-12"><svg class="w-16 h-16 mx-auto text-[var(--color-gray)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-lg text-[var(--color-gray)]" data-svelte-h="svelte-hqsp8t">No articles found matching your search</p> <button type="button" class="mt-4 text-[var(--color-emerald)] hover:underline" data-svelte-h="svelte-oqelie">Clear filters</button></div>` : `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filteredArticles, (article) => {
    return `${validate_component(LearningArticle, "LearningArticle").$$render($$result, Object.assign({}, article), {}, {})}`;
  })}</div>`}</div></section> <section class="py-16 bg-[var(--color-fog)]" data-svelte-h="svelte-1oghwu6"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Popular Learning Paths</h2> <p class="text-lg text-[var(--color-gray)]">Guided courses to help you master EcoMint</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-6 rounded-xl shadow-md"><div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">New User in 10 Minutes</h3> <p class="text-sm text-[var(--color-gray)] mb-4">Complete walkthrough from download to your first successful pickup</p> <div class="flex items-center justify-between"><span class="text-xs text-[var(--color-emerald)] font-medium">5 lessons</span> <a href="#" class="text-sm text-[var(--color-emerald)] font-medium hover:underline">Start learning →</a></div></div> <div class="bg-white p-6 rounded-xl shadow-md"><div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div> <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">Operator Onboarding</h3> <p class="text-sm text-[var(--color-gray)] mb-4">Set up your operator account and start managing your first agents</p> <div class="flex items-center justify-between"><span class="text-xs text-[var(--color-emerald)] font-medium">8 lessons</span> <a href="#" class="text-sm text-[var(--color-emerald)] font-medium hover:underline">Start learning →</a></div></div> <div class="bg-white p-6 rounded-xl shadow-md"><div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div> <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">API Integration</h3> <p class="text-sm text-[var(--color-gray)] mb-4">Integrate EcoMint services into your platform with our developer guides</p> <div class="flex items-center justify-between"><span class="text-xs text-[var(--color-emerald)] font-medium">12 lessons</span> <a href="#" class="text-sm text-[var(--color-emerald)] font-medium hover:underline">Start learning →</a></div></div></div></div></section> <section class="py-16 bg-white" data-svelte-h="svelte-spqljd"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-night)] mb-4">Need More Help?</h2></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><div class="bg-[var(--color-fog)] p-8 rounded-xl text-center"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Community Forum</h3> <p class="text-[var(--color-gray)] mb-4">Ask questions and get answers from the EcoMint community</p> <a href="#" class="inline-flex items-center text-[var(--color-emerald)] font-medium hover:underline">Visit forum
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="bg-[var(--color-fog)] p-8 rounded-xl text-center"><div class="w-16 h-16 bg-[var(--color-emerald)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div> <h3 class="text-xl font-semibold text-[var(--color-night)] mb-2">Contact Support</h3> <p class="text-[var(--color-gray)] mb-4">Get personalized help from our support team</p> <a href="#" class="inline-flex items-center text-[var(--color-emerald)] font-medium hover:underline">Contact us
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section>`;
});
export {
  Page as default
};
