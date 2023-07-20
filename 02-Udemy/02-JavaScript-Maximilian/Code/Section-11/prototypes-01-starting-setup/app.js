class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Hazem";
  constructor() {
    // super()
    this.age = 19;
  }

  greet = () => {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
  };

  // greet() {
  //   console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
  // }
}

// function Person() {
//   this.name = "Hazem";
//   this.age = 20;
//   this.greet = function() {
//     console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age)
//   }
// }

// Person.prototype.printAge = function() {
//   console.log(this.age)
// }

// let p = new Person();
// p.greet();
// p.printAge()
// console.log(p.__proto__)
// const p2 = new p.__proto__.constructor();
// console.log(p2)

// let p = new Person();
// let p2 = new Person();
// console.log(p.__proto__ === p2.__proto__)

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course = {
  // new Object()
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);
 
// student.name = 'Max';

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
