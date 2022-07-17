var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (n != 4) {
  if (n === 1) {
    alcool++;
  }
  if (n === 2) {
    gasolina++;
  }
  if (n === 3) {
    diesel++;
  }
  n = parseInt(lines.shift());
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);
