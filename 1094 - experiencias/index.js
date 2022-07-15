var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let linha;
let quantia = lines.shift().split(" ");
let tipo = lines.shift().split(" ");

for (let i = 0; i < n; i++) {
  console.log(linha);
  console.log(quantia);
  console.log(tipo);
}
