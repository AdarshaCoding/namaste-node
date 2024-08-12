const { log } = require("console");
const crypto = require("crypto");

console.log("Blocking the main thread!!");

let a = 10;
let b = 20;

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha256");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha256", (result) => {
  console.log("Key Generated");
});

setTimeout(() => {
  console.log("Execute ASAP");
}, 0);

function add(x, y) {
  const result = x + y;
  return result;
}

const c = add(a, b);
console.log("Addition results: ", c);
