const fs = require("fs");
const https = require("https");

console.log("Start");
const a = 12,
  b = 123;
https.get("https://dummyjson.com/products/1", (result) => {
  console.log("Fetched from server");
});

setTimeout(() => {
  console.log("setTimeout!");
}, 5000);

fs.readFile("sample.txt", "utf-8", (err, result) => {
  console.log(result);
});

function multiple(x, y) {
  const result = x * y;
  return result;
}

const c = multiple(a, b);
console.log(c);

console.log("End");
