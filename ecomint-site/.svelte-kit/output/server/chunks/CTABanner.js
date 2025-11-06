import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { icon = "check" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  return `<div class="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[var(--color-emerald)] transition-all duration-300"><div class="flex items-start space-x-4"><div class="flex-shrink-0"><div class="w-12 h-12 bg-[var(--color-emerald)] bg-opacity-10 rounded-lg flex items-center justify-center">${icon === "payment" ? `<svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>` : `${icon === "route" ? `<svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>` : `${icon === "data" ? `<svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>` : `<svg class="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`}`}`}</div></div> <div class="flex-1"><h3 class="text-lg font-semibold text-[var(--color-night)] mb-2">${escape(title)}</h3> <p class="text-[var(--color-gray)]">${escape(description)}</p></div></div></div>`;
});
const CTABanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Ready to Get Started?" } = $$props;
  let { description = "Join thousands making waste collection simple and sustainable." } = $$props;
  let { primaryText = "Download the App" } = $$props;
  let { secondaryText = "For Operators" } = $$props;
  let { primaryLink = "/users" } = $$props;
  let { secondaryLink = "/operators" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.primaryText === void 0 && $$bindings.primaryText && primaryText !== void 0) $$bindings.primaryText(primaryText);
  if ($$props.secondaryText === void 0 && $$bindings.secondaryText && secondaryText !== void 0) $$bindings.secondaryText(secondaryText);
  if ($$props.primaryLink === void 0 && $$bindings.primaryLink && primaryLink !== void 0) $$bindings.primaryLink(primaryLink);
  if ($$props.secondaryLink === void 0 && $$bindings.secondaryLink && secondaryLink !== void 0) $$bindings.secondaryLink(secondaryLink);
  return `<section class="bg-gradient-to-r from-[var(--color-evergreen)] to-[var(--color-emerald)] text-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><div class="text-center space-y-6"><h2 class="text-3xl md:text-4xl font-bold">${escape(title)}</h2> <p class="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">${escape(description)}</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a${add_attribute("href", primaryLink, 0)} class="px-8 py-3 bg-white text-[var(--color-evergreen)] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center hover:scale-105 transform">${escape(primaryText)}</a> <a${add_attribute("href", secondaryLink, 0)} class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--color-evergreen)] transition-all duration-200 text-center">${escape(secondaryText)}</a></div></div></div></section>`;
});
export {
  CTABanner as C,
  FeatureCard as F
};
