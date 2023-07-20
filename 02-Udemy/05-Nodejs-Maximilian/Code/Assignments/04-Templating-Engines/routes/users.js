const express = require("express");
const router = express.Router();

const usersList = require('./index');

router.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Users",
    users: usersList.users
  });
});

exports.router = router;
