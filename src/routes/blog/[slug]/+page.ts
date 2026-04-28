import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata as {
				title: string;
				subtitle: string;
				type: 'article' | 'note';
				topic: string;
				tags: string[];
				date: string;
				readTime: string;
				headings?: Array<{ id: string; text: string; level: number }>;
			}
		};
	} catch {
		error(404, `Post "${params.slug}" not found`);
	}
};
