import express from "express";
import session from "express-session";
import cors from "cors";
import AuthController from "./users/auth-controller.js";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://bharathraamwebdeva5.netlify.app/",
  })
);
// const port = process.env.PORT || 4000;

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(4000);
// app.listen(process.env.PORT || 4000);
