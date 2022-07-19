import React from 'react';
import './books.css';

const Books = ({ books }) => {
  return (
    <div>
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
