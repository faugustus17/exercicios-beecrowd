var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let x = 0;
let y = 0;
let a;

for (let i = 0; i < n; i++) {
  a = lines[i].split(" ");
  x = parseInt(a[0]);
  y = parseInt(a[1]);

  if (x > y) {
    let aux = y;
    y = x;
    x = aux;
  }

  var soma = 0;

  for (let j = x + 1; j < y; j++) {
    if (j % 2 != 0) {
      soma += j;
    }
  }

  console.log(parseInt(soma));
}
