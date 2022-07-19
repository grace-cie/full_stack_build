import Review from '../models/ReviewModel.js';
import Book from '../models/BooksModel.js';
import { createError } from '../utils/error.js';

//create
export const createReview = async (req, res, next) => {
  const bookId = req.params.bookId;
  const createReview = new Review(req.body);

  try {
    const saveReview = await createReview.save();

    try {
      await Book.findByIdAndUpdate(bookId, {
        $push: {
          reviewId: saveReview.id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(saveReview);
  } catch (err) {
    next(err);
  }
};

//update
export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { next: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteReview = async (req, res, next) => {
  const bookId = req.params.bookId;

  try {
    await Review.findByIdAndDelete(req.params.id);

    try {
      await Book.findByIdAndDelete(bookId, {
        $pull: { reviewId: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json('Review has been deleted');
  } catch (err) {
    next(err);
  }
};
