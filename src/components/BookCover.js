import React from 'react';
import PropTypes from 'prop-types'

const BookCover = ({ image }) => {
  return (
    <div className="book-cover"  style={{
      width: 128,
      height: 193,
      backgroundImage: `url("${image}")`
    }}></div>
  )
}

BookCover.protoTypes = {
  image: PropTypes.string.isRequired
}

export default BookCover