import mongoose from "mongoose";
import { GameReviewSchema } from "../models/gameReviewModel";

const GameReview = mongoose.model("GameReview", GameReviewSchema);

export const addNewGameReview = (req, res) => {
  const newGameReview = new GameReview(req.body);

  newGameReview.save((err, gameReview) => {
    if (err) {
      res.send({ success: false, error: err });
    }
    res.json({ success: true, review: gameReview });
  });
};

export const getGameReviews = (req, res) => {
  GameReview.find({}, (err, gameReviews) => {
    if (err) {
      res.send({ success: false, error: err });
    }
    res.json(gameReviews);
  });
};
