class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  valuePerLength() {
    return this.price / this.length;
  }

  courseSummary() {
    return `${this.title} is a course with a length of ${this.length} and costs $${this.price}.`;
  }
}

const course1 = new Course("JavaScript Basics", 10, 100);
const course2 = new Course("Advanced JavaScript", 20, 200);

console.log(course1);
console.log(course2);

console.log("Value per length:", course1.valuePerLength());
console.log("Course summary:", course1.courseSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log(`${this.title} is now available for purchase!`);
  }
}

const practicalCourse = new PracticalCourse("React Fundamentals", 15, 150, 20);
const theoreticalCourse = new TheoreticalCourse("Node.js", 12, 120);

console.log(practicalCourse);
console.log(practicalCourse.courseSummary());

theoreticalCourse.publish();
console.log(theoreticalCourse.courseSummary());

class Pricing {
  #price;
  
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }

  get price() {
    return `$${this.#price}`;
  }

  set price(value) {
    if (value > 0) {
      this.#price = value;
    }
  }

  valuePerLength() {
    return this.#price / this.length;
  }

  courseSummary() {
    return `${this.title} is a course with a length of ${this.length} and costs ${this.price}.`;
  }
}

const course3 = new Course("Angular", 18, 180);

console.log(course3.courseSummary());
course3.price = -50;
console.log(course3.courseSummary());

