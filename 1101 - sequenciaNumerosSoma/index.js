var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let a = lines.shift().split(" ");
let x = parseInt(a[0]);
let y = parseInt(a[1]);
let v = "";

if (x > y) {
  let aux = y;
  y = x;
  x = aux;
}

let soma = 0;
while (x > 0 && y > 0) {
  for (let i = x; i <= y; i++) {
    soma += i;
    v += i + " ";
  }
  console.log(v + "Sum=" + soma);

  a = lines.shift().split(" ");
  x = parseInt(a[0]);
  y = parseInt(a[1]);

  if (x > y) {
    let aux = y;
    y = x;
    x = aux;
  }
  soma = 0;
  v = "";
}
