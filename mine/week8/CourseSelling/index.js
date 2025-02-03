const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courcse");

app.get("/", (req, res) => {
  res.send("hi there ");
});

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
