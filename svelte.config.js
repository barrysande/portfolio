import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

function remarkExtractHeadings() {
	return function (tree, file) {
		const slugger = new GithubSlugger();
		const headings = [];
		visit(tree, 'heading', (node) => {
			if (node.depth <= 3) {
				const text = node.children
					.filter((c) => c.type === 'text' || c.type === 'inlineCode')
					.map((c) => c.value)
					.join('');
				headings.push({ id: slugger.slug(text), text, level: node.depth });
			}
		});
		if (!file.data.fm) file.data.fm = {};
		file.data.fm.headings = headings;
	};
}

const highlighter = await createHighlighter({
	themes: ['catppuccin-mocha', 'poimandres'],
	langs: ['javascript', 'typescript', 'svelte', 'bash', 'sql', 'html', 'css', 'json', 'text']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [remarkExtractHeadings],
			rehypePlugins: [rehypeSlug],
			highlight: {
				highlighter: (code, lang) => {
					const loaded = highlighter.getLoadedLanguages();
					const useLang = lang && loaded.includes(lang) ? lang : 'text';
					const html = highlighter.codeToHtml(code, {
						lang: useLang,
						themes: { light: 'catppuccin-mocha', dark: 'poimandres' },
						defaultColor: false
					});
					// Wrap in {@html} so Svelte doesn't parse { } as expressions.
					// Escape backticks and $ so they don't break the template literal.
					const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
					return `{@html \`${escaped}\`}`;
				}
			}
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
