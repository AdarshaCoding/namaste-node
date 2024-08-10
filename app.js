// const calc = require("./calc.js");
// const { add, sub, name1 } = require("./calc");
import { add, sub, name1 } from "./calc.js";

var name = "Namaste NodeJS";
var a = 10;
var b = 20;

console.log(name);
console.log(a + b);
console.log(global == globalThis);

// calc.add(a, b);
// calc.sub(a, b);

add(a, b);
sub(a, b);
console.log(name1);
