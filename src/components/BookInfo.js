/**
 * TODO: Book Info Page
 */
import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'

class BookInfo extends Component {

  state = {
    book: {}
  }

  componentDidMount() {
    const { bookId } = this.props;
    BooksAPI.get(bookId)
      .then((book) => {
        this.setState({ book })
      })
  }

  render() {

    return (
      <div>
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