const { Router } = require("express");
const courceRouter = Router();

courceRouter.post("/user/purchase", (req, res) => {
  res.json({
    message: "your courcse",
  });
});

courceRouter.get("/course/view", (req, res) => {
  res.json({
    message: "all courcse",
  });
});
module.exports = {
  courceRouter: courceRouter,
};
