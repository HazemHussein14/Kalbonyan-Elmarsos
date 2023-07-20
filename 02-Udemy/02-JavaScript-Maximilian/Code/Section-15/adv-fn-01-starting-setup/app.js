function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 8)); // 9
console.log(add(12, 15)); // 27

function addRadom(num1) {
  return num1 + Math.random();
}

console.log(addRadom(5));

let prevResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  prevResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 3));

const hobbies = ["sports", "reading"];

function printHobbies(h) {
  h.push("new hobby");
  console.log(hobbies);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "Hazem";

function greetUser() {
  // let name = "Ahmed";
  console.log("Hi " + name);
}

let name = "Omar";
userName = "Abdo";

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }


// function powerOf(x, n) {

//   // if (n === 1) {
//   //   return x;
//   // }
//   // return x * powerOf(x, n - 1);

//   return n === 1 ? x : x * powerOf(x, n - 1);
// }

// console.log(powerOf(2, 3)); // 2 * 2 * 2

function powerOf(x,n) {
  return x ** n
}

console.log(powerOf(2,3))

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));