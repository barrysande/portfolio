# Barry Sande — Portfolio

The source code for [barrysande.com](https://barrysande.com/), my personal portfolio and
writing site. It brings together my projects, experience, skills, and long-form articles in a
responsive light and dark interface.

## Stack

- [Svelte 5](https://svelte.dev/) and [SvelteKit 2](https://svelte.dev/docs/kit) for the application
- [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- [mdsvex](https://mdsvex.pngwn.io/) for Markdown-based articles
- [Shiki](https://shiki.style/) for syntax highlighting
- [Bits UI](https://bits-ui.com/) for accessible UI primitives
- [Iconify](https://iconify.design/) for icons
- [Mode Watcher](https://github.com/svecosystem/mode-watcher) for color-mode handling
- [Vite](https://vite.dev/) for local development and production builds

## Themes

The light **Atelier** theme and dark **Blueprint** theme were generated with the
[Dehlya Studio Theme Studio](https://www.dehlya-studio.ch/theme-studio). Dehlya Studio also
offers more theme variants there for free if you want a starting point for your own site.

The theme tokens and site-specific adaptations live in [`src/app.css`](src/app.css). The original
generated values are documented in [`design-details.md`](design-details.md).

## Local development

### Requirements

- Node.js 20.19 or newer
- pnpm 10.33 or a compatible version

Clone the repository, install its dependencies, and start the development server:

```bash
git clone https://github.com/barrysande/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Commands

| Command            | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `pnpm dev`         | Start the local development server             |
| `pnpm build`       | Create a production build                      |
| `pnpm preview`     | Preview the production build locally           |
| `pnpm check`       | Run Svelte and TypeScript checks               |
| `pnpm check:watch` | Run Svelte and TypeScript checks in watch mode |
| `pnpm lint`        | Check formatting and run ESLint                |
| `pnpm format`      | Format the codebase with Prettier              |

## Project structure

```text
src/
├── lib/          Reusable components and utilities
├── posts/        Markdown articles
├── routes/       SvelteKit pages and layouts
└── app.css       Global styles and theme tokens
static/           Static assets
```

This repository is publicly available for anyone interested in how the site is built.
