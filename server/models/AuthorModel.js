import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    unique: true,
  },
});

export default mongoose.model('Author', AuthorSchema);
