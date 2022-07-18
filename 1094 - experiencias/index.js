var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let linha = "";
let quantia = 0;
let tipo = "";
let count = 0;
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;
let percentualCoelhos = 0.0;
let percentualRatos = 0.0;
let percentualSapos = 0.0;

while (count != n) {
  linha = lines.shift().split(" ");
  quantia = parseInt(linha[0]);
  tipo = linha[1].trim("\r");

  totalCobaias += quantia;

  if (tipo == "C") {
    totalCoelhos += quantia;
  }
  if (tipo == "R") {
    totalRatos += quantia;
  }
  if (tipo == "S") {
    totalSapos += quantia;
  }

  count++;
}
percentualCoelhos = (totalCoelhos * 100) / totalCobaias;
percentualRatos = (totalRatos * 100) / totalCobaias;
percentualSapos = (totalSapos * 100) / totalCobaias;
console.log("Total: " + totalCobaias + " cobaias");
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Total de sapos: " + totalSapos);
console.log("Percentual de coelhos: " + percentualCoelhos.toFixed(2) + " %");
console.log("Percentual de ratos: " + percentualRatos.toFixed(2) + " %");
console.log("Percentual de sapos: " + percentualSapos.toFixed(2) + " %");
