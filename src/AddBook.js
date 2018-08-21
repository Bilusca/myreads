import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

import Book from './Book';

class AddBook extends Component {
  state = {
    query: '',
    books: []
  }

  componentWillUnmount() {
    this.updateQuery.cancel();
  }

  updateQuery = _.debounce((query) => {
    this.setState({ query });
    BooksAPI.search(this.state.query).then( (books) => {
      console.log(books)
      this.setState({ books })
    })
  }, 500)

  render() {
    const { shelf, onShelfUpdate } = this.props
    const { books } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" onChange={(ev) => this.updateQuery(ev.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {books.length > 0 && books.map( book => <Book key={book.id} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default AddBook;