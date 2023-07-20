const num1El = document.getElementById("num1") as HTMLInputElement;
const num2El = document.getElementById("num2") as HTMLInputElement;
const btn = document.querySelector("button");

const numResults: Array<number> = [];
const textResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: Result) {
  console.log(resultObj.val);
}

btn?.addEventListener("click", () => {
  const num1 = num1El.value;
  const num2 = num2El.value;
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  numResults.push(result as number);
  printResult({ val: result as number, timestamp: new Date() });
  console.log(textResults, numResults);
});

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split('w'));
});
