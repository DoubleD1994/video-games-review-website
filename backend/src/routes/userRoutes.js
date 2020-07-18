import { login, register } from "../controllers/userControllers";

const userRoutes = (app) => {
  app.route("/register").post(register);

  app.route("/login").post(login);
};

export default userRoutes;
