// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Users {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}

class Admin extends Users {
  constructor(name: string, age: number, private permissions: string[]){
    super(name, age)
  }
}

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const btn = document.querySelector('button')!;

function add(a: number,b: number) {
  return a + b
}

type printMode = 'console' | 'alert'
enum OutputMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result)
  } else if (printMode === OutputMode.ALERT){
    alert(result)
  }
}

// const result = add(5,3)
// let isDone = false

// printResult(result)

interface CalculationContainer { 
  res: number, 
  print():  void 
}

type CalculationResults =  CalculationContainer[]

const results:Array<CalculationResults> = [];
const names = ['Hazem']

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name)
  }
} 

btn.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1,num2)
  const resultContaier = {
    res: result,
    print() {
      console.log(this.res)
    }
  };
  // results.push(resultContaier)
  // results.push(4)
  // results[0].print()
  printResult(result,OutputMode.CONSOLE)
  printResult(result,OutputMode.ALERT)
})

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>('Hi there!').split(' ')