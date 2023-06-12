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
    store: new session.MemoryStore(),
  })
);

const allowedOrigins = [
  "http://localhost:3000",
  "https://bharathraamwebdeva5.netlify.app",
  "https://tuiter-node-web-app.onrender.com",
];

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);

app.use(express.json());

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(4000);
