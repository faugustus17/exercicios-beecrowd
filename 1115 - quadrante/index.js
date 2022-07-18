var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let linha;
let x;
let y;
let count = 0;
let total = lines.length;

while (count < total) {
  linha = lines.shift().split(" ");
  x = parseInt(linha[0]);
  y = parseInt(linha[1]);

  if (x > 0 && y > 0) {
    console.log("primeiro");
    count++;
  }
  if (x < 0 && y > 0) {
    console.log("segundo");
    count++;
  }
  if (x < 0 && y < 0) {
    console.log("terceiro");
    count++;
  }
  if (x > 0 && y < 0) {
    console.log("quarto");
    count++;
  }
  if (x == 0 || y == 0) {
    count = total;
  }
}
