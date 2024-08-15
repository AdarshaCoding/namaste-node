const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then((res) => console.log(res));
process.nextTick(() => console.log("nextTick"));

fs.readFile("file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd TimeOut"), 0);
  setImmediate(() => console.log("2nd setImmediate"));
  process.nextTick(() => console.log("2nd nextTick"));
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log(" Inner nextTick"));
  console.log("Outer nextTick");
});

setTimeout(() => console.log("setTimeout"), 0);

function printA() {
  console.log("a = " + a);
}
printA();
console.log("Last line of the code!");

/**
 * a = 100
 * Last line of the code!
 * nextTick
 * Outer nextTick
 * Inner nextTick
 * Promise
 * setTimeout
 * setImmediate
 * File Reading CB
 * 2nd nextTick
 * 2nd setImmediate
 * 2nd setTimeout
 */
