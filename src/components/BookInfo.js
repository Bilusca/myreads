/**
 * TODO: Book Info Page
 */
import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Loading from './Loading'

class BookInfo extends Component {

  state = {
    book: {},
    showLoading: true
  }

  componentDidMount() {
    const { bookId } = this.props;
    BooksAPI.get(bookId)
      .then((book) => {
        console.dir(book)
        this.setState({ book, showLoading: false })
      })
  }

  render() {
    const { book, showLoading } = this.state
    const { history } = this.props


    return (
      <div>
        <div className="book-info-header">
          <button className="go-back" onClick={history.goBack}>Close</button>
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

        <Loading show={showLoading} />
      </div>
    )
  }
}

export default BookInfo