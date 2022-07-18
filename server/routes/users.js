import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controllers/user.js';

import { verifyForAdmin, verifyForUser } from '../utils/verifyToken.js';

const router = express.Router();

//update
router.put('/:id', verifyForUser, updateUser);

//delete
router.delete('/:id', verifyForAdmin, deleteUser);

//get
router.get('/:id', verifyForUser, getUser);

//getAll
router.get('/', getAllUser);

export default router;
