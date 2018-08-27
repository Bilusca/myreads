import React, { Component } from "react"
import { Route } from 'react-router-dom'
import * as _ from 'lodash'
import swal from 'sweetalert'
import * as BooksAPI from './utils/BooksAPI'
import BooksShelf from './components/BooksShelf'
import AddBook from './components/AddBook'
import Loading from './components/Loading'
import './App.css'

class App extends Component {
  state = {
    books: [],
    shelf: [
      {id: 'currentlyReading', value: 'Currently reading'},
      {id: 'wantToRead', value: 'Want to Read'},
      {id: 'read', value: 'Read'},
      {id: 'none', value: 'None'}
    ],
    show: false
  }

  componentDidMount() {
    this.showLoading(true)
    BooksAPI.getAll().then(res => {
      this.setState({ books: res, show: false })
    })
  }

  showLoading(show) {
    this.setState({ show })
  }

  onShelfUpdate = (book, shelf) => {
    this.showLoading(true)

    if(!book.shelf) {
      if(_.find(this.state.books, { 'title' : book.title })) {
        this.showLoading(false)
        return swal('Oh no!','This book is already in Shelf!', 'warning')
      }
    } else if (book.shelf === shelf) {
      this.showLoading(false)
      return swal('Oh no!','This book is already in Shelf!', 'warning')
    }

    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book]),
        show: false
      }))
      if(shelf === 'none') {
        return swal('Success!','Book removed from shelf.', 'success')
      }

      return swal('Success!','Book moved to shelf!', 'success')
    })
  }

  render() {
    const { books, shelf, show } = this.state;

    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <BooksShelf books={books} onShelfUpdate={this.onShelfUpdate} shelf={shelf}/>
          )} />
          <Route path="/add" render={() => (
            <AddBook shelf={shelf} showLoading={this.showLoading} onShelfUpdate={(book, shelf) => this.onShelfUpdate(book, shelf) } />
          )} />

          <Loading show={show} />
      </div>
    )
  }
}

export default App;
