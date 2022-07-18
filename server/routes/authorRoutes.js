import express from 'express';

import {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAllAuthor,
  getAuthor,
} from '../controllers/AuthorController.js';

const router = express.Router();

//create
router.post('/', createAuthor);

//update
router.put('/:id', updateAuthor);

//delete
router.delete('/:id/:bookId', deleteAuthor);

//get
router.get('/result/:id', getAuthor);

//getall
router.get('/', getAllAuthor);

export default router;
