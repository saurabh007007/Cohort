const express = require("express");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://2204280100153:2204280100153@saurabhlearn.azcyh.mongodb.net/todo-saurabh"
);

const { UserModel, TodoModel } = require("./db");

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const hasedPassword = await bcrypt.hash(password, 5);
  console.log(hasedPassword);

  await UserModel.create({
    email: email,
    password: hasedPassword,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});
app.post("/todo", auth, (req, res) => {
  const userId = req.userId;
  console.log("done login");
  res.json({
    userId: userId,
  });
});
app.get("/todos", auth, (req, res) => {});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
