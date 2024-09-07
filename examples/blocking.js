const crypto = require("crypto");

console.log("Start");

const key = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key Generated", key);

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key Generated", key);
});

function add(x, y) {
  const result = x + y;
  return result;
}
c = add(10, 40);
console.log("Added results: ", c);
console.log("End");
