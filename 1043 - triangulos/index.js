var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

const regra1 = Math.abs(b - c) < a;
const regra2 = Math.abs(a - c) < b;
const regra3 = Math.abs(a - b) < c;

if (regra1 && regra2 && regra3) {
  let perimetro = a + b + c;
  console.log("Perimetro = " + perimetro.toFixed(1));
} else {
  let area = ((a + b) * c) / 2;
  console.log("Area = " + area.toFixed(1));
}
