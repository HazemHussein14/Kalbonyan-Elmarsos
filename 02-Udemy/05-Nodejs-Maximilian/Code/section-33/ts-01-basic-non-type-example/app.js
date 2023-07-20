"use strict";
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const btn = document.querySelector("button");
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    const num1 = num1El.value;
    const num2 = num2El.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    numResults.push(result);
    printResult({ val: result, timestamp: new Date() });
    console.log(textResults, numResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
