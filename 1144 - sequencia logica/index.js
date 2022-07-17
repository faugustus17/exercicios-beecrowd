var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  console.log(i + " " + i * i + " " + i * i * i);
  console.log(i + " " + (i * i + 1) + " " + (i * i * i + 1));
}
