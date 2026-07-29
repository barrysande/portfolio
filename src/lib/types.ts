export interface Collaborator {
	name: string;
	link?: string;
}

export interface Project {
	number: string;
	name: string;
	subtitle: string;
	category: string;
	year: string;
	url: string;
	tools: string[];
	collaborators: Collaborator[];
}
