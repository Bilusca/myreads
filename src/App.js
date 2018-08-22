import React, { Component } from "react"
import * as _ from 'lodash'
import * as BooksAPI from "./utils/BooksAPI"
import BooksShelf from './components/BooksShelf'
import AddBook from './components/AddBook'
import BookInfo from "./components/BookInfo";
import { Route } from 'react-router-dom'
import "./App.css"

class App extends Component {
  state = {
    books: [],
    shelf: [
      {id: 'currentlyReading', value: 'Currently reading'},
      {id: 'wantToRead', value: 'Want to Read'},
      {id: 'read', value: 'Read'},
      {id: 'none', value: 'None'}
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({ books: res });
    });
  }

  onShelfUpdate = (book, shelf) => {
    if(!book.shelf) {
      if(_.find(this.state.books, { 'title' : book.title })) {
        return alert('This book is already in Shelf!')
      }
    } else if (book.shelf === shelf) {
      return alert('This book is already in Shelf!')
    }

    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const { books, shelf } = this.state;

    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <BooksShelf books={books} onShelfUpdate={this.onShelfUpdate} shelf={shelf}/>
          )} />
          <Route path="/add" render={({history}) => (
            <AddBook shelf={shelf} onShelfUpdate={(book, shelf) => {
              this.onShelfUpdate(book, shelf);
              history.push('/')
            }} />
          )} />
          <Route path="/book/:id" render={({ match }) => (<BookInfo bookId={match.params.id} />)}/>
      </div>
    )
  }
}

export default App;
