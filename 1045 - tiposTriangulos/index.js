var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let valores = lines.map((item) => parseFloat(item));
let flag;

do {
  flag = false;
  for (let i = 0; i < valores.length - 1; i++) {
    if (valores[i] < valores[i + 1]) {
      let aux = valores[i];
      valores[i] = valores[i + 1];
      valores[i + 1] = aux;
      flag = true;
    }
  }
} while (flag);

let a = valores[0];
let b = valores[1];
let c = valores[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (a * a == b * b + c * c) {
    console.log("TRIANGULO RETANGULO");
  }
  if (a * a > b * b + c * c) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (a * a < b * b + c * c) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (a == b && a == c && b == c) {
    console.log("TRIANGULO EQUILATERO");
  }
  if ((a == b && a != c) || (b == c && b != a) || (a == c && a != b)) {
    console.log("TRIANGULO ISCOCELES");
  }
}
