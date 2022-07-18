import User from '../models/UserModel.js';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

//REGISTER USER
export const register = async (req, res, next) => {
  try {
    //bcrypt password
    const salt = bcrypt.genSaltSync(10);
    const passwordhash = bcrypt.hashSync(req.body.password, salt);

    const newUser = User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: passwordhash,
      cpassword: passwordhash,
    });

    if (req.body.password !== req.body.cpassword)
      return next(createError(400, 'password should be the same'));

    await newUser.save();
    res.status(200).send('User has been registered');
  } catch (err) {
    next(err);
  }
};

//LOGIN USER
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User Not Found!'));

    const isPasswordIsCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordIsCorrect)
      return next(createError(400, 'Wrong password or username'));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
