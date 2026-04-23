---
title: 'SvelteKit Rendering Modes'
subtitle: 'Sveltekit Page Options'
category: 'Notes'
date: '2026-04-22'
published: true
---

SvelteKit lets you configure rendering per route. The combination of `ssr` and `csr` determines how your page loads:

```typescript
// SSR + Hydration (default)
// Server renders HTML, client hydrates for interactivity
export const ssr = true;
export const csr = true;

// SSR only
// Server renders, no client JavaScript
export const ssr = true;
export const csr = false;

// SPA mode
// Client renders everything, server sends minimal HTML shell
export const ssr = false;
export const csr = true;

// Static site generation (prerendering)
// HTML generated at build time
export const prerender = true;

// Breaks
// No server render, no client JS, nothing dynamic works
export const ssr = false;
export const csr = false;
```

**Key distinction:** `ssr = false` doesn't mean CSR is enabled — it just means "skip server rendering." For SPA mode to work, you need both `ssr = false` AND `csr = true`.

SvelteKit's strength is mixing these per route: prerender your landing page, SSR your dashboard, SPA mode for a complex interactive widget.

Official Docs References:

[SSR Page Options](https://svelte.dev/docs/kit/page-options#ssr)

[CSR Page Options](https://svelte.dev/docs/kit/page-options#csr)
