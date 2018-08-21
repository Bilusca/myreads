import React from 'react';

const BookCover = ({ image }) => {
  return (
    <div className="book-cover" style={{
      width: 128,
      height: 193,
      backgroundImage: `url("${image}")`,
      backgroundColor: '#fafafa'
    }}></div>
  )
}

export default BookCover