import Modal from '@bdenzer/react-modal';
import * as React from 'react';

import { AdditionalBookInfo, Book } from '../interfaces/BookInterface';
import { Review } from '../interfaces/ReviewInterface'


interface Props {
	modalVisible: boolean;
	activeItem: Book;
	additionalInfo: AdditionalBookInfo;
	reviews: Review[]
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
					<h4>Reviews</h4>
					
						{this.props.reviews.filter((rev:Review) => rev.book === this.props.activeItem.title).map((reve:Review) => <p key={reve.book}>{reve.review}</p>)}
					
				</Modal>
			</div>
		)
	}

}
