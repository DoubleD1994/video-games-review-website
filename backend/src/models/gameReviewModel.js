import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GameReviewSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  reviewTitle: {
    type: String,
    required: "Enter the title of the review",
  },
  gameTitle: {
    type: String,
    required: "Enter the title of the game being reviewed",
  },
  gameCategories: {
    type: [],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  review: {
    type: String,
    required: "please enter a review",
  },
});
