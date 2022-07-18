var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let linha;
let gremio;
let inter;
let opt = 1;
let count = 0;
let vitGremio = 0;
let vitInter = 0;
let empate = 0;

while (opt == 1) {
  linha = lines.shift().split(" ");
  inter = parseInt(linha[0]);
  gremio = parseInt(linha[1]);
  opt = parseInt(lines.shift());

  count++;

  if (gremio > inter) {
    vitGremio++;
  }
  if (gremio < inter) {
    vitInter++;
  }
  if (gremio == inter) {
    empate++;
  }
  console.log("Novo grenal (1-sim 2-nao)");
}
console.log(count + " grenais");
console.log("Inter:" + vitInter);
console.log("Gremio:" + vitGremio);
console.log("Empates:" + empate);
if (vitGremio > vitInter) {
  console.log("Gremio venceu mais");
} else if (vitGremio < vitInter) {
  console.log("Inter venceu mais");
} else if (vitGremio == vitInter) {
  console.log("Nao houve vencedor");
}
