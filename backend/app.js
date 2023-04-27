const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const d = require("./db.json");

const data = d;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send(data);

  // setTimeout(() => {
  //   res.send(data);
  // }, 2000);

  // throw new Error("error");
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
  const { name, ...putData } = req.body;
  targetUser = data.userprofile.find((x) => x.name === name);
  targetUserIdx = data.userprofile.indexOf(targetUser);
  data.userprofile[targetUserIdx] = {
    ...targetUser,
    ...putData,
  };
  res.send(data.userprofile);
});

app.delete("/", (req, res) => {
  const { name } = req.body;
  data.userprofile = data.userprofile.filter((x) => x.name !== name);
  res.send(data.userprofile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
