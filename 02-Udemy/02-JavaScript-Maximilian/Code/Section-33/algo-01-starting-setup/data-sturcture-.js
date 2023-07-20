const age = [30, 29, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0, 1, 2 ] => [0, 1, 2, 3]
age.push(60); // Constant Time complexity: O(1)

// [30, 29, 54] => [_,30, 29, 54]
// [0, 1, 2 ] => [0, 1, 2, 3]
age.unshift(10); // Linear Time complexity: O(n)

const myAge = age[1]; // Constant Time Complixty: O(1)

// ------------

const namePupulartiy = [
  { userName: "Hazem", usage: 1 },
  { userName: "Omar", usage: 10 },
];

const omarUsage = namePupulartiy.find((pers) => pers.userName === "Omar").usage;

// BEST CASE: Constant Time complexity: O(1)
// Worst CASE: Linear Time complexity: O(n)
// Avarage CASE: Linear Time complexity: O(n)

const newMap = {
  "Omar": 10,
  "Hazem": 1,
};

const omarUsage2 = newMap["Omar"] // Constant Time complexity: O(1)


