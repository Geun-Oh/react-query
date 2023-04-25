const express = require("express");
const app = express();
const port = 3000;
const d = require("./db.json");

const data = d;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/", (req, res) => {
  const userprofile = data.userprofile;
  const newData = {
    id: userprofile.length + 1,
    ...req.body,
  };
  userprofile.push(newData);
  res.send(userprofile);
});

app.put("/", (req, res) => {
  const { id, ...putData } = req.body;
  data.userprofile[id - 1] = {
    ...data.userprofile[id - 1],
    ...putData,
  };
  res.send(data.userprofile);
});

app.delete("/", (req, res) => {
  const { id } = req.body;
  data.userprofile = data.userprofile.filter((x) => x.id !== id);
  res.send(data.userprofile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
