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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <BookTable updateActive={this.updateActive} openModal={this.openModal} closeModal={this.closeModal}/>
          {/*need to make a reference to this function.*/}
        {/*could i also put a modal on the table?*/}
          <BookModal activeItem={this.state.activeItem}  modalVisible={this.state.modalVisible} closeModal={this.closeModal}/> 
        </p>
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