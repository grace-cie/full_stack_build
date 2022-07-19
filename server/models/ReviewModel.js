import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
  },
});

export default mongoose.model('Reviews', ReviewSchema);
