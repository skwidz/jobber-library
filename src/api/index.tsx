
import {AdditionalBookInfo, Book, createAdditionalInfo, createBook} from '../interfaces/BookInterface'

export function fetchBooks(): Promise<any>{
	return fetch("http://libraryapijobber.herokuapp.com/api/books/", {
		method: 'GET',
	})
	.then(res => res.json())
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

export function fetchBookReviews(): Promise<any>{
	return fetch("http://libraryapijobber.herokuapp.com/api/reviews/", {
		method: 'GET',
	})
	.then(res => res.json())
	.catch(err => {throw new Error(err)})
}