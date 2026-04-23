---
title: 'SvelteKit and AdonisJS: A Full-Stack Pairing'
subtitle: 'Why I Chose SvelteKit and AdonisJS for my Backend Learning Journey'
category: 'Engineering'
date: '2026-04-20'
published: true
---

<script>
  import Note from '$lib/components/blog/Note.svelte';
</script>

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

A monolith keeps everything in one application which means that cookies travel from the entity returning a database query result to the browser. There are two main ways to build a monolith for this stack.

### Option 1A: SvelteKit Monolith

SvelteKit handles everything. It provides a way to create API routes in `+server.ts` files, database access happens directly, authentication uses a library like [Better Auth](https://better-auth.com/). You may also use [Supabase](https://supabase.com/docs/guides/auth/server-side) so that your interactions become API-like through an SDK that offers authentication, authorisation, and a Postgresql database. Another tool I have seen mentioned a lot is [Convex](https://www.convex.dev/), but I haven't had any interaction with it.

```text
Browser ←→ SvelteKit
├── Pages (+page.svelte)
├── API routes (+server.ts)
├── Database (Knex/Prisma/Drizzle/Supabase)
└── Auth (BetterAuth/Supabase Auth)
```

**Pros:**

- Simplest deployment (one application)
- Supabase is self-hostable
- No CORS configuration
- No cookie relay complexity
- Type safety across the entire stack especially with an ORM or Supabase
- Fastest development for solo developers or small teams
- Can easily use Backend-as-a-Service products like Supabase and Convex for auth and the database.

**Cons:**

- API is coupled to SvelteKit. Mobile apps can't use session cookies, so you'd need separate token-based auth routes. Scaling is also tricky you can't scale API and frontend independently, and API routes mixed with page routes can get messy as the app grows.
- Bring your own ORM, auth, and queue libraries - same package stitching like Express
- Less structure for large applications

### Option 1B: AdonisJS + Inertia Monolith

AdonisJS handles everything. Inertia.js bridges the backend to Svelte, React, or Vue components rendered on the server.

```text
Browser ←→ AdonisJS
├── Controllers
├── Inertia.js adapter
├── Svelte/React/Vue pages
├── Database (Lucid ORM)
├── Auth (@adonisjs/auth)
└── Queues (custom database-backed queues using Postgresql's SKIP LOCKED AND UPDATE or BullMQ/RabbitMQ or @adonisjs/queue)
```

**Pros:**

- Batteries included (ORM, auth, mail, validation, all first party configured)
- No cookie relay complexity
- Enforces reliable MVC pattern that tames chaos as the application grows
- TypeScript-first

**Cons:**

- API is coupled to the monolith (mobile app needs separate routes)
- Inertia.js was an additional abstraction to learn
- Smaller support for Svelte than React and Vue's in this setup. However, this is negligible because once you know the basics most things work.

Both monolith approaches avoid the complexity of cross-service authentication. Cookies work naturally because there's only one domain. The tradeoff is API reusability — i.e., in case you need a mobile app later, you'll need to extract or duplicate API logic.

## Option 2: Svelte + Direct API

A client-side Svelte application that talks directly to an API. In this setup, concepts like server-side rendering are non-existent. It's just Svelte components bundled and shipped to the browser fetching data via `onMount` hooks or the `$effect` rune.

```text
Browser ←→ AdonisJS API
```

Cookies flow between the browser and API with `credentials: 'include'`.

**Pros:**

- Simple cookie handling (browser manages everything)
- API is fully reusable (web, mobile, third parties)
- Clear separation of concerns
- Can deploy frontend on a CDN

**Cons:**

- No server-side rendering resulting in poor SEO for public pages
- Loading states everywhere because data fetched after page loads
- API must be publicly exposed creating a larger attack surface
- You miss out on Sveltekit's great offerings like routing, data loading, and safe form handling. This more library stitching on key aspects of your app.

Let me illustrate the difference. With SvelteKit's SSR:

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

	const data = await response.json();
	return { data };
};
```

The redirect happens on Sveltekit's server.

With Svelte (no Kit), you would handle everything client-side like so:

```svelte
<!-- App.svelte or Dashboard.svelte -->
<script>
	let user = $state(null);
	let loading = $state(true);

	$effect(() => {
		async function fetchUser() {
			const res = await fetch('https://api.example.com/auth/me', {
				credentials: 'include'
			});

			if (!res.ok) {
				window.location.href = '/login';
				return;
			}

			user = await res.json();
			loading = false;
		}

		fetchUser();
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	<Dashboard {user} />
{/if}
```

You can also use an IIFE (Immediately Invoked Function Expression)

```svelte
<script>
	let user = $state(null);
	let loading = $state(true);

	$effect(() => {
		(async () => {
			const res = await fetch('https://api.example.com/auth/me', {
				credentials: 'include'
			});

			if (!res.ok) {
				window.location.href = '/login';
				return;
			}

			user = await res.json();
			loading = false;
		})();
	});
</script>
```

<Note>
You will notice that in both cases, the callback passed to the $effect rune is not async, even though I am doing asynchronous operations inside. This is because an async function returns a Promise, which $effect does not expect — it expects either nothing or a cleanup function. The onMount lifecycle hook has the same behaviour: it takes a synchronous callback because its return value is reserved for cleanup logic, not promises. Matia AKA Joy of Code covers it extensively <a href="https://joyofcode.xyz/avoid-async-effects-in-svelte">here</a>
</Note>

From the code snippet above, this the page loads, shows a loading state, fetches data, then either renders content or redirects.

<Note>
I would like to reserve further comments on this option because I have not used it in production. The code above is a mockup based on the Svelte documentation. The $effect rune is used here because it runs after the component has been mounted to the DOM. See the <a href="https://svelte.dev/docs/svelte/$effect#Understanding-lifecycle">docs</a> for more information.
</Note>

## Option 3: SvelteKit SSR + API with BFF Pattern

SvelteKit handles rendering and acts as a Backend-for-Frontend (BFF). A separate AdonisJS API handles business logic, database, and background jobs.

<Note>
  SSR does not mean CSR is off. SvelteKit allows using both on different routes. For more info, see my notes on it <a href="/blog/sveltekit-page-options">here</a>
</Note>

```text
Browser ←→ SvelteKit (BFF) ←→ AdonisJS API
```

The deployment structure uses subdomains:

```text
example.com     → SvelteKit (frontend)
api.example.com → AdonisJS (API)
```

**Pros:**

- Full SSR capabilities
- API is reusable
- API is private by default because only SvelteKit interacts with it
- Request aggregation where SvelteKit combines multiple API calls into one response
- Background jobs handled by AdonisJS

**Cons:**

- Two applications to deploy and maintain
- Server-to-server communication adds latency
- Complexity in relaying data between layers
- Cookie handling becomes your responsibility

The last point is the hidden cost. More on that shortly.

## Why I Chose Option 3

My primary goal was a hands-on backend learning journey. My plan was to start with a relational database (specifically PostgreSQL), learn how to architect RESTful APIs, and explore a modern ORM. Because I already had strong foundational knowledge of Node.js and the SvelteKit ecosystem, pivoting to a structured Node.js-based framework like AdonisJS felt like a natural progression. Sticking with SvelteKit for the frontend meant I didn't have to spend mental energy re-learning UI concepts, allowing me to focus entirely on the backend architecture.

But SvelteKit wasn't just a familiar fallback; its design makes it uniquely suited for the BFF (Backend-for-Frontend) pattern. It acts as the perfect secure intermediary to consume the AdonisJS API because of its robust server-based data loading system. Using `+page.server.ts` files and `+server.ts` endpoints, I could securely fetch data on the server before rendering the UI.

Furthermore, SvelteKit’s native server-side form actions pair perfectly with TypeScript validation ecosystems like SvelteKit Superforms and my schema library of choice, Valibot (though Zod or ArkType work just as well). This allowed me to implement robust client and server validation that integrates seamlessly with load functions and form actions. It’s the best of both worlds for UX and security: client-side validation provides immediate, onblur feedback to the user, while SvelteKit’s server-side validation acts as a strict gatekeeper, ensuring only expected data shapes reach the AdonisJS API.

Lastly, this separation of concerns future-proofed the application. While the monolith approaches would have been faster to stand up initially, they would have painted me into a corner once a mobile app became necessary. The SPA approach, on the other hand, sacrificed too much on UX and SEO. The SvelteKit BFF pattern carried the highest upfront complexity—especially regarding session management—but it was the only architecture that satisfied all of the project's long-term requirements.

## Why SvelteKit

I am familiar with SvelteKit. It's what I reached for when learning frontend development. For this project, sticking with what I knew let me focus on the backend learning.

## Why AdonisJS

I evaluated AdonisJS 6, NestJS, and Express. AdonisJS won because:

- **Batteries included** — It has an ORM (Lucid), authentication, mail, validation via VineJS, great Dependency Injection (DI) patterns, great configuration that is mostly automated — all built-in and designed to work together. Unlike Express that lacks a unified system of packages that leaves maintenance and usage footguns to the developer.
- **TypeScript-first** — Great TypeScript support and even better in version 7 with automatically generated types and transformers.
- **Structured MVC Pattern** — migrations, seeders, factories, service providers, controllers, and dependency injection.
- **Session-based auth out of the box** — the `@adonisjs/auth` package with the session guard and access token guard handles login, logout, remember-me tokens, and session management.
- **Adonis CLI** — well-documented and easy to use CLI with ability to create custom commands when needed.
- **Background jobs** — as of the time of writing this post, I used a combination of Postgresql's SKIP LOCKED and UPDATE to create a custom queue together with a cron scheduler to run adonis CLI commands. AdonisJS 7 ships with an experimental `@adonisjs/queue`.
- **Documentation** — AdonisJS documentation is great and you can rely solely on them from learning to active development. There is also a great and active AdonisJS community on Discord and resources like community packages listed on the Adonis official website.

## The Hidden Cost: SvelteKit Becomes the Middleman

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

When SvelteKit makes an authenticated API call, it must read cookies from its cookie jar, format them into a `Cookie` header string, and attach that header to the outgoing request.

Your SvelteKit app is responsible for cookie relay. Footguns like domain matching, URL encoding and decoding, and deletion when handling cookies are the main source of bugs. Browsers are equipped to handle cookies automatically but the B-F-F approach forces you to parse the cookies. This was my Binding Vow, in true Jujutsu Kaisen fashion.

I didn't fully appreciate this when choosing the architecture. It took debugging four separate cookie-related bugs in production before I understood the full picture. Shoutout to Adocasts for [this video](https://www.youtube.com/watch?v=zvK4-suEKnM) that gave me insight into how to do it.

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

Implementing authentication across this stack led me through a maze of cookie parsing, URL encoding issues, and framework-specific behaviours.

In Part 2, I'll cover the cookie relay system I built, the four bugs that broke authentication in production, and the working solutions. If you're implementing session-based auth between SvelteKit and AdonisJS, that post will save you hours of debugging.
