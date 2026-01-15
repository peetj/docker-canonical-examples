const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const url = process.env.MONGO_URL;
let db;

MongoClient.connect(url).then(client => {
  db = client.db();
  console.log("Connected to MongoDB");
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await db.collection("tasks").find().toArray();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const task = { title: req.body.title, completed: false };
  await db.collection("tasks").insertOne(task);
  res.status(201).json(task);
});

app.listen(3000, () => {
  console.log("API listening on port 3000");
});
