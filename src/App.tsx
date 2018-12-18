import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import BookModal from './components/BookModalComponent'
import BookTable from './components/BookTableComponent'
import { Book, createBook } from './interfaces/BookInterface'


interface State {
  activeItem: Book;
  modalVisible: boolean;
}

class App extends React.Component<any, State>

 {
  constructor(props: any){
    super(props)
    this.state = { 
      activeItem: createBook({
        title: "",
        author: "",
        genre: "",
        synopsis: "",
        id: 0,
        avalible: false,
        signed_out_to: ""
      }), 
      modalVisible: false,
    }
  }

  public render() {
    return (
      <div className="App">
        <BookTable updateActive={this.updateActive} openModal={this.openModal} closeModal={this.closeModal}/>
        <BookModal activeItem={this.state.activeItem}  modalVisible={this.state.modalVisible} closeModal={this.closeModal}/> 
      </div>
    );
  }
  private updateActive = (book: Book): void => {
    this.setState({ activeItem: book})
  }

  private openModal = (): void => {
    this.setState({ modalVisible: true })
  }

  private closeModal = (): void => {
    this.setState({ modalVisible: false })
  }
}

export default App;