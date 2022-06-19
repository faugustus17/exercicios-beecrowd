var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let notas = lines.shift().split(" ");

let notaExame = parseFloat(lines.shift());
let nota = [];

for (let i = 0; i < 4; i++) {
  nota[i] = parseFloat(notas.shift());
}

let media = (nota[0] * 2 + nota[1] * 3 + nota[2] * 4 + nota[3]) / 10;
let mediaFinal = (media + notaExame) / 2;

if (media >= 7.0) {
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno aprovado.");
} else if (media >= 5.0 && media < 7.0) {
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + notaExame.toFixed(1));
  mediaFinal >= 5.0
    ? console.log("Aluno aprovado.")
    : console.log("Aluno reprovado.");
  console.log("Media final: " + mediaFinal.toFixed(1));
} else {
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno reprovado.");
}
