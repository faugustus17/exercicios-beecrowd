var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let count = 0;
let soma = 0;
let media = 0;

for (let i = 0; i < 6; i++) {
  let n = parseFloat(lines.shift());
  if (n > 0) {
    count++;
    soma = soma + n;
  }
}
media = soma / count;
console.log(count + " valores positivos");
console.log(media.toFixed(1));
