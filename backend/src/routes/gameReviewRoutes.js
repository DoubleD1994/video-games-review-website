import {
  addNewGameReview,
  getGameReviews,
  getSingleGameReview,
  updateGameReview,
  deleteGameReview,
} from "../controllers/gameReviewControllers";

const gameReviewRoutes = (app) => {
  app.route("/reviews").get(getGameReviews).post(addNewGameReview);

  app
    .route("/reviews/:reviewTitle")
    .get(getSingleGameReview)
    .put(updateGameReview)
    .delete(deleteGameReview);
};

export default gameReviewRoutes;
