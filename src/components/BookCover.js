import React from 'react';

const BookCover = ({ image, bookId }) => {
  return (
    <div className="book-cover" onClick={() => {
      console.log(bookId)
    }} style={{
      width: 128,
      height: 193,
      backgroundImage: `url("${image}")`
    }}></div>
  )
}

export default BookCover