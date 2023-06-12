import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.image = "nasal.png";
  newTuit.time = "Now";
  (newTuit.handle = "@spacex"), tuits.push(newTuit);
  res.json(newTuit);
};
const findTuits = (req, res) => {
  res.send(tuits);
};
const updateTuit = (req, res) => {
  const getId = req.params.tid;
  const dataToUpdate = req.body;
  const findTuit = tuits.findIndex((t) => t._id === getId);
  tuits[findTuit] = { ...tuits[findTuit], ...dataToUpdate };
  res.sendStatus(200);
};
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
