const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomTwo = Math.random();

if (randomNumber > 0.7) {
  alert("the random number exeeded 0.7");
}

let numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

// the reverse counter

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// second condition

if (randomNumber > 0.7 && randomTwo > 0.7) {
  alert("Both are greater than 0.7");
} else if (
  (randomNumber < 0.2 && randomTwo > 0.2) ||
  (randomTwo < 0.2 && randomNumber > 0.2)
) {
  alert("one of them is greater than 0.2");
}
