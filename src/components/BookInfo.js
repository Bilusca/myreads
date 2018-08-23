/**
 * TODO: Book Info Page
 */
import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'

class BookInfo extends Component {

  state = {
    book: {}
  }

  componentDidMount() {
    const { bookId } = this.props;
    BooksAPI.get(bookId)
      .then((book) => {
        console.dir(book)
        this.setState({ book })
      })
  }

  render() {
    const { book } = this.state;

    return (
      <div>
        <div className="book-info-header">
          <Link className="close-search" to="/">Close</Link>
          <h1>{book.title}</h1>
        </div>
        <div className="container-book">
          <div className="book-img">
            AQUI VAI A IMG
          </div>
          <div className="book-info">
            AQUI VAI A Info
          </div>
        </div>
      </div>
    )
  }
}

export default BookInfo