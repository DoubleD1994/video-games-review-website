import {
  addNewGameReview,
  getGameReviews,
  getSingleGameReview,
  updateGameReview,
  deleteGameReview,
  searchForGameReview,
} from "../controllers/gameReviewControllers";

const gameReviewRoutes = (app) => {
  app.route("/reviews").get(getGameReviews).post(addNewGameReview);

  app
    .route("/reviews/:reviewTitle")
    .get(getSingleGameReview)
    .put(updateGameReview)
    .delete(deleteGameReview);

  app.route("/reviews/search").post(searchForGameReview);
};

export default gameReviewRoutes;
