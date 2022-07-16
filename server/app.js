import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';

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
app.use(cookieParser());
app.use(express.json()); // para ma send ang json file sa postMan nig request 😊

//routes
app.use('/server/auth', authRoute);
app.use('/server/users', usersRoute);

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
