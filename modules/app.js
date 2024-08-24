const { sub } = require("./calculate/sub");
const { sum } = require("./calculate/sum");
console.log("Main Modules...");

let a = 20;
let b = 30;

sum(a, b);
sub(a, b);

/**
 * ---- CommonJS Module (CJS Module) ---
 * required/imported the module "calc" in app.js using require key
 * .js extension is optional in CJS
 * runs synchronously
 * package.json - by default "type" :"commanJS"
 * code runs in "non strict" mode -
 *     - let name = "Adarsha"
 *     - city = "Bengaluru"  // this is also fine but not in strict mode (ESM/MJS uses)
 */
