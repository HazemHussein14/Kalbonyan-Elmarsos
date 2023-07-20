const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log('first middleware')
//   next()
// });

// app.use((req, res, next) => {
//   console.log('2nd middleware')
//   res.send('<h1>returning HTML!</h1>')
// });

app.use("/users", (req, res) => {
  console.log('USERS RESPONSE')
  res.send("<h1>Second Response</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>First Response</h1>");
});

app.listen(3000);
