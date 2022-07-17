var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let a;
let x;
let y;

for (let i = 0; i < n; i++) {
  a = lines[i].split(" ");
  x = parseFloat(a[0]);
  y = parseFloat(a[1]);

  if (y == 0) {
    console.log("divisao impossivel");
  } else {
    console.log((x / y).toFixed(1));
  }
}
