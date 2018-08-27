import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import * as _ from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Book from './Book'
import Loading from './Loading'

class AddBook extends Component {
  state = {
    query: '',
    books: [],
    showLoading: false,
    message: 'Please, search a book.'
  }

  componentWillUnmount() {
    this.updateQuery.cancel();
  }

  showLoading = (showLoading) => {
    this.setState({ showLoading })
  }

  updateQuery = _.debounce((query) => {
    if (!query) return

    this.showLoading(true)
    this.setState({ query })
    BooksAPI.search(this.state.query).then( (books) => {
      if (books.hasOwnProperty('error')) {
        this.setState({ books: books.items, message: 'No matchs found.' })
        this.showLoading(false)
      } else {
        this.setState({ books, message: 'Please, search a book.' })
        this.showLoading(false)
      }
    })
  }, 500)

  render() {
    const { shelf, onShelfUpdate } = this.props
    const { books, showLoading, message } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" onChange={(ev) => this.updateQuery(ev.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 ? (
            <ol className="books-grid">
            {books.map( book => <Book key={book.id} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} /> )}
          </ol>
          ) : (
            <div className="empty-search">
              <h1>{message}</h1>
            </div>
          )}

        </div>

        <Loading show={showLoading} />
      </div>
    )
  }
}

AddBook.protoTypes = {
  shelf: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired
}

export default AddBook;