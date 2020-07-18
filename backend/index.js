import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();

const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/videoGameDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "VIDEOGAMESITEAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

userRoutes(app);

app.get("/", (request, response) => {
  response.send("Hello Express :)");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
