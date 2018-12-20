export interface Book { 
	title: any;
	author: string,
	genre: string,
	synopsis: string,
	// id: number;
	// avalible: boolean;
	// signed_out_to: string;
}

export interface AdditionalBookInfo{
	subtitle: string,
	description: string,
	imageLink: string,
}

export function createBook(config: Book): {
	title: string,
	author: string,
	genre: string,
	synopsis: string,
	// id: number,
	// avalible: boolean,
	// signed_out_to: string,
} {
	return { 
		title: config.title,
		author: config.author, 
		genre: config.genre,
		synopsis: config.synopsis,
		// id: config.id,
		// avalible: config.avalible,
		// signed_out_to: config.signed_out_to,
	}
}

export function createAdditionalInfo(config: AdditionalBookInfo) :{
	subtitle: string,
	description: string,
	imageLink: string,
} {
	return { 
		subtitle: config.subtitle,
		description: config.description,
		imageLink: config.imageLink,
	}
}

export const emptyBook = createBook({
	title: "",
  author: "",
  genre: "",
  synopsis: "",
  // id: 0,
  // avalible: false,
  // signed_out_to: "",
})

export const emptyAdditionalInfo = createAdditionalInfo({
  subtitle: "",
  description: "",
  imageLink: ""
})