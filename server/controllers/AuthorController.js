import Author from '../models/AuthorModel.js';
import Book from '../models/BooksModel.js';
import { createError } from '../utils/error.js';

//CREATE
export const createAuthor = async (req, res, next) => {
  const bookId = req.params.bookId;
  const createAuthor = new Author(req.body);

  try {
    const saveAuthor = await createAuthor.save();

    try {
      await Book.findByIdAndUpdate(bookId, {
        $push: { authorId: saveAuthor.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(saveAuthor);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateAuthor = async (req, res, next) => {
  const authorId = req.params.id;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedAuthor);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteAuthor = async (req, res, next) => {
  const bookId = req.params.bookId;

  try {
    await Author.findByIdAndDelete(req.params.id);

    try {
      await Book.findByIdAndUpdate(bookId, {
        $pull: { authorId: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json('Author has been deleted');
  } catch (err) {
    next(err);
  }
};

//GET
export const getAuthor = async (req, res, next) => {
  try {
    const getAuthor = await Author.findById(req.params.id);

    res.status(200).json(getAuthor);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getAllAuthor = async (req, res, next) => {
  try {
    const getAllAuthor = await Author.find();

    res.status(200).json(getAllAuthor);
  } catch (er) {
    next(err);
  }
};
