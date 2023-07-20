// const ids = new Set([1,2,3])
// console.log(ids)
// console.log(ids.has(2))
// console.log(ids.add(4))
// console.log(ids.delete(4))
// console.log(ids)

// for (const entry of ids.entries()) {
//   console.log(entry[1])
// }
const hobbies = [{ hobby: "reading" }, { sport: "running" }];
const person1 = new Map();
person1.set('Hobby',hobbies[0])
person1.set("Name", "Hazem");
person1.set("Age", 19);

console.log(person1);
console.log(person1.get("Name"));
console.log(person1.get("Hobby"));

for (const entry of person1.entries()) {
  console.log(entry)
}
for (const key of person1.keys()) {
  console.log(key)
}
