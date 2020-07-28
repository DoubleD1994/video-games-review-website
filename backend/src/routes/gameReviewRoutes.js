import {
  addNewGameReview,
  getGameReviews,
  getSingleGameReview,
  updateGameReview,
  deleteGameReview,
  searchForGameReview,
  authoriseUserIsAuthorOfReview,
} from "../controllers/gameReviewControllers";

import {
  addNewReviewComment,
  getReviewComments,
  updateReviewComment,
  deleteReviewComment,
  authoriseUserIsAuthorOfComment,
} from "../controllers/reviewCommentsControllers";

import { loginRequired } from "../controllers/userControllers";

const gameReviewRoutes = (app) => {
  app
    .route("/reviews")
    .get(getGameReviews)
    .post(loginRequired, addNewGameReview);

  app
    .route("/reviews/:reviewTitle")
    .get(getSingleGameReview)
    .put(loginRequired, authoriseUserIsAuthorOfReview, updateGameReview)
    .delete(loginRequired, authoriseUserIsAuthorOfReview, deleteGameReview);

  app
    .route("/reviews/:reviewTitle/comments")
    .get(getReviewComments)
    .post(loginRequired, addNewReviewComment);

  app
    .route("/reviews/:reviewTitle/comments/:commentid")
    .put(loginRequired, authoriseUserIsAuthorOfComment, updateReviewComment)
    .delete(loginRequired, authoriseUserIsAuthorOfComment, deleteReviewComment);

  app.route("/reviews/search").post(searchForGameReview);
};

export default gameReviewRoutes;
