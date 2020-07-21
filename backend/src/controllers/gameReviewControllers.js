import mongoose from "mongoose";
import { GameReviewSchema } from "../models/gameReviewModel";

const GameReview = mongoose.model("GameReview", GameReviewSchema);

export const addNewGameReview = (req, res) => {
  const newGameReview = new GameReview(req.body);

  newGameReview.save((err, gameReview) => {
    if (err) {
      res.status(400).json({ success: "false", err });
    }
    res.status(201).json({ success: true, review: gameReview });
  });
};

export const getGameReviews = (req, res) => {
  GameReview.find({}, (err, gameReviews) => {
    if (err) {
      res.status(400).json({ success: "false", err });
    }
    res.status(200).json(gameReviews);
  });
};

export const getSingleGameReview = (req, res) => {
  GameReview.find(
    { reviewTitle: req.params.reviewTitle },
    (err, gameReview) => {
      if (err) {
        res
          .status(404)
          .json({ success: "false", message: "Game review not found." });
      }
      res.status(200).json(gameReview);
    }
  );
};

export const updateGameReview = (req, res) => {
  GameReview.findOneAndUpdate(
    { reviewTitle: req.params.reviewTitle },
    req.body,
    { new: true },
    (err, gameReview) => {
      if (err) {
        res.status(400).json({ success: "false", err });
      }
      res.status(202).json({ success: true, review: gameReview });
    }
  );
};

export const deleteGameReview = (req, res) => {
  GameReview.deleteOne(
    { reviewTitle: req.params.reviewTitle },
    (err, gameReview) => {
      if (err) {
        res.status(400).json({ success: "false", err });
      }
      res.status(202).json({
        success: true,
        message: "Game review successfully deleted",
      });
    }
  );
};

export const searchForGameReview = (req, res) => {
  GameReview.find(
    {
      $and: [
        { author: { $regex: req.body.author } },
        { reviewTitle: { $regex: req.body.reviewTitle } },
        { gameTitle: { $regex: req.body.gameTitle } },
        { gameCategories: { $regex: req.body.gameCategories } },
      ],
    },
    (err, gameReview) => {
      if (err) {
        res.status(400).json({ success: "false", err });
      }
      res.status(200).json({
        success: "true",
        gameReview,
      });
    }
  );
};
