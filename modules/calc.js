function main() {
  console.log("Calc Module...");
  console.log("Expresion:", 2 + 2);
  sum(10, 40);
  sub(30, 50);
}
function test() {
  console.log("Calc... test function()");
}

function sum(x, y) {
  const result = x + y;
  console.log(result);
}

function sub(x, y) {
  const result = x - y;
  console.log(result);
}

if (require.main === module) {
  main();
}

test();
module.exports = { sum, sub };
