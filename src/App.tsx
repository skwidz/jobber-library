import * as React from 'react';
import './App.css';

import { fetchBookReviews, getBookInfo } from './api'
import logo from './logo.svg';

import BookModal from './components/BookModalComponent'
import BookTable from './components/BookTableComponent'
import { AdditionalBookInfo, Book, createAdditionalInfo, createBook,emptyAdditionalInfo, emptyBook } from './interfaces/BookInterface'
import { Review } from './interfaces/ReviewInterface'

interface State {
  activeItem: Book;
  additionalInfo: AdditionalBookInfo;
  reviews: Review[];
  modalVisible: boolean;
}

class App extends React.Component<any, State>

 {
  constructor(props: any){
    super(props)
    this.state = { 
      activeItem: emptyBook,
      modalVisible: false,
      additionalInfo: emptyAdditionalInfo,
      reviews: [] 
    }
  }
  public componentDidMount() {
    fetchBookReviews()
    .then(rev => this.setState({reviews: rev}))
  }

  public render() {
    return (
      <div className="App">
        <BookTable updateActive={this.updateActive} openModal={this.openModal} closeModal={this.closeModal}/>
        <BookModal activeItem={this.state.activeItem} additionalInfo={this.state.additionalInfo} modalVisible={this.state.modalVisible} closeModal={this.closeModal} reviews={this.state.reviews}/> 
      </div>
    );
  }
  private updateActive = (book: Book): void => {
    this.setState({ activeItem: book})
    const info = getBookInfo(book)
      .then(inf => this.setState({additionalInfo: inf}))
    
  }

  private openModal = (): void => {
    this.setState({ modalVisible: true })
  }

  private closeModal = (): void => {
    this.setState({ modalVisible: false, additionalInfo: emptyAdditionalInfo})
  }
}

export default App;