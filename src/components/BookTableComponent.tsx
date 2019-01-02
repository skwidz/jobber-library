import Modal from '@bdenzer/react-modal';

import * as React from 'react';
// import ReactDataGrid from 'react-data-grid';

import { fetchBookReviews, fetchBooks } from '../api'
import {AdditionalBookInfo, Book, createAdditionalInfo, createBook } from '../interfaces/BookInterface'
import {createReview, Review } from '../interfaces/ReviewInterface'


interface State {
	books: Book[];
	reviews: Review[];
}

interface Props {
	openModal: () => void;
	closeModal: () => void;
	updateActive: (book: Book) => void;
}


export default class BookTable extends React.Component<Props, State>{

	constructor (props: any){
		super(props)
		this.state = { books: [], reviews: []}
	}

	public componentDidMount() {
		fetchBooks()
		.then(res => {
			this.setState({books: res})
		})
		fetchBookReviews()
		.then(res => {
			this.setState({reviews: res})
		})
	}

	public render() {
		const columns = [
			{ key: 'title', name: 'Title' },
			{ key: 'author', name: 'Author'},
			{ key: 'genre', name: 'Genre'}
		]
		
		return (
			<div className="row">
				{/*<ReactDataGrid 
					columns={columns}
					rowGetter={(i: keyof Book) => this.state.books[i]}
					rowsCount={this.state.books.length}

				/>*/}
				{<table className="table">
					<thead>{BookTableHeader()}</thead>
					<tbody>{this.state.books.map(book => this.BookTableRow(book, this.props.openModal, this.props.updateActive))}</tbody>
				</table>}
			</div>
		)
	}

	private BookTableRow(book:Book, openModal: ()=> void, updateActive:(book:Book) => void){
		return (
			<tr key={book.title}  onClick={() => {openModal(); updateActive(book);}}>
				<td>
					<span>{book.title}</span>
				</td>
				<td>
					<span>{book.author}</span>
				</td>
				<td>
					<span>{book.genre}</span>
				</td>
				{/*<td>
					<span>
						{book.avalible ? "Avalible" : "Signed Out"}
					</span> 
				</td>
				<td>
					<span>
						{book.avalible ? "" : book.signed_out_to}
					</span>
				</td>*/}
				<td>
					<button onClick={() => {openModal(); updateActive(book);}}>More Info</button>
				</td>
			</tr>
			)
	}
}



const BookTableHeader = () => {
	return (
		<tr>
			<th>Title</th>
			<th>Author</th>
			<th>Genre</th>
			{/*<th>Avalible?</th>
			<th>Signed Out To</th>*/}
		</tr>
	)
}

