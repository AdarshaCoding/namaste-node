const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha256", (result) => {
  console.log("1 - Key Generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha256", (result) => {
  console.log("2 - Key Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha256", (result) => {
  console.log("3 - Key Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha256", (result) => {
  console.log("4 - Key Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha256", (result) => {
  console.log("5 - Key Generated");
});
