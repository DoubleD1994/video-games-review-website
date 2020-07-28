import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ReviewCommentsSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  reviewTitle: {
    type: String,
    required: "Enter the title of the review",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
    required: "please enter a comment",
  },
});
