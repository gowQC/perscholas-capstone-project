import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 4,
    required: true,
  },
  creditCard: {
    type: Number,
    // different credit cards have different lengths
    minLength: 14,
    maxLength: 19,
  },
});

export default mongoose.model("User", userSchema);
