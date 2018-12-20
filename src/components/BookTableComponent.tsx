import Modal from '@bdenzer/react-modal';

import * as React from 'react';

import { fetchBooks } from '../api'
import {AdditionalBookInfo, Book, createAdditionalInfo, createBook } from '../interfaces/BookInterface'


interface State {
	books: Book[];
}

interface Props {
	openModal: () => void;
	closeModal: () => void;
	updateActive: (book: Book) => void;
}


export default class BookTable extends React.Component<Props, State>{

	constructor (props: any){
		super(props)
		this.state = { books: []}
	}

	public componentDidMount() {
		fetchBooks()
		.then(res => {
			this.setState({books: res})
		})
	}

	public render() {

		
		return (
			<div className="row">
			
				<table className="table">
					<thead>{BookTableHeader()}</thead>
					<tbody>{this.state.books.map(book => this.BookTableRow(book, this.props.openModal, this.props.updateActive))}</tbody>
				</table>
			</div>
		)
	}

	private BookTableRow(book:Book, openModal: ()=> void, updateActive:(book:Book) => void){
		return (
			<tr key={book.title} >
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
					<button onClick={() => {openModal(); updateActive(book);}}>CHECKOUT</button>
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

