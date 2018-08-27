import React from 'react'
import BookCover from './BookCover'
import PropTypes from 'prop-types'
import noImageFound from '../img/no-image-available.jpg'


const Book = ({ book, shelf, onShelfUpdate }) => {
  let bookImage;
  if(book.hasOwnProperty('imageLinks')) {
    bookImage = (
      <BookCover bookId={book.id} image={book.imageLinks.smallThumbnail} />
    )
  } else {
    bookImage = (
      <BookCover bookId={book.id} image={noImageFound} />
    )
  }

  return (
    <li>
      <div className="book">
          <div className="book-top">
            {bookImage}
            <div className="book-shelf-changer">
              <select onChange={(ev) => onShelfUpdate(book, ev.target.value)} defaultValue="move">
                <option value="move" disabled>Move to...</option>
                {shelf.map((s) => <option key={s.id} value={s.id}>{s.value}</option>)}
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.map((author, i) => <p key={i}>{author}</p>)}</div>
        </div>
    </li>
  );
}

Book.protoTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired
}

export default Book;