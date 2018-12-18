import { Book, createBook} from '../interfaces/BookInterface'

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
		method: 'GET'
	})
	.then(res => res.json)
	.catch(err => {throw new Error(err)})
}