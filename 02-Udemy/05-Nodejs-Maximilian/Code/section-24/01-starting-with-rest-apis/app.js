const express = require("express");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()) // x-www-form-unrluncoded <form>
app.use(express.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next()
});

app.use("/feed", feedRoutes);

app.listen(8080);
