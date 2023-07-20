const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const home = require("./routes/index");
const users = require("./routes/users");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(home.router);
app.use(users.router);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "404 Page Not Found" });
});

app.listen(3000);
