var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let valores = lines.map((item) => parseInt(item));
let valOriginal = lines.map((item) => parseInt(item));

let flag;

do {
  flag = false;
  for (let i = 0; i < valores.length - 1; i++) {
    if (valores[i] > valores[i + 1]) {
      let aux = valores[i];
      valores[i] = valores[i + 1];
      valores[i + 1] = aux;
      flag = true;
    }
  }
} while (flag);
for (let i = 0; i < valores.length; i++) {
  console.log(valores[i]);
}
console.log();
for (let i = 0; i < valOriginal.length; i++) {
  console.log(valOriginal[i]);
}
