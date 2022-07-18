import express from 'express';
import {
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/ReviewController.js';

const router = express.Router();

//create
//localhost:8000/server/review/bookID
router.post('/:bookId', createReview);

//update
router.put('/:id', updateReview);

//delete
//localhost:8000/server/review/reviewId/bookID
router.delete('/:id/:bookId', deleteReview);

export default router;
