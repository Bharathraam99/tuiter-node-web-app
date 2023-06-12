import { v4 as uuidv4 } from "uuid";
let users = [];

export const findAllUsers = () => users;

export const findUserById = (uid) => {
  const index = users.findIndex((u) => u._id === uid);
  if (index !== -1) return users[index];
  return null;
};

export const findUserByUsername = (username) => {
  const index = users.findIndex((u) => u.username === username);
  if (index !== -1) return users[index];
  return null;
};

export const findUserByCredentials = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
};

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4(), firstName: "", lastName: "" };
  users.push(newUser);
  return newUser;
};

export const updateUser = (uid, user) => {
  const index = users.findIndex((u) => u._id === uid);
  users[index] = { ...users[index], ...user };
  return { status: "ok" };
};

export const deleteUser = (uid) => {
  const index = users.findIndex((u) => u._id === uid);
  users.splice(index, 1);
  return { status: "ok" };
};
