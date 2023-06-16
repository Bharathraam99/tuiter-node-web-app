// import posts from "./tuits.js";
import * as tuitsDao from "./tuits-dao.js";

// let tuits = posts;
// const createTuit = (req, res) => {
//   const newTuit = req.body;
//   newTuit._id = new Date().getTime() + "";
//   newTuit.likes = 0;
//   newTuit.liked = false;
//   newTuit.dislikes = 0;
//   newTuit.image = "nasal.png";
//   newTuit.time = "Now";
//   (newTuit.handle = "@spacex"), tuits.push(newTuit);
//   res.json(newTuit);
// };
// const findTuits = (req, res) => {
//   res.send(tuits);
// };
// const updateTuit = (req, res) => {
//   const getId = req.params.tid;
//   const dataToUpdate = req.body;
//   const findTuit = tuits.findIndex((t) => t._id === getId);
//   tuits[findTuit] = { ...tuits[findTuit], ...dataToUpdate };
//   res.sendStatus(200);
// };
// const deleteTuit = (req, res) => {
//   const tuitdIdToDelete = req.params.tid;
//   tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
//   res.sendStatus(200);
// };

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.image = "nasal.png";
  newTuit.time = "Now";
  newTuit.handle = "@spacex";
  newTuit.replies = 0;
  newTuit.retuits = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
