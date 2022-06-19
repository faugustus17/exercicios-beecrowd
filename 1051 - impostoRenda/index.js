var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let salario = parseFloat(lines.shift());
let imposto;

if (salario >= 0 && salario <= 2000) {
  console.log("Isento");
} else {
  if (salario > 2000 && salario <= 3000) {
    salario = salario - 2000;
    imposto = (salario * 8) / 100;
  } else if (salario > 3000 && salario <= 4500) {
    salario = salario - 3000;
    imposto = (1000 * 8) / 100;
    imposto = imposto + (salario * 18) / 100;
  } else if (salario > 4500) {
    salario = salario - 4500;
    imposto = (1000 * 8) / 100;
    imposto = imposto + (1500 * 18) / 100;
    imposto = imposto + (salario * 28) / 100;
  }
  console.log("R$ " + imposto.toFixed(2));
}
