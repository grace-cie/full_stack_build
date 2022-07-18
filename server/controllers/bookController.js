import Book from '../models/BooksModel.js';

import { createError } from '../utils/error.js';

//CREATE BOOK
export const createBook = async (req, res, next) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    next(err);
  }
};

//UPDATE BOOK
export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return next(createError(404, 'Book not found!'));

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE BOOK
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json('Book is Deleted');
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET BOOK
export const getBook = async (req, res, next) => {
  try {
    const getBook = await Book.findById(req.params.id);

    res.status(200).json(getBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL BOOK
export const getAllBooks = async (req, res, next) => {
  try {
    const getAllBooks = await Book.find();
    res.status(200).json(getAllBooks);
  } catch (err) {
    next(err);
  }
};
