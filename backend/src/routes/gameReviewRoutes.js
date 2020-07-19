import {
  addNewGameReview,
  getGameReviews,
} from "../controllers/gameReviewControllers";

const gameReviewRoutes = (app) => {
  app.route("/reviews").get(getGameReviews).post(addNewGameReview);
};

export default gameReviewRoutes;
