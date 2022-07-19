import User from '../models/UserModel.js';
import { createError } from '../utils/error.js';

//UPDATE USER

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE USER

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('user is deleted');
  } catch (er) {
    res.status(500).json(err);
  }
};

//GET USER
export const getUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);

    res.status(200).json(getUser);
  } catch (er) {
    res.status(500).json(err);
  }
};

//GETALL
export const getAllUser = async (req, res, next) => {
  const failed = false;

  if (failed) return next(createError(401, 'you are not authenticated'));

  try {
    const getAllUsers = await User.find();
    res.status(200).json(getAllUsers);
  } catch (error) {
    next(err);
  }
};
