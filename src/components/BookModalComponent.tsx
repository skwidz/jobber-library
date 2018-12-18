	import Modal from '@bdenzer/react-modal';
	import * as React from 'react';
	
	import { Book } from '../interfaces/BookInterface';

	interface Props {
		modalVisible: boolean;
		activeItem: Book;
		closeModal: () => void;
	}

	export default class BookModal extends React.Component<any, any> {
		constructor (props: any){
			super(props)
			this.state = {isShown: false}
			this.close = this.close.bind(this);
	    this.open = this.open.bind(this);
	    this.openTest = this.openTest.bind(this);
		} 
		

		public render(){
			return (
				<div>
					<Modal
						shouldShowModal={this.props.modalVisible}
						closeModal={this.props.closeModal}
					>
						<h2>{this.props.activeItem.author} - {this.props.activeItem.title}</h2>
						<h5>{this.props.activeItem.genre}</h5>
						<p>{this.props.activeItem.synopsis}</p>
					</Modal>
				</div>
			)
		}

		public open(book: Book): void {
			this.setState({ book, isShown: true})
		}

		private close(): void {
			this.setState({ isShown: false})
		
		}

		private openTest(): void {
			this.setState({ isShown: true})
		}

	}
