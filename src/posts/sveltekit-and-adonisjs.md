---
title: 'SvelteKit and AdonisJS: A Full-Stack Pairing'
subtitle: 'Why I keep reaching for this combination — and the sharp edges worth knowing about.'
category: 'Engineering'
date: '2026-03-18'
readTime: '12 min'
published: true
---

Building a full-stack web application means making architectural decisions early that you'll live with for years. Here is how I landed on SvelteKit for the frontend and AdonisJS for the API, the tradeoffs I evaluated, and the hidden complexity I didn't anticipate and had to address.

## The Requirements

Before choosing any technology, I listed what mattered:

- **Server-side rendering** — good SEO for public pages and fast initial loads
- **Authenticated sections** — dashboard, user settings, protected resources
- **Future mobile app** — iOS and Android would eventually need the same data
- **Real-time features** — live updates, notifications, collaborative features
- **Background jobs** — email queues, image processing, scheduled tasks
- **Developer experience** — type safety, good tooling, productive workflow

With these constraints, I evaluated three architectural approaches.

## Option 1: The Monolith

A monolith keeps everything in one application — no separate API, no cross-service communication, no cookie relay complexity. There are two main ways to build a monolith for this stack.

### Option 1A: SvelteKit Monolith

SvelteKit handles everything. API routes live in `+server.ts` files, database access happens directly, authentication uses a library like Lucia Auth.

```text
Browser ←→ SvelteKit
├── Pages (+page.svelte)
├── API routes (+server.ts)
├── Database (Knex/Prisma/Drizzle)
└── Auth (BetterAuth)
```

**Pros:**

- Simplest deployment (one application)
- No CORS configuration
- No cookie relay complexity
- Type safety across the entire stack
- Fastest development for solo developers or small teams

**Cons:**

- API is coupled to SvelteKit (mobile app can't reuse it without separate routes)
- Bring your own ORM, auth, and queue libraries
- Less structure for large applications

_Best for: small to medium web-only applications where speed of development matters most._

### Option 1B: AdonisJS + Inertia Monolith

AdonisJS handles everything. Inertia.js bridges the backend to Svelte, React, or Vue components rendered on the server.

```text
Browser ←→ AdonisJS
├── Controllers
├── Inertia.js adapter
├── Svelte/React/Vue pages
├── Database (Lucid ORM)
├── Auth (@adonisjs/auth)
└── Queues (@adonisjs/queue)
```

**Pros:**

- Batteries included (ORM, auth, mail, queues all integrated)
- Laravel-like developer experience
- No cookie relay complexity
- Strong conventions for larger applications
- TypeScript-first

**Cons:**

- API is coupled to the monolith (mobile app needs separate routes)
- Inertia.js is an additional abstraction to learn
- Smaller ecosystem than pure SvelteKit or Next.js

Both monolith approaches avoid the complexity of cross-service authentication. Cookies work naturally because there's only one domain. The tradeoff is API reusability — if you need a mobile app later, you'll need to extract or duplicate API logic.

## Option 2: SPA + Direct API

A client-side Svelte application that talks directly to an API. No server-side rendering.

```text
Browser ←→ AdonisJS API
```

The browser makes all API calls directly. Cookies flow naturally between browser and API with `credentials: 'include'`.

**Pros:**

- Simple cookie handling (browser manages everything)
- API is fully reusable (web, mobile, third parties)
- Clear separation of concerns
- Can deploy frontend on a CDN

**Cons:**

- No server-side rendering (poor SEO for public pages)
- Loading states everywhere (data fetched after page loads)
- Flash of unauthenticated content
- API must be publicly exposed (larger attack surface)

Let me illustrate the UX problem. With SSR:

```typescript
// SvelteKit +page.server.ts
import { error, redirect } from '@sveltejs/kit';
import { PRIVATE_BASE_API_URL } from '$env/static/private';

const apiEndpoint = `${PRIVATE_BASE_API_URL}/some-endpoint`;

export const load = async (event) => {
	if (!event.locals.user) {
		redirect(302, '/login');
	}

	const response = await event.fetch(apiEndpoint);

	if (!response.ok) {
		error(response.status, 'Please try again later.');
	}

	const data = response.json();
	return { data };
};
```

The redirect happens on the server. The protected page never reaches the browser until the load.
Without SSR, in a +page.svelte file you would have something close to this:

```svelte
<!-- +page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let user = $state(null);
	let loading = $state(true);

	onMount(async () => {
		const res = await fetch('https://api.example.com/auth/me', {
			credentials: 'include'
		});

		if (!res.ok) {
			goto('/login'); // Redirect happens after page is visible
			return;
		}

		user = await res.json();
		loading = false;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	<Dashboard {user} />
{/if}
```

I would like to reserve my comments on this option because I have not used it in production. These are mockups based on the Svelte Documentation on how or when to use lifecycle hooks or the `$effect` rune.

## Option 3: Sveltekit SSR + API with BFF Pattern

SvelteKit handles rendering and acts as a Backend-for-Frontend (BFF). A separate AdonisJS API handles business logic, database, and background jobs.

```text
Browser ←→ SvelteKit (BFF) ←→ AdonisJS API
```

The deployment structure uses subdomains:

```text
example.com     → SvelteKit (frontend)
api.example.com → AdonisJS (API)
```

**Pros:**

- Full SSR capabilities (SEO, fast initial loads, no loading flashes)
- API is reusable (mobile and third parties)
- API is private by default because only SvelteKit interacts with it
- Request aggregation where SvelteKit combines multiple API calls into one response
- Background jobs handled properly by AdonisJS

**Cons:**

- Two applications to deploy and maintain
- Server-to-server communication adds latency
- Complexity in relaying data between layers
- Cookie handling becomes your responsibility

That last point is the hidden cost. More on that shortly.

## Why I Chose Option 3

My primary target was having a hands-on backend learning journey by first learning about Databases, then Postgresql as my relational database of choice, then how to create RESTful APIs using a specific backend framework, then look at an ORM.

Another reason for selecting option 3 is that I already knew half of the stack i.e. Node.js and Sveltekit. Pivoting to AdonisJS was easy for me.

Lastly, while the monoliths would work initially they would paint me into a corner when mobile apps become necessary. The SPA approach sacrificed too much on UX and SEO. The BFF pattern had the highest upfront complexity but satisfied all requirements.

## Why SvelteKit

I am familiar with Sveltekit.

## Why AdonisJS

I evaluated AdonisJS 6, NestJS, and Express. AdonisJS won because:

- **Batteries included** — It has an ORM (Lucid), authentication, mail, validation via VineJS, great Dependency Injection patterns, great configuration that is mostly automated — all built-in and designed to work together. Unlike Express that lacks a unified system of packages that leaves maintenance and usage footguns to the developer.
- **TypeScript-first** — Great TypeScript support and even better in version 7 with automatically generated types and transformers.
- **Laravel-like DX** — migrations, seeders, factories, service providers.
- **Session-based auth out of the box** — the `@adonisjs/auth` package with the session guard and access token guard handles login, logout, remember-me tokens, and session management.
- **Adonis CLI** — well-documented and easy to use CLI with ability to create custom commands when needed.
- **Background jobs** — as of the time of writing this post, I used a combination of Postgresql's SKIP LOCKED and UPDATE to create a custom queue together with a cron scheduler to run adonis CLI commands. AdonisJS 7 ships with an experimental `@adonisjs/queue`.

## The Hidden Cost: You're the Middleman

When the browser talks directly to an API, cookies flow automatically:

```text
Browser ←→ API
```

Browser sends `credentials: 'include'`, API sends `Set-Cookie` headers, browser stores them.
When SvelteKit sits in the middle:

```text
Browser ←→ SvelteKit ←→ API
```

SvelteKit receives `Set-Cookie` headers from the API. But those cookies are on SvelteKit's server. The browser never sees them unless SvelteKit explicitly:

1. Parses the `Set-Cookie` header strings
2. Extracts cookie names, values, and attributes
3. Sets those cookies via its `cookies.set()` API to relay them to the browser

The same happens in reverse. When SvelteKit makes an authenticated API call, it must read cookies from its cookie jar, format them into a `Cookie` header string, and attach that header to the outgoing request.

You become responsible for cookie relay. And cookies have sharp edges: domain matching, URL encoding, deletion semantics, secure flags. Things browsers handle automatically become your code.

I didn't fully appreciate this when choosing the architecture. It took debugging four separate cookie-related bugs in production before I understood the full picture.

## When You Should Choose Differently

**Choose the SvelteKit monolith if:**

- You'll never need a mobile app or third-party API access
- Your team is small and wants minimal operational overhead
- You're comfortable bringing your own ORM, auth, and queue libraries

**Choose AdonisJS + Inertia if:**

- You want batteries-included backend with modern frontend components
- You don't need a separate API for mobile (or can add it later)

**Choose SPA + direct API if:**

- SEO doesn't matter (dashboard, admin panel, internal tool)
- Loading states are acceptable
- You want the simplest possible cookie handling

**Choose SSR + BFF if:**

- You need SSR and a reusable API
- Mobile apps are planned from the start
- You have complex background processing needs
- You're willing to handle the middleware complexity

## What Comes Next

The architecture decision was just the beginning. Implementing authentication across this stack led me through a maze of cookie parsing, URL encoding issues, and framework-specific behaviors.

In Part 2, I'll cover the cookie relay system I built, the four bugs that broke authentication in production, and the working solutions. If you're implementing session-based auth between SvelteKit and AdonisJS, that post will save you hours of debugging.
