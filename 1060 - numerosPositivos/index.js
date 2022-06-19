var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let count = 0;

for (let i = 0; i < 6; i++) {
  let n = parseInt(lines.shift());
  if (n > 0) {
    count++;
  }
}
console.log(count + " valores positivos");
