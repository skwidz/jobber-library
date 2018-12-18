import {AdditionalBookInfo, Book, createAdditionalInfo, createBook} from '../interfaces/BookInterface'

// const fetchBooks = (): Promise<any> => {
// 	return fetch('https://libraryapijobber.herokuapp.com/admin')
// 	.then(res => {
// 		if (!res.ok) {
// 			throw new Error(res.statusText)
// 		}
// 		return res.json
// 	})
// };

// export const booksAPI = {
// 	fetchBooks,
// }; 

export function fetchBooks(): Promise<any>{
	return fetch("https://libraryapijobber.herokuapp.com/api/books",{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
      'Accept': 'application/json',
		}
	})
	.then(res => res.json)
	.catch(err => {throw new Error(err)})
}

export function getBookInfo(book: Book): Promise<any>{
	return fetch("https://www.googleapis.com/books/v1/volumes?q=" + book.title +"+inauthor:" + book.author, {
		method: 'GET'
	})
	.then(res => res.json())
	.then(res => {
		return res
	})
	.then(res => {
		const item = res.items[0]
		return createAdditionalInfo({
			subtitle: item.volumeInfo.subtitle,
			description: item.volumeInfo.description,
			imageLink: item.volumeInfo.imageLinks.thumbnail,
		}) 
	})
	.catch(err => {throw new Error(err)})
}