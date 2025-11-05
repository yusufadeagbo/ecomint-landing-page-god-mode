import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const LearningArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { summary } = $$props;
  let { readTime = "5 min" } = $$props;
  let { category = "Guide" } = $$props;
  let { href = "#" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  if ($$props.readTime === void 0 && $$bindings.readTime && readTime !== void 0) $$bindings.readTime(readTime);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="group block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[var(--color-emerald)]"><div class="flex items-start justify-between mb-3"><span class="inline-block px-3 py-1 text-xs font-semibold text-[var(--color-emerald)] bg-[var(--color-emerald)] bg-opacity-10 rounded-full">${escape(category)}</span> <span class="text-sm text-[var(--color-gray)]">${escape(readTime)} read</span></div> <h3 class="text-lg font-semibold text-[var(--color-night)] mb-2 group-hover:text-[var(--color-emerald)] transition-colors duration-200">${escape(title)}</h3> <p class="text-[var(--color-gray)] text-sm">${escape(summary)}</p> <div class="mt-4 flex items-center text-[var(--color-emerald)] text-sm font-medium" data-svelte-h="svelte-yjoq5y">Read article
    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></a>`;
});
export {
  LearningArticle as L
};
