console.log("start");

setTimeout(() => {
  console.log("1st setTimeout 0");
}, 100);

setTimeout(() => {
  console.log("2nd setTimeout 0");
});

setTimeout(() => {
  console.log("setTimeout 200");
}, 200);

console.log("End!");
