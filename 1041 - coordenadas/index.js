var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

const x = parseFloat(lines.shift());
const y = parseFloat(lines.shift());

if (x === 0.0 && y === 0.0) {
  console.log("Origem");
} else if (y === 0.0) {
  console.log("Eixo X");
} else if (x === 0.0) {
  console.log("Eixo Y");
} else if (x > 0 && y > 0) {
  console.log("Q1");
} else if (x < 0 && y > 0) {
  console.log("Q2");
} else if (x < 0 && y < 0) {
  console.log("Q3");
} else if (x > 0 && y < 0) {
  console.log("Q4");
}
