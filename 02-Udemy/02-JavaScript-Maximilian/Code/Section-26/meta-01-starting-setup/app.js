const uid = Symbol();
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: "p1",
  name: "Hazem",
  age: 19,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

user.id = "p2";

console.log(user[Symbol("uid")]);

console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["Hazem", "Abdo", "Omar"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);
// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ---

const course = {
  title: "JavaScript",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Reflect.deleteProperty(course, "title");

// Object.deleteProperty(course, 'title')

// delete course.title

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj,propertyName,newValue) {
    console.log('Sinding data ...')
    if (propertyName === 'rating') {
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
