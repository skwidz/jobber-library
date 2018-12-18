export interface Book { 
	title: any;
	id: number;
	author: string,
	genre: string,
	synopsis: string,
	avalible: boolean;
	signed_out_to: string;
}

export function createBook(config: Book): {
	title: string,
	author: string,
	genre: string,
	synopsis: string,
	id: number,
	avalible: boolean,
	signed_out_to: string,
} {
	return { 
		title: config.title,
		id: config.id,
		author: config.author, 
		genre: config.genre,
		synopsis: config.synopsis,
		avalible: config.avalible,
		signed_out_to: config.signed_out_to,
	}
}