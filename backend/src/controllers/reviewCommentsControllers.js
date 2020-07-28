import mongoose from "mongoose";
import { ReviewCommentsSchema } from "../models/reviewCommentsModel";

const ReviewComment = mongoose.model("ReviewComment", ReviewCommentsSchema);

export const addNewReviewComment = (req, res) => {
  const reviewComment = new ReviewComment(req.body);
  reviewComment.author = req.user.username;
  reviewComment.reviewTitle = req.params.reviewTitle;
  reviewComment.save((err, gameReview) => {
    if (err) {
      res.status(400).json({ success: "false", err });
    }
    res.status(201).json({ success: true, review: gameReview });
  });
};

export const getReviewComments = (req, res) => {
  ReviewComment.find(
    { reviewTitle: { $regex: req.params.reviewTitle } },
    (err, reviewComments) => {
      if (err) {
        res.status(400).json({ success: "false", err });
      }
      res.status(200).json({
        success: "true",
        reviewComments,
      });
    }
  );
};

export const updateReviewComment = (req, res) => {
  ReviewComment.findOneAndUpdate(
    { _id: req.params.commentid },
    req.body,
    { new: true },
    (err, reviewComment) => {
      if (err) {
        res.status(400).json({
          success: "false",
          message: "There was an error when updating the comment.",
        });
      }
      res.status(202).json({ success: true, review: reviewComment });
    }
  );
};

export const deleteReviewComment = (req, res) => {
  ReviewComment.deleteOne(
    { _id: req.params.commentid },
    (err, reviewComment) => {
      if (err) {
        res.status(400).json({ success: "false", err });
      }
      res.status(202).json({
        success: true,
        message: "Comment successfully deleted",
      });
    }
  );
};

export const authoriseUserIsAuthorOfComment = (req, res, next) => {
  ReviewComment.find({ _id: req.params.commentid }, (err, comment) => {
    if (err) {
      res.status(404).json({ success: "false", message: "Comment not found." });
    }
    if (req.user.username === comment[0].author) {
      next();
    } else {
      return res.status(403).json({
        success: "false",
        message: "User forbidden from editting comment.",
      });
    }
  });
};
