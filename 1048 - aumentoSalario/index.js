var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let salario = parseFloat(lines.shift());
let reajuste;
let novoSalario;
let percentual;

if (salario >= 0 && salario <= 400) {
  percentual = 15;
} else if (salario > 400 && salario <= 800) {
  percentual = 12;
} else if (salario > 800 && salario <= 1200) {
  percentual = 10;
} else if (salario > 1200 && salario <= 2000) {
  percentual = 7;
} else if (salario > 2000) {
  percentual = 4;
} else {
  percentual = 0;
}

reajuste = parseFloat((salario * percentual) / 100);
novoSalario = parseFloat(salario + reajuste);
console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual + " %");
