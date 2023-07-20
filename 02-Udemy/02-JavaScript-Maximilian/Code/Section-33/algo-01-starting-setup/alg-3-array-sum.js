function sumUp(numbers) {
  let sum = 0; // 1

  for (let i = 0; i < numbers.length; i++) { // n
    sum += numbers[i];
  }
  return sum // 2
}

// Linear Time Complixty => O(n)

const array = [1, 2, 3];

console.log(sumUp(array));
