function add(a, b) {
  const result = a + b;
  console.log(result);
}

function sub(a, b) {
  const result = a - b;
  console.log(result);
}

var name1 = "Adarsha";

console.log(module.exports); //Empty JS Object

module.exports.add = add;
module.exports.sub = sub;
module.exports.name1 = name1;

// module.exports = { add, sub, name1 };
// module.exports = { add: add, sub: sub };
