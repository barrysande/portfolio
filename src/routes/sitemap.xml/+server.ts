import type { RequestHandler } from './$types';

interface PostMeta {
	date: string;
	published: boolean;
}

export const GET: RequestHandler = async ({ url }) => {
	const origin = url.origin;

	const modules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<
		string,
		{ metadata: PostMeta }
	>;

	const posts = Object.entries(modules)
		.map(([path, mod]) => ({
			slug: path.split('/').at(-1)!.replace('.md', ''),
			date: mod.metadata.date,
			published: mod.metadata.published
		}))
		.filter((p) => p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${posts
	.map(
		(p) => `  <url>
    <loc>${origin}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.7</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
