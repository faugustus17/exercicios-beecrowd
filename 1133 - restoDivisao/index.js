var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

if (y < x) {
  let aux = x;
  x = y;
  y = aux;
}

x = x + 1;
while (x != y) {
  if (x % 5 === 2 || x % 5 === 3) {
    console.log(x);
  }
  x++;
}
