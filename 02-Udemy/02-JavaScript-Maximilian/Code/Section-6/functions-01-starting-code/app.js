const startGameBtn = document.getElementById("start-game-btn");

// you can store functions in a variable and call it with the variable name when you do this there is no need to give the function a name ==> anonymous function

// start() // error 

// const start = function () {
//   console.log("Game is Loading....");
// };

// start() // will work 

// const person = {
//   name: "Hazem",
//   greet: function greet() {
//     // this is called a METHOD
//     console.log("Hello there!");
//   },
// };

person.greet();

startGameBtn.addEventListener("click", function () {
  console.log("Game is Loading....")
}); // this is called a METHOD

// console.log(typeof(startGame)); // Function

// console.dir(startGame); // FUNCTIONS ARE OBJECTS !!!!!!!
