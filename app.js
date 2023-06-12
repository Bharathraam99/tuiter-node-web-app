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
// app.use(
//   cors({
//     credentials: true,
//     origin: "https://bharathraamwebdeva5.netlify.app",
//   })
// );
// const port = process.env.PORT || 4000;
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://bharathraamwebdeva5.netlify.app",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);
