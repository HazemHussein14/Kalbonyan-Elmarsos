const numbers = [2.4, 3.5, 5, 5.6, 4, 9, 10];

const filteredNumbers = numbers.filter((number) => number > 5);

const objNumbers = numbers.map((number) => ({ num: number }));

const multipliedNumbers = numbers.reduce((acc, val) => acc * val, 1);

function findMax(...numbers) {
  return numbers.reduce((a, b) => {
    return Math.max(a, b);
  });
}

function findMinMax(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}
const [max, min] = findMinMax(1, 5);

const newList = new Set([1, 2, 3, 2]);

console.log(filteredNumbers);
console.log(objNumbers);
console.log(multipliedNumbers);
console.log(findMax(1, 4));
console.log(`Maximum: ${max}`);
console.log(`Minimum: ${min}`);
console.log(newList);
