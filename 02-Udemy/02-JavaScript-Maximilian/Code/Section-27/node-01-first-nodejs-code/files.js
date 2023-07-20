// const userName = 'Max';

// console.log(`Hi ${userName}!`);

const fs = require("fs");

fs.writeFile("user-data-txt", "userName=Hazem", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("wrote the file");
  }
});

fs.readFile("user-data-txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data.toString());
  }
});
