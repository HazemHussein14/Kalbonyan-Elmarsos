const movieList = document.getElementById("movie-list");
movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userChoosenInput = 'level'

let person = {
  "first name": "Hazem",
  age: 19,
  [userChoosenInput]: 'anything',
  hobbies: ["Coding", "Reading"],
  greet: function () {
    alert("Hi There!");
  },
  1.5: "hello",
};
person.age = 20;
person.isAdmin = true;
delete person.hobbies;

console.log(person["first name"]);
console.log(person["1.5"]);

const numbers = { 2: "two", 1: "one" };
console.log(numbers);
console.log(person);
