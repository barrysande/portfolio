import type { PageLoad } from './$types';

interface PostMeta {
	title: string;
	subtitle: string;
	type: 'article' | 'note';
	topic: string;
	tags: string[];
	date: string;
	readTime: string;
	published: boolean;
}

interface Post extends PostMeta {
	slug: string;
}

export const load: PageLoad = async () => {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<
		string,
		{ metadata: PostMeta }
	>;

	const posts: Post[] = Object.entries(modules)
		.map(([path, mod]) => ({
			slug: path.split('/').at(-1)!.replace('.md', ''),
			...mod.metadata
		}))
		.filter((p) => p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
