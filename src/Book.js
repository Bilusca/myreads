import React from 'react';
import BookCover from './BookCover';


const Book = ({ book, shelf, onShelfUpdate }) => {
  // console.log(book);
  return (
    <li>
      <div className="book">
          <div className="book-top">
            <BookCover image={book.imageLinks.smallThumbnail} />
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

export default Book;