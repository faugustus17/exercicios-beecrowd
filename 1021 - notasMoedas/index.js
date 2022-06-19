var input = require("fs").readFileSync("index.txt", "utf8");
var lines = parseFloat(input.split("\n")).toFixed(2);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let nota of notas) {
  console.log(parseInt(lines / nota) + " nota(s) de R$ " + nota.toFixed(2));
  lines = lines % nota;
}
console.log("MOEDAS:");
for (let moeda of moedas) {
  console.log(parseInt(lines / moeda) + " moeda(s) de R$ " + moeda.toFixed(2));
  lines = (lines % moeda).toFixed(2);
}
