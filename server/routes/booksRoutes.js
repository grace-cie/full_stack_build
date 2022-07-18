import express from 'express';

import {
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBook,
} from '../controllers/bookController.js';

const router = express.Router();

//create
router.post('/', createBook);

//update
router.put('/:id', updateBook);

//delete
router.delete('/:id', deleteBook);

//get
router.get('/result/:id', getBook);

//getall
router.get('/', getAllBooks);

export default router;
