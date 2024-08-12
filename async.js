const fs = require("fs");
const https = require("https");

console.log("Executing Async and Synchronous Code!");

let a = 10;
let b = 20;

// https
//   .get("https://dummyjson.com/products/1", (result) => {
//     console.log("Succefully fetched!", result.statusCode);
//     console.log("Headers", result.headers);
//     result.on("data", (data) => {
//       process.stdout._write(data);
//     });
//   })
//   .on("erorr", (e) => {
//     console.log("Handled Error: ", e);
//   });

// setTimeout(() => {
//   console.log("setTimeout!");
// }, 5000);

// fs.readFile("./file.txt", "utf8", (error, data) => {
//   console.log("File data : ", data);
// });

function addition(x, y) {
  const result = x + y;
  return result;
}

const c = addition(a, b);
console.log("Addition results: " + c);
