import React, { Component } from 'react';
import Book from './Book';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

class BooksShelf extends Component {

  render() {
    const { books, shelf, onShelfUpdate } = this.props;

    const readBooks = _.sortBy(books.filter( book => book.shelf === 'read'), ['title'])
    const wantToReadBooks = _.sortBy(books.filter( book => book.shelf === 'wantToRead'), ['title'])
    const currentlyReadingBooks = _.sortBy(books.filter( book => book.shelf === 'currentlyReading'), ['title'])

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="ookshelf-books">
               <ol className="books-grid">
                {currentlyReadingBooks.map((book, i) => <Book key={i} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} />)}
               </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="ookshelf-books">
               <ol className="books-grid">
                {wantToReadBooks.map((book, i) => <Book key={i} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} />)}
               </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="ookshelf-books">
               <ol className="books-grid">
                {readBooks.map((book, i) => <Book key={i} book={book} shelf={shelf} onShelfUpdate={onShelfUpdate} />)}
               </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/add">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksShelf;