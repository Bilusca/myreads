import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as _ from 'lodash'

const Shelf = ({ books, type, title, shelf, onShelfUpdate }) => {

  const sortedArray = _.sortBy(books.filter( book => book.shelf === type), ['title'])

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="ookshelf-books">
        <ol className="books-grid">
          {sortedArray.length > 0 ? (
            sortedArray.map((book) => (
              <Book key={book.id} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} />
            ))
              ) : (
            <div className="empty-shelf">
              Please, add a book on this shelf.
            </div>
          )}
        </ol>
    </div>
  </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired
}

export default Shelf