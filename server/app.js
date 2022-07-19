import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import bookRoute from './routes/booksRoutes.js';
import authorRoute from './routes/authorRoutes.js';
import reviewRoute from './routes/reviewRoutes.js';

const app = express();
dotenv.config();

//initial connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to Mongo DB');
  } catch (err) {
    throw err;
  }
};

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // para ma send ang json file sa postMan nig request 😊

//routes
app.use('/server/auth', authRoute);
app.use('/server/users', usersRoute);
app.use('/server/book', bookRoute);
app.use('/server/author', authorRoute);
app.use('/server/review', reviewRoute);

mongoose.connection.on('error', (err) => {
  console.log(err);
});

//writing error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  connect();
  console.log('running on port', port);
});
