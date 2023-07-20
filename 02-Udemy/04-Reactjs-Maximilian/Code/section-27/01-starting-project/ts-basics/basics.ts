let age: number;

age = 12;

let userName: string ;

userName = 'Hazem';

let isInstructor: boolean;

isInstructor = false;

let hobbies: string[]

hobbies = ['Sports','coding']

type Person = {
  name: string,
  age: number
}

let person: Person;

person = {
  name: 'Hazem',
  age: 20
}

let people: Person[];

let course: string | number = 'React - The Complete Guide';

course = 34;

// function and types

function addNumber(a:number, b:number): number {
  return a + b;
}

function printValue(value: any) {
  console.log(value)
}

// generics

function insertAtBeginning<T>(array: T[],value: T) {
  const newArray = [value,...array];
  return newArray;
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray,-1)

const stringArray = insertAtBeginning(['a','b','c'],'d')

// updatedArray[0].split('');

