import React, { useEffect, useState } from 'react';
import './books.css';

import Header from '../Header';

import axios from 'axios';

const Books = ({ title }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const getBook = await axios.get('http://localhost:8000/server/book');

      setBooks(getBook.data);
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <h1>{title}</h1>
      </div>
      {books.map((book) => (
        <div key={book._id}>
          {/* <p>{book.authorId}</p> */}
          <p>{book.bookTitle}</p>
          <p>{book.publishDate}</p>
          <div>
            <p>{book.review}</p>
          </div>
          <p>{book.rating}</p>
          <p>{book.isAvailable}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
