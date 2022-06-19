var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

const delta = b ** 2 - 4 * a * c;

if (a != 0 && delta > 0.0) {
  const r1 = (-b + Math.sqrt(delta)) / (2 * a);
  const r2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log("R1= " + r1.toFixed(5));
  console.log("R2= " + r2.toFixed(5));
} else {
  console.log("Impossivel calcular");
}
