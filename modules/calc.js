console.log("Calc Module...");

function sum(x, y) {
  const result = x + y;
  console.log(result);
}

function sub(x, y) {
  const result = x - y;
  console.log(result);
}

function myMain(x, y) {
  sum(x, y);
  sub(x, y);
}

if (require.main === module) {
  myMain(10, 20);
}

module.exports = { sum, sub };
