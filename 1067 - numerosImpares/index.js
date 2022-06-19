var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());

for (let i = 1; i <= x; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
