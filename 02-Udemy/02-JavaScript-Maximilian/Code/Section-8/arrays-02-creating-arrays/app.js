// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["coding", "reading"];
// const personalData = [19, "Hazem", { moreDetails: [] }];

// const analyticsData = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint)
//   }
// }

// const hobbies = ['cooking','reading']
// hobbies.push('sports')
// hobbies.unshift('coding')
// const popedElement =  hobbies.pop()
// const shiftedElement = hobbies.shift()
// console.log(hobbies)

// hobbies[1] = 'coding'
// // hobbies[5] = 'running' //rarely used
// console.log(hobbies,hobbies[4])

// hobbies.splice(0,0,'Good food')
// console.log(hobbies)

// const splieceElement =  hobbies.splice(1,1,'running')
// console.log(hobbies)
// hobbies.push(splieceElement)
// console.log(hobbies)

// for (hobby of hobbies) {
//   console.log(hobby)
// // }

// const testResults = [1, 2, 3, 5, 6];
// // const storedResults = testResults.slice(-3,-1)
// const storedResults = testResults.concat([-1, -2, -3, -4, -5], "concat method");

// testResults.push(-9999);

// console.log(storedResults, testResults);
// console.log(storedResults.indexOf("concat method"));
// console.log(storedResults.includes("concat method"));

// const personalData = [{ name: "Hazem" }, { name: "hazem" }];
// console.log(personalData.indexOf({ name: "Hazem" })); // returns -1 ==> NOT FOUND

// const Hazem = personalData.find((person, index, personalData) => {
//   return person.name === "Hazem";
// });
// console.log(Hazem, personalData);

// const hazemIndex = personalData.findIndex((person, index, personalData) => {
//   return person.name === "hazem";
// });
// console.log(hazemIndex);

// const prices = [10, 20, 30, 40];
// const tax = 1;
// const taxAdjustedPrices = [];

// // for (let i = 0; i < prices.length; i++) {
// //   taxAdjustedPrices.push(prices[i] + tax)
// // }

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price + tax)
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrices: price + tax };
//   taxAdjustedPrices.push(priceObj);
// });

// const prices = [4.22, -1.99, 1, -9.5];
// const tax = 1;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrices: price + tax };
//   return priceObj;
// });

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });

// console.log(sortedPrices);

// const filteredPrices = prices.filter((price) => price < 1);

// console.log(filteredPrices);

// let sum = 0;

// prices.forEach((number) => (sum += number));
// console.log(sum.toFixed());

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log(sum.toFixed());

// const data = "Hazem Hussein;2003;19";
// const transformedData = data.split(";");
// console.log(transformedData);

// const newData = ["hazem", "hussein", 1, 4];
// const joinedData = newData.join(' | ')

// console.log(joinedData)

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{ name: 'Hazem', age: 19 }, { name: 'Omar', age: 10 }];
// const copiedPersons = persons.map(person => ({
//   name: person.name,
//   age: person.age
// }));

// persons.push({ name: 'Ahmed', age: 29 });
// persons[0].age = 31;

// console.log(persons, copiedPersons);
const nameData = ['Hazem', 'Hussein', 'Mr', 19];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName,lastName,...otherData] = nameData;
console.log(firstName,lastName,otherData)