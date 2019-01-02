export interface Review {
	book: any;
	review: string;
}

export function createReview(config: Review): {
	book: string,
	review: string,
} {
	return {
		book: config.book,
		review: config.review
	}	
}

export const emptyReview = createReview({
	book: "",
	review: "", 
})