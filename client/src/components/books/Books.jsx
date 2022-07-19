import React from 'react';
import './books.css';
import bookimg from '../../assets/bookimg.jpg'

const Books = ({ books }) => {
  return (
    <div className='d-flex justify-content-center flex-nowrap'>
      {books.map((book) => (
        <div className="card" key={book._id}>
            <image className="card-img-top" src={bookimg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{book.bookTitle}</h5>
              <p className="card-text">Some quick example text to build on the book title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Publish Date: {book.publishDate}</li>
              <li className="list-group-item">Rating: {book.rating}</li>
              <li className="list-group-item">Availability: {book.isAvailable}</li>
            </ul>
            <div className="card-body d-flex flex-row">
              <button className='btn btn-primary p-2'>Borrow</button>
              <button className='btn btn-info p-2'>View Details</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
