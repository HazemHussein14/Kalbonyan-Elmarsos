const express = require("express");
const bodyParser = require('body-parser');

const todosRoutes = require("./routes/todos");

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log("A middleware");
  next();
});

app.use(todosRoutes);

app.listen(3000);
