// const calc = require("./calc.js");
const { sum, sub } = require("./calc.js");
console.log("Main Modules...");

let a = 20;
let b = 20;

function myMain(x, y) {
  sum(x, y);
  sub(x, y);
}
console.log(require.main);
console.log(module);
if (require.main === module) {
  myMain(a, b);
}

/**
 * ---- CommonJS Module ---
 *
 */
