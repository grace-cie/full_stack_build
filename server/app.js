import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to Mongo DB');
  } catch (err) {
    throw err;
  }
};

//routes

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const port = process.env.PORT;

app.listen(port, () => {
  connect();
  console.log('running on port', port);
});
