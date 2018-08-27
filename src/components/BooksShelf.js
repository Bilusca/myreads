import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

const BooksShelf = ({ books, shelf, onShelfUpdate }) => {

  const shelfArray = shelf.filter( s => s.id !== 'none' )

  return (
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfArray.map( s => (
              <Shelf
                key={s.id}
                books={books}
                type={s.id}
                title={s.value}
                shelf={shelf}
                onShelfUpdate={onShelfUpdate}
              />
            ))}
          </div>
        </div>

        <div className="open-search">
          <Link to="/add">Add a book</Link>
        </div>

      </div>
  )
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
}

export default BooksShelf;