console.log("Executing Synchronous Code!");

let a = 30;
let b = 50;

function addition(x, y) {
  const result = x + y;
  return result;
}

const c = addition(a, b);
console.log("Result: " + c);
