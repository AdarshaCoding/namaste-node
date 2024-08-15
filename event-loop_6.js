const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

Promise.resolve(
  setTimeout(() => {
    Promise.resolve(
      process.nextTick(() => console.log("nextTick Inside Promise"))
    );
  }, 0)
);

Promise.resolve("2nd Resolve").then((res) => console.log(res));

process.nextTick(() => console.log("1st nextTick"));

process.nextTick(() => {
  process.nextTick(() =>
    Promise.resolve("Promise Inside nextTick").then((res) => console.log(res))
  );

  console.log("2nd nextTick");
});

setTimeout(() => console.log("setTimeout"), 0);

console.log("Last line of the code!");

/**
 * 1st nextTick
 * 2nd nextTick
 * Inner nextTick
 * Promise
 * nextTick Inside Promise
 * Promise Inside nextTick
 * Rejected!
 * Promise Inside nextTick
 * setTimeout
 * setImmediate
 */
