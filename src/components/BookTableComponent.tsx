import Modal from '@bdenzer/react-modal';

import * as React from 'react';

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
		this.setState(
			{books: [
				{
					title: '1984',
					id: 1,
					author:"George Orwell",
					genre: "Fiction",
					synopsis:"dsaj;flaksdjf; as;dlkfjasdf iasdjf asdkfj ujsdf wajf uefuas h awuefh 8wnh aseh iasdjfh asdkjasdf",
					avalible: true, 
					signed_out_to: "", 
				},
				{
					title: "A Brief History of Time", 
					author:"Stephen Hawking",
					genre: "test genre",
					synopsis:"dsaj;flaksdjf; as;dlkfjasdf iasdjf asdkfj ujsdf wajf uefuas h awuefh 8wnh aseh iasdjfh asdkjasdf",
					id: 2,
					avalible: false,
					signed_out_to: "chriwstian", 
				}
		]})
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
			<tr key={book.id} >
				<td>
					<span>{book.title}</span>
				</td>
				<td>
					<span>{book.author}</span>
				</td>
				<td>
					<span>{book.genre}</span>
				</td>
				<td>
					<span>
						{book.avalible ? "Avalible" : "Signed Out"}
					</span> 
				</td>
				<td>
					<span>
						{book.avalible ? "" : book.signed_out_to}
					</span>
				</td>
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
			<th>Avalible?</th>
			<th>Signed Out To</th>
		</tr>
	)
}

