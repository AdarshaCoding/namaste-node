const { add, sub } = require("./calculator");
const data = require("./data.json");

var name = "Namaste NodeJS";
console.log(name);

console.log("Mock Data", data);

let a = 20,
  b = 10;

add(a, b);
sub(a, b);
