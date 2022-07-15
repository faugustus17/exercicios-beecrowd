var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let linha = new Array(4);
let numero = 1;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < n; j++) {
    if (numero % 4 === 0) {
      linha.push("PUM");
    } else {
      linha.push(numero);
    }
    numero++;
    //console.log(linha);
  }
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < n; j++) {
    console.log(linha[i][j]);
  }
}
