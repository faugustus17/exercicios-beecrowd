var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let str = "";
let x = 0;

for (let index = 0; index < n; index++) {
  x = parseInt(lines[index]);
  if (x === 0) {
    console.log("NULL");
  } else {
    if (x % 2 === 0) {
      str = "EVEN";
    } else {
      str = "ODD";
    }
    if (x > 0) {
      console.log(str + " POSITIVE");
    }
    if (x < 0) {
      console.log(str + " NEGATIVE");
    }
  }
}
