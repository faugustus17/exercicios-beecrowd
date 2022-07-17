var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let nota;
let count = 0;
let total = 0;
let media;

while (count < 2) {
  nota = parseFloat(lines.shift());
  if (nota >= 0 && nota <= 10) {
    total += nota;
    count++;
  } else {
    console.log("nota invalida");
  }
}
media = (total / count).toFixed(2);
console.log("media = " + media);
