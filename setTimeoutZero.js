console.log("setTimeoutZero sample!");
let a = 10;
let b = 20;

setTimeout(() => {
  console.log("Execute after 3 seconds");
}, 3000);

setTimeout(() => {
  console.log("Execute right now!");
}, 0);
function add(x, y) {
  const result = x + y;
  return result;
}

const c = add(a, b);
console.log("Addition Results: ", c);
