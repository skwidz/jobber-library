	import Modal from '@bdenzer/react-modal';
	import * as React from 'react';
	
	import { AdditionalBookInfo, Book } from '../interfaces/BookInterface';

	interface Props {
		modalVisible: boolean;
		activeItem: Book;
		additionalInfo: AdditionalBookInfo;
		closeModal: () => void;
	}

	export default class BookModal extends React.Component<any, any> {
		constructor (props: any){
			super(props)
			this.state = {isShown: false}
		} 
		
		public render(){
			return (
				<div>
					<Modal
						shouldShowModal={this.props.modalVisible}
						closeModal={this.props.closeModal}
					>
						<h2>{this.props.activeItem.author} - {this.props.activeItem.title}</h2>
						<h5>{this.props.additionalInfo.subtitle}</h5>
						<img src={this.props.additionalInfo.imageLink}/>
						<p>{this.props.additionalInfo.description}</p>

					</Modal>
				</div>
			)
		}

	}
