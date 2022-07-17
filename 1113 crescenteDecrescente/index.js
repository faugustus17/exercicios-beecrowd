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

  if (x > y) {
    console.log("Decrescente");
    count++;
  }
  if (x < y) {
    console.log("Crescente");
    count++;
  }
  if (x == y) {
    count = total;
  }
}
