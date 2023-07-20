function getMin(Numbers) {
  if (!Numbers) {
    throw new Error("can not be empty array");
  }

  let currentMin = Numbers[0];
  for (let i = 1; i < Numbers.length; i++) {
    if (Numbers[i] < currentMin) {
      currentMin = Numbers[i];
    }
  }

  return currentMin;
}
// T = n => Linear time complixty => O(n)


function getMin2(Numbers) {
  if (!Numbers) {
    throw new Error("can not be empty array");
  }

  for (let i = 0; i < Numbers.length; i++) {
    let outerEl = Numbers[i];
    for (let j = i + 1; j < Numbers.length; j++) {
      let innerEl = Numbers[j];

      if (outerEl > innerEl) {
        // swap
        Numbers[i] = innerEl;
        Numbers[j] = outerEl;

        outerEl = Numbers[i];
        innerEl = Numbers[j];
      }
    }
  }

  return Numbers[0];
}
// Quadratic time complixty => n*n => O(n^2)


const testNumnbers = [3, 1, 2];

const min = getMin2(testNumnbers);

console.log(min);
