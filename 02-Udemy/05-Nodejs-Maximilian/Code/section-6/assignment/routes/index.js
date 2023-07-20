const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home",
  });
});

const users = [];

router.post("/users", (req, res) => {
  users.push({ title: req.body.title });
  res.redirect('/users')
});


exports.users = users;
exports.router = router;
